// NVIDIA (NVDA) — verbatim data from NVIDIA_COMPANY_CARD.md + FACTOR_MAP_NVIDIA.md
// (period fiscal 2026, ended January 25, 2026; updated 2026-10-20 under the final
// locked rules, Bundles A–D; H-1B printed line added 2026-10-22 under U.S. Workforce
// Rule v1.2). Data only — no number on this card is generated or estimated.
// Source links follow FINISH_LINK_SPEC_2026-11-06.md: every marker's text
// appears once in the matching links array with its exact source-page URL, taken
// ONLY from the card file, factor map, evidence pack, or load draft. Stats with no
// exact source page in those materials are left unmarked and listed in
// FINISH_DEFECTS_NVIDIA.md — never linked to a wrong or guessed page.

import type { CompanyCard, StepLine } from "./amazon";

const NVDA_10K =
  "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm";
const NVDA_DEF14A =
  "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000036/nvda-20260512.htm";
const NVDA_OPENSECRETS =
  "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000036303";
const NVDA_ORG_PROFILE =
  "https://www.opensecrets.org/orgs/nvidia-corp/summary?id=D000036303";
const GAO_PDF = "https://www.gao.gov/assets/890/888620.pdf";
const DOL_TAA = "https://www.dol.gov/agencies/eta/tradeact";

const s = (text: string, result?: string): StepLine => ({ text, result, kind: "step" });
const t = (text: string, result?: string): StepLine => ({ text, result, kind: "total" });
const c = (text: string): StepLine => ({ text, kind: "check" });
const n = (text: string): StepLine => ({ text, kind: "note" });

