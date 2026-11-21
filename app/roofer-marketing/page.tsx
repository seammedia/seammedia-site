import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { LocalSeoLinks } from "@/components/LocalWebLinks";
import { createMetadata } from "@/lib/seo";
import { roofers } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: roofers.meta.title,
  description: roofers.meta.description,
  path: roofers.path,
  keywords: roofers.meta.keywords,
});

export default function RooferMarketingPage() {
  return (
    <>
      <NicheLanding config={roofers} />
      <LocalSeoLinks title="Local SEO for roofers near us" />
    </>
  );
}
