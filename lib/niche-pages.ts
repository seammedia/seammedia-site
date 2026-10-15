import { reviews, type Review } from "./reviews";

// Content for the niche landing pages used by Google Ads (e.g. /tradie-marketing).
// To add a niche: copy the tradies object, change the copy, then create app/<path>/page.tsx
// rendering <NicheLanding config={...} />. Keep every claim checkable: prices from the
// packages page, stats from lib/case-studies.ts, no invented results.

export type NicheConfig = {
  slug: string; // used as the lead source name in tracking
  path: string;
  meta: { title: string; description: string; keywords: string[] };
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  audience: string; // e.g. "tradies"
  businessLabel: string; // e.g. "Your trade"
  businessOptions: string[];
  problems: { title: string; copy: string }[];
  checkupPoints: string[];
  faqs: { q: string; a: string }[];
  // Optional overrides; the tradie copy is the default.
  heroPoints?: string[];
  problemsHeading?: string;
  caseStudyKicker?: string;
  // Optional: a different free offer than the Google Maps check-up (e.g. the Google Ads audit).
  offer?: {
    name: string; // form heading, also the "form" value in the enquiry email
    cta: string; // button label
    formIntro: string;
    success: string;
    messagePlaceholder?: string; // adds an optional free-text field (sent as "message")
    explainerKicker: string;
    explainerHeading: string;
    explainerIntro: string;
    explainerCardTitle: string; // replaces the example map with a checklist card
    explainerCardItems: string[];
  };
  // Optional: a different case study than The South East Fencer.
  // hidden: true keeps the data but leaves the proof section off the page.
  caseStudy?: { name: string; intro: string; stats: [string, string][]; source: string; href: string; hidden?: boolean };
  // Set by publicConfig when a hidden case study has been stripped; NicheLanding then leaves the proof section off.
  hideCaseStudy?: boolean;
  // Optional: replaces the four proof stats under the hero.
  proofStats?: [string, string][];
  // Optional: a guarantee band (offer terms must match what Heath has approved). hero is the short version
  // shown in the hero box, which links down to the band and its terms.
  guarantee?: { kicker: string; heading: string; hero: { title: string; copy: string }; points: { title: string; copy: string }[]; terms: string };
  // Optional: adds a "monthly budget" question to the form (sent as weeklyMarketingInvestment).
  budgetOptions?: string[];
  // Optional: which package gets the "Recommended" badge (default Growth).
  featuredPlan?: string;
  // Google reviews that match this page's service (lib/reviews.ts). The first one is also quoted in the hero.
  reviews?: Review[];
};

// Enquiry guarantee and month-to-month terms (approved by Heath, 9 Oct 2026). The number is set per industry:
// allied health / NDIS 10, trades 15, Google Ads (any enquiry-based business) 10. Keep the wording identical
// across pages so the terms can't drift; only the number and scope change.
function enquiryGuarantee(n: number, scope = "") {
  const conditions = `Genuine enquiry: a call from your ads lasting 30 seconds or more, or a completed enquiry form, counted in your Google Ads account. The guarantee applies to new Google Ads clients${scope} with an ad budget of at least $50 a day, conversion tracking installed in your first week, and enquiries answered within one business day. It covers our management fee only; ad spend is paid directly to Google.`;
  return {
    guarantee: {
      kicker: "OUR GUARANTEE",
      heading: "No lock-in. No enquiries, no management fee.",
      hero: {
        title: `${n} enquiries in 60 days, or no management fee`,
        copy: "Month to month, no lock-in. Genuine calls and forms from your Google Ads, counted in your own account.",
      },
      points: [
        { title: "Month to month", copy: "No lock-in contract. Cancel any time; it takes effect at the end of the billing period you've paid for." },
        { title: "The enquiry guarantee", copy: `If your Google Ads don't bring at least ${n} genuine enquiries in your first 60 days, we keep managing them with no management fee until they do.` },
        { title: "Numbers you can check", copy: "Enquiries are counted in your own Google Ads account and reported in plain English every month, so you always know what each one costs." },
      ],
      terms: conditions,
    },
    faqs: [
      { q: "Is there a lock-in contract?", a: "No. Everything is month to month and billed weekly. Cancel any time, and it takes effect at the end of the billing period you've paid for." },
      { q: "How does the enquiry guarantee work?", a: `If your Google Ads don't bring at least ${n} genuine enquiries in your first 60 days, we keep managing them with no management fee until they do. A genuine enquiry is a call from your ads of 30 seconds or more, or a completed enquiry form. It applies to new Google Ads clients${scope}, needs an ad budget of at least $50 a day, tracking set up in week one, and enquiries answered within one business day.` },
    ],
  };
}

const monthToMonthProof: [string, string][] = [
  ["100+", "websites built"],
  ["10+ years", "of experience"],
  ["$1M+", "ad spend managed"],
  ["Month to month", "no lock-in contracts"],
];

