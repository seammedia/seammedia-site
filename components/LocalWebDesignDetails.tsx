import Link from "next/link";

// Web design section for the suburb web design pages (added 16 Oct 2026, seo-loop-seam). Search Console showed
// /hampton ranking 19.8 for "web design hampton" while /hampton/web-design did not rank, so the web design page
// now answers that search and the Hampton pages link to it. Add an entry here to reuse it for another suburb.
// Facts only from existing site copy: based in Mount Eliza, 100+ websites built, package inclusions on /marketing-packages.
const areas: Record<string, {
  heading: string;
  intro: string;
  detail: string;
  listTitle: string;
  list: string[];
  links: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
}> = {
  hampton: {
    heading: "Web design for Hampton businesses",
    intro: "Seam Media designs websites for businesses in Hampton and across Melbourne's bayside suburbs from our base in Mount Eliza. Hampton customers often compare local shops, cafes, clinics and trades on their phones before they visit Hampton Street or make a booking, so a good website needs to show what you offer, where you are and how to get in touch within a few seconds.",
    detail: "We have built more than 100 websites, and we start each one with the services you want more of and the customers you want to reach in Hampton, Hampton East, Sandringham, Brighton and Highett. Every site gets clear service pages, a simple enquiry or booking step that works on mobile, and the search basics in place from day one: page titles, descriptions, headings and links between your important pages.",
    listTitle: "What our web design in Hampton includes",
    list: [
      "Service pages that explain what you do, who it suits and how to enquire",
      "Mobile layouts with working contact forms, call buttons and directions",
      "Search foundations: titles, descriptions, headings, sitemap and internal links",
      "Ongoing website care, with small text, image and contact-detail updates",
    ],
    links: [
      { href: "/hampton/seo", label: "SEO services in Hampton" },
      { href: "/hampton", label: "Digital marketing in Hampton" },
      { href: "/marketing-packages", label: "Compare our marketing packages" },
    ],
    faqs: [
      { q: "How much does a website cost for a Hampton business?", a: "Our Foundation package is $140 a week plus GST and includes basic website setup and ongoing care, plus active social media. Growth and Complete Growth add local SEO and advertising. Complex websites and larger projects are quoted separately, so we agree the scope before any work starts." },
      { q: "Do you need to be based in Hampton to design my website?", a: "No. We are based in Mount Eliza and work with businesses across Melbourne's bayside and south-east. Most of the work happens online, and we talk with you directly about your services, customers and the pages your website needs." },
      { q: "Will my new website help me show up on Google in Hampton?", a: "We build each site with the search basics in place, so Google can read and index your pages. Ranking for local searches also depends on your Google Business Profile, reviews and competition, which is why our Growth package adds local SEO. We cannot guarantee positions." },
    ],
  },
};

export default function LocalWebDesignDetails({ slug }: { slug: string }) {
  const area = areas[slug];
  if (!area) return null;
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{area.heading}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-5">{area.intro}</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">{area.detail}</p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-gray-200 bg-[#f4f7f8] p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{area.listTitle}</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
              {area.list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Keep exploring</h3>
            <div className="flex flex-col gap-3">
              {area.links.map((link) => (
                <Link key={link.href} href={link.href} className="font-semibold text-[#405e6b] underline">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-5">Common questions</h3>
          <div className="space-y-4">
            {area.faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">{faq.q}</summary>
                <p className="text-gray-700 leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
