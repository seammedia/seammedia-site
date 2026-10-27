import { reviews, type Review } from "./reviews";

export type SearchPage = {
  path: string; title: string; description: string; h1: string; service: string; area: string; intro: string;
  checks: string[]; sectionTitle: string; context: string;
  resourceTitle?: string; resourceIntro?: string;
  resource?: { title: string; copy: string; questions: string[] }[];
  sections: { title: string; copy: string; href?: string; linkLabel?: string }[];
  process: { title: string; copy: string }[];
  proof: string; proofPath: string; pricing: string;
  faqTitle: string; faqs: { q: string; a: string }[]; relatedTitle: string; links: { label: string; href: string }[];
  reviews?: Review[]; // Google reviews about this service and area (lib/reviews.ts), shown under the hero
  // Optional "where we work" section with a Google Map of the area (not an office location).
  serviceArea?: { mapQuery: string; suburbs: string[]; copy: string };
};

const seoProcess = [
  { title: "Establish the baseline", copy: "Review Search Console, the pages Google can index, your Google Business Profile and the enquiry journey. Agree the priority services and record current clicks, relevant queries and measurable enquiries." },
  { title: "Improve the pages with existing demand", copy: "Fix crawl and page issues, make service information useful, connect related pages and improve titles and search snippets. Build content around distinct customer questions rather than repeating a suburb name." },
  { title: "Review what produces useful visits", copy: "Check which changes Google has crawled, compare the same queries and pages over time, and use enquiry quality to choose the next improvements. Search positions vary by location, device and competition." },
];
const proof = "A nearby example: The South East Fencer serves the Mornington Peninsula and south-east Melbourne. Its case study includes a supplied Search Console report with 5.38k clicks and 437k impressions. The chart starts in August 2025 and extends into September 2026; its exact selected date range is not displayed. These figures show search visibility, not confirmed enquiries or a promise of the same outcome for your business.";
const seoPricing = "Growth includes local SEO, Google Business Profile support, website care and one advertising platform from $235 a week plus GST. Complete Growth is $350 a week plus GST and includes both advertising platforms. The $140 Foundation package covers basic website and social support; it does not include ongoing local SEO. Local search packages include five tracked terms and one prioritised website or SEO improvement monthly. Larger content projects need an agreed scope.";
const commonSeoFaqs = [
  { q: "How long does SEO take?", a: "Technical fixes and page improvements can be completed early, but Google needs time to crawl and reassess them. We use the first 90 days to establish the baseline, improve important pages and review the response. Competitive searches may take longer; first-page positions and enquiry numbers cannot be guaranteed." },
  { q: "Is Google Maps different from website SEO?", a: "Yes. Google Maps uses your Business Profile and local relevance, distance and prominence. Website SEO improves how your pages appear in organic search. We review both and report website clicks separately from profile actions." },
  { q: "Will you create a page for every keyword?", a: "No. Variants such as SEO company, SEO agency and SEO services in the same area usually belong on one useful service page. New pages should answer a distinct customer need and link to the right service, with genuine examples and clear scope." },
  { q: "Can you help with Google Ads as well?", a: "Yes. Growth includes management of one advertising platform, and Complete Growth includes Google Ads and Meta Ads. Media spend is paid separately. Ads and organic search are measured separately so you can see what each contributes." },
];

const localSeo = {
  frankston: { name: "Frankston", context: "A Frankston business may compete for enquiries across Frankston South, Seaford and the surrounding peninsula. Start by choosing the services and service radius that are commercially useful, then make the website and Business Profile reflect the work you actually accept.", focus: "Connect suburb searches with the service you deliver", example: "For a trade business, an emergency service and a planned renovation need different information. For a clinic or professional service, appointment type, suitability and the booking step matter more than repeating the suburb in every paragraph.", q: "Should my SEO target Frankston or the whole peninsula?", a: "Start with the area where you can reliably serve customers and the work you want more of. A wider peninsula target can be added when the service scope and page content support it. We avoid creating interchangeable pages for every nearby suburb." },
  dandenong: { name: "Dandenong", context: "Dandenong SEO needs to distinguish local consumer searches from commercial and industrial enquiries. A business serving Dandenong South may need purchasing, capability and quote information that differs from a shop or appointment-based service in central Dandenong.", focus: "Match the page to residential or commercial buyers", example: "For a commercial supplier, explain the product or service range, delivery or service area and the information required for a quote. For a local service, clarify availability, customer fit and how to book. One broad list of keywords rarely answers both journeys well.", q: "Can SEO support commercial enquiries in Dandenong South?", a: "Yes, where that is part of your real service area. We review the terms buyers use, build clear capability and service content, and measure quote enquiries separately from general visits. We do not add a local office or customer claim that your business cannot substantiate." },
  "mount-eliza": { name: "Mount Eliza", context: "For a business serving Mount Eliza, being visible is only the first step. A potential customer comparing providers also needs to understand the service, see credible examples and know whether the business is suitable for their appointment or project.", focus: "Make service fit and trust easy to assess", example: "A professional service page should explain who the appointment is for and what happens next. A home-service page should show the work offered, service boundaries and how a quote is prepared. Useful answers build a stronger page than a long list of nearby place names.", q: "Should I use Mount Eliza or Mt Eliza in my website?", a: "Use the full place name naturally in the main heading and service information. A common abbreviation can be mentioned where it helps a reader, but it does not need its own duplicate page. We group those variants into the same service intent." },
  mornington: { name: "Mornington", context: "Mornington businesses often serve both the township and a wider part of the peninsula. Your website should explain that service footprint accurately, with useful details for the customer who is comparing providers and deciding whether to enquire.", focus: "Separate a Mornington service from a wider peninsula offer", example: "A service available across the peninsula should state any travel, delivery or booking limits. A project business should show the project types it accepts and how enquiries are qualified. We use that information to choose which location and service pages need attention.", q: "Can I target Mornington Peninsula searches as well?", a: "Yes, when your business actually serves that area. We first check whether an existing page can answer the wider search well. A separate peninsula page is only useful if it offers distinct service information, examples or customer needs." },
};