const tradieGuarantee = enquiryGuarantee(15);
const ndisGuarantee = enquiryGuarantee(10);
const googleAdsGuarantee = enquiryGuarantee(10, " whose business runs on enquiries (not online stores)");
const alliedHealthGuarantee = enquiryGuarantee(10);

// NicheLanding is a client component, so everything in its config is sent to the browser.
// A case study marked hidden stays in this file but is removed here, before it reaches the page.
function publicConfig(config: NicheConfig): NicheConfig {
  if (!config.caseStudy?.hidden) return config;
  const visible: NicheConfig = { ...config, hideCaseStudy: true };
  delete visible.caseStudy;
  delete visible.caseStudyKicker;
  return visible;
}

export const tradies: NicheConfig = {
  slug: "tradie-marketing",
  path: "/tradie-marketing",
  reviews: [reviews.leiarnah, reviews.rossyPest, reviews.ryan],
  meta: {
    title: "Marketing for Tradies | Websites, Google Maps & Ads | Seam Media",
    description:
      "Marketing for tradies that gets the phone ringing. Websites, Google Maps, local SEO and Google Ads, handled for you from $235 a week plus GST. Get a free Google Maps check-up for your business.",
    keywords: [
      "marketing for tradies",
      "tradie marketing",
      "tradie websites",
      "seo for tradies",
      "google ads for tradies",
      "marketing for plumbers",
      "marketing for landscapers",
    ],
  },
  eyebrow: "MARKETING FOR TRADIES",
  headline: "Good at the job.",
  headlineAccent: "Easy to find on Google.",
  intro:
    "Most tradies lose jobs to businesses that aren't better, just easier to find. We handle your Google Maps profile, website, local SEO and ads, so the phone keeps ringing while you're on the tools.",
  audience: "tradies",
  heroPoints: [
    "Google Maps profile and reviews",
    "A fast website with a page for every suburb you work in",
    "Google Ads when you want more work, faster",
    "Bids set by job value: more for the big jobs, less for small call-outs",
  ],
  businessLabel: "Your trade",
  businessOptions: [
    "Plumber",
    "Electrician",
    "Builder",
    "Landscaper",
    "Carpenter",
    "Fencing",
    "Concreter",
    "Painter",
    "Roofer",
    "Other trade",
  ],
  problems: [
    {
      title: "You're not on the map",
      copy:
        "When someone searches \"plumber near me\", Google shows three businesses on the map first. If your Google profile is missing, half-finished or has a handful of reviews, you're not one of them.",
    },
    {
      title: "Your website doesn't convert",
      copy:
        "A slow site, no clear phone number and no suburb pages means people hit back and call the next tradie. Most of the work happens on a phone, in a few seconds.",
    },
    {
      title: "Word of mouth has a ceiling",
      copy:
        "Referrals are great until they dry up. Google is where new customers in your area are looking every day, and someone is getting those jobs.",
    },
  ],
  checkupPoints: [
    "Where you show up on Google Maps across your service area, as a 25-point map",
    "Who is taking the top spots instead, and how many reviews they have",
    "The quick fixes on your Google profile and website",
  ],
  guarantee: tradieGuarantee.guarantee,
  proofStats: monthToMonthProof,
  faqs: [
    ...tradieGuarantee.faqs,
    {
      q: "What does the free Google Maps check-up include?",
      a: "We search for your trade from 25 spots across your area, the way a customer would on their phone, and send you a short video showing where you rank, who's beating you and the first things we'd fix. No obligation.",
    },
    {
      q: "How much does it cost?",
      a: "Packages start at $140 a week plus GST for a basic website and socials. Growth, which adds your Google profile, local SEO, review requests and one ad platform, is $235 a week plus GST. Everything is billed weekly, and ad spend is paid directly to Google or Meta.",
    },
    {
      q: "Do I need to run Google Ads?",
      a: "No. Plenty of tradies just want to show up properly on Google Maps and search. Ads are there when you want more work, faster.",
    },
    {
      q: "I don't have a website. Is that a problem?",
      a: "Not at all. We set up and look after a simple, fast website as part of every package.",
    },
    {
      q: "Do you work with tradies outside Melbourne?",
      a: "Yes. We're based in Melbourne and work with businesses across Australia.",
    },
  ],
};

