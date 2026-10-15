export const salaryOptions = [70000, 75000, 80000] as const;
export const superRate = 0.12;
export const marketingPlans = [
  { name: "Local Marketing Foundation", weekly: 140, summary: "A simple website. Active socials.", features: ["Basic website setup and care", "Small website updates", "Branded posts, captions and scheduling", "Facebook and Instagram support"], note: "Uses your photos and footage. SEO, reporting and advertising are not included." },
  { name: "Growth", weekly: 235, summary: "Local visibility. One ad platform.", features: ["Everything in Foundation", "Local SEO and Google Business Profile", "Five tracked terms and map-pack scans", "Google Ads OR Meta Ads management", "Conversion tracking and monthly reporting"], note: "One prioritised website or SEO improvement per month. Ad spend is separate." },
  { name: "Complete Growth", weekly: 350, summary: "Website, socials, SEO and both ad platforms.", features: ["Everything in Growth", "Google Ads AND Meta Ads management", "Social content and campaign creative", "Combined performance reporting", "Monthly marketing review"], note: "Ad spend and third-party platform fees are separate. Larger projects and filming are quoted separately." },
] as const;

export function employmentCost(salary: number) {
  const superannuation = salary * superRate;
  return { salary, superannuation, annual: salary + superannuation };
}

export function packageCost(weekly: number, employeeAnnual: number) {
  const annual = weekly * 52;
  return { weekly, annual, monthly: annual / 12, saving: employeeAnnual - annual, savingPercent: Math.round((1 - annual / employeeAnnual) * 100) };
}

export function dollars(value: number) {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 }).format(value);
}