const localResources: Record<string, Pick<SearchPage, "resourceTitle" | "resourceIntro" | "resource">> = {
  frankston: {
    resourceTitle: "A service-and-search brief for a Frankston business",
    resourceIntro: "Use these three decisions to prepare a useful SEO brief. The trade and appointment examples are hypothetical; they do not describe a Seam Media client or claim a local result.",
    resource: [
      { title: "Choose the service before the suburb", copy: "A hypothetical trade business offering repairs and planned installations should explain the difference between those jobs. A customer needing a repair may look for availability and the next phone step; an installation customer may need materials, site information and a quote process. Give the service page that information before expanding location content.", questions: ["Which job type do you want more of?", "What does the customer need to know before contacting you?", "Which existing page answers that question best?"] },
      { title: "State the service radius accurately", copy: "Serving Frankston does not automatically mean accepting every job across the peninsula. Record the locations, travel limits and conditions that affect your service. Where the same offer applies in Frankston South or Seaford, the main page can explain that coverage. A separate page should contribute distinct information rather than repeat the offer.", questions: ["Which nearby areas can you reliably serve?", "Do travel or call-out conditions change?", "Is any location page making an office claim you cannot support?"] },
      { title: "Match the first enquiry to the service", copy: "A hypothetical appointment business may need the visitor to select an appointment type, while a project business may need a short description and suburb. Keep the initial step easy on mobile. Search clicks and delivered enquiries should be checked separately, then the business can assess whether the enquiries fit its services.", questions: ["What is the minimum information needed to follow up?", "Does the enquiry reach the intended inbox?", "Which enquiries are about the service you chose to grow?"] },
    ],
  },
  dandenong: {
    resourceTitle: "Choose the right page for a Dandenong buyer",
    resourceIntro: "Use this buyer matrix to distinguish a local consumer from a commercial purchaser. The scenarios are hypothetical planning examples, not claims about a particular customer or project.",
    resource: [
      { title: "A consumer needs a clear service and next step", copy: "For a hypothetical local service, the page should explain the appointment or job, where it is available, any suitability limits and how to enquire. The search may include Dandenong, but the decision depends on the service information. Put that answer on the relevant page rather than sending every search to a broad capability list.", questions: ["What service is the consumer comparing?", "What makes the service suitable or unsuitable?", "Can they identify the next step on a phone?"] },
      { title: "A commercial buyer needs capability and quote information", copy: "For a hypothetical supplier serving Dandenong South, a purchaser may need to assess product range, technical fit, service capacity and quote requirements before making contact. Use verified specifications and examples that belong to the business. The page should make it clear which information is required to prepare a useful response.", questions: ["Which capabilities can you substantiate?", "What specifications or project details does a quote require?", "Should this information live on a distinct commercial service page?"] },
      { title: "Measure the two enquiry journeys separately", copy: "A phone call, a general form submission and a commercial quote request are different actions. Agree which completed actions count, verify their delivery and review their suitability. A report can show search clicks to the commercial page without claiming those visits became orders or contracts.", questions: ["Which completed enquiry action is being recorded?", "Is the source and requested service retained?", "Can the business distinguish relevant quote requests from general questions?"] },
    ],
  },
  "mount-eliza": {
    resourceTitle: "A customer-confidence checklist for Mount Eliza services",
    resourceIntro: "Check these three parts of the decision before commissioning more pages. The appointment and home-service scenarios below are examples, with no invented client outcomes.",
    resource: [
      { title: "Explain who the service suits", copy: "A hypothetical appointment-based business should state the appointment type, what is included and how the visitor checks suitability. Use clear service language before general brand claims. The page should help someone decide whether to enquire, including what needs to be confirmed directly with the business.", questions: ["Is the appointment or service type clear?", "Are eligibility or suitability statements verified?", "Does the visitor know what happens after they book or enquire?"] },
      { title: "Make the proof relevant to the decision", copy: "A hypothetical home-service customer may want to see the type of work offered and how a quote is prepared. Choose approved images or project descriptions that demonstrate that scope. Explain your actual role and retain permission for identifiable material. A review or project example should not imply a result or location it does not establish.", questions: ["Does the example show the service being discussed?", "Can the claim and date be checked?", "Is permission recorded for the material you want to publish?"] },
      { title: "Keep the location and booking path consistent", copy: "Mount Eliza and the abbreviation Mt Eliza refer to the same place. Use the full name clearly and include an abbreviation naturally where useful. A second duplicate page is unlikely to help a reader. Keep the website, profile and booking information aligned with the real service area and contact details.", questions: ["Is one useful page covering the location variants?", "Do profile and website service details agree?", "Can the visitor complete the next step without re-entering information?"] },
    ],
  },
  mornington: {
    resourceTitle: "A Mornington and peninsula coverage worksheet",
    resourceIntro: "Define the footprint your business can deliver before expanding search targets. These planning examples do not claim a peninsula office, a client project or a particular booking level.",
    resource: [
      { title: "Separate the township from the wider service footprint", copy: "A business may serve Mornington appointments at one location or travel to jobs across a wider area. Explain which applies, using the locations and conditions the business confirms. A broad Mornington Peninsula target should not hide travel or availability limits that affect whether a customer can use the service.", questions: ["Where is the service actually delivered?", "Which locations are included or excluded?", "Do travel, delivery or appointment conditions vary?"] },
      { title: "Make project and appointment requirements visible", copy: "For a hypothetical project service, a visitor may need to provide the site location, type of work and preferred timing before a quote can be discussed. An appointment service may instead need the service type and booking availability. Put the appropriate information on the relevant page and keep the first form step brief.", questions: ["What information changes the suitability of an enquiry?", "Which details can be collected after the first contact?", "Does the page explain the actual quote or booking process?"] },
      { title: "Use broader pages only when the customer need differs", copy: "Before adding a wider peninsula page, compare its intended content with the Mornington page. A genuine difference might be a delivery footprint, service conditions or a distinct project capability. When the information is the same, improve the existing page and describe the real coverage. Measure the same relevant query group over time so new broad queries do not disguise performance changes.", questions: ["What new information would the wider page contribute?", "Which existing page currently receives those searches?", "Can the reporting compare the same services and locations?"] },
    ],
  },
};

