import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { releasedGuides } from "@/lib/scheduled-guides";

// Refresh so each scheduled guide is listed soon after its 8 am release.
export const revalidate = 600;

const routes = [
  "",
  "about",
  "services",
  "clients",
  "case-studies",
  "case-studies/an-ecommerce-business",
  // "case-studies/a-finance-client", // hidden 12 Oct 2026 (see lib/case-studies.ts)
  "case-studies/the-south-east-fencer",
  "case-studies/a-florist",
  "blog",
  "contact",
  "terms-and-conditions",
  "why-seam",
  "marketing-packages",
  "social-media",
  "web-design",
  "seo",
  "graphic-design",
  "branding",
  "adwords",
  "photography",
  "videography",
  "website-maintenance",
  "brighton",
  "chelsea",
  "cranbourne",
  "dandenong",
  "frankston",
  "hampton",
  "mornington",
  "mount-eliza",
  "construction-marketing",
  "accountant-marketing",
  "tradie-marketing",
  "ndis-marketing",
  "google-ads-management",
  "allied-health-marketing",
  "plumber-marketing",
  "builder-marketing",
  "electrician-marketing",
  "landscaper-marketing",
  "roofer-marketing",
  "tradie-websites",
  "tradie-seo",
  "frankston/seo",
  "frankston/web-design",
  "frankston/social-media",
  "frankston/graphic-design",
  "hampton/seo",
  "hampton/web-design",
  "hampton/social-media",
  "hampton/graphic-design",
  "mornington/seo",
  "mornington/web-design",
  "mornington/social-media",
  "mornington/graphic-design",
  "mount-eliza/seo",
  "mount-eliza/web-design",
  "mount-eliza/social-media",
  "mount-eliza/graphic-design",
  "dandenong/seo",
  "blog/social-media-handle",
  "blog/website-design-tips",
  "blog/leasing-website-benefits",
  "blog/seo-melbourne-tips",
  "blog/google-business-benefits",
  "blog/ranking-locally-google",
  "blog/local-seo-cost-australia"
];
const updated = new Set(["about", "website-maintenance", "services", "frankston", "dandenong", "mornington", "mount-eliza", "construction-marketing", "seo", "dandenong/seo", "blog", "blog/local-seo-cost-australia", "blog/seo-melbourne-tips", "frankston/seo", "frankston/web-design", "frankston/social-media", "frankston/graphic-design", "hampton/seo", "hampton/web-design", "hampton/social-media", "hampton/graphic-design", "mornington/seo", "mornington/web-design", "mornington/social-media", "mornington/graphic-design", "mount-eliza/seo", "mount-eliza/web-design", "mount-eliza/social-media", "mount-eliza/graphic-design"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const guides: MetadataRoute.Sitemap = releasedGuides().map((g) => ({ url: `${siteUrl}${g.guide.path}`, lastModified: new Date(`${g.guide.modified}T00:00:00Z`), changeFrequency: "monthly", priority: 0.6 }));
  const pages: MetadataRoute.Sitemap = routes.map(path => ({ url: path ? `${siteUrl}/${path}` : siteUrl, ...(updated.has(path) ? {lastModified: new Date("2026-10-06T00:00:00Z")} : {}), changeFrequency: path === "blog" ? "weekly" : "monthly", priority: path === "" ? 1 : path.startsWith("blog/") ? 0.6 : 0.8 }));
  return [...pages, ...guides];
}
