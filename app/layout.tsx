import type { Metadata } from "next";
import TrackClient from "../components/TrackClient";

export const metadata: Metadata = {
  title: "CV de José Luis",
  description: "CV con métricas, CTAs y Supabase"
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="es">
      <body style={{margin:0, minHeight:"100dvh", overflowX:"clip", background:"#0e1420"}}>
        <TrackClient />
        {children}
      </body>
    </html>
  );
}
