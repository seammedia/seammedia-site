import Link from "next/link";

export default function PaymentTermsNotice() {
  return (
    <aside className="border-t border-white/10 bg-black px-6 py-7" aria-label="Payment terms">
      <p className="mx-auto max-w-6xl text-center text-[11px] leading-relaxed text-zinc-600">
        Payments are non-refundable for change of mind once made, including where onboarding, planning or delivery capacity has been reserved or work has commenced. This does not limit any rights or remedies available under the Australian Consumer Law. See our{" "}
        <Link href="/terms-and-conditions" className="underline decoration-zinc-700 underline-offset-2 transition hover:text-zinc-400">
          Terms and Conditions
        </Link>
        .
      </p>
    </aside>
  );
}