export const ndis: NicheConfig = {
  slug: "ndis-marketing",
  path: "/ndis-marketing",
  reviews: [reviews.rahul, reviews.khyPhysio, reviews.ryan],
  meta: {
    title: "Marketing for NDIS Providers | Websites, Google & Ads | Seam Media",
    description:
      "Marketing for NDIS providers. Google Business Profile, websites, local SEO and Google Ads, handled for you and billed weekly. Get a free Google Maps check-up for your organisation.",
    keywords: [
      "ndis marketing",
      "ndis provider marketing",
      "marketing for ndis providers",
      "ndis website design",
      "ndis seo",
      "google ads for ndis providers",
    ],
  },
  eyebrow: "MARKETING FOR NDIS PROVIDERS",
  headline: "Great support.",
  headlineAccent: "Easy to find on Google.",
  intro:
    "Participants, families and support coordinators search Google to find providers. We look after your Google profile, website, local SEO and ads, so the right enquiries find you while you focus on support.",
  audience: "NDIS providers",
  businessLabel: "Your main support",
  businessOptions: [
    "Support coordination",
    "Supported independent living (SIL)",
    "Daily living support",
    "Community participation",
    "Support work",
    "Therapy / allied health",
    "Behaviour support",
    "Plan management",
    "Other NDIS service",
  ],
  heroPoints: [
    "A Google Business Profile that shows up in local searches",
    "A clear website with a page for each support and area you cover",
    "Google Ads when you want more enquiries, faster",
  ],
  problemsHeading: "Participants are searching. Make sure they find you.",
  problems: [
    {
      title: "You're hard to find locally",
      copy:
        "When a family searches \"NDIS provider near me\", Google shows the map listings first. If your Google profile is missing, half-finished or light on reviews, you're not one of them.",
    },
    {
      title: "Your website doesn't answer their questions",
      copy:
        "People want to know which supports you offer, which areas you cover and how to get started. If the website doesn't make that clear in a few seconds, they move on to the next provider.",
    },
    {
      title: "Referrals come and go",
      copy:
        "Support coordinator referrals are great, but they are hard to predict. Showing up on Google gives you a steady second source of enquiries.",
    },
  ],
  checkupPoints: [
    "Where you show up on Google Maps across your service area, as a 25-point map",
    "Which providers take the top spots instead, and how many reviews they have",
    "The quick fixes on your Google profile and website",
  ],
  caseStudyKicker: "A LOCAL SERVICE CLIENT",
  guarantee: ndisGuarantee.guarantee,
  proofStats: monthToMonthProof,
  faqs: [
    ...ndisGuarantee.faqs,
    {
      q: "What does the free Google Maps check-up include?",
      a: "We search for your main support from 25 spots across your area, the way a participant or family would on their phone, and send you a short video showing where you rank, who's ahead of you and the first things we'd fix. No obligation.",
    },
    {
      q: "How much does it cost?",
      a: "Packages start at $140 a week plus GST for a basic website and socials. Growth, which adds your Google profile, local SEO, review requests and one ad platform, is $235 a week plus GST. Everything is billed weekly, and ad spend is paid directly to Google or Meta.",
    },
    {
      q: "Do I need to run Google Ads?",
      a: "No. Many providers just want to show up properly on Google Maps and search. Ads are there when you want more enquiries, faster.",
    },
    {
      q: "We don't have a website yet. Is that a problem?",
      a: "Not at all. We set up and look after a simple, fast website as part of every package.",
    },
    {
      q: "Do you work with providers outside Melbourne?",
      a: "Yes. We're based in Melbourne and work with businesses across Australia.",
    },
  ],
};

