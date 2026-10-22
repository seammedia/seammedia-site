import LocalMarketingDetails from "@/components/LocalMarketingDetails";
import LocalAgencyIntro from "@/components/LocalAgencyIntro";
import Section from "@/components/ui/Section";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import LocationInsights from "@/components/LocationInsights";
import { locationProfiles } from "@/lib/locations";
import { createMetadata } from "@/lib/seo";

// 22 Oct 2026 (Heath): "SEO" left this hub's title, H1 and intro. Since the 15 Oct "Digital Marketing & SEO Agency"
// retitle, Google split the Frankston SEO searches between this hub and /frankston/seo, and /frankston/seo fell
// (e.g. "frankston seo" 33 to 47-65). /frankston/seo now owns every "seo ... frankston" search; this hub owns
// "digital marketing (agency) frankston" and links to the SEO page with "SEO agency in Frankston".
export const metadata = createMetadata({
  title: "Digital Marketing Agency Frankston | Seam Media",
  description: "Digital marketing agency for Frankston businesses: Google Ads, websites, social content and Google Maps from Seam Media, just down the road in Mount Eliza.",
  path: "/frankston",
});

export default function FrankstonPage() {
  const services = [
    { href: "/frankston/social-media", label: "Social Media Management", description: "Grow your online presence with strategic social media campaigns tailored for Frankston businesses." },
    { href: "/frankston/web-design", label: "Website Design", description: "Custom, responsive websites designed to convert visitors into customers." },
    { href: "/frankston/seo", label: "SEO", description: "Rank higher in search results and attract more local Frankston customers." },
    { href: "/frankston/graphic-design", label: "Graphic Design", description: "Professional design services for all your branding and marketing materials." },
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
              <span className="relative z-10 text-white">Frankston</span>
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
            Seam Media is a digital marketing agency working with Frankston businesses from nearby Mount Eliza.
            We help you get found on Google, win more calls and enquiries, and turn your website into your best salesperson.
          </p>
        </div>
      </Section>

      <LocalAgencyIntro slug="frankston" />

      <LocationInsights profile={locationProfiles.frankston} />

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

      {/* Map Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Find{' '}
            <span className="relative inline-block px-4">
              <span className="relative z-10 text-white">Us</span>
              <span
                className="absolute inset-0 -inset-x-1 top-[15%] h-[75%] rounded-sm opacity-90"
                style={{
                  backgroundColor: '#5e7986',
                  transform: 'skewX(-5deg)'
                }}
              ></span>
            </span>
          </h2>
          <div className="w-full aspect-[4/3] lg:aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25100.32405903817!2d145.12077927722586!3d-38.15087609362117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60b2a48d44683%3A0x5045675218ce240!2sFrankston%20VIC%203199!5e0!3m2!1sen!2sau!4v1763507513247!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <LocalMarketingDetails slug="frankston" />

      {/* Contact Section */}
      <ContactForm />
    </>
  );
}
