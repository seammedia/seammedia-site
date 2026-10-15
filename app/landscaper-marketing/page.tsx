import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { landscapers } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: landscapers.meta.title,
  description: landscapers.meta.description,
  path: landscapers.path,
  keywords: landscapers.meta.keywords,
});

export default function LandscaperMarketingPage() {
  return <NicheLanding config={landscapers} />;
}
