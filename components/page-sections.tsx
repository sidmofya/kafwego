import { Card, PlaceholderAsset } from "@/components/ui";

export function FactsGrid({ facts }: { facts: string[] }) {
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{facts.map((fact) => <Card key={fact}><p className="text-sm">{fact}</p></Card>)}</div>;
}

export function IconCards({ cards }: { cards: { title: string; body: string; icon?: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <Card key={card.title}>
          <p className="text-xl">{card.icon ?? "•"}</p>
          <h3 className="mt-2 font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm text-charcoal-700">{card.body}</p>
        </Card>
      ))}
    </div>
  );
}

export function Timeline({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, i) => (
        <Card key={step.title}>
          <p className="text-xs uppercase tracking-widest text-copper-500">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-2 font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-charcoal-700">{step.body}</p>
        </Card>
      ))}
    </div>
  );
}

export function TeamCards({ members }: { members: { name: string; title: string; bio: string; relevance: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {members.map((m) => (
        <Card key={m.title}>
          <PlaceholderAsset label={`Placeholder: Team photo - ${m.title}`} />
          <h3 className="mt-4 font-semibold">{m.name}</h3>
          <p className="text-sm text-copper-700">{m.title}</p>
          <p className="mt-2 text-sm text-charcoal-700">{m.bio}</p>
          <p className="mt-2 text-xs text-charcoal-700"><span className="font-medium">Direct relevance:</span> {m.relevance}</p>
        </Card>
      ))}
    </div>
  );
}

export { PlaceholderAsset };
