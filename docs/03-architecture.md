# WeSee — Architecture & Code Walkthrough

## Stack

- **TanStack Start v1** (React 19, SSR, file-based routing) on **Vite 7**, deployed to a
  Cloudflare Worker runtime (`src/server.ts`, `wrangler.jsonc`, `nodejs_compat`).
- **Tailwind CSS v4** via `src/styles.css` (`@theme` tokens, no `tailwind.config.js`).
- **shadcn/ui** primitives in `src/components/ui/*`.
- **TanStack Query** for reads; **Lovable Cloud (Supabase)** for database + auth.
- Server-side logic uses `createServerFn` from `@tanstack/react-start`; no edge functions.

## Backend schema

| Table | Purpose |
| --- | --- |
| `companies` | one row per company: identity (`slug`, `name`, `ticker`, `industry`, `sector`, `headquarters`, `employees`, `founded`, `ceo`, `website`, `logo_url`, `description`) + the 9 pillar columns + `pillar_notes` JSONB + generated `overall_score` |
| `methodology_pages` | editable long-form methodology content |
| `user_roles` | `(user_id, role)` with enum `app_role = 'admin' \| 'user'` |

`public.has_role(_user_id, _role)` is a `SECURITY DEFINER` SQL function used inside RLS
policies so admin checks never recurse. Roles are **never** stored on a profile row. Every
public table has explicit `GRANT`s plus RLS: public `SELECT` on `companies` /
`methodology_pages`, writes restricted to `has_role(auth.uid(), 'admin')`.

Client: `import { supabase } from "@/integrations/supabase/client"` (auto-generated, never
edited). Auth helpers in `src/lib/auth.ts`; bearer attachment in `src/start.ts`.

## Route map (`src/routes/`)

| File | URL | Role |
| --- | --- | --- |
| `__root.tsx` | — | shell: `<head>` defaults, nav, footer, sonner toaster, `<Outlet />` |
| `index.tsx` | `/` | hero, index explainer, stats, featured companies |
| `companies.tsx` | `/companies` | searchable + sortable database list of company cards |
| `companies_.$slug.tsx` | `/companies/:slug` | company profile (827 lines — the core page) |
| `companies_.$slug_.sources.$pillar.$factor.tsx` | `/companies/:slug/sources/:pillar/:factor` | permanent evidence record per company + factor |
| `methodology.tsx` | `/methodology` | pass-through layout, renders only `<Outlet />` |
| `methodology.index.tsx` | `/methodology` | pillar grid, each card links into its pillar |
| `methodology.$slug.tsx` | `/methodology/:pillar` | pillar methodology: weight, factors, equation, sources |
| `methodology.$pillar.$factor.tsx` | `/methodology/:pillar/:factor` | full factor page (plain-first, Advanced block) |
| `methodology.framework.tsx` | `/methodology/framework` | tiers, confidence levels, scale-responsibility |
| `methodology.source-hierarchy.tsx` | `/methodology/source-hierarchy` | Tier 1/2/3 rules |
| `methodology.overall-score.tsx` | `/methodology/overall-score` | how the composite is formed |
| `about.tsx`, `auth.tsx`, `admin.tsx` | `/about`, `/auth`, `/admin` | mission, email+password auth, analyst dashboard |

The trailing-underscore filenames (`companies_.$slug.tsx`) escape layout nesting so the
company profile does not inherit the `/companies` list layout. `methodology.tsx` must return
only `<Outlet />` — an earlier bug where it rendered index content blocked every child route.

## Library layer (`src/lib/`)

