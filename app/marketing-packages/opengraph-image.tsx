import { ImageResponse } from "next/og";

export const alt = "Seam Media marketing packages: Foundation $140, Growth $235 and Complete Growth $350 per week, billed weekly plus GST.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function MarketingPackagesImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#09090b", color: "white", padding: "36px 48px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", color: "#ec4899", fontSize: 23, letterSpacing: 7 }}>SEAM MEDIA</div>
      <div style={{ display: "flex", fontSize: 44, fontWeight: 700, marginTop: 16 }}>Start with the basics.</div>
      <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#ec4899" }}>Grow when you’re ready.</div>
      <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
        {[
          ["Foundation", "$140", "Basic website + socials"],
          ["Growth", "$235", "Local SEO + Google OR Meta Ads"],
          ["Complete Growth", "$350", "Website, socials, SEO + both ads"],
        ].map(([name, weekly, scope]) => (
          <div key={name} style={{ display: "flex", flexDirection: "column", flex: 1, padding: 18, background: "#18181b", border: "1px solid #3f3f46", borderRadius: 20 }}>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 700 }}>{name}</div>
            <div style={{ display: "flex", fontSize: 38, fontWeight: 700, marginTop: 12, color: "#ec4899" }}>{weekly}</div>
            <div style={{ display: "flex", fontSize: 17, color: "#a1a1aa" }}>per week</div>
            <div style={{ display: "flex", fontSize: 17, color: "#a1a1aa", marginTop: 10 }}>{scope}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", fontSize: 18, color: "#a1a1aa", marginTop: 16 }}>AUD + GST. Billed weekly. Ad spend separate.</div>
    </div>,
    size,
  );
}
