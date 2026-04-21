# Kafwego Investor Website Blueprint

## 1) Concise Implementation Plan
1. Establish App Router shell with institutional navigation, sticky header, premium palette, and legalized footer.
2. Implement structured content model under `/content` so core copy remains editable outside JSX.
3. Build reusable section components (hero blocks, fact grids, icon cards, timeline, team cards, CTA bands, map placeholders, legal blocks).
4. Deliver seven required pages with disciplined information hierarchy and cautious exploration-stage language.
5. Implement News system with MDX-backed posts, featured story support, category tags, and article template.
6. Configure page-level metadata and Open Graph placeholders for SEO readiness.

## 2) Site Map
- Home (`/`)
- Project (`/project`)
- Investment Case (`/investment-case`)
- Team (`/team`)
- Responsible Development (`/responsible-development`)
- News / Updates (`/news`)
  - Article template (`/news/[slug]`)
- Contact (`/contact`)

## 3) Page Wireframes (Text)

### Home
- Hero + fast facts + dual CTAs
- Why Kafwego cards
- Project snapshot split layout (map + summary)
- Investment case preview cards
- Value pathway timeline
- Responsible development preview
- Team preview
- Final CTA band

### Project
- Hero
- Quick facts band
- Project overview
- Location and regional context map block
- Geological setting card set
- Surface indicators + cautious technical qualifier
- Comparable context + infrastructure logic
- Next work program
- CTA band

### Investment Case
- Hero
- Salient feature cards
- Why Copper / Why Zambia / Why Kafwego / Why This Structure
- Value inflection cards
- Diligence pathway sequence
- CTA band

### Team
- Hero
- Leadership card grid
- Technical credibility block
- Operating approach block
- CTA band

### Responsible Development
- Hero
- Operational approach intro
- Four pillar cards
- CTA band

### News / Updates
- Intro
- Featured article block
- Categorized update card grid
- Article template for single post rendering

### Contact
- Hero
- Inquiry type section
- Contact form
- Direct contact card
- legal disclaimer

## 4) Reusable Component Inventory
- `Header`
- `Footer`
- `CTASection`
- `SectionIntro`
- `Button`
- `Card`
- `FactsGrid`
- `IconCards`
- `Timeline`
- `TeamCards`
- `PlaceholderAsset`

## 5) Complete Draft Copy
All draft copy is implemented as structured maintainable content in:
- `content/site.ts`
- `content/pages/home.ts`
- `content/pages/project.ts`
- `content/pages/investment-case.ts`
- `content/pages/team.ts`
- `content/pages/responsible-development.ts`
- `content/posts/*.mdx`

## 6) Placeholder Guidance
Implemented placeholders clearly label required asset slots:
- Hero terrain/geological visual
- Zambia project location map
- Geological interpretation map
- Surface geochemistry figure insertion point (Project page technical block)
- Team photos (per profile)
- Investor brief PDF placeholder (News article + contact CTA)
- Additional technical/field diagrams in project modules
