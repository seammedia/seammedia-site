import type { Metadata } from "next";
import { ServiceStructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";

const title = "Google Ads Management Melbourne | Seam Media";
const description =
  "ROI-focused Google Ads management for Australian service, local and e-commerce businesses, from campaign setup through ongoing optimisation.";
const path = "/adwords";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "Google Ads management Melbourne",
    "PPC agency Australia",
    "Google Ads for local businesses",
  ],
});

export default function AdwordsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ServiceStructuredData name="Google Ads Management" description={description} path={path} />
      {children}
    </>
  );
}
