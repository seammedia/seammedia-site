import type { Metadata } from "next";
import { ServiceStructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";

const title = "Graphic Design Melbourne | Seam Media";
const description =
  "Graphic design for Australian businesses, including logos, packaging, brand assets, social content and marketing materials built around your identity.";
const path = "/graphic-design";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "graphic design Melbourne",
    "logo design Australia",
    "business branding assets",
  ],
});

export default function GraphicDesignLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ServiceStructuredData name="Graphic Design" description={description} path={path} />
      {children}
    </>
  );
}
