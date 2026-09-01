import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { TargetMap } from "@/components/target-map";
import { TechnicalDisclosures } from "@/components/technical-disclosures";
import { PageHero, SectionIntro, Card } from "@/components/ui";
import { targetsContent } from "@/content/pages/targets";

export const metadata: Metadata = {
  title: "Exploration Targets",
  description:
    "Five priority exploration targets have been defined across the Kafwego licence: Pit 1, Pit 2, Dabwa, Chimamokwe and Kaluba.",
};

export default function TargetsPage() {
  const { hero, targets, evidenceLabels, evidenceMatrixCaption, selectionCriteria, qualifier } =
    targetsContent;
  const evidenceKeys = Object.keys(evidenceLabels) as (keyof typeof evidenceLabels)[];

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      {/* ── The map ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <TargetMap />
        </div>
      </section>

      {/* ── Target cards ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Priority targets"
            title="What each target represents"
            description="Significance as recorded in the project technical material. Each remains untested at depth."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {targets.map((target) => (
              <Card key={target.id} accent>
                <h3 className="font-semibold text-charcoal-900">{target.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                  {target.significance}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-stone-100 pt-4">
                  {target.evidence.map((key) => (
                    <li
                      key={key}
                      className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-charcoal-600"
                    >
                      {evidenceLabels[key]}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-charcoal-500">{qualifier}</p>
        </div>
      </section>

      {/* ── Evidence matrix ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Evidence"
            title="What supports each target"
            description="A comparison of the evidence recorded against each priority target."
          />
          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full min-w-[38rem] border-collapse text-sm">
              <caption className="sr-only">
                Evidence recorded for each Kafwego priority exploration target
              </caption>
              <thead>
                <tr className="border-b border-stone-200">
                  <th scope="col" className="p-4 text-left font-semibold text-charcoal-900">
                    Target
                  </th>
                  {evidenceKeys.map((key) => (
                    <th
                      key={key}
                      scope="col"
                      className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-charcoal-500"
                    >
                      {evidenceLabels[key]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {targets.map((target) => (
                  <tr key={target.id} className="border-b border-stone-100 last:border-0">
                    <th scope="row" className="p-4 text-left font-medium text-charcoal-900">
                      {target.name}
                    </th>
                    {evidenceKeys.map((key) => {
                      const present = target.evidence.includes(key);
                      return (
                        <td key={key} className="p-4">
                          <span className="sr-only">
                            {present ? "Recorded" : "Not specified in source"}
                          </span>
                          <span aria-hidden="true" className={present ? "text-copper-600" : "text-stone-300"}>
                            {present ? "●" : "–"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-charcoal-500">
            {evidenceMatrixCaption}
          </p>
        </div>
      </section>

      {/* ── Selection criteria ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Method"
            title="How targets were selected"
            description="Targets were generated by integrating the following criteria across the licence area."
          />
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {selectionCriteria.map((criterion) => (
              <li
                key={criterion}
                className="flex items-start gap-3 rounded-lg border border-stone-100 bg-stone-25 p-4 text-sm text-charcoal-700"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper-500" />
                {criterion}
              </li>
            ))}
          </ul>
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
        subtitle="Target-scale detail, the underlying geological interpretation and the proposed drilling programme are available to qualified counterparties."
      />
    </>
  );
}
