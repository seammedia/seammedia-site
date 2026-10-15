import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

type StructuredDataProps = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type ServiceStructuredDataProps = {
  name: string;
  description: string;
  path: string;
};

export function ServiceStructuredData({
  name,
  description,
  path,
}: ServiceStructuredDataProps) {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType: name,
        description,
        url: new URL(path, siteUrl).toString(),
        provider: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        areaServed: {
          "@type": "Country",
          name: "Australia",
        },
      }}
    />
  );
}

type LocationStructuredDataProps = {
  location: string;
  path: string;
  description: string;
};

export function LocationStructuredData({
  location,
  path,
  description,
}: LocationStructuredDataProps) {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Digital marketing services in ${location}`,
        serviceType: "Digital marketing services",
        description,
        url: new URL(path, siteUrl).toString(),
        provider: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        areaServed: {
          "@type": "City",
          name: location,
        },
      }}
    />
  );
}

export function OrganizationStructuredData() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: new URL("/icon.png", siteUrl).toString(),
        email: "contact@seammedia.com.au",
        telephone: "+61402642746",
        areaServed: "Australia",
        sameAs: [
          "https://www.instagram.com/seammedia/?hl=en",
          "https://www.facebook.com/seammediaaus/",
          "https://www.linkedin.com/company/seam-media-agency/",
          "https://www.youtube.com/channel/UC62wYiZCDqhzGSHUliZcNSQ",
          "https://maps.google.com/?cid=18236398314403901553",
          "https://au.pinterest.com/seammedia/",
          "https://x.com/seammediaaus",
          "https://www.tiktok.com/@seammedia",
        ],
      }}
    />
  );
}

type BlogPostingStructuredDataProps = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string;
};

export function BlogPostingStructuredData({
  title,
  description,
  path,
  datePublished,
  image = defaultOgImage,
}: BlogPostingStructuredDataProps) {
  const url = new URL(path, siteUrl).toString();

  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        datePublished,
        image: new URL(image, siteUrl).toString(),
        author: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: new URL("/icon.png", siteUrl).toString(),
          },
        },
      }}
    />
  );
}
