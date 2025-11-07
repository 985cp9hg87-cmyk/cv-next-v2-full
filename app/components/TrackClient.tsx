"use client";

import { useEffect } from "react";

export function TrackClient() {
  // pageview
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "pageview",
        label: "view",
        path: window.location.pathname,
      }),
    }).catch(() => {});
  }, []);

  // clicks en CTAs
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a[data-cta]") as HTMLAnchorElement | null;
      if (!link) return;

      const label = link.getAttribute("data-cta") || "cta";
      const path = window.location.pathname;

      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cta_click",
          label,
          path,
        }),
      }).catch(() => {});
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}