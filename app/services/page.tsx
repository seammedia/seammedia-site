import { createMetadata } from "@/lib/seo";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Services | Seam Media",
  description:
    "Digital marketing services including social content, SEO, web design, branding, Google Ads, photography and video. Discuss your scope with Seam Media.",
  path: "/services",
});

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media.",
      description:
        "We offer social media management services to help build your brand online. This can include posting on your behalf, engaging with your followers and growing your audience.",
      icon: "📱",
      iconBgColor: "#6b8e9f",
      link: "/social-media",
    },
    {
      title: "Web Design.",
      description:
        "We offer the opportunity to create a website that fits your needs whether that would be a simple landing page or a working online marketplace. Build requirements and ongoing care are agreed in your scope.",
      icon: "🖥️",
      iconBgColor: "#f5d45d",
      link: "/web-design",
    },
    {
      title: "SEO.",
      description:
        "Does your business need to stand out on search? Need help getting your business to the top? Get in touch with us to see how we can best help your business.",
      icon: "💻",
      iconBgColor: "#5865f2",
      link: "/seo",
    },
    {
      title: "Graphic Design.",
      description:
        "Graphic design services to suit your business needs, including packaging, logo design, branding, business cards and more. Get in touch to discuss your next project and for a free quote.",
      icon: "✏️",
      iconBgColor: "#f5b5b5",
      link: "/graphic-design",
    },
    {
      title: "Branding",
      description:
        "Whether your business is in need of a re-brand or you are starting from scratch. We are able to provide you with all of the research, planning and execution to get your brand off the ground and to begin building an identity.",
      icon: "🎯",
      iconBgColor: "#b5a5d5",
      link: "/branding",
    },
    {
      title: "Adwords.",
      description:
        "We offer Google Ads management to help build your brand online, including PPC campaigns for e-commerce, service and local businesses.",
      icon: "🔍",
      iconBgColor: "#9ca67c",
      link: "/adwords",
    },
    {
      title: "Photography.",
      description:
        "We offer photography for a range of different services including events, food, travel, editorial, studio, birthday and others. Get in touch with us today for a free quote.",
      icon: "📷",
      iconBgColor: "#6b8e9f",
      link: "/photography",
    },
    {
      title: "Videography.",
      description:
        "In a world full of content, it is important to stand out from your audience. A key way to do this is by producing video content that is eye catching and draws in the user. Whether this be a behind the scenes, recent events, the list goes on.",
      icon: "🎥",
      iconBgColor: "#b5a5d5",
      link: "/videography",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We offer a comprehensive suite of digital marketing services to help
            your business grow and succeed online.
          </p>
        </div>
      </Section>

      <Section background="gray"><h2 className="text-3xl font-bold text-gray-900 mb-6">Marketing for your business</h2><div className="flex flex-wrap gap-6"><Link href="/construction-marketing" className="text-[#405e6b] underline font-semibold">Construction marketing in Melbourne</Link><Link href="/accountant-marketing" className="text-[#405e6b] underline font-semibold">Marketing for accountants</Link><Link href="/tradie-marketing" className="text-[#405e6b] underline font-semibold">Marketing for tradies</Link></div></Section>

      {/* Services Grid */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