// Google Ads management offer (7 Oct 2026). Pricing = existing packages (Growth includes Google Ads
// or Meta Ads management; Complete Growth includes both). Proof = lib/case-studies.ts "a-finance-client".
// Offer: free video audit within one business day of read-only access (Heath, 7 Oct 2026).
export const googleAds: NicheConfig = publicConfig({
  slug: "google-ads-management",
  path: "/google-ads-management",
  reviews: [reviews.rahul, reviews.ryan, reviews.stephanie],
  meta: {
    title: "Google Ads Management & Free Google Ads Audit | Seam Media",
    description:
      "Google Ads management for service businesses, judged on enquiries, not clicks. Included in Growth from $235 a week plus GST. Get a free video audit of your Google Ads account within one business day of read-only access.",
    keywords: [
      "google ads management",
      "google ads audit",
      "free google ads audit",
      "google ads agency",
      "google ads for small business",
      "ppc management",
      "google ads for tradies",
    ],
  },
  eyebrow: "GOOGLE ADS MANAGEMENT",
  headline: "Paying for clicks.",
  headlineAccent: "Getting the enquiries?",
  intro:
    "We manage Google Ads for service businesses and judge them on enquiries, not clicks. Start with a free video audit of your account: where the budget leaks, whether your tracking counts real leads, and what we'd fix first.",
  audience: "service businesses",
  businessLabel: "Your industry",
  businessOptions: ["Trades and construction", "Allied health and NDIS", "Professional services", "Finance", "Ecommerce", "Hospitality", "Other"],
  heroPoints: [
    "Search campaigns built around real enquiries, not cheap clicks",
    "Conversion tracking checked end to end before we scale spend",
    "Weekly search-term, negative keyword, bid and ad testing",
  ],
  problemsHeading: "Most Google Ads accounts leak money in the same few places.",
  problems: [
    {
      title: "Clicks, not customers",
      copy: "Maximise clicks and loose keyword matching buy cheap, low-intent searches. The account looks busy while the phone stays quiet.",
    },
    {
      title: "Tracking that counts the wrong thing",
      copy: "Phone-number taps, page views and duplicate form tags get counted as leads, so Google's bidding learns from noise instead of real enquiries.",
    },
    {
      title: "Set and forget",
      copy: "No one reads the search terms, adds negative keywords or tests new ads, so the same waste repeats every week.",
    },
  ],
  checkupPoints: [
    "Wasted spend, shown with real search terms from your account",
    "Tracking problems that mislead Google's bidding",
    "The first three fixes, in priority order",
    "A recorded video within one business day of read-only access",
  ],
  guarantee: googleAdsGuarantee.guarantee,
  proofStats: monthToMonthProof,
  faqs: [
    ...googleAdsGuarantee.faqs,
    {
      q: "How does the free audit work?",
      a: "Fill in the form and we'll email you how to give Seam Media read-only access to your Google Ads account. Within one business day of getting access, we send a short video walking through what we found. Read-only access means we can't change anything in your account.",
    },
    {
      q: "What does Google Ads management cost?",
      a: "Google Ads management is included in our Growth package at $235 a week plus GST (Google Ads or Meta Ads) and in Complete Growth at $350 a week plus GST (both). Billed weekly. Ad spend is separate and paid directly to Google.",
    },
    {
      q: "Who owns the Google Ads account?",
      a: "You do. The account, its data and billing stay in your name. We're added as a manager so we can run it, and you can see everything we change.",
    },
    {
      q: "Do I need a big budget?",
      a: "There's no set minimum. The audit shows real keyword prices in your market, so we can agree a realistic test budget before you spend more.",
    },
    {
      q: "How soon will I see results?",
      a: "Search ads can bring enquiries in the first week, but the first few weeks are about cleaning up search terms and proving the tracking works. We review results against real enquiries, not clicks.",
    },
  ],
  caseStudyKicker: "A GOOGLE ADS CLIENT",
  caseStudy: {
    hidden: true, // hidden 12 Oct 2026 at Heath's request
    name: "A finance client",
    intro:
      "An Australian debt-help business in a high-cost search market. Over the 90 days to 7 October 2026, one search campaign earned a 7.91% click-through rate and 463 tracked form actions at $50.97 each, against a $50 target.",
    stats: [
      ["$491K", "lifetime Google Ads spend"],
      ["7.91%", "click-through rate, last 90 days"],
      ["463", "tracked form actions in 90 days"],
      ["$41.76", "cost per form action, 1 to 7 October"],
    ],
    source:
      "Source: the client's Google Ads reports, 10 July to 7 October 2026. Form actions are clicks on the enquiry form's continue button, not completed applications.",
    href: "/case-studies/a-finance-client",
  },
  offer: {
    name: "Free Google Ads audit",
    cta: "Get my free Google Ads audit",
    formIntro:
      "A short video walking through your Google Ads account: wasted spend, tracking, bidding and the first fixes. You give us read-only access. Free, no obligation.",
    success:
      "Thanks. We'll email you how to give us read-only access, then send your video audit within one business day of getting it.",
    messagePlaceholder: "Google Ads account ID and roughly what you spend a month (optional)",
    explainerKicker: "THE FREE AUDIT",
    explainerHeading: "See where your budget actually goes.",
    explainerIntro:
      "We check your account the way we run our clients' accounts, and record what we find as a short video you can watch in a few minutes.",
    explainerCardTitle: "What we check",
    explainerCardItems: [
      "Search terms you're paying for that will never become customers",
      "Which conversions are counted, and whether they're real enquiries",
      "Bidding strategy, CPC limits and budget settings",
      "Keyword match types and negative keywords",
      "Ads, landing pages and Quality Score",
      "Location, ad schedule and device settings",
    ],
  },
});

