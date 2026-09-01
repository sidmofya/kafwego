import Link from "next/link";
import { ReactNode } from "react";

export function Button({
  href,
  children,
  secondary = false,
  size = "md",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  }[size];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md font-medium transition-colors ${sizeClasses} ${
        secondary
          ? "border border-charcoal-700 text-charcoal-700 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900"
          : "bg-copper-500 text-white hover:bg-copper-600"
      }`}
    >
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-stone-100 bg-white p-6 shadow-sm ${
        accent ? "border-l-2 border-l-copper-500" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-copper-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold leading-snug text-charcoal-900 md:text-3xl">{title}</h2>
      {description && <p className="mt-4 text-charcoal-600 leading-relaxed">{description}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  aside,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  /** Optional visual — a recreated map, never a placeholder or stock photograph. */
  aside?: ReactNode;
}) {
  return (
    <section className="bg-charcoal-900 pb-16 pt-16 md:pb-20 md:pt-20">
      <div
        className={`container-shell ${aside ? "grid gap-10 lg:grid-cols-2 lg:items-center" : ""}`}
      >
        <div>
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-copper-400">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-light leading-tight tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-400">{subtitle}</p>
        </div>
        {aside}
      </div>
    </section>
  );
}
