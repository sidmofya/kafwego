import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { TeamCards } from "@/components/page-sections";
import { PageHero, SectionIntro, Card, PlaceholderAsset } from "@/components/ui";
import { teamPageContent } from "@/content/pages/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Execution-focused leadership for the Kafwego Project — geological expertise, financial discipline, and local operating knowledge.",
  openGraph: { images: ["/og-team-placeholder.jpg"] },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership and Execution"
        title="Team"
        subtitle="Execution credibility, technical discipline, and local operating awareness are central to Kafwego's advancement model. The project is led by a team structured around exploration geology, engineering judgment, and staged program execution."
      />

      {/* ── Leadership ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Leadership"
            title="Project leadership"
            description="Placeholders below will be replaced with final biographical details and photographs. The team is structured to cover geological, engineering, financial, and operational disciplines."
          />
          <TeamCards members={teamPageContent.leaders} />
        </div>
      </section>

      {/* ── Technical credibility + Operating approach ── */}
      <section className="section-gap bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">
              Technical credibility
            </p>
            <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Technical approach</h3>
            <p className="text-sm leading-relaxed text-charcoal-600">
              The team is structured around exploration geology, engineering judgment, and staged
              program execution with clear technical gates at each decision point. Work programs
              are designed to generate specific, testable outcomes — not simply to spend capital.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              Technical oversight includes geological model development, target ranking, drill
              program design, and results interpretation under an IOCG framework.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-3">
              Operating approach
            </p>
            <h3 className="text-lg font-semibold text-charcoal-900 mb-3">How we operate</h3>
            <p className="text-sm leading-relaxed text-charcoal-600">
              Decision-making is milestone-based, evidence-led, and aligned to responsible field
              practices and stakeholder engagement. Capital allocation follows technical outcomes,
              not calendar schedules.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
              Local operating knowledge — regulatory relationships, community engagement, and
              field logistics — is treated as a first-order project asset rather than an afterthought.
            </p>
          </Card>
        </div>
      </section>

      {/* ── Advisors placeholder ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Advisors"
            title="Advisory and specialist support"
            description="Kafwego draws on specialist advisors in geology, engineering, regulatory affairs, and corporate finance. Advisor profiles will be disclosed in due course as the project advances."
          />
          <PlaceholderAsset
            label="Placeholder: Advisor profiles — technical, regulatory, financial, and ESG advisors to be listed here with brief credential summaries as engagement arrangements are finalized"
            aspect="aspect-[16/4]"
          />
        </div>
      </section>

      <CTASection
        title="Schedule a technical briefing with the project team"
        subtitle="The team is available for structured technical discussions with qualified investors and strategic partners."
      />
    </>
  );
}
