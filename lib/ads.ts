// Google Ads tracking (account AW-18496483251).
// Conversion labels come from Google Ads > Goals > Conversions > the action > Tag setup ("send_to": "AW-.../LABEL").
// Until a label is filled in, only the generic GA-style event fires and Google Ads will not count it.
export const ADS_ID = "AW-18496483251";
// GA4 property "Seam Media Website" (558507491, account 318706947), web stream seammedia.com.au. Added 12 Oct 2026.
// Events below without send_to (generate_lead, phone_click, email_click) go to GA4 as well as Google Ads.
export const GA4_ID = "G-JV52BQ2JCR";
export const LEAD_LABEL = "Lk9NCPbMuZIdELPf5_NE"; // "Submit lead form" conversion action
export const CALL_LABEL = "MoAyCPzMuZIdELPf5_NE"; // "Contact" conversion action (website phone number click)

type Gtag = (...args: unknown[]) => void;
const gtag = (): Gtag | undefined =>
  typeof window !== "undefined" ? (window as unknown as { gtag?: Gtag }).gtag : undefined;

export function trackLead(form = "contact") {
  const g = gtag();
  if (!g) return;
  g("event", "generate_lead", { form });
  if (LEAD_LABEL) g("event", "conversion", { send_to: `${ADS_ID}/${LEAD_LABEL}` });
}

export function trackCall(kind: "phone" | "email" = "phone") {
  const g = gtag();
  if (!g) return;
  g("event", kind === "phone" ? "phone_click" : "email_click");
  if (kind === "phone" && CALL_LABEL) g("event", "conversion", { send_to: `${ADS_ID}/${CALL_LABEL}` });
}