// Google reviews that mention the service and suburb. Only add a review that genuinely matches the page.
const localSeoReviews: Record<string, Review[]> = {
  frankston: [reviews.albert],
};

// Where we work: map of the area plus the neighbouring suburbs. Seam is based on the Mornington Peninsula
// (no office in these suburbs), so the copy describes service coverage, never a local office.
const localServiceAreas: Record<string, SearchPage["serviceArea"]> = {
  frankston: {
    mapQuery: "Frankston VIC 3199",
    suburbs: ["Frankston", "Frankston South", "Frankston North", "Seaford", "Carrum Downs", "Langwarrin", "Karingal", "Skye", "Mount Eliza"],
    copy: "Seam Media is based on the Mornington Peninsula, so Frankston is local for us. Heath does the work himself, here in Australia, and we work with businesses across Frankston and the surrounding suburbs.",
  },
  dandenong: {
    mapQuery: "Dandenong VIC 3175",
    suburbs: ["Dandenong", "Dandenong South", "Dandenong North", "Doveton", "Noble Park", "Keysborough", "Hallam", "Lyndhurst", "Springvale"],
    copy: "Seam Media is based on the Mornington Peninsula and works with businesses across Dandenong and south-east Melbourne, from local services to commercial and industrial suppliers in Dandenong South. Heath does the work himself, here in Australia.",
  },
  "mount-eliza": {
    mapQuery: "Mount Eliza VIC 3930",
    suburbs: ["Mount Eliza", "Frankston South", "Mornington", "Moorooduc", "Baxter"],
    copy: "Seam Media is based on the Mornington Peninsula, so Mount Eliza is local for us. Heath does the work himself, here in Australia, and we work with businesses across Mount Eliza and the neighbouring suburbs.",
  },
  mornington: {
    mapQuery: "Mornington VIC 3931",
    suburbs: ["Mornington", "Mount Martha", "Mount Eliza", "Moorooduc", "Tuerong", "Dromana", "Rosebud", "Red Hill", "Hastings"],
    copy: "Seam Media is based on the Mornington Peninsula, so Mornington is local for us. Heath does the work himself, here in Australia, and we work with businesses across Mornington and the wider Mornington Peninsula.",
  },
};

