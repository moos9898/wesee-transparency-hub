# WeSee — Scoring Methodology in Detail

All pillars are oriented the same way: **higher = better contribution to the U.S.**
Exposure-style pillars (outsourcing, production abroad, lobbying, CEO pay ratio, layoffs
during high profits) store the *inverse* in the database, so the composite is a plain
weighted average.

## 1. The index

```text
Overall = Σ (pillar_score × pillar_weight)          // 9 pillars, weights sum to 1.00
```

Source of truth: `src/lib/score.ts` → `PILLARS`, `calculateOverall()`.

| # | Pillar | Key | Weight | Inverse |
| --- | --- | --- | --- | --- |
| 1 | Worker Standards | `worker_standards` | 16% | no |
| 2 | U.S. Workforce Commitment | `us_workforce_commitment` | 14% | no |
| 3 | Local Economic Contribution | `local_economic` | 14% | no |
| 4 | Layoffs During High Profits | `layoffs_high_profits` | 12% | yes |
| 5 | CEO-to-Worker Pay Ratio | `ceo_pay_ratio` | 10% | yes |
| 6 | Outsourcing Exposure | `outsourcing_exposure` | 10% | yes |
| 7 | Community Resilience | `community_resilience` | 9% | no |
| 8 | Production Abroad | `production_abroad` | 8% | yes |
| 9 | Lobbying Activity | `lobbying_activity` | 7% | yes |

`overall_score` is a **generated column** in the database using the same weights, so the
API and the UI can never drift.

## 2. Bands

`scoreBand()` / `scoreGrade()` in `src/lib/score.ts`:

| Range | Band | Full label |
| --- | --- | --- |
| 85–100 | Strong | Strong Community Impact |
| 70–84 | Positive | Positive Contribution |
| 50–69 | Mixed | Mixed Signals |
| 30–49 | Weak | Weak Contribution |
| 0–29 | Harmful | Harmful to Local Economy |

Colors come from `scoreColor()` as OKLCH tokens, never hardcoded Tailwind color classes.

Benchmarked factor tiers (`src/lib/benchmarks.ts` → `BENCHMARK_TIERS`) are a separate,
percentile-flavored scale used on factor cards: **Exceptional / Strong / Moderate / Weak /
Harmful**.

## 3. Factors (26 total)

Defined in `src/lib/methodology/registry.ts`. Each factor carries: `key`, `pillarKey`,
`slug`, `title`, `weight` (share of its pillar, sums to 1.00), a structured `equation` AST,
`variables[]` (label, unit, `sourceId`, `documentHint`), `normalization` rules,
`confidence` + rationale, and an `auditTrail` chain.

| Pillar | Factors (weight within pillar) |
| --- | --- |
| Worker Standards | Living Wage 40, Benefits 20, Workplace Safety 20, Employee Retention 20 |
| U.S. Workforce Commitment | Full-Time Employment 35, Domestic Hiring 25, Training Investment 20, Contractor Dependence 20 |
| Local Economic Contribution | Domestic Investment 35, Domestic Suppliers 25, U.S. R&D 25, Taxes 15 |
| Layoffs During High Profits | Layoff Severity 45, Profitability 30, Buybacks 25 |
| CEO-to-Worker Pay Ratio | CEO Compensation, Median Worker Compensation |
| Outsourcing Exposure | Offshore Workforce, Outsourced Services |
| Community Resilience | Local Investment, Community Programs |
| Production Abroad | Domestic Production, Imported Goods |
| Lobbying Activity | Lobbying Spend, Political Contributions |

### Deriving factor scores

`src/lib/methodology/derive.ts` → `deriveFactorScores(pillarKey, pillarScore, seedKey)`
spreads a pillar score across its factors deterministically (seeded by company slug) so
that the weighted mean of the factor scores **reconstructs the headline pillar score**.
This guarantees the worked calculation shown to users always adds up.

## 4. Specialty models

### Layoff calibration — `src/lib/layoff.ts`

Implements the Scale-Responsibility Principle:

- `scalePenalty` — log-scaled on **absolute** positions affected, adjusted for employer size.
- `profitablePenalty` — extra penalty when layoffs coincide with high profits/buybacks.
- `repetitionPenalty` — escalating penalty for repeated restructuring cycles.
- `stewardshipCredit` — small credit for retraining / redeployment commitments.

The company page shows a "Scale-calibrated layoff severity" panel with raw vs. calibrated
score and each penalty applied.

### Workforce Reinvestment Capacity — `src/lib/reinvestment.ts`

Informational only (plus the ≤ +10 recognition bonus). Computes profit margin, revenue per
employee, buyback intensity, an `affordabilityScore`, and `buybackContext` (flagging when
shareholder returns conflict with workforce reinvestment).
`inferMetroPressure(headquarters)` returns **Elevated / Moderate / Low** high-cost-metro
pressure and dampens affordability so 90+ is rare.

### Industry materiality — `src/lib/materiality.ts`

Tags each pillar per industry as *Highly material* … *Limited relevance* and renders a
badge, so users understand when a pillar barely applies to that business model.

## 5. Source hierarchy — `src/lib/sources.ts`

| Tier | Meaning | Examples |
| --- | --- | --- |
| Tier 1 | Official / mandatory disclosure | SEC EDGAR (10-K, DEF 14A), BLS, OSHA, Census, USITC, Senate LDA, FEC, WARN |
| Tier 2 | Reputable secondary datasets | Good Jobs First Subsidy Tracker, MIT Living Wage |
| Tier 3 | Disallowed | blogs, unsourced aggregators, press releases used as fact |

Rules: most recent mandatory disclosure wins; company-reported figures are used unchanged;
when no disclosure exists, the closest official dataset for the same period and geography is
used **and confidence is lowered**.

## 6. Verification path

`src/lib/methodology/deep-links.ts` → `directSourceLink(sourceId, ctx, {document, page})`
builds a company-scoped URL per source: EDGAR full-text/company search by ticker or name and
form type, OSHA establishment search, BLS OES by metro, Census, USITC DataWeb, MIT Living
Wage, OpenSecrets, Senate LDA, FEC receipts, Subsidy Tracker, DOL WARN.

`src/lib/methodology/plain.ts` → `plainRead(factor, evidence, score, companyName)` converts
that evidence into: `what` (one line), `why[]` (real numbers substituted), `flow[]`
(before → after nodes with deltas and tone), and `conclusion`.

`src/lib/methodology/examples.ts` → `exampleEvidence(factor, seedKey)` produces the
deterministic illustrative inputs (value, unit, document, section, page, retrievedAt,
filingYear) plus `steps` and `normalizedScore`, and flags `illustrative: true` where filing
ingestion is still pending. That flag is surfaced to the user, never hidden.
