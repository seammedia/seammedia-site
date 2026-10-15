import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { builders } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: builders.meta.title,
  description: builders.meta.description,
  path: builders.path,
  keywords: builders.meta.keywords,
});

export default function BuilderMarketingPage() {
  return <NicheLanding config={builders} />;
}
