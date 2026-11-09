// Guide opt-in qualifiers (10 Nov 2026, Heath: "higher quality leads, weed out tyre kickers").
// The guide ads were bringing sole traders with no budget and fake numbers (0400 000 000).
// Every guide form asks two short questions. The answers go to the lead manager and decide who Heath calls,
// and the Meta "Lead" event only fires for qualified answers, so the ads optimise towards them.

export const INDUSTRIES = [
  "Trades and home services",
  "NDIS and allied health",
  "Dental and medical",
  "Ecommerce and retail",
  "Hospitality and food",
  "Professional services",
  "Creative or personal services",
  "Other",
] as const;

export const BUDGETS = [
  "Just the free guide for now",
  "Under $250 a month",
  "$250 to $500 a month",
  "$500 to $1,000 a month",
  "$1,000 to $2,500 a month",
  "$2,500+ a month",
] as const;

// $250+ a month covers the cheapest plan (Smart Website, $99 a week + GST). Below that, or "just the guide",
// the lead gets the guide and the follow-up email, but no call.
const UNQUALIFIED_BUDGETS = new Set<string>([BUDGETS[0], BUDGETS[1]]);
export const isQualifiedBudget = (budget: string) => !!budget && !UNQUALIFIED_BUDGETS.has(budget);

// Australian numbers only (mobile 04, landline 02/03/07/08, or +61). Rejects obvious fakes such as
// 0400 000 000, 0412 345 678 or a run of one repeated digit.
export function phoneProblem(raw: string): string | null {
  let d = raw.replace(/[\s().-]/g, "");
  if (d.startsWith("+61")) d = "0" + d.slice(3);
  else if (d.startsWith("61") && d.length === 11) d = "0" + d.slice(2);
  if (!/^0[2-478]\d{8}$/.test(d)) return "Please enter an Australian mobile or landline number.";
  const rest = d.slice(2);
  if (/^(\d)\1{7}$/.test(rest) || /(\d)\1{5,}/.test(rest)) return "Please enter your real number. I only use it to send the guide and follow up.";
  if (["12345678", "23456789", "87654321", "01234567", "98765432"].includes(rest)) return "Please enter your real number. I only use it to send the guide and follow up.";
  return null;
}
