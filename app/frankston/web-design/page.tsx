import SearchLanding from "@/components/SearchLanding";
import { frankstonWebPage as page } from "@/lib/search-pages";
import { createMetadata } from "@/lib/seo";
export const metadata = createMetadata({ title: page.title, description: page.description, path: page.path });
export default function Page() { return <SearchLanding page={page} />; }
