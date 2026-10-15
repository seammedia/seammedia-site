import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { tradies } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: tradies.meta.title,
  description: tradies.meta.description,
  path: tradies.path,
  keywords: tradies.meta.keywords,
});

export default function TradieMarketingPage() {
  return <NicheLanding config={tradies} />;
}
