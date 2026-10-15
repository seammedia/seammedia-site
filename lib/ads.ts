// Google Ads tracking (account AW-18496483251).
// Conversion labels come from Google Ads > Goals > Conversions > the action > Tag setup ("send_to": "AW-.../LABEL").
// Until a label is filled in, only the generic GA-style event fires and Google Ads will not count it.
export const ADS_ID = "AW-18496483251";
// GA4 property "Seam Media Website" (558507491, account 318706947), web stream seammedia.com.au. Added 12 Oct 2026.
// Events below without send_to (generate_lead, phone_click, email_click) go to GA4 as well as Google Ads.
export const GA4_ID = "G-JV52BQ2JCR";
export const LEAD_LABEL = "Lk9NCPbMuZIdELPf5_NE"; // "Submit lead form" conversion action
export const CALL_LABEL = "MoAyCPzMuZIdELPf5_NE"; // "Contact" conversion action (website phone number click)
export const EMAIL_LABEL = "qvSXCNKm3J0dELPf5_NE"; // "Email click" conversion action (mailto: link), secondary. Added 15 Oct 2026.

// Options for the "How did you hear about us?" question on the enquiry forms (sent as heardAbout).
export const HEARD_ABOUT_OPTIONS = ["Google search", "Google ad", "Google Maps", "Facebook or Instagram", "A friend or referral", "Other"];

type Gtag = (...args: unknown[]) => void;
const gtag = (): Gtag | undefined =>
  typeof window !== "undefined" ? (window as unknown as { gtag?: Gtag }).gtag : undefined;

// Sends the lead conversion and resolves once Google confirms the hit was sent (event_callback), or after 1.5 s.
// Forms await this before showing "Thanks", so a visitor who closes the tab or an in-app browser as soon as the
// message appears can't cut the request off. Beacon transport survives the page closing. (15 Oct 2026: an iPhone
// Google-app lead's conversion never reached Google; desktop tests always did.)
export function trackLead(form = "contact"): Promise<void> {
  const g = gtag();
  if (!g) return Promise.resolve();
  g("event", "generate_lead", { form });
  if (!LEAD_LABEL) return Promise.resolve();
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    g("event", "conversion", { send_to: `${ADS_ID}/${LEAD_LABEL}`, transport_type: "beacon", event_callback: finish });
    setTimeout(finish, 1500);
  });
}

export function trackCall(kind: "phone" | "email" = "phone") {
  const g = gtag();
  if (!g) return;
  g("event", kind === "phone" ? "phone_click" : "email_click");
  if (kind === "phone" && CALL_LABEL) g("event", "conversion", { send_to: `${ADS_ID}/${CALL_LABEL}`, transport_type: "beacon" });
  if (kind === "email" && EMAIL_LABEL) g("event", "conversion", { send_to: `${ADS_ID}/${EMAIL_LABEL}`, transport_type: "beacon" });
}
