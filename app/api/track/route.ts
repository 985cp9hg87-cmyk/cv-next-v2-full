import { NextResponse } from "next/server";
import { getSB } from "../../../lib/sb";

export async function POST(req: Request) {
  const sb = getSB();
  if (!sb) {
    return NextResponse.json(
      { ok: false, error: "no-supabase" },
      { status: 500 }
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid-json" },
      { status: 400 }
    );
  }

  // (removed debug logging)

  const {
    type,
    label,
    path,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
  } = body || {};

  if (!type) {
    return NextResponse.json(
      { ok: false, error: "missing-type" },
      { status: 400 }
    );
  }

  // Inserta en public.events con las columnas esperadas
  const { error } = await sb.from("events").insert({
    type,
    label,
    path,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}