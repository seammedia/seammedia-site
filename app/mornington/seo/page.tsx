import SearchLanding from "@/components/SearchLanding";
import { seoPages } from "@/lib/search-pages";
import { createMetadata } from "@/lib/seo";

const page = seoPages["mornington"];
export const metadata = createMetadata({ title: page.title, description: page.description, path: page.path });
export default function Page() { return <SearchLanding page={page} />; }
