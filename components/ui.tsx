import Link from "next/link";
import Image from "next/image";
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

export function MetricCard({
  value,
  unit,
  label,
  qualifier,
}: {
  value: string;
  unit?: string;
  label: string;
  qualifier?: string;
}) {
  return (
    <div className="rounded-xl border border-stone-100 bg-white p-5 shadow-sm">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-light tracking-tight text-charcoal-900">{value}</span>
        {unit && <span className="text-lg font-light text-charcoal-700">{unit}</span>}
      </div>
      <p className="mt-1 text-sm font-medium text-charcoal-700">{label}</p>
      {qualifier && <p className="mt-0.5 text-xs text-charcoal-500">{qualifier}</p>}
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
      {description && (
        <p className="mt-4 text-charcoal-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  withMap = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  withMap?: boolean;
}) {
  return (
    <section className="bg-charcoal-900 pb-16 pt-16 md:pb-20 md:pt-20">
      <div className={`container-shell ${withMap ? "grid gap-10 lg:grid-cols-2 lg:items-center" : ""}`}>
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
        {withMap && (
          <div className="relative min-h-72 overflow-hidden rounded-xl border border-charcoal-800">
            <Image
              src="/images/terrain-placeholder.svg"
              alt="Project location map placeholder"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function PlaceholderAsset({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-stone-300 bg-stone-100 p-8 text-center ${aspect}`}
    >
      <p className="text-sm text-charcoal-500 leading-relaxed">{label}</p>
    </div>
  );
}

export function TagBadge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "copper" | "dark";
}) {
  const variantClasses = {
    default: "bg-stone-100 text-charcoal-600",
    copper: "bg-copper-100 text-copper-700",
    dark: "bg-charcoal-800 text-stone-300",
  }[variant];

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variantClasses}`}>
      {children}
    </span>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-stone-100 ${className}`} />;
}
