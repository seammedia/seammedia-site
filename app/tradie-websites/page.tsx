import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { tradieWebsites } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: tradieWebsites.meta.title,
  description: tradieWebsites.meta.description,
  path: tradieWebsites.path,
  keywords: tradieWebsites.meta.keywords,
});

export default function TradieWebsitesPage() {
  return <NicheLanding config={tradieWebsites} />;
}
