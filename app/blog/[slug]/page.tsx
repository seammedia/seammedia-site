import { notFound } from "next/navigation";
import SEOArticle from "@/components/SEOArticle";
import { createMetadata } from "@/lib/seo";
import { findReleasedGuide } from "@/lib/scheduled-guides";

// Scheduled guides only. Existing guides keep their own static folders, which take precedence.
// Rendered per request so each guide appears at 8 am Melbourne on its date without a deploy.
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = findReleasedGuide(slug);
  if (!item) return { title: "Page not found | Seam Media", robots: { index: false } };
  return createMetadata({ title: item.guide.title + " | Seam Media", description: item.guide.description, path: item.guide.path, type: "article" });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = findReleasedGuide(slug);
  if (!item) notFound();
  return <SEOArticle guide={item.guide} />;
}
