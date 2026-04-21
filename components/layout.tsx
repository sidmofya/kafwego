import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-100 bg-stone-25/95 backdrop-blur">
      <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="text-lg font-semibold">{siteConfig.name}</Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-charcoal-700 hover:text-charcoal-900">{item.label}</Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Button href={siteConfig.ctas.investorBrief.href}>{siteConfig.ctas.investorBrief.label}</Button>
          <Button href={siteConfig.ctas.technicalBriefing.href} secondary>{siteConfig.ctas.technicalBriefing.label}</Button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-100 bg-white py-12">
      <div className="container-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Kafwego Project</h3>
          <p className="mt-2 text-sm text-charcoal-700">{siteConfig.shortDescription}</p>
        </div>
        <div>
          <h4 className="font-medium">Site</h4>
          <ul className="mt-2 space-y-1 text-sm text-charcoal-700">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="mt-2 text-sm text-charcoal-700">{siteConfig.contact.email}<br />{siteConfig.contact.phone}<br />{siteConfig.contact.location}</p>
          <div className="mt-3"><Button href={siteConfig.ctas.investorBrief.href}>{siteConfig.ctas.investorBrief.label}</Button></div>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-stone-100 pt-6 text-xs text-charcoal-700">{siteConfig.legal}</div>
    </footer>
  );
}

export function CTASection({ title }: { title: string }) {
  return (
    <section className="section-gap">
      <div className="container-shell rounded-2xl bg-charcoal-900 p-8 text-white">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={siteConfig.ctas.investorBrief.href}>{siteConfig.ctas.investorBrief.label}</Button>
          <Button href={siteConfig.ctas.technicalBriefing.href} secondary>{siteConfig.ctas.technicalBriefing.label}</Button>
        </div>
      </div>
    </section>
  );
}
