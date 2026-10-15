import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Website Maintenance & Care | Seam Media",
  description: "Website care and updates for Australian businesses. Discuss your maintenance scope, service requirements and next website improvement with Seam Media.",
  path: "/website-maintenance",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
