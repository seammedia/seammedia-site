import type { Metadata } from "next";
import { ServiceStructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";

const title = "Website Design Melbourne | Seam Media";
const description =
  "High-converting website design for Australian businesses, from lead-generation websites to e-commerce and custom digital experiences.";
const path = "/web-design";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "website design Melbourne",
    "web design agency Australia",
    "business website design",
  ],
});

export default function WebDesignLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ServiceStructuredData name="Website Design" description={description} path={path} />
      {children}
    </>
  );
}
