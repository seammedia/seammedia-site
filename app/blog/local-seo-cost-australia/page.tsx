import SEOArticle from "@/components/SEOArticle";
import { localSeoCostGuide as guide } from "@/lib/seo-guides";
import { createMetadata } from "@/lib/seo";
export const metadata = createMetadata({ title: guide.title + " | Seam Media", description: guide.description, path: guide.path, type: "article" });
export default function Page() { return <SEOArticle guide={guide} />; }
