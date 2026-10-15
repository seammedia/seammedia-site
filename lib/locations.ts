export type LocationProfile = {
  name: string;
  slug: string;
  intro: string;
  opportunities: [string, string, string];
  question: string;
};

export const locationProfiles: Record<string, LocationProfile> = {
  brighton: {
    name: "Brighton",
    slug: "brighton",
    intro:
      "If you serve customers in Brighton, your website should make your service, area and next step clear from the first visit. We help turn local search and referrals into better-qualified enquiries.",
    opportunities: [
      "Build service pages that answer the questions Brighton customers ask before making contact.",
      "Use project, client and process proof to make the decision to enquire easier.",
      "Connect your Brighton page with relevant services, nearby areas and a clear contact path.",
    ],
    question:
      "Which service do you most want to be found for in Brighton, and what proof would help someone choose you?",
  },
  chelsea: {
    name: "Chelsea",
    slug: "chelsea",
    intro:
      "A strong Chelsea presence starts with focused service pages, useful local context and a clear reason to choose your business. We shape the journey from discovery to enquiry around the service you want to grow.",
    opportunities: [
      "Match page headings and calls to action to the services you want local customers to compare.",
      "Add helpful local FAQs that remove uncertainty around service areas, timing and next steps.",
      "Build internal links between Chelsea, service and proof pages so visitors can keep exploring.",
    ],
    question:
      "What would a Chelsea customer need to know before they feel confident requesting a quote or consultation?",
  },
  cranbourne: {
    name: "Cranbourne",
    slug: "cranbourne",
    intro:
      "For businesses serving Cranbourne, clear service information and a simple quote journey help people move from research to action. We can align your website, local search presence and content around that journey.",
    opportunities: [
      "Make the first enquiry step obvious on every high-intent service page.",
      "Explain service areas, project fit and what happens after someone gets in touch.",
      "Align your website wording with the services and categories used in your local profile.",
    ],
    question:
      "Can a first-time visitor tell within a few seconds whether your service is right for their Cranbourne project?",
  },
  dandenong: {
    name: "Dandenong",
    slug: "dandenong",
    intro:
      "Customers comparing providers in Dandenong need a quick understanding of what you deliver, who you serve and how to start. We build clear content that supports both local discovery and practical decision-making.",
    opportunities: [
      "Clarify your offer and ideal customer on the pages that receive the most local traffic.",
      "Use case studies, testimonials and process detail to support higher-consideration services.",
      "Create a consistent path from local landing page to service page to enquiry form.",
    ],
    question:
      "Which proof point best demonstrates that your business can handle the type of work you want in Dandenong?",
  },
  frankston: {
    name: "Frankston",
    slug: "frankston",
    intro:
      "A Frankston service page should connect your offer to the areas and customers you actually want to win. We help make that positioning clear while keeping the content useful for people ready to take action.",
    opportunities: [
      "Create content around the real service questions customers ask before they contact you.",
      "Show the locations, project types and outcomes that are most relevant to your offer.",
      "Use strong internal links so visitors can move from Frankston intent to a specific service.",
    ],
    question:
      "What type of customer or project should this Frankston page make feel immediately understood?",
  },
  hampton: {
    name: "Hampton",
    slug: "hampton",
    intro:
      "Local visibility is more useful when it leads to a relevant conversation. For Hampton businesses, we focus on clear positioning, practical service detail and a direct route to enquiry.",
    opportunities: [
      "Lead with the service outcome, then support it with process and evidence.",
      "Use a focused local call to action rather than sending every visitor to a generic form.",
      "Keep service, contact and local-area wording consistent across the site and profile listings.",
    ],
    question:
      "Does the Hampton page explain why someone should contact you now instead of continuing to compare providers?",
  },
  mornington: {
    name: "Mornington",
    slug: "mornington",
    intro:
      "For businesses serving Mornington and the wider peninsula, a helpful local page should combine a clear service offer with a genuine reason to trust the business behind it.",
    opportunities: [
      "Connect local search intent with the service pages that best answer it.",
      "Use helpful guides, project examples and FAQs to build confidence before contact.",
      "Make the service area and preferred enquiry path easy to understand on mobile.",
    ],
    question:
      "What local question can you answer better than a generic service page for a Mornington customer?",
  },
  "mount-eliza": {
    name: "Mount Eliza",
    slug: "mount-eliza",
    intro:
      "A Mount Eliza landing page should make your positioning, service area and next step feel specific rather than interchangeable. We help turn that local intent into a clearer customer journey.",
    opportunities: [
      "Use a distinct value proposition for the service and customer you want to attract.",
      "Add locally relevant proof without making claims that cannot be substantiated.",
      "Link the page to the most relevant service, portfolio and contact content.",
    ],
    question:
      "What would make a Mount Eliza visitor recognise that your business is the right fit for their needs?",
  },
};
