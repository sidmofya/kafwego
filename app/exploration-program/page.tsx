import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { StageGateDiagram } from "@/components/page-sections";
import { TechnicalDisclosures } from "@/components/technical-disclosures";
import { PageHero, SectionIntro } from "@/components/ui";
import { explorationProgramContent } from "@/content/pages/exploration-program";

export const metadata: Metadata = {
  title: "Exploration Program",
  description:
    "Kafwego's stage-gated exploration programme: validation, a 750 m RC proof-of-concept drilling programme, and conditional follow-up drilling.",
};

export default function ExplorationProgramPage() {
  const { hero, currentStage, stages, gate } = explorationProgramContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      {/* ── Current stage ── */}
      <section className="section-gap-sm bg-stone-25">
        <div className="container-shell">
          <div className="max-w-3xl border-l-2 border-copper-500 pl-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500">
              {currentStage.eyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-snug text-charcoal-900 md:text-2xl">
              {currentStage.title}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal-600">{currentStage.body}</p>
          </div>
        </div>
      </section>

      {/* ── Stages ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Programme"
            title="Three stages, each gated on the one before"
            description="Capital commitment increases only as geological evidence strengthens."
          />
          <ol className="grid gap-6 lg:grid-cols-3">
            {stages.map((stage) => (
              <li
                key={stage.number}
                className={`flex flex-col rounded-xl border p-6 ${
                  stage.conditional
                    ? "border-dashed border-stone-300 bg-stone-25"
                    : "border-stone-100 bg-white shadow-sm"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-copper-500">
                    {stage.number}
                  </span>
                  {stage.conditional && (
                    <span className="rounded-full bg-charcoal-900 px-2.5 py-0.5 text-xs font-medium text-stone-300">
                      Conditional
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-charcoal-900">{stage.title}</h3>
                <ul className="mt-4 space-y-2">
                  {stage.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex gap-2.5 text-sm leading-relaxed text-charcoal-600"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-copper-400" />
                      {activity}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-stone-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
                    Outcome
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">{stage.outcome}</p>
                </div>
                {stage.conditionalNote && (
                  <p className="mt-4 border-t border-stone-200 pt-4 text-xs leading-relaxed text-charcoal-500">
                    {stage.conditionalNote}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── The gate ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro eyebrow={gate.eyebrow} title={gate.title} description={gate.description} />
          <StageGateDiagram
            inputLabel={gate.inputLabel}
            testLabel={gate.testLabel}
            gateLabel={gate.gateLabel}
            branches={gate.branches}
          />
        </div>
      </section>

      <section className="section-gap-sm bg-white">
        <div className="container-shell">
          <TechnicalDisclosures include={["explorationTarget", "forwardLooking"]} />
        </div>
      </section>

      <CTASection
        title="Request the Kafwego Technical Package"
        subtitle="Programme scope, drill design, QA/QC procedures and budget are available to qualified counterparties through the diligence process."
      />
    </>
  );
}
