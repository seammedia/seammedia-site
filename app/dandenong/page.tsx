import Section from "@/components/ui/Section";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Digital Marketing Agency Dandenong | Seam Media",
  description: "Professional digital marketing services in Dandenong. We offer social media management, web design, SEO, Google Ads, and more to help your business grow.",
};

export default function DandenongPage() {
  const services = [
    { href: "/social-media", label: "Social Media Management", description: "Grow your online presence with strategic social media campaigns tailored for Dandenong businesses." },
    { href: "/web-design", label: "Website Design", description: "Custom, responsive websites designed to convert visitors into customers." },
    { href: "/seo", label: "SEO", description: "Rank higher in search results and attract more local Dandenong customers." },
    { href: "/graphic-design", label: "Graphic Design", description: "Professional design services for all your branding and marketing materials." },
    { href: "/branding", label: "Branding", description: "Build a memorable brand identity that resonates with your target audience." },
    { href: "/adwords", label: "Google Ads", description: "Drive immediate results with targeted Google Ads campaigns." },
    { href: "/photography", label: "Photography", description: "Professional photography to showcase your business in the best light." },
    { href: "/videography", label: "Videography", description: "Engaging video content that tells your brand story." },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
            Digital Marketing Agency{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Dandenong</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
            Seam Media provides comprehensive digital marketing services to businesses in Dandenong and surrounding areas.
            From social media management to web design and SEO, we help local businesses grow their online presence and achieve measurable results.
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Services</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.label}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <ContactForm />
    </>
  );
}
