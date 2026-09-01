import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-charcoal-900 text-stone-300">
      <div className="container-shell pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-white">KAFWEGO</span>
              <span className="text-copper-400 text-sm font-medium"> Project</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              {siteConfig.shortDescription}
            </p>
            <div className="mt-6">
              <Link
                href={siteConfig.ctas.technicalPackage.href}
                className="inline-flex items-center rounded-md bg-copper-500 px-4 py-2 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
              >
                {siteConfig.ctas.technicalPackage.label}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Site</h4>
            <ul className="space-y-2.5">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="leading-snug">{siteConfig.contact.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="container-shell py-6">
          <p className="text-xs text-charcoal-500 leading-relaxed max-w-4xl">
            {siteConfig.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
