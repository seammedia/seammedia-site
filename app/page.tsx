import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import StatsBand from "@/components/home/StatsBand";
import FeaturedWork from "@/components/home/FeaturedWork";
import Services from "@/components/home/Services";
import WhySeam from "@/components/home/WhySeam";
import LocalAreas from "@/components/home/LocalAreas";
import AudioQuote from "@/components/AudioQuote";
import { createMetadata } from "@/lib/seo";

const FAQ = dynamic(() => import("@/components/FAQ"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing Agency Melbourne | Seam Media",
  description:
    "Seam Media helps Australian businesses grow with social media management, SEO, web design, Google Ads, branding and content services.",
  path: "/",
  keywords: [
    "digital marketing agency Melbourne",
    "social media management Australia",
    "SEO services Melbourne",
    "web design Melbourne",
  ],
});

// Home page, redesigned 7 October 2026: water hero, white logo band, then dark sections to the footer.
export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <StatsBand />
      <FeaturedWork />
      <Services />
      <WhySeam />
      <LocalAreas />
      <AudioQuote />
      <FAQ />
      <ContactForm variant="dark" />
    </>
  );
}
