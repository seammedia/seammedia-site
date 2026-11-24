import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { AlliedLocalSeoLinks } from "@/components/LocalWebLinks";
import { createMetadata } from "@/lib/seo";
import { alliedHealth } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: alliedHealth.meta.title,
  description: alliedHealth.meta.description,
  path: alliedHealth.path,
  keywords: alliedHealth.meta.keywords,
});

export default function AlliedHealthMarketingPage() {
  return (
    <>
      <NicheLanding config={alliedHealth} />
      <AlliedLocalSeoLinks title="Local SEO for allied health clinics near us" />
    </>
  );
}
