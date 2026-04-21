import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Button, Card, SectionIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Serious inquiry pathways for investors, technical counterparts, and media.",
  openGraph: { images: ["/og-contact-placeholder.jpg"] },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-gap">
        <div className="container-shell"><h1 className="text-4xl font-semibold">Contact</h1><p className="mt-4 max-w-3xl text-charcoal-700">Structured inquiry pathways for investors, strategic partners, technical diligence participants, and media.</p></div>
      </section>
      <section className="pb-14">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionIntro title="Inquiry Type" description="Select the most relevant pathway." />
            <div className="space-y-2 text-sm">
              <p>• Investor / Strategic Partner Inquiry</p>
              <p>• Technical / Project Inquiry</p>
              <p>• Media / General Inquiry</p>
            </div>
            <form className="mt-6 space-y-3">
              <input className="w-full rounded-md border border-stone-300 px-3 py-2" placeholder="Name" />
              <input className="w-full rounded-md border border-stone-300 px-3 py-2" placeholder="Organization" />
              <input className="w-full rounded-md border border-stone-300 px-3 py-2" placeholder="Email" type="email" />
              <select className="w-full rounded-md border border-stone-300 px-3 py-2"><option>Investor / Strategic Partner Inquiry</option><option>Technical / Project Inquiry</option><option>Media / General Inquiry</option></select>
              <textarea className="w-full rounded-md border border-stone-300 px-3 py-2" rows={5} placeholder="Please describe your request" />
              <button type="button" className="rounded-md bg-copper-500 px-4 py-2 text-white">Submit Inquiry</button>
            </form>
          </Card>
          <Card>
            <SectionIntro title="Direct Contact" />
            <p className="text-sm text-charcoal-700">Email: {siteConfig.contact.email}</p>
            <p className="text-sm text-charcoal-700">Phone: {siteConfig.contact.phone}</p>
            <p className="text-sm text-charcoal-700">Location: {siteConfig.contact.location}</p>
            <div className="mt-6 flex gap-3"><Button href="/contact?inquiry=investor">Request Investor Brief</Button><Button href="/contact?inquiry=technical" secondary>Schedule Technical Briefing</Button></div>
            <p className="mt-8 text-xs text-charcoal-700">{siteConfig.legal}</p>
          </Card>
        </div>
      </section>
    </>
  );
}
