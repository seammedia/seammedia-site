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
const ndisPracticeStandards = { title: "NDIS Commission: NDIS Practice Standards", url: "https://www.ndiscommission.gov.au/providers/registered-ndis-providers/provider-obligations-and-requirements/ndis-practice-standards" };
const ahpraGuidelines = { title: "Ahpra: guidelines for advertising a regulated health service", url: "https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Advertising-guidelines.aspx" };
const physioBoard = { title: "Physiotherapy Board of Australia: codes and guidelines", url: "https://www.physiotherapyboard.gov.au/Codes-Guidelines.aspx" };
const googleReviews = { title: "Google: tips to get more reviews", url: "https://support.google.com/business/answer/3474122" };
const googleSeoStarter = { title: "Google: SEO starter guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" };
const googleTitleLinks = { title: "Google: influencing your title links in search results", url: "https://developers.google.com/search/docs/appearance/title-link" };
const wcag = { title: "W3C: Web Content Accessibility Guidelines (WCAG) overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" };

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
  {
    date: "2026-10-20",
    category: "Trades",
    excerpt: "Marketing for builders and renovators: show your finished work, win the side-by-side comparison on Google, follow up slow-moving leads and track which enquiries become quotes.",
    guide: {
      title: "Marketing for builders: winning the comparison before the quote",
      path: "/blog/marketing-for-builders",
      description: "How builders and renovators can win more projects: project pages, a strong Google profile, reviews, follow-up and tracking which leads become quotes.",
      published: "2026-10-20", modified: "2026-10-20",
      intro: [
        "Building and renovation work is rarely an impulse decision. A homeowner planning an extension or a new kitchen might spend weeks looking at builders online before they make a single call. They look at photos of finished projects, read reviews, check where you work and try to get a feel for whether you take on jobs their size. By the time they ring, they have usually narrowed it down to two or three builders.",
        "That means a builder's marketing is mostly about being on that shortlist. This guide covers what helps you get there, and how to tell which marketing is producing quotes rather than just website visits.",
      ],
      sections: [
        { title: "Be specific about the work you want", paragraphs: [
          "Builders who say they do everything make it hard for a homeowner to picture them on their job. Be clear about the projects you want more of, such as extensions, second storeys, bathroom and kitchen renovations, knockdown rebuilds or decks, and the type and size of job you usually take on. If you do not take on small repairs, say so politely. It saves you time on enquiries you would turn down anyway.",
          "Give each main type of project its own page. An extensions page can explain how you approach the work, the stages from first meeting to handover, what affects the cost and what the homeowner needs to have ready, such as plans or council approvals. A single services page with a list of everything you do rarely ranks for any of those searches.",
        ], checklist: ["List the three or four project types you want more of.", "Give each one a page with real detail about how you work.", "Say what jobs you do not take on, so enquiries fit."] },
        { title: "Let your finished projects do the selling", paragraphs: [
          "For a builder, photos of your own completed work are the most persuasive thing on the website. Write a short case study for a handful of projects: the suburb, what the client wanted, any challenges such as a sloping block or an older home, and photos at different stages. Ask clients for permission before you publish photos of their home.",
          "Avoid stock photos of buildings you did not build. Homeowners can usually tell, and it undermines everything else on the page.",
        ], checklist: ["Five to ten projects with photos and a short story each.", "Group projects by type so visitors can find similar work.", "Client permission for every photo you use."] },
        { title: "Win the comparison on Google", paragraphs: [
          "Many homeowners start on Google Maps, comparing builders' profiles side by side. Choose the primary category that best describes your business, add your services, set your real service areas and upload photos of completed projects. Google says local results depend mainly on relevance, distance and prominence, so complete details help with relevance and genuine reviews help with prominence.",
          "Ask every happy client for a Google review once the job is handed over, while they are pleased with the result. A review that mentions the type of project and the suburb is more useful to the next homeowner than a one-line rating. Do not offer anything in exchange for reviews; Google treats incentivised reviews as fake engagement.",
          "Reply to every review, including the occasional negative one, calmly and helpfully. Homeowners comparing builders read replies as closely as the reviews themselves, because they show how you handle problems during a long project.",
        ] },
        { title: "Show your credentials clearly", paragraphs: [
          "Homeowners want to know they are dealing with a licensed or registered builder. Show your licence or registration details as your state requires, along with memberships, insurances and warranties you genuinely hold. Keep the claims factual and easy to check.",
        ] },
        { title: "Follow up enquiries that take time", paragraphs: [
          "A building enquiry might not turn into a signed contract for months. Reply quickly to every enquiry, even if it is only to confirm you have it and when you will call. Keep a simple record of each lead, what stage it is at and when to follow up. Builders often lose work simply because nobody checked back in after the first quote.",
          "Be clear in your first conversation about how your quoting works, such as whether there is a site visit, how long a quote takes and what you need from the homeowner. Setting expectations early filters out poor fits and makes the homeowner more comfortable choosing you.",
        ], checklist: ["Acknowledge every enquiry within one business day.", "Record where each enquiry came from.", "Set a follow-up date for every open quote."] },
        { title: "Track which enquiries become quotes", paragraphs: [
          "Because each job can be worth a lot, knowing which source brought each enquiry changes where you spend. If you run Google Ads, count calls from ads and completed enquiry forms as conversions, and bid more for searches tied to the projects you want, such as extensions, than for small jobs. Block searches for building courses, jobs and DIY advice with negative keywords.",
          "Seam Media's builder marketing page explains how we handle websites, Google profiles and Google Ads for builders, including the enquiry guarantee for new Google Ads clients. The terms are set out on that page.",
        ] },
      ],
      sources: [googleLocal, googleReviews, googleProfileRules, googleCalls],
      links: [{ title: "Marketing for builders", path: "/builder-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }, packagesLink],
    },
  },
  {
    date: "2026-10-21",
    category: "NDIS & allied health",
    excerpt: "Marketing for physiotherapists: clear service pages, a complete Google profile, referral pathways and advertising that stays within Ahpra's rules for registered health practitioners.",
    guide: {
      title: "Marketing for physiotherapists: getting found without breaking Ahpra's rules",
      path: "/blog/marketing-for-physiotherapists",
      description: "How physio practices can attract the right patients: service pages, Google Business Profile, referrers, mobile and NDIS physio, and Ahpra-compliant ads.",
      published: "2026-10-21", modified: "2026-10-21",
      intro: [
        "People looking for a physiotherapist usually want to know three things quickly: whether you treat their problem, whether you are close by or can come to them, and how soon they can be seen. A physio practice that answers those questions clearly on its website and Google profile will usually get more of the right bookings than one that relies on a long list of techniques.",
        "Physiotherapists are registered health practitioners, so their advertising is regulated by the Physiotherapy Board of Australia and Ahpra. This guide covers practical marketing steps and the advertising rules that shape them.",
      ],
      sections: [
        { title: "Build pages around what patients are dealing with", paragraphs: [
          "Patients search for their problem and their situation, such as physio for back pain, post-surgery rehab, sports injury physio or home visit physio for an older parent. Give your main services their own pages and explain who they suit, what a first appointment involves, how long it takes and what to bring. Use plain language first and clinical terms second.",
          "Describe what you do and how you work. Avoid pages that read as promises, such as claims that a treatment will fix a condition in a set number of sessions.",
        ], checklist: ["A page for each main service or patient group.", "What to expect at the first appointment.", "Fees, rebates and funding options explained clearly."] },
        { title: "Be clear about where and how you see people", paragraphs: [
          "Say whether you see patients in a clinic, at home, in aged care or by telehealth, and which areas you cover. If you are a mobile physio, list your real service areas rather than every suburb in the city, and keep your website and Google profile consistent.",
          "If you work with NDIS participants, explain which funding arrangements you accept and what information you need with a referral. Mobile physio and NDIS work often come through referrers rather than search, so this detail matters to them as much as to patients.",
          "If you offer telehealth, explain which appointments suit it and which need to be in person, and how a telehealth session works from the patient's side.",
        ] },
        { title: "Get your Google Business Profile right", paragraphs: [
          "Choose the most accurate primary category, add your services, opening hours and booking link, and upload real photos of your clinic and team. Google says local results depend mainly on relevance, distance and prominence, so accurate details and a steady flow of genuine reviews both help. Keep your business name as it appears on your signage, without added keywords.",
          "Reply to reviews professionally and never confirm that the reviewer is a patient or discuss their treatment in a public reply, as that can breach their privacy. Google reviews are written by patients on a platform you do not control. Ahpra's testimonial guidance explains when reproducing or sharing them in your own advertising becomes a problem, so check it before quoting reviews on your website or social media.",
        ] },
        { title: "Know the advertising rules before you publish", paragraphs: [
          "Ahpra's guidelines for advertising a regulated health service apply to physiotherapists. Advertising must not be false, misleading or deceptive, must not offer gifts or discounts without stating the terms, must not use testimonials or purported testimonials, must not create an unreasonable expectation of beneficial treatment and must not directly or indirectly encourage the indiscriminate or unnecessary use of services. These rules apply to your website, social media and ads.",
          "In practice, be careful about sharing patient reviews or success stories in your own advertising, avoid before and after claims that imply guaranteed results and make sure any offer, such as a discounted first appointment, states its terms clearly. Ahpra's advertising hub has checklists and examples. If you are unsure about a piece of content, check it against the guidelines before it goes live.",
        ], checklist: ["No testimonials in your advertising.", "No promised outcomes or unreasonable expectations.", "Clear terms on any offer or discount."] },
        { title: "Look after your referrers", paragraphs: [
          "GPs, surgeons, support coordinators, aged care staff and other allied health practitioners can be a steady source of patients. Make referring easy with a simple referral form, a named contact and a quick acknowledgement. Tell referrers how quickly you can see new patients and keep that information current.",
        ] },
        { title: "Measure bookings by source", paragraphs: [
          "Record where each new patient came from: Google search, Maps, ads, referrers or word of mouth. If you run Google Ads, count calls from ads and completed booking or enquiry forms as conversions, and avoid sending any health information to ad platforms. Over a few months this shows which channels bring the patients you want.",
          "Look at which services and areas bring new patients, not just total numbers. A mobile practice might find that one suburb or one service produces most of its bookings, which is useful when deciding where to focus the website, Google profile and ad budget next.",
          "Seam Media's allied health page explains how we run Google Ads, websites and Google profiles for mobile physio, OT, speech and NDIS providers.",
        ] },
      ],
      sources: [ahpraGuidelines, ahpraAdvertising, physioBoard, googleLocal],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-22",
    category: "Trades",
    excerpt: "A step-by-step Google Business Profile guide for tradies: categories, service areas, hiding your home address, photos, reviews and the mistakes that get profiles suspended.",
    guide: {
      title: "Google Business Profile for tradies: a setup and upkeep checklist",
      path: "/blog/google-business-profile-for-tradies",
      description: "How tradies can set up a Google Business Profile: categories, service areas, hiding a home address, photos, reviews and avoiding suspension.",
      published: "2026-10-22", modified: "2026-10-22",
      intro: [
        "For most tradies, the Google Business Profile is the first thing a customer sees. Someone searching for a plumber, electrician or fencer near them is usually shown a map with three businesses before any websites, and many people call straight from that list. A complete, accurate profile is one of the cheapest ways to get more of those calls.",
        "This checklist covers how to set the profile up properly as a service-area business, how to keep it active and which mistakes can get it suspended.",
      ],
      sections: [
        { title: "Set it up as a service-area business", paragraphs: [
          "If you travel to customers rather than having them come to you, Google treats you as a service-area business. You can hide your address if you work from home, and list the areas you serve instead. Google lets you set up to 20 service areas, based on cities, postcodes or other areas, and says the overall area should not extend more than about two hours' driving time from where your business is based.",
          "Be accurate rather than ambitious. Listing suburbs you rarely visit will not help much and can lead to calls you have to turn away. Keep the areas on your profile consistent with the areas named on your website.",
        ], checklist: ["Hide your address if customers do not visit you.", "Add your real service areas, up to 20.", "Match the areas on your website."] },
        { title: "Choose categories and services carefully", paragraphs: [
          "Your primary category has a big effect on which searches you appear for, so choose the one that best describes your main trade, such as Plumber or Electrician. Add secondary categories only for work you genuinely do. Then add your services, with short descriptions in the words customers use.",
          "Write the business description in plain language: what you do, the areas you cover and what makes you a sensible choice, such as how long you have been operating or the jobs you specialise in. Leave out links, prices and promotional claims you cannot back up. The description will not win you calls on its own, but a clear one helps customers who have already tapped your listing.",
        ] },
        { title: "Keep the name honest", paragraphs: [
          "Your business name on Google should match the name on your van, invoices and signage. Google's guidelines do not allow extra keywords, suburbs or slogans in the business name, and profiles that add them can be suspended. If your registered business name already includes your trade, that is fine; adding \"Best Emergency Plumber Frankston\" to it is not.",
          "Use a local phone number or mobile that someone answers, and a website link that goes to a relevant page. If you have more than one profile for the same business, sort it out, as duplicates can confuse customers and Google.",
        ] },
        { title: "Add photos and keep it active", paragraphs: [
          "Upload photos of your own work, your vehicles and your team. Real photos help customers trust that you are a genuine local business, and they are often what makes someone tap your listing rather than the next one. Add new photos as you finish jobs.",
          "Keep your hours accurate, including public holidays, and answer questions customers ask on your profile. Posts and updates are optional, but an active profile with recent photos and reviews gives a better impression than one untouched for years.",
        ], checklist: ["Ten or more real photos of your work.", "Accurate hours, including holidays.", "New photos every month or two."] },
        { title: "Build reviews the right way", paragraphs: [
          "Reviews help with prominence, which Google lists alongside relevance and distance as the main factors for local results. Ask every happy customer, ideally by sending your review link by text the same day the job is done. Google's help pages suggest reminding customers to leave reviews and sharing a link to make it easy.",
          "Google's policies do not allow incentives such as discounts or free work in exchange for reviews, and treat them as fake engagement. Reply to reviews in a calm, helpful way, including negative ones. A professional reply to a bad review can reassure the next customer reading it.",
        ] },
        { title: "Check what it brings in", paragraphs: [
          "Your profile's performance screen shows calls, website clicks and direction requests over time. Note the calls in your own job records too, so you can see how many become paid work. If you also run Google Ads, keep the two separate in your reporting so you know what each is doing.",
          "Look for patterns rather than single days. If calls drop after you change your categories or service areas, change them back and watch again. If direction requests climb but you do not have a shopfront, check that your address is hidden as intended.",
          "Google Business Profile management, review support and weekly map-pack visibility scans are part of Seam Media's Growth and Complete Growth packages. Our tradie marketing page explains how we look after profiles for trade businesses.",
        ] },
      ],
      sources: [googleServiceArea, googleProfileRules, googleLocal, googleReviews],
      links: [{ title: "Marketing for tradies", path: "/tradie-marketing" }, fencerLink, packagesLink],
    },
  },
  {
    date: "2026-10-23",
    category: "NDIS & allied health",
    excerpt: "How NDIS providers can build steady referrals from support coordinators and plan managers: clear capacity, easy referral forms, fast responses and honest, ethical communication.",
    guide: {
      title: "NDIS referrals: how to make support coordinators' jobs easier",
      path: "/blog/ndis-referrals-support-coordinators",
      description: "How NDIS providers can earn steady referrals from support coordinators: clear capacity and areas, simple referral forms, fast replies and ethical conduct.",
      published: "2026-10-23", modified: "2026-10-23",
      intro: [
        "For many NDIS providers, referrals from support coordinators, plan managers and other professionals bring in as many new participants as online search does. Coordinators are busy, juggle many participants and need providers they can rely on. The providers who receive regular referrals are usually not the ones with the best brochures. They are the ones who are easy to refer to and who do what they say.",
        "This guide covers practical ways to make your organisation easy to refer to, and the ethical rules that shape how you build those relationships.",
      ],
      sections: [
        { title: "Make your capacity and services easy to check", paragraphs: [
          "The first question a coordinator asks is whether you can take on someone new. Keep a simple, current statement of capacity on your website: which supports you have room for, in which areas and roughly how soon. If you have a waitlist, say so and say how long it is. Out-of-date capacity information wastes everyone's time and quickly costs you trust.",
          "Describe your supports in plain language, the age groups and needs you work with, the areas you cover and whether you are a registered or unregistered provider. Coordinators need to know this to match you with participants whose funding arrangements fit.",
        ], checklist: ["A current capacity statement, updated at least monthly.", "Supports, areas and age groups in plain language.", "Registration status and funding arrangements you accept."] },
        { title: "Make referring take minutes, not days", paragraphs: [
          "Give referrers a simple referral form on your website and a direct email or phone contact for a named person. Say exactly what information you need, such as plan dates, goals, funding type and any reports, and what is optional. Long, complicated intake forms often mean a coordinator sends the participant somewhere easier.",
          "A good referral page also answers the questions coordinators usually phone about: the supports you offer, the areas you cover, current capacity, how quickly a first appointment usually happens and who to call with questions. Keep that page short and up to date, and link it from your homepage and menu so it is easy to find again.",
          "Make sure the form works. Send a test referral after any website change and confirm it reaches the right inbox. Referral forms often contain personal and health information, so they should go to a secure inbox that only the right people can access.",
        ] },
        { title: "Respond quickly and close the loop", paragraphs: [
          "Acknowledge every referral promptly, even if it is only to say you have it and when you will be in touch. If you cannot take the participant, say so quickly and, where you can, suggest another option. Coordinators remember providers who give clear answers, including clear no's.",
          "Treat plan managers well too. Clear, accurate invoices that match the agreed supports, sent on time, make you easier to work with and reduce the back and forth that frustrates everyone.",
          "Once a participant starts, keep the coordinator informed in the way they and the participant agree. Regular, concise updates help the coordinator do their job and show that you are reliable.",
        ], checklist: ["Acknowledge referrals within one business day.", "A clear yes or no on capacity.", "Agreed updates once services begin."] },
        { title: "Keep relationships ethical", paragraphs: [
          "The NDIS Code of Conduct applies to all NDIS providers and expects them to act with integrity, honesty and transparency. Participants have the right to choose their providers, so referral relationships should never put a provider's interests ahead of the participant's. Avoid gifts or payments to referrers, pressure on participants and any arrangement that could look like a conflict of interest.",
          "Registered providers also need to meet the NDIS Practice Standards, which cover areas such as participant rights and responsibilities and provider governance. If your team includes registered health practitioners, Ahpra's advertising rules apply to how their services are promoted.",
        ] },
        { title: "Show up where coordinators look", paragraphs: [
          "Coordinators often search online for providers in a participant's area, look at Google Maps and check provider websites before calling. A complete Google Business Profile, a website with clear service and area information and a visible referral page all help. Some coordinators also ask colleagues and local networks, so being known and reliable locally counts.",
          "Local provider networks, community events and information sessions can help coordinators put a face to your name. Go to share useful information, such as your capacity and how referrals work, rather than to hard-sell.",
        ] },
        { title: "Track where participants come from", paragraphs: [
          "Record the source of every referral and enquiry: which coordinator or organisation, online search, Google Maps or ads. Over time this shows which relationships and channels bring the participants you can support well. Referral numbers vary with capacity, location and the supports you offer, so track the trend rather than expecting a fixed number.",
          "Seam Media's NDIS marketing page explains how we help providers with their website, Google presence and ads alongside their referral relationships.",
        ] },
      ],
      sources: [ndisCode, ndisPracticeStandards, ahpraAdvertising],
      links: [{ title: "Marketing for NDIS providers", path: "/ndis-marketing" }, { title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-24",
    category: "Trades",
    excerpt: "Marketing for roofers: be the first call for leak and storm repairs, and win bigger re-roof and restoration quotes with project photos, a strong Google profile and tracked ads.",
    guide: {
      title: "Marketing for roofers: urgent repairs and big re-roof jobs",
      path: "/blog/marketing-for-roofers",
      description: "How roofers can win more work: fast contact for leak and storm calls, project photos for re-roofs, a strong Google profile, reviews and tracked ads.",
      published: "2026-10-24", modified: "2026-10-24",
      intro: [
        "Roofing enquiries come in two very different moods. When water is coming through a ceiling, the homeowner grabs their phone and calls the first roofer who looks local and reliable. When the roof is just old and tired, the same homeowner might spend weeks comparing quotes for a re-roof or restoration. Good roofing marketing handles both.",
        "This guide covers how to be the easy first call for urgent repairs, how to win the comparison for bigger jobs and how to tell which marketing is bringing work.",
      ],
      sections: [
        { title: "Make urgent calls easy", paragraphs: [
          "Leak and storm damage searches happen on phones, often in bad weather. Put a tap-to-call number at the top of every page on mobile, say which areas you cover and when you take urgent calls. If you offer after-hours or storm response, say so clearly, and only if someone will actually answer.",
          "After big storms, demand can outstrip what any roofer can handle. Be honest about wait times on your website and when you answer the phone. Customers are more forgiving of a clear wait than of silence.",
        ], checklist: ["Phone number one tap away on mobile.", "Service areas named on every key page.", "Honest information about response times."] },
        { title: "Give each type of roofing work its own page", paragraphs: [
          "Re-roofing, roof restoration, leak repairs, gutters and downpipes, metal roofing and tile roofing are separate searches with different customers. A page for each lets you explain what the job involves, what affects the cost and what the homeowner can expect on the day, which helps the page rank and helps the customer decide.",
          "Write for the homeowner, not other roofers. Someone with a leaking tiled roof wants to know whether it can be repaired or needs more work, and how you will find out.",
          "If you cover several suburbs or towns, a small number of area pages with genuinely local detail, such as the roof types common in older parts of the area or jobs you have completed nearby, can help you show up for local searches. Avoid copying the same page and swapping the suburb name.",
        ] },
        { title: "Use photos to sell the big jobs", paragraphs: [
          "A re-roof or restoration is a big decision, and homeowners want to see work like theirs. Before and after photos of your own completed roofs, grouped by job type, are the most persuasive content you can have. Add a sentence or two about each job: the suburb, the problem and what you did. Ask the homeowner's permission before you publish photos of their property.",
          "Avoid stock photos of roofs you did not work on. They undermine trust as soon as someone notices.",
        ], checklist: ["Before and after photos for your main job types.", "A short description for each project.", "Permission from each homeowner."] },
        { title: "Strengthen your Google Business Profile", paragraphs: [
          "Choose Roofing contractor or the category that best fits your business, add your services and set your real service areas. If you work from home, you can hide your address and show service areas instead. Upload photos of completed jobs regularly. Google says local results depend mainly on relevance, distance and prominence, so complete details and genuine reviews both help.",
          "Ask every happy customer for a review, ideally by sending your review link by text when the job is finished. Google does not allow incentives in exchange for reviews.",
        ] },
        { title: "Show credentials and warranties honestly", paragraphs: [
          "Show any licence or registration details your state requires, along with insurances and the warranties you genuinely offer on workmanship and materials. Keep it factual. Vague claims such as \"best roofer in town\" do less than a clear licence number and a real warranty.",
          "For bigger jobs, explain how your quoting works: whether you inspect the roof first, how long a written quote takes and what it includes. Follow up every open quote after a week or two. Re-roof decisions often take time, and a polite follow-up is sometimes all it takes to win the job.",
        ] },
        { title: "Run Google Ads around job value", paragraphs: [
          "If you advertise on Google, put re-roofs and restorations in their own ad groups and bid more for them than for small repairs. Add negative keywords for roofing jobs, courses, materials and DIY searches. Track calls from ads and completed quote forms as conversions, then compare the cost per enquiry for each type of job.",
          "Set an ad schedule that matches the hours someone can answer, and add a call asset so mobile searchers can ring straight from the ad. After a storm, check your budget daily so ads do not stop running at the moment demand is highest.",
          "Seam Media's roofer marketing page explains how we set up Google Maps profiles, websites, local SEO and Google Ads for roofers, including the enquiry guarantee terms for new Google Ads clients.",
        ], checklist: ["Separate ad groups for re-roofs and restorations.", "Negative keywords from day one.", "Calls and forms tracked as conversions."] },
      ],
      sources: [googleLocal, googleServiceArea, googleReviews, googleCalls],
      links: [{ title: "Marketing for roofers", path: "/roofer-marketing" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }],
    },
  },
  {
    date: "2026-10-25",
    category: "NDIS & allied health",
    excerpt: "An NDIS provider website checklist: plain-language supports, areas and capacity, funding information, an easy referral form, accessibility and ethical content.",
    guide: {
      title: "NDIS provider website checklist: what participants and coordinators look for",
      path: "/blog/ndis-provider-website-checklist",
      description: "An NDIS provider website checklist: plain-language supports, service areas, capacity, funding details, referral forms, accessibility and ethical content.",
      published: "2026-10-25", modified: "2026-10-25",
      intro: [
        "An NDIS provider's website is read by several different people: participants, families and carers, support coordinators and plan managers. Each wants slightly different information, but all of them want to find it quickly and in plain language. A website that answers their questions clearly does more than one with polished photos and vague promises.",
        "Use this checklist to review your current site or brief a new one.",
      ],
      sections: [
        { title: "Explain your supports in plain language", paragraphs: [
          "Start the homepage with what you do, who for and where. List your supports in the words participants and families use, and give the main ones their own pages. A support page should explain what the support involves, who it suits, how it is delivered and what happens after someone gets in touch.",
          "Avoid jargon where you can, and explain NDIS terms when you need them. Many participants and families are new to the scheme.",
        ], checklist: ["What you do, who for and where, at the top of the homepage.", "A page for each main support.", "NDIS terms explained in plain language."] },
        { title: "Be clear about areas, capacity and registration", paragraphs: [
          "Name the areas you genuinely cover and whether you visit homes, schools, workplaces or community settings. Keep a current statement of capacity, including any waitlist. Say whether you are a registered or unregistered NDIS provider and which funding arrangements you accept, so participants and coordinators can check fit before they enquire.",
          "Plan managers and self-managing participants also want to know how you invoice and what your service agreement covers. A short section on getting started, service agreements and invoicing answers those questions before anyone has to call.",
        ] },
        { title: "Make enquiries and referrals easy", paragraphs: [
          "Offer more than one way to get in touch: phone, email and a short form. Have a separate referral page for coordinators, with the information you need and a named contact. Tell people what happens next and how quickly you will respond, then keep to it.",
          "Test every form after any website change, and make sure enquiries containing personal or health information go to a secure inbox that only the right people can access.",
        ], checklist: ["Phone, email and a short enquiry form.", "A referral page with a named contact.", "Response times stated and met."] },
        { title: "Build accessibility in from the start", paragraphs: [
          "Many people visiting an NDIS provider's website have disability, so accessibility is not optional. The Web Content Accessibility Guidelines (WCAG) from the W3C are the widely used standard. In practice that means readable text sizes and contrast, descriptive link text, alt text on meaningful images, forms that work with a keyboard and screen reader, and captions on videos.",
          "Consider an Easy Read version of key information, such as what you offer and how to get started, and make sure the site works well on a phone.",
          "Check the site yourself with only a keyboard, and with your phone's screen reader turned on. Problems that are invisible with a mouse, such as a form you cannot finish or a menu you cannot open, show up quickly this way.",
        ], checklist: ["Good colour contrast and readable text.", "Alt text, captions and descriptive links.", "Forms usable with a keyboard and screen reader."] },
        { title: "Introduce the people behind the supports", paragraphs: [
          "Participants and families are choosing people as much as an organisation. A short team page with real photos, roles, relevant qualifications and the languages staff speak helps them feel comfortable before the first contact. If you have a manager or intake officer who handles new enquiries, introduce them by name.",
          "Include practical details too: how you match support workers or therapists to participants, what happens at the first meeting, and how participants can give feedback or make a complaint. Clear information about feedback and complaints builds trust, and it shows you take participants' rights seriously.",
        ] },
        { title: "Keep content honest and ethical", paragraphs: [
          "The NDIS Code of Conduct expects providers to act with integrity, honesty and transparency. On a website that means accurate information about services, costs and availability, no promised outcomes and no pressure. Use photos you have permission to use and respect participants' privacy in any stories you share.",
          "If your team includes registered health practitioners, such as occupational therapists or physiotherapists, their services are also covered by Ahpra's advertising rules, including restrictions on testimonials. Check those rules before adding reviews or outcome stories.",
        ] },
        { title: "Help Google understand the site", paragraphs: [
          "Give each page a clear, descriptive title and one main heading, link your support pages from the menu and homepage, and keep contact details consistent with your Google Business Profile. Google's guidance is to create content that helps people rather than content written to rank, which suits NDIS providers well: answer the questions participants and coordinators actually ask.",
          "Seam Media's NDIS marketing page explains how we build and look after websites, Google profiles and ads for NDIS providers.",
        ] },
      ],
      sources: [wcag, ndisCode, ahpraAdvertising, googleHelpful],
      links: [{ title: "Marketing for NDIS providers", path: "/ndis-marketing" }, { title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-26",
    category: "Trades",
    excerpt: "Tradie website design, page by page: what the homepage, service pages, area pages, about page and contact page each need to turn visitors into calls and quote requests.",
    guide: {
      title: "Tradie website design: a page-by-page plan",
      path: "/blog/tradie-website-design",
      description: "Tradie website design page by page: what the homepage, service, area, about, project and contact pages need to turn visitors into calls and quotes.",
      published: "2026-10-26", modified: "2026-10-26",
      intro: [
        "Most tradie websites have the same handful of pages, but small design decisions on each one decide whether a visitor calls or hits the back button. This guide walks through a typical trade business website page by page and explains what each page needs to do, what to put on it and what to leave off.",
        "It assumes most visitors are on a phone, in a hurry and comparing you with two or three other businesses, because that is how most trade searches happen.",
      ],
      sections: [
        { title: "Homepage: answer the three questions fast", paragraphs: [
          "The top of the homepage, before any scrolling on a phone, should tell visitors what you do, where you do it and how to contact you. A clear heading such as \"Plumbing and hot water repairs across the Mornington Peninsula\", a tap-to-call button and a short quote button are enough. Big sliders and slogans push those answers down the page.",
          "Below that, link your main services, show a few photos of your own work, add genuine reviews and repeat the contact options. Keep it short; the homepage's job is to send people to the right service page or straight to the phone.",
          "Keep the menu simple: Services, Areas, Projects, About and Contact covers most trade businesses. On mobile, make sure the call button stays easy to reach as people scroll, without covering the content they are trying to read.",
        ], checklist: ["Trade, area and contact visible without scrolling.", "Links to each main service.", "Real photos and reviews, not stock images."] },
        { title: "Service pages: one job per page", paragraphs: [
          "Each main service needs its own page, because Google ranks pages, not businesses. A good service page explains what the job involves, common problems you fix, what affects the price, how quickly you can attend and what happens after someone calls. Add photos of that type of job and a contact button after every few paragraphs.",
          "Give each page a descriptive title that says what the page is about. Google's guidance on title links recommends titles that are descriptive and concise, unique to each page and free of keyword stuffing.",
        ], checklist: ["One page per high-value service.", "A unique, descriptive page title.", "Contact options repeated down the page."] },
        { title: "Area pages: local detail, not copies", paragraphs: [
          "Pages for the suburbs or regions you cover can help you show up for searches in those places, but only if each one says something genuinely useful. Mention the jobs you commonly do there, local conditions that affect the work and projects you have completed nearby. A dozen near-identical pages with the suburb name swapped will do little and can look like spam.",
          "Keep the areas you target consistent with your Google Business Profile service areas, so customers and Google see the same picture.",
        ] },
        { title: "Project and review pages: proof", paragraphs: [
          "A projects page with before and after photos, the suburb and a line about the job does more selling than any description of your quality. Group projects by service so visitors can find work like theirs, and link from each service page to relevant projects. Show genuine Google reviews too, and get the customer's permission before publishing photos of their property.",
        ] },
        { title: "About and contact pages: trust and a clear next step", paragraphs: [
          "The about page should show the people customers will meet, how long you have been in business, licence details as your state requires and any warranties you genuinely offer. Keep it short and real.",
          "The contact page needs your phone number, a short form asking only for name, phone, suburb and a line about the job, your service areas and your hours. Say when you will reply, then test the form regularly to make sure enquiries arrive.",
        ], checklist: ["Real team photos and licence details.", "A form with four or five fields.", "A stated reply time, tested regularly."] },
        { title: "Speed, mobile and measurement", paragraphs: [
          "Check every page on your own phone on mobile data. Large images and heavy page builders are the usual reasons trade sites load slowly. Make sure the call button works, the form submits and nothing covers the content.",
          "Use one consistent call to action across the site, such as \"Call now\" and \"Get a quote\", in the same colour and place on every page. Visitors should never have to hunt for how to contact you.",
          "Then measure: Search Console shows which searches and pages bring visitors, and call and form tracking shows which visitors become enquiries. Seam Media builds and looks after websites for tradies; our tradie websites page explains how, and the South East Fencer case study shows a trade website's search visibility building over time.",
        ] },
      ],
      sources: [googleSeoStarter, googleTitleLinks, googleHelpful, googleServiceArea],
      links: [{ title: "Websites for tradies", path: "/tradie-websites" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, fencerLink],
    },
  },
];