// Extra local content per suburb SEO page (added 15 Oct 2026, seo-loop-seam). /mount-eliza/seo ranked 7.2 for
// "seo mount eliza" while the homepage, the hub and /mornington/seo also ranked, so this page owns that search:
// a local section and FAQs here, and the neighbouring SEO pages link to it with "SEO in Mount Eliza".
// Facts only from existing site copy (based in Mount Eliza, Heath does the work himself in Australia).
const localSeoExtras: Record<string, { title?: string; h1?: string; description?: string; sections?: SearchPage["sections"]; faqs?: SearchPage["faqs"]; nearby?: { label: string; href: string }[]; hubLabel?: string }> = {
  // 22 Oct 2026 (money search "seo mount eliza": organic 11.5 last 7 days vs 7.6 before, with the /mount-eliza hub at
  // 5.7 for it). The hub keeps the agency searches; this page owns the service search, so the description leads with
  // SEO in Mount Eliza, two Mount Eliza sections replace the single 15 Oct one, and the two FAQs are merged into one.
  // New links in: /mornington (hub), /mount-eliza/web-design and /mount-eliza/social-media, plus the hub's service card.
  "mount-eliza": {
    description: "SEO in Mount Eliza from a local team: service pages that answer Mount Eliza searches, Google Maps, technical fixes and plain reporting. Talk to us.",
    sections: [
      { title: "SEO for Mount Eliza businesses, from a team based here", copy: "When someone needs a service in Mount Eliza, they usually search for it plus Mount Eliza (or Mt Eliza) on their phone, and Google shows a Maps listing and a short list of websites. Many Mount Eliza businesses also compete with providers from Mornington, Mount Martha and Frankston for those same searches. To show up, your Google Business Profile needs to match the services you offer, and your website needs a clear page for each main service that says what you do, where in Mount Eliza and the neighbouring suburbs you work, and how to get a quote or book. We start with the services you want more of, check which of your pages Google already shows for those searches, and improve those pages first. Seam Media is based in Mount Eliza, and Heath does the work himself here in Australia." },
      { title: "What SEO looks like for different Mount Eliza businesses", copy: "A professional practice in Mount Eliza needs pages that explain who an appointment is for, what happens at the first visit and how to book. A home-service business needs pages that show the work offered, the suburbs it travels to, such as Frankston South, Moorooduc and Baxter, and how a quote is prepared. A shop or hospitality venue relies more on its Business Profile: accurate hours, photos, categories and recent reviews. We plan the work around which of these fits your business, rather than applying the same checklist to every page." },
    ],
    faqs: [
      { q: "Do you do SEO for Mount Eliza businesses?", a: "Yes. We are based in Mount Eliza, so local businesses talk with the person doing the work. We improve the website pages and Google Business Profile that answer the searches your customers use, including nearby Mornington and Frankston searches where you genuinely serve those areas, and report website clicks separately from Maps actions and confirmed enquiries." },
    ],
    nearby: [{ label: "SEO in Mornington and the Mornington Peninsula", href: "/mornington/seo" }, { label: "SEO in Frankston", href: "/frankston/seo" }],
  },
  // 20 Oct 2026 (money searches "seo mornington" 29.1 and "seo mornington peninsula" 39.1 organic, Maps 1.0): this
  // page owns both. The title, H1 and description lead with SEO Mornington and the peninsula, a Mornington section
  // and a peninsula section replace the shared template feel, and the homepage, /seo, /mornington, /mount-eliza,
  // /mount-eliza/seo, /frankston/seo and the SEO guides link here with "SEO in Mornington" anchors.
  // 27 Oct 2026 (money search "seo mornington peninsula": organic 33.5 last 7 days vs 38.9 before, Maps 1.3; "seo
  // mornington" 30.1). Title now leads with the exact peninsula search, the peninsula section is fuller, a section on
  // different peninsula businesses is new, and the FAQ covers both. Links in with peninsula anchors: /mornington
  // (service card), /mount-eliza (hub), /mount-eliza/seo, /mornington/web-design, /mornington/social-media, SEO guides.
  mornington: {
    title: "SEO Mornington Peninsula & Mornington | Seam Media",
    h1: "SEO services in Mornington and across the Mornington Peninsula",
    description: "SEO on the Mornington Peninsula from a team based here: service pages for Mornington and peninsula searches, Google Maps, technical fixes and reporting.",
    sections: [
      { title: "SEO for Mornington businesses, from just up the road", copy: "When someone needs a service in Mornington, they usually search for it plus Mornington on their phone, and Google shows a Maps listing and a short list of websites. Locals, holiday-home owners and visitors all search this way, so your Google Business Profile needs to match the services you offer, and your website needs a clear page for each main service that says what you do, whether customers come to you in Mornington or you travel to them, and how to get a quote or book. We start with the services you want more of in Mornington, check which of your pages Google already shows for those searches, and improve those pages first. We are based next door in Mount Eliza, and Heath does the work himself here in Australia." },
      { title: "SEO across the Mornington Peninsula", copy: "Many Mornington businesses also serve Mount Martha, Mount Eliza, Moorooduc and further down the peninsula. When a peninsula business searches for SEO on the Mornington Peninsula, or a customer searches for a service plus a peninsula town, Google looks for pages that clearly say where the business genuinely works. We name those areas on the pages where they apply, along with any travel, delivery or booking limits, and only suggest a separate page for a town when it would give customers different information, rather than building a near-identical page for every town." },
      { title: "What SEO looks like for different peninsula businesses", copy: "A trade or home service that travels from Mornington to Dromana, Rosebud, Red Hill or Hastings needs service pages that list the areas it covers and explain how a quote is prepared. A clinic, studio or other appointment-based practice needs pages that explain who an appointment is for and how to book. A shop, cafe or venue in Main Street or a peninsula village relies most on its Google Business Profile: accurate hours, photos, categories and recent reviews, for locals, holiday-home owners and visitors alike. Seam Media is based on the Mornington Peninsula in Mount Eliza, so we plan the work around which of these fits your business, and Heath does the work himself here in Australia." },
    ],
    faqs: [
      { q: "Do you do SEO for Mornington and Mornington Peninsula businesses?", a: "Yes. We are based on the Mornington Peninsula, in Mount Eliza, and work with businesses in Mornington, Mount Martha, Mount Eliza and across the wider peninsula. We improve the website pages and Google Business Profile that answer the searches your customers use, and report website clicks separately from Maps actions and confirmed enquiries." },
    ],
    nearby: [{ label: "SEO in nearby Mount Eliza", href: "/mount-eliza/seo" }, { label: "SEO in Frankston", href: "/frankston/seo" }],
  },
  // 16 Oct 2026: "seo carrum downs" ranked 19.7 on /seo (also the homepage and this page). Carrum Downs is in this
  // page's service area and has no page of its own, so /frankston/seo owns it as a secondary area.
  // 19 Oct 2026 (money search "seo frankston", organic 27.7, Maps 1.1): the Carrum Downs section had pulled the
  // page's focus off Frankston ("frankston seo" slipped 34 to 47), so Frankston leads again in the title, H1,
  // description, first local section and FAQ, with Carrum Downs and Seaford kept as a second section. The homepage,
  // /seo, /frankston, /frankston/web-design, /mount-eliza/seo and the SEO guides link here with "SEO in Frankston".
  // 22 Oct 2026 (Heath): this page now owns every Frankston SEO search, agency ones included ("seo company/agency
  // frankston"), because the /frankston hub and this page were splitting them. The hub dropped "SEO" from its title
  // and H1, links here with "SEO agency in Frankston", and this page links back with "Digital marketing agency in Frankston".
  frankston: {
    title: "SEO Frankston | Local SEO Agency & Google Maps | Seam Media",
    hubLabel: "Digital marketing agency in Frankston",
    h1: "SEO services in Frankston for local businesses",
    description: "Local SEO agency in Frankston: service pages that answer Frankston searches, Google Maps, technical fixes and clear reporting. Talk to Seam Media.",
    sections: [
      { title: "SEO for Frankston businesses, from just down the road", copy: "When someone in Frankston needs a service, they usually search for it plus Frankston on their phone, and Google shows a Maps listing and a short list of websites. Plenty of Frankston businesses compete for those same searches. To show up in both places, your Google Business Profile needs to match the services you offer, and your website needs a clear page for each main service that says what you do, where you work across Frankston, Frankston South and Langwarrin, and how to get a quote or book. We start with the services you want more of in Frankston, check which of your pages Google already shows for those searches, and improve those pages first. We are based nearby in Mount Eliza, and Heath does the work himself here in Australia." },
      { title: "Also covering Carrum Downs and Seaford", copy: "Carrum Downs mixes residential streets with one of the south-east's larger industrial and trade areas, so its searches range from a homeowner looking for a nearby service to a business buyer comparing suppliers. If you serve Carrum Downs, Seaford or Skye as well as Frankston, we name those areas on the pages where you genuinely work them, rather than building a near-identical page for every suburb." },
    ],
    faqs: [
      { q: "Do you do SEO for Frankston businesses?", a: "Yes. Frankston is local for us, and we work with businesses across Frankston, Frankston South, Langwarrin, Seaford and Carrum Downs. We improve the website pages and Google Business Profile that answer the searches your customers use, and report website clicks separately from Maps actions and confirmed enquiries." },
    ],
    nearby: [{ label: "SEO in nearby Mount Eliza", href: "/mount-eliza/seo" }, { label: "SEO in Mornington and the peninsula", href: "/mornington/seo" }, { label: "SEO in Dandenong and Dandenong South", href: "/dandenong/seo" }, { label: "SEO in Cranbourne", href: "/cranbourne" }],
  },
  // 18 Oct 2026: "seo dandenong south" ranked 21 on this page (the /dandenong hub also ranked). Dandenong South has
  // no page of its own, so /dandenong/seo owns it; /seo, /dandenong, /frankston/seo and /construction-marketing
  // link here with "Dandenong South" anchors.
  // 25 Oct 2026 (money search "seo dandenong": organic 30.3 last 7 days vs 31.3 before, no Maps data; the /dandenong
  // hub 52.5 and /seo 33.2 also ranked). The page's only local section was about Dandenong South, so a Dandenong
  // section now leads, with a section on different Dandenong businesses and a Dandenong FAQ. Links in with
  // "SEO in Dandenong" anchors: homepage, /seo, /dandenong, /cranbourne, /frankston/seo, /construction-marketing
  // and the Melbourne SEO guide.
  // 26 Oct 2026: links back to the hub as "Digital marketing agency in Dandenong" (the hub owns the agency searches).
  dandenong: {
    hubLabel: "Digital marketing agency in Dandenong",
    title: "SEO Dandenong & Dandenong South | Seam Media",
    h1: "SEO services for Dandenong and Dandenong South businesses",
    description: "SEO in Dandenong and Dandenong South: service pages for local customers and commercial buyers, Google Maps, technical fixes and clear reporting.",
    sections: [
      { title: "SEO for Dandenong businesses", copy: "When someone needs a service in Dandenong, they usually search for it plus Dandenong on their phone, and Google shows a Maps listing and a short list of websites. Dandenong is one of the busiest centres in Melbourne's south-east, so a business there competes with providers from Noble Park, Springvale, Keysborough and Hallam for those same searches. To show up, your Google Business Profile needs to match the services you offer, and your website needs a clear page for each main service that says what you do, whether customers come to you in central Dandenong or you travel to them across Dandenong North, Doveton and the surrounding suburbs, and how to get a quote or book. We start with the services you want more of in Dandenong, check which of your pages Google already shows for those searches, and improve those pages first." },
      { title: "What SEO looks like for different Dandenong businesses", copy: "A shop, restaurant or venue in central Dandenong relies most on its Business Profile: accurate hours, photos, categories and recent reviews, backed by a website page that matches them. A home-service business needs pages that show the work offered, the suburbs it travels to and how a quote is prepared. An appointment-based practice needs pages that explain who an appointment is for, what happens at the first visit and how to book. We plan the work around which of these fits your business, rather than applying the same checklist to every page." },
      { title: "SEO for commercial and industrial businesses in Dandenong South", copy: "Dandenong South is a large commercial and industrial area, so many of its searches come from business buyers rather than households: someone comparing manufacturers, suppliers, fabricators or trade services before asking for a quote. Those buyers want to see what you make or do, the specifications or job sizes you take on, where you deliver or work, and what to send with a quote request. Good SEO for a Dandenong South business puts that information on clear capability and service pages, keeps your Google Business Profile accurate, and names Dandenong South, Keysborough, Lyndhurst and the surrounding areas only where you genuinely work. We are based on the Mornington Peninsula, and Heath does the work himself here in Australia." },
    ],
    faqs: [
      { q: "Do you do SEO for Dandenong businesses?", a: "Yes. We work with businesses across Dandenong, Dandenong North, Doveton, Noble Park and the surrounding suburbs from our base on the Mornington Peninsula, and Heath does the work himself. We improve the website pages and Google Business Profile that answer the searches your customers use, and report website clicks separately from Maps actions and confirmed enquiries." },
      { q: "Do you do SEO for businesses in Dandenong South?", a: "Yes. Dandenong South is part of the Dandenong area we work across, along with Keysborough, Lyndhurst, Hallam and Dandenong North. We improve the pages and Business Profile that answer the searches your buyers use, rather than creating a near-identical page for every suburb." },
      { q: "How do you measure SEO for a commercial supplier?", a: "We track the searches that show your capability pages, the clicks they bring and the quote requests that come through, reported separately from general visits and phone calls. That way you can see whether the right buyers are finding you, not just whether impressions went up." },
    ],
    nearby: [{ label: "SEO in Frankston and Carrum Downs", href: "/frankston/seo" }, { label: "SEO in nearby Cranbourne", href: "/cranbourne" }],
  },
};

