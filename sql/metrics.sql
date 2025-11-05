create extension if not exists pgcrypto;
alter table public.events
  add column if not exists path text,
  add column if not exists referrer text,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists visitor_id text,
  add column if not exists session_id text;
create index if not exists idx_events_created_at on public.events (created_at);
create index if not exists idx_events_type on public.events (type);
create index if not exists idx_events_label on public.events (label);
create index if not exists idx_events_path on public.events (path);

create or replace function public.metrics_daily_visitors()
returns table(day timestamptz, uniq_visitors bigint)
language sql as $$
  select date_trunc('day', created_at) as day,
         count(distinct coalesce(visitor_id, ip || '|' || user_agent)) as uniq_visitors
  from public.events where type='pageview'
  group by 1 order by 1 desc
$$;

create or replace function public.metrics_ctr_by_day()
returns table(day timestamptz, path text, label text, clicks bigint, pageviews bigint, ctr_pct numeric)
language sql as $$
  with pv as (
    select date_trunc('day', created_at) d, path, count(*) pv
    from public.events where type='pageview' group by 1,2
  ),
  ck as (
    select date_trunc('day', created_at) d, path, label, count(*) clicks
    from public.events where type='cta_click' group by 1,2,3
  )
  select ck.d, ck.path, ck.label, ck.clicks, coalesce(pv.pv,0) pageviews,
         round(100.0*ck.clicks/nullif(pv.pv,0),2) ctr_pct
  from ck left join pv on pv.d=ck.d and pv.path=ck.path
  order by ck.d desc, ck.clicks desc
$$;

create or replace function public.metrics_conv_by_source()
returns table(utm_source text, pageviews bigint, leads bigint, conv_pct numeric)
language sql as $$
  with pv as (
    select utm_source, count(*) pv from public.events where type='pageview' group by 1
  ),
  lead as (
    select utm_source, count(*) leads
    from public.events where type='cta_click' and label in ('email','wsp','agenda')
    group by 1
  )
  select coalesce(lead.utm_source, pv.utm_source) utm_source,
         coalesce(pv.pv,0) pageviews,
         coalesce(lead.leads,0) leads,
         round(100.0*coalesce(lead.leads,0)/nullif(pv.pv,0),2) conv_pct
  from pv full join lead using (utm_source) order by conv_pct desc nulls last
$$;
