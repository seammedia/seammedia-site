// Real Google reviews of Seam Media, used on the Google Ads landing pages (lib/niche-pages.ts).
// Text is copied word for word from the Google Business Profile (read 15 October 2026). Never edit a
// review's wording; an excerpt may only cut whole sentences and must show the cut with "…".
// Individuals are shown as first name + surname initial; businesses by the name on their Google account.
// Only add a review here if it is a genuine client describing their own experience.

export const GOOGLE_BUSINESS_URL = "https://maps.google.com/?cid=18236398314403901553";

export type Review = {
  name: string;
  context: string; // what the work was, shown under the name
  text: string;
};

export const reviews = {
  albert: {
    name: "Albert Y.",
    context: "Frankston business, SEO",
    text: "The guys at Seam Media helped improve the SEO for our business and we’re now showing up on Google for the services we offer in Frankston. He explained everything clearly and made the process easy. We’ve been really happy with the improvement in our visibility and would recommend Seam Media to other business owners.",
  },
  rahul: {
    name: "Rahul S.",
    context: "NDIS marketing",
    text: "Highly recommend these guys for NDIS marketing. They set things up so we can see exactly which calls and referral forms come from Google. Thank you again.",
  },
  khyPhysio: {
    name: "Khy Physio",
    context: "Physio clinic, website and SEO",
    text: "Highly recommend Heath, very happy and grateful for his service so far. He’s been helping us manage our website SEO and restructuring, he’s a man of his words, and he’ll do exactly what he says. Easy to communicate, very professional, very knowledgeable and I can tell he actually cares about helping your business grow.",
  },
  mcgreal: {
    name: "McGreal Counselling",
    context: "Counselling practice",
    text: "Exceptional attention to detail, wholly professional and a pleasure to work with! Thanks Heath for your outstanding efforts!",
  },
  ryan: {
    name: "Ryan W.",
    context: "Google review",
    text: "Best agency we have worked with. Really communicative and made sure we were across everything A++",
  },
  stephanie: {
    name: "Stephanie I.",
    context: "Google review",
    text: "Really great communication, always keeping us updated and really quick with email support. So great to work with",
  },
  rossyPest: {
    name: "Rossy Pest Services",
    context: "Pest control, social media, reviews and website",
    text: "If you're looking for a company to help with your social media, google reviews, website etc.... Look no further, these guys are the ones!!! They do plenty of research on the industry you're in, and post quality educated and engaging imaging and text. Great company to work with.",
  },
  leiarnah: {
    name: "Leiarnah M.",
    context: "Cabinetmaking and handyman business",
    text: "My partner has recently become a sole trader for cabinetmaking/handyman services. … They have steered us in the right direction and given us so much information to ensure we will be successful! I honestly just want to say thank you for helping our small family business!",
  },
  brodie: {
    name: "Brodie T.",
    context: "Website design",
    text: "Seam Media exceeded our expectations with their stellar work on our new website design. After searching for a web designer in Frankston for quite some time, we're thrilled to have found Seam Media. Their exceptional performance speaks volumes, and we wholeheartedly endorse their services.",
  },
  lacey: {
    name: "Lacey T.",
    context: "Website design",
    text: "Heath is nothing but amazing to work with! His communication was clear and he kept me well updated throughout the whole process of building our website. It turned out even better than I imagined, he really listened and saw our vision. He is responsive to any updates that need to be made and honestly could not have asked for a better experience.",
  },
  rod: {
    name: "Rod T.",
    context: "Website design",
    text: "Great to work with. Very quick to respond and make changes. Great value for money.. If you looking for a new webpage Seam is a great place to start",
  },
} satisfies Record<string, Review>;