// Other pages for the same suburb, linked from the related section.
const localSiblingLinks: Record<string, { label: string; href: string }[]> = {
  frankston: [
    { label: "Website design in Frankston", href: "/frankston/web-design" },
    { label: "Social media in Frankston", href: "/frankston/social-media" },
  ],
  "mount-eliza": [
    { label: "Website design in Mount Eliza", href: "/mount-eliza/web-design" },
    { label: "Social media in Mount Eliza", href: "/mount-eliza/social-media" },
  ],
  mornington: [
    { label: "Website design in Mornington", href: "/mornington/web-design" },
    { label: "Social media in Mornington", href: "/mornington/social-media" },
  ],
};

export const seoPages: Record<string, SearchPage> = Object.fromEntries(Object.entries(localSeo).map(([slug, local]) => [slug, {
  reviews: localSeoReviews[slug],
  serviceArea: localServiceAreas[slug],
  path: `/${slug}/seo`, title: localSeoExtras[slug]?.title ?? `SEO ${local.name} | Local Search & Google Maps | Seam Media`, description: localSeoExtras[slug]?.description ?? `SEO for ${local.name} businesses: useful service pages, Google Maps, technical fixes and clear reporting. Discuss local SEO with Seam Media.`, h1: localSeoExtras[slug]?.h1 ?? `SEO services for ${local.name} businesses`, service: "SEO", area: local.name,
  ...localResources[slug],
  intro: `Get found for the work you want in ${local.name}. We improve your website, local search presence and service content, then track relevant search clicks and enquiries so the next step is based on evidence.`, checks: ["Which services and searches could bring suitable customers?", "Can Google find, read and index the important pages?", "Does a visitor have enough information to make an enquiry?"], sectionTitle: `What local SEO in ${local.name} should improve`, context: local.context,
  sections: [
    { title: local.focus, copy: local.example },
    ...(localSeoExtras[slug]?.sections ?? []),
    { title: "Google Business Profile and Maps", copy: "Review your business details, appropriate categories, actual service area and useful service information. Set up a practical process for requesting genuine customer reviews. Location and competition affect Maps visibility; a website page does not create a local office." },
    { title: "Useful pages Google can understand", copy: "Check indexing access, page titles, the preferred page URL, links between pages and duplicate content. Improve the service page before adding supporting guides. Each new guide should solve a real customer question and have a clear connection to your offer.", href: "/blog/local-seo-cost-australia", linkLabel: "What to include in a local SEO budget" },
    { title: "Reporting that connects to your business", copy: "Track relevant queries, impressions, clicks and website enquiries. Check whether visitors are asking about the right services. Report Google Business Profile actions separately and avoid treating a rise in impressions as proof of sales." },
  ], process: seoProcess, proof, proofPath: "/case-studies/the-south-east-fencer", pricing: seoPricing, faqTitle: `${local.name} SEO questions`, faqs: [{q: local.q, a: local.a}, ...(localSeoExtras[slug]?.faqs ?? []), ...commonSeoFaqs], relatedTitle: "Explore related services and guidance", links: [{label: localSeoExtras[slug]?.hubLabel ?? `SEO and digital marketing agency in ${local.name}`, href: `/${slug}`}, ...(localSiblingLinks[slug] ?? []), ...(localSeoExtras[slug]?.nearby ?? []), {label: "SEO services", href: "/seo"}, {label: "Local SEO costs", href: "/blog/local-seo-cost-australia"}, {label: "Small business SEO in Melbourne", href: "/blog/seo-melbourne-tips"}],
}]));

