/**
 * Kafwego project facts — the single gate between source material and rendered copy.
 *
 * Every public claim on this website must resolve to a fact in this file. A fact
 * reaches the public site only if it passes BOTH filters:
 *
 *   status      — is it traceable to approved source material?
 *   sensitivity — does it belong in the public domain at all?
 *
 * The second filter is independent of the first. Some facts are fully verified and
 * still must not be published: individual assay values, licence identifiers,
 * ownership percentages and stage budgets belong in the technical package, which is
 * what the site asks visitors to request. Gating them is the conversion mechanism,
 * not an obstacle to it.
 *
 * Source: Kafwego_Project_Development__v1.pdf ("the deck"), 14 content pages.
 * Page citations below refer to that document.
 */

export type FactStatus = "verified" | "needs-verification" | "blocker";

/**
 * "public"  — may render on the website once verified.
 * "package" — never renders publicly, whatever its status. Technical package only.
 */
export type FactSensitivity = "public" | "package";

export type ProjectFact<T> = {
  value: T | null;
  status: FactStatus;
  sensitivity: FactSensitivity;
  /** Where this came from. Required for anything marked verified. */
  source?: string;
  note?: string;
};

export type NearbyOperation = {
  name: string;
  operator: string;
  distance: string;
  significance: string;
};

export const projectFacts = {
  // ── Verified, public ──────────────────────────────────────────────────────
  country: {
    value: "Zambia",
    status: "verified",
    sensitivity: "public",
    source: "Deck p3 — Project Information",
  } as ProjectFact<string>,

  region: {
    value: "Northwestern Zambia",
    status: "verified",
    sensitivity: "public",
    source: "Deck p3 — Project Information",
  } as ProjectFact<string>,

  geologicalProvince: {
    value: "Greater Lufilian Arc",
    status: "verified",
    sensitivity: "public",
    source: "Deck p3 — Project Information",
  } as ProjectFact<string>,

  depositStyle: {
    value: "Iron Oxide Copper-Gold (IOCG)",
    status: "verified",
    sensitivity: "public",
    source: "Deck p3 — Project Information",
    note: "An exploration model under test, not a demonstrated deposit style.",
  } as ProjectFact<string>,

  commodities: {
    value: "Copper · Gold · Silver",
    status: "verified",
    sensitivity: "public",
    source: "Deck p3 — Project Information",
  } as ProjectFact<string>,

  projectStage: {
    value: "Exploration",
    status: "verified",
    sensitivity: "public",
    source: "Deck p8, p10 — untested at depth; drilling is the key next step",
    note: 'The deck states "Drill Ready". Not adopted: the deck\'s own status table (p10) shows environmental approvals, funding and mobilisation all outstanding.',
  } as ProjectFact<string>,

  priorityTargets: {
    value: 5,
    status: "verified",
    sensitivity: "public",
    source: "Deck p9 — Priority Target Areas",
  } as ProjectFact<number>,

  initialRCProgramMetres: {
    value: 750,
    status: "verified",
    sensitivity: "public",
    source: "Deck p11 — Stage 2, 750 m RC Proof of Concept",
  } as ProjectFact<number>,

  followUpRCProgramMetres: {
    value: 5250,
    status: "verified",
    sensitivity: "public",
    source: "Deck p11 — Stage 3 (1,500 m + 3,750 m)",
    note: "Conditional on Stage 2 results. Never present as scheduled.",
  } as ProjectFact<number>,

  independentReview: {
    value: "NI 43-101 technical report completed by Scarab Enterprises for Harmony Gold (2011)",
    status: "verified",
    sensitivity: "public",
    source: "Deck p6 — Historical Exploration",
  } as ProjectFact<string>,

  geologicalReview: {
    value: "Detailed geological review and field investigation by Ripley Resources (2013–2014)",
    status: "verified",
    sensitivity: "public",
    source: "Deck p6 — Historical Exploration",
  } as ProjectFact<string>,

  nearbyOperations: {
    value: [
      {
        name: "Kansanshi",
        operator: "First Quantum Minerals",
        distance: "~85 km NE",
        significance: "One of Africa's largest copper mines",
      },
      {
        name: "Sentinel",
        operator: "First Quantum Minerals",
        distance: "~70 km E",
        significance: "Large open-pit copper operation",
      },
      {
        name: "Lumwana",
        operator: "Barrick Mining Corporation",
        distance: "~75 km S",
        significance: "Major copper mine in northwestern Zambia",
      },
    ],
    status: "verified",
    sensitivity: "public",
    source: "Deck p4 — Nearby Major Mining Operations",
    note: "Jurisdictional and geological context only. Never presented as evidence of mineralisation at Kafwego.",
  } as ProjectFact<NearbyOperation[]>,

  // ── Historical, package-only ──────────────────────────────────────────────
  historicalLicence: {
    value: "Small-scale Mining Licence 8058-HQ-SML granted to Montauk Mining & Minerals Ltd (2009)",
    status: "needs-verification",
    sensitivity: "package",
    source: "Deck p6 — Historical Exploration",
    note: "Superseded: p6 and p7 both record subsequent licence expansion. The fact of a 2009 small-scale licence may appear in the history narrative; the identifier and holder may not appear publicly.",
  } as ProjectFact<string>,

  // ── Blockers: public-appropriate, awaiting confirmation ───────────────────
  licenceType: {
    value: null,
    status: "blocker",
    sensitivity: "public",
    note: "Confirm current licence class against legal title. The 2009 SML is superseded.",
  } as ProjectFact<string>,

  licenceAreaKm2: {
    value: null,
    status: "blocker",
    sensitivity: "public",
    note: "No area appears anywhere in the deck. The site's previous '108 km²' figure is unsourced and has been removed.",
  } as ProjectFact<number>,

  licenceGrantDate: {
    value: null,
    status: "blocker",
    sensitivity: "public",
  } as ProjectFact<string>,

  licenceExpiry: {
    value: null,
    status: "blocker",
    sensitivity: "public",
  } as ProjectFact<string>,

  licenceStanding: {
    value: null,
    status: "blocker",
    sensitivity: "public",
    note: "Confirm the licence is current and in good standing.",
  } as ProjectFact<string>,

  environmentalStatus: {
    value: null,
    status: "blocker",
    sensitivity: "public",
    note: 'Deck p10 states only "In Progress". Confirm the current permitting position before publishing specifics.',
  } as ProjectFact<string>,

  competentPerson: {
    value: null,
    status: "blocker",
    sensitivity: "public",
    note: "Name and professional credentials of the Competent Person responsible for the technical content of this website.",
  } as ProjectFact<string>,

  contactPhone: {
    value: null,
    status: "blocker",
    sensitivity: "public",
    note: "The previous '+260 000 000 000' was a placeholder and has been removed.",
  } as ProjectFact<string>,

  // ── Package-only: never renders publicly, whatever the status ─────────────
  licenceNumber: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "Technical package only.",
  } as ProjectFact<string>,

  licenceHolder: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "Technical package only.",
  } as ProjectFact<string>,

  projectInterest: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "Ownership / economic interest. Technical package only.",
  } as ProjectFact<string>,

  currentFundingAskUSD: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "Deck p12 lists US$0.50M exploration validation and US$0.45M for the 750 m programme as forward spend, while p10 marks several Stage 1 activities complete. Unreconcilable from the deck alone. Technical package only.",
  } as ProjectFact<string>,

  headlineCopperAssay: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "The site's previous '1.93% Cu' appears nowhere in the deck. Requires report, sample IDs, sample type, count, laboratory, method, QA/QC and selective-vs-systematic context — and even then belongs in the package, not as a headline metric.",
  } as ProjectFact<string>,

  headlineGoldAssay: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "The site's previous '1.20 g/t Au' appears nowhere in the deck. Same requirements as the copper assay.",
  } as ProjectFact<string>,

  headlineSilverAssay: {
    value: null,
    status: "blocker",
    sensitivity: "package",
    note: "Silver mineralisation is confirmed at surface (deck p8) but no value is stated.",
  } as ProjectFact<string>,
} as const;

