// Website offer, "free until it works" (17 Nov 2026): Heath's front-end offer for trades and local service
// businesses, sold through the NB Meta ads. It's the Smart Website (inclusions from ../smart-website/offer, no extra
// features) with these terms. Heath approved "free until 3 enquiries" (via the Chief of Staff, 17 Nov 2026).
// The 60-day walk-away is the Chief of Staff's default, flagged to Heath and not yet confirmed: change WALK_AWAY_DAYS.
export const WALK_AWAY_DAYS = 60;

export const HEADLINE_START = "Your new website,";
export const HEADLINE_END = "free until it works.";
export const OFFER_LINE = "I build it in 7 days at no cost. You only start paying once it's brought you 3 real enquiries. If it doesn't, you don't pay a cent.";
export const PRICE_LINE = "After that, it's $99 a week + GST. Month to month, no setup fee, no lock-in.";
export const LIMIT = "I only take on 5 free builds a month.";
export const ENQUIRY_RULE = "A real enquiry is a form submission, a call or a missed call from a new potential customer through your website, logged by the website itself. Spam, existing customers and suppliers don't count.";
export const FOR_WHO = "For Australian trades and local service businesses with a Google Business Profile with 10+ reviews, and a website that's missing, broken or outdated.";

export const STEPS: [string, string][] = [
  ["A quick call", "I'll ring you within one business day to learn about your business, your area and the work you want more of."],
  ["I build it in 7 days, at no cost", "I build your website, set it up for Google and switch on the missed-call texts, the instant replies and the enquiry alerts to your phone."],
  ["You pay once it's brought 3 real enquiries", `Then it's $99 a week + GST, month to month. If it hasn't brought 3 real enquiries within ${WALK_AWAY_DAYS} days, you can walk away owing nothing.`],
];

export const TERMS: string[] = [
  ENQUIRY_RULE,
  "Billing starts after the 3rd real enquiry: $99 a week + GST, month to month, no setup fee, no minimum term and no lock-in.",
  `If the website hasn't brought 3 real enquiries within ${WALK_AWAY_DAYS} days, you can walk away with nothing owed.`,
  "I host and manage the website. If you stop paying, it comes down.",
  "It's for businesses with a Google Business Profile with 10+ reviews and a website that's missing, broken or outdated. It's not for brand-new businesses, e-commerce stores, or finance and mortgage brokers.",
  LIMIT,
];

export const FAQS: [string, string][] = [
  ["What if it doesn't bring any enquiries?", `Then you don't pay. If it hasn't brought 3 real enquiries within ${WALK_AWAY_DAYS} days, you can walk away owing nothing.`],
  ["What counts as an enquiry?", ENQUIRY_RULE],
  ["What does it cost after that?", "$99 a week + GST, billed weekly, month to month. No setup fee, no minimum term, no lock-in."],
  ["Why do you need 10+ Google reviews?", "It shows you're an established business that people already search for, so a better website can turn those searches into enquiries quickly."],
  ["Who does the work?", "Me. You deal with me directly, and it's all done here in Australia."],
  ["Do I keep the website if I stop?", "I host and manage it for you, so if you stop paying, it comes down."],
  ["How many pages do I get?", "There's no cap on pages. Ecommerce, custom functionality and complex builds aren't part of this offer."],
  ["What SEO is included?", "Basic local SEO, so you show up on Google. Full local SEO, with tracked search terms, Google Business Profile management and map-pack scans, comes with Growth."],
];