export const constructionPage: SearchPage = {
  path: "/construction-marketing", title: "Construction Marketing Agency Melbourne | Seam Media", description: "Marketing for Melbourne builders and construction businesses. Service websites, project content, local SEO and Google Ads with clear scope and reporting.", h1: "Construction marketing for Melbourne builders", service: "Construction marketing", area: "Melbourne and the Mornington Peninsula",
  intro: "Turn your completed projects and specialist capability into a clearer reason to enquire. Seam Media connects your website, local SEO, project content and advertising around the construction work you want to win.", checks: ["Define the project type, location and customer you want", "Show capability, real project evidence and a clear quote process", "Measure suitable project enquiries alongside marketing activity"], sectionTitle: "Marketing shaped around your next project", context: "A renovation builder, commercial contractor and specialist trade have different buying journeys. We start with project fit, capacity and your service area, then choose the pages and channels that help a suitable client assess you. A rise in general website visits is useful only when the enquiries match the work you want.",
  sections: [
    {title: "A website that qualifies construction enquiries", copy: "Explain the work you accept, project stages, location coverage and the information needed for a quote. Separate renovation, new-build or commercial services where the scope differs. Project photos should describe your actual role, with client permission for anything identifiable.", href: "/web-design", linkLabel: "Explore website design"},
    {title: "Local SEO for builders and contractors", copy: "Improve pages around the services and locations you genuinely cover. Align your Business Profile with those services and use useful project examples to help buyers compare you. Avoid pages that promise identical services in dozens of suburbs without distinct information.", href: "/seo", linkLabel: "Explore local SEO"},
    {title: "Project content that demonstrates capability", copy: "Document the brief, scope, constraints, materials and finished work. A concise project walkthrough helps a potential client understand how you work. We can plan photography, video and social content around the assets and access available.", href: "/videography", linkLabel: "Explore project video"},
    {title: "Google Ads with a defined project goal", copy: "Choose searches that match the projects you accept, send visitors to a relevant page and record quote enquiries. Agree the budget and service area before launching. Advertising spend is separate from management, and clicks are reviewed alongside enquiry quality.", href: "/adwords", linkLabel: "Explore Google Ads"},
  ], process: [{title:"Define the work worth winning",copy:"Agree the customer, project size, locations and available capacity. Review existing site pages, project assets and enquiry tracking before choosing channels."},{title:"Build a credible enquiry journey",copy:"Improve priority service pages, connect real project examples and make the quote step clear. Establish the local search baseline and create content that answers pre-quote questions."},{title:"Refine using project-fit enquiries",copy:"Review the source and suitability of enquiries, search clicks and advertising costs. Use the results to adjust service content, targeting and budget rather than assuming every enquiry has equal value."}], proof, proofPath: "/case-studies/the-south-east-fencer", pricing: seoPricing, faqTitle: "Construction marketing questions", faqs: [
    {q:"Do you work with builders or only individual tradies?",a:"We can support builders, construction businesses and specialist trades. The starting point is the work you want, the locations you serve and the proof available. The plan and larger production or website work are scoped around that brief."},
    {q:"What should a construction case study include?",a:"Use a real project brief, the work your business performed, relevant constraints, approved photos and the result you can substantiate. Do not claim another contractor's work or publish private client details without permission."},
    {q:"Can marketing help when I only want larger projects?",a:"Your service pages and enquiry form can explain project fit and request the information you need to qualify a lead. Campaigns can focus on the relevant service. Neither SEO nor advertising guarantees the value or volume of future contracts."},
    {q:"What is included in the weekly packages?",a:"Foundation is $140 a week plus GST for basic website and social support. Growth is $235 a week plus GST with local SEO and one ad platform. Complete Growth is $350 a week plus GST with both ad platforms. Ad spend, substantial builds and filming are scoped separately."},
  ], relatedTitle: "Services for construction businesses", links: [{label:"Marketing for tradies",href:"/tradie-marketing"},{label:"Frankston marketing",href:"/frankston"},{label:"Digital marketing agency in Dandenong",href:"/dandenong"},{label:"SEO in Dandenong and Dandenong South",href:"/dandenong/seo"},{label:"Marketing packages",href:"/marketing-packages"}],
};

