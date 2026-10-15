import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.seammedia.com.au/sitemap.xml",
    host: "https://www.seammedia.com.au",
  };
}
