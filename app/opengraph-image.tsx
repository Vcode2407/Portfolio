import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vinay Kumar - Distributed Systems Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090a0b",
          color: "#f4f0e6",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            color: "#4fd1c5",
            fontSize: 26
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              border: "1px solid rgba(79, 209, 197, 0.45)",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            VK
          </div>
          Distributed Systems - Backend - AI Infrastructure
        </div>
        <div>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: 0 }}>Vinay Kumar</div>
          <div style={{ marginTop: 24, fontSize: 34, lineHeight: 1.35, color: "#b9b0a2", maxWidth: 900 }}>
            Software Engineer focused on distributed systems, open source, and high-throughput backend platforms.
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 25, color: "#f5b04c" }}>
          <span>100,000+ jobs/day</span>
          <span>1,200+ req/min</span>
          <span>2 OSS contributions</span>
        </div>
      </div>
    ),
    size
  );
}
