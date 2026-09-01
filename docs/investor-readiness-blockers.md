# Kafwego website — investor-readiness blockers

Status as at the current build. **The site is not investor-ready while any item in
section A or C remains open.**

Two independent filters govern what appears on the public site:

| | Verified | Unverified |
|---|---|---|
| **Non-sensitive** | Publish | Blocker — omit until sourced |
| **Sensitive** | Package only | Blocker, *and* package-only once sourced |

Section B items are **not** website blockers. Confirming them does not change what
publishes — they belong in the technical package, and gating them is what gives the
"Request Technical Package" call to action something to gate.

Source of truth: `Kafwego_Project_Development__v1.pdf` (the technical deck, 14 content
pages). Facts and their provenance live in `content/project-facts.ts`.

---

## A. Blocking public site content

### A1 — Current licence type, area, grant date, expiry and standing
**Status:** Open.
**Why it matters:** Tenure is the first thing a strategic counterparty checks. A copper-gold
project with no disclosed licence position invites the assumption that something is wrong
with it.
**Where it would appear:** `/project` section 07 (Tenure), homepage tenure block. Both
currently render a holding statement instead of a fact grid.
**Evidence required:** Current licence certificate or cadastral extract. The deck names only
a 2009 Small-scale Mining Licence, and records on p6 and p7 that the licence was
subsequently expanded — so the 2009 position is demonstrably superseded.
**Note:** The site's previous `108 km²` figure appears **nowhere** in the deck and has been
removed as unsourced.

### A2 — Current environmental and permitting position
**Status:** Open.
**Why it matters:** The deck describes the project as "drill ready" while its own status
table marks environmental and regulatory progress as *In Progress*. The site does not use
"drill-ready" for this reason. Publishing a specific permitting position requires knowing it.
**Where it would appear:** `/project` (work completed), `/responsible-development`.
**Evidence required:** Current status of environmental approvals and any outstanding
regulatory conditions.

### A3 — Team names and biographies
**Status:** Open.
**Why it matters:** The previous site shipped three entries literally named
"Placeholder Name".
**Where it would appear:** `/team`, homepage team preview.
**Current handling:** `content/pages/team.ts` exports an empty `leaders` array. The route
renders a holding statement, is excluded from primary navigation, excluded from the sitemap,
and disallowed in `robots.ts`. All four unblock automatically once entries are added.
**Evidence required:** Three to five real people — name, role, and two or three lines
answering why this person is right for *this* stage of *this* project.

### A4 — Named Competent Person
**Status:** Open.
**Why it matters:** This is the most conspicuous absence. A technical mining website that
makes exploration claims with nobody named as responsible for them reads as unsigned. JORC
and NI 43-101 both turn on a named, qualified individual taking responsibility.
**Where it would appear:** `/legal`, and the `TechnicalDisclosures` block on every page
carrying technical claims.
**Current handling:** `projectFacts.competentPerson` is a blocker; the statement is replaced
by an explicit note that historical information has not been verified by a current
Competent Person.
**Evidence required:** Name, professional credentials and membership, plus written consent
to the inclusion of the technical information in the form in which it appears.

### A5 — Verified project email address
**Status:** Open.
**Why it matters:** `invest@kafwegoproject.com` is inherited from the previous site and has
not been confirmed to reach anyone. It is currently the form's failure-state fallback, so
if it does not resolve, a failed submission has nowhere to go.
**Where it would appear:** Footer, `/contact`, `/legal`, form error state.

### A6 — Counsel review of the disclosure set
**Status:** Open. Marked `LEGAL_REVIEW_REQUIRED` in `content/site.ts`.
**Why it matters:** The general disclaimer, exploration-target caution, historical-information
caution and forward-looking notice were drafted to industry convention, not as legal advice.
**Where it would appear:** `/legal`, footer, `TechnicalDisclosures` on every technical page.

---

## B. Technical package only — not website blockers

Confirming these does **not** change what publishes. They are marked
`sensitivity: "package"` in `content/project-facts.ts` and cannot reach a public render path
even if someone later fills in their value.

