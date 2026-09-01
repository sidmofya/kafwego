import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { siteConfig, technicalDisclosures } from "@/content/site";
import { projectFacts, isPublishable } from "@/content/project-facts";

export const metadata: Metadata = {
  title: "Legal & Technical Disclosures",
  description:
    "Legal notice and technical disclosures for the Kafwego exploration project, including exploration target, historical information and forward-looking statement notices.",
};

export default function LegalPage() {
  const cp = projectFacts.competentPerson;

  const sections = [
    { title: "General notice", body: siteConfig.legal },
    technicalDisclosures.explorationTarget,
    technicalDisclosures.historicalInformation,
    technicalDisclosures.forwardLooking,
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Legal and technical disclosures"
        subtitle="Kafwego is a private exploration-stage project and is not a reporting issuer. The disclosures below follow JORC and NI 43-101 convention voluntarily, because the project's technical material invokes those standards and its intended audience evaluates projects against them."
      />

      <section className="section-gap bg-white">
        <div className="container-shell">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-copper-600">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-charcoal-600">{section.body}</p>
              </div>
            ))}

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-copper-600">
                {technicalDisclosures.competentPerson.title}
              </h2>
              <p className="mt-3 leading-relaxed text-charcoal-600">
                {isPublishable(cp)
                  ? cp.value
                  : "A Competent Person statement will be published once the responsible Competent Person and their professional credentials are confirmed. Until then, technical information on this website should be read as derived from historical exploration material that has not been verified by a current Competent Person."}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-copper-600">
                Contact
              </h2>
              <p className="mt-3 leading-relaxed text-charcoal-600">
                Questions regarding the content of this website may be directed to{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-copper-600 underline underline-offset-4 hover:text-copper-700"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
