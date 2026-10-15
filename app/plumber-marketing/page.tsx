import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { plumbers } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: plumbers.meta.title,
  description: plumbers.meta.description,
  path: plumbers.path,
  keywords: plumbers.meta.keywords,
});

export default function PlumberMarketingPage() {
  return <NicheLanding config={plumbers} />;
}
