import ServiceCard from "./ServiceCard";
import Section from "./ui/Section";

export default function ServicesGrid() {
  const services = [
    {
      title: "Social Media.",
      description:
        "We offer social media management services to help build your brand online. This can include posting on your behalf, engaging with your followers and growing your audience.",
      link: "/services/social-media",
    },
    {
      title: "Web Design.",
      description:
        "We offer the opportunity to create a website that fits your needs whether that would be a simple landing page or a working online marketplace. Offering both unlimited changes and free hosting for a limited time only!",
      link: "/services/web-design",
    },
    {
      title: "SEO.",
      description:
        "Does your business need to stand out on search? Need helping getting your business to the top? Get in touch with us to see how we can best help your business.",
      link: "/services/seo",
    },
    {
      title: "Graphic Design.",
      description:
        "Graphic design services to suit your business needs, including packaging, logo design, branding, business cards and more. Get in touch to discuss your next project and for a free quote.",
      link: "/services/graphic-design",
    },
    {
      title: "Branding",
      description:
        "Whether your business is in need of a re-brand or you are starting from scratch. We are able to provide you with all of the research, planning and execution to get your brand off the ground and to begin building an identity.",
      link: "/services/branding",
    },
    {
      title: "Adwords.",
      description:
        "We offer Google Adwords management services to help build your brand online. This includes full PPC managment for businesses in e-Commerce, services and local businesses.",
      link: "/services/adwords",
    },
    {
      title: "Photography.",
      description:
        "We offer photography for a range of different services including events, food, travel, editorial, studio, birthday and others. Get in touch with us today for a free quote.",
      link: "/services/photography",
    },
    {
      title: "Videography.",
      description:
        "In a world full of content, it is important to stand out from your audience. A key way to do this is by producing video content that is eye catching and draws in the user. Whether this be a behind the scenes, recent events, the list goes on.",
      link: "/services/videography",
    },
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div
          className="flex flex-wrap gap-8"
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                width: '280px',
                maxWidth: '320px',
                flexShrink: 0
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
