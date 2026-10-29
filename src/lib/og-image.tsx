import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const OG_SIZE = { width: 1200, height: 630 };

// Shared 1200x630 share-card renderer for the opengraph-image routes: brand logo, an optional
// big stat (case studies lead with their headline number), a headline, and a subline.
export async function renderOgImage({ headline, stat, subline }: { headline: string; stat?: string; subline: string }) {
  const logo = await readFile(path.join(process.cwd(), "public", "logos", "white.svg"), "utf8");
  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logo).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0E0E0C 0%, #0E0E0C 55%, #2E1065 100%)",
          color: "#FFFFFF",
        }}
      >
        {/* viewBox is 1517x413 */}
        <img src={logoSrc} width={330} height={90} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {stat && <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1, color: "#C4B5FD", marginBottom: 16 }}>{stat}</div>}
          <div style={{ fontSize: stat ? 52 : 64, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 1000 }}>{headline}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#C4B5FD" }}>{subline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.6)" }}>www.spaciva.tech</div>
      </div>
    ),
    OG_SIZE
  );
}
