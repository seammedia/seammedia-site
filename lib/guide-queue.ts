import type { ScheduledGuide } from "@/lib/scheduled-guides";

// Daily guide queue. Each item goes live at 8 am Melbourne on its date (see lib/scheduled-guides.ts).
// Rules: facts only from the live packages page, lib/case-studies.ts or the cited official sources;
// no finance case study; link the matching niche page; Australian spelling; no em dashes.

const packagesLink = { title: "Marketing packages", path: "/marketing-packages" };
const fencerLink = { title: "The South East Fencer case study", path: "/case-studies/the-south-east-fencer" };
const googleLocal = { title: "Google: how local results are ranked", url: "https://support.google.com/business/answer/7091" };
const googleServiceArea = { title: "Google: manage service areas for service-area businesses", url: "https://support.google.com/business/answer/9157481" };
const googleProfileRules = { title: "Google: guidelines for representing your business", url: "https://support.google.com/business/answer/3038177" };
const googleHelpful = { title: "Google: creating helpful, reliable content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" };
const googleCalls = { title: "Google Ads: measure calls from ads", url: "https://support.google.com/google-ads/answer/6095882" };
const ahpraAdvertising = { title: "Ahpra: advertising hub for regulated health services", url: "https://www.ahpra.gov.au/Resources/Advertising-hub.aspx" };
const ndisCode = { title: "NDIS Commission: NDIS Code of Conduct", url: "https://www.ndiscommission.gov.au/rules-and-standards/ndis-code-conduct" };

