import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleTag from "@/components/GoogleTag";
import AttributionCookie from "@/components/AttributionCookie";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Seam Media | Social Media & Digital Marketing Agency",
  description:
    "We build brands through data-driven digital marketing. Social media management, SEO, web design, branding, and more for businesses of all sizes.",
  keywords: [
    "digital marketing",
    "social media management",
    "SEO",
    "web design",
    "branding",
    "Google Ads",
    "Melbourne",
  ],
  openGraph: {
    type: "website",
    siteName,
    title: "Seam Media | Social Media & Digital Marketing Agency",
    description:
      "We build brands through data-driven digital marketing for Australian businesses.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Seam Media digital marketing agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seam Media | Social Media & Digital Marketing Agency",
    description:
      "Data-driven social media, SEO, web design and digital marketing for Australian businesses.",
    images: [defaultOgImage],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleTag />
        <AttributionCookie />
        <OrganizationStructuredData />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
