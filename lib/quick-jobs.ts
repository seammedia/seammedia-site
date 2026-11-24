// One-off jobs (25 Nov 2026): /quick-jobs, the odd-jobs Meta ads' landing page. Not a package.
// Keep the jobs and prices in step with the lead manager (src/lib/instant/quickJobCopy.ts). All + GST.
// No imports, so `npm test` can load it.

export const JOBS = [
  { id: "website", title: "Website redesign", from: "$1,490", copy: "Your current website, redesigned to look right on phones and make it easy to get in touch. Send me the link and I'll tell you what's included for your site." },
  { id: "shopify", title: "Move to Shopify", from: "$1,490", copy: "From Wix or WordPress. I bring across your products and customers and set up page redirects. Shopify's own fees are separate." },
  { id: "crm", title: "CRM clean-up and follow-ups", from: "$690", copy: "Leads in your inbox, quotes in a notebook? I tidy up your contacts and set up simple follow-ups. Tell me what you use now." },
  { id: "small", title: "Small jobs", from: "$290", copy: "The fiddly ones: tracking, your Google profile, email set-up or page fixes." },
] as const;

export const OTHER_JOB = { id: "other", title: "Something else" } as const;
export const JOB_IDS: readonly string[] = [...JOBS.map((j) => j.id), OTHER_JOB.id];
export const JOB_BUDGETS = ["Under $300", "$300-$700", "$700-$1,500", "$1,500-$3,000", "$3,000+", "Not sure"] as const;
export const JOB_TIMINGS = ["This week", "This month", "No rush"] as const;
export const DETAILS_MAX = 1500;

// The Meta Lead event fires for every budget except "Under $300". "Not sure" counts, and nothing else is excluded.
export const isJobQualified = (budget: string | undefined) => (JOB_BUDGETS as readonly string[]).includes(budget ?? "") && budget !== JOB_BUDGETS[0];

// ?job=website|shopify|crm|small picks the job in the form. Anything else leaves it unpicked.
export const jobFromParam = (value: string | string[] | undefined) => {
  const v = Array.isArray(value) ? value[0] : value;
  return JOBS.some((j) => j.id === v) ? (v as string) : "";
};

export type QuickJobFields = { job: string; budget: string; timing: string; website: string; details: string; qualified: "yes" | "no" };

// Server-side check of the form's own fields (name, email and mobile are checked with the other forms)
export function readQuickJobFields(get: (key: string, max: number) => string): QuickJobFields | { error: string } {
  const job = get("job", 20);
  const budget = get("budget", 60);
  const timing = get("timing", 60);
  const details = get("details", DETAILS_MAX);
  if (!JOB_IDS.includes(job)) return { error: "Please choose a job." };
  if (!details) return { error: "Please tell me what needs doing." };
  if (!(JOB_BUDGETS as readonly string[]).includes(budget)) return { error: "Please choose a budget." };
  if (!(JOB_TIMINGS as readonly string[]).includes(timing)) return { error: "Please choose when you need it." };
  return { job, budget, timing, details, website: get("website", 200), qualified: isJobQualified(budget) ? "yes" : "no" };
}
