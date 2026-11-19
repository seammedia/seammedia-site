// Social media manager (19 Nov 2026): the SM Meta ads' landing page. It sells Local Marketing Foundation at its live
// price and inclusions (/marketing-packages), with the "no photos needed" angle Heath approved on 19 Nov 2026.
// Keep the price and inclusions in step with app/marketing-packages/MarketingPackagesClient.tsx.

export const PRICE = "$140 a week + GST";
export const HEADLINE_START = "Social media manager.";
export const HEADLINE_END = "No photos needed.";
export const OFFER_LINE = "I run your Facebook and Instagram, and make the posts from what you already have: your website, your Google reviews and your past jobs. Send a phone snap when you feel like it, or don't.";
export const PRICE_LINE = `${PRICE}, billed weekly, month to month. No lock-in.`;
export const REDESIGN_LINE = "Not sure yet? If it looks like a fit, I'll redesign 3 of your current posts for free first, so you can see the difference before you pay anything.";
export const FOR_WHO = "For Australian trades and local service businesses that know they should post, but never have time to take photos.";

// Foundation's live inclusions, in the page's words
export const INCLUDES: [string, string][] = [
  ["Posts made from what you already have", "Your website pages, your Google reviews and photos of past jobs become branded posts: tips, review cards, before and afters, and the areas you cover. Phone snaps are welcome, never required."],
  ["Branded posts and captions", "Designed in your colours and logo, written to sound like your business, not a robot."],
  ["Scheduled on Facebook and Instagram", "I schedule everything for you. You see and approve your posts in your own client portal."],
  ["Reel editing, agreed in your scope", "Short reels edited from clips you send, or from stock footage when that suits."],
  ["Your numbers every Monday", "An email with your reach and engagement, so you can see it's working."],
];

export const STEPS: [string, string][] = [
  ["A quick call", "I'll ring you within one business day to learn about your business, your area and the work you want more of."],
  ["I make your first posts", "From your website, your Google reviews and your past jobs. You approve them in your client portal."],
  ["They go out, and you get your numbers", "Your posts go out on Facebook and Instagram, and every Monday you get an email with how they're going."],
];

export const NOT_INCLUDED = "Websites, SEO, Google Business Profile management and paid advertising aren't part of this package (they come with Growth). On-site filming is quoted separately.";

export const FAQS: [string, string][] = [
  ["Do I have to send you photos?", "No. I make your posts from your website, your Google reviews and photos of jobs you've already done. If you do send phone snaps, they make great posts, but they're optional."],
  ["Do you use AI?", "I use AI tools to help with design and writing, and I check every post myself. I never pass off made-up photos as your work."],
  ["Do I get to see the posts first?", "Yes. Your posts sit in your own client portal, where you can approve them or ask for changes."],
  ["What does it cost?", `${PRICE}, billed weekly. It's month to month, so you can cancel any time, and it takes effect at the end of the period you've paid for.`],
  ["What's the free redesign?", "If it looks like a fit, I'll take 3 of your current posts and redesign them in your brand, so you can see what your page could look like before you decide."],
  ["Who does the work?", "Me. You deal with me directly, and it's all done here in Australia."],
  ["What's not included?", NOT_INCLUDED],
];
