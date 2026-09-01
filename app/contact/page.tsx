import type { Metadata } from "next";
import { TechnicalPackageForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Request Technical Package",
  description:
    "Request the Kafwego technical package or contact the project team to begin a technical diligence conversation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Diligence"
        title="Request the Kafwego Technical Package"
        subtitle="Qualified investors, strategic mining companies and potential project partners can request access to additional project materials, including technical summaries, target information and the proposed exploration programme."
      />

      <section className="section-gap bg-stone-25">
        <div className="container-shell grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <TechnicalPackageForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-stone-100 bg-white p-6 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                Direct contact
              </h2>
              <p className="mt-3 text-sm text-charcoal-600">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-copper-600 underline underline-offset-4 hover:text-copper-700"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-1.5 text-sm text-charcoal-500">{siteConfig.contact.location}</p>
            </div>

            <div className="rounded-xl border border-stone-100 bg-white p-6 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                What happens next
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                Requests are reviewed before materials are released. Following initial
                technical review, the next step is normally a technical discussion with
                the project team.
              </p>
            </div>

            <div className="rounded-xl border border-stone-200 bg-stone-100 p-6">
              <p className="text-xs leading-relaxed text-charcoal-500">{siteConfig.legal}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
