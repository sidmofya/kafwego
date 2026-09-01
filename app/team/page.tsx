import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { TeamCards } from "@/components/page-sections";
import { PageHero, SectionIntro } from "@/components/ui";
import { teamPageContent } from "@/content/pages/team";

export const metadata: Metadata = {
  title: "Team",
  description: "The Kafwego project team.",
  // Not in primary navigation while biographies are unverified.
  robots: teamPageContent.leaders.length === 0 ? { index: false, follow: true } : undefined,
};

export default function TeamPage() {
  const { hero, leaders, pendingNote } = teamPageContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-gap bg-white">
        <div className="container-shell">
          {leaders.length > 0 ? (
            <>
              <SectionIntro
                eyebrow="Leadership"
                title="Who is advancing the project"
                description="Each profile sets out why this person is relevant to the current stage of this project."
              />
              <TeamCards members={leaders} />
            </>
          ) : (
            <p className="max-w-2xl leading-relaxed text-charcoal-600">{pendingNote}</p>
          )}
        </div>
      </section>

      <CTASection
        title="Request the Kafwego Technical Package"
        subtitle="Project team introductions form part of the technical diligence process."
      />
    </>
  );
}
