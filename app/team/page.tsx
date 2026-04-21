import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import { TeamCards } from "@/components/page-sections";
import { Card, SectionIntro } from "@/components/ui";
import { teamPageContent } from "@/content/pages/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Execution-focused team overview for the Kafwego Project.",
  openGraph: { images: ["/og-team-placeholder.jpg"] },
};

export default function TeamPage() {
  return (
    <>
      <section className="section-gap"><div className="container-shell"><h1 className="text-4xl font-semibold">Team</h1><p className="mt-4 max-w-3xl text-charcoal-700">Execution credibility, technical discipline, and local operating awareness are central to Kafwego’s advancement model.</p></div></section>
      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro title="Leadership" /><TeamCards members={teamPageContent.leaders} /></div></section>
      <section className="section-gap"><div className="container-shell grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Technical credibility</h3><p className="mt-2 text-sm text-charcoal-700">The team is structured around exploration geology, engineering judgment, and staged program execution with clear technical gates.</p></Card><Card><h3 className="font-semibold">Operating approach</h3><p className="mt-2 text-sm text-charcoal-700">Decision-making is milestone-based, evidence-led, and aligned to responsible field practices and stakeholder engagement.</p></Card></div></section>
      <CTASection title="Schedule a technical briefing with the project team" />
    </>
  );
}
