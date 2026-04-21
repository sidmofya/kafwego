import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { QuickFactBand, IconCards, PlaceholderAsset } from "@/components/page-sections";
import { PageHero, SectionIntro, Card } from "@/components/ui";
import { MountainIcon, CompassIcon, GlobeIcon, MapPinIcon } from "@/components/icons";
import { projectPageContent } from "@/content/pages/project";

export const metadata: Metadata = {
  title: "Project",
  description:
    "Flagship project dossier for Kafwego — a greenfield copper-gold exploration opportunity in northwestern Zambia with IOCG targeting logic and district-scale potential.",
  openGraph: { images: ["/og-project-placeholder.jpg"] },
};

const geologyIcons = [
  <MountainIcon className="w-5 h-5" key="mountain" />,
  <GlobeIcon className="w-5 h-5" key="globe" />,
  <CompassIcon className="w-5 h-5" key="compass" />,
  <MapPinIcon className="w-5 h-5" key="map" />,
];

export default function ProjectPage() {
  const geologyCards = projectPageContent.geologyCards.map((c, i) => ({
    ...c,
    icon: geologyIcons[i],
  }));

  return (
    <>
      <PageHero
        eyebrow="Copper-Gold Exploration · Northwestern Zambia"
        title="The Kafwego Project"
        subtitle="A greenfield copper-gold exploration opportunity in northwestern Zambia with IOCG targeting logic, district-scale potential, and a phased path to value creation."
        withMap
      />

      {/* ── Quick facts band ── */}
      <section className="section-gap-sm bg-stone-25">
        <div className="container-shell">
          <QuickFactBand facts={projectPageContent.quickFacts} />
        </div>
      </section>

      {/* ── Project Overview ── */}
      <section className="section-gap bg-white">
        <div className="container-shell max-w-3xl">
          <SectionIntro
            eyebrow="Overview"
            title="Project Overview"
          />
          <p className="text-charcoal-600 leading-relaxed">
            Kafwego is a greenfield copper-gold exploration project located in northwestern Zambia.
            The project is being advanced on an IOCG-style exploration thesis supported by favorable
            structural setting, surface geochemical indications, and regional geological context
            within the Greater Lufilian Arc.
          </p>
          <p className="mt-4 text-charcoal-600 leading-relaxed">
            The project covers 108 km² and is designed to give partners staged exposure to discovery
            upside while preserving capital discipline through a milestone-based partnership structure.
          </p>
        </div>
      </section>

      {/* ── Location and Regional Context ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Location"
              title="Location and Regional Context"
              description="The project sits in northwestern Zambia within a copper-endowed regional setting. District context supports ongoing exploration work, subject to stage-appropriate technical validation."
            />
            <ul className="space-y-3">
              {[
                "Northwestern Zambia, Greater Lufilian Arc positioning",
                "Regional structural architecture supports IOCG targeting logic",
                "Zambia is a proven copper jurisdiction with established infrastructure and regulatory frameworks",
                "District context consistent with prospective exploration address",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal-600">
                  <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-charcoal-400 leading-relaxed border-t border-stone-100 pt-4">
              Placeholder guidance: Replace map with a verified layer showing project boundary,
              regional structural corridors, and relevant reference infrastructure once approved.
            </p>
          </div>
          <PlaceholderAsset
            label="Placeholder: Geological interpretation and location map — showing project boundary, regional structural features, and district context. Northwestern Zambia / Greater Lufilian Arc."
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      {/* ── Geological Setting ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Geology"
            title="Geological Setting"
            description="The exploration model is built on an integrated assessment of structural setting, lithological context, and surface geochemical signatures interpreted within an IOCG framework."
          />
          <IconCards cards={geologyCards} />
        </div>
      </section>

      {/* ── Surface Results ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Technical indicators"
            title="Surface Results"
            description="Surface geochemistry provides early encouragement for continued work. These values are exploration-stage indicators and should not be read as resource statements."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">
                Copper
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-light tracking-tight text-charcoal-900">1.93</span>
                <span className="text-xl font-light text-charcoal-600">% Cu</span>
              </div>
              <p className="mt-1 text-sm text-charcoal-600">Maximum at surface</p>
            </Card>
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">
                Gold
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-light tracking-tight text-charcoal-900">1.20</span>
                <span className="text-xl font-light text-charcoal-600">g/t Au</span>
              </div>
              <p className="mt-1 text-sm text-charcoal-600">Maximum at surface</p>
            </Card>
            <Card className="bg-stone-50">
              <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-500 mb-3">
                Qualifier
              </p>
              <p className="text-sm leading-relaxed text-charcoal-600">
                Surface values provide early encouragement but are exploration-stage indicators.
                These figures do not represent a defined mineral resource under any reporting
                standard and should be interpreted accordingly.
              </p>
            </Card>
          </div>
          <div className="mt-6">
            <PlaceholderAsset
              label="Placeholder: Surface geochemistry figure — showing sample locations, copper and gold values, and spatial context relative to structural features and project boundary"
              aspect="aspect-[16/6]"
            />
          </div>
        </div>
      </section>

      {/* ── Comparable context + Infrastructure ── */}
      <section className="section-gap bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Comparable context</p>
            <h3 className="font-semibold text-charcoal-900 mb-2">District framework</h3>
            <p className="text-sm leading-relaxed text-charcoal-600">
              The project is being explored within an IOCG framework that invites comparison at
              the level of geological concept, not equivalence. The Greater Lufilian Arc hosts
              several significant copper-cobalt systems, providing a credible district context for
              exploration-stage targeting.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Infrastructure</p>
            <h3 className="font-semibold text-charcoal-900 mb-2">Development logic</h3>
            <p className="text-sm leading-relaxed text-charcoal-600">
              Regional operating context and project staging are considered in technical planning.
              Zambia&rsquo;s established copper sector provides relevant infrastructure and
              logistics precedent. Specific infrastructure details will be disclosed in verified
              technical materials as the project advances.
            </p>
          </Card>
        </div>
      </section>

      {/* ── Next Work Program ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Work program"
            title="Next Work Program"
            description="The immediate technical agenda is focused on target maturation and preparation for a disciplined first drilling sequence."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {projectPageContent.nextProgram.map((item, i) => (
              <div
                key={item}
                className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-copper-500 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold text-charcoal-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Advance diligence through structured technical engagement"
        subtitle="Request the investor brief or schedule a technical briefing to discuss the project and exploration thesis in detail."
      />
    </>
  );
}
