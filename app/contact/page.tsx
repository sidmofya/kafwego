import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { PageHero, SectionIntro, Card } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { MapPinIcon, CompassIcon, MilestoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Structured inquiry pathways for investors, strategic partners, technical diligence participants, and media.",
  openGraph: { images: ["/og-contact-placeholder.jpg"] },
};

const inquiryPaths = [
  {
    icon: <CompassIcon className="w-5 h-5" />,
    type: "Investor / Strategic Partner",
    description:
      "For investors, family offices, mining executives, and strategic partners exploring a partnership or farm-in arrangement.",
  },
  {
    icon: <MilestoneIcon className="w-5 h-5" />,
    type: "Technical / Project",
    description:
      "For geologists, engineers, and technical counterparts wishing to discuss the exploration thesis, work program, or data.",
  },
  {
    icon: <MapPinIcon className="w-5 h-5" />,
    type: "Media / General",
    description:
      "For journalists, regulators, prospective partners, or general inquiries about the Kafwego Project.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        subtitle="Structured inquiry pathways for investors, strategic partners, technical diligence participants, and media. Select the most relevant pathway below."
      />

      {/* Inquiry path selector */}
      <section className="section-gap-sm bg-stone-25">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-3">
            {inquiryPaths.map((p) => (
              <Card key={p.type}>
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-copper-50 text-copper-500">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-charcoal-900">{p.type}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Direct contact */}
      <section className="section-gap bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Inquiry form"
              title="Send an inquiry"
              description="Complete the form below and a member of the team will respond within two business days."
            />
            <ContactForm />
          </div>

          {/* Direct contact sidebar */}
          <div className="space-y-5 lg:pt-16">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-4">
                Direct contact
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-charcoal-700 mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-charcoal-600 hover:text-charcoal-900 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-charcoal-700 mb-1">Phone</p>
                  <p className="text-charcoal-600">{siteConfig.contact.phone}</p>
                </div>
                <div>
                  <p className="font-medium text-charcoal-700 mb-1">Location</p>
                  <p className="text-charcoal-600 leading-snug">{siteConfig.contact.location}</p>
                </div>
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-widest text-copper-500 mb-4">
                Quick access
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={siteConfig.ctas.investorBrief.href}
                  className="inline-flex justify-center rounded-md bg-copper-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
                >
                  {siteConfig.ctas.investorBrief.label}
                </a>
                <a
                  href={siteConfig.ctas.technicalBriefing.href}
                  className="inline-flex justify-center rounded-md border border-charcoal-700 px-4 py-2.5 text-sm font-medium text-charcoal-700 hover:bg-stone-100 transition-colors"
                >
                  {siteConfig.ctas.technicalBriefing.label}
                </a>
              </div>
            </Card>

            <div className="rounded-xl border border-stone-100 bg-stone-50 p-5">
              <p className="text-xs leading-relaxed text-charcoal-400">
                {siteConfig.legal}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
