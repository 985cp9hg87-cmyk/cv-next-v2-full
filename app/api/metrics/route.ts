import { NextResponse } from "next/server";
import { getSB } from "../../../lib/sb";

export async function GET(){
  try{
    const sb = getSB();
    if(!sb) return NextResponse.json({ ok:false, error:"no-supabase" }, { status:500 });
    const { data: visitors, error: e1 } = await sb.rpc("metrics_daily_visitors");
    const { data: ctr, error: e2 } = await sb.rpc("metrics_ctr_by_day");
    const { data: conv, error: e3 } = await sb.rpc("metrics_conv_by_source");
    if(e1 || e2 || e3) throw (e1 || e2 || e3);
    return NextResponse.json({ ok:true, visitors, ctr, conv });
  }catch(err:any){
    return NextResponse.json({ ok:false, error:String(err) }, { status:500 });
  }
}
