import { technicalDisclosures } from "@/content/site";
import { projectFacts, isPublishable } from "@/content/project-facts";

type DisclosureKey = "explorationTarget" | "historicalInformation" | "forwardLooking";

/**
 * JORC / NI 43-101 style disclosures. Composed per page so each carries only what
 * applies to the claims it actually makes.
 *
 * The Competent Person statement renders only once projectFacts.competentPerson is
 * unblocked — the site must not imply a named technical sign-off it does not have.
 */
export function TechnicalDisclosures({
  include,
  tone = "light",
}: {
  include: DisclosureKey[];
  tone?: "light" | "dark";
}) {
  const cp = projectFacts.competentPerson;
  const items = include.map((key) => technicalDisclosures[key]);

  const wrap =
    tone === "dark"
      ? "border-charcoal-800 bg-charcoal-900"
      : "border-stone-200 bg-stone-25";
  const heading = tone === "dark" ? "text-stone-300" : "text-charcoal-700";
  const body = tone === "dark" ? "text-charcoal-500" : "text-charcoal-500";

  return (
    <div className={`rounded-xl border ${wrap} p-6 md:p-8`}>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className={`text-xs font-semibold uppercase tracking-widest ${heading}`}>
              {item.title}
            </h3>
            <p className={`mt-2 text-xs leading-relaxed ${body}`}>{item.body}</p>
          </div>
        ))}
        {isPublishable(cp) && (
          <div>
            <h3 className={`text-xs font-semibold uppercase tracking-widest ${heading}`}>
              {technicalDisclosures.competentPerson.title}
            </h3>
            <p className={`mt-2 text-xs leading-relaxed ${body}`}>{cp.value}</p>
          </div>
        )}
      </div>
    </div>
  );
}
