import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { InvestmentFeatures, InflectionPoints, DiligencePath } from "@/components/page-sections";
import { PageHero, SectionIntro, Card } from "@/components/ui";
import { investmentCaseContent } from "@/content/pages/investment-case";

export const metadata: Metadata = {
  title: "Investment Case",
  description:
    "A disciplined investment-case summary for Kafwego's greenfield copper-gold exploration opportunity in northwestern Zambia.",
  openGraph: { images: ["/og-investment-placeholder.jpg"] },
};

export default function InvestmentCasePage() {
  return (
    <>
      <PageHero
        eyebrow="Copper · Gold · Northwestern Zambia"
        title="The Investment Case"
        subtitle="A disciplined greenfield entry into one of the world's most important copper jurisdictions, structured for staged capital deployment aligned to evidence."
      />

      {/* ── Six salient features ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Why invest"
            title="Six reasons to pay attention"
          />
          <InvestmentFeatures features={investmentCaseContent.features} />
        </div>
      </section>

      {/* ── Four why sections ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="The case"
            title="Four dimensions of the investment rationale"
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Why Copper</p>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Copper&rsquo;s strategic relevance</h3>
              <p className="text-sm leading-relaxed text-charcoal-600">
                Copper remains central to electrification, transmission, industrial systems, and
                long-horizon infrastructure buildout. New supply is difficult to bring online,
                increasing the strategic importance of credible discovery pipelines. Exploration-stage
                projects with coherent geological logic and favorable jurisdiction offer exposure
                to this dynamic without requiring construction-stage capital.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Why Zambia</p>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Zambia as a copper jurisdiction</h3>
              <p className="text-sm leading-relaxed text-charcoal-600">
                Zambia combines copper endowment, operating history, skilled sector participation,
                and continued relevance to global supply chains. The Greater Lufilian Arc has hosted
                significant copper-cobalt production for decades. For exploration-stage investors,
                jurisdiction still matters — geology alone does not create value, but geology in a
                credible operating jurisdiction increases the probability of realizing that value.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Why Kafwego</p>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Why this specific asset</h3>
              <p className="text-sm leading-relaxed text-charcoal-600">
                Kafwego offers exposure to early-stage upside in a proven copper province through
                a project that combines coherent geological targeting, encouraging surface indications,
                and a partnership structure designed around staged technical validation. The 108 km²
                tenement provides district-scale scope. The IOCG thesis is technically grounded.
                The team is execution-oriented.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Why This Structure</p>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">The phased farm-in model</h3>
              <p className="text-sm leading-relaxed text-charcoal-600">
                The phased farm-in model is designed to align capital with evidence. Rather than
                requiring maximum commitment at the outset, it allows partners to increase
                participation as the technical case strengthens through exploration milestones.
                Each stage is triggered by defined technical outcomes, not by calendar time.
                This structure protects capital discipline while preserving full discovery upside.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Farm-in model step sequence ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Partnership structure"
            title="Phased farm-in: how it works"
            description="Each stage is linked to a defined technical milestone. Capital grows with confidence."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {investmentCaseContent.farmInModel.map((stage) => (
              <div
                key={stage.phase}
                className="rounded-xl border border-stone-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-copper-500 text-sm font-semibold text-copper-500">
                    {stage.phase}
                  </div>
                  <div className="h-px flex-1 bg-stone-100" />
                </div>
                <h3 className="font-semibold text-charcoal-900">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value inflection points ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Value moments"
            title="Value inflection points"
            description="Each phase of work has the potential to materially re-rate the asset as the technical case strengthens."
          />
          <InflectionPoints points={investmentCaseContent.inflections} />
        </div>
      </section>

      {/* ── Diligence pathway ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="How to engage"
            title="Diligence pathway"
            description="A structured sequence from initial brief through to commercial discussion and site visit."
          />
          <DiligencePath steps={investmentCaseContent.diligence} />
        </div>
      </section>

      <CTASection
        title="Request the investor brief and initiate diligence"
        subtitle="The investor brief provides project summary, geological overview, and partnership structure details."
      />
    </>
  );
}
