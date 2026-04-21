import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/layout";
import { MetricsStrip, IconCards, ValueTimeline, TeamCards } from "@/components/page-sections";
import { SectionIntro, Button, Card, PlaceholderAsset } from "@/components/ui";
import { MountainIcon, CompassIcon, MilestoneIcon, TeamIcon, ArrowRightIcon } from "@/components/icons";
import { homePageContent } from "@/content/pages/home";
import { teamPageContent } from "@/content/pages/team";

export const metadata: Metadata = {
  title: "Kafwego Project | Copper-Gold Exploration in Zambia",
  description:
    "Kafwego is a greenfield copper-gold exploration project in northwestern Zambia, positioned in the Greater Lufilian Arc and structured for disciplined, milestone-based partnership.",
  openGraph: { images: ["/og-placeholder.jpg"] },
};

const whyIcons = [
  <MountainIcon className="w-5 h-5" key="mountain" />,
  <CompassIcon className="w-5 h-5" key="compass" />,
  <MilestoneIcon className="w-5 h-5" key="milestone" />,
  <TeamIcon className="w-5 h-5" key="team" />,
];

export default function HomePage() {
  const whyCards = homePageContent.whyCards.map((c, i) => ({
    ...c,
    icon: whyIcons[i],
  }));

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 pb-0 pt-16 md:pt-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-charcoal-800 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-copper-400">
                {homePageContent.hero.eyebrow}
              </p>
              <h1 className="text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
                {homePageContent.hero.title}
              </h1>
              <div className="my-6 h-px w-12 bg-copper-500" />
              <p className="max-w-lg text-lg leading-relaxed text-stone-400">
                {homePageContent.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact?inquiry=investor"
                  className="inline-flex items-center gap-2 rounded-md bg-copper-500 px-5 py-3 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
                >
                  Request Investor Brief
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/project"
                  className="inline-flex items-center rounded-md border border-stone-600 px-5 py-3 text-sm font-medium text-stone-300 hover:border-stone-400 hover:text-white transition-colors"
                >
                  Explore Project
                </Link>
              </div>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-t-xl border border-charcoal-800 lg:min-h-80">
              <Image
                src={homePageContent.hero.image}
                alt={homePageContent.hero.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics strip ── */}
      <section className="bg-stone-25 pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="container-shell">
          <MetricsStrip metrics={homePageContent.metrics} />
        </div>
      </section>

      {/* ── Why Kafwego ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Why Kafwego"
            title="A focused exploration thesis with disciplined progression"
            description="Four reasons a serious investor should pay attention to this project."
          />
          <IconCards cards={whyCards} />
        </div>
      </section>

      {/* ── Project Snapshot ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <PlaceholderAsset
            label="Placeholder: Zambia project location map — replace with verified geological / location map showing project boundary and regional context"
            aspect="aspect-[4/3]"
          />
          <div>
            <SectionIntro
              eyebrow="Project"
              title="Project Snapshot"
              description="Kafwego is a greenfield copper-gold exploration project in northwestern Zambia with IOCG targeting logic, favorable district context, and a phased path toward drilling, resource definition, and development decision points."
            />
            <ul className="space-y-3">
              {[
                "District context within the Greater Lufilian Arc copper belt",
                "Technical indicators consistent with IOCG targeting logic",
                "Surface geochemistry signatures up to 1.93% Cu and 1.20 g/t Au",
                "108 km² tenement providing district-scale exploration scope",
                "Staged partner exposure to discovery upside with capital discipline",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal-600">
                  <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/project" secondary>View Full Project Page</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Investment Case Preview ── */}
      <section className="section-gap bg-white">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Investment case"
            title="A concise institutional logic"
            description="Four dimensions that frame the investment rationale for Kafwego."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homePageContent.investmentPreview.map((card) => (
              <Card key={card.title} accent>
                <h3 className="font-semibold text-charcoal-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{card.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/investment-case" secondary>Read the Full Investment Case</Button>
          </div>
        </div>
      </section>

      {/* ── Value Pathway ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Value pathway"
            title="Milestones aligned to evidence"
            description="Capital and work advance together — each phase is triggered by technical progress, not by time alone."
          />
          <ValueTimeline steps={homePageContent.milestones} />
        </div>
      </section>

      {/* ── Responsible Development ── */}
      <section className="section-gap bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionIntro
              eyebrow="Responsible Development"
              title="Operational quality from the outset"
            />
            <p className="text-charcoal-600 leading-relaxed">
              Responsible development is not an add-on. It is part of project quality. Kafwego&rsquo;s
              approach emphasizes environmental discipline, stakeholder engagement, regulatory
              alignment, and long-term local value creation from the earliest stages of project
              advancement.
            </p>
            <div className="mt-6">
              <Button href="/responsible-development" secondary>
                Learn about our approach
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <PlaceholderAsset
              label="Placeholder: Field / environmental imagery"
              aspect="aspect-square"
            />
          </div>
        </div>
      </section>

      {/* ── Team Preview ── */}
      <section className="section-gap bg-stone-25">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Team"
            title="Execution-focused leadership"
            description="Kafwego is led by a team combining geological expertise, financial discipline, and local operating experience."
          />
          <TeamCards members={teamPageContent.leaders} />
          <div className="mt-8">
            <Button href="/team" secondary>View Full Team</Button>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTASection
        title="Explore a disciplined entry into Zambia's copper-gold frontier"
        subtitle="Request the investor brief or schedule a technical briefing to begin a structured diligence conversation."
      />
    </>
  );
}
