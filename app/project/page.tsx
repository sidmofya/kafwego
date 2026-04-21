import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import Image from "next/image";
import { IconCards, PlaceholderAsset } from "@/components/page-sections";
import { Card, SectionIntro } from "@/components/ui";
import { projectPageContent } from "@/content/pages/project";

export const metadata: Metadata = {
  title: "Project",
  description: "Flagship project dossier for Kafwego, a greenfield copper-gold exploration opportunity in northwestern Zambia.",
  openGraph: { images: ["/og-project-placeholder.jpg"] },
};

export default function ProjectPage() {
  return (
    <>
      <section className="section-gap"><div className="container-shell"><h1 className="text-4xl font-semibold">The Kafwego Project</h1><p className="mt-4 max-w-3xl text-charcoal-700">A greenfield copper-gold exploration opportunity in northwestern Zambia with IOCG targeting logic, district-scale potential, and a phased path to value creation.</p></div>
        <div className="container-shell mt-8">
          <div className="relative min-h-64 overflow-hidden rounded-xl border border-stone-100 bg-stone-100">
            <Image src="/images/terrain-placeholder.svg" alt="Project hero terrain placeholder" fill className="object-cover" />
          </div>
        </div></section>
      <section className="pb-10"><div className="container-shell grid gap-3 md:grid-cols-3">{projectPageContent.quickFacts.map(([k,v])=><Card key={k}><p className="text-xs uppercase text-copper-500">{k}</p><p className="mt-1 font-medium">{v}</p></Card>)}</div></section>
      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro title="Project Overview" description="Kafwego is a greenfield copper-gold exploration project located in northwestern Zambia. The project is being advanced on an IOCG-style exploration thesis supported by favorable structural setting, surface geochemical indications, and regional geological context within the Greater Lufilian Arc." /></div></section>
      <section className="section-gap"><div className="container-shell grid gap-6 lg:grid-cols-2"><div><SectionIntro title="Location and Regional Context" description="The project sits in northwestern Zambia within a copper-endowed regional setting. District context supports ongoing exploration work, subject to stage-appropriate technical validation." /><p className="text-sm text-charcoal-700">Placeholder guidance: Replace with verified map layer showing project boundary, regional structural corridors, and relevant reference infrastructure once approved.</p></div><PlaceholderAsset label="Placeholder: Geological interpretation and location map" /></div></section>
      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro title="Geological Setting" /><IconCards cards={projectPageContent.geologyCards} /></div></section>
      <section className="section-gap"><div className="container-shell grid gap-4 md:grid-cols-2"><Card><h3 className="font-semibold">Surface Results / Technical Indicators</h3><ul className="mt-3 list-disc pl-5 text-sm text-charcoal-700"><li>Up to 1.93% Cu at surface</li><li>Up to 1.20 g/t Au at surface</li></ul><p className="mt-3 text-xs text-charcoal-700">Surface values provide early encouragement but are exploration-stage indicators rather than resource statements.</p></Card><Card><h3 className="font-semibold">Comparable Context</h3><p className="mt-2 text-sm text-charcoal-700">The project is being explored within an IOCG framework that invites comparison at the level of geological concept, not equivalence.</p><h3 className="mt-4 font-semibold">Infrastructure and Development Logic</h3><p className="mt-2 text-sm text-charcoal-700">Regional operating context and project staging are considered in planning, with specifics to be disclosed in verified technical materials.</p></Card></div></section>
      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro title="Next Work Program" /><div className="grid gap-3 md:grid-cols-5">{projectPageContent.nextProgram.map((item)=><Card key={item}><p className="text-sm">{item}</p></Card>)}</div></div></section>
      <CTASection title="Advance diligence through structured technical engagement" />
    </>
  );
}