export type ProjectFactKey = keyof typeof projectFacts;

/** True only when a fact is both verified and cleared for the public domain. */
export function isPublishable<T>(
  fact: ProjectFact<T>,
): fact is ProjectFact<T> & { value: T } {
  return fact.status === "verified" && fact.sensitivity === "public" && fact.value !== null;
}

/** Returns the value if publishable, otherwise null. Never throws. */
export function publicValue<T>(fact: ProjectFact<T>): T | null {
  return isPublishable(fact) ? fact.value : null;
}

export type LabelledFact = { label: string; fact: ProjectFact<string | number> };

/**
 * Filters a label/fact list down to publishable entries, so fact grids shrink
 * rather than rendering blanks. Warns in development if a blocked or sensitive
 * fact reaches a render path.
 */
export function renderFacts(
  entries: LabelledFact[],
): { label: string; value: string }[] {
  return entries.reduce<{ label: string; value: string }[]>((acc, { label, fact }) => {
    if (isPublishable(fact)) {
      acc.push({ label, value: String(fact.value) });
    } else if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[project-facts] "${label}" withheld from public render ` +
          `(status: ${fact.status}, sensitivity: ${fact.sensitivity}).` +
          (fact.note ? ` ${fact.note}` : ""),
      );
    }
    return acc;
  }, []);
}
