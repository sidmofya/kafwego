import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/layout";
import {
  EvidenceStrip,
  IconCards,
  OpenQuestionSection,
  ProgressionFlow,
  ProjectFactGrid,
  WorkCompletedList,
} from "@/components/page-sections";
import { TargetMap } from "@/components/target-map";
import { RegionalContextMap } from "@/components/regional-context-map";
import { TechnicalDisclosures } from "@/components/technical-disclosures";
import { SectionIntro, Button, Card } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { homePageContent } from "@/content/pages/home";
import { targetsContent } from "@/content/pages/targets";
import { projectPageContent } from "@/content/pages/project";
import { projectFacts, renderFacts } from "@/content/project-facts";

export const metadata: Metadata = {
  title: "Kafwego | Copper-Gold Exploration in Zambia",
  description:
    "Kafwego is an exploration-stage copper-gold project in northwestern Zambia's Greater Lufilian Arc. Five priority targets have been defined and a 750 m RC proof-of-concept drilling programme is the next major technical step.",
};

const tenureFacts = [
  { label: "Licence type", fact: projectFacts.licenceType },
  { label: "Licence area", fact: projectFacts.licenceAreaKm2 },
  { label: "Granted", fact: projectFacts.licenceGrantDate },
  { label: "Expiry / renewal", fact: projectFacts.licenceExpiry },
  { label: "Current standing", fact: projectFacts.licenceStanding },
];

export default function HomePage() {
  const { hero, evidence, explorationCase, openQuestion, targets, regional, inflection, workCompleted } =
    homePageContent;
  const hasTenure = renderFacts(tenureFacts).length > 0;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 pt-16 md:pt-24">
        <div className="container-shell pb-16 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full bg-charcoal-800 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-copper-400">
                {hero.eyebrow}
              </p>
              <h1 className="text-4xl font-light leading-tight tracking-tight text-white md:text-5xl">
                {hero.title}
              </h1>
              <div className="my-6 h-px w-12 bg-copper-500" />
              <p className="max-w-lg text-lg leading-relaxed text-stone-400">{hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-copper-500 px-5 py-3 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
                >
                  Request Technical Package
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/targets"
                  className="text-sm font-medium text-stone-300 underline-offset-4 hover:text-white hover:underline transition-colors"
                >
                  Explore the Targets
                </Link>
              </div>
            </div>
            <TargetMap />
          </div>
        </div>
      </section>

      {/* ── Evidence strip ── */}
      <section className="bg-stone-25 py-10 md:py-12">
        <div className="container-shell">
          <EvidenceStrip items={evidence} />
        </div>
      </section>

      {/* ── The exploration case ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow={explorationCase.eyebrow}
            title={explorationCase.title}
            description={explorationCase.description}
          />
          <IconCards cards={explorationCase.cards} />
        </div>
      </section>

      {/* ── What remains unproven ── */}
      <OpenQuestionSection
        eyebrow={openQuestion.eyebrow}
        title={openQuestion.title}
        paragraphs={openQuestion.paragraphs}
        closing={openQuestion.closing}
      />

      {/* ── Five priority targets ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow={targets.eyebrow}
            title={targets.title}
            description={targets.description}
          />
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="lg:col-span-3">
              <TargetMap />
            </div>
            <ul className="space-y-3 lg:col-span-2">
              {targetsContent.targets.map((target) => (
                <li key={target.id}>
                  <Card className="border-l-2 border-l-copper-500">
                    <h3 className="font-semibold text-charcoal-900">{target.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600">
                      {target.significance}
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Button href="/targets" secondary>
              Explore all targets
            </Button>
          </div>
        </div>
      </section>

      {/* ── Regional context ── */}
      <section className="section-gap bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionIntro
              eyebrow={regional.eyebrow}
              title={regional.title}
              description={regional.description}
            />
          </div>
          <RegionalContextMap />
        </div>
      </section>

      {/* ── Next value inflection ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow={inflection.eyebrow}
            title={inflection.title}
            description={inflection.description}
          />
          <ProgressionFlow steps={inflection.steps} />
          <div className="mt-8">
            <Button href="/exploration-program" secondary>
              See the full exploration programme
            </Button>
          </div>
        </div>
      </section>

      {/* ── Work completed ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow={workCompleted.eyebrow}
            title={workCompleted.title}
            description={workCompleted.description}
          />
          <WorkCompletedList items={projectPageContent.workCompleted} />
        </div>
      </section>

      {/* ── Project tenure — renders only when verified facts exist ── */}
      {hasTenure && (
        <section className="section-gap bg-stone-25">
          <div className="container-shell">
            <SectionIntro eyebrow="Tenure" title="Project tenure" />
            <ProjectFactGrid facts={tenureFacts} />
          </div>
        </section>
      )}

      {/* ── Disclosures ── */}
      <section className="section-gap-sm bg-white">
        <div className="container-shell">
          <TechnicalDisclosures
            include={["explorationTarget", "historicalInformation", "forwardLooking"]}
          />
        </div>
      </section>

      <CTASection
        title="Request the Kafwego Technical Package"
        subtitle="Qualified investors and strategic partners can request access to additional project materials, including technical summaries, target information and the proposed exploration programme."
      />
    </>
  );
}
