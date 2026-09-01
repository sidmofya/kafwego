# Kafwego website — architecture

The site is a public-facing exploration investment memo. Its single commercial
objective is to cause a qualified investor or strategic partner to request the
technical package and begin a diligence conversation.

It is deliberately **not** a mining promotion site. The organising spine is:

> Observation → Interpretation → Test → Decision

## Governing rule

No fact appears publicly unless it passes two independent filters, both enforced in
`content/project-facts.ts`:

| | Verified | Unverified |
|---|---|---|
| **Non-sensitive** | Publish | Omit until sourced |
| **Sensitive** | Package only | Omit; package-only once sourced |

`renderFacts()` filters on both `status` and `sensitivity`, so a fact marked
`package` cannot reach a public render path even after someone fills in its value.
In development it warns to console when a withheld fact is requested.

Source of truth is `Kafwego_Project_Development__v1.pdf`. Every verified fact carries
a `source` string citing its deck page.

## Routes

| Route | Purpose |
|---|---|
| `/` | The three-minute investor memo. Hero → evidence → exploration case → what remains unproven → targets → regional context → next inflection → work completed → tenure → disclosures → CTA |
| `/project` | Seven numbered sections: at a glance, location, geological hypothesis, history, work completed, current position, tenure |
| `/targets` | Recreated target map, five target cards, evidence matrix, selection criteria |
| `/exploration-program` | Three stage-gated stages and the technical decision gate |
| `/investment-case` | Six diligence reasons, partnership pathways, diligence process |
| `/responsible-development` | Work actually underway, separated from stated principles |
| `/lufilianarc` | Regional geology briefing. Carries a prominent "regional context, not deposit analogue" qualifier |
| `/contact` | The single conversion point — technical package request form |
| `/legal` | Full disclosure set |
| `/team` | Hidden while `teamPageContent.leaders` is empty — excluded from nav, sitemap and indexing |

## Conversion

One CTA sitewide: **Request Technical Package**. Secondary, where appropriate:
**Contact the Project Team**. No competing calls to action.

## Components

Maps are recreated as inline SVG in the site palette, captioned as schematic and
redrawn from project technical material. No coordinates are published.

- `TargetMap` — licence boundary, five target ellipses, drainage, north arrow, scale bar
- `RegionalContextMap` — Kafwego within the Greater Lufilian Arc, with established operations
- `EvidenceStrip`, `OpenQuestionSection`, `ProgressionFlow`, `StageGateDiagram`
- `ProjectFactGrid`, `ProjectTimeline`, `WorkCompletedList`
- `TechnicalDisclosures` — composed per page, so each carries only what applies
- `TechnicalPackageForm` — Netlify Forms, success only on a verified 2xx

There is deliberately no `PlaceholderAsset` component. It was removed so that a
visible placeholder cannot be reintroduced.

## Disclosure posture

Kafwego is private and not a reporting issuer, so JORC / NI 43-101 do not legally bind
it. They are followed voluntarily: the project's own technical material invokes
NI 43-101, the audience evaluates projects against these codes, and statements made
now would be re-read on any future listing. See `technicalDisclosures` in
`content/site.ts`. All wording is marked `LEGAL_REVIEW_REQUIRED`.

## Open blockers

See `docs/investor-readiness-blockers.md`.
