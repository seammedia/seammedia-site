import type { Metadata } from "next";
import { ServiceStructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";

const title = "Social Media Management Melbourne | Seam Media";
const description =
  "Strategic social media management for Australian businesses, including content creation, community management, reporting and growth planning.";
const path = "/social-media";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "social media management Melbourne",
    "social media agency Australia",
    "content creation Melbourne",
  ],
});

export default function SocialMediaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ServiceStructuredData name="Social Media Management" description={description} path={path} />
      {children}
    </>
  );
}
