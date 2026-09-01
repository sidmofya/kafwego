import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Kafwego — exploration-stage copper-gold project, Greater Lufilian Arc, northwestern Zambia";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17191C",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            KAFWEGO
          </span>
          <span style={{ color: "#C97848", fontSize: 30, fontWeight: 500 }}>Project</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 3, background: "#A95A33", marginBottom: 34 }} />
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 62,
              lineHeight: 1.15,
              fontWeight: 300,
              maxWidth: 940,
            }}
          >
            Testing a copper-gold system in Zambia&rsquo;s Greater Lufilian Arc
          </div>
        </div>

        <div style={{ display: "flex", gap: 44, color: "#8B9099", fontSize: 25 }}>
          <span>5 priority targets</span>
          <span>750 m RC proof of concept</span>
          <span>Exploration stage</span>
        </div>
      </div>
    ),
    size,
  );
}
