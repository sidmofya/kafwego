import { CTASection } from "@/components/layout";
import { FactsGrid, IconCards, PlaceholderAsset, TeamCards, Timeline } from "@/components/page-sections";
import Image from "next/image";
import { SectionIntro, Button, Card } from "@/components/ui";
import { homePageContent } from "@/content/pages/home";
import { teamPageContent } from "@/content/pages/team";

export default function HomePage() {
  return (
    <>
      <section className="section-gap">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold md:text-5xl">{homePageContent.hero.title}</h1>
            <p className="mt-4 text-lg text-charcoal-700">{homePageContent.hero.subtitle}</p>
            <div className="mt-6 flex gap-3"><Button href="/contact?inquiry=investor">Request Investor Brief</Button><Button href="/project" secondary>Explore Project</Button></div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-xl border border-stone-100 bg-stone-100">
            <Image src={homePageContent.hero.image} alt={homePageContent.hero.imageAlt} fill className="object-cover" priority />
          </div>
        </div>
        <div className="container-shell mt-8"><FactsGrid facts={homePageContent.hero.facts} /></div>
      </section>

      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro eyebrow="Why Kafwego" title="A focused exploration thesis with disciplined progression" /><IconCards cards={homePageContent.whyCards} /></div></section>

      <section className="section-gap"><div className="container-shell grid gap-6 lg:grid-cols-2"><PlaceholderAsset label="Placeholder: Zambia project location map" /><div><SectionIntro title="Project Snapshot" description="Kafwego is a greenfield copper-gold exploration project in northwestern Zambia with IOCG targeting logic, favorable district context, and a phased path toward drilling, resource definition, and development decision points." /><ul className="space-y-2 text-sm text-charcoal-700"><li>District context in Greater Lufilian Arc</li><li>Technical indicators consistent with IOCG targeting logic</li><li>Staged partner exposure to discovery upside</li></ul><div className="mt-4"><Button href="/project" secondary>View Full Project Page</Button></div></div></div></section>

      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro eyebrow="Investment case" title="A concise institutional logic" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{["Copper’s strategic relevance","Why Zambia","Why this asset","Why this structure"].map((t)=><Card key={t}><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-charcoal-700">{t==="Copper’s strategic relevance"?"Electrification, grid buildout, and industrial modernization continue to reinforce long-term copper demand.":t==="Why Zambia"?"Zambia offers mining history, operating know-how, and relevance to global copper supply.":t==="Why this asset"?"Kafwego combines early-stage upside with coherent geological targeting and district setting.":"The phased model aligns capital deployment with evidence, reducing upfront risk while preserving upside."}</p></Card>)}</div></div></section>

      <section className="section-gap"><div className="container-shell"><SectionIntro eyebrow="Value pathway" title="Milestones aligned to evidence" /><Timeline steps={[{title:"Target Generation",body:"Prioritize targets, refine technical model, and prepare drill program."},{title:"Discovery Drilling",body:"Test priority targets for continuity, grade, and scale."},{title:"Resource Definition",body:"Advance successful zones through follow-up drilling and technical work."},{title:"Development Planning / Strategic Options",body:"Evaluate development pathways, partnerships, and potential exit routes."}]} /></div></section>

      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro eyebrow="Responsible Development" title="Operational quality from the outset" description="Responsible development is not an add-on. It is part of project quality, including environmental discipline, stakeholder engagement, regulatory alignment, and long-term local value creation." /><Button href="/responsible-development" secondary>Learn about Responsible Development</Button></div></section>

      <section className="section-gap"><div className="container-shell"><SectionIntro eyebrow="Team" title="Execution-focused leadership" /><TeamCards members={teamPageContent.leaders} /></div></section>

      <CTASection title="Explore a disciplined entry into Zambia’s copper-gold frontier" />
    </>
  );
}
