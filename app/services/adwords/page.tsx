import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads Management | Seam Media",
  description:
    "Expert Google Ads (AdWords) management in Melbourne. Drive qualified traffic and maximize ROI with data-driven PPC campaigns.",
};

export default function AdwordsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Google Ads Management
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Drive qualified traffic to your website with expertly managed Google
            Ads campaigns. We maximize your ROI through data-driven strategies
            and continuous optimization.
          </p>
        </div>
      </Section>

      {/* What We Offer */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Search Advertising
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Appear at the top of Google search results when potential
                customers are actively searching for your products or services.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Display Advertising
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reach your audience across millions of websites with visually
                engaging display ads that drive brand awareness.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Remarketing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Re-engage visitors who didn't convert, keeping your brand
                top-of-mind and bringing them back to complete their purchase.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Shopping Campaigns
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Showcase your products directly in Google search results with
                product images, prices, and business information.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Grow with Google Ads?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create a high-performing campaign that drives real results for
            your business.
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
