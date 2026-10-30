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
const googleReviewPolicy = { title: "Google: prohibited and restricted content for reviews (incentives and selective requests)", url: "https://support.google.com/contributionpolicy/answer/7400114" };
const googleNegatives = { title: "Google Ads: about negative keywords", url: "https://support.google.com/google-ads/answer/2453972" };
const googleMatchTypes = { title: "Google Ads: about keyword matching options", url: "https://support.google.com/google-ads/answer/7478529" };
const googleSearchTerms = { title: "Google Ads: about the search terms report", url: "https://support.google.com/google-ads/answer/2472708" };
const googleLocationTargeting = { title: "Google Ads: about targeting geographic locations", url: "https://support.google.com/google-ads/answer/2453995" };
const googleAdSchedule = { title: "Google Ads: about ad scheduling", url: "https://support.google.com/google-ads/answer/2404244" };
const googleHealthAds = { title: "Google Ads: healthcare and medicines policy", url: "https://support.google.com/adspolicy/answer/176031" };
const googlePersonalisedAds = { title: "Google Ads: personalised advertising policy", url: "https://support.google.com/adspolicy/answer/143465" };
const ahpraBoards = { title: "Ahpra: who we are and the 15 National Boards", url: "https://www.ahpra.gov.au/About-Ahpra/Who-We-Are.aspx" };
const nasrhpMembers = { title: "National Alliance of Self Regulating Health Professions: members", url: "https://nasrhp.org.au/members-of-nasrhp/" };
const speechPathologyAustralia = { title: "Speech Pathology Australia", url: "https://www.speechpathologyaustralia.org.au/" };

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
    excerpt: "SEO for plumbers in plain English: the Google Business Profile details, job and suburb pages, reviews and call tracking that help you show up for urgent plumbing searches.",
    guide: {
      title: "SEO for plumbers: how to get more calls from Google",
      path: "/blog/seo-for-plumbers",
      description: "SEO for plumbers in plain English: Google Business Profile, a page for each plumbing job, real suburb pages, reviews and tracking calls, not just rankings.",
      published: "2026-10-14", modified: "2026-10-30",
      intro: [
        "Plumbing searches are often urgent. Someone with a burst pipe or no hot water picks from the first few businesses Google shows, usually on their phone. SEO for a plumber is about making sure you are one of those businesses for the jobs and areas you want, and that your listing and website make calling you the obvious next step.",
        "There are two places to work on: your Google Business Profile, which drives the map results, and your website, which drives the regular search results underneath. This guide covers what SEO for plumbers involves, what to do first, how long it usually takes and when it makes sense to get help.",
      ],
      sections: [
        { title: "What SEO for plumbers actually covers", paragraphs: [
          "Most plumbing work comes from two kinds of search. The first is the map results, the three businesses Google shows on a map for searches like \"plumber near me\" or \"emergency plumber Frankston\". These come from your Google Business Profile. The second is the regular results underneath, which come from the pages on your website.",
          "The searches worth the most are the ones that name a job and a place: \"blocked drains Dandenong\", \"hot water repairs Mornington\", \"gas fitter Cranbourne\". People typing those usually want someone today. Searches like \"how to unblock a toilet\" bring visitors who often fix it themselves, so they matter less for a plumbing business.",
        ], checklist: ["List the five jobs you most want more of.", "Write down the suburbs you want them in.", "Search each job and suburb on your phone and note who shows up on the map and below it."] },
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
        { title: "Make the website easy to use on a phone", paragraphs: [
          "Most urgent plumbing searches happen on a phone, so the number should be one tap away at the top of every page, and the page should load quickly on mobile data. Show your licence details, the areas you cover and when you can attend, because those are the things people check before they call.",
          "Give each page a clear title and heading that says the job and the area, and use the same business name, phone number and address details on your website and your Google Business Profile. Google's own SEO starter guide is a good plain-English checklist for the rest.",
        ], checklist: ["Tap-to-call number at the top of every page.", "Licence details and service areas easy to find.", "A clear title and heading on every service page."] },
        { title: "Ask for reviews the right way", paragraphs: [
          "Ask every happy customer for a Google review, ideally with a short link sent by text after the job. Do not offer discounts in exchange, and do not write reviews yourself. Reply to reviews, good and bad, in a calm and helpful way.",
        ] },
        { title: "Measure calls, not just rankings", paragraphs: [
          "Rankings move around and differ from suburb to suburb, so a single ranking report can mislead. Track calls from your profile and website, completed forms and the searches in Search Console that bring visitors. Over a few months those numbers tell you whether the work is paying off.",
        ], checklist: ["Record calls and forms each month.", "Check Search Console queries and pages.", "Compare the same months each year where you can."] },
        { title: "Doing it yourself or getting help", paragraphs: [
          "A plumber can do the basics in a few evenings: fill in the Business Profile, ask for reviews and write a proper page for the main jobs. Where it gets harder is keeping it going every week, writing pages for each job and area, and checking which searches bring calls.",
          "Seam Media's plumber marketing combines local SEO with Google Ads, with a page, ad and bid for each type of plumbing job, so hot water and gas work get more budget than a dripping tap. Local SEO and Google Business Profile management are part of our Growth and Complete Growth packages. For an example of local search work for a trade business, our South East Fencer case study shows clicks from Google rising from about 3 a day in August 2025 to more than 20 a day by mid-2026.",
        ], links: [{ title: "Marketing for plumbers, including SEO and Google Ads", path: "/plumber-marketing" }, { title: "SEO for tradies", path: "/tradie-seo" }, fencerLink] },
      ],
      faqs: [
        { q: "How long does SEO take for a plumber?", a: "Google Business Profile improvements often show within a few weeks once the profile is complete and reviews start coming in. New service and suburb pages usually take a few months to rank well, so judge the work on calls and forms over three to six months rather than week to week." },
        { q: "Is SEO or Google Ads better for plumbers?", a: "They do different jobs. Google Ads can put you at the top for urgent searches from the day the campaign starts, and you pay for each click. SEO takes longer but keeps bringing calls without paying per click. Many plumbers run ads for urgent, high-value jobs while their profile and pages build up." },
        { q: "Do plumbers need a page for every suburb?", a: "No. A page for each main job matters more. Add area pages only for the places you most want work, and give each one genuinely local information rather than the same text with a different suburb name." },
        { q: "Can I put my suburb or \"plumber\" in my Google business name?", a: "Only if it is part of the name you actually trade under. Google's guidelines don't allow extra keywords or locations in the business name, and breaking them can get the profile suspended." },
        { q: "How much does SEO for plumbers cost with Seam Media?", a: "Local SEO is included in our Growth package ($235 a week plus GST, with one ad platform) and Complete Growth package ($350 a week plus GST, with Google and Meta Ads). Foundation ($140 a week plus GST) covers a website and socials only. Prices are in AUD and billed weekly; ad spend is separate." },
      ],
      sources: [googleLocal, googleProfileRules, googleServiceArea, googleSeoStarter, googleReviewPolicy, googleHelpful],
      links: [{ title: "Marketing for plumbers", path: "/plumber-marketing" }, { title: "SEO for tradies", path: "/tradie-seo" }, { title: "Google Ads for plumbers", path: "/blog/google-ads-for-plumbers" }, packagesLink],
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
      links: [{ title: "Marketing for plumbers", path: "/plumber-marketing" }, { title: "SEO for plumbers", path: "/blog/seo-for-plumbers" }, { title: "Google Ads management", path: "/google-ads-management" }, packagesLink],
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
  {
    date: "2026-10-27",
    category: "NDIS & allied health",
    excerpt: "How mobile physios, OTs and other allied health providers should set up a Google Business Profile: service-area or hybrid, real service areas, practitioner profiles, hours and reviews.",
    guide: {
      title: "Google Business Profile for mobile physios and allied health providers",
      path: "/blog/google-business-profile-mobile-allied-health",
      description: "Google Business Profile for mobile physio, OT and allied health: service-area or hybrid setup, service areas, practitioner profiles, hours and reviews.",
      published: "2026-10-27", modified: "2026-10-27",
      intro: [
        "When a family member searches for a mobile physio or an OT who does home visits, Google often shows a map with a few local providers before any websites. Mobile providers can appear there too, but only if the Business Profile is set up the way Google expects for a business that travels to its clients. Get it wrong and the profile can be hard to find, show the wrong address or be suspended.",
        "This guide covers how mobile and part-mobile allied health providers should set up and look after their profile, using Google's own guidelines.",
      ],
      sections: [
        { title: "Decide whether you are service-area or hybrid", paragraphs: [
          "Google treats a business that visits or delivers to clients, but does not see them at its own address, as a service-area business. If that is you, Google says to remove your address from the profile and set a service area instead. That also keeps a home address off the map.",
          "If you also see clients at a clinic, you may be a hybrid business: you can show the clinic address and a service area. Google's guidelines say the location should be staffed by your team and able to receive clients during its stated hours, and that a business without permanent signage at its address should be listed as service-area instead. A virtual office or mail address is not eligible, and a co-working desk only qualifies if it has clear signage and is staffed and open to clients during business hours.",
        ], checklist: ["Home visits only: hide the address and set a service area.", "Clinic plus home visits: show the clinic, add a service area.", "No virtual offices or mailbox addresses."] },
        { title: "Set the service areas you really cover", paragraphs: [
          "Google lets you set up to 20 service areas, based on cities, postcodes or other areas. Its guidelines say the overall area should not usually extend farther than about two hours' driving time from where the business is based. Choose the suburbs and regions your clinicians actually travel to, and keep them consistent with the areas named on your website.",
          "Setting a service area does not guarantee you will show in every suburb listed. Distance still matters, so a provider based in one part of a city will usually appear more often nearby than at the far edge of its list. Listing areas you rarely visit tends to bring enquiries you have to turn away, which wastes time for families and support coordinators.",
          "Google notes that approved service area changes can take up to 48 hours to show, so change areas deliberately rather than every week.",
        ] },
        { title: "Choose a practice profile, practitioner profiles or both", paragraphs: [
          "Google says a service-area business should have one profile for its central office or location with a service area. For most mobile practices, that means one profile for the practice. Do not create extra profiles for each suburb you visit, as duplicates break Google's rules and can be removed.",
          "Google does allow individual practitioners to have their own profile when they are public-facing and can be contacted directly at the verified location during stated hours. A practitioner should not have several profiles for different specialties. If a solo practitioner is the only public-facing clinician of a branded practice, Google suggests sharing one profile named in the format brand: practitioner name. For a mobile team, one well-run practice profile is usually simpler and stronger than several thin ones.",
        ] },
        { title: "Get the name, categories, services and hours right", paragraphs: [
          "Use your business name as it appears on your signage, invoices and branding, with no added suburbs or keywords such as \"Mobile Physio Melbourne\". Pick the primary category that best describes the main service, such as Physiotherapist or Occupational therapist, and add secondary categories only for services you genuinely provide.",
          "List your services in plain language, including home visits, aged care visits, NDIS supports or telehealth if you offer them, and explain in the description who you see and where. Google's guidelines say businesses that operate only by appointment generally should not list opening hours, so check the current guidance against how you work before adding hours. If you add a booking or referral link, make sure it goes to a page that works on a phone.",
        ], checklist: ["Business name with no extra keywords.", "The most accurate primary category.", "Services, funding and visit types described clearly."] },
        { title: "Handle reviews within the rules", paragraphs: [
          "Reviews help with prominence, which Google lists alongside relevance and distance as a main factor in local results. Make asking for a review a routine step at the end of an episode of care, for every client or family, without offering anything in return. Google's review policy does not allow incentives such as discounts or free sessions, and does not allow businesses to selectively ask only happy clients for reviews.",
          "Reply politely and never confirm that the reviewer is a client or mention their treatment. Physiotherapists, occupational therapists and psychologists are registered with Ahpra, so the advertising guidelines on testimonials apply to how a practice uses reviews in its own advertising. Ahpra's guidance says practitioners are not responsible for reviews on platforms they do not control, but republishing reviews about clinical outcomes on your website or social media can breach the rules. Speech pathologists and exercise physiologists are not Ahpra-registered, but making careful, accurate claims is still the safe approach.",
        ] },
        { title: "Connect the profile to your website and measure it", paragraphs: [
          "Link the profile to a website page that confirms your service areas, visit types, funding options and how to refer, so a family or support coordinator who taps through finds the same information. The profile's performance screen shows calls, website clicks and direction requests; record new clients by source too, so you can see whether the profile brings the referrals you want.",
          "Google Business Profile management and weekly map-pack visibility scans are part of Seam Media's Growth and Complete Growth packages. Our allied health page explains how we look after Google profiles, websites and Google Ads for mobile physio, OT, speech and NDIS providers.",
        ] },
      ],
      sources: [googleServiceArea, googleProfileRules, googleLocal, googleReviewPolicy, ahpraGuidelines],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-28",
    category: "Trades",
    excerpt: "Marketing for landscapers: show finished projects, win the Google comparison, qualify enquiries before you drive out to quote, and plan for busy and quiet seasons.",
    guide: {
      title: "Marketing for landscapers: more of the projects you want to quote",
      path: "/blog/marketing-for-landscapers",
      description: "Marketing for landscapers: project photos, a strong Google profile, service pages, better enquiry forms, seasonal planning and tracking what pays.",
      published: "2026-10-28", modified: "2026-10-28",
      intro: [
        "Landscaping is sold on pictures. A homeowner planning a backyard makeover, new paving or a retaining wall wants to see work like theirs, done nearby, by someone who will turn up and answer the phone. The landscapers who win those jobs usually make it easy to see their work, easy to enquire and easy to trust.",
        "This guide covers practical marketing for landscaping businesses, from photos and Google to enquiry forms, seasonal planning and measurement.",
      ],
      sections: [
        { title: "Decide which jobs you want more of", paragraphs: [
          "Landscaping covers very different work: full design and construct projects, paving and retaining walls, turf and garden makeovers, and ongoing maintenance. Each attracts different customers with different budgets. Before spending on marketing, decide which two or three types of job you want more of, and build your website, Google profile and any ads around those.",
          "If maintenance contracts keep the business steady and projects bring the margin, say both clearly, but give the projects the most space. A homepage that tries to be everything to everyone usually ends up telling nobody much.",
        ], checklist: ["Pick two or three priority job types.", "Give each one its own website page.", "Match your Google profile services to the same list."] },
        { title: "Make your project photos do the selling", paragraphs: [
          "Take good photos of every finished job, ideally with a before shot from the same angle. Group them by job type, with the suburb and a line about what was done, and link each service page to relevant projects. Ask the customer's permission before publishing photos of their property.",
          "Use the same photos on your Google Business Profile and social media. Real photos of your own work, crew and equipment build more trust than stock images of perfect gardens you did not build. Short videos walking through a finished project also work well on Instagram and Facebook.",
          "Write a few sentences with each project: what the customer wanted, any site challenges such as slope, drainage or access, the materials used and how long it took. That detail helps a homeowner picture their own job, answers questions before they ask them and gives Google more to understand about the work you do and where you do it.",
        ] },
        { title: "Win the comparison on Google", paragraphs: [
          "Choose the Google Business Profile category that best fits your main work, such as Landscaper or Landscape designer, and add secondary categories only for services you genuinely provide. If customers do not visit you, set up as a service-area business, hide your address and list the areas you actually travel to.",
          "Google says local results depend mainly on relevance, distance and prominence. Accurate services, regular photos and a steady flow of genuine reviews all help. Ask every customer for a review when the job is finished, and never offer a discount or extra work in return, as Google's policies do not allow incentives.",
          "On your website, give each priority job its own page with photos, what affects the price, typical timeframes and a clear way to enquire. Someone searching for retaining walls or paving in their suburb is more likely to find and trust a page about exactly that than a general services list.",
        ] },
        { title: "Qualify enquiries before you drive out", paragraphs: [
          "Measuring and quoting takes time, so your enquiry form should collect what you need to decide whether a job is a fit. Ask for the suburb, the type of work, a rough timeframe, a budget range and an option to upload a photo of the area. Keep it short: name, phone, suburb, job type and budget range are usually enough to start.",
          "A budget range on the form saves both sides time. It is easier to explain on the phone that a full makeover usually needs a bigger budget than to discover it on site after an hour's drive. Reply quickly, even if only to book a call, because many people contact two or three businesses at once.",
        ], checklist: ["Suburb, job type, timeframe and budget range.", "Optional photo upload.", "A stated reply time, and a test enquiry after every website change."] },
        { title: "Plan for busy and quiet seasons", paragraphs: [
          "If your enquiries are seasonal, plan for it. Use the quieter months to update your website, add finished projects to your portfolio and collect reviews, so you are ready when demand picks up. If you run ads, raise budgets ahead of your busy periods and pull back when you are booked out, rather than paying for enquiries you cannot take on.",
          "Maintenance work can smooth out the quieter months. If you offer it, give it its own page and ask project customers whether they would like ongoing care once their job is done.",
        ] },
        { title: "Follow up quotes and track what pays", paragraphs: [
          "Bigger landscaping jobs often take weeks to decide. A polite follow-up a few days after the quote, and again later, wins work that would otherwise drift to whoever called last. Keep a simple list of open quotes so none are forgotten.",
          "Record where each enquiry came from and which ones became jobs: Google Maps, search, ads, referrals or social media. Over a season this shows which channels bring the projects you want. Seam Media's landscaper marketing page explains how we run Google profiles, websites and Google Ads for landscaping businesses, and our tradie marketing page covers the wider approach.",
        ] },
      ],
      sources: [googleLocal, googleServiceArea, googleProfileRules, googleReviewPolicy],
      links: [{ title: "Marketing for landscapers", path: "/landscaper-marketing" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, fencerLink],
    },
  },
  {
    date: "2026-10-29",
    category: "NDIS & allied health",
    excerpt: "Ahpra's advertising guidelines in plain English for allied health practices: who they cover, the five rules, testimonials and reviews, offers, penalties and a practical checklist.",
    guide: {
      title: "Ahpra advertising guidelines: a plain-English guide for allied health practices",
      path: "/blog/ahpra-advertising-rules-allied-health",
      description: "Ahpra advertising guidelines in plain English for physio, OT and psychology practices: who they cover, testimonials, offers, penalties and a checklist.",
      published: "2026-10-29", modified: "2026-10-29",
      intro: [
        "If your practice offers physiotherapy, occupational therapy, psychology or another registered health profession, every ad, web page and social post that promotes those services has to meet the advertising rules in the National Law. Ahpra and the National Boards publish guidelines explaining those rules. They are not long, but they catch out many practices, usually through testimonials and claims about results.",
        "This guide summarises the rules in plain English and turns them into a checklist. It is not legal advice; Ahpra says it cannot approve advertising and recommends advertisers get their own advice, such as from a legal adviser or indemnity insurer.",
      ],
      sections: [
        { title: "Check whether the rules apply to you", paragraphs: [
          "The guidelines apply to anyone advertising a regulated health service, not just registered practitioners. That includes practice owners who are not clinicians and companies that own clinics. A regulated health service is one provided by a profession regulated by one of the 15 National Boards, which include occupational therapy, physiotherapy, psychology, podiatry, chiropractic, osteopathy, optometry, nursing and midwifery, and medicine.",
          "Some allied health professions are not regulated under the National Law. Speech pathology, exercise physiology and dietetics are self-regulated through their professional bodies, which are members of the National Alliance of Self Regulating Health Professions. If your practice offers both kinds of service, the Ahpra rules apply to how you advertise the regulated ones, and general consumer law on misleading claims applies to everything.",
        ] },
        { title: "Know the five core rules", paragraphs: [
          "Under the National Law, advertising for a regulated health service must not be false, misleading or deceptive, or likely to be. It must not offer a gift, discount or other inducement unless the terms and conditions of the offer are also stated. It must not use testimonials or purported testimonials about the service or business. It must not create an unreasonable expectation of beneficial treatment. And it must not directly or indirectly encourage the indiscriminate or unnecessary use of regulated health services.",
          "The guidelines also say claims about how well a treatment works need acceptable evidence, and that listing conditions a treatment can help with, without qualification, can be misleading. Titles matter too: using a protected title, or suggesting registration, specialist registration or qualifications someone does not hold, is an offence.",
        ], checklist: ["No false or misleading claims.", "Terms stated with any gift, discount or offer.", "No testimonials, no unreasonable expectations, no encouraging unnecessary use."] },
        { title: "Understand testimonials and reviews", paragraphs: [
          "The guidelines treat a testimonial as a recommendation or positive statement about the clinical aspects of a service used in advertising. A clinical aspect is a symptom or reason for seeking treatment, a diagnosis or treatment, or an outcome. Comments about customer service or communication style that do not mention clinical aspects are not treated as testimonials.",
          "Who is responsible depends on control. If you control a website or business social media page, you are responsible for reviews that appear or are republished there, which may mean turning off review features you cannot moderate. Ahpra says you are not responsible for removing reviews on platforms you do not control, such as Google reviews, but you should take care when engaging with them, as that may count as using a testimonial. Never quote patient success stories in ads, on your website or in social posts.",
        ] },
        { title: "Know the penalties", paragraphs: [
          "Breaching the advertising requirements is a criminal offence. Ahpra's advertising guidelines page says the maximum penalty per offence rose in 2022 to $60,000 for an individual and $120,000 for a body corporate, and that since July 2024 these higher penalties apply in all jurisdictions, including Western Australia. Registered practitioners can also face disciplinary action.",
          "Ahpra says it is a risk-based regulator that only takes regulatory action where there is a risk to the public, and it publishes an advertising compliance and enforcement strategy. That is not a reason to be casual: fixing a non-compliant website, ads and social posts after a complaint takes far more time than getting them right first.",
        ] },
        { title: "Run a checklist over every channel", paragraphs: [
          "Apply the same checks to your website, Google Business Profile, social media, Google Ads, flyers and emails. Ads and social posts are where problems usually creep in, because they are written quickly and aim to persuade.",
        ], checklist: [
          "Website: no patient stories or quotes about results; service pages describe what you do, not guaranteed outcomes.",
          "Offers: any discounted first appointment or free assessment states its terms clearly.",
          "Titles: only titles each clinician is entitled to use; no implied specialist status.",
          "Social media: review features you cannot moderate turned off; no shared posts praising clinical results.",
          "Google Ads: no testimonials or outcome promises in ad text; claims match the landing page.",
          "Before and after images: avoid them where they imply a typical or guaranteed result.",
        ] },
        { title: "Remember Google's health ad rules too", paragraphs: [
          "Google has its own healthcare and medicines advertising policy, and its personalised advertising policy restricts targeting people based on health. In practice, that means no remarketing lists built from health information and no uploading patient lists to ad platforms. Some health-related ads may also have limited reach, so check the status of your ads after changes.",
          "Seam Media manages Google Ads for NDIS and allied health providers with these rules built in from the start. Our allied health page explains how we work, and the packages page sets out what each package includes.",
        ] },
      ],
      sources: [ahpraGuidelines, ahpraAdvertising, ahpraBoards, nasrhpMembers, googleHealthAds, googlePersonalisedAds],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-10-30",
    category: "Trades",
    excerpt: "SEO for tradies, explained simply: how trade searches work, the Google profile, service and area pages, technical basics, reviews and local links, and how long results take.",
    guide: {
      title: "SEO for tradies: how to show up when locals search for your trade",
      path: "/blog/seo-for-tradies",
      description: "SEO for tradies in plain English: the map pack, Google profile, service and area pages, site basics, reviews, local links and realistic timeframes.",
      published: "2026-10-30", modified: "2026-10-30",
      intro: [
        "SEO for a trade business is not about tricking Google. It is about making it obvious to Google, and to the customer, which jobs you do, where you do them and why you are a safe choice. Most of the work is practical, and most of it also makes your website better at turning visitors into calls.",
        "This guide explains how local trade searches work and what to do, in order of impact, to show up more often for the jobs you want.",
      ],
      sections: [
        { title: "Know the two places you can appear", paragraphs: [
          "Search for a trade in your area and Google usually shows a map with a few businesses, then the ordinary website results. The map results come from Google Business Profiles; the results below come from websites. A good trade SEO plan works on both, because many customers call straight from the map and many others click through to compare websites.",
          "Google says local results are based mainly on relevance, distance and prominence. You cannot change where a customer is searching from, but you can make your profile and website clearly relevant to the job and build prominence through reviews, mentions and a well-known local presence.",
        ] },
        { title: "Start with your Google Business Profile", paragraphs: [
          "Set up as a service-area business if customers do not come to you, hide your address and list the areas you really cover. Choose the primary category that matches your main trade, add your services in the words customers use and upload real photos of your work. Keep the business name exactly as it appears on your van and invoices; adding keywords or suburbs to it breaks Google's guidelines.",
          "Ask every customer for a review, ideally by text the day the job is done, and reply to reviews politely. Do not offer discounts or anything else in return, or ask only the customers you expect to be happy, as Google's policies do not allow either.",
        ], checklist: ["Service-area setup with real areas.", "Accurate primary category and services.", "A steady flow of genuine reviews."] },
        { title: "Build a page for each job worth ranking for", paragraphs: [
          "Google ranks pages, not businesses. If you want to show up for switchboard upgrades, blocked drains or colorbond fencing, you need a page about that job: what it involves, common problems, what affects the price, how quickly you can attend and photos of jobs you have done. Give each page a clear title and one main heading that says what it is about.",
          "Google's guidance is to write content for people, not search engines. A page that genuinely answers a customer's questions about a job is what tends to rank, and it is also what convinces the customer to call.",
          "Link each service page from your menu or homepage, and link related pages to each other, such as a hot water repairs page linking to hot water replacement. Internal links help Google find and understand your pages, and they help a customer who lands on the wrong page get to the right one quickly.",
        ] },
        { title: "Cover your areas with real local detail", paragraphs: [
          "Area pages can help you appear for searches in the suburbs and regions you cover, but only if each page is genuinely useful. Mention the jobs you commonly do there, local conditions, and projects completed nearby. Dozens of copies of the same page with the suburb name swapped do little and can look like spam.",
          "Keep the areas on your website consistent with your Google Business Profile service areas, and link area pages to the relevant service pages and back.",
          "Start with the areas where you most want work and where you can genuinely show local projects. A handful of strong area pages, each with real photos and jobs from that area, is a better starting point than a long list you cannot keep up to date. Add more only when you have something specific to say about each place.",
        ] },
        { title: "Fix the technical basics and earn local mentions", paragraphs: [
          "Your site should load quickly on a phone, work on mobile without anything covering the content and have important pages linked from the menu or homepage. Set up Google Search Console so you can see which searches and pages bring visitors and whether Google has found your pages.",
          "Prominence also comes from being mentioned elsewhere. Local suppliers you buy from, builders you work with, industry associations, sponsorships of local clubs and genuine local directories can all mention or link to your business. Aim for a handful of real, relevant mentions rather than buying bulk links, which Google treats as spam.",
        ], checklist: ["Fast, mobile-friendly pages.", "Search Console set up and checked monthly.", "Real local mentions, never bought links."] },
        { title: "Be patient and measure calls", paragraphs: [
          "SEO builds over months, not days. The South East Fencer case study shows a trade website going from about 3 clicks a day from Google in August 2025 to more than 20 a day by mid-2026, with normal ups and downs along the way. Results vary by trade, area and competition, so judge progress over several months.",
          "Measure the outcome that matters: calls and quote requests from search and Maps, not just rankings. Seam Media's tradie SEO page explains how we approach local SEO for trade businesses, and the case study shows what that visibility looked like for one of them.",
        ] },
      ],
      sources: [googleLocal, googleSeoStarter, googleHelpful, googleProfileRules, googleReviewPolicy],
      links: [{ title: "SEO for tradies", path: "/tradie-seo" }, { title: "SEO for plumbers", path: "/blog/seo-for-plumbers" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, fencerLink],
    },
  },
  {
    date: "2026-10-31",
    category: "NDIS & allied health",
    excerpt: "Marketing for speech pathologists: pages built around what families and adults are dealing with, honest waitlists, easy referrals, a strong Google profile and careful claims.",
    guide: {
      title: "Marketing for speech pathologists: reaching families, adults and referrers",
      path: "/blog/marketing-for-speech-pathologists",
      description: "Marketing for speech pathology practices: service pages, honest waitlists, referrers, Google Business Profile, careful claims and tracked Google Ads.",
      published: "2026-10-31", modified: "2026-10-31",
      intro: [
        "Most people who contact a speech pathologist are worried about someone: a parent whose toddler is not talking yet, an adult child whose parent has had a stroke, or a teacher who has noticed a student struggling. They want to know quickly whether you can help with that problem, whether you can see them soon and how to get started.",
        "This guide covers practical marketing for speech pathology practices, from website pages and waitlists to referrers, Google and the rules that shape how you advertise.",
      ],
      sections: [
        { title: "Know which rules apply to you", paragraphs: [
          "Speech pathologists are not registered with Ahpra. Speech pathology is a self-regulated profession, and Speech Pathology Australia, the peak body, is a member of the National Alliance of Self Regulating Health Professions. That means the National Law's advertising rules do not apply to speech pathology services on their own, but consumer law on false or misleading claims still does.",
          "If your practice also offers registered services, such as occupational therapy, physiotherapy or psychology, Ahpra's advertising guidelines apply to how you promote those. Many practices find it simplest to follow the same careful approach across everything: no promised outcomes, no patient success stories in ads and clear terms on any offer.",
        ] },
        { title: "Build pages around what people are dealing with", paragraphs: [
          "Families and adults search for the problem, not the clinical term. Give your main areas their own pages, such as late talking and speech delay, stuttering, literacy support, feeding, or communication and swallowing after a stroke, depending on what you offer. On each page, explain who it suits, what a first appointment involves, who should come along and what happens next.",
          "Say clearly whether you see children, adults or both, whether you work in a clinic, at home, at school or kindergarten, or by telehealth, and which areas you cover.",
          "Write in plain language that a worried parent can follow, and explain clinical terms when you use them. Describe what you do and how you work rather than promising results, such as a set number of sessions to fix a problem. Real photos of your clinic and therapy rooms help families picture the first visit, which matters a lot for young children.",
        ], checklist: ["A page for each main area of practice.", "Who you see, where and how.", "What the first appointment involves."] },
        { title: "Be honest about waitlists and funding", paragraphs: [
          "Waitlists are a common frustration for families. If you have one, say roughly how long it is and keep it up to date. Families and referrers appreciate a clear answer, even when it is not the answer they hoped for, and it saves your admin team from repeating it on the phone.",
          "Explain how fees and funding work with you, such as private fees, NDIS funding arrangements you accept, health fund rebates or Medicare referrals where they apply, and what paperwork you need. Keep it accurate and current; this is one of the first things families and support coordinators check.",
        ] },
        { title: "Make referring easy", paragraphs: [
          "GPs, paediatricians, maternal and child health nurses, teachers, early childhood educators and support coordinators can all send families your way. Give them a simple referral form, a named contact and a quick acknowledgement. Tell them what information helps, such as reports or plan details, and how soon you can usually see new clients.",
          "Make sure the form works and that referrals, which often contain personal and health information, go to a secure inbox only the right people can access.",
          "Keep referrers informed in the way the client or family agrees, such as a short note after the assessment. Referrers send more clients to practices that communicate clearly and do what they say, and a quick update costs very little time.",
        ] },
        { title: "Get found on Google", paragraphs: [
          "Set up your Google Business Profile with the most accurate primary category, your services and real photos of your clinic and team. If you visit clients rather than seeing them at your address, set up as a service-area business and list the areas you actually travel to. Google says local results depend mainly on relevance, distance and prominence, so accurate details and genuine reviews both help.",
          "Reply to reviews politely without confirming that the reviewer is a client or mentioning their therapy, and never offer anything in return for a review.",
          "Keep your website and profile consistent: the same name, phone number, services and areas. Link the profile to a page that explains how to get started, so a parent who taps through from Google Maps can see the next step without hunting for it.",
        ] },
        { title: "Advertise carefully and measure enquiries", paragraphs: [
          "Google Ads can put you in front of families searching for help in your area right now. Build campaigns around the services you have capacity for, count real calls and completed enquiry forms as conversions and keep health information out of tracking. Google's personalised advertising policy restricts targeting people based on health, so do not upload client lists or build remarketing audiences from health information.",
          "Record where each new client came from, so you know which channels bring the clients you can help. Seam Media's allied health page explains how we run Google Ads, websites and Google profiles for speech, OT, physio and NDIS providers.",
        ] },
      ],
      sources: [ahpraBoards, nasrhpMembers, speechPathologyAustralia, googleLocal, googlePersonalisedAds],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-11-01",
    category: "Trades",
    excerpt: "Google Ads for electricians: separate campaigns for emergency and planned work, the right match types and negatives, location and schedule settings, and tracking real calls.",
    guide: {
      title: "Google Ads for electricians: campaigns built around the jobs you want",
      path: "/blog/google-ads-for-electricians",
      description: "Google Ads for electricians: campaigns by job type, match types, negative keywords, location and schedule settings, landing pages and call tracking.",
      published: "2026-11-01", modified: "2026-11-01",
      intro: [
        "Google Ads can put an electrician at the top of the page the moment someone searches for an urgent call-out or a switchboard upgrade. It can also burn through a budget on apprentices looking for work and people trying to fix a light fitting themselves. The difference is in how the account is set up.",
        "This guide walks through a practical setup for an electrical business, using Google's own guidance on keywords, targeting and conversion tracking.",
      ],
      sections: [
        { title: "Split campaigns by type of job", paragraphs: [
          "Emergency call-outs, switchboard upgrades, rewires and EV charger installs are different searches from different customers, with different value to your business. Put urgent work and planned work in separate campaigns or ad groups so you can set budgets, bids, ad text and schedules for each. An emergency campaign might run whenever you can answer the phone, while a switchboard campaign can focus on the hours people plan home projects.",
          "Write ads that match each job. Someone searching for an emergency electrician wants to know how quickly you can come; someone looking at EV chargers wants to know you install and certify them properly.",
        ], checklist: ["Separate campaigns or ad groups for urgent and planned work.", "Budgets set by the value of each job type.", "Ad text written for each job."] },
        { title: "Choose match types and keywords deliberately", paragraphs: [
          "Google says broad match is the default and reaches the widest range of related searches, and that it should be used with Smart Bidding. Phrase and exact match give more control and reach fewer searches. Many electrical accounts start with phrase and exact match on their main jobs and areas, then widen once tracking shows which searches bring real enquiries.",
          "Use keywords built around the job and the place, such as switchboard upgrade plus your main suburbs, rather than single words like electrician on their own, which attract a wide mix of searches.",
        ] },
        { title: "Block the searches you do not want", paragraphs: [
          "Negative keywords stop ads showing on searches that will never become paid work. Common examples for electricians are searches about jobs, apprenticeships, courses, wages, licences, wholesalers, parts and DIY how-to questions. Google notes that negative keywords do not match close variants, so add singular, plural and similar forms where needed. An account-level negative list can apply your core exclusions across every search campaign.",
          "Check the search terms report every week at first, then regularly once the account settles. It shows the actual searches that triggered your ads, which is where most wasted spend is found.",
          "Do not over-block. Words such as cost or price often appear in searches from customers comparing quotes for real work, so review them in context before excluding them. The aim is to remove searches that will never become jobs, not to shrink the account until it barely spends.",
        ], checklist: ["Jobs, apprenticeships, courses and wages.", "Wholesale, parts and DIY searches.", "Search terms reviewed weekly at first."] },
        { title: "Target the right places and times", paragraphs: [
          "Google lets you target people by physical location, by locations they have shown interest in, or both. For a local electrician, targeting people in or regularly in your service area usually avoids paying for searches from people far away who are simply reading about your suburb. Keep the targeted area to where you are happy to travel.",
          "By default, campaigns can show ads all day. Use the ad schedule to run ads when someone can answer or quickly return calls, and pull back when you cannot. Paying for a call nobody answers is one of the most common and avoidable wastes in trade accounts.",
        ] },
        { title: "Send clicks to the right page", paragraphs: [
          "Each campaign should land on a page about that job, not the homepage. A switchboard ad should lead to a switchboard page with what the job involves, photos of your work, licence details and a clear call button and short quote form. If the page and the ad say different things, people leave and you pay for the click anyway.",
          "For urgent work, the page should load quickly on a phone and put the phone number at the top, with a line on how fast you can usually attend and your service area. For planned work such as EV chargers or rewires, add more detail: what the customer needs to know before booking, what affects the price and examples of similar jobs you have completed.",
        ] },
        { title: "Track real calls and forms", paragraphs: [
          "Count calls from ads and completed quote forms as conversions. Google Ads can measure calls from ads and lets you set a minimum call length before a call counts. Clicks on a phone number are a weaker signal and should not be your main conversion. Smart Bidding learns from whatever you count, so counting the wrong thing teaches it to find the wrong people.",
          "Then compare cost per enquiry by job type and shift budget toward the work that pays best. Seam Media's electrician marketing page explains how we run Google Ads for electrical businesses, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [googleMatchTypes, googleNegatives, googleSearchTerms, googleLocationTargeting, googleAdSchedule, googleCalls],
      links: [{ title: "Marketing for electricians", path: "/electrician-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }, packagesLink],
    },
  },
  {
    date: "2026-11-02",
    category: "NDIS & allied health",
    excerpt: "NDIS Google Ads keywords: build keywords around supports and areas, block participant admin and job searches, review search terms and stay inside Google's health ad rules.",
    guide: {
      title: "NDIS Google Ads keywords: what to target and what to block",
      path: "/blog/ndis-google-ads-keywords-negatives",
      description: "NDIS Google Ads keywords: target supports and service areas, block portal, login and job searches, review search terms and follow health ad rules.",
      published: "2026-11-02", modified: "2026-11-02",
      intro: [
        "Many NDIS providers try Google Ads and find the budget goes quickly while enquiries stay flat. A common reason is the search terms. Searches containing NDIS include participants looking for providers, but also people trying to log in to the portal, check a payment, find a job or study a course. Without careful keywords and negatives, ads end up paying for all of them.",
        "This guide explains how to choose keywords that bring participant and referrer enquiries, and how to block the searches that never will.",
      ],
      sections: [
        { title: "Build keywords around supports and places", paragraphs: [
          "Start with the supports you have capacity for and the areas you cover. Searches that combine a support with a place or with NDIS, such as an NDIS occupational therapist in a named suburb, or mobile physio NDIS, usually show stronger intent than broad terms like NDIS provider or disability services on their own.",
          "Group keywords by support type so each ad group has ads and a landing page about that support. If you offer supports to children and adults, consider separate groups, since families and adults often search differently.",
          "Support coordinators and plan managers search too, often with more specific terms, such as a support type with the area and current availability. Make sure your landing pages answer their questions as well as participants' questions: capacity, areas covered, funding arrangements you accept and how to make a referral.",
        ], checklist: ["One ad group per support type.", "Support plus suburb, region or NDIS.", "Only supports you currently have capacity for."] },
        { title: "Use match types with care", paragraphs: [
          "Google says broad match is the default match type and can show ads on searches related to your keyword, including ones that do not contain its exact words, and that it should be used with Smart Bidding. That can work once tracking is reliable, but in NDIS accounts it can also pull in many admin and information searches. Phrase and exact match give more control while you learn which searches bring enquiries.",
        ] },
        { title: "Block admin, job and study searches", paragraphs: [
          "Negative keywords stop ads showing on searches you do not want. In NDIS accounts the usual candidates are searches about logging in or using the portal, myGov, contacting the agency, payments and claims, provider registration, worker screening checks, jobs and careers, courses and training, and free resources. Review each one against your own search terms before adding it, since some words can appear in genuine searches too.",
          "Google notes that negative keywords do not automatically cover close variants, so add plurals and common alternatives. An account-level negative list is a simple way to keep the core exclusions across every search campaign.",
        ], checklist: ["Portal, login, myGov and payment searches.", "Jobs, careers, courses and worker screening.", "Provider registration and pricing research."] },
        { title: "Read the search terms report every week", paragraphs: [
          "The search terms report shows the actual searches that triggered your ads. In the first months, read it weekly and sort searches into three groups: good searches to add as keywords, searches to block and unclear searches to watch. Google omits some low-volume searches for privacy, so the report will not show everything, but it shows enough to find most wasted spend.",
          "Look at searches that brought calls and forms too, not just the poor ones. They often reveal how participants and coordinators describe a support, which helps with ad text and landing pages.",
          "Keep a simple record of what you blocked and when. If enquiries drop after a round of changes, you can see what changed and undo it, rather than guessing. This also helps anyone else who works on the account understand why each negative is there.",
        ] },
        { title: "Stay inside Google's health ad rules", paragraphs: [
          "Google's personalised advertising policy restricts targeting people based on health, so remarketing lists built from health information and uploads of participant lists are not allowed. Google also has a healthcare and medicines advertising policy that can limit some health-related ads, so check ad and keyword status after changes.",
          "If your team includes Ahpra-registered practitioners, such as occupational therapists, physiotherapists or psychologists, Ahpra's advertising guidelines also apply to your ad text: no testimonials, no promised outcomes and clear terms on any offer.",
          "Write ad text in the same plain, respectful language you would use on the phone. Say which supports you offer, the areas you cover and whether you have current capacity, and send each ad to a page about that support rather than the homepage.",
        ] },
        { title: "Measure enquiries, then tune keywords", paragraphs: [
          "Keyword decisions are only as good as your tracking. Count calls from ads with a minimum call length and completed enquiry or referral forms, not taps on a phone number. In one allied health account Seam Media audited, taps made up 97% of the reported conversions, so the ads were optimising for the wrong result.",
          "Once tracking is right, compare cost per enquiry by ad group and move budget to the supports and areas that bring participants you can help. Seam Media's allied health page explains how we run Google Ads for NDIS and allied health providers, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [googleNegatives, googleMatchTypes, googleSearchTerms, googlePersonalisedAds, googleHealthAds, googleCalls],
      links: [{ title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }],
    },
  },
  {
    date: "2026-11-03",
    category: "Trades",
    excerpt: "What a plumber's website needs to win calls from Frankston, Seaford, Carrum Downs and Langwarrin: urgent jobs up front, real service areas, fast contact and proof.",
    guide: {
      title: "Website for plumbers in Frankston: what turns local searches into calls",
      path: "/blog/website-for-plumbers-frankston",
      description: "A website for plumbers in Frankston: urgent jobs up front, honest service areas, tap-to-call contact, local proof and tracking that counts real calls.",
      published: "2026-11-03", modified: "2026-11-03",
      intro: [
        "When a hot water system fails in Frankston South or a drain backs up in Carrum Downs, the homeowner reaches for their phone, searches, and calls one of the first plumbers who looks local and available. Your website has a few seconds to show that you do that job, that you cover their street and that someone will pick up.",
        "This guide covers what a plumbing website for the Frankston area needs, in the order it matters, and how to check it is bringing in calls rather than just visits.",
      ],
      sections: [
        { title: "Put urgent jobs at the top", paragraphs: [
          "Most plumbing searches are about a problem happening now: blocked drains, burst pipes, leaking taps, no hot water. The top of your homepage should name those jobs in plain words and show your phone number, so a visitor on a phone can call without scrolling. A line on when you work, such as weekends or after hours if you genuinely offer them, answers the next question before it is asked.",
          "Planned work, such as hot water replacements, bathroom rough-ins or gas fitting, can sit lower on the page and on its own pages. Those customers compare more carefully and want detail.",
        ], checklist: ["Urgent jobs named in the first screen on mobile.", "Tap-to-call number visible without scrolling.", "Honest hours, including after-hours only if you offer it."] },
        { title: "Give each main job its own page", paragraphs: [
          "One services page listing every job in a paragraph rarely ranks for any of them. A page each for your main jobs lets you explain what is involved, what affects the cost and how quickly you can usually attend. That is what makes a page useful to the customer and worth showing in Google.",
          "Write the pages the way you answer the phone. Someone with a leaking hot water unit wants to know whether it can be repaired or must be replaced, and roughly how long they will be without hot water.",
        ] },
        { title: "Be clear about the Frankston suburbs you cover", paragraphs: [
          "Frankston plumbers usually work across a cluster of suburbs: Frankston, Frankston South, Seaford, Carrum Downs, Langwarrin, Skye and often down to Mount Eliza or across to Carrum. List the areas you actually cover on your homepage and contact page, and say where the edges are. That honesty builds trust, and it saves you calls from places you will not travel to.",
          "Avoid a stack of near-identical suburb pages with only the name swapped. A smaller number of area pages with genuinely local detail, such as the jobs you often do there, is more useful. Keep the areas on your site matching the service areas on your Google Business Profile, which Google lets service-area businesses set instead of showing a street address.",
        ], checklist: ["Real service areas named, with travel limits.", "Website and Business Profile areas match.", "No copy-and-paste suburb pages."] },
        { title: "Show proof a local can check", paragraphs: [
          "Photos of your own work, your licence or registration details, genuine Google reviews and a few short job examples do more than claims like \"Frankston's best plumber\". A job description such as a burst pipe under a slab in Langwarrin, what you found and how you fixed it, tells a homeowner far more than a list of adjectives.",
          "Use customers' photos and names only with their permission, and keep every claim one you can back up.",
          "Reviews deserve a system rather than a burst of effort. Ask every customer the same way after the job, ideally with a text containing your review link. Google lets you create a link or QR code that takes customers straight to your review form. Reply to every review, including the occasional bad one, calmly and with a fix where there is one.",
        ] },
        { title: "Make it fast and easy on a phone", paragraphs: [
          "Most of these visits happen on a phone, sometimes standing in a wet laundry. Pages should load quickly, buttons should be big enough to tap, and the quote form should ask only for name, phone, suburb and a line about the job. Tell people when you will call back, then do it.",
          "Each page also needs a clear title and one main heading that matches the job. Google says it rewards content made to help people, so write for the customer with the problem rather than stuffing in suburb names.",
        ], checklist: ["Four or five form fields at most.", "A stated call-back time.", "Clear titles and headings for every service page."] },
        { title: "Track calls, not just visits", paragraphs: [
          "A website is working when it brings jobs. Count calls from the site and completed forms, send yourself a test enquiry every few months, and check Search Console monthly to see which searches and pages bring visitors. If you run Google Ads, count calls of a reasonable length and completed forms as conversions, not taps on the number.",
          "Seam Media is based on the Mornington Peninsula and builds websites for plumbers around Frankston. Our web design in Frankston page shows how we approach local business sites, and our plumber marketing page covers how a website fits with Google Maps and Google Ads. The South East Fencer case study shows how a local trade site's search visibility can build over time.",
        ] },
      ],
      sources: [googleHelpful, googleServiceArea, googleLocal, googleTitleLinks],
      links: [{ title: "Web design in Frankston", path: "/frankston/web-design" }, { title: "Marketing for plumbers", path: "/plumber-marketing" }, { title: "Websites for tradies", path: "/tradie-websites" }, fencerLink],
    },
  },
  {
    date: "2026-11-04",
    category: "NDIS & allied health",
    excerpt: "Allied health marketing in Frankston: a complete Business Profile, a website that answers clients and referrers, Ahpra-safe wording and tracking real enquiries.",
    guide: {
      title: "Allied health marketing in Frankston: getting found by local clients and referrers",
      path: "/blog/allied-health-marketing-frankston",
      description: "Allied health marketing in Frankston: Business Profile set-up, pages for each service, referrer-friendly details, Ahpra-safe wording and enquiry tracking.",
      published: "2026-11-04", modified: "2026-11-04",
      intro: [
        "Allied health providers around Frankston, whether a clinic near the hospital precinct or a mobile OT covering Seaford to Langwarrin, are found in two main ways: people searching Google for a service nearby, and referrers such as GPs, support coordinators and schools passing on a name. Good marketing makes both paths easy.",
        "This guide sets out the practical steps, and the advertising rules that apply to registered health professions.",
      ],
      sections: [
        { title: "Get your Google Business Profile right", paragraphs: [
          "When someone searches for a physio, OT or psychologist in Frankston, the map results usually appear first. Google says local results depend mainly on relevance, distance and prominence. A complete profile with the right primary category, your services, hours and photos helps with relevance; genuine reviews help with prominence.",
          "If you see clients at a clinic, show the address. If you are a mobile provider, Google lets service-area businesses hide their address and list the areas they serve. Do not list a home address as a clinic, and do not add keywords or suburbs to your business name, which breaks Google's guidelines.",
        ], checklist: ["Correct primary category for your profession.", "Clinic address shown, or service areas set if mobile.", "Business name exactly as you trade."] },
        { title: "Write a page for each service", paragraphs: [
          "A page each for your main services, such as paediatric OT, NDIS physiotherapy or home visits for older clients, helps people and Google understand what you do. Each page should say who it is for, what a first appointment involves, where you see people and how funding or rebates work with you.",
          "Plain language matters. Families and older clients often search in everyday words, such as help for a child's handwriting or rehab after a knee replacement, rather than clinical terms.",
          "Add a short page about each practitioner with their qualifications and areas of interest, written factually. People choosing a health provider want to know who they will see, and referrers want to match a client to the right person. Keep the details current when staff change.",
        ] },
        { title: "Make referrers' lives easy", paragraphs: [
          "Support coordinators, plan managers, GPs and schools want quick answers: do you have capacity, which areas do you cover, which funding do you accept, and how do they refer? Put those answers on a referrals page with a simple form or email address, and keep your capacity information current. A stale waitlist note costs referrals.",
          "If you are an NDIS provider, say whether you are registered and which plan types you can work with, so coordinators can check before they call.",
        ], checklist: ["A referrals page with a short form.", "Current capacity and waitlist information.", "Funding and plan types you accept, stated plainly."] },
        { title: "Follow the health advertising rules", paragraphs: [
          "Physiotherapists, occupational therapists and psychologists are registered through Ahpra, and Ahpra's advertising guidelines apply to their websites, profiles and ads. In short: no testimonials about clinical care, no misleading claims, no creating an unreasonable expectation of benefit, and clear terms on any offer. Speech pathologists and exercise physiologists are not Ahpra-registered, but honest, careful claims still protect your reputation.",
          "Google also restricts personalised advertising based on health, so remarketing to people based on health information is not allowed. Plan your ads around search, where people are already looking for help.",
        ] },
        { title: "Build local prominence steadily", paragraphs: [
          "Ask satisfied clients for a Google review where your profession's rules allow it, and reply politely without confirming anyone is a client. Keep your name, address and phone number consistent wherever you are listed. Over months, a steady flow of reviews and accurate listings does more than a burst of activity.",
          "Local relationships matter as much as online ones in Frankston. A short, factual introduction to GP clinics, schools and support coordination businesses you already work near, with what you offer and current capacity, often brings steadier referrals than any ad. Follow up with a useful update, such as new availability, rather than a sales pitch.",
        ] },
        { title: "Measure enquiries, not clicks", paragraphs: [
          "Track calls of a reasonable length, completed enquiry forms and referral forms. In one allied health account Seam Media audited, taps on a phone number made up 97% of the reported conversions, so the ads were optimising for the wrong result. Counting real enquiries tells you which services and areas bring clients.",
          "Seam Media is based on the Mornington Peninsula and works with allied health providers across Frankston. Our SEO in Frankston page explains how we help local businesses rank in the area, and our allied health page covers Google Ads for physio, OT, speech and NDIS providers, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [googleLocal, googleServiceArea, googleProfileRules, ahpraGuidelines, googlePersonalisedAds],
      links: [{ title: "SEO in Frankston", path: "/frankston/seo" }, { title: "Allied health and NDIS marketing", path: "/allied-health-marketing" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }],
    },
  },
  {
    date: "2026-11-05",
    category: "Trades",
    excerpt: "Website design for builders in Dandenong and the south-east: project pages, a clear process, registration details and enquiry forms that filter for the jobs you want.",
    guide: {
      title: "Website design for builders in Dandenong: pages that win bigger jobs",
      path: "/blog/website-design-builders-dandenong",
      description: "Website design for builders in Dandenong: project galleries, a clear building process, credentials, qualifying enquiry forms and local search basics.",
      published: "2026-11-05", modified: "2026-11-05",
      intro: [
        "A builder's website does a different job from a plumber's. Nobody books an extension in a panic. Homeowners in Dandenong, Keysborough, Noble Park and the growth suburbs further out will look at several builders over weeks, and they use your website to decide whether you are worth a meeting.",
        "This guide covers the pages and details that help a builder's website win those meetings, and keep out enquiries that will never suit you.",
      ],
      sections: [
        { title: "Lead with the work you want more of", paragraphs: [
          "Say clearly on the homepage what you build: extensions, second storeys, knockdown rebuilds, new homes, units or commercial fit-outs. If you prefer certain jobs, put them first. A homeowner planning a single-storey extension should know within seconds that it is your kind of job.",
          "Give each type of project its own page with what it usually involves, how long it tends to take and what affects the cost. You do not need to publish prices, but explaining what drives them shows experience.",
        ], checklist: ["Main project types named on the homepage.", "A page for each type of build.", "Cost drivers explained, even without prices."] },
        { title: "Show finished projects properly", paragraphs: [
          "Project pages are a builder's strongest proof. For each one, show good photos, the suburb, the brief, any challenges and the result. Before and after photos work well for renovations. A handful of well-documented local projects beats a gallery of fifty unlabelled photos.",
          "Get the owners' permission before naming a street or showing their home, and keep descriptions factual.",
          "Organise projects by type so a visitor interested in extensions can see only extensions. Link each project to the matching service page, and each service page back to two or three relevant projects. That helps people find proof quickly and helps Google understand how your pages relate.",
        ] },
        { title: "Explain your process and credentials", paragraphs: [
          "Big jobs make people nervous. A simple page explaining your process, from first meeting and quote through design, permits, construction and handover, reduces that worry. Include your builder registration details, insurance and any industry memberships, and say who the client will deal with day to day.",
          "An about page with real photos of you and your team helps too. Homeowners will have you in their house for months, so they want to see who they are dealing with. Keep it short and specific: how long you have been building, the kind of work you focus on and the areas you build in.",
        ], checklist: ["A step-by-step process page.", "Registration and insurance details shown.", "Who the client deals with during the build."] },
        { title: "Use enquiry forms that qualify", paragraphs: [
          "A builder's form can ask a little more than a tradie's, because it filters out jobs that do not fit. Ask for the suburb, the type of project, a rough timeframe and whether plans or permits are in place. A budget range question is optional but useful if you only take on work above a certain size.",
          "Keep the phone number and email visible too. Some people would rather talk first, especially for a big job.",
          "Reply quickly, even if it is only to book a call. Homeowners planning a big job often contact several builders in the same week, and the first useful reply sets the tone. Tell people on the form what happens next and how long it usually takes you to respond.",
        ] },
        { title: "Get found around Dandenong", paragraphs: [
          "Name the areas you build in, such as Dandenong, Keysborough, Noble Park, Springvale, Berwick or wherever your work really is. A complete Google Business Profile with your projects and genuine reviews helps you appear in local results, which Google says depend mainly on relevance, distance and prominence.",
          "Clear page titles and headings, a fast site and internal links between project pages and service pages help Google understand the site. Google's own starter guide is a good plain-English reference.",
        ] },
        { title: "Measure meetings, not visits", paragraphs: [
          "Track completed enquiry forms and calls, and note which ones turned into site visits and quotes. For builders, a handful of good enquiries a month can matter more than hundreds of visits.",
          "Seam Media is based on the Mornington Peninsula and works with builders across south-east Melbourne. Our page for a digital marketing agency in Dandenong covers how we work with local businesses there, and our builder marketing page explains how websites, Google Maps and Google Ads fit together for builders, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [googleHelpful, googleSeoStarter, googleLocal, googleReviews],
      links: [{ title: "Digital marketing agency in Dandenong", path: "/dandenong" }, { title: "Marketing for builders", path: "/builder-marketing" }, { title: "Websites for tradies", path: "/tradie-websites" }],
    },
  },
  {
    date: "2026-11-06",
    category: "NDIS & allied health",
    excerpt: "Physio marketing on the Mornington Peninsula: Business Profile set-up for clinics and mobile physios, service pages, peninsula areas, reviews and Ahpra advertising rules.",
    guide: {
      title: "Physio marketing on the Mornington Peninsula: Ahpra-safe ways to fill your books",
      path: "/blog/physio-marketing-mornington-peninsula",
      description: "Physio marketing on the Mornington Peninsula: Business Profile set-up, service pages, peninsula service areas, reviews and Ahpra advertising rules.",
      published: "2026-11-06", modified: "2026-11-06",
      intro: [
        "A physiotherapy practice on the Mornington Peninsula serves a spread-out area. A clinic in Mornington or Rosebud draws from towns several kilometres away, and a mobile physio may cover Mount Eliza to Hastings in a day. People searching for a physio want someone close, available and good at their problem.",
        "This guide covers the marketing steps that work for peninsula physios, within the advertising rules that apply to physiotherapists as Ahpra-registered practitioners.",
      ],
      sections: [
        { title: "Set up your Business Profile for the peninsula", paragraphs: [
          "Most local physio searches show map results first. Google says local results depend mainly on relevance, distance and prominence, so a complete profile with the right category, your services, hours, photos of the clinic and genuine reviews matters.",
          "If you see clients at a clinic, show the address. If you visit homes, aged care or workplaces, Google lets service-area businesses hide their address and list service areas instead. Multi-site practices should have a profile for each real clinic, not for suburbs where there is no clinic.",
        ], checklist: ["Correct physiotherapy category and services.", "One profile per real clinic location.", "Service areas set for home visits."] },
        { title: "Write pages for what people search for", paragraphs: [
          "People search for problems and services as much as for physios: back pain, sports injuries, rehab after surgery, pelvic health, Pilates or home visits. A page each for your main services, saying who it suits and what a first appointment involves, helps both visitors and Google.",
          "Add practical details peninsula clients look for: parking, accessibility, hours, whether you offer home visits and how health fund rebates, Medicare plans, NDIS or workers' compensation work with you.",
          "Make booking easy on a phone. If you use online booking, link to it from every service page and make sure the times shown are accurate. If you prefer calls, put a tap-to-call number at the top of each page and say when the phone is answered.",
        ] },
        { title: "Name the towns you really cover", paragraphs: [
          "Peninsula searches often include a town name, such as physio Mornington or physio Rosebud. Say on your site which towns your clinic serves and where home visits go, and keep it honest. A clinic in Mornington can reasonably mention Mount Martha and Mount Eliza; it should not create pages pretending to be in Sorrento.",
        ], checklist: ["Towns served listed on the website.", "Home visit areas stated clearly.", "No pages implying a clinic where there isn't one."] },
        { title: "Keep within Ahpra's advertising rules", paragraphs: [
          "Physiotherapists are registered through Ahpra and the Physiotherapy Board of Australia, so Ahpra's advertising guidelines apply to your website, Business Profile, social posts and ads. The main points: no testimonials about clinical care in your advertising, no misleading or exaggerated claims, no creating an unreasonable expectation of benefit, and clear terms on any offer or discount.",
          "That means no before and after outcome promises and no featuring patient praise about treatment on your website. Focus instead on what you treat, how you work, your qualifications and practical details. Google reviews on your profile are not your advertising, but quoting them on your site can be.",
        ] },
        { title: "Ask for reviews the right way", paragraphs: [
          "Ask clients for a Google review in a consistent way, such as a text after their course of treatment. Google's policies prohibit offering incentives for reviews and asking only happy clients, so ask everyone in the same way. Reply politely to reviews without confirming that the person is a client or discussing their care.",
          "Referrers count too. GPs, surgeons, sports clubs and gyms across the peninsula refer patients to physios they know and trust. A short, factual introduction with your services, locations and availability, and a simple way to refer, often brings steady work. Keep it professional and within the same advertising rules as your website.",
        ] },
        { title: "Track bookings from search", paragraphs: [
          "Count booking requests, calls of a reasonable length and online bookings, and check Search Console for the searches that bring visitors. If you run Google Ads, remember Google restricts personalised advertising based on health, so search ads aimed at people already looking for a physio are the safer route.",
          "Seam Media is based on the Mornington Peninsula. Our page on SEO on the Mornington Peninsula explains how we help local businesses rank across the peninsula towns, and our allied health page covers Google Ads and websites for physios, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [ahpraGuidelines, physioBoard, googleLocal, googleServiceArea, googleReviewPolicy],
      links: [{ title: "SEO on the Mornington Peninsula", path: "/mornington/seo" }, { title: "Allied health marketing", path: "/allied-health-marketing" }, packagesLink],
    },
  },
  {
    date: "2026-11-07",
    category: "Trades",
    excerpt: "Google Ads for tradies on the Mornington Peninsula: targeting the towns you serve, presence-only location settings, schedules, negatives and tracking real calls.",
    guide: {
      title: "Google Ads for tradies on the Mornington Peninsula: a local setup that pays",
      path: "/blog/google-ads-tradies-mornington-peninsula",
      description: "Google Ads for tradies on the Mornington Peninsula: location targeting by town, presence settings, ad schedules, negatives and call tracking.",
      published: "2026-11-07", modified: "2026-11-07",
      intro: [
        "The Mornington Peninsula is a long stretch of towns, from Mount Eliza and Mornington down to Rosebud, Rye and Sorrento, and across to Hastings. Most tradies do not want to drive all of it for every job. Google Ads can put you at the top of the page for the towns and jobs you choose, but only if the account is set up for the peninsula rather than for all of Melbourne.",
        "This guide covers a practical local setup, using Google's own guidance.",
      ],
      sections: [
        { title: "Target the towns you will travel to", paragraphs: [
          "Set your location targeting to the towns or a radius you are genuinely happy to cover. If a job in Sorrento is not worth the drive from Mornington, leave it out, or put it in a separate campaign with a lower budget. You can add individual suburbs and postcodes, or a radius around your base.",
          "Google lets you target people who are in or regularly in your locations, or people who have shown interest in them. For local trade work, the presence option usually avoids paying for clicks from people elsewhere who are reading about the peninsula, such as someone in another state researching a holiday house.",
        ], checklist: ["Towns or radius you actually service.", "Presence: people in or regularly in your locations.", "Far towns in their own campaign, if at all."] },
        { title: "Split campaigns by job", paragraphs: [
          "Urgent jobs and planned jobs behave differently. A burst pipe or power outage needs an ad that runs whenever you can answer the phone. A deck, fence or bathroom renovation can run during the hours people plan projects. Separate campaigns or ad groups let you set budgets and bids by what each job is worth.",
          "Write ad text that matches each job and mentions the area, such as servicing Mornington and Mount Martha, so local searchers see you are close.",
          "Set budgets by what each job is worth to you. A switchboard upgrade, a full bathroom or a new fence is worth far more than a small repair, so it can justify a higher cost per enquiry. Bidding the same for every job usually means paying too much for small work and too little for the jobs you want.",
        ] },
        { title: "Run ads when you can answer", paragraphs: [
          "By default, ads can run all day. An ad schedule lets you show ads only when someone can pick up or return calls quickly. A call that goes to voicemail while you are on a roof in Dromana is a paid click that often goes to the next tradie.",
          "The peninsula is also seasonal in places. Southern towns get busier over summer and holiday periods, so check your results by month and adjust budgets and towns when demand changes, rather than leaving the account on the same settings all year.",
        ] },
        { title: "Choose keywords and block waste", paragraphs: [
          "Start with phrase and exact match keywords built around the job and the area, such as a service plus Mornington or Mornington Peninsula. Google says broad match is the default and reaches the widest range of related searches; it works best once conversion tracking is reliable and Smart Bidding has data.",
          "Add negative keywords for searches that will never be paid work: jobs, apprenticeships, courses, wages, DIY and parts. Negative keywords do not match close variants, so add plurals and similar forms. Then read the search terms report weekly at first to see what people actually searched.",
        ], checklist: ["Phrase and exact match on main jobs and towns.", "Negatives for jobs, courses, DIY and parts.", "Search terms reviewed weekly at first."] },
        { title: "Land people on a local page", paragraphs: [
          "Send each campaign to a page about that job, with your phone number at the top, the towns you cover, photos of your own work and a short quote form. If the ad says Mornington and the page never mentions the peninsula, people leave.",
          "Ads work best alongside a strong Google Business Profile and website, because many people check reviews and the map before calling. Paid and organic visibility support each other.",
        ] },
        { title: "Track calls and forms", paragraphs: [
          "Count calls from ads with a minimum call length and completed quote forms as conversions, not taps on a phone number. Then compare cost per enquiry by job and town and move budget to what pays.",
          "Seam Media is based on the Mornington Peninsula. Our page for a digital marketing agency in Mount Eliza covers how we work with peninsula businesses, and our tradie marketing and Google Ads management pages explain how we run Google Ads for trades, including our enquiry guarantee for new Google Ads clients, with the full terms on those pages.",
        ] },
      ],
      sources: [googleLocationTargeting, googleAdSchedule, googleMatchTypes, googleNegatives, googleSearchTerms, googleCalls],
      links: [{ title: "Digital marketing agency in Mount Eliza", path: "/mount-eliza" }, { title: "Marketing for tradies", path: "/tradie-marketing" }, { title: "Google Ads management", path: "/google-ads-management" }],
    },
  },
  {
    date: "2026-11-08",
    category: "NDIS & allied health",
    excerpt: "NDIS provider marketing in Cranbourne and Casey: clear supports and areas, capacity and funding details, coordinator-friendly referrals, ethical promotion and real tracking.",
    guide: {
      title: "NDIS provider marketing in Cranbourne and Casey: a practical local plan",
      path: "/blog/ndis-provider-marketing-cranbourne",
      description: "NDIS provider marketing in Cranbourne and Casey: supports and areas, capacity, funding types, referrals from coordinators, ethical promotion and tracking.",
      published: "2026-11-08", modified: "2026-11-08",
      intro: [
        "Cranbourne and the wider City of Casey cover a large, fast-growing part of south-east Melbourne, from Cranbourne and Clyde North to Berwick and Narre Warren. NDIS participants, families and support coordinators there are often comparing several providers, and they want to know quickly whether you can help, where you go and when you can start.",
        "This guide sets out a practical local marketing plan for NDIS providers in the area, and the rules that shape how NDIS services are promoted.",
      ],
      sections: [
        { title: "Say what you offer and where", paragraphs: [
          "List your supports in plain language, the age groups you work with and the suburbs you cover, such as Cranbourne, Clyde, Clyde North, Berwick, Narre Warren or Lynbrook. Say whether you work in homes, schools, the community or a clinic. Casey is large, so be honest about travel limits.",
          "Write a page for each main support, such as therapy for children, community access or daily living support. Each page should say who it is for, how a first session or meeting works and what a participant or family needs to have ready. Use the words families use, not only NDIS category names.",
        ], checklist: ["Supports listed in plain language.", "Suburbs covered, with travel limits.", "Settings you work in: home, school, community, clinic."] },
        { title: "Be upfront about capacity and funding", paragraphs: [
          "Capacity is often the first question. Keep a short, current note on your website about availability by support type and area. If there is a waitlist, say roughly how long it is.",
          "Say whether you are a registered NDIS provider and which plan types you can work with. Agency-managed participants need a registered provider, while self-managed and plan-managed participants can generally choose registered or unregistered providers. Clear information saves coordinators and families a phone call.",
        ] },
        { title: "Make referrals simple", paragraphs: [
          "Support coordinators and plan managers refer a lot of work. Give them a referrals page with a short form, the documents you need, your response time and a named contact. Reply quickly and keep them updated once a participant starts, with the participant's consent.",
          "A complete Google Business Profile also helps. Google says local results depend mainly on relevance, distance and prominence, so accurate categories, services, hours and service areas matter. Mobile providers can hide their address and list the areas they serve.",
        ], checklist: ["Referrals page with a short form.", "Documents needed and response time stated.", "Business Profile service areas matching your website."] },
        { title: "Promote ethically", paragraphs: [
          "The NDIS Code of Conduct applies to registered and unregistered providers and their workers. It includes acting with integrity, honesty and transparency and respecting people's right to make their own decisions. In practice, avoid pressure tactics, gifts or inducements for choosing your service, and claims you cannot back up. Registered providers also meet the NDIS Practice Standards.",
          "If your team includes Ahpra-registered practitioners, such as occupational therapists, physiotherapists or psychologists, Ahpra's advertising guidelines also apply: no testimonials about clinical care and no promised outcomes.",
        ] },
        { title: "Use ads carefully", paragraphs: [
          "Google Ads can bring participant and coordinator enquiries, but NDIS searches include many people looking for the portal, payments or jobs. Target supports plus suburbs, block admin and job searches, and read the search terms report regularly. Google's personalised advertising policy also restricts targeting people based on health, so search ads are usually the right starting point.",
          "Send each ad to the page about that support, not your homepage, and make sure the page says which Casey suburbs you cover and whether you have capacity now. An ad that brings a coordinator to a page with a full waitlist wastes their time and your budget.",
        ] },
        { title: "Track real enquiries", paragraphs: [
          "Count calls of a reasonable length, completed enquiry forms and referral forms, then look at which supports and suburbs bring participants you can help. In one allied health account Seam Media audited, taps on a phone number made up 97% of the reported conversions, which hid what was really working.",
          "Ask new participants and coordinators how they found you, and record it. Word of mouth, coordinator referrals, Google Maps and your website often work together, and a simple note at intake shows which ones to put more time into.",
          "Seam Media works with NDIS providers across south-east Melbourne. Our page on SEO in Cranbourne explains how we help local businesses rank in Cranbourne and Casey, and our NDIS marketing page covers websites, Google Maps and Google Ads for providers, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [ndisCode, ndisPracticeStandards, googleLocal, googleServiceArea, googlePersonalisedAds],
      links: [{ title: "SEO in Cranbourne", path: "/cranbourne" }, { title: "Marketing for NDIS providers", path: "/ndis-marketing" }, { title: "Allied health and NDIS Google Ads", path: "/allied-health-marketing" }],
    },
  },
  {
    date: "2026-11-09",
    category: "Trades",
    excerpt: "SEO for electricians in Dandenong: a complete Business Profile, a page for each job, honest suburb coverage, reviews and measuring calls from search.",
    guide: {
      title: "SEO for electricians in Dandenong: showing up for local call-outs and bigger jobs",
      path: "/blog/seo-electricians-dandenong",
      description: "SEO for electricians in Dandenong: Business Profile set-up, job pages, suburb coverage, commercial work in Dandenong South, reviews and call tracking.",
      published: "2026-11-09", modified: "2026-11-09",
      intro: [
        "Electricians around Dandenong see two very different kinds of search. Homeowners in Dandenong North, Noble Park or Keysborough want someone today for a power fault, or a quote for a switchboard upgrade. Businesses in the Dandenong South industrial area want a reliable contractor for maintenance, fit-outs and three-phase work. Good SEO helps you show up for the work you want, not just for your business name.",
        "This guide covers where to focus, in the order that usually pays off.",
      ],
      sections: [
        { title: "Start with your Google Business Profile", paragraphs: [
          "For urgent searches, the map results often decide who gets the call. Choose the primary category that best describes you, add the services you actually do and set your real service areas. Google says local results depend mainly on relevance, distance and prominence, so complete, accurate details and genuine reviews both count.",
          "Keep your business name as it appears on your van and invoices. Adding keywords or suburbs to the name breaks Google's guidelines and can get a profile suspended.",
        ], checklist: ["Correct primary category and service list.", "Real service areas around Dandenong.", "Business name exactly as you trade."] },
        { title: "Give each job its own page", paragraphs: [
          "Emergency call-outs, switchboard upgrades, rewires, lighting, EV chargers, smoke alarms and commercial maintenance are different searches. A page each lets you explain what the job involves, what affects the cost and how quickly you can attend. One page listing everything rarely ranks for any of it.",
          "Show your electrical licence number and that you provide the required compliance certificate for the work. That detail reassures people comparing electricians.",
          "Link every job page from your menu or homepage, and link related pages to each other, such as switchboard upgrades to safety switches. Pages that are hard to reach from the rest of the site are harder for Google to find and for visitors to use. Keep each page fast on a phone, with your number at the top.",
        ] },
        { title: "Treat commercial work separately", paragraphs: [
          "If you want commercial and industrial work in Dandenong South, Keysborough or Braeside, give it its own pages. Business buyers look for different things: after-hours availability so work does not stop production, maintenance contracts, test and tag, three-phase and fit-out experience, and insurance details. Project examples with the type of site and scope, shared with the client's permission, help a lot.",
        ], checklist: ["Separate commercial service pages.", "After-hours and maintenance options explained.", "Commercial project examples, with permission."] },
        { title: "Cover suburbs without thin pages", paragraphs: [
          "Name the suburbs you cover on your homepage and contact page, and keep them consistent with your Business Profile. If you add area pages, make each one genuinely useful, such as the jobs you often do there, rather than copies with the suburb swapped. Google says it aims to show content made to help people, not pages written mainly to rank.",
          "Clear page titles help too. Google uses the title element, headings and other page content to build the title shown in search results, so a title that names the job and area, written for people, is a good start.",
        ] },
        { title: "Earn reviews steadily", paragraphs: [
          "Ask every customer for a Google review, ideally with a short link by text after the job. Google lets you share a link or QR code that takes customers straight to your review form. Do not offer incentives and do not ask only happy customers, which Google's policies prohibit. Reply to every review calmly and helpfully.",
          "Photos help as well. Add real photos of your work, your van and your team to your Business Profile and website, and keep adding them as you finish jobs. A profile that looks active and local gives people more confidence to call than one with a logo and nothing else.",
        ] },
        { title: "Measure calls from search", paragraphs: [
          "Rankings vary by suburb and change daily, so do not judge SEO on one ranking check. Track calls and forms from your profile and website, and check Search Console monthly to see which searches and pages bring visitors.",
          "Seam Media works with trades across Dandenong and south-east Melbourne. Our page on SEO in Dandenong explains how we help local businesses rank in Dandenong and Dandenong South, and our electrician marketing page covers how SEO, Google Maps and Google Ads fit together for electrical businesses, including our enquiry guarantee for new Google Ads clients, with the full terms on that page.",
        ] },
      ],
      sources: [googleLocal, googleProfileRules, googleHelpful, googleTitleLinks, googleReviews, googleReviewPolicy],
      links: [{ title: "SEO in Dandenong", path: "/dandenong/seo" }, { title: "Marketing for electricians", path: "/electrician-marketing" }, packagesLink],
    },
  },
];
