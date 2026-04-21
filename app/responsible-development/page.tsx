import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { ResponsiblePillars } from "@/components/page-sections";
import { PageHero, SectionIntro, Card, PlaceholderAsset } from "@/components/ui";
import { LeafIcon, TeamIcon, ShieldIcon, BuildingIcon } from "@/components/icons";
import { responsibleDevelopmentContent } from "@/content/pages/responsible-development";

export const metadata: Metadata = {
  title: "Responsible Development",
  description:
    "Kafwego's approach to environmental discipline, stakeholder engagement, regulatory alignment, and long-term local value creation.",
  openGraph: { images: ["/og-responsible-placeholder.jpg"] },
};

const pillarIcons = [
  <LeafIcon className="w-5 h-5" key="leaf" />,
  <TeamIcon className="w-5 h-5" key="team" />,
  <ShieldIcon className="w-5 h-5" key="shield" />,
  <BuildingIcon className="w-5 h-5" key="building" />,
];

export default function ResponsibleDevelopmentPage() {
  const pillars = responsibleDevelopmentContent.pillars.map((p, i) => ({
    ...p,
    icon: pillarIcons[i],
  }));

  return (
    <>
      <PageHero
        eyebrow="Responsible Development"
        title="Operational quality from the outset"
        subtitle="Responsible development is not an add-on. It is part of how Kafwego defines project quality — integrated into technical planning, stakeholder engagement, and field practices from the earliest stages."
      />

      {/* Our approach */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell max-w-3xl">
          <SectionIntro eyebrow="Our approach" title="How we think about responsibility" />
          <p className="text-charcoal-600 leading-relaxed">
            Kafwego approaches responsible development as a practical operating discipline. This
            means careful technical planning, environmental stewardship, constructive stakeholder
            engagement, regulatory alignment, and a commitment to creating enduring value beyond
            the life of any individual exploration campaign.
          </p>
          <p className="mt-4 text-charcoal-600 leading-relaxed">
            We do not treat responsible development as a checklist or a communications exercise.
            It is embedded in how decisions are made, how field programs are designed, and how
            the project engages with the communities and regulators it works alongside.
          </p>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro eyebrow="Four pillars" title="Areas of operational focus" />
          <ResponsiblePillars pillars={pillars} />
        </div>
      </section>

      {/* Details */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Exploration stage</p>
            <h3 className="font-semibold text-charcoal-900 mb-2">Responsibility starts at exploration</h3>
            <p className="text-sm leading-relaxed text-charcoal-600">
              Responsible development does not begin at the construction gate. Kafwego embeds
              environmental awareness, community engagement, and regulatory diligence into every
              phase of exploration — including desk study, field mapping, and drilling preparation.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">Local value</p>
            <h3 className="font-semibold text-charcoal-900 mb-2">Long-term relevance</h3>
            <p className="text-sm leading-relaxed text-charcoal-600">
              Project advancement is designed to support local participation, skills transfer, and
              durable economic relevance over time. Local employment, supplier engagement, and
              long-term community relationships are treated as project assets, not compliance
              obligations.
            </p>
          </Card>
        </div>
      </section>

      {/* Field imagery placeholders */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro eyebrow="Field work" title="Responsible practices in the field" />
          <div className="grid gap-5 md:grid-cols-3">
            <PlaceholderAsset label="Placeholder: Field team / environmental baseline work imagery" aspect="aspect-square" />
            <PlaceholderAsset label="Placeholder: Community engagement / stakeholder meeting imagery" aspect="aspect-square" />
            <PlaceholderAsset label="Placeholder: Environmental / terrain / land management imagery" aspect="aspect-square" />
          </div>
        </div>
      </section>

      <CTASection
        title="Learn more about the project and its responsible development approach"
        subtitle="The investor brief includes an overview of Kafwego's responsible development framework and stakeholder engagement approach."
      />
    </>
  );
}