// Allied health and NDIS providers (9 Oct 2026, approved by Heath).
// Claims: three NDIS/allied health Google Ads accounts are managed now (Ergo, FHL, Glowing); the two audit
// findings are from those accounts, anonymised. Guarantee terms are Heath's to set before publishing.
export const alliedHealth: NicheConfig = publicConfig({
  slug: "allied-health-marketing",
  path: "/allied-health-marketing",
  reviews: [reviews.khyPhysio, reviews.rahul, reviews.mcgreal],
  meta: {
    title: "Google Ads for Allied Health and NDIS Providers | Seam Media",
    description:
      "Google Ads, websites and Google profiles for mobile OT, physio, speech and NDIS providers. Tracked on real enquiries, month to month, no lock-in. Get a free Google Ads and visibility audit.",
    keywords: [
      "allied health marketing",
      "google ads for physiotherapists",
      "occupational therapy marketing",
      "marketing for occupational therapists",
      "physio marketing",
      "ndis provider marketing",
      "speech pathology marketing",
    ],
  },
  eyebrow: "ALLIED HEALTH & NDIS MARKETING",
  headline: "Fill your caseload.",
  headlineAccent: "Know what each referral costs.",
  intro:
    "For mobile OT, physio, speech and NDIS providers. We run your Google Ads, website and Google profile around one number: genuine enquiries, tracked properly and reported in plain English. Month to month, no lock-in.",
  audience: "allied health",
  businessLabel: "Your service",
  businessOptions: [
    "Occupational therapy",
    "Physiotherapy",
    "Speech pathology",
    "Psychology",
    "Exercise physiology",
    "Support coordination",
    "SIL / SDA",
    "Nursing",
    "Other NDIS service",
  ],
  heroPoints: [
    "Google Ads built around calls and referral enquiries, not clicks",
    "Tracking that counts real enquiries, not phone-number taps",
    "Health advertising rules handled from day one",
  ],
  proofStats: [
    ["3", "NDIS and allied health Google Ads accounts managed now"],
    ["$1M+", "ad spend managed"],
    ["10+ years", "of experience"],
    ["Month to month", "no lock-in contracts"],
  ],
  problemsHeading: "Why ads often don't turn into referrals",
  problems: [
    {
      title: "One setting can switch the calls off",
      copy:
        "In an OT provider's account we took over, calls from ads fell from 30-40 a month to almost none after a single bidding change that nobody recorded. The ads kept spending; the referrals stopped.",
    },
    {
      title: "Tracking counts the wrong thing",
      copy:
        "Phone-number taps and button clicks often get reported as leads. In one allied health account we audited, taps made up 97% of the reported conversions, so the ads were optimising for the wrong result.",
    },
    {
      title: "Health ads have extra rules",
      copy:
        "Google restricts personalised ads in health, and AHPRA rules limit testimonials and claims. Generalist agencies trip over these. We build them in from the start.",
    },
  ],
  checkupPoints: [
    "Your Google Ads account (if you have one): wasted spend, bidding and what's actually counted as a lead",
    "Where you show up on Google Maps across your service area",
    "How easy it is for a family or support coordinator to enquire from your website",
  ],
  caseStudyKicker: "A GOOGLE ADS CLIENT",
  caseStudy: {
    hidden: true, // hidden 12 Oct 2026 at Heath's request
    name: "A finance client",
    intro:
      "An Australian debt-help business in a high-cost search market. Over the 90 days to 7 October 2026, one search campaign earned a 7.91% click-through rate and 463 tracked form actions at $50.97 each, against a $50 target.",
    stats: [
      ["$491K", "lifetime Google Ads spend"],
      ["7.91%", "click-through rate, last 90 days"],
      ["463", "tracked form actions in 90 days"],
      ["$41.76", "cost per form action, 1 to 7 October"],
    ],
    source:
      "Source: the client's Google Ads reports, 10 July to 7 October 2026. Form actions are clicks on the enquiry form's continue button, not completed applications.",
    href: "/case-studies/a-finance-client",
  },
  guarantee: alliedHealthGuarantee.guarantee,
  budgetOptions: ["Under $500 a month", "$500 to $1,500 a month", "$1,500 to $3,000 a month", "Over $3,000 a month"],
  featuredPlan: "Complete Growth",
  offer: {
    name: "Free Google Ads and visibility audit",
    cta: "Get my free audit",
    formIntro:
      "A short video on your Google Ads (if you run them), your Google Maps visibility and your website's enquiry path, with the first fixes. Free, no obligation.",
    success:
      "Thanks. If you run Google Ads we'll email how to give us read-only access; your video audit follows within one business day.",
    messagePlaceholder: "Google Ads account ID, if you have one (optional)",
    explainerKicker: "THE FREE AUDIT",
    explainerHeading: "See where your referrals are leaking.",
    explainerIntro:
      "We check your setup the way we run our own NDIS and allied health accounts, and record what we find as a short video.",
    explainerCardTitle: "What we check",
    explainerCardItems: [
      "Search terms you're paying for that will never become referrals",
      "What's counted as a conversion, and whether it's a real enquiry",
      "Bidding, budget and ad schedule against your staffed hours",
      "Health ad policy issues that limit your reach",
      "Your Google Maps ranking across your service area",
      "How quickly a family can call or enquire from your site",
    ],
  },
  faqs: [
    ...alliedHealthGuarantee.faqs,
    {
      q: "How much does it cost?",
      a: "Growth, with one ad platform, local SEO and your Google profile, is $235 a week plus GST. Complete Growth, with Google and Meta ads, is $350 a week plus GST. Ad spend is paid directly to Google or Meta.",
    },
    {
      q: "Do you understand health advertising rules?",
      a: "Yes. We manage Google Ads for NDIS and allied health providers now. We never upload patient or participant lists to Google, we keep testimonials out of ads in line with AHPRA guidance, and we build campaigns around Google's health ad restrictions.",
    },
    {
      q: "How soon will we see enquiries?",
      a: "Search ads can bring enquiries in the first week. The first few weeks are about cleaning up search terms and proving the tracking works, and we report on real enquiries, not clicks.",
    },
    {
      q: "Do you work outside Melbourne?",
      a: "Yes. We're based in Melbourne and work with providers across Australia.",
    },
  ],
});

