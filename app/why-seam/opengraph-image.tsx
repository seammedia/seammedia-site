import { ImageResponse } from "next/og";

export const alt = "Why Seam? Experienced marketing support without the full-time salary. Packages from $140 a week plus GST.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function WhySeamImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "55px 65px", background: "#09090b", color: "white", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#f472b6" }}>SEAM MEDIA / WHY SEAM?</div>
      <div style={{ display: "flex", marginTop: 50, fontSize: 74, fontWeight: 700 }}>Your marketing.</div>
      <div style={{ display: "flex", fontSize: 74, fontWeight: 700, color: "#f472b6" }}>Without the full-time salary.</div>
      <div style={{ display: "flex", marginTop: 35, fontSize: 28, color: "#a1a1aa" }}>Compare the cost of hiring with experienced marketing support.</div>
      <div style={{ display: "flex", marginTop: 40, fontSize: 30, fontWeight: 700 }}>Packages from $140 / week + GST</div>
      <div style={{ display: "flex", marginTop: 12, fontSize: 21, color: "#a1a1aa" }}>Billed weekly. Agreed scope. Ad spend separate.</div>
    </div>, size,
  );
}
