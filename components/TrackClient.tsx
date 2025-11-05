"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function getUTMs(search: URLSearchParams) {
  return {
    utm_source: search.get("utm_source") || "",
    utm_medium: search.get("utm_medium") || "",
    utm_campaign: search.get("utm_campaign") || ""
  };
}

async function send(type: string, label?: string) {
  try {
    const path = window.location.pathname + window.location.search;
    const referrer = document.referrer || "";
    const utms = getUTMs(new URLSearchParams(window.location.search));
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, label, path, referrer, ...utms }),
      keepalive: true,
    });
  } catch {}
}

export default function TrackClient(){
  const pathname = usePathname();
  const search = useSearchParams();

  // pageview on route change
  useEffect(()=>{ send("pageview"); }, [pathname, search]);

  // click tracking: elements with data-cta
  useEffect(()=>{
    const handler = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest("a,button") as HTMLElement | null;
      if(!el) return;
      const explicit = el.getAttribute("data-cta");
      let label = explicit || "";
      if(!label && el instanceof HTMLAnchorElement) {
        const href = el.getAttribute("href") || "";
        if(href.startsWith("mailto:")) label = "email";
        else if(href.includes("wa.me")) label = "wsp";
        else if(href.includes("#agenda")) label = "agenda";
      }
      if(label) send("cta_click", label);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
