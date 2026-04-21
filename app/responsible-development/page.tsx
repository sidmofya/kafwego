import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import Image from "next/image";
import { IconCards } from "@/components/page-sections";
import { SectionIntro } from "@/components/ui";
import { responsibleDevelopmentContent } from "@/content/pages/responsible-development";

export const metadata: Metadata = {
  title: "Responsible Development",
  description: "Operationally grounded responsible-development framework for Kafwego.",
  openGraph: { images: ["/og-responsible-placeholder.jpg"] },
};

export default function ResponsibleDevelopmentPage() {
  return (
    <>
      <section className="section-gap"><div className="container-shell"><h1 className="text-4xl font-semibold">Responsible Development</h1><p className="mt-4 max-w-3xl text-charcoal-700">Kafwego approaches responsible development as practical operating discipline across technical planning, environmental stewardship, stakeholder engagement, regulatory alignment, and long-term local value creation.</p></div>
        <div className="container-shell mt-8">
          <div className="relative min-h-64 overflow-hidden rounded-xl border border-stone-100 bg-stone-100">
            <Image src="/images/terrain-placeholder.svg" alt="Responsible development terrain placeholder" fill className="object-cover" />
          </div>
        </div></section>
      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro title="Our approach" description="Responsibility is embedded in project quality and execution design from the earliest exploration stages." /><IconCards cards={responsibleDevelopmentContent.pillars.map((p)=>({title:p.title, body:p.body}))} /></div></section>
      <CTASection title="Discuss responsible development processes during diligence" />
    </>
  );
}
