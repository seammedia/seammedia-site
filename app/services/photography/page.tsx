import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Photography Services | Seam Media",
  description:
    "Professional photography services in Melbourne. Product photography, corporate headshots, and commercial photography for your business.",
};

export default function PhotographyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Photography
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            High-quality photography that showcases your products, team, and
            brand. Professional images that make a lasting impression.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Photography Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Product Photography
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Stunning product images that highlight features and drive sales.
                Perfect for e-commerce, catalogs, and marketing materials.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Corporate Headshots
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professional headshots for your team that convey competence and
                approachability across all business platforms.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Commercial Photography
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Capture your business in action with commercial photography for
                marketing campaigns, websites, and promotional materials.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Event Photography
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Document corporate events, conferences, and business gatherings
                with professional event photography.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Showcase Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create stunning images that elevate your brand.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#f5b5b5] hover:bg-[#e8a5a5] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </Section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
