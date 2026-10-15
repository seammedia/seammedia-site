import type { Metadata } from "next";
import MarketingPackagesClient from "./MarketingPackagesClient";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Local Marketing Packages Australia | Seam Media",
  description:
    "Website and social media packages from $140 a week plus GST. Add local SEO and one ad platform for $235 a week, or complete marketing for $350 a week. Billed weekly.",
  path: "/marketing-packages",
  image: "/marketing-packages/opengraph-image",
  keywords: [
    "local marketing packages Australia",
    "marketing agency packages Melbourne",
    "social media and local SEO packages",
    "Google Business Profile management",
    "small business marketing retainer",
  ],
});

export default function MarketingPackagesPage() {
  return <MarketingPackagesClient />;
}
