"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-stone-25/96 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-semibold tracking-wide text-charcoal-900 hover:text-charcoal-700 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-bold uppercase tracking-widest">KAFWEGO</span>
          <span className="text-copper-500 font-medium tracking-normal normal-case"> Project</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active
                    ? "text-charcoal-900 font-medium bg-stone-100"
                    : "text-charcoal-600 hover:text-charcoal-900 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href={siteConfig.ctas.investorBrief.href}
            className="inline-flex items-center rounded-md bg-copper-500 px-4 py-2 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
          >
            {siteConfig.ctas.investorBrief.label}
          </Link>
          <Link
            href={siteConfig.ctas.technicalBriefing.href}
            className="inline-flex items-center rounded-md border border-charcoal-700 px-4 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-colors"
          >
            {siteConfig.ctas.technicalBriefing.label}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-charcoal-700 hover:bg-stone-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-100 bg-stone-25 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-1 mb-5" aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm transition-colors ${
                    active
                      ? "text-charcoal-900 font-medium bg-stone-100"
                      : "text-charcoal-700 hover:text-charcoal-900 hover:bg-stone-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-2">
            <Link
              href={siteConfig.ctas.investorBrief.href}
              onClick={() => setMobileOpen(false)}
              className="inline-flex justify-center rounded-md bg-copper-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
            >
              {siteConfig.ctas.investorBrief.label}
            </Link>
            <Link
              href={siteConfig.ctas.technicalBriefing.href}
              onClick={() => setMobileOpen(false)}
              className="inline-flex justify-center rounded-md border border-charcoal-700 px-4 py-2.5 text-sm font-medium text-charcoal-700 hover:bg-stone-100 transition-colors"
            >
              {siteConfig.ctas.technicalBriefing.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