// Trade-specific pages (11 Oct 2026). Same proof, packages and check-up as /tradie-marketing; only the copy,
// the trade list order and the Google Ads keywords differ. Builders get the 10-enquiry guarantee (fewer,
// bigger jobs); plumbers and electricians 15.
function tradePage(o: {
  slug: string; trade: string; plural: string; eyebrow: string; title: string; description: string; keywords: string[];
  headline: string; headlineAccent: string; intro: string; problems: { title: string; copy: string }[];
  heroPoints: string[]; guarantee: ReturnType<typeof enquiryGuarantee>; extraFaqs: { q: string; a: string }[];
}): NicheConfig {
  return {
    ...tradies,
    slug: o.slug,
    path: `/${o.slug}`,
    meta: { title: o.title, description: o.description, keywords: o.keywords },
    eyebrow: o.eyebrow,
    headline: o.headline,
    headlineAccent: o.headlineAccent,
    intro: o.intro,
    audience: o.plural,
    businessOptions: [o.trade, ...tradies.businessOptions.filter((t) => t !== o.trade)],
    heroPoints: o.heroPoints,
    problems: o.problems,
    guarantee: o.guarantee.guarantee,
    faqs: [...o.guarantee.faqs, ...o.extraFaqs, ...tradies.faqs.filter((f) => !/lock-in|guarantee/i.test(f.q))],
  };
}

const builderGuarantee = enquiryGuarantee(10);

export const plumbers: NicheConfig = tradePage({
  slug: "plumber-marketing",
  trade: "Plumber",
  plural: "plumbers",
  eyebrow: "MARKETING FOR PLUMBERS",
  title: "Marketing for Plumbers | Google Ads, SEO & Websites | Seam Media",
  description:
    "Marketing for plumbers that gets the phone ringing: Google Maps, a fast website, local SEO and Google Ads built around blocked drains, hot water and emergency calls. Month to month, no lock-in. Free Google Maps check-up.",
  keywords: ["marketing for plumbers", "plumber marketing", "plumber seo", "seo for plumbers", "google ads for plumbers", "plumber website design"],
  headline: "Burst pipe at 6 am.",
  headlineAccent: "Be the plumber they find.",
  intro:
    "When a pipe bursts or a drain blocks, people search Google on their phone and call the first plumber that looks trustworthy. We handle your Google Maps profile, website, local SEO and Google Ads so that plumber is you.",
  heroPoints: [
    "Google Maps profile and reviews, so you're in the top three for \"plumber near me\"",
    "A fast website with a page for every service and suburb",
    "Google Ads built around urgent, high-value jobs: blocked drains, hot water, burst pipes, gas",
    "We bid more for a hot water or gas job than a dripping tap, so your budget follows job value",
  ],
  problems: [
    { title: "You're not in the top three on Maps", copy: "\"Plumber near me\" shows three businesses on the map before anything else. If your Google profile is thin on reviews, photos or services, the call goes to one of the other three." },
    { title: "Emergency searches happen on a phone", copy: "Someone with water on the floor isn't reading your homepage. If the number isn't one tap away, or the site takes four seconds to load, they've already called the next plumber." },
    { title: "One page can't rank for everything", copy: "Hot water, blocked drains, gas fitting, bathroom plumbing: Google ranks a page for each service and suburb. A single \"services\" page leaves most of those searches to competitors." },
  ],
  guarantee: tradieGuarantee,
  extraFaqs: [
    { q: "Which plumbing jobs are worth advertising on Google?", a: "Urgent, high-value ones: blocked drains, hot water, burst pipes, gas and leak detection. People searching those call straight away, so we bid more for them than for small jobs like a dripping tap, and build the ads and tracking around calls, not clicks." },
  ],
});

export const builders: NicheConfig = tradePage({
  slug: "builder-marketing",
  trade: "Builder",
  plural: "builders",
  eyebrow: "MARKETING FOR BUILDERS",
  title: "Marketing for Builders | Google Ads, SEO & Websites | Seam Media",
  description:
    "Marketing for builders and renovators: a website that shows your work, a Google profile that wins the comparison, local SEO and Google Ads tracked on real enquiries. Month to month, no lock-in. Free Google Maps check-up.",
  keywords: ["marketing for builders", "builder marketing", "seo for builders", "google ads for builders", "builder website design", "home builder marketing"],
  headline: "Big jobs start with a Google search.",
  headlineAccent: "Make sure they find you.",
  intro:
    "Renovations, extensions and new builds are researched online for weeks before anyone picks up the phone. We make sure your website, Google profile and ads show up at every step, with the proof that wins the quote.",
  heroPoints: [
    "A Google profile and reviews that win the comparison with other builders",
    "A website that shows your projects, your process and the areas you build in",
    "Google Ads tracked on real enquiries, so you know what each one cost",
    "More of your ad budget on extensions and renovations, less on small repair jobs",
  ],
  problems: [
    { title: "Homeowners compare before they call", copy: "They look at three or four builders on Google Maps, read the reviews and check the websites. If yours is missing, half-finished or has few reviews, you're not in the running." },
    { title: "Your website doesn't show your work", copy: "A builder's site has one job: prove you've done this before. No project photos, no areas, no clear next step, and the enquiry goes to someone who shows all three." },
    { title: "Every enquiry is worth tracking", copy: "When one job can be worth tens of thousands, knowing which ad, page or search brought each enquiry changes where the next dollar goes. Most builders' ads aren't tracked at all." },
  ],
  guarantee: builderGuarantee,
  extraFaqs: [
    { q: "Why is the guarantee 10 enquiries for builders?", a: "Building and renovation enquiries are fewer and bigger than, say, plumbing call-outs, and each one is worth far more. Ten genuine enquiries in 60 days is the number we're confident of for a builder on at least $50 a day in ads." },
  ],
});

