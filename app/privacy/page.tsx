import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Seam Media",
  description: "How Seam Media collects, uses and looks after your personal information.",
  path: "/privacy",
});

const sections = [
  {
    title: "1. Who we are",
    paragraphs: [
      "Seam Media is a business name of The Trustee for MAES Family Trust (ABN 47 634 808 862). This policy explains how we handle personal information. In this policy, \"we\", \"us\" and \"our\" mean Seam Media.",
    ],
  },
  {
    title: "2. What we collect",
    paragraphs: [
      "When you fill in a form on our website, or a lead form on Facebook or Instagram, we collect the details you give us. These usually include your name, business name, email address, mobile number, website, and what you'd like help with.",
      "We also keep records of our emails, calls and messages with you. If you become a client, we collect billing details, account access and the business information we need to deliver your services. Card payments are handled by our payment provider, and we don't store your full card number.",
      "If you enquire, we may look at publicly available information about your business, such as your website, Google listing and social media pages, so we can give you a useful reply.",
    ],
  },
  {
    title: "3. Cookies, pixels and tracking",
    paragraphs: [
      "Our website uses cookies and similar tools, including Google Analytics, Google Ads tags and the Meta pixel. They help us understand how the site is used, work out which ads lead to enquiries, and show ads to people who may be interested. We also keep a first-party cookie that records which ad or campaign brought you here, for up to 90 days.",
      "You can block or clear cookies in your browser, and manage ad preferences in your Google and Meta account settings.",
    ],
  },
  {
    title: "4. How we use your information",
    paragraphs: [
      "We use your information to reply to you, send you what you asked for (such as a free guide), call or message you about your enquiry, provide and bill for our services, measure our marketing and meet our legal obligations.",
      "We may also send you marketing about our services. Every marketing email or text will tell you how to opt out. You can opt out at any time by replying to the message or by contacting us, and we'll act on it within 5 business days.",
    ],
  },
  {
    title: "5. Who we share it with",
    paragraphs: [
      "We don't sell your personal information. We share it only with the service providers that help us run the business, and only as needed. These include providers of email and business tools (Google), advertising and measurement (Google and Meta), website hosting (Vercel), databases (Supabase), automation (Zapier), text messaging (Twilio), payments (Stripe) and AI tools that help us research enquiries and draft replies (Anthropic). We may also disclose information where the law requires it.",
      "Some of these providers store or process information outside Australia, including in the United States.",
    ],
  },
  {
    title: "6. If you're a client's customer",
    paragraphs: [
      "When we run services for a client, such as review request texts or enquiry alerts, we may handle information about that client's customers on the client's behalf. We use it only to provide that service.",
    ],
  },
  {
    title: "7. Keeping it secure",
    paragraphs: [
      "We take reasonable steps to protect personal information from misuse, loss and unauthorised access, and we delete or de-identify it when we no longer need it. No system is completely secure, so please contact us straight away if you think your information has been compromised.",
    ],
  },
  {
    title: "8. Access, correction and complaints",
    paragraphs: [
      "You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it, subject to any records we have to keep by law.",
      "If you have a concern, please contact us first and we'll try to resolve it. If you're not satisfied, you can contact the Office of the Australian Information Commissioner at oaic.gov.au.",
    ],
  },
  {
    title: "9. Changes to this policy",
    paragraphs: ["We may update this policy from time to time. The latest version will always be on this page. Last updated November 2026."],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[#09090b] px-6 py-16 text-gray-300">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-lg">How Seam Media collects, uses and looks after your personal information.</p>
        <div className="mt-10 space-y-9">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-white">{s.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-bold text-white">Contact</h2>
            <p className="mt-3 leading-relaxed">
              Email <a href="mailto:contact@seammedia.com.au" className="underline hover:text-white">contact@seammedia.com.au</a> or call <a href="tel:0402642746" className="underline hover:text-white">0402 642 746</a>. See also our{" "}
              <Link href="/terms-and-conditions" className="underline hover:text-white">Terms and Conditions</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
