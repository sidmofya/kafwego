// Re-exports for convenience — actual implementations are in header.tsx and footer.tsx
export { Header } from "@/components/header";
export { Footer } from "@/components/footer";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export function CTASection({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="section-gap-sm">
      <div className="container-shell">
        <div className="rounded-2xl bg-charcoal-900 px-8 py-12 md:px-14">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-copper-400">
              Diligence
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
            {subtitle && <p className="mt-3 text-stone-400 leading-relaxed">{subtitle}</p>}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href={siteConfig.ctas.technicalPackage.href}
                className="inline-flex items-center rounded-md bg-copper-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
              >
                {siteConfig.ctas.technicalPackage.label}
              </Link>
              <Link
                href={siteConfig.ctas.contactTeam.href}
                className="text-sm font-medium text-stone-400 underline-offset-4 hover:text-white hover:underline transition-colors"
              >
                {siteConfig.ctas.contactTeam.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
