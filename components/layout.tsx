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
            <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
            {subtitle && (
              <p className="mt-3 text-stone-400 leading-relaxed">{subtitle}</p>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={siteConfig.ctas.investorBrief.href}
                className="inline-flex items-center rounded-md bg-copper-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
              >
                {siteConfig.ctas.investorBrief.label}
              </Link>
              <Link
                href={siteConfig.ctas.technicalBriefing.href}
                className="inline-flex items-center rounded-md border border-stone-600 px-5 py-2.5 text-sm font-medium text-stone-300 hover:border-stone-400 hover:text-white transition-colors"
              >
                {siteConfig.ctas.technicalBriefing.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
