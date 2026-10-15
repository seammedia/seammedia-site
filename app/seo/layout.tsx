import type { Metadata } from "next";
import { ServiceStructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";

const title = "SEO Services Melbourne | Seam Media";
const description =
  "Melbourne SEO services: local search, useful service content, Google Maps and technical improvements. Clear scope and reporting from Seam Media.";
const path = "/seo";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "SEO services Melbourne",
    "local SEO Australia",
    "technical SEO agency",
  ],
});

export default function SEOLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ServiceStructuredData name="SEO Services" description={description} path={path} />
      {children}
    </>
  );
}
