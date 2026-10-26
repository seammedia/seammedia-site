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
  // Optional descriptive link to a neighbouring hub (added 17 Oct 2026).
  nearbyLink?: { href: string; label: string };
  // Optional second neighbouring link, e.g. a nearby suburb's SEO page (added 25 Oct 2026).
  nearbySeoLink?: { href: string; label: string };
  faqs?: { q: string; a: string }[];
  // Optional suburb-specific sections and process steps (added 23 Oct 2026 for the "seo cranbourne" owner page).
  sections?: { title: string; copy: string }[];
  processTitle?: string;
  process?: { title: string; copy: string }[];
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
    // 20 Oct 2026: links the "seo mornington" owner page.
    nearbyLink: { href: "/mornington/seo", label: "SEO in nearby Mornington" },
    // 24 Oct 2026 (money search "digital marketing agency mount eliza": hub at 8.2 last 7 days vs 9.0 before).
    // Title/H1 left alone: the hub's "seo agency / company mount eliza" searches reached 2.7 and 5.1.
    sections: [
      { title: "Digital marketing for Mount Eliza's village and the wider peninsula", copy: "Mount Eliza businesses range from shops, cafes and clinics around the village on Mount Eliza Way to trades and services that travel to Frankston South, Mornington, Moorooduc and Baxter. Their customers search in two ways: locals looking for something nearby, often on Google Maps, and peninsula residents comparing a few options before they call. Our digital marketing in Mount Eliza starts with which of those customers you want more of and the areas you genuinely serve, then makes that clear on your website, Google Business Profile, ads and social channels." },
      { title: "One plan instead of separate suppliers", copy: "Many small businesses have a web designer, someone posting on social media and an ad account nobody checks, all working separately. As your digital marketing agency, we plan local SEO, Google Ads, your website and social content together, so the same services, areas and offers appear everywhere and each channel supports the others. You deal directly with the person doing the work, here in Australia, with reporting that shows what changed and what it brought in." },
    ],
    processTitle: "How our digital marketing in Mount Eliza works",
    process: [
      { title: "1. Baseline", copy: "We review your website, Google Business Profile, Search Console, any ad accounts and how enquiries reach you, then agree the services and areas that matter most." },
      { title: "2. Plan and build", copy: "We fix what is holding you back first, such as missing service pages, an incomplete Business Profile or untracked calls, then add the SEO, ads and content that suit your goals and budget." },
      { title: "3. Review", copy: "Each month we compare the same searches, campaigns and pages, report visibility separately from confirmed enquiries, and choose the next improvement from what is working." },
    ],
    faqs: [
      { q: "Is Seam Media actually based in Mount Eliza?", a: "Yes. Seam Media is based in Mount Eliza on the Mornington Peninsula. We work with businesses in Mount Eliza and the neighbouring suburbs, across Melbourne's south-east, and with clients right across Australia." },
      { q: "What does a digital marketing agency do for a Mount Eliza business?", a: "We help local customers find you and choose you: local SEO and Google Maps, Google Ads with call and form tracking, a website with clear service pages, and social content that keeps you visible. The mix depends on the work you want more of and your budget." },
      { q: "Should I start with SEO, Google Ads or social media?", a: "SEO builds visibility over time, Google Ads can bring enquiries sooner with a separate ad budget, and social media keeps you in front of people who already know you. We look at your current visibility and the jobs you want more of, then suggest where to start." },
      { q: "What do your digital marketing packages include?", a: "Foundation is $140 a week plus GST for basic website and social support. Growth is $235 a week plus GST with local SEO and one ad platform. Complete Growth is $350 a week plus GST with both ad platforms. Ad spend, filming and larger builds are scoped separately." },
    ],
  },
  frankston: {
    // 22 Oct 2026: no "SEO" in this heading; /frankston/seo owns the Frankston SEO searches (see app/frankston/page.tsx).
    heading: "A digital marketing agency for Frankston businesses",
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
    seoLabel: "SEO agency in Frankston",
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
    seoLabel: "SEO in Mornington and the Mornington Peninsula",
    // 22 Oct 2026: links the "seo mount eliza" owner page.
    nearbyLink: { href: "/mount-eliza/seo", label: "SEO in nearby Mount Eliza" },
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
    nearbyLink: { href: "/dandenong", label: "Digital marketing agency in nearby Dandenong" },
    nearbySeoLink: { href: "/dandenong/seo", label: "SEO in nearby Dandenong" },
    sections: [
      { title: "Local SEO for Cranbourne's growing suburbs", copy: "Cranbourne is really several markets: the established streets around the town centre, the newer estates in Cranbourne North, East and West, and fast-growing Clyde and Clyde North to the south-east. A plumber, cleaner or allied health clinic may serve some of these areas and not others, so we build your SEO around the suburbs you actually cover and make that clear on your website and Google Business Profile, rather than claiming all of Casey." },
      { title: "Google Maps and your website work together", copy: "For most \"service plus Cranbourne\" searches, Google shows a Maps listing first and a short list of websites below it. Your Business Profile needs the right categories, service areas, photos and recent reviews, and your website needs a clear page for each main service that matches what the profile says. When both line up, Google has a clearer reason to show your business to Cranbourne customers." },
    ],
    processTitle: "How SEO in Cranbourne works with us",
    process: [
      { title: "1. Baseline", copy: "We review Search Console, your Google Business Profile, the pages Google can index and how enquiries reach you, then agree the services and Cranbourne areas that matter most." },
      { title: "2. Improve", copy: "We fix crawl and page issues, make your service pages useful for Cranbourne customers, tidy your Business Profile and connect related pages, starting with the searches that already show demand." },
      { title: "3. Review", copy: "Each month we compare the same searches and pages, report impressions and clicks separately from confirmed enquiries, and choose the next improvement from what is working." },
    ],
    faqs: [
      { q: "Do you need to be based in Cranbourne to do SEO for my business?", a: "No. Local rankings come from your business details, your Google Business Profile and pages that answer what Cranbourne customers search for. We are based in Mount Eliza and work with businesses across the south-east, and we only target the areas you genuinely serve." },
      { q: "Should I start with SEO or Google Ads in Cranbourne?", a: "SEO builds visibility over time, while Google Ads can bring enquiries sooner with a separate ad budget. We look at your current visibility, your Business Profile and the jobs you want more of, then suggest where to start. Our Growth and Complete Growth packages combine local SEO with advertising." },
      { q: "How do you measure SEO results for a Cranbourne business?", a: "Our local search plans include five tracked terms and one prioritised website or SEO improvement each month. We report search impressions and clicks separately from confirmed enquiries, so you can see what changed and what it brought in." },
      { q: "Can you help my business show up on Google Maps in Cranbourne?", a: "Yes. We review your Google Business Profile categories, service areas, photos and reviews, and make sure your website backs up what the profile says. Maps positions depend on where the searcher is and on competition, so we cannot guarantee a position, but we report how often your profile and pages appear for Cranbourne searches." },
      { q: "How much does SEO in Cranbourne cost?", a: "Local SEO is part of our Growth package at $235 a week plus GST, which also includes Google Business Profile support and one ad platform. Complete Growth is $350 a week plus GST with both ad platforms. Ad spend, extra locations and larger content projects are scoped separately." },
    ],
  },
  // Added 17 Oct 2026 (seo-loop-seam): /dandenong ranked 10.7 for "dandenong marketing agency" (also the homepage).
  // 26 Oct 2026 (money search): hub 10.3 for "dandenong marketing agency" and 3.6 for "digital marketing agency
  // dandenong", but also 53-56 for "seo dandenong" searches owned by /dandenong/seo. Title and hero dropped "SEO"
  // (the Frankston lesson), and the hub gained local sections, a process and two more FAQs.
  dandenong: {
    heading: "A digital marketing agency for Dandenong businesses",
    intro: "Seam Media works with businesses across Dandenong and Melbourne's south-east from our base on the Mornington Peninsula. Dandenong covers very different buyers: a household booking a local service in central Dandenong, and a purchaser comparing commercial or industrial suppliers in Dandenong South. As your marketing agency, we start by working out which of those customers you want more of, then build your website, Google Business Profile and ads around them.",
    detail: "For local services, that means clear service pages, the areas you genuinely cover, such as Dandenong North, Doveton, Noble Park, Keysborough or Hallam, and an easy enquiry step on a phone. For commercial suppliers, it means capability pages, service boundaries and the details a buyer needs before asking for a quote. We plan SEO, Google Ads, your website and social content together, so each one supports the others.",
    listTitle: "What our marketing in Dandenong covers",
    list: [
      "Local SEO and Google Maps: your Business Profile, categories, service areas and reviews",
      "Service and capability pages for both local and commercial enquiries",
      "Google Ads with call and form tracking for the jobs or orders you want more of",
      "Websites and social content that show your real work and make it easy to get in touch",
    ],
    nearby: "We also work with businesses in Dandenong South, Keysborough, Lyndhurst, Cranbourne and across Melbourne's south-east.",
    seoLabel: "SEO services in Dandenong and Dandenong South",
    nearbyLink: { href: "/cranbourne", label: "SEO and marketing agency in nearby Cranbourne" },
    sections: [
      { title: "Marketing for central Dandenong's shops and services", copy: "Central Dandenong is one of the busiest shopping and service centres in Melbourne's south-east, and its customers come from Dandenong North, Doveton, Noble Park, Springvale and beyond. Most of them find a business on their phone: a Google search, a Maps listing, a quick look at the website or social pages, then a call or booking. As your marketing agency in Dandenong, we make each of those steps clear: accurate Business Profile details, a page for each main service, real photos of your work and an easy way to get in touch." },
      { title: "Marketing for Dandenong South suppliers and trades", copy: "Dandenong South buyers are often other businesses comparing manufacturers, suppliers, fabricators or trade services before asking for a quote. They want to see what you make or do, the job sizes you take on, where you deliver or work, and what to send with a quote request. We build that into capability pages and Google Ads aimed at purchasers, and track quote requests separately from general visits, so you can see which channel brings the work you want." },
    ],
    processTitle: "How our marketing in Dandenong works",
    process: [
      { title: "1. Baseline", copy: "We review your website, Google Business Profile, Search Console, any ad accounts and how enquiries reach you, then agree the customers, services and areas that matter most." },
      { title: "2. Plan and build", copy: "We fix what is holding you back first, such as missing service or capability pages, an incomplete Business Profile or untracked calls, then add the ads, search work and content that suit your goals and budget." },
      { title: "3. Review", copy: "Each month we compare the same searches, campaigns and pages, report visibility separately from confirmed enquiries, and choose the next improvement from what is working." },
    ],
    faqs: [
      { q: "Do you work with businesses in Dandenong?", a: "Yes. We work with businesses across Dandenong, Dandenong South, Dandenong North, Doveton, Noble Park and Keysborough from our base on the Mornington Peninsula, and Heath does the work himself here in Australia. We only target the areas and customers you genuinely serve." },
      { q: "Can you market a commercial or industrial business in Dandenong South?", a: "Yes, where that is part of your real service. We build capability and service pages around what you can substantiate, target the searches purchasers use, and measure quote enquiries separately from general visits. We do not add a local office or customer claims your business cannot back up." },
      { q: "What do your marketing packages include?", a: "Foundation is $140 a week plus GST for basic website and social support. Growth is $235 a week plus GST with local SEO and one ad platform. Complete Growth is $350 a week plus GST with both ad platforms. Ad spend, filming and larger builds are scoped separately." },
      { q: "Should a Dandenong business start with SEO or Google Ads?", a: "SEO builds visibility over time, while Google Ads can bring enquiries sooner with a separate ad budget. We look at your current visibility, your Business Profile and the work you want more of, then suggest where to start. Our Growth and Complete Growth packages combine local SEO with advertising." },
      { q: "How do you measure marketing results for a Dandenong business?", a: "We report search impressions, clicks, ad results and Business Profile actions separately from confirmed enquiries, so you can see what changed and what it brought in. For commercial suppliers we track quote requests on their own, because a single good quote can matter more than many general visits." },
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
        {area.sections && (
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {area.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.copy}</p>
              </div>
            ))}
          </div>
        )}
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
              {area.nearbyLink && <Link href={area.nearbyLink.href} className="font-semibold text-[#405e6b] underline">{area.nearbyLink.label}</Link>}
              {area.nearbySeoLink && <Link href={area.nearbySeoLink.href} className="font-semibold text-[#405e6b] underline">{area.nearbySeoLink.label}</Link>}
            </div>
          </div>
        </div>
        {area.process && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-5">{area.processTitle}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {area.process.map((step) => (
                <div key={step.title} className="rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
