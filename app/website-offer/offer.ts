// Website offer (17 Nov 2026): Heath's "no-brainer" front-end offer for trades and small businesses, sold through
// the NB Meta ads. It's the Smart Website (inclusions from ../smart-website/offer) with Heath's pay-on-results terms.
//
// EVERY line marked PENDING is a placeholder until the Chief of Staff sends the offer wording Heath agreed.
// Don't deploy this page while PENDING is true: the page shows the placeholders as they are.
export const PENDING = true;

export const OFFER_LINE = "[You don't pay until it brings you enquiries.]"; // PENDING
export const OFFER_SHORT = "[Pay once it brings enquiries]"; // PENDING: eyebrow and form heading
export const PRICE_LINE = "[Then $99 a week + GST.]"; // PENDING: the price once billing starts
export const TERMS = "[Setup fee, minimum term and lock-in.]"; // PENDING
export const ENQUIRY_RULE = "[What counts as an enquiry, and how many before billing starts.]"; // PENDING
export const FOR_WHO = "[For established trades and small businesses that want more work.]"; // PENDING

export const STEPS: [string, string][] = [
  ["A quick call", "I'll ring you within one business day to learn about your business, your area and the work you want more of."],
  ["I build it and connect it to your phone", "I build your website, set it up for Google and switch on the missed-call texts, the instant replies and the enquiry alerts."],
  ["[You pay once it's working]", ENQUIRY_RULE], // PENDING
];

export const FAQS: [string, string][] = [
  ["[What if it doesn't bring any enquiries?]", "[Answer from the agreed terms.]"], // PENDING
  ["What counts as an enquiry?", ENQUIRY_RULE],
  ["[Is there a setup fee or lock-in?]", TERMS], // PENDING
  ["Who does the work?", "Me. You deal with me directly, and it's all done here in Australia."],
  ["Do I need a website already?", "No. I build it for you. If you have one, tell me in the form and I'll take a look before I call."],
  ["How many pages do I get?", "There's no cap on pages. Ecommerce, custom functionality and complex builds are quoted separately."],
  ["What SEO is included?", "Basic local SEO, so you show up on Google. Full local SEO, with tracked search terms, Google Business Profile management and map-pack scans, comes with Growth, and you keep your website when you step up."],
];