export const electricians: NicheConfig = tradePage({
  slug: "electrician-marketing",
  trade: "Electrician",
  plural: "electricians",
  eyebrow: "MARKETING FOR ELECTRICIANS",
  title: "Marketing for Electricians | Google Ads, SEO & Websites | Seam Media",
  description:
    "Marketing for electricians: Google Maps, a fast website, local SEO and Google Ads built around switchboards, rewires, EV chargers and emergency call-outs. Month to month, no lock-in. Free Google Maps check-up.",
  keywords: ["marketing for electricians", "electrician marketing", "seo for electricians", "google ads for electricians", "electrician website design"],
  headline: "Safety switch tripped at 9 pm.",
  headlineAccent: "Be the sparky they find.",
  intro:
    "From a tripped switchboard to a full rewire, people search Google first and call the electrician that looks local, licensed and quick. We handle your Google Maps profile, website, local SEO and Google Ads so that's you.",
  heroPoints: [
    "Google Maps profile and reviews, so you're in the top three for \"electrician near me\"",
    "A fast website with a page for every service and suburb, licence and insurance up front",
    "Google Ads built around the jobs you want: switchboards, rewires, EV chargers, emergencies",
    "We bid more for switchboards, rewires and EV chargers than for small call-outs",
  ],
  problems: [
    { title: "You're not in the map pack", copy: "\"Electrician near me\" shows three businesses on the map first. If your profile is missing services, photos or recent reviews, you're not one of them." },
    { title: "The call happens on a phone, fast", copy: "A tripped switchboard means someone standing in the dark with their phone. If your number isn't one tap away, they call whoever's is." },
    { title: "Licence and reviews win the job", copy: "People want a licensed, insured, well-reviewed electrician. If that's not obvious within seconds on your site and your Google profile, they keep looking." },
  ],
  guarantee: tradieGuarantee,
  extraFaqs: [
    { q: "Which electrical jobs are worth advertising on Google?", a: "Urgent and higher-value ones: switchboard upgrades, rewires, EV charger installs, emergency call-outs and commercial work. We bid more for those than for small call-outs, build the ads and tracking around them, and keep the small jobs for your Google profile and SEO." },
  ],
});

// Pages matched to the "Landscapers, roofers, concreters" and "Tradie websites" ad groups (15 Oct 2026), so each
// keyword lands on a page about the same thing. Same proof, packages, check-up and 15-enquiry guarantee as
// /tradie-marketing; only the copy differs. Keep claims to what the other trade pages already say.
export const landscapers: NicheConfig = tradePage({
  slug: "landscaper-marketing",
  trade: "Landscaper",
  plural: "landscapers",
  eyebrow: "MARKETING FOR LANDSCAPERS",
  title: "Marketing for Landscapers | Google Ads, SEO & Websites | Seam Media",
  description:
    "Marketing for landscapers: a Google profile and website that show your work, local SEO and Google Ads built around makeovers, paving and retaining walls. Month to month, no lock-in. Free Google Maps check-up.",
  keywords: ["marketing for landscapers", "landscaping marketing", "landscaper marketing", "seo for landscapers", "landscaping website design", "website for landscapers"],
  headline: "People plan their garden on Google.",
  headlineAccent: "Be the landscaper they call.",
  intro:
    "Backyard makeovers, paving, decking and retaining walls are researched online before anyone asks for a quote. We handle your Google Maps profile, website, local SEO and Google Ads so your work is what they find.",
  heroPoints: [
    "Google Maps profile and reviews, so you show up for \"landscaper near me\"",
    "A website that shows your projects, with a page for every service and suburb",
    "Google Ads built around the jobs you want: makeovers, paving, decking, retaining walls",
    "We bid more for a full backyard makeover than a quick tidy-up, so your budget follows job value",
  ],
  problems: [
    { title: "Homeowners compare before they call", copy: "They look at three or four landscapers on Google Maps, scroll the photos and read the reviews. If your profile is thin on project photos, they call someone whose isn't." },
    { title: "Your work isn't on your website", copy: "Landscaping sells on photos. A site without recent projects, the suburbs you cover and a clear way to ask for a quote sends people straight back to Google." },
    { title: "One page can't rank for everything", copy: "Paving, turf, retaining walls, garden design: Google ranks a page for each service and suburb. A single \"services\" page leaves most of those searches to competitors." },
  ],
  guarantee: tradieGuarantee,
  extraFaqs: [
    { q: "Which landscaping jobs are worth advertising on Google?", a: "The bigger ones: backyard makeovers, paving, decking, retaining walls and garden design. We bid more for those than for small maintenance jobs, and build the ads and tracking around calls and quote requests." },
  ],
});

