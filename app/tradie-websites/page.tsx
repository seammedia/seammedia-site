import type { Metadata } from "next";
import NicheLanding from "@/components/NicheLanding";
import LocalWebLinks from "@/components/LocalWebLinks";
import { createMetadata } from "@/lib/seo";
import { tradieWebsites } from "@/lib/niche-pages";

export const metadata: Metadata = createMetadata({
  title: tradieWebsites.meta.title,
  description: tradieWebsites.meta.description,
  path: tradieWebsites.path,
  keywords: tradieWebsites.meta.keywords,
});

export default function TradieWebsitesPage() {
  return (
    <>
      <NicheLanding config={tradieWebsites} />
      <LocalWebLinks
        eyebrow="Local tradie websites"
        title="Website design for trades near us"
        copy="We are based in Mount Eliza and build websites for trades across Frankston, the Mornington Peninsula and Melbourne's south east, including The South East Fencer in the Frankston area."
        links={[
          { href: "/frankston/web-design", label: "Website design in Frankston" },
          { href: "/mount-eliza/web-design", label: "Web design in Mount Eliza" },
          { href: "/mornington/web-design", label: "Website design in Mornington" },
          { href: "/case-studies/the-south-east-fencer", label: "The South East Fencer case study" },
        ]}
      />
    </>
  );
}
