"use client";
import { useEffect, useState } from "react";
export default function Dashboard(){
  const [data,setData] = useState<any>(null);
  useEffect(()=>{ fetch("/api/metrics").then(r=>r.json()).then(setData).catch(()=>setData({ok:false})); },[]);
  if(!data) return <main style={{padding:20}}>Cargando…</main>;
  if(!data.ok) return <main style={{padding:20}}>Aún sin RPC/ datos.</main>;
  return (
    <main style={{padding:20}}>
      <h1>Dashboard</h1>
      <h2>Visitantes diarios</h2>
      <pre>{JSON.stringify(data.visitors,null,2)}</pre>
      <h2>CTR por CTA y día</h2>
      <pre>{JSON.stringify(data.ctr,null,2)}</pre>
      <h2>Conversión por UTM source</h2>
      <pre>{JSON.stringify(data.conv,null,2)}</pre>
    </main>
  );
}
