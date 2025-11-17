import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Clients | Seam Media",
  description:
    "See who we've worked with. Seam Media has helped businesses of all sizes achieve their digital marketing goals.",
};

export default function ClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We're proud to work with businesses of all sizes, from startups to
            national brands.
          </p>
        </div>
      </Section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Case Studies CTA */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Want to See Results?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Get in touch to discuss how we can help your business grow.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#f5b5b5] hover:bg-[#e8a5a5] text-white font-medium rounded-md transition-colors text-lg"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}
