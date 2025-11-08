
import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL as string | undefined;
const key = process.env.SUPABASE_SERVICE_ROLE as string | undefined;

export function getSB() {
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
