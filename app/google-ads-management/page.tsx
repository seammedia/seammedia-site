import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { googleAds } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: googleAds.meta.title,
  description: googleAds.meta.description,
  path: googleAds.path,
  keywords: googleAds.meta.keywords,
});

export default function GoogleAdsManagementPage() {
  return <NicheLanding config={googleAds} />;
}
