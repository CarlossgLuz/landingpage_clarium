import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#060b0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid dots bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(34,197,94,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(34,197,94,0.2) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Logo mark */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 16px rgba(34,197,94,0.6)",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#f0fdf4",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(240,253,244,0.5)",
            letterSpacing: "-0.5px",
          }}
        >
          Finanças simples. Vida clara.
        </div>
        {/* Badges */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
          }}
        >
          {["100% Grátis", "Offline", "Local-first", "Android"].map((b) => (
            <div
              key={b}
              style={{
                padding: "8px 18px",
                borderRadius: 20,
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "#4ade80",
                fontSize: 16,
                fontFamily: "monospace",
                letterSpacing: "0.5px",
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