export const roofers: NicheConfig = tradePage({
  slug: "roofer-marketing",
  trade: "Roofer",
  plural: "roofers",
  eyebrow: "MARKETING FOR ROOFERS",
  title: "Marketing for Roofers | Google Ads, SEO & Websites | Seam Media",
  description:
    "Marketing for roofers: Google Maps, a fast website, local SEO and Google Ads built around re-roofs, restorations and storm repairs. Month to month, no lock-in. Free Google Maps check-up.",
  keywords: ["marketing for roofers", "roofing marketing", "roofer marketing", "seo for roofers", "roofing website design", "google ads for roofers"],
  headline: "Roof leaking after a storm.",
  headlineAccent: "Be the roofer they find.",
  intro:
    "When a roof leaks, people search Google on their phone and call the first roofer that looks local and reliable. Re-roofs and restorations get researched for weeks. We handle your Google Maps profile, website, local SEO and Google Ads so that roofer is you.",
  heroPoints: [
    "Google Maps profile and reviews, so you're in the top three for \"roofer near me\"",
    "A fast website with a page for every service and suburb, and photos of your finished roofs",
    "Google Ads built around the jobs you want: re-roofs, restorations, storm and leak repairs",
    "We bid more for a re-roof or restoration than a few broken tiles, so your budget follows job value",
  ],
  problems: [
    { title: "You're not in the map pack", copy: "\"Roofer near me\" shows three businesses on the map first. If your profile is missing services, photos or recent reviews, you're not one of them." },
    { title: "Leak calls happen on a phone, fast", copy: "Water coming through the ceiling means someone calling the first roofer they find. If your number isn't one tap away, they call whoever's is." },
    { title: "Big jobs need proof", copy: "A re-roof is a big decision. Homeowners want to see finished roofs and reviews before they ask for a quote. If your site doesn't show them, they keep looking." },
  ],
  guarantee: tradieGuarantee,
  extraFaqs: [
    { q: "Which roofing jobs are worth advertising on Google?", a: "Re-roofs, restorations, storm damage and leak repairs. People searching those are ready to get quotes, so we bid more for them than for small repairs, and build the ads and tracking around calls and quote requests." },
  ],
});

export const tradieWebsites: NicheConfig = {
  ...tradePage({
    slug: "tradie-websites",
    trade: "Plumber",
    plural: "tradies",
    eyebrow: "WEBSITES FOR TRADIES",
    title: "Websites for Tradies | Fast Tradie Web Design | Seam Media",
    description:
      "Websites for tradies that get calls: fast on a phone, a page for every service and suburb, set up and looked after for you. Packages from $140 a week plus GST, billed weekly. Free Google Maps check-up.",
    keywords: ["tradie websites", "websites for tradies", "website for tradies", "web design for tradies", "tradie website design", "tradie web design"],
    headline: "A website that wins the job,",
    headlineAccent: "not just a business card.",
    intro:
      "Most tradie websites look fine but don't get calls: slow on a phone, no suburb pages, no clear next step. We build fast websites for tradies with a page for every service and suburb you work in, then look after them for you.",
    heroPoints: [
      "Fast on a phone, with your number one tap away",
      "A page for every service and suburb, so Google can rank you for each one",
      "Set up and looked after for you, billed weekly with no big upfront cost",
      "Connected to your Google Maps profile, and ready for Google Ads when you want more work",
    ],
    problems: [
      { title: "Slow on a phone", copy: "Most tradie searches happen on a phone, in a few seconds. If your site is slow or the number is hard to find, people hit back and call the next tradie." },
      { title: "No pages for your services and suburbs", copy: "Google ranks pages, not businesses. One \"services\" page can't rank for every job in every suburb you cover, so those searches go to competitors." },
      { title: "No clear next step", copy: "No tap-to-call button, no quote form and no photos of your work means visitors leave without getting in touch." },
    ],
    guarantee: tradieGuarantee,
    extraFaqs: [
      { q: "What makes a tradie website get calls?", a: "Speed on a phone, your number at the top, a page for each service and suburb, real photos of your work, reviews and a simple quote form. We build all of that in from the start." },
    ],
  }),
  problemsHeading: "Why most tradie websites don't get calls",
  reviews: [reviews.brodie, reviews.lacey, reviews.rod],
};
