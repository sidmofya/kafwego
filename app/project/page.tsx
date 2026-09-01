import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import {
  ProjectFactGrid,
  ProjectTimeline,
  WorkCompletedList,
} from "@/components/page-sections";
import { RegionalContextMap } from "@/components/regional-context-map";
import { TechnicalDisclosures } from "@/components/technical-disclosures";
import { PageHero, SectionIntro } from "@/components/ui";
import { projectPageContent } from "@/content/pages/project";
import { projectFacts, renderFacts } from "@/content/project-facts";
import { technicalDisclosures } from "@/content/site";

export const metadata: Metadata = {
  title: "Project",
  description:
    "Kafwego is an exploration-stage copper-gold project in northwestern Zambia's Greater Lufilian Arc, evaluated under an IOCG-style exploration model.",
};

const glanceFacts = [
  { label: "Country", fact: projectFacts.country },
  { label: "Region", fact: projectFacts.region },
  { label: "Geological province", fact: projectFacts.geologicalProvince },
  { label: "Commodities", fact: projectFacts.commodities },
  { label: "Project stage", fact: projectFacts.projectStage },
  { label: "Exploration model", fact: projectFacts.depositStyle },
  { label: "Priority targets", fact: projectFacts.priorityTargets },
  {
    label: "Next major programme",
    // Derived from the verified metreage, carrying its status, sensitivity and
    // source through unchanged rather than substituting a free-text claim.
    fact: {
      ...projectFacts.initialRCProgramMetres,
      value:
        projectFacts.initialRCProgramMetres.value === null
          ? null
          : `${projectFacts.initialRCProgramMetres.value} m RC proof of concept`,
    },
  },
];

const tenureFacts = [
  { label: "Licence type", fact: projectFacts.licenceType },
  { label: "Licence area", fact: projectFacts.licenceAreaKm2 },
  { label: "Granted", fact: projectFacts.licenceGrantDate },
  { label: "Expiry / renewal", fact: projectFacts.licenceExpiry },
  { label: "Current standing", fact: projectFacts.licenceStanding },
];

export default function ProjectPage() {
  const { hero, location, hypothesis, history, workCompleted, currentPosition, tenure } =
    projectPageContent;
  const hasTenure = renderFacts(tenureFacts).length > 0;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      {/* ── 01 At a glance ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro eyebrow="01 — At a glance" title="Project at a glance" />
          <ProjectFactGrid facts={glanceFacts} />
        </div>
      </section>

      {/* ── 02 Location ── */}
      <section className="section-gap bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionIntro
              eyebrow="02 — Location"
              title={location.title}
              description={location.body}
            />
          </div>
          <RegionalContextMap />
        </div>
      </section>

      {/* ── 03 Geological hypothesis ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro eyebrow="03 — Geological model" title={hypothesis.title} />
          <div className="max-w-3xl space-y-5">
            {hypothesis.paragraphs.map((p, i) => (
              <p
                key={p.slice(0, 40)}
                className={
                  i === hypothesis.paragraphs.length - 1
                    ? "border-l-2 border-copper-500 pl-5 leading-relaxed text-charcoal-800"
                    : "leading-relaxed text-charcoal-600"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Exploration history ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro eyebrow="04 — History" title={history.title} />
          <ProjectTimeline
            entries={history.entries}
            caution={technicalDisclosures.historicalInformation.body}
          />
        </div>
      </section>

      {/* ── 05 Work completed ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="05 — Work completed"
            title="Workstreams completed and outstanding"
            description="Completed technical work is distinguished from regulatory and funding work that remains in progress."
          />
          <WorkCompletedList items={workCompleted} />
        </div>
      </section>

      {/* ── 06 Current position ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro eyebrow="06 — Current position" title={currentPosition.title} />
          <div className="max-w-3xl space-y-5">
            {currentPosition.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed text-charcoal-600">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Tenure ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro eyebrow="07 — Tenure" title={tenure.title} />
          {hasTenure ? (
            <ProjectFactGrid facts={tenureFacts} />
          ) : (
            <p className="max-w-2xl leading-relaxed text-charcoal-600">{tenure.pendingNote}</p>
          )}
        </div>
      </section>

      <section className="section-gap-sm bg-white">
        <div className="container-shell">
          <TechnicalDisclosures
            include={["explorationTarget", "historicalInformation", "forwardLooking"]}
          />
        </div>
      </section>

      <CTASection
        title="Request the Kafwego Technical Package"
        subtitle="Technical summaries, target information and the proposed exploration programme are available to qualified counterparties."
      />
    </>
  );
}
