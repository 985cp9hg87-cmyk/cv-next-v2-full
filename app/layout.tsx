import type { Metadata } from "next";
import TrackClient from "../components/TrackClient";

export const metadata: Metadata = {
  title: "CV de José Luis",
  description: "CV con métricas, CTAs y Supabase"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, minHeight: "100dvh", overflowX: "clip", backgroundColor: "#0b1321", backgroundImage: "radial-gradient(circle at 15% 15%, rgba(14, 165, 233, 0.08) 0%, transparent 50%), radial-gradient(circle at 85% 85%, rgba(34, 211, 238, 0.05) 0%, transparent 50%)", backgroundAttachment: "fixed" }}>
        <TrackClient />
        {children}
      </body>
    </html>
  );
}