### B1 — Sampling context behind "1.93% Cu" and "1.20 g/t Au"
**Status:** Removed from the site.
**Finding:** Neither figure appears anywhere in the technical deck. No assay values, sample
counts, laboratories or methods appear in it at all. These were unsourced site inventions
presented as hero metrics.
**Required before they appear anywhere, including the package:** originating report, sample
IDs, sample type, sample date, number of samples, width where relevant, laboratory,
analytical method, QA/QC regime, and whether sampling was selective or systematic.
**Even once sourced:** a bare "up to" grade with no sampling context is the single most
criticised disclosure pattern in junior mining. These belong in a properly captioned table
in the package, not as a headline figure on the website.

### B2 — Licence number and registered holder
**Status:** Package only. The deck's historical reference (2009 SML, Montauk Mining &
Minerals Ltd) is retained in `project-facts.ts` marked `package`, and appears in the
`/project` history narrative only as the fact of a 2009 small-scale licence.

### B3 — Project economic interest / ownership
**Status:** Package only. The previous site described a four-phase farm-in with earn-in
milestones. No such structure is established by the deck; it has been deleted and replaced
with a partnership-pathways statement that quotes no terms.

### B4 — Current funding requirement
**Status:** Package only, and internally unresolved.
**Finding:** Deck p12 lists US$0.50M for exploration validation and US$0.45M for the 750 m
programme as *forward* spend, while p10 marks several Stage 1 activities (target generation,
RC drill programme design) as already complete. These cannot both be true as stated.
**Required:** confirmation of how much of the validation stage remains outstanding and
whether US$0.45M is still the ask. No figure is published until then.

---

## C. Operational

### C1 — Netlify form notification recipient and a live test submission
**Status:** Open. **This is the last functional blocker.**
**Why it matters:** The previous form called `preventDefault()` and set a success flag
without transmitting anything — every enquiry was silently discarded while the visitor was
told it had been received.
**What has been fixed in code:** the form now posts to Netlify Forms and sets the success
state only on a verified 2xx; failures surface an error with a direct contact fallback.
Honeypot, double-submission guard, required-field and email validation, and page/referrer
capture are all in place. All Netlify detection markers are confirmed present in the
exported HTML.
**What cannot be done from the repository:** the notification recipient is configured in the
Netlify UI, not in code, and a genuine end-to-end submission requires the deployed site.
**Required before launch:**
1. Set the form notification recipient in Netlify → Forms → Notifications.
2. Submit a real test enquiry against the deployed site.
3. Confirm it appears in the Netlify Forms dashboard **and** that the notification email
   arrives.

---

## Closed by the technical deck

| Item | Resolution |
|---|---|
| Target map source | Deck p9 — licence boundary, five target ellipses, scale bar, north arrow. Recreated in `components/target-map.tsx`. |
| Location / regional map source | Deck p3 and p4. Recreated in `components/regional-context-map.tsx`. |
| Target names | Deck p6 and p9. Note the correct spelling is **Chimamokwe** — earlier briefing material rendered it "Chimankwe". |
| Independent technical review attribution | Deck p6 — NI 43-101 by Scarab Enterprises for Harmony Gold, 2011. |
| 2013–14 geological review attribution | Deck p6 — Ripley Resources. |
| Nearby operations and distances | Deck p4 — Kansanshi ~85 km NE, Sentinel ~70 km E, Lumwana ~75 km S. |

## Deliberate departures from the deck's framing

The deck is a promotional document. Three things in it are not carried onto the site:

1. **"Drill Ready"** (p2, p3, p8, p10, p14) — contradicted by the deck's own status table on
   p10, which shows environmental approvals, funding and mobilisation all outstanding. The
   site says "the next major technical step".
2. **"define a maiden mineral resource"** (p8) — Stage 3 is presented as strictly conditional
   on Stage 2 results, never as a scheduled outcome.
3. **"world-class", "high-potential", "exceptional", "compelling", "significant exploration
   upside"** — removed throughout.
