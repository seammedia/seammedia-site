import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import { createMetadata } from "@/lib/seo";
import { tradieSeo } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: tradieSeo.meta.title,
  description: tradieSeo.meta.description,
  path: tradieSeo.path,
  keywords: tradieSeo.meta.keywords,
});

export default function TradieSeoPage() {
  return <NicheLanding config={tradieSeo} />;
}