export const guideQueue: ScheduledGuide[] = [
  {
    date: "2026-10-13",
    category: "Trades",
    excerpt: "What a tradie website needs to turn a Google search into a quote request: clear services, real service areas, fast contact options and proof.",
    guide: {
      title: "Website for tradies: what it needs to win quote requests",
      path: "/blog/website-for-tradies",
      description: "What a tradie website needs to turn Google searches into quote requests: clear services, real service areas, quick contact options, proof and tracking.",
      published: "2026-10-13", modified: "2026-10-13",
      intro: [
        "Most people who land on a tradie's website have a job in mind and two or three other businesses open in other tabs. They want to know quickly whether you do that job, whether you cover their suburb and how to get a quote. A website that answers those three questions clearly will usually do more for your enquiries than a redesign full of stock photos.",
        "This guide covers what a trade business website needs, what can wait, and how to check that the site is actually producing calls and quote requests.",
      ],
      sections: [
        { title: "Lead with the jobs you want more of", paragraphs: [
          "Start the homepage with the work you do, in the words customers search for. \"Blocked drains, burst pipes and hot water repairs\" tells a visitor and Google far more than \"Quality plumbing solutions\". If some jobs are worth more to you, give them their own page so you can explain them properly.",
          "A separate page for each main service lets you answer the questions that matter for that job: what is included, what affects the price, how quickly you can attend and what the customer should have ready. That is also what makes a page useful enough for Google to show.",
        ], checklist: ["List your three to five most valuable services.", "Give each one a page with its own heading and description.", "Use the words customers use, not internal trade terms only."] },
        { title: "Be clear about where you work", paragraphs: [
          "Say which suburbs and regions you cover, and be honest about the edges. A short list of real service areas, with a line on travel limits, builds more trust than a page claiming every suburb in the state.",
          "If you work from home or a yard rather than a shopfront, Google lets service-area businesses hide their address on their Business Profile and list the areas they serve instead. Keep the areas on your website and your profile consistent.",
        ], checklist: ["Name your main service areas on the homepage and contact page.", "Match them to your Google Business Profile service areas.", "Avoid thin copies of the same page for dozens of suburbs."] },
        { title: "Make contact take seconds", paragraphs: [
          "Put a tap-to-call phone number and a short quote form near the top of every page, especially on mobile. Ask only for what you need to call back: name, phone, suburb and a line about the job. Every extra required field loses some people.",
          "Tell visitors what happens next, such as when you will call back. If you cannot answer the phone on site, say how quickly you return missed calls, and then do it.",
        ], checklist: ["Phone number visible without scrolling on mobile.", "Quote form with four or five fields.", "A clear promise about when you will respond."] },
        { title: "Show real proof", paragraphs: [
          "Photos of your own work, your licence details where your state requires them, genuine Google reviews and a few short project examples do more than generic claims like \"best in the business\". If you have before and after photos, use them with the customer's permission.",
          "Keep proof honest and specific. A job you completed in a named suburb, with what the problem was and how you fixed it, is more convincing than a long list of adjectives.",
        ] },
        { title: "Get the basics right for Google", paragraphs: [
          "Each page needs a clear title, one main heading and a description that matches the service. The site should load quickly on a phone, and important pages should be linked from your menu or homepage so Google can find them.",
          "Google says it aims to show content written to help people rather than to rank. For a trade business that means pages that answer real customer questions about your services, not pages stuffed with suburb names.",
        ] },
        { title: "Check it is working", paragraphs: [
          "Test your own quote form and confirm the enquiry reaches the right inbox. If you run Google Ads, make sure calls and completed forms are tracked as conversions, rather than clicks on the phone number. Then look at Search Console every month to see which searches and pages are bringing visitors.",
          "Seam Media builds and manages websites for tradies as part of its packages, and our South East Fencer case study shows how a trade site's search visibility can build over time. Clicks are visits, not confirmed jobs, so judge the site on the enquiries it brings.",
        ], checklist: ["Send yourself a test enquiry every few months.", "Track calls and forms, not just clicks.", "Review Search Console monthly."] },
      ],
      sources: [googleHelpful, googleServiceArea, googleLocal],
      links: [{ title: "Marketing for tradies", path: "/tradie-marketing" }, fencerLink, packagesLink],
    },
  },
  {
    date: "2026-10-14",
    category: "Trades",
    excerpt: "SEO for plumbers in plain English: the service pages, Google Business Profile details and reviews that help you show up for urgent plumbing searches.",
    guide: {
      title: "SEO for plumbers: the pages and profile details that bring calls",
      path: "/blog/seo-for-plumbers",
      description: "Plain-English SEO for plumbers: service pages for urgent jobs, Google Business Profile details, reviews and how to measure calls, not just rankings.",
      published: "2026-10-14", modified: "2026-10-14",
      intro: [
        "Plumbing searches are often urgent. Someone with a burst pipe or no hot water picks from the first few businesses Google shows, usually on their phone. SEO for a plumber is about making sure you are one of those businesses for the jobs and areas you want, and that your listing and website make calling you the obvious next step.",
        "There are two places to work on: your Google Business Profile, which drives the map results, and your website, which drives the regular search results underneath.",
      ],
      sections: [
        { title: "Start with your Google Business Profile", paragraphs: [
          "Choose the primary category that best describes your business, add the services you actually offer and set your real service areas. Google says local results are based mainly on relevance, distance and prominence, so a complete, accurate profile helps with relevance, and genuine reviews help with prominence.",
          "Keep your name as it appears on your van and invoices. Adding keywords or suburbs to the business name breaks Google's guidelines and can get a profile suspended.",
        ], checklist: ["Correct primary category and service list.", "Real service areas, matching your website.", "Business name exactly as you trade."] },
        { title: "Give your money jobs their own pages", paragraphs: [
          "Hot water, blocked drains, burst pipes, gas work and leak detection are different searches with different customers. A page for each lets you explain what you do, when you can attend and what affects the cost. A single services page listing everything in one paragraph rarely ranks for any of them.",
          "Write each page for the customer in that situation. Someone with a leaking hot water system wants to know whether it can be repaired or must be replaced, and how quickly you can get there.",
        ], checklist: ["One page per high-value service.", "Answer the questions customers ask on the phone.", "Link each page from your menu and homepage."] },
        { title: "Cover your areas without copying pages", paragraphs: [
          "If you cover several suburbs, it is tempting to create a page for each one with the suburb name swapped in. Near-identical pages give Google little reason to show them. Write a smaller number of area pages with genuinely local information, such as the jobs you do there, older housing stock or water authority requirements, and link them to your service pages.",
        ] },
        { title: "Ask for reviews the right way", paragraphs: [
          "Ask every happy customer for a Google review, ideally with a short link sent by text after the job. Do not offer discounts in exchange, and do not write reviews yourself. Reply to reviews, good and bad, in a calm and helpful way.",
        ] },
        { title: "Measure calls, not just rankings", paragraphs: [
          "Rankings move around and differ from suburb to suburb, so a single ranking report can mislead. Track calls from your profile and website, completed forms and the searches in Search Console that bring visitors. Over a few months those numbers tell you whether the work is paying off.",
          "Seam Media's plumber marketing page explains how we combine SEO with Google Ads for plumbers, including bidding more for high-value jobs like hot water and gas than for small call-outs.",
        ], checklist: ["Record calls and forms each month.", "Check Search Console queries and pages.", "Compare the same months each year where you can."] },
      ],
      sources: [googleLocal, googleProfileRules, googleServiceArea, googleHelpful],
      links: [{ title: "Marketing for plumbers", path: "/plumber-marketing" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-15",
    category: "NDIS & allied health",
    excerpt: "A practical marketing checklist for NDIS providers: be findable locally, answer participants' and plan managers' questions, and stay within the Code of Conduct.",
    guide: {
      title: "Marketing for NDIS providers: a practical starting checklist",
      path: "/blog/marketing-for-ndis-providers",
      description: "A practical marketing checklist for NDIS providers: local visibility, a website that answers participant and plan manager questions, referrals and ethical promotion.",
      published: "2026-10-15", modified: "2026-10-15",
      intro: [
        "People looking for an NDIS provider are usually comparing a few options for themselves, a family member or someone they support. Support coordinators and plan managers are often part of the decision too. They want to know quickly what you offer, where you can help, whether you have capacity and how funding works with you.",
        "This checklist covers the basics that help the right participants find and choose you, and the rules that shape how NDIS services should be promoted.",
      ],
      sections: [
        { title: "Be clear about who you help and where", paragraphs: [
          "State the supports you provide, the age groups you work with and the areas you cover, including whether you visit homes, schools or community settings. If you have a waitlist or limited capacity in some areas, say so. Clear information saves participants and coordinators time and builds trust.",
        ], checklist: ["List your supports in plain language.", "Name the areas you genuinely cover.", "Keep capacity and waitlist information current."] },
        { title: "Explain how funding works with you", paragraphs: [
          "Participants with self-managed or plan-managed funding can generally use registered or unregistered providers, while agency-managed participants need a registered provider. Say clearly which you are and which funding arrangements you accept, so people can check before they enquire.",
          "Tell people what to send with an enquiry, such as plan goals or reports, and how quickly you reply.",
        ] },
        { title: "Get found locally", paragraphs: [
          "A complete Google Business Profile with accurate categories, services, hours and service areas helps you appear when people search nearby. Google says local results depend mainly on relevance, distance and prominence, so accurate details and genuine reviews matter. Keep your website's contact details and areas consistent with the profile.",
        ] },
        { title: "Promote ethically", paragraphs: [
          "The NDIS Code of Conduct applies to all NDIS providers, registered or not. Among other things it expects providers to act with integrity, honesty and transparency. In practice that means no pressure tactics, no promises of outcomes and accurate information about services, costs and availability.",
          "If your team includes registered health practitioners, such as occupational therapists or physiotherapists, their services are also covered by Ahpra's advertising rules, which restrict testimonials and misleading claims. Check those rules before using reviews or outcome stories in ads.",
        ], checklist: ["No outcome guarantees.", "Accurate costs and availability.", "Check Ahpra rules for regulated health services."] },
        { title: "Build relationships with referrers", paragraphs: [
          "Support coordinators, plan managers and allied health colleagues refer participants they trust. Make it easy for them: a referral page or form, a clear contact person and fast responses. A short note confirming you have received a referral goes a long way.",
        ] },
        { title: "Measure the enquiries that matter", paragraphs: [
          "Track calls, referral forms and enquiries by source, and note which ones become participants. If you run Google Ads, count calls and completed forms rather than clicks on a phone number, and check that every form actually reaches your inbox.",
          "Seam Media's NDIS marketing page explains how we help providers with their website, Google presence and ads.",
        ] },
      ],
      sources: [ndisCode, ahpraAdvertising, googleLocal],
      links: [{ title: "Marketing for NDIS providers", path: "/ndis-marketing" }, { title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-16",
    category: "Trades",
    excerpt: "How to run Google Ads for a plumbing business: separate urgent and planned jobs, bid more for high-value work, block wasted searches and track real calls.",
    guide: {
      title: "Google Ads for plumbers: how to set bids by job value",
      path: "/blog/google-ads-for-plumbers",
      description: "How plumbers can run Google Ads profitably: group urgent and planned jobs, bid more for high-value work, add negative keywords and track calls and forms.",
      published: "2026-10-16", modified: "2026-10-16",
      intro: [
        "Google Ads can put a plumbing business at the top of the page the moment someone searches for an emergency plumber. It can also spend a lot on clicks that never turn into work. The difference usually comes down to a few decisions: which jobs you advertise, how much you bid for each, which searches you block and what you count as a result.",
      ],
      sections: [
        { title: "Group searches by the job, not just the trade", paragraphs: [
          "Someone searching for hot water system replacement is worth more to most plumbers than someone asking about a dripping tap. Put high-value jobs such as hot water, gas fitting and blocked drains in their own ad groups, with ads and landing pages written for that job. That lets you see what each type of job costs and adjust it separately.",
        ], checklist: ["Separate ad groups for your main job types.", "Ads that mention the specific job.", "Each ad group sending people to a matching page."] },
        { title: "Bid more for the jobs worth more", paragraphs: [
          "With manual bidding you set what you are willing to pay per click for each keyword. Bid higher on searches tied to valuable work and lower on small call-outs. Automated bidding can work well later, once you have enough tracked enquiries for Google to learn from, but a new account usually needs that data first.",
        ] },
        { title: "Block the searches you do not want", paragraphs: [
          "Negative keywords stop your ads showing for searches such as plumbing jobs, apprenticeships, courses, parts and DIY instructions. Check the search terms report every week or two in the first months and add anything irrelevant. This is one of the fastest ways to stop wasted spend.",
        ], checklist: ["Add job, course and DIY negatives from day one.", "Review search terms regularly.", "Use phrase and exact match for core terms."] },
        { title: "Show up when you can answer", paragraphs: [
          "If nobody can answer the phone at 2 am, think carefully before running ads at that time. Set an ad schedule that matches the hours calls are answered or returned quickly, and add a call asset so mobile searchers can call straight from the ad.",
        ] },
        { title: "Count calls and forms, not phone-number clicks", paragraphs: [
          "Google Ads can measure calls from ads and set a minimum call length before a call counts as a conversion. Combined with completed enquiry forms, that gives you a real cost per enquiry. Clicks on a phone number on your website are a weak signal on their own, because many never become a call.",
          "Seam Media's plumber marketing page explains our approach, including our enquiry guarantee for new Google Ads clients. Read the terms on that page for the details.",
        ], checklist: ["Track calls from ads with a minimum call length.", "Track completed forms.", "Work out your cost per enquiry each month."] },
      ],
      sources: [googleCalls, googleLocal],
      links: [{ title: "Marketing for plumbers", path: "/plumber-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }, packagesLink],
    },
  },
  {
    date: "2026-10-17",
    category: "NDIS & allied health",
    excerpt: "Marketing for occupational therapists: reach families, participants and referrers with clear service information, local visibility and Ahpra-compliant promotion.",
    guide: {
      title: "Marketing for occupational therapists: reaching families and referrers",
      path: "/blog/marketing-for-occupational-therapists",
      description: "How occupational therapy practices can reach families, participants and referrers: clear service pages, local visibility, referral pathways and Ahpra-compliant promotion.",
      published: "2026-10-17", modified: "2026-10-17",
      intro: [
        "An occupational therapy practice usually has two audiences: the people who need therapy, or their families, and the professionals who refer them, such as support coordinators, GPs, schools and other therapists. Good marketing makes it easy for both to understand what you do, who you can see and how to get started.",
        "Because occupational therapists are registered health practitioners, promotion also has to follow Ahpra's advertising rules. This guide covers both.",
      ],
      sections: [
        { title: "Describe your services the way people search", paragraphs: [
          "Families rarely search for clinical terms. They search for things like OT for handwriting, sensory support for kids or home modifications for an older parent. Give your main services their own pages, explain who they suit and what a first appointment involves, and use plain language alongside the clinical terms.",
        ], checklist: ["A page for each main service or age group.", "Plain-language descriptions.", "What to expect at the first appointment."] },
        { title: "Make it clear where and how you see people", paragraphs: [
          "State whether you see clients in a clinic, at home, at school or by telehealth, and which areas you cover. If you are mobile, list your service areas honestly. If you have a waitlist, say so and keep it up to date.",
        ] },
        { title: "Make referring easy", paragraphs: [
          "Support coordinators and other referrers want a simple referral form, a named contact and a quick acknowledgement. Say what information you need, such as funding type and goals, and how long it takes to respond. Fast, reliable responses are often what brings repeat referrals.",
        ] },
        { title: "Follow Ahpra's advertising rules", paragraphs: [
          "Ahpra's guidance on advertising a regulated health service says advertising must not be false or misleading, must not use testimonials about clinical aspects of care, must not create unreasonable expectations of beneficial treatment and must not encourage unnecessary use of services. That affects how you use reviews, success stories and outcome claims in your website and ads.",
          "When in doubt, describe what you do and how you work rather than promising results, and check Ahpra's advertising hub before publishing.",
        ], checklist: ["No clinical testimonials in advertising.", "No promised outcomes.", "Accurate fees and funding information."] },
        { title: "Be visible in local search", paragraphs: [
          "A complete Google Business Profile with the right categories, services and service areas helps families find you nearby. Keep details consistent with your website, and respond professionally to any reviews you receive.",
        ] },
        { title: "Track enquiries by source", paragraphs: [
          "Record where each enquiry comes from: search, Maps, ads, referrers or word of mouth. Check that every web form reaches your inbox. Over time this shows which channels bring the clients you can help.",
          "Seam Media works with mobile allied health and NDIS providers. Our allied health page explains how we run Google Ads for practices like yours.",
        ] },
      ],
      sources: [ahpraAdvertising, ndisCode, googleLocal],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-18",
    category: "Trades",
    excerpt: "Marketing for electricians: win urgent call-outs and bigger jobs like switchboards and EV chargers with clear service pages, a strong Google profile and tracked ads.",
    guide: {
      title: "Marketing for electricians: from urgent call-outs to bigger jobs",
      path: "/blog/marketing-for-electricians",
      description: "How electricians can win more of the right work: service pages for switchboards, rewires and EV chargers, a strong Google profile, reviews and tracked Google Ads.",
      published: "2026-10-18", modified: "2026-10-18",
      intro: [
        "Electrical work splits into two kinds of enquiry. Urgent jobs, such as power out or a tripping safety switch, come from people who want someone now. Planned jobs, such as switchboard upgrades, rewires and EV charger installs, come from people who compare a few quotes. Your marketing should make you an easy choice for both.",
      ],
      sections: [
        { title: "Give your bigger jobs their own pages", paragraphs: [
          "Switchboard upgrades, rewires, EV charger installation and solar or battery work are separate searches with higher job values. A page for each lets you explain what the job involves, what affects the price and what the customer should expect, which helps the page rank and helps the customer decide.",
        ], checklist: ["One page per high-value service.", "Explain the process and what affects cost.", "Link each page from your menu."] },
        { title: "Make urgent work easy to call", paragraphs: [
          "For urgent searches, speed matters. Show a tap-to-call number at the top of every mobile page, say which hours you take urgent calls and what areas you cover. If you offer after-hours work, say so clearly, and only if someone will actually answer.",
        ] },
        { title: "Build a strong Google Business Profile", paragraphs: [
          "Pick the right primary category, add your services and set your real service areas. Upload photos of your own work and ask happy customers for reviews. Google says local results are mainly based on relevance, distance and prominence, so an accurate profile and genuine reviews both help.",
        ] },
        { title: "Show your credentials", paragraphs: [
          "Customers want to know they are dealing with a licensed electrician. Show your licence details as your state's rules require, along with any relevant accreditations, warranties you genuinely offer and photos of completed work.",
        ] },
        { title: "Use Google Ads for the jobs that pay", paragraphs: [
          "If you run Google Ads, bid more for searches tied to switchboards, rewires and EV chargers than for small call-outs, block job and course searches with negative keywords, and track calls and completed forms as conversions. Then compare the cost per enquiry for each type of job.",
          "Seam Media's electrician marketing page explains how we set up ads and SEO for electricians, including our enquiry guarantee terms for new Google Ads clients.",
        ], checklist: ["Separate ad groups for high-value jobs.", "Negative keywords for jobs and courses.", "Track calls and forms."] },
      ],
      sources: [googleLocal, googleProfileRules, googleCalls],
      links: [{ title: "Marketing for electricians", path: "/electrician-marketing" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-19",
    category: "NDIS & allied health",
    excerpt: "How NDIS and allied health providers can track Google Ads properly: count real calls and completed forms, check every form reaches the inbox and avoid sensitive data.",
    guide: {
      title: "Google Ads tracking for NDIS providers: counting real enquiries",
      path: "/blog/google-ads-tracking-for-ndis-providers",
      description: "How NDIS and allied health providers can track Google Ads properly: count real calls and completed forms, test form delivery and keep health information out of tracking.",
      published: "2026-10-19", modified: "2026-10-19",
      intro: [
        "Many NDIS and allied health providers running Google Ads are told the ads are converting well, yet the phone is not ringing more than usual. Often the account is counting the wrong thing, such as clicks on a phone number or page visits, instead of real calls and completed enquiry forms. Fixing the tracking is usually the first step before changing anything else.",
      ],
      sections: [
        { title: "Decide what counts as an enquiry", paragraphs: [
          "A useful conversion is a call from an ad that lasted long enough to be a real conversation, or a completed enquiry or referral form. Google Ads lets you measure calls from ads and set a minimum call length before a call counts. Clicks on a phone number, visits to a contact page and time on site are weaker signals and can make results look better than they are.",
        ], checklist: ["Calls from ads, with a minimum call length.", "Completed enquiry or referral forms.", "Phone-number clicks kept as secondary, not counted."] },
        { title: "Test that forms actually arrive", paragraphs: [
          "A form can show a thank-you message while the enquiry never reaches anyone. Send a clearly labelled test enquiry from a device that is not logged in to your website, and confirm it arrives in the right inbox. Do this after any website change.",
        ] },
        { title: "Keep health information out of tracking", paragraphs: [
          "Tracking should record that an enquiry happened, not who it was from or what their condition is. Avoid sending names, contact details or health information to ad platforms, and be careful with features that collect form data automatically. Google also restricts personalised advertising based on health, so remarketing to people based on health conditions is not allowed.",
        ] },
        { title: "Match the tracking to your answering hours", paragraphs: [
          "If calls go unanswered after hours, you are paying for missed opportunities. Run ads when someone will answer or return calls quickly, and record missed calls so you can see if this is happening.",
        ] },
        { title: "Review cost per enquiry, then optimise", paragraphs: [
          "Once tracking counts real enquiries, compare the cost per enquiry for each service and area. That tells you where to bid more, where to pull back and which searches to block. Automated bidding works better when it is learning from real enquiries rather than clicks.",
          "Seam Media's allied health page explains how we set up and audit Google Ads tracking for NDIS and allied health providers, including our enquiry guarantee terms for new Google Ads clients.",
        ], checklist: ["Cost per enquiry by service.", "Search terms reviewed regularly.", "Bidding based on real enquiries."] },
      ],
      sources: [googleCalls, ndisCode, ahpraAdvertising],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }, packagesLink],
    },
  },
];