export const frankstonWebPage: SearchPage = {
  reviews: [reviews.brodie],
  path:"/frankston/web-design",title:"Website Design Frankston | Clear, Fast Business Websites",description:"Website design for Frankston businesses. Clear service content, mobile layouts, enquiry forms and SEO foundations. Discuss your website with Seam Media.",h1:"Website design for Frankston businesses",service:"Website design",area:"Frankston",intro:"Give a potential customer a clear picture of what you do and an easy way to get in touch. We design business websites around useful service information, mobile usability and a reliable enquiry journey.",checks:["Make your main service and customer fit clear immediately","Show credible work and answer pre-enquiry questions","Connect search visibility with a straightforward enquiry form"],sectionTitle:"What your Frankston business website needs",context:"Someone comparing businesses on a phone should be able to understand the service, the area you cover and the next step without hunting through the site. Design, content and SEO need to work together. We agree the required pages and features before the build, so ownership, ongoing care and larger extras are clear.",sections:[
    {title:"Service pages with a clear purpose",copy:"Give each core service enough detail to help a customer decide. Explain the scope, suitability and quote or booking process, then connect relevant project examples. Use one strong page per intent rather than many near-identical suburb pages."},
    {title:"Mobile design and working forms",copy:"Use readable text, accessible controls and layouts that suit smaller screens. Test the contact journey, validation and actual message delivery. A visual success message alone does not prove an enquiry reached the inbox."},
    {title:"Search foundations from the start",copy:"Set a useful title and description, a preferred page URL, sensible headings and links between important pages. Make the public sitemap reflect the pages you want found. Agree whether redirects are needed if replacing an existing website.",href:"/frankston/seo",linkLabel:"SEO in Frankston"},
    {title:"Care after launch",copy:"Confirm what website updates and maintenance are included, who owns accounts and assets, and what happens if you change providers. Larger builds, ecommerce features, custom integrations and additional copy need a separate agreed scope.",href:"/website-maintenance",linkLabel:"Explore website maintenance"},
  ],process:[{title:"Agree the brief",copy:"List the services, users, pages, forms, assets and required integrations. Review your existing search traffic and plan redirects before changing established URLs."},{title:"Build and review",copy:"Prepare the page content and mobile layout, then review the enquiry journey, navigation, accessibility and search settings. Use real approved work to support your offer."},{title:"Launch and measure",copy:"Verify the public pages, redirects, form delivery and sitemap. Use search clicks and suitable enquiries to decide which pages need further improvement."}],proof:"The South East Fencer case study includes the live website and a supplied Search Console report. It shows a service-led site with a direct quote path, alongside reported organic visibility. Its search figures are not a guarantee of website leads.",proofPath:"/case-studies/the-south-east-fencer",pricing:"Foundation starts at $140 a week plus GST for basic website and social support. Growth and Complete Growth add local search and advertising support. A new substantial website, ecommerce build or custom feature is quoted separately; we confirm the build and ongoing scope before you commit.",faqTitle:"Frankston website design questions",faqs:[{q:"Can you redesign an existing website?",a:"Yes. We first review what the existing site does, which URLs receive traffic and what needs to improve. Useful pages and established URLs should be preserved where practical, with permanent redirects planned for any genuine URL changes."},{q:"Will a new website rank on Google?",a:"A website can be built with good search foundations, but design alone does not guarantee rankings. Helpful content, technical access, competition and the wider business presence also matter. Ongoing local SEO is part of Growth and Complete Growth rather than Foundation."},{q:"What do you need from me?",a:"Your service details, business contact information, brand assets, approved photos or project examples, and access to the current website and domain where applicable. We confirm ownership, scope and any access needed before the build."},{q:"Do you offer ongoing updates?",a:"Yes, within the agreed package scope. Basic care is different from a new page build, ecommerce development or custom integration. The proposal should make those boundaries and any additional costs clear."}],relatedTitle:"Plan the whole customer journey",links:[{label:"Frankston digital marketing",href:"/frankston"},{label:"SEO in Frankston",href:"/frankston/seo"},{label:"Website maintenance",href:"/website-maintenance"},{label:"Marketing packages",href:"/marketing-packages"}],
};
