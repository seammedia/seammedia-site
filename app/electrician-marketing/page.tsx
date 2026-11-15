import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { LocalSeoLinks } from "@/components/LocalWebLinks";
import { createMetadata } from "@/lib/seo";
import { electricians } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: electricians.meta.title,
  description: electricians.meta.description,
  path: electricians.path,
  keywords: electricians.meta.keywords,
});

export default function ElectricianMarketingPage() {
  return (
    <>
      <NicheLanding config={electricians} />
      <LocalSeoLinks title="Local SEO for electricians near us" />
    </>
  );
}
