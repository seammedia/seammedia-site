import Link from "next/link";
import Section from "@/components/ui/Section";
import { LocationStructuredData } from "@/components/StructuredData";
import type { LocationProfile } from "@/lib/locations";

export default function LocationInsights({ profile }: { profile: LocationProfile }) {
  const description = `Local digital marketing services for businesses serving ${profile.name} and surrounding areas.`;

  return (
    <>
      <LocationStructuredData
        location={profile.name}
        path={`/${profile.slug}`}
        description={description}
      />
      <Section id="local-growth" background="white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#5e7986] mb-4">
              Local growth focus
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Build a stronger local presence in {profile.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{profile.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.opportunities.map((opportunity, index) => (
              <div key={opportunity} className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <span className="text-sm font-semibold text-[#5e7986]">0{index + 1}</span>
                <p className="mt-5 text-lg text-gray-800 leading-relaxed">{opportunity}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#f4f7f8] p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">A useful local-page check</h3>
              <p className="text-gray-700 leading-relaxed">{profile.question}</p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-gray-900 px-7 py-3 font-medium text-white transition-colors hover:bg-[#5e7986]"
            >
              Plan your next step
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
