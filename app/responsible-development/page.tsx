import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { ResponsiblePillars } from "@/components/page-sections";
import { PageHero, SectionIntro } from "@/components/ui";
import { responsibleDevelopmentContent } from "@/content/pages/responsible-development";

export const metadata: Metadata = {
  title: "Responsible Development",
  description:
    "Environmental and regulatory work in progress at the Kafwego exploration project, and the principles intended to govern later stages.",
};

export default function ResponsibleDevelopmentPage() {
  const { hero, current, principles } = responsibleDevelopmentContent;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro eyebrow={current.eyebrow} title={current.title} />
          <ResponsiblePillars pillars={current.pillars} />
        </div>
      </section>

      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow={principles.eyebrow}
            title={principles.title}
            description={principles.intro}
          />
          <ResponsiblePillars pillars={principles.pillars} />
        </div>
      </section>

      <CTASection title="Request the Kafwego Technical Package" />
    </>
  );
}
