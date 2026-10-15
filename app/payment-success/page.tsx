import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Received | Seam Media",
  description:
    "Confirmation that your Seam Media package payment has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentSuccessPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-[#09090b] px-6 py-24 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
          <Check className="h-10 w-10 text-emerald-400" strokeWidth={2.5} />
        </div>

        <p className="mb-4 font-mono text-xs font-semibold tracking-[0.25em] text-emerald-400">
          PAYMENT SUCCESSFUL
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Thank you.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Your payment has been received. We will email you with the next steps
          for your Seam Media package within one business day.
        </p>

        <div className="mt-10 w-full rounded-3xl border border-white/10 bg-zinc-900/60 p-6 md:p-8">
          <p className="text-zinc-300">
            Please do not submit another payment. If you have any questions,
            contact us and we will confirm everything for you.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@seammedia.com.au"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
              contact@seammedia.com.au
            </a>
            <span className="hidden text-zinc-700 sm:inline">•</span>
            <a
              href="tel:+61402642746"
              className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-emerald-400"
            >
              <Phone className="h-4 w-4" />
              0402 642 746
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-white px-7 py-3 font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Return to Seam Media
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-7 py-3 font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
