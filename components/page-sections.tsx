import { ReactNode } from "react";
import { Card } from "@/components/ui";
import { renderFacts, type LabelledFact } from "@/content/project-facts";

/** Non-numeric evidence facts. Deliberately not a metrics strip — no headline grades. */
export function EvidenceStrip({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label} className="bg-white px-5 py-6">
          <dt className="sr-only">{item.label}</dt>
          <dd>
            <span className="block text-2xl font-light tracking-tight text-charcoal-900">
              {item.value}
            </span>
            <span className="mt-1.5 block text-sm text-charcoal-600">{item.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** The "what drilling must establish" block. Reads as discipline, not as a disclaimer. */
export function OpenQuestionSection({
  eyebrow,
  title,
  paragraphs,
  closing,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  closing?: string;
}) {
  return (
    <section className="section-gap bg-charcoal-900">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-copper-400">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">{title}</h2>
          <div className="my-7 h-px w-12 bg-copper-500" />
          <div className="space-y-5">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-stone-400">
                {p}
              </p>
            ))}
          </div>
          {closing && (
            <p className="mt-8 border-l-2 border-copper-500 pl-5 text-lg font-medium leading-relaxed text-white">
              {closing}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function IconCards({
  cards,
}: {
  cards: { title: string; body: string; icon?: ReactNode }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Card key={card.title}>
          {card.icon && (
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-copper-100 text-copper-600">
              {card.icon}
            </div>
          )}
          <h3 className="font-semibold text-charcoal-900">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{card.body}</p>
        </Card>
      ))}
    </div>
  );
}

/** Renders only facts that are both verified and cleared for public disclosure. */
export function ProjectFactGrid({ facts }: { facts: LabelledFact[] }) {
  const visible = renderFacts(facts);
  if (visible.length === 0) return null;

  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((fact) => (
        <div key={fact.label} className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm">
          <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
            {fact.label}
          </dt>
          <dd className="mt-1.5 text-charcoal-900">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectTimeline({
  entries,
  caution,
}: {
  entries: { period: string; title: string; items: string[] }[];
  caution?: string;
}) {
  return (
    <div>
      <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {entries.map((entry, i) => (
          <li key={entry.period} className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-copper-500 text-xs font-semibold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold tracking-wide text-charcoal-900">
                {entry.period}
              </span>
            </div>
            <div className="mt-4 border-t border-stone-200 pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-copper-600">
                {entry.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {entry.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-charcoal-600">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-copper-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      {caution && <p className="mt-8 text-xs leading-relaxed text-charcoal-500">{caution}</p>}
    </div>
  );
}

/** Work completed. Distinguishes finished technical work from work still in progress. */
export function WorkCompletedList({
  items,
}: {
  items: { title: string; body: string; state: "complete" | "in-progress" | "next" }[];
}) {
  const stateMeta = {
    complete: { label: "Complete", cls: "bg-copper-100 text-copper-700" },
    "in-progress": { label: "In progress", cls: "bg-stone-100 text-charcoal-600" },
    next: { label: "Next phase", cls: "bg-charcoal-900 text-stone-300" },
  } as const;

  return (
    <ul className="divide-y divide-stone-100 overflow-hidden rounded-xl border border-stone-100 bg-white shadow-sm">
      {items.map((item) => (
        <li key={item.title} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="sm:w-56 sm:flex-shrink-0">
            <h3 className="font-medium text-charcoal-900">{item.title}</h3>
            <span
              className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${stateMeta[item.state].cls}`}
            >
              {stateMeta[item.state].label}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-charcoal-600">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

/** Linear progression: evidence → test → evidence → decision. */
export function ProgressionFlow({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <Card className="h-full">
            <span className="text-xs font-semibold uppercase tracking-widest text-copper-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-semibold text-charcoal-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.body}</p>
          </Card>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-copper-400 lg:bottom-auto lg:left-auto lg:right-[-14px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
            >
              ↓<span className="hidden lg:inline">→</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** The branching technical gate — the most important investor graphic on the site. */
export function StageGateDiagram({
  inputLabel,
  testLabel,
  gateLabel,
  branches,
}: {
  inputLabel: string;
  testLabel: string;
  gateLabel: string;
  branches: { outcome: string; decision: string }[];
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-10">
      <div className="mx-auto max-w-sm space-y-3 text-center">
        <div className="rounded-lg border border-stone-200 bg-stone-25 px-5 py-3.5 text-sm font-medium text-charcoal-800">
          {inputLabel}
        </div>
        <div aria-hidden="true" className="text-copper-400">↓</div>
        <div className="rounded-lg bg-copper-500 px-5 py-3.5 text-sm font-semibold text-white">
          {testLabel}
        </div>
        <div aria-hidden="true" className="text-copper-400">↓</div>
        <div className="rounded-lg bg-charcoal-900 px-5 py-3.5 text-sm font-semibold text-white">
          {gateLabel}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {branches.map((branch) => (
          <div
            key={branch.outcome}
            className="rounded-lg border border-stone-200 bg-stone-25 p-5"
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-copper-600">
              {branch.outcome}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{branch.decision}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InvestmentFeatures({
  features,
}: {
  features: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => (
        <div key={feature.title} className="border-l-2 border-copper-500 pl-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-copper-500">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 font-semibold text-charcoal-900">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{feature.body}</p>
        </div>
      ))}
    </div>
  );
}

export function ResponsiblePillars({
  pillars,
}: {
  pillars: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {pillars.map((pillar) => (
        <Card key={pillar.title}>
          <h3 className="font-semibold text-charcoal-900">{pillar.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{pillar.body}</p>
        </Card>
      ))}
    </div>
  );
}

export function TeamCards({
  members,
}: {
  members: { name: string; title: string; bio: string; relevance: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <Card key={member.name}>
          <h3 className="font-semibold text-charcoal-900">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-copper-600">{member.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{member.bio}</p>
          <p className="mt-3 border-t border-stone-100 pt-3 text-sm leading-relaxed text-charcoal-500">
            {member.relevance}
          </p>
        </Card>
      ))}
    </div>
  );
}
