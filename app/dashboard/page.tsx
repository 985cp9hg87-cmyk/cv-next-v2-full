// app/dashboard/page.tsx
async function getMetrics() {
  // En local usamos localhost; en producción puedes usar una base URL
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${base}/api/metrics`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      ok: false,
      error: `HTTP ${res.status}`,
    };
  }

  const data = await res.json();
  return data;
}

export default async function DashboardPage() {
  const data = await getMetrics();

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "32px 24px 48px",
        background: "#020817", // mismo tono oscuro que tu CV
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Dashboard
        </h1>

        {!data?.ok && (
          <div
            style={{
              padding: "12px 16px",
              marginBottom: "24px",
              borderRadius: "8px",
              background: "#111827",
              border: "1px solid #b91c1c",
              color: "#fecaca",
              fontSize: "14px",
            }}
          >
            Error cargando métricas: {String(data?.error || "desconocido")}
          </div>
        )}

        {data?.ok && (
          <>
            {/* Visitantes diarios */}
            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                Visitantes diarios
              </h2>
              {(!data.visitors || data.visitors.length === 0) && (
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.7,
                  }}
                >
                  Aún no hay visitas registradas.
                </p>
              )}
              {data.visitors && data.visitors.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {data.visitors.map((v: any, i: number) => (
                    <div
                      key={i}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "8px",
                        background: "#030712",
                        border: "1px solid #111827",
                        fontSize: "12px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          opacity: 0.7,
                          marginBottom: "4px",
                        }}
                      >
                        {new Date(v.day).toLocaleDateString()}
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        {v.uniq_visitors}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          opacity: 0.7,
                        }}
                      >
                        usuarios únicos
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* CTR por CTA y día */}
            <section style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                CTR por CTA y día
              </h2>
              {(!data.ctr || data.ctr.length === 0) && (
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.7,
                  }}
                >
                  Aún sin clics suficientes en tus CTAs.
                </p>
              )}
              {data.ctr && data.ctr.length > 0 && (
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "12px",
                    background: "#030712",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid #111827",
                  }}
                >
                  <thead
                    style={{
                      background: "#020817",
                      textAlign: "left",
                    }}
                  >
                    <tr>
                      <th style={{ padding: "8px 10px" }}>Día</th>
                      <th style={{ padding: "8px 10px" }}>CTA</th>
                      <th style={{ padding: "8px 10px" }}>Clicks</th>
                      <th style={{ padding: "8px 10px" }}>Pageviews</th>
                      <th style={{ padding: "8px 10px" }}>CTR %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.ctr.map((c: any, i: number) => (
                      <tr
                        key={i}
                        style={{
                          borderTop: "1px solid #111827",
                        }}
                      >
                        <td style={{ padding: "6px 10px" }}>
                          {new Date(c.day).toLocaleDateString()}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {c.label || "-"}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {c.clicks}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {c.pageviews}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {c.ctr_pct ?? "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>

            {/* Conversión por fuente */}
            <section>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "10px",
                }}
              >
                Conversión por fuente (UTM)
              </h2>
              {(!data.conv || data.conv.length === 0) && (
                <p
                  style={{
                    fontSize: "13px",
                    opacity: 0.7,
                  }}
                >
                  Aún sin leads suficientes para calcular conversión.
                </p>
              )}
              {data.conv && data.conv.length > 0 && (
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "12px",
                    background: "#030712",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid #111827",
                  }}
                >
                  <thead
                    style={{
                      background: "#020817",
                      textAlign: "left",
                    }}
                  >
                    <tr>
                      <th style={{ padding: "8px 10px" }}>Fuente</th>
                      <th style={{ padding: "8px 10px" }}>Pageviews</th>
                      <th style={{ padding: "8px 10px" }}>Leads</th>
                      <th style={{ padding: "8px 10px" }}>Conv %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.conv.map((r: any, i: number) => (
                      <tr
                        key={i}
                        style={{
                          borderTop: "1px solid #111827",
                        }}
                      >
                        <td style={{ padding: "6px 10px" }}>
                          {r.utm_source ?? "(none)"}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {r.pageviews}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {r.leads}
                        </td>
                        <td style={{ padding: "6px 10px" }}>
                          {r.conv_pct ?? "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}