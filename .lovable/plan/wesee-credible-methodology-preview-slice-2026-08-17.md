# WeSee — Credible Methodology-Preview Slice

Goal: turn the current demo into a **launch-safe methodology preview you can share** — one real, fully-sourced company proving the engine works on real data, the legal/trust layer, and one UX polish pass.

## A. One real, fully-sourced company (proves the engine on real data)

Pick one large U.S. public company whose key figures are **mandated public disclosures** (low legal risk, high credibility):
- **CEO Pay Ratio** — required SEC DEF 14A disclosure (a filed number, not an opinion).
- **Lobbying spend** — public via OpenSecrets / Senate LDA filings.
- **WARN layoffs** — public state/DOL notices.
- Revenue / employees / sector — public 10-K facts.

Work:
1. Research and record the **real filed numbers** for that company for the factors above, with exact source: document, year, section, page, retrieved date.
2. Insert the real company into `companies` (distinct from the 25 fictional ones), with real factor inputs in `pillar_notes.evidence` and real `lastVerified` dates.
3. Wire it through the existing chain: `exampleEvidence` → `plainRead` → `directSourceLink`, and verify each deep link resolves to the actual filing (EDGAR browse, OpenSecrets profile, WARN search).
4. Label it clearly **"Real sourced data"** on its page (vs the fictional companies' amber demo banner), and add a per-company flag so the banner only shows for fictional entities.
5. Walk through the headline-score chain on that page end-to-end and flag any dead link.

Note on risk: CEO pay ratio, lobbying totals, and WARN counts are filed/public facts — stating them with a citation is factual commentary, not defamation. Scores remain WeSee's labeled analytical opinion. The /terms page (Part B) reinforces this.

## B. Launch-safe legal & trust layer

New routes (footer-linked on every page):
- **`/privacy`** — what we collect (email via Supabase auth; corrections-submitter email if provided), what we don't, retention, how to request deletion.
- **`/terms`** — this is analytical/opinion content about public information, **not investment advice**; scores are WeSee's opinion; how to report a factual error (links to corrections).

Corrections process:
- **`/companies/$slug`**: "Report an error" link → a form (company name prefilled, pillar/factor select, description, optional email).
- Submits to a new `corrections` table. Migration: `CREATE TABLE` + `GRANT INSERT TO anon` (so unauthenticated visitors can report) + `GRANT SELECT TO authenticated`/`service_role` only + RLS (anon can only insert; reads scoped to admins via `has_role`).
- **Admin dashboard**: read-only "Corrections" section listing reports.

Non-endorsement disclaimer on every company page, near the score, with the company name pulled dynamically:
> "This score reflects WeSee's independent analysis based on public filings and disclosures. It is not endorsed by or affiliated with {Company}."

Footer: add Privacy, Terms, and a "Report an error" entry.

## C. One UX win (feel more Bloomberg + Apple)

A focused animation/polish pass — not a redesign:
- Animated score rings (count-up + stroke draw on mount).
- Staggered entrance for company cards and pillar rows.
- Smooth, height-animated accordion transitions for "Why this score" / Advanced sections.
- Refined hover states on cards and source buttons.

Keep it transform/opacity-only for performance; respect `prefers-reduced-motion`.

## D. Verify & hand off

- Confirm `/companies` row count matches the DB (fictional + the one real company).
- End-to-end citation-chain walkthrough on the real company page; list any non-resolving deep link.
- Confirm footer links and disclaimers render on every page.

## Out of scope this pass

- Backfilling more than one real company.
- Removing `noindex` / sitemap / Search Console (stays off until a meaningful real-data set exists, per your SEO rule).
- `/status` monitoring page and stale-citation admin view (deferred — they matter more once real-data volume grows).

## Deliverables

New: `src/routes/privacy.tsx`, `src/routes/terms.tsx`, corrections table migration, corrections form component.
Edited: `src/routes/companies_.$slug.tsx` (disclaimer + report-error link + real-data label + animations), `src/components/company-card.tsx` (entrance anim), `src/components/score-ring.tsx` (count-up), `src/components/site-footer.tsx` (legal links), `src/routes/admin.tsx` (corrections view), `src/lib/methodology/examples.ts` or a new real-evidence module.
