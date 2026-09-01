import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { InvestmentFeatures } from "@/components/page-sections";
import { TechnicalDisclosures } from "@/components/technical-disclosures";
import { PageHero, SectionIntro, Card } from "@/components/ui";
import { investmentCaseContent } from "@/content/pages/investment-case";

export const metadata: Metadata = {
  title: "Investment Case",
  description:
    "Why Kafwego merits technical diligence: converging exploration evidence, five priority targets and a bounded near-term drilling test.",
};

export default function InvestmentCasePage() {
  const { hero, features, partnership, funding, diligence } = investmentCaseContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="The case"
            title="Six reasons this warrants technical review"
            description="Kafwego is early-stage. The proposition is not that a deposit exists, but that a well-defined geological question can now be tested at bounded cost."
          />
          <InvestmentFeatures features={features} />
        </div>
      </section>

      <section className="section-gap bg-stone-25">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500">
              {partnership.eyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-charcoal-900">{partnership.title}</h2>
            <div className="mt-4 space-y-4">
              {partnership.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-charcoal-600">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-5 border-t border-stone-100 pt-4 text-xs leading-relaxed text-charcoal-500">
              {partnership.note}
            </p>
          </Card>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500">
              {funding.eyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-charcoal-900">{funding.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-600">{funding.body}</p>
          </Card>
        </div>
      </section>

      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro eyebrow={diligence.eyebrow} title={diligence.title} />
          <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {diligence.steps.map((step, i) => (
              <li key={step} className="rounded-lg border border-stone-100 bg-stone-25 p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-copper-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-gap-sm bg-stone-25">
        <div className="container-shell">
          <TechnicalDisclosures
            include={["explorationTarget", "historicalInformation", "forwardLooking"]}
          />
        </div>
      </section>

      <CTASection
        title="Request the Kafwego Technical Package"
        subtitle="Technical diligence precedes commercial discussion. Request the package to begin."
      />
    </>
  );
}
