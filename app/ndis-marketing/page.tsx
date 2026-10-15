import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { ndis } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: ndis.meta.title,
  description: ndis.meta.description,
  path: ndis.path,
  keywords: ndis.meta.keywords,
});

export default function NdisMarketingPage() {
  return <NicheLanding config={ndis} />;
}
