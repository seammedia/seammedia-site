import type { Metadata } from "next";

export const siteUrl = "https://www.seammedia.com.au";
export const siteName = "Seam Media";
export const defaultOgImage = "/images/seam-media-hero-image.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path,
  keywords,
  image = defaultOgImage,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
