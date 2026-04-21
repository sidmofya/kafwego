import Image from "next/image";
import { Card, MetricCard, PlaceholderAsset } from "@/components/ui";
import { ReactNode } from "react";

// Metric strip: 6 key stats for the home hero
export function MetricsStrip({ metrics }: { metrics: { value: string; unit?: string; label: string; qualifier?: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {metrics.map((m) => (
        <MetricCard key={m.label} value={m.value} unit={m.unit} label={m.label} qualifier={m.qualifier} />
      ))}
    </div>
  );
}

// Legacy FactsGrid for simpler fact lists
export function FactsGrid({ facts }: { facts: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((fact) => (
        <Card key={fact}>
          <p className="text-sm font-medium text-charcoal-700">{fact}</p>
        </Card>
      ))}
    </div>
  );
}

// Icon cards with SVG icon slot
export function IconCards({
  cards,
}: {
  cards: { title: string; body: string; icon: ReactNode }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <Card key={card.title}>
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-copper-50 text-copper-500">
            {card.icon}
          </div>
          <h3 className="font-semibold text-charcoal-900">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{card.body}</p>
        </Card>
      ))}
    </div>
  );
}

// Quick fact band for project/investment-case pages
export function QuickFactBand({ facts }: { facts: [string, string][] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-stone-100 bg-white px-5 py-4 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-copper-500">{label}</p>
          <p className="mt-1.5 font-semibold text-charcoal-900">{value}</p>
        </div>
      ))}
    </div>
  );
}

// Value pathway timeline with connecting line
export function ValueTimeline({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <div className="relative">
      {/* Connecting line (desktop) */}
      <div className="absolute left-0 right-0 top-5 hidden h-px bg-stone-200 md:block" style={{ left: "2.5rem", right: "2.5rem" }} />
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative flex flex-col">
            <div className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-copper-500 bg-white text-sm font-semibold text-copper-500">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-semibold text-charcoal-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Team member cards with photo placeholder
export function TeamCards({
  members,
}: {
  members: { name: string; title: string; bio: string; relevance: string }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {members.map((m) => (
        <Card key={m.title} className="flex flex-col">
          <div className="mb-5 flex min-h-40 items-center justify-center rounded-lg border border-dashed border-stone-200 bg-stone-50 text-center text-xs leading-snug text-charcoal-400 px-3">
            Placeholder: Team photo<br />{m.title}
          </div>
          <h3 className="font-semibold text-charcoal-900">{m.name}</h3>
          <p className="text-sm font-medium text-copper-500 mt-0.5">{m.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{m.bio}</p>
          <div className="mt-4 border-t border-stone-100 pt-4">
            <p className="text-xs text-charcoal-500">
              <span className="font-semibold text-charcoal-700">Relevance: </span>
              {m.relevance}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

// Diligence pathway — numbered steps in a horizontal sequence
export function DiligencePath({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {steps.map((step, i) => (
        <div key={step} className="relative rounded-xl border border-stone-100 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-copper-500 mb-2">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="text-sm font-semibold text-charcoal-900 leading-snug">{step}</p>
          {i < steps.length - 1 && (
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-stone-300 md:block text-lg font-light">
              ›
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Value inflection cards
export function InflectionPoints({ points }: { points: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
      {points.map((p, i) => (
        <div
          key={p.title}
          className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm"
        >
          <div className="mb-3 text-2xl font-light text-copper-300">{String(i + 1)}</div>
          <h3 className="text-sm font-semibold text-charcoal-900">{p.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-charcoal-600">{p.body}</p>
        </div>
      ))}
    </div>
  );
}

// Responsible development pillars
export function ResponsiblePillars({
  pillars,
}: {
  pillars: { title: string; body: string; icon: ReactNode }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {pillars.map((p) => (
        <Card key={p.title}>
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-charcoal-600">
            {p.icon}
          </div>
          <h3 className="font-semibold text-charcoal-900">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{p.body}</p>
        </Card>
      ))}
    </div>
  );
}

// Investment case feature strip
export function InvestmentFeatures({ features }: { features: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-xl border border-stone-100 bg-white px-6 py-5 shadow-sm"
        >
          <div className="mb-1 h-0.5 w-8 rounded-full bg-copper-400" />
          <h3 className="mt-3 font-semibold text-charcoal-900">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

// Re-export for backward-compat usage in any pages that still import PlaceholderAsset from here
export { PlaceholderAsset };
