import Link from "next/link";

// Agency-intent section for the suburb hub pages (added 15 Oct 2026). Search Console showed Google ranking
// /mount-eliza and /frankston (not their /seo sub-pages) at positions 8-15 for "seo agency", "seo company" and
// "digital marketing agency" searches, so the hub states that intent plainly and links to the SEO page.
// Facts only from existing site copy: based in Mount Eliza / on the Mornington Peninsula, the South East Fencer
// case study (lib/case-studies.ts), packages on /marketing-packages.
const areas: Record<string, {
  heading: string;
  intro: string;
  detail: string;
  listTitle: string;
  list: string[];
  nearby: string;
  seoLabel: string;
  // Hubs without a /<suburb>/seo sub-page point at the main SEO page instead.
  seoHref?: string;
  faqs?: { q: string; a: string }[];
}> = {
  "mount-eliza": {
    heading: "An SEO and digital marketing agency based in Mount Eliza",
    intro: "Seam Media is based in Mount Eliza, so we know how local customers search: by suburb, by service and on Google Maps. As a local SEO agency, we focus on the searches that lead to calls and enquiries, such as your service plus Mount Eliza, Mornington or Frankston, rather than broad terms that rarely bring buyers.",
    detail: "Most Mount Eliza businesses need three things to line up: a complete and active Google Business Profile, service pages that answer what customers ask before they call, and reviews that show real local work. We plan SEO, Google Ads and your website together, so each one supports the others.",
    listTitle: "What our SEO work in Mount Eliza covers",
    list: [
      "Local SEO and Google Maps: your Business Profile, categories, service areas and reviews",
      "Service and suburb pages written for the searches your customers actually use",
      "Technical fixes: page speed, indexing, page titles and internal links",
      "Google Ads for the searches you want to win now, with call and form tracking",
    ],
    nearby: "We also work with businesses in Mornington, Mount Martha, Frankston South, Langwarrin and across the Mornington Peninsula.",
    seoLabel: "SEO services in Mount Eliza",
  },
  frankston: {
    heading: "A digital marketing and SEO agency for Frankston businesses",
    intro: "Seam Media works with Frankston businesses from just down the road in Mount Eliza. Frankston customers compare options quickly on their phones, so we focus on being found for the searches that lead to calls: your service plus Frankston, Frankston South, Seaford, Carrum Downs or Langwarrin.",
    detail: "Our digital marketing in Frankston combines local SEO, Google Ads, your website and social content, planned around the jobs you want more of. You work directly with the people doing the work, with up-to-date reporting on what changed and what it brought in.",
    listTitle: "What our digital marketing in Frankston covers",
    list: [
      "Local SEO and Google Maps, so you show up when Frankston customers search nearby",
      "Google Ads with call and form tracking, bidding more for the jobs worth most to you",
      "Websites built to turn visits into enquiries, with fast, clear service pages",
      "Social media content that keeps your business visible between jobs",
    ],
    nearby: "We also work across Seaford, Carrum Downs, Langwarrin, Karingal and the wider Mornington Peninsula.",
    seoLabel: "SEO services in Frankston and Carrum Downs",
  },
  // Added 15 Oct 2026 (seo-loop-seam): /mornington ranked 24.8 for "digital marketing agency mornington".
  mornington: {
    heading: "A digital marketing agency for Mornington businesses",
    intro: "Seam Media is based next door in Mount Eliza, so Mornington is local for us. Mornington businesses often serve the township and the wider peninsula, so our digital marketing in Mornington starts with the work you want more of and the areas you genuinely serve, then makes that clear across your website, Google Business Profile and ads.",
    detail: "Customers comparing Mornington providers usually search by service and suburb on their phones, often on Google Maps. We plan local SEO, Google Ads, your website and social content together, so each one supports the others, and you work directly with the person doing the work.",
    listTitle: "What our digital marketing in Mornington covers",
    list: [
      "Local SEO and Google Maps: your Business Profile, categories, service areas and reviews",
      "Google Ads with call and form tracking for the jobs you want more of now",
      "Websites with clear service pages and an easy enquiry step on mobile",
      "Social media content that keeps your business visible on the peninsula",
    ],
    nearby: "We also work with businesses in Mount Martha, Mount Eliza, Moorooduc, Frankston and across the Mornington Peninsula.",
    seoLabel: "SEO services in Mornington",
    faqs: [
      { q: "Do you only work with businesses in Mornington township?", a: "No. We work across the Mornington Peninsula and Melbourne's south-east. Your marketing should reflect the areas you genuinely serve, including any travel, delivery or booking limits, rather than claiming every suburb." },
      { q: "What do your digital marketing packages include?", a: "Foundation is $140 a week plus GST for basic website and social support. Growth is $235 a week plus GST with local SEO and one ad platform. Complete Growth is $350 a week plus GST with both ad platforms. Ad spend, filming and larger builds are scoped separately." },
    ],
  },
  // Added 15 Oct 2026: /cranbourne ranked 19.4 for "seo cranbourne" and 6.3 for "cranbourne marketing agency".
  cranbourne: {
    heading: "An SEO and marketing agency for Cranbourne businesses",
    intro: "Seam Media works with businesses across Melbourne's south-east, including Cranbourne, from our base in Mount Eliza. Cranbourne customers search by service and suburb, often on Google Maps, so our SEO in Cranbourne focuses on the searches that lead to calls and quote requests: your service plus Cranbourne, Cranbourne North, Cranbourne East or Clyde.",
    detail: "With new estates and new businesses across the Casey area, plenty of local businesses compete for the same searches. That makes the basics matter: a complete Google Business Profile with the right categories and service areas, service pages that explain what you do and where, and recent reviews from real local jobs. As your marketing agency, we plan SEO, Google Ads and your website together, so each one supports the others.",
    listTitle: "What our SEO and marketing in Cranbourne covers",
    list: [
      "Local SEO and Google Maps: your Business Profile, categories, service areas and reviews",
      "Service pages written for the searches Cranbourne customers actually use",
      "Technical fixes: page speed, indexing, page titles and internal links",
      "Google Ads with call and form tracking for the jobs you want more of now",
    ],
    nearby: "We also work with businesses in Berwick, Lyndhurst, Hampton Park, Dandenong and across Melbourne's south-east.",
    seoLabel: "Explore our SEO services",
    seoHref: "/seo",
    faqs: [
      { q: "Do you need to be based in Cranbourne to do SEO for my business?", a: "No. Local rankings come from your business details, your Google Business Profile and pages that answer what Cranbourne customers search for. We are based in Mount Eliza and work with businesses across the south-east, and we only target the areas you genuinely serve." },
      { q: "Should I start with SEO or Google Ads in Cranbourne?", a: "SEO builds visibility over time, while Google Ads can bring enquiries sooner with a separate ad budget. We look at your current visibility, your Business Profile and the jobs you want more of, then suggest where to start. Our Growth and Complete Growth packages combine local SEO with advertising." },
      { q: "How do you measure SEO results for a Cranbourne business?", a: "Our local search plans include five tracked terms and one prioritised website or SEO improvement each month. We report search impressions and clicks separately from confirmed enquiries, so you can see what changed and what it brought in." },
    ],
  },
};

export default function LocalAgencyIntro({ slug }: { slug: string }) {
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">Local results you can check</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For example, The South East Fencer&apos;s Google Search Console report shows 5.38k clicks and 437k impressions from Google search, with visibility rising over time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">{area.nearby}</p>
            <div className="flex flex-col gap-3">
              <Link href={area.seoHref ?? `/${slug}/seo`} className="font-semibold text-[#405e6b] underline">{area.seoLabel}</Link>
              <Link href="/case-studies/the-south-east-fencer" className="font-semibold text-[#405e6b] underline">Read the South East Fencer case study</Link>
              <Link href="/marketing-packages" className="font-semibold text-[#405e6b] underline">Compare our marketing packages</Link>
            </div>
          </div>
        </div>
        {area.faqs && (
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
        )}
      </div>
    </section>
  );
}