export const NVIDIA_CARD: CompanyCard = {
  overall: 58,
  band: "Mixed",
  coverage:
    "5 of 7 ready pillars scored (71%) — the coverage cap is 69; 58 is below it, so no cap binds. The two unscored harm-evidence pillars (Jobs Moved Abroad / Production Moved Abroad) are unfinished because WeSee's own search protocol for NVIDIA is incomplete — that counts against no one. NVIDIA does not report how many of its workers are in the U.S.; that pillar (U.S. Workforce Commitment) is not counted in any company's coverage (Class W). One pillar (Community Resilience) is not yet measurable for any company.",
  period:
    "Period scored: fiscal 2026 (ended January 25, 2026) · Updated 2026-10-20 under the final locked rules (Bundles A–D) · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      s("1. Worker Standards: 67 × weight 16", "1,072"),
      s("2. Local Economic Contribution: 38 × weight 14", "532"),
      s("3. Layoffs: 100 × weight 12", "1,200"),
      s("4. CEO Pay: 24 × weight 10", "240"),
      s("5. Lobbying: 50 × weight 7", "350"),
      t("= Add them up, divide by the total weight (59): 3,394 ÷ 59", "Overall 58 — Mixed"),
      c("✓ Coverage cap checked: 5 of 7 ready pillars are scored (71%), so the score may not pass 69 — 58 is below it, nothing changes."),
      c("✓ Layoff cap checked: the layoff pillar is 100 — not triggered."),
      c("✓ Equal weights give (67 + 38 + 100 + 24 + 50) ÷ 5 = 56 — Mixed. Published next to the score, as the Weights Defense requires."),
      n("(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2. U.S. Workforce Commitment counts in no company's coverage — Class W.)"),
    ],
  },
  pillars: {
    worker_standards: {
      score: 67,
      sentence:
        "Its typical worker earns [[$282,050]] a year — far above the cost of living ($49,246) and far above what the typical U.S. worker makes ($62,608). But the company earned about [[$2.86 million]] of profit per worker, and the typical worker's share of that split is only about 9 cents in the dollar — two of WeSee's three pay questions score perfectly, and the third scores zero.",
      sentenceLinks: [
        { text: "$282,050", url: NVDA_DEF14A },
        { text: "$2.86 million", url: NVDA_10K },
      ],
      footnote:
        "Pay figure note: NVIDIA does not publish a U.S. pay figure, so this is its worldwide median worker, exactly as filed — the same figure used on the CEO pay card below.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        { title: "QUESTION 1 — Can the worker live on the pay?", lines: [
          { text: "[[$282,050]] (typical worker's pay) ÷ $49,246 (national cost of living, MIT) → 5.73×", result: "score 100", kind: "step", url: NVDA_DEF14A, links: [{ text: "$282,050", url: NVDA_DEF14A }] },
        ] },
        { title: "QUESTION 2 — Is it what other Americans make?", lines: [
          { text: "[[$282,050]] ÷ $62,608 (typical U.S. worker's pay, BLS) → 4.50×", result: "score 100", kind: "step", url: NVDA_DEF14A, links: [{ text: "$282,050", url: NVDA_DEF14A }] },
        ] },
        { title: "QUESTION 3 — How is the money split?", lines: [
          { text: "Profit per worker: [[$120,067,000,000]] (fiscal 2026 profit, 10-K) ÷ [[42,000]] workers (as filed, \"approximately\") → $2,858,738 profit per worker", kind: "note", url: NVDA_10K, links: [{ text: "$120,067,000,000", url: NVDA_10K }, { text: "42,000", url: NVDA_10K }] },
          { text: "Worker's Share: [[$282,050]] (worker's pay) ÷ ($282,050 + $2,858,738) → 9.0%", result: "score 0", kind: "step", url: NVDA_DEF14A, links: [{ text: "$282,050", url: NVDA_DEF14A }] },
        ] },
        { title: "FINAL LINE", lines: [
          t("(100 + 100 + 0) ÷ 3", "67"),
          c("Dignity gate checked: pay is above the cost of living → no cap."),
          n("Printed limit (on every card): profit per worker is company-wide, because no company files U.S.-only profit. Pay figure: worldwide median, flagged — NVIDIA files no U.S. pay figure."),
          { text: "PRINTED FACT — NOT SCORED: \"In the GAO report listing the [[25]] largest employers whose workers receive food assistance (SNAP) or Medicaid in [[11]] states, NVIDIA does not appear in any state's list (snapshot: September 2025; GAO-26-108703). The GAO lists only each state's [[25]] largest employers per program, so not appearing does not mean zero. No national count exists.\"", kind: "note", url: GAO_PDF, links: [{ text: "25", url: GAO_PDF }, { text: "11", url: GAO_PDF }] },
          n("Printed as a government-counted fact with its limits attached; never enters any score (counts measure company size as much as pay, the 11 states are not a national sample, and eligibility is household-based)."),
          n("Sources: Form 10-K fiscal 2026; Proxy statement 2026 (DEF 14A); MIT Living Wage; BLS typical pay."),
        ] },
      ],
      factors: {
        living_wage: { status: "scored", note: "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 0 → 67, on the worldwide median [[$282,050]] (hierarchy step (c) — NVIDIA files no U.S.-only and no full-time-only median; flagged on the card). Q3: profit per worker [[$120,067M]] ÷ [[42,000]] (as filed, \"approximately\") = $2,858,738 → worker's share 9.0% → 0 (15% or below = 0). Dignity gate not triggered", links: [{ text: "$282,050", url: NVDA_DEF14A }, { text: "$120,067M", url: NVDA_10K }, { text: "42,000", url: NVDA_10K }] },
        benefits: { status: "not_disclosed", note: "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)" },
        workplace_safety: { status: "not_disclosed", note: "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)" },
        employee_retention: { status: "not_disclosed", note: "No U.S.-only retention figure in the draft rule's form (1yr+ cohort, stated population) is filed. Context only, never scored: the FY2026 10-K files a company-wide turnover rate of [[3.7%]] and that over [[40%]] of FY2026 hires came from employee referrals — a worldwide turnover figure is not a U.S.-only retention figure, and Retention is dormant under the U.S.-only principle", links: [{ text: "3.7%", url: NVDA_10K }, { text: "40%", url: NVDA_10K }] },
      },
    },
    us_workforce_commitment: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "NVIDIA reports about [[42,000]] workers worldwide and does not say how many are in the U.S. — so WeSee cannot score how committed it is to the American workforce. This pillar is not counted in any company's coverage while WeSee's measurement for it is unfinished (Class W).",
      sentenceLinks: [{ text: "42,000", url: NVDA_10K }],
      footnote:
        "PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 1,767 H-1B petitions for NVIDIA in FY2025 — 560 initial + 1,207 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" The H-1B Intensity factor scores only where a U.S. headcount is filed; NVIDIA files none, so the factor does not score and this count is the standing record (Clause 7(iii)). Source: USCIS H-1B Employer Data Hub, FY2025 employer file (NVIDIA Corporation; read 2026-10-22).",
      rule: "U.S. Workforce Rule v1.2; Class W — counts in no company's coverage",
      blocks: [
        { title: "U.S. Workforce Commitment — Not yet measured by WeSee", lines: [
          { text: "The locked rule needs a U.S. headcount. NVIDIA's 10-K reports \"approximately [[42,000]] employees in [[38]] countries\" and files no U.S. split — so neither the U.S. share nor U.S. hiring growth can be computed, and WeSee does not estimate.", kind: "note", url: NVDA_10K, links: [{ text: "42,000", url: NVDA_10K }, { text: "38", url: NVDA_10K }] },
          n("The worldwide total is printed as context only; worldwide hiring growth earns nothing in this pillar (the rule counts America, by design)."),
          n("Under Insufficient-Data Rule v1.2 this pillar is Class W — excluded from every company's coverage — so NVIDIA's missing U.S. split is recorded here as fact, not charged as coverage."),
          n("PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 1,767 H-1B petitions for NVIDIA in FY2025 — 560 initial + 1,207 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" The H-1B Intensity factor scores only where a U.S. headcount is filed; NVIDIA files none, so the factor does not score and this count is the standing record (Clause 7(iii)). Source: USCIS H-1B Employer Data Hub, FY2025 employer file (NVIDIA Corporation; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md)."),
          n("Source: Form 10-K fiscal 2026, Item 1 (Human Capital)."),
        ] },
      ],
      factors: {
        full_time_employment: { status: "not_disclosed", note: "NVIDIA files one worldwide total only (\"approximately [[42,000]] employees in [[38]] countries,\" FY2026 10-K) — no U.S. count and no full-time/part-time split. A foreign figure printed as context only (≈[[6,000]] employees in Israel, Item 1A) is never scored", links: [{ text: "42,000", url: NVDA_10K }, { text: "38", url: NVDA_10K }, { text: "6,000", url: NVDA_10K }] },
        domestic_hiring: { status: "not_disclosed", note: "Needs a filed U.S. headcount (share + scored-year change); none is published, so neither half can be computed. Worldwide hiring growth earns nothing in this pillar (M's D-2: the worldwide fallback is rejected for scoring) — and no worldwide growth claim is printed either, because the FY2025 worldwide headcount was not re-read in the build run (pack §\"Values that could NOT be verified\")" },
        training_investment: { status: "removed_by_m", note: "Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors" },
        contractor_dependence: { status: "not_disclosed", note: "No contractor/agency headcount or share is filed" },
      },
    },
    local_economic: {
      score: 38,
      sentence:
        "Scored on the one factor NVIDIA files in U.S. form: its U.S. tax provision was [[14.6%]] of its U.S. pre-tax income in fiscal 2026. The full chain is inside.",
      sentenceLinks: [{ text: "14.6%", url: NVDA_10K }],
      footnote: "Scored on 1 of 4 factors — the only one filed in comparable form.",
      rule: "Local Economic Contribution Rule v1.0, locked 2026-10-20",
      blocks: [
        { title: "Local Economic Contribution — 38", lines: [
          { text: "TAXES: U.S. taxes provided [[$18,008M]] (federal [[$17,675M]] + state [[$333M]], 10-K tax note) ÷ U.S. profit before taxes [[$123,181M]] → 14.6% → on the locked scale (13% = 30 · 17% = 50)", result: "38", kind: "step", url: NVDA_10K, links: [{ text: "$18,008M", url: NVDA_10K }, { text: "$17,675M", url: NVDA_10K }, { text: "$333M", url: NVDA_10K }, { text: "$123,181M", url: NVDA_10K }] },
          t("FACTOR LINE: Taxes is the only scored factor → the pillar is", "38"),
          n("Trend, same method: fiscal 2024 → 25 · fiscal 2025 → 31 · fiscal 2026 → 38."),
          { text: "Not disclosed (no factor scored): U.S. investment flow (capital spending is filed worldwide only, [[$6.1B]]) · purchases from U.S. suppliers (not filed) · U.S. research share (research spending filed worldwide only, [[$18,497M]]).", kind: "note", url: NVDA_10K, links: [{ text: "$6.1B", url: NVDA_10K }, { text: "$18,497M", url: NVDA_10K }] },
          n("Source: Form 10-K fiscal 2026, Note 13 (taxes)."),
        ] },
      ],
      factors: {
        domestic_investment: { status: "not_disclosed", note: "NVIDIA files capital expenditures as a worldwide total only ([[$6.1B]] in FY2026) with no additions-by-geography table — no year's U.S. additions flow is filed, and no U.S. stock share is substituted (the draft rule does not score a balance-sheet stock)", links: [{ text: "$6.1B", url: NVDA_10K }] },
        domestic_suppliers: { status: "not_disclosed", note: "No supplier-spend or purchases-by-origin split is filed" },
        us_rd: { status: "not_disclosed", note: "Research and development expense of [[$18,497M]] is filed worldwide only; no U.S. split", links: [{ text: "$18,497M", url: NVDA_10K }] },
        taxes: { status: "scored", note: "U.S. provision IS filed (FY2026 10-K Note 13: Federal [[$17,675M]] + State [[$333M]] = [[$18,008M]] on U.S. pre-tax [[$123,181M]] → 14.6%) → factor 38 under the locked rule = the pillar (Taxes alone). Trend inside, same method: FY2024 → 25 · FY2025 → 31 · FY2026 → 38 (the locked rule scores the scored year). Context only, never scored: U.S. cash taxes paid [[$18,845M]]", links: [{ text: "$17,675M", url: NVDA_10K }, { text: "$333M", url: NVDA_10K }, { text: "$18,008M", url: NVDA_10K }, { text: "$123,181M", url: NVDA_10K }, { text: "$18,845M", url: NVDA_10K }] },
      },
    },
    layoffs_high_profits: {
      score: 100,
      sentence:
        "No mass layoffs (rounds of 1,000 or more jobs) were found in NVIDIA's announcements or state layoff notices in the last three years — years in which its profit rose every year.",
      rule: "Layoff Rule v1.0",
      blocks: [
        { title: "Layoffs During High Profits — 100", lines: [
          s("Mass rounds found in the last 3 years (Oct 2023 – Oct 2026): 0 → 100 − 0", "100"),
          n("How it was checked: NVIDIA's announcements and news record, and state WARN layoff notices (including California, its home state). Honest limit: WARN is kept state-by-state and there is no single national list — the finding is \"no mass round found,\" stated exactly that way."),
          { text: "Context from the filing (never scored): NVIDIA's profit rose every year of the window ([[$29.8B]] → [[$72.9B]] → [[$120.1B]]), and it bought back [[$40.4 billion]] of its own stock in fiscal 2026.", kind: "note", url: NVDA_10K, links: [{ text: "$29.8B", url: NVDA_10K }, { text: "$72.9B", url: NVDA_10K }, { text: "$120.1B", url: NVDA_10K }, { text: "$40.4 billion", url: NVDA_10K }] },
        ] },
      ],
      factors: {
        layoff_severity: { status: "scored", note: "Inside Layoff Rule v1.0: mass rounds found in the window (Oct 2023 – Oct 2026): 0 → −0. Checked on company announcements / news searches and California WARN searches (NVIDIA's HQ state). The prominent ~360-person story is from 2008 — outside the window, not counted" },
        profitability: { status: "scored", note: "Inside Layoff Rule v1.0: profitable in every window year (net income [[$29,760M]] FY2024 → [[$72,880M]] FY2025 → [[$120,067M]] FY2026) — no loss-year discount would apply if a round were found", links: [{ text: "$29,760M", url: NVDA_10K }, { text: "$72,880M", url: NVDA_10K }, { text: "$120,067M", url: NVDA_10K }] },
        buybacks: { status: "scored", note: "Inside Layoff Rule v1.0: with no layoffs in the window, the credit mechanics never engage — credits +0 and no deduction taken. Context from the filing (never scored on its own): NVIDIA repurchased [[$40.4B]] of its own stock in FY2026 and paid [[$974M]] of dividends", links: [{ text: "$40.4B", url: NVDA_10K }, { text: "$974M", url: NVDA_10K }] },
      },
    },
    ceo_pay_ratio: {
      score: 24,
      sentence:
        "Its CEO actually took home [[$152.9 million]] in fiscal 2026 — about [[542]] times the typical worker's [[$282,050]]. Almost all of it was stock from earlier years that became his to sell.",
      sentenceLinks: [
        { text: "$152.9 million", url: NVDA_DEF14A },
        { text: "542", url: NVDA_DEF14A },
        { text: "$282,050", url: NVDA_DEF14A },
      ],
      footnote:
        "Footnote fact (not scored): the proxy's own filed ratio is [[129:1]]. The gap is the rule working as designed — the filed number counts [[$24.8 million]] of stock promised in fiscal 2026, while [[$141.3 million]] of stock promised in earlier years actually became his this year. WeSee counts what he actually received.",
      footnoteLinks: [
        { text: "129:1", url: NVDA_DEF14A },
        { text: "$24.8 million", url: NVDA_DEF14A },
        { text: "$141.3 million", url: NVDA_DEF14A },
      ],
      rule: "CEO Pay Rule v2.0, realized pay — what he actually took home",
      blocks: [
        { title: "CEO-to-Worker Pay Ratio — 24", lines: [
          { text: "1. Salary", result: "$1,497,627", kind: "step", url: NVDA_DEF14A },
          { text: "2. Bonus actually paid", result: "$6,000,000", kind: "step", url: NVDA_DEF14A },
          { text: "3. All other pay", result: "$4,045,691", kind: "step", url: NVDA_DEF14A },
          { text: "4. Stock that became his to sell in fiscal 2026", result: "$141,311,217", kind: "step", url: NVDA_DEF14A },
          { text: "5. Stock options exercised — NVIDIA has had no stock options outstanding since fiscal 2024", result: "$0", kind: "step", url: NVDA_DEF14A },
          t("= Total actually taken home", "$152,854,535"),
          { text: "÷ Typical worker's pay [[$282,050]] → 542 : 1 → on the published scale (500-to-1 = 25 · 1,000-to-1 = 10)", result: "24", kind: "total", url: NVDA_DEF14A, links: [{ text: "$282,050", url: NVDA_DEF14A }] },
          { text: "Footnote fact (not scored): the proxy's own filed ratio is [[129:1]]. The gap is the rule working as designed — the filed number counts [[$24.8 million]] of stock promised in fiscal 2026, while [[$141.3 million]] of stock promised in earlier years actually became his this year. WeSee counts what he actually received.", kind: "note", url: NVDA_DEF14A, links: [{ text: "129:1", url: NVDA_DEF14A }, { text: "$24.8 million", url: NVDA_DEF14A }, { text: "$141.3 million", url: NVDA_DEF14A }] },
          n("Scale note: scored on CEO Pay Rule v2.0 (locked 2026-10-20). The v2.0 recalibration changed only the top-end anchors (350:1 and below); at 542:1 NVIDIA sits in the unchanged 500–1,000 segment, so its score is 24 under both v1.1 and v2.0."),
          n("Source: Proxy statement 2026 (DEF 14A, filed May 12, 2026)."),
        ] },
      ],
      factors: {
        ceo_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (realized pay [[$152,854,535]] — salary [[$1,497,627]] + non-equity incentive [[$6,000,000]] + all other [[$4,045,691]] (of which [[$3,975,533]] is residential/travel security, consultation and driver services) + stock vested [[$141,311,217]] ([[1,113,555 shares]]) + $0 option exercises — NVIDIA states it has had no stock options outstanding since the end of Fiscal 2024; DEF 14A 2026 pp.50, 53). Never counted: [[$24,800,511]] grant-date stock awards — a promise is not pay received", links: [{ text: "$152,854,535", url: NVDA_DEF14A }, { text: "$1,497,627", url: NVDA_DEF14A }, { text: "$6,000,000", url: NVDA_DEF14A }, { text: "$4,045,691", url: NVDA_DEF14A }, { text: "$3,975,533", url: NVDA_DEF14A }, { text: "$141,311,217", url: NVDA_DEF14A }, { text: "1,113,555 shares", url: NVDA_DEF14A }, { text: "$24,800,511", url: NVDA_DEF14A }] },
        median_worker_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (worldwide median [[$282,050]], hierarchy step (c), flagged → 542:1 → 24; NVIDIA's own filed ratio [[129:1]] printed as a footnote, never scored — it uses the grant-date total and never sees the [[$141.3M]] that actually vested. Note the inversion recorded in the pack: here the realized ratio is far worse than the filed one). NVIDIA states it reused the median employee identified in its Fiscal 2024 calculation, as SEC rules permit", links: [{ text: "$282,050", url: NVDA_DEF14A }, { text: "129:1", url: NVDA_DEF14A }, { text: "$141.3M", url: NVDA_DEF14A }] },
      },
    },
    outsourcing_exposure: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "The rule for this pillar is locked, but WeSee's full search protocol for NVIDIA is not yet complete, so no score is claimed. What the record shows so far is inside.",
      footnote:
        "NVIDIA is fabless by design: its own filing says third-party suppliers manufacture, assemble, test, and package its products, and that its supply chain is concentrated in Asia. It owns no chip factories and files no U.S.-production share.",
      rule: "Outsourcing + Production Abroad Rule v1.0",
      blocks: [
        { title: "Jobs Moved Abroad — Not yet measured by WeSee", lines: [
          { text: "NVIDIA is fabless by design: its own filing says third-party suppliers manufacture, assemble, test, and package its products, and that its supply chain is concentrated in Asia. It owns no chip factories and files no U.S.-production share.", kind: "note", url: NVDA_10K },
          n("Searched for proven moves of U.S. work abroad: no Trade Adjustment Assistance case naming NVIDIA was found; no layoff notice or announcement in the window records U.S. jobs moved abroad."),
          { text: "Honest limit: the federal TAA program has taken no new cases since July 1, 2022 — that instrument is frozen for every company, so the search also covered filings, WARN notices, and announcements.", kind: "note", url: DOL_TAA },
          n("The distinction the locked rule applies: NVIDIA's production was never in the U.S. to be moved — its model was foreign production from the start. Foreign production by design is a fact printed here; moving U.S. jobs abroad is the act the pillar punishes, and none was found."),
          n("Status: the build searches above are NOT the rule's full §8 protocol (S-1–S-5, incl. the DOL petitions-file pull); until that protocol is completed and logged for NVIDIA, this pillar reads \"Not yet measured by WeSee\" and carries no score."),
        ] },
      ],
      factors: {
        offshore_workforce: { status: "not_disclosed", note: "No offshore-workforce share as such is filed (NVIDIA files no geographic employee split of any kind; its filing states third-party manufacturing is concentrated in Asia — a supply-chain fact, not an offshore-workforce share, and operating abroad is not itself a moved U.S. job)" },
        outsourced_services: { status: "not_disclosed", note: "Vendor/offshore services spend is not published" },
      },
    },
    community_resilience: {
      score: null, status: "Not yet measurable",
      sentence:
        "No source exists yet that measures this the same fair way for every company — so it is excluded for everyone, not held against NVIDIA.",
      footnote: "No filed or public company-level source exists for any company. No number is estimated.",
      factors: {
        local_investment: { status: "not_measurable", note: "No company-level source exists for any company" },
        community_programs: { status: "not_measurable", note: "Program spend is self-reported marketing material, not a filing" },
      },
    },
    production_abroad: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "Same status as Jobs Moved Abroad: protocol incomplete, no score claimed. What the record shows so far is inside.",
      footnote:
        "NVIDIA is fabless by design — third parties manufacture, assemble, test, and package its products, concentrated in Asia, and it operates no fabs of its own; its production was never in the U.S. to be moved, so foreign production by design prints as exposure context only, never as a move.",
      rule: "Outsourcing + Production Abroad Rule v1.0",
      blocks: [
        { title: "Production Moved Abroad — Not yet measured by WeSee", lines: [
          { text: "NVIDIA is fabless by design: its own filing says third-party suppliers manufacture, assemble, test, and package its products, and that its supply chain is concentrated in Asia. It owns no chip factories and files no U.S.-production share.", kind: "note", url: NVDA_10K },
          n("Build searches were run (TAA web + Federal Register searches; filings, WARN, announcements) — no proven move of U.S. production abroad was located, but the rule's full §8 protocol (S-1–S-5, incl. the DOL petitions-file pull) has not been completed and logged for NVIDIA, so the pillar is not yet measured."),
          n("The distinction printed on the card: NVIDIA's production was never in the U.S. to be moved, so foreign production by design prints as exposure context only, never as a move."),
        ] },
      ],
      factors: {
        domestic_production: { status: "not_measurable", note: "Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for NVIDIA build searches were run, same as Jobs Moved Abroad above, and no proven move was located, but the §8 protocol is not complete, so the pillar is not yet measured. The distinction printed on the card: NVIDIA is fabless by design — third parties manufacture, assemble, test, and package its products, concentrated in Asia, and it operates no fabs of its own; its production was never in the U.S. to be moved, so foreign production by design prints as exposure context only, never as a move)" },
        imported_goods: { status: "not_measurable", note: "USITC counts category imports, not a company's imports" },
      },
    },
    lobbying_activity: {
      score: 50,
      sentence:
        "NVIDIA spent [[$4,970,000]] lobbying the federal government in 2025, verified on its OpenSecrets client summary and cross-checked against its own Senate lobbying filings. Its political action committee spent [[$0]] in the most recent completed election cycle (2023–24): NVIDIA had no PAC at all until it filed to create one in August 2026.",
      sentenceLinks: [
        { text: "$4,970,000", url: NVDA_OPENSECRETS },
        { text: "$0", url: NVDA_ORG_PROFILE },
      ],
      footnote:
        "Limit (every card): federal lobbying + federal PAC only. State lobbying and trade-group spending are not counted.",
      rule: "Lobbying Rule v1.1 (incl. PAC)",
      blocks: [
        { title: "Lobbying Activity — 50", lines: [
          { text: "1. Federal lobbying in 2025 (parent + subsidiaries, OpenSecrets)", result: "$4,970,000", kind: "step", url: NVDA_OPENSECRETS },
          n("NVIDIA CORPORATION (in-house registrant): Q1 $940,000 + Q2 $620,000 + Q3 $1,950,000 + Q4 $1,460,000 = $4,970,000 — an exact match to the printed 2025 total on NVIDIA's OpenSecrets client summary (id D000036303). No subsidiary client filed separately in 2025."),
          { text: "2. PAC spending, most recent completed election cycle (2023–24)", result: "$0", kind: "step", url: NVDA_ORG_PROFILE },
          t("= Added together (the rule adds them — it never averages them)", "$4,970,000"),
          t("→ Between $1M (70) and $5M (50): 70 − (3,970,000 ÷ 4,000,000 × 20) = 50.15", "50"),
          n("Limit (every card): federal lobbying + federal PAC only. State lobbying and trade-group spending are not counted."),
          n("At the original build this pillar was \"Not yet verified by WeSee\" — the OpenSecrets page would not render its tables on 2026-10-14. The 2026-10-15 rebuild read the total on the source page and cross-checked it against the Senate LDA self-filer sums; applied 2026-10-20 under Bundle B."),
          n("Source: OpenSecrets, NVIDIA Corp (client id D000036303) — lobbying client page and organization profile."),
        ] },
      ],
      factors: {
        lobbying_spend: { status: "scored", note: "Lobbying Rule v1.1: calendar-2025 federal lobbying total (parent + subsidiaries) from the OpenSecrets client summary (NVIDIA Corp, id D000036303) — [[$4,970,000]], read on the rendered page in the 2026-10-15 LDA rebuild and cross-checked exactly against the LDA self-filer sums (in-house Q1 $940,000 + Q2 $620,000 + Q3 $1,950,000 amended + Q4 $1,460,000 amended). At the original build the page's tables did not render and the factor was NOT SCORED THIS RUN rather than estimated; applied 2026-10-20 under Bundle B. Verified context: 2024 total [[$640,000]]", links: [{ text: "$4,970,000", url: NVDA_OPENSECRETS }, { text: "$640,000", url: NVDA_OPENSECRETS }] },
        political_contributions: { status: "scored", note: "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. NVIDIA PAC 2023–24: [[$0]] — verified on the organization profile (2024 cycle: From Organization $0, PACs $0; the [[$1,486,113]] attributed there is individual employees' own money, which the rule never counts), corroborated by the public record that NVIDIA filed to create its first employee PAC only in August 2026, after the 2023–24 cycle closed. Final chain: $4,970,000 + $0 = $4,970,000 → 50. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple/Walmart/Meta/Microsoft/Alphabet maps", links: [{ text: "$0", url: NVDA_ORG_PROFILE }, { text: "$1,486,113", url: NVDA_ORG_PROFILE }] },
      },
    },
  },
  sources: [
    { label: "Form 10-K, fiscal 2026 (filed Feb 25, 2026; SEC accession 0001045810-26-000021)", url: NVDA_10K },
    { label: "Proxy statement 2026 (DEF 14A, filed May 12, 2026; accession 0001045810-26-000036)", url: NVDA_DEF14A },
    { label: "OpenSecrets — NVIDIA Corp, federal lobbying client summary, cycle 2025 (id D000036303)", url: NVDA_OPENSECRETS },
    { label: "OpenSecrets — NVIDIA Corp, organization profile summary (id D000036303)", url: NVDA_ORG_PROFILE },
    { label: "U.S. Government Accountability Office — GAO-26-108703 (June 22, 2026; reissued with revisions August 24, 2026): the 25 largest employers whose workers receive SNAP or Medicaid, in 11 reporting states, snapshot September 2025 (printed fact, not scored)", url: GAO_PDF },
    { label: "U.S. Department of Labor, Trade Adjustment Assistance program page — program in termination phase since July 1, 2022", url: DOL_TAA },
    { label: "MIT Living Wage Calculator — national benchmark: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md)." },
    { label: "BLS typical pay — $62,608/year (2025: $1,204/week x 52)." },
    { label: "USCIS H-1B Employer Data Hub, FY2025 employer file (NVIDIA Corporation; read 2026-10-22)." },
    { label: "State WARN notices (including California, its home state) and company announcements — no mass round found, Oct 2023 – Oct 2026." },
  ],
  rules:
    "Methodology v1.0 · Worker Pay Fairness Rule v1.3 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 (incl. PAC) · Insufficient-Data Rule v1.2 · U.S. Workforce Rule v1.2 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0 · Score Bands v1.0 · Weights Defense v1.0 · Show-Your-Work Spec v1.0",
};