| File | Responsibility |
| --- | --- |
| `score.ts` | `PILLARS`, `calculateOverall`, `scoreBand`, `scoreGrade`, `scoreColor`, `PILLAR_SIGNALS`, `pillarRationale` |
| `benchmarks.ts` | sub-indicators per pillar, `BENCHMARK_TIERS`, `deriveSubScores` |
| `layoff.ts` | scale-calibrated layoff model (see methodology doc) |
| `reinvestment.ts` | capacity metrics, metro pressure, buyback context, recognition bonus |
| `materiality.ts` | per-industry pillar relevance badges |
| `sources.ts` | source registry + `TIERS` metadata |
| `methodology-content.ts` | `PILLAR_INDEX` narrative content per pillar |
| `methodology/registry.ts` | **single source of truth** for 26 factors: equation AST, variables, normalization, audit trail; helpers `factorsByPillar`, `findFactor`, `pillarSlugFromKey`, `pillarKeyFromSlug`, `source` |
| `methodology/derive.ts` | pillar score → factor scores that re-aggregate exactly |
| `methodology/examples.ts` | deterministic evidence inputs + steps + `illustrative` flag |
| `methodology/plain.ts` | `plainRead()` → `{ what, why[], flow[], conclusion, score }`, `fmtValue` |
| `methodology/deep-links.ts` | `directSourceLink()` per-source, company-scoped verification URLs |
| `error-capture.ts`, `error-page.ts` | runtime error capture and error boundary content |

## Component layer

- `components/score-ring.tsx` — overall score dial with band label (no letter grades).
- `components/score-bar.tsx` — thin animated pillar bar, color from `scoreColor`.
- `components/company-card.tsx` — list card: ring, band, industry, top pillar signals.
- `components/site-nav.tsx`, `site-footer.tsx` — chrome.
- `components/methodology/factor-ui.tsx` — technical primitives: `EquationBlock` (renders the
  equation AST), `VariableTable`, `StepCalculation`, `NormalizationTable`, `ConfidenceBadge`,
  `AuditTrail`.
- `components/methodology/plain-ui.tsx` — plain-language primitives: `PlainWhy`,
  `CalculationFlow` (before → after nodes with arrows and deltas), `SourceCard` (value +
  source/document/section/page/retrieved/confidence + external link + evidence-page link),
  `EvidenceCards`, `Advanced` (`<details>` disclosure).
- `components/methodology/pillar-calculation.tsx` — the assembly point: pillar summary
  ("what makes up this score", weights, weighted total), one `FactorCard` per factor
  (score, tier badge, progress bar, calculation flow, plain why, evidence cards, Advanced
  block, links to the evidence record and the methodology page), then the pillar-level
  weighted equation under Advanced.

## Data flow, end to end

```text
companies row (9 pillar scores, from DB / admin dashboard)
        │
        ├─ calculateOverall()            → hero ring, band, ranking, comparisons
        │
        └─ per pillar: deriveFactorScores(pillarKey, pillarScore, slug)
                 │
                 ├─ exampleEvidence(factor, slug)   → raw inputs + steps + citations
                 │        │
                 │        └─ plainRead(factor, evidence, score, name)
                 │                 → what / why[] / flow[] / conclusion
                 │
                 ├─ directSourceLink(sourceId, ctx) → one-click original filing
                 │
                 └─ UI: CalculationFlow → PlainWhy → EvidenceCards → Advanced
```

Rendering order on the company page: hero + ring → Quick Read (one-sentence read, two
strength chips, two concern chips) → nine pillar accordions each containing
`PillarCalculation` → Workforce Reinvestment Capacity gauges (advanced grid collapsed) →
industry comparison card (industry average, top-ranked, lowest-ranked peer, `#N of total`).

## Admin dashboard (`/admin`)

Email + password sign-in via `/auth`, gated on `has_role(uid,'admin')`. The form edits every
pillar column plus `pillar_notes`, and shows a **live weighted composite preview** using the
same `calculateOverall()` the public page uses.

## SEO

Every content route defines its own `head()` with a unique title (< 60 chars), description
(< 160 chars), `og:title`, `og:description`, `og:type`, `twitter:card`, and a canonical link.
The evidence route builds titles from the factor and company params. `og:image` is only ever
set on leaf routes, never on `__root`. Single `<h1>` per page, semantic sections, alt text on
imagery, lazy loading.

## Conventions to keep

1. Never hardcode color utilities — use the semantic tokens in `src/styles.css` and
   `scoreColor()`.
2. `src/routeTree.gen.ts` is generated; never edit it. `createFileRoute("...")` strings must
   match filenames (dots → slashes).
3. Files declaring `createServerFn` stay thin wrappers: imports, types, exported server
   functions only.
4. `src/integrations/supabase/*` generated files and `.env` are off-limits.
5. Any new factor is added **only** in `registry.ts` (plus its evidence case in
   `examples.ts`); every page picks it up automatically.
