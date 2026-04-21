import type { Metadata } from "next";
import { CTASection } from "@/components/layout";
import Image from "next/image";
import { Card, SectionIntro } from "@/components/ui";
import { investmentCaseContent } from "@/content/pages/investment-case";

export const metadata: Metadata = {
  title: "Investment Case",
  description: "A disciplined investment-case summary for Kafwego's copper-gold exploration opportunity.",
  openGraph: { images: ["/og-investment-placeholder.jpg"] },
};

export default function InvestmentCasePage() {
  return (
    <>
      <section className="section-gap"><div className="container-shell"><h1 className="text-4xl font-semibold">The Investment Case</h1><p className="mt-4 max-w-3xl text-charcoal-700">A disciplined greenfield entry into one of the world’s most important copper jurisdictions.</p></div>
        <div className="container-shell mt-8">
          <div className="relative min-h-64 overflow-hidden rounded-xl border border-stone-100 bg-stone-100">
            <Image src="/images/terrain-placeholder.svg" alt="Investment case terrain placeholder" fill className="object-cover" />
          </div>
        </div></section>
      <section className="pb-12"><div className="container-shell grid gap-3 md:grid-cols-3">{investmentCaseContent.features.map((f)=><Card key={f}><p className="text-sm">{f}</p></Card>)}</div></section>
      <section className="section-gap bg-white"><div className="container-shell grid gap-5 md:grid-cols-2"><Card><h3 className="font-semibold">Why Copper</h3><p className="mt-2 text-sm text-charcoal-700">Copper remains central to electrification, transmission, industrial systems, and long-horizon infrastructure buildout. New supply is difficult to bring online, increasing the strategic importance of credible discovery pipelines.</p></Card><Card><h3 className="font-semibold">Why Zambia</h3><p className="mt-2 text-sm text-charcoal-700">Zambia combines copper endowment, operating history, skilled sector participation, and continued relevance to global supply chains. For exploration-stage investors, jurisdiction still matters because geology alone does not create value.</p></Card><Card><h3 className="font-semibold">Why Kafwego</h3><p className="mt-2 text-sm text-charcoal-700">Kafwego offers exposure to early-stage upside in a proven copper province through coherent geological targeting, encouraging surface indications, and staged technical validation.</p></Card><Card><h3 className="font-semibold">Why This Structure</h3><p className="mt-2 text-sm text-charcoal-700">The phased farm-in model aligns capital with evidence, allowing partners to increase participation as technical confidence improves.</p></Card></div></section>
      <section className="section-gap"><div className="container-shell"><SectionIntro title="Value Inflection Points" /><div className="grid gap-3 md:grid-cols-5">{investmentCaseContent.inflections.map((i)=><Card key={i}><p className="text-sm">{i}</p></Card>)}</div></div></section>
      <section className="section-gap bg-white"><div className="container-shell"><SectionIntro title="Diligence Pathway" /><div className="grid gap-3 md:grid-cols-5">{investmentCaseContent.diligence.map((d,idx)=><Card key={d}><p className="text-xs uppercase text-copper-500">Step {idx+1}</p><p className="mt-1 text-sm">{d}</p></Card>)}</div></div></section>
      <CTASection title="Request the investor brief and initiate diligence" />
    </>
  );
}
