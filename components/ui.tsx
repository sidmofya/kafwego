import Link from "next/link";
import { ReactNode } from "react";

export function SectionIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-sm uppercase tracking-[0.14em] text-copper-500">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-charcoal-700">{description}</p> : null}
    </div>
  );
}

export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-md px-4 py-2.5 text-sm font-medium transition ${
        secondary
          ? "border border-charcoal-700 text-charcoal-700 hover:bg-charcoal-900 hover:text-white"
          : "bg-copper-500 text-white hover:bg-copper-700"
      }`}
    >
      {children}
    </Link>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm">{children}</div>;
}

export function PlaceholderAsset({ label }: { label: string }) {
  return (
    <div className="flex min-h-52 items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 p-6 text-center text-sm text-charcoal-700">
      {label}
    </div>
  );
}
