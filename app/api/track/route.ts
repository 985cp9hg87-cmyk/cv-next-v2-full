import { NextResponse } from "next/server";
import { getSB } from "../../../lib/sb";

export async function POST(req: Request){
  const sb = getSB();
  const body = await req.json().catch(()=>({} as any));
  const { type, label, path, referrer, utm_source, utm_medium, utm_campaign } = body || {};
  if(!type) return NextResponse.json({ ok:false, error:"missing type" }, { status:400 });
  if(!sb) return NextResponse.json({ ok:true, stored:false, reason:"no-supabase" });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "";
  const user_agent = req.headers.get("user-agent") || "";

  const { error } = await sb.from("events").insert({
    type, label, path, referrer, utm_source, utm_medium, utm_campaign, ip, user_agent
  });
  if(error) return NextResponse.json({ ok:true, stored:false, error:error.message });
  return NextResponse.json({ ok:true, stored:true });
}
