import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions | Seam Media",
  description: "Terms and conditions for Seam Media's marketing, content, advertising, website and related services.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    title: "1. About these terms",
    paragraphs: [
      "These Terms and Conditions apply to services supplied by Seam Media (we, us or our). By accepting a proposal, paying an invoice, completing checkout or asking us to begin work, you agree to these terms together with the proposal, scope, package inclusions and any written variations agreed between us.",
      "If a proposal or written agreement conflicts with these terms, the proposal or written agreement applies to the extent of the conflict.",
    ],
  },
  {
    title: "2. Services and scope",
    paragraphs: [
      "We will provide the services described in your accepted proposal, selected package or checkout summary. Anything not expressly included is outside scope and may require a separate quote, adjusted timeline or additional fee.",
      "Package quantities, platforms, revision rounds, reporting, filming, advertising management, media spend, website work and other inclusions are limited to the scope stated at the time of purchase. Unused monthly inclusions do not roll over unless we agree otherwise in writing.",
    ],
  },
  {
    title: "3. Onboarding and client responsibilities",
    paragraphs: [
      "Our onboarding process may include collecting business information, brand assets, account access, goals, approvals, contacts, billing details and other material needed to deliver the services. Work and delivery timelines begin only when payment and the reasonably required onboarding items have been received.",
      "You must provide accurate information, lawful materials, suitable access, consolidated feedback and decisions within a reasonable time. You are responsible for confirming that supplied claims, prices, offers, testimonials, licences, qualifications and other business information are accurate and approved for use.",
      "You must maintain appropriate backups and security for your own systems and accounts. Where possible, access should be granted through the platform's official permissions rather than by sharing passwords.",
    ],
  },
  {
    title: "4. Fees, GST and payment",
    paragraphs: [
      "Fees are shown in Australian dollars. GST is added where stated or required. Advertising spend, platform fees, stock assets, printing, hosting, domains, travel and third-party costs are excluded unless expressly included.",
      "Invoices and recurring payments are due on the date stated. You authorise us and our payment provider to charge the agreed payment method for recurring services. Failed or overdue payments may pause work, publishing, advertising or access until the account is brought up to date.",
      "You remain responsible for approved work completed and non-cancellable third-party costs incurred before a pause, cancellation or termination takes effect.",
    ],
  },
  {
    title: "5. Refunds",
    paragraphs: [
      "Once a payment is made, it is non-refundable for change of mind, including where onboarding, planning or delivery capacity has been reserved or work has commenced. Monthly and recurring fees are not refunded merely because you did not use, supply material for or approve all available services during that billing period.",
      "Nothing in these terms excludes, restricts or modifies any consumer guarantee, right or remedy that cannot lawfully be excluded under the Australian Consumer Law. Where that law entitles you to a remedy, we will provide the remedy required by law.",
    ],
  },
  {
    title: "6. Timelines and delays",
    paragraphs: [
      "Any delivery date is an estimate unless we expressly agree in writing that it is fixed. Timelines depend on timely onboarding, access, source material, approvals, feedback, platform availability and payment.",
      "Delays in communication, approvals, content supply, account access or requested design changes can delay delivery. We may move affected work to the next reasonably available production window. A client-caused delay does not suspend or extend recurring billing unless we agree otherwise in writing.",
      "Material changes to the brief, repeated changes of direction, extra revision rounds or urgent requests may require a revised fee and timeline before work continues.",
    ],
  },
  {
    title: "7. Approvals and revisions",
    paragraphs: [
      "You must review work carefully before approval, including names, contact details, claims, prices, dates, links and spelling. Approval confirms that the item is authorised for its intended use or publication.",
      "Revisions are limited to the number and scope included in your package or proposal. Feedback should be clear and consolidated. New concepts, reversed approvals, changed briefs and requests outside the agreed revision scope may be quoted separately.",
      "We will take reasonable care when publishing approved material, but third-party platforms may crop, compress, reformat, delay, reject or remove content. Once an item is live, complete removal from third-party caches, shares or archives cannot be guaranteed.",
    ],
  },
  {
    title: "8. Advertising, platforms and results",
    paragraphs: [
      "Advertising media spend is paid separately unless expressly stated. You are responsible for other platform charges, approved budgets and the lawful fulfilment of advertised offers.",
      "Marketing performance is influenced by factors outside our control, including competition, market conditions, pricing, sales follow-up, platform rules, algorithms, account history and website performance. Unless expressly agreed in your accepted proposal, we do not guarantee rankings, reach, followers, leads, sales, revenue, approval by a platform or any particular commercial result.",
      "We may recommend changes, but final business, legal, financial and operational decisions remain yours. Our services do not constitute legal, accounting or financial advice.",
    ],
  },
  {
    title: "9. Intellectual property and supplied materials",
    paragraphs: [
      "You retain ownership of materials you supply and grant us a licence to use, adapt and reproduce them as reasonably required to provide the services. You confirm that you have the necessary rights and permissions for those materials.",
      "Once all related invoices are paid, you may use final deliverables created specifically for you for your business purposes. We retain ownership of our pre-existing tools, templates, systems, methods, working files, reusable components and know-how. Third-party assets remain subject to their own licence terms.",
      "Unless you ask us not to in writing before publication, we may identify you as a client and display public final work in our portfolio or case studies. Confidential information and non-public performance data will not be published without permission.",
    ],
  },
  {
    title: "10. Confidentiality and privacy",
    paragraphs: [
      "Each party must take reasonable steps to protect the other party's confidential information and use it only for the services or as required by law. This does not apply to information that is public through no breach, already lawfully known, independently developed or lawfully received from another source.",
      "We may use reputable contractors and service providers to deliver the services. Information may be processed through hosting, payment, analytics, email, design, advertising and social media platforms as reasonably required for delivery.",
    ],
  },
  {
    title: "11. Suspension, cancellation and termination",
    paragraphs: [
      "The initial term, renewal cycle and notice period are those stated in your proposal, checkout or other written agreement. Unless stated otherwise, cancellation takes effect at the end of the current paid billing period after any required notice is received in writing.",
      "We may pause or terminate services for material non-payment, unlawful or abusive conduct, security risk, repeated failure to provide essential input, or a serious breach that is not remedied within a reasonable time after notice. Where practical, we will explain the issue and provide a reasonable opportunity to remedy it.",
      "On termination, outstanding invoices and approved third-party costs remain payable. Each party must return or remove access to the other party's systems where reasonably possible. Clauses intended to continue, including payment, confidentiality, intellectual property, liability and dispute provisions, survive termination.",
    ],
  },
  {
    title: "12. Liability",
    paragraphs: [
      "Nothing in these terms excludes liability or rights that cannot lawfully be excluded. Subject to that, each party is responsible for loss to the extent it was caused by its breach, negligence or unlawful conduct.",
      "To the extent permitted by law, we are not liable for indirect or consequential loss, loss caused by inaccurate client-supplied information, unauthorised use of supplied material, client delay, or the acts, outages, policy changes or account decisions of third-party platforms.",
      "Where liability can lawfully be limited, our aggregate liability arising from the affected services is limited to the fees paid to us for those services during the three months preceding the event giving rise to the claim.",
    ],
  },
  {
    title: "13. Events outside reasonable control",
    paragraphs: [
      "Neither party is responsible for delay caused by events outside its reasonable control, including widespread outages, natural disasters, serious illness, industrial action, government restrictions, cyber incidents or third-party platform disruption. The affected party must notify the other when reasonably possible and resume performance as soon as practical.",
    ],
  },
  {
    title: "14. Concerns and disputes",
    paragraphs: [
      "If a concern arises, please contact us promptly with the relevant details and the outcome you are seeking. Both parties agree to first try to resolve the issue in good faith through direct discussion before starting formal proceedings, except where urgent relief or a statutory complaint process is required.",
    ],
  },
  {
    title: "15. General",
    paragraphs: [
      "These terms are governed by the laws of Victoria, Australia, and the parties submit to the courts and tribunals with jurisdiction there. If any provision is invalid or unenforceable, it is read down or removed only to the extent necessary and the remaining provisions continue.",
      "We may update these website terms from time to time. Material changes affecting an existing service will apply only when agreed, required by law, or from a future renewal after reasonable notice. A failure to enforce a right immediately does not waive that right.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-black text-white">
      <section className="border-b border-white/10 bg-[#09090b] px-6 pb-20 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.25em] text-pink-400">SEAM MEDIA</p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">Terms and Conditions</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            The practical terms that apply when Seam Media provides marketing, content, advertising, website and related services.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-400">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-zinc-950 p-6 text-sm leading-7 text-zinc-400 md:p-8">
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3">Questions about these terms can be sent to <a href="mailto:contact@seammedia.com.au" className="text-pink-400 hover:text-pink-300">contact@seammedia.com.au</a>.</p>
            <p className="mt-2">You can also <Link href="/contact" className="text-pink-400 hover:text-pink-300">contact Seam Media through the website</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
