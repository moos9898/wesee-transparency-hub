// Berkshire Hathaway (BRK) — verbatim data from BERKSHIRE_COMPANY_CARD.md +
// FACTOR_MAP_BERKSHIRE.md (BUILD FILE v1.0, period FY2025, calendar year ended
// Dec 31, 2025; scoring date 2026-10-14; updated 2026-10-20 Bundles A–D,
// 2026-10-22 U.S. Workforce Rule v1.2, 2026-10-24 U.S. Workforce Rule v1.3).
// Data only — no number on this card is generated or estimated.
// Source links follow FINISH_LINK_SPEC_2026-11-06.md: every marker's text
// appears once in the matching links array with its exact source-page URL, taken
// ONLY from the card file, factor map, evidence pack, or load draft. Stats with no
// exact source page in those materials are left unmarked and listed in
// FINISH_DEFECTS_BERKSHIRE.md — never linked to a wrong or guessed page.
// NOTE: the card file cites the Johns Manville pattern history by Federal Register
// Doc. 2010-18186 only, with no TA-W identifier; no TA-W-71,494 identifier appears
// in the card file, factor map, load draft, or evidence pack — see the report for
// the flag. It is NOT added here.

import type { CompanyCard, StepLine } from "./amazon";

const BRK_10K =
  "https://www.sec.gov/Archives/edgar/data/1067983/000119312526083899/brka-20251231.htm";
const BRK_DEF14A =
  "https://www.sec.gov/Archives/edgar/data/1067983/000119312526106253/d882687ddef14a.htm";
const BRK_OPENSECRETS =
  "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000021757";
const GAO_PDF = "https://www.gao.gov/assets/890/888620.pdf";

const s = (text: string, result?: string): StepLine => ({ text, result, kind: "step" });
const t = (text: string, result?: string): StepLine => ({ text, result, kind: "total" });
const c = (text: string): StepLine => ({ text, kind: "check" });
const n = (text: string): StepLine => ({ text, kind: "note" });

export const BERKSHIRE_CARD: CompanyCard = {
  overall: 69,
  band: "Mixed",
  coverage:
    "5 of 7 ready pillars scored (71%) — the coverage cap is 69, and the raw overall of 75 is capped to 69. U.S. Workforce Commitment also scores (85) and counts in the average, but is Class W — counted in no company's coverage. One pillar (Community Resilience) is not yet measurable for any company.",
  period:
    "Period scored: FY2025 (calendar year ended Dec 31, 2025) · Scoring date: 2026-10-14 · Updated 2026-10-24 under U.S. Workforce Rule v1.3 · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      s("1. Worker Standards: 80 × weight 16", "1,280"),
      s("2. U.S. Workforce Commitment: 85 × weight 14", "1,190"),
      s("3. Local Economic Contribution: 56 × weight 14", "784"),
      s("4. Layoffs: 83 × weight 12", "996"),
      s("5. CEO Pay: 100 × weight 10", "1,000"),
      s("6. Lobbying: 32 × weight 7", "224"),
      t("= Add them up, divide by the total weight (73): 5,474 ÷ 73", "75 before caps"),
      c("✓ Coverage cap checked: 5 of 7 ready pillars are scored (71%), so the score may not pass 69 → Overall 69 — Mixed, capped by coverage"),
      c("✓ Layoff cap checked: the layoff pillar is 83 — not triggered."),
      c("✓ Equal weights give (80 + 85 + 56 + 83 + 100 + 32) ÷ 6 = 73 before caps — the same capped 69. Published next to the score, as the Weights Defense requires."),
      n("(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2. U.S. Workforce Commitment counts in the average above but not in coverage — Class W.)"),
    ],
  },
  pillars: {
    worker_standards: {
      score: 80,
      sentence:
        "Berkshire's median worker earned [[$93,709]] — well above the cost of living and above what the typical American worker makes — but small next to the [[$172,685]] of profit the company books per worker.",
      sentenceLinks: [
        { text: "$93,709", url: BRK_DEF14A },
        { text: "$172,685", url: BRK_10K },
      ],
      footnote:
        "The pay figure is Berkshire's worldwide median from its proxy; Berkshire does not disclose a U.S.-only median. Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        { title: "QUESTION 1 — Can the worker live on the pay?", lines: [
          { text: "[[$93,709]] (worker earns) → $49,246 (worker needs to live on) → $1.90 earned per $1 needed", result: "score 100", kind: "step", url: BRK_DEF14A, links: [{ text: "$93,709", url: BRK_DEF14A }] },
        ] },
        { title: "QUESTION 2 — Is it what other Americans make?", lines: [
          { text: "[[$93,709]] (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 1.50", result: "score 100", kind: "step", url: BRK_DEF14A, links: [{ text: "$93,709", url: BRK_DEF14A }] },
        ] },
        { title: "QUESTION 3 — How is the money split?", lines: [
          { text: "First show where [[$172,685]] comes from — it is one division, never present it bare:", kind: "note", url: BRK_10K, links: [{ text: "$172,685", url: BRK_10K }] },
          { text: "[[$67.0B]] (Berkshire's profit for the whole year) ÷ [[387,800]] (workers) = $172,685 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)", kind: "note", url: BRK_10K, links: [{ text: "$67.0B", url: BRK_10K }, { text: "387,800", url: BRK_10K }] },
          { text: "Then the split:", kind: "note" },
          { text: "[[$93,709]] (worker gets) + $172,685 (company keeps per worker) → worker's share 35%", result: "score 40", kind: "step", url: BRK_DEF14A, links: [{ text: "$93,709", url: BRK_DEF14A }] },
        ] },
        { title: "FINAL LINE", lines: [
          t("100 + 100 + 40 → ÷ 3", "80"),
          c("Dignity gate: not triggered — pay is above the national living wage."),
          { text: "Pay figure note: [[$93,709]] is the median worker's total pay from Berkshire's 2026 proxy. As Berkshire files it, the median covers its worldwide workforce (about [[388,000]] people across 60+ companies), was identified from a sample of about two-thirds of workers using 2023 pay data — the method Berkshire's filing states — and no U.S.-only or full-time-only median is disclosed. The same figure is used in all three questions and in the CEO ratio, and the flag travels with it everywhere.", kind: "note", url: BRK_DEF14A, links: [{ text: "$93,709", url: BRK_DEF14A }, { text: "388,000", url: BRK_10K }] },
          { text: "Q3 honesty note: Berkshire's profit per worker is unusually large because its profit includes returns on a stock portfolio of more than [[$300B]], spread over the operating workforce — and 2025's profit was itself cut by [[$9.6B]] of losses on holdings in other companies. On Berkshire's own preferred \"operating earnings\" measure ([[$44.4B]]), profit per worker would be [[$114,493]] and this question would score 60. The rule uses the filed profit figure for every company, so 40 stands; the alternative is shown, never substituted.", kind: "note", url: BRK_10K, links: [{ text: "$300B", url: BRK_10K }, { text: "$9.6B", url: BRK_10K }, { text: "$44.4B", url: BRK_10K }, { text: "$114,493", url: BRK_10K }] },
          { text: "PRINTED FACT — NOT SCORED (M's decision 2026-10-11; standard for EVERY company card): \"Berkshire Hathaway does not appear in the GAO's employer tables (report GAO-26-108703, [[11]] reporting states, September 2025). The GAO lists employers under their own names — Berkshire's workers are employed by its subsidiaries, such as GEICO, BNSF Railway, McLane, and Pilot — so a Berkshire company would appear under the subsidiary's name, never the parent's; a full-text search of the report found none of those names in any state's top-25 table either. The GAO lists only each state's [[25]] largest employers per program, so not appearing in a table does not mean zero. No national count exists.\"", kind: "note", url: GAO_PDF, links: [{ text: "11", url: GAO_PDF }, { text: "25", url: GAO_PDF }] },
          n("Printed as a government-counted fact with its limits attached; never enters any score (counts measure company size as much as pay, the 11 states are not a national sample, and eligibility is household-based)."),
          { text: "Sources: DEF 14A 2026 pay-ratio section; MIT Living Wage; 10-K FY2025 (net earnings [[$66,968M]]; ~[[387,800]] employees).", kind: "note", url: BRK_10K, links: [{ text: "$66,968M", url: BRK_10K }, { text: "387,800", url: BRK_10K }] },
        ] },
      ],
      factors: {
        living_wage: { status: "scored", note: "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 40 → 80, on the worldwide median [[$93,709]] (hierarchy step (c) — Berkshire discloses no U.S.-only and no full-time-only median; flagged on the card). The median carries the heaviest caveats of any built card, all printed: identified once every three years from a judgmental sample of roughly two-thirds of [[387,815]] employees (proxy count; the 10-K says ~[[387,800]]), the median person identified as of Dec 31, 2023 on 2023 W-2 / equivalent taxable pay, with that person's FY2025 total compensation then calculated. Q1: 93,709 ÷ 49,246 = 1.90x → 100. Q2: 93,709 ÷ 62,608 = 1.497x → 100. Q3: profit per worker [[66,968M]] ÷ 387,800 = [[$172,685]] → worker's share 93,709 ÷ (93,709 + 172,685) = 35.2% → 40. Dignity gate not triggered. Q3 honesty note printed on the card: GAAP profit includes returns on a ~[[$300B+]] equity portfolio and was reduced by [[$9,590M]] of after-tax equity-method losses; on Berkshire's own operating-earnings measure ([[$44.4B]]) profit per worker would be $114,493, the share 45.0%, and Q3 would score 60 — the locked rule uses filed GAAP net income for every company, so 40 stands", links: [{ text: "$93,709", url: BRK_DEF14A }, { text: "387,815", url: BRK_DEF14A }, { text: "387,800", url: BRK_10K }, { text: "66,968M", url: BRK_10K }, { text: "$172,685", url: BRK_10K }, { text: "$300B+", url: BRK_10K }, { text: "$9,590M", url: BRK_10K }, { text: "$44.4B", url: BRK_10K }] },
        benefits: { status: "not_disclosed", note: "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)" },
        workplace_safety: { status: "not_disclosed", note: "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps). For a 60+ subsidiary conglomerate there is also no single filed rate to read" },
        employee_retention: { status: "not_disclosed", note: "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none; Retention is dormant under the U.S.-only principle)" },
      },
    },
    us_workforce_commitment: {
      score: 85,
      sentence:
        "Berkshire reports about [[388,000]] workers and says roughly [[80%]] are in the United States. It files no U.S. worker count for any year, so growth cannot be measured — under the trend rule that scores 85: American jobs filed, no evidence of shrinkage.",
      sentenceLinks: [
        { text: "388,000", url: BRK_10K },
        { text: "80%", url: BRK_10K },
      ],
      footnote:
        "PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 513 H-1B petitions for Berkshire Hathaway in FY2025 — 127 initial + 386 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" \"Berkshire's count sums its Exhibit 21 subsidiaries, which petition under their own names; subsidiaries the filing does not list are not counted, so this count is a floor.\" The H-1B Intensity factor scores only where a U.S. headcount count is filed (Clause 5); Berkshire files a share (approximately 80%) but no count, so the factor does not score, the pillar re-normalizes without it (stays 85), and this count is the standing record (Clause 7(iii)). Source: USCIS H-1B Employer Data Hub, FY2025 employer file — summed over the Petitioner Name Schedule (parent + 275 Exhibit 21 subsidiaries; sweep completed 2026-10-22).",
      rule: "U.S. Workforce Rule v1.3; scored on Domestic Hiring, trend rule — growth unmeasurable, no U.S. count filed for any year",
      blocks: [
        { title: "U.S. Workforce Commitment — 85", lines: [
          { text: "DOMESTIC HIRING — is the company building its U.S. workforce? (trend rule, U.S. Workforce Rule v1.3 — the old share half is retired: what matters is what the company does to its U.S. workforce, not what fraction sits in America): the filing gives no U.S. worker count for this year or any earlier year, so there is no U.S. change to measure — growth is UNMEASURABLE. With a U.S. presence filed (\"approximately [[80%]]\" of workers in the U.S., as filed) and no evidence of shrinkage, the factor scores 85.", kind: "note", url: BRK_10K, links: [{ text: "80%", url: BRK_10K }] },
          t("FACTOR LINE: 85 = the pillar score (other factors not disclosed: full-time share is not filed; contractor share is not filed)", "85"),
          { text: "What is NOT done: the score is not estimated from a count that was never filed, and no U.S. total is assembled from segment counts (BNSF ~[[35,000]] · insurance ~[[42,600]] · Pilot ~[[29,300]] · McLane ~[[24,900]], as filed — they mix countries and do not add up to a U.S. total). The filing also gives [[19%]] union-represented (context only).", kind: "note", url: BRK_10K, links: [{ text: "35,000", url: BRK_10K }, { text: "42,600", url: BRK_10K }, { text: "29,300", url: BRK_10K }, { text: "24,900", url: BRK_10K }, { text: "19%", url: BRK_10K }] },
          n("Class W note: this pillar counts in Berkshire's average above, but — like every company — not in its coverage."),
          n("PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 513 H-1B petitions for Berkshire Hathaway in FY2025 — 127 initial + 386 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" \"Berkshire's count sums its Exhibit 21 subsidiaries, which petition under their own names; subsidiaries the filing does not list are not counted, so this count is a floor.\" The H-1B Intensity factor scores only where a U.S. headcount count is filed (Clause 5); Berkshire files a share (approximately 80%) but no count, so the factor does not score, the pillar re-normalizes without it (stays 85), and this count is the standing record (Clause 7(iii)). Source: USCIS H-1B Employer Data Hub, FY2025 employer file — summed over the Petitioner Name Schedule (parent + 275 Exhibit 21 subsidiaries; PETITIONER_NAME_SCHEDULE_BERKSHIRE.md, sweep completed 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md)."),
          n("Counted: GEICO family 341 · Pilot Travel Centers 28 · Nebraska Furniture Mart 22 · Mouser Electronics 21 · McLane 18 · MidAmerican Energy 15 · Berkshire Hathaway Specialty Insurance 13 · Oriental Trading 9 · BNSF Railway 8 · PacifiCorp 8 · Lubrizol 7 · General Re 4 · Johns Manville 4 · Brooks Sports 4 · National Indemnity 3 · TTI 2 · Duracell US Operations 1 · MiTek 1 · FlightSafety International 1 · Richline Group 1 · Ben Bridge Jeweler 1 · See's Candies 1; every other Schedule name was read as no FY2025 rows or not a Hub name."),
          n("Source: 10-K FY2025, Item 1 (Human Capital)."),
        ] },
      ],
      factors: {
        full_time_employment: { status: "not_disclosed", note: "The FY2025 10-K files ~[[387,800]] employees worldwide, \"approximately [[80%]] in the United States,\" and [[19%]] union-represented — no U.S. count and no full-time/part-time split. A filed full-time share is what this factor scores; none exists", links: [{ text: "387,800", url: BRK_10K }, { text: "80%", url: BRK_10K }, { text: "19%", url: BRK_10K }] },
        domestic_hiring: { status: "scored", note: "Trend rule (U.S. Workforce Rule v1.3, locked 2026-10-24 — the old share half is retired): no U.S. count is filed for any year, so there is no U.S. change to measure — growth is UNMEASURABLE. With a U.S. presence filed (\"approximately [[80%]]\" of workers in the U.S., as filed) and no evidence of shrinkage, the factor scores 85. Filed segment headcounts (BNSF ~[[35,000]] · insurance group ~[[42,600]] · Pilot ~[[29,300]] · McLane ~[[24,900]]) mix countries and do not reconcile to a U.S. total — under the rule they are never assembled into one. The worldwide fallback is rejected by M (D-2)", links: [{ text: "80%", url: BRK_10K }, { text: "35,000", url: BRK_10K }, { text: "42,600", url: BRK_10K }, { text: "29,300", url: BRK_10K }, { text: "24,900", url: BRK_10K }] },
        training_investment: { status: "removed_by_m", note: "Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors" },
        contractor_dependence: { status: "not_disclosed", note: "No contractor/agency headcount or share is filed" },
      },
    },
    local_economic: {
      score: 56,
      sentence:
        "It paid U.S. taxes at an effective rate of [[18.2%]] on its U.S. profits in 2025; it does not file how much of its investment lands in the United States.",
      sentenceLinks: [{ text: "18.2%", url: BRK_10K }],
      footnote: "Taxes is the only scored factor.",
      rule: "Local Economic Contribution Rule v1.0, locked 2026-10-20",
      blocks: [
        { title: "Local Economic Contribution — 56", lines: [
          { text: "TAXES: [[$13,044M]] (federal tax provision) + [[$973M]] (state tax provision) → [[$14,017M]] (U.S. tax provision) ÷ [[$77,083M]] (profit earned in the U.S. before tax) → 18.2% → on the locked scale (17% = 50 · 21% = 70)", result: "56", kind: "step", url: BRK_10K, links: [{ text: "$13,044M", url: BRK_10K }, { text: "$973M", url: BRK_10K }, { text: "$14,017M", url: BRK_10K }, { text: "$77,083M", url: BRK_10K }] },
          t("FACTOR LINE: Taxes is the only scored factor → the pillar is", "56"),
          { text: "Context (never scored): U.S. cash taxes actually paid in 2025 were [[$12,578M]]; the same effective rate was [[18.3%]] in 2024 and [[18.7%]] in 2023 — on a pooled three-year alternative the factor would score 57 (the locked rule scores the scored year, decision D-3).", kind: "note", url: BRK_10K, links: [{ text: "$12,578M", url: BRK_10K }, { text: "18.3%", url: BRK_10K }, { text: "18.7%", url: BRK_10K }] },
          { text: "Source: 10-K FY2025, Note 20 (income taxes) and Note 26 (segment capital additions: [[$20,927M]] total, by business segment only).", kind: "note", url: BRK_10K, links: [{ text: "$20,927M", url: BRK_10K }] },
        ] },
      ],
      factors: {
        domestic_investment: { status: "not_disclosed", note: "Capital additions are filed by business segment only (Note 26 + cash-flow statement: Insurance [[$109M]] · BNSF [[$3,796M]] · Berkshire Hathaway Energy [[$10,589M]] · Manufacturing [[$2,681M]] · Service and retailing [[$2,604M]] · McLane [[$207M]] · Pilot [[$941M]] · total [[$20,927M]]) — no geographic (U.S. vs foreign) flow is filed, and no U.S. stock share is substituted (the locked rule does not score a balance-sheet stock). Insurance premiums by geography are premiums, not investment, and are not scored. Same treatment as Amazon under the locked rule; unlike Costco, which files a U.S. segment figure", links: [{ text: "$109M", url: BRK_10K }, { text: "$3,796M", url: BRK_10K }, { text: "$10,589M", url: BRK_10K }, { text: "$2,681M", url: BRK_10K }, { text: "$2,604M", url: BRK_10K }, { text: "$207M", url: BRK_10K }, { text: "$941M", url: BRK_10K }, { text: "$20,927M", url: BRK_10K }] },
        domestic_suppliers: { status: "not_disclosed", note: "No supplier-spend or purchases-by-origin split is filed" },
        us_rd: { status: "not_disclosed", note: "No R&D line with a U.S. split is filed" },
        taxes: { status: "scored", note: "U.S. provision IS filed (FY2025 10-K Note 20: Federal [[$13,044M]] + State [[$973M]] = [[$14,017M]] on Domestic pre-tax [[$77,083M]] → 18.2%) → factor 56 under the locked rule = the pillar (Taxes alone). Finding F-2 holds for Berkshire too: it DOES file a U.S./foreign tax split. Trend inside, same note: 2024 [[18.3%]] · 2023 [[18.7%]]; on a pooled 3-year alternative the factor would be 57 (the locked rule scores the scored year, decision D-3). Context only, never scored: U.S. cash taxes paid [[$12,578M]] (Federal [[$11,753M]] + State [[$825M]])", links: [{ text: "$13,044M", url: BRK_10K }, { text: "$973M", url: BRK_10K }, { text: "$14,017M", url: BRK_10K }, { text: "$77,083M", url: BRK_10K }, { text: "18.3%", url: BRK_10K }, { text: "18.7%", url: BRK_10K }, { text: "$12,578M", url: BRK_10K }, { text: "$11,753M", url: BRK_10K }, { text: "$825M", url: BRK_10K }] },
      },
    },
    layoffs_high_profits: {
      score: 83,
      sentence:
        "One mass round in three years — about 2,000 jobs at GEICO in October 2023 — announced in a year Berkshire's books showed a paper loss, which the rule counts at half weight.",
      rule: "Layoff Rule v1.0",
      blocks: [
        { title: "Layoffs — 83", lines: [
          s("● Start", "100"),
          s("− One mass round: GEICO, announced Oct 19, 2023 → about 2,000 jobs (the company said \"roughly 2,000,\" about 6% of GEICO's workforce) → count band 1,000–4,999", "−25"),
          s("− The round cut 6% or more of that business's own workforce", "−10"),
          s("− Profit check: Berkshire's most recent completed year at the announcement (FY2022) showed a net LOSS of $22.8B on paper — investment losses, while its businesses earned about $30.8B → the rule's loss-year discount: all deductions halved → −35 becomes −17.5", "−17.5"),
          { text: "− Credits: none → transition help was offered, but no severance amount was disclosed, no 60+ day transfer window was disclosed, and Berkshire bought back [[$9.2B]] of its own stock in 2023", result: "+0", kind: "step", url: BRK_10K, links: [{ text: "$9.2B", url: BRK_10K }] },
          t("=", "83"),
          n("Read the profit check carefully: without the loss-year discount, this same record scores 65. The 83 is the locked rule applied exactly as written; Berkshire's \"loss\" was a paper loss on its stock portfolio, not a business that lost money. WeSee prints both numbers rather than bending the rule for one company."),
          n("The search: company announcements and trade press for the parent and its major subsidiaries, WARN records and trackers, Oct 2023 – Oct 2026. Smaller cuts found and documented in the evidence pack (BNSF furloughs of 362 in March 2024; Forest River WARN notices of 83 and about 160; Johns Manville 100) — all below the rule's 1,000-job threshold for a mass round, none counted. GEICO's chief said in May 2025 that GEICO's workforce had fallen from about 50,000 to about 20,000 over its turnaround — no dates or per-round counts were given, and the period starts before this window, so it cannot be counted as rounds; it is printed here so the limit of the count is visible."),
          n("LIMITATION: Berkshire owns 60+ companies and WARN is state-by-state — there is no single national WARN registry. The finding is stated exactly as \"one mass round found,\" never as \"only one occurred.\""),
          { text: "Sources: GEICO's October 2023 announcement as reported by Insurance Journal, S&P Global, and Insurance Business; Berkshire's FY2022 results release (net loss $22,759M; operating earnings about $30.8B); 10-K FY2025 (2023 buybacks [[$9,171M]]); WARN records as above.", kind: "note", url: BRK_10K, links: [{ text: "$9,171M", url: BRK_10K }] },
        ] },
      ],
      factors: {
        layoff_severity: { status: "scored", note: "Inside Layoff Rule v1.0: one mass round found in the window (Oct 2023 – Oct 2026) — GEICO, announced Oct 19, 2023 (inside the window by five days), roughly 2,000 associates, about 6% of GEICO's workforce → count band 1,000–4,999 → −25; segment share ≥5% → −10. Search-scope limit printed on the card/pack: 60+ subsidiaries and no national WARN registry — the finding is \"one mass round found,\" never \"only one occurred.\" Sub-threshold events documented, never counted: BNSF 362 furloughs (Mar 2024), Forest River WARN 83 + ~160, Johns Manville 100; BNSF 2025 cuts with no headcount stated can neither be counted nor cleared; GEICO's longer arc (~50,000 → ~20,000, no dates or per-round counts, beginning before the window) cannot be converted into window rounds" },
        profitability: { status: "scored", note: "Inside Layoff Rule v1.0, applied exactly as written: at the announcement date the most recent completed fiscal year was FY2022, in which consolidated net earnings attributable were a LOSS of $22,759M (driven by $53,612M of after-tax investment/derivative losses; operating earnings were positive, ~$30.8B). The locked rule has no operating-earnings carve-out, so the round is a loss-year round and, as the only round, its total deduction is halved: (25 + 10) × 0.5 = 17.5. Counterfactual printed on the card: without the halving the pillar would be 65. Flagged for M as a rule-interaction finding; the rule was NOT bent" },
        buybacks: { status: "scored", note: "Inside Layoff Rule v1.0: credits evaluated leg by leg and = 0 — no severance amount disclosed at scale; no 60+ day internal-transfer window disclosed (career-transition help and internal-posting access were offered); and Berkshire repurchased [[$9,171M]] of its own stock in calendar 2023, the announcement year, failing the zero-buyback leg outright. Context: [[$0]] buybacks in FY2025 itself, [[$2,918M]] in 2024", links: [{ text: "$9,171M", url: BRK_10K }, { text: "$0", url: BRK_10K }, { text: "$2,918M", url: BRK_10K }] },
      },
    },
    ceo_pay_ratio: {
      score: 100,
      sentence:
        "Warren Buffett took home [[$389,488]] in 2025 — [[4.2]] times the median worker's pay, the smallest CEO gap of any company scored so far.",
      sentenceLinks: [
        { text: "$389,488", url: BRK_DEF14A },
        { text: "4.2", url: BRK_DEF14A },
      ],
      footnote:
        "Unusual case, printed for honesty: Berkshire's own filed ratio is also [[4.16:1]] — for every other company scored so far, the filed ratio (which counts promised stock) and WeSee's realized ratio differ. Here they match because there is no stock pay to differ over.",
      footnoteLinks: [{ text: "4.16:1", url: BRK_DEF14A }],
      rule: "CEO Pay Rule v2.0, realized pay — what he actually took home",
      blocks: [
        { title: "CEO Pay — 100", lines: [
          { text: "1. Salary", result: "$100,000", kind: "step", url: BRK_DEF14A },
          { text: "2. Bonus actually paid", result: "$0", kind: "step", url: BRK_DEF14A },
          { text: "3. Other pay (personal and home security services)", result: "$289,488", kind: "step", url: BRK_DEF14A },
          { text: "4. Stock he received in 2025 — Berkshire has never used stock in executive pay; no grants exist to vest or be exercised", result: "$0", kind: "step", url: BRK_DEF14A },
          t("= Total actually taken home", "$389,488"),
          { text: "÷ Median worker's pay [[$93,709]] → 4.2× more → on the published scale (20× or less = 100)", result: "100", kind: "total", url: BRK_DEF14A, links: [{ text: "$93,709", url: BRK_DEF14A }] },
          { text: "The CEO scored is Warren Buffett, CEO for all of fiscal 2025. Greg Abel became CEO on January 1, 2026; Buffett remains Chairman. Abel's own 2025 pay ([[$22,017,500]], as a vice chairman) is in the evidence pack as context only.", kind: "note", url: BRK_DEF14A, links: [{ text: "$22,017,500", url: BRK_DEF14A }] },
          { text: "Unusual case, printed for honesty: Berkshire's own filed ratio is also [[4.16:1]] — for every other company scored so far, the filed ratio (which counts promised stock) and WeSee's realized ratio differ. Here they match because there is no stock pay to differ over.", kind: "note", url: BRK_DEF14A, links: [{ text: "4.16:1", url: BRK_DEF14A }] },
          n("Methodology note: this pillar is scored on CEO Pay Rule v2.0 (locked 2026-10-20). Under v2.0's recalibrated top end, 4.2× still scores 100 — no change for Berkshire."),
          { text: "Context (never scored): Buffett reimbursed Berkshire [[$50,000]] for personal items in 2025.", kind: "note", url: BRK_DEF14A, links: [{ text: "$50,000", url: BRK_DEF14A }] },
          n("Source: DEF 14A 2026, Summary Compensation Table and CEO Pay Ratio section. (The median worker's pay is Berkshire's worldwide median — see the Worker Standards note.)"),
        ] },
      ],
      factors: {
        ceo_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (realized pay [[$389,488]] — salary [[$100,000]] + bonus [[$0]] + all other [[$289,488]] (personal and home security services) + [[$0]] stock vested + [[$0]] options exercised. Berkshire's stated policy is that it does not use equity in executive compensation; the proxy contains no stock-vested or option-exercise table for any executive — there is nothing to add, and no grant-date promise exists to strip out. Buffett also reimbursed Berkshire [[$50,000]] for personal items in 2025 — context only, reimbursements are not pay and are not netted). The CEO scored is Warren E. Buffett, CEO throughout FY2025; Greg Abel became CEO Jan 1, 2026 (Buffett remains Chairman) — Abel's FY2025 pay as a vice chairman ([[$22,017,500]]) is context only in the pack", links: [{ text: "$389,488", url: BRK_DEF14A }, { text: "$100,000", url: BRK_DEF14A }, { text: "$0", url: BRK_DEF14A }, { text: "$289,488", url: BRK_DEF14A }, { text: "$50,000", url: BRK_DEF14A }, { text: "$22,017,500", url: BRK_DEF14A }] },
        median_worker_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (worldwide median [[$93,709]], hierarchy step (c), flagged, with the sample/2023-identification caveats in the Worker Standards note → [[4.16:1]] → 100 on the scale's ≤20:1 = 100 anchor). Unusual case printed on the card: Berkshire's own filed ratio is also 4.16:1 — it EQUALs the WeSee realized ratio because there is no equity pay for the two methods to differ over; for every other built company they differ", links: [{ text: "$93,709", url: BRK_DEF14A }, { text: "4.16:1", url: BRK_DEF14A }] },
      },
    },
    outsourcing_exposure: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "No proven case of U.S. work moved abroad was found in the records searched — but the full search protocol is not complete for a company with 60+ subsidiaries, so no score is claimed yet.",
      footnote:
        "Exposure (printed, never scored): the share of Berkshire's work done by outside contractors is not disclosed. Running businesses abroad is not a moved U.S. job and is never scored as one.",
      rule: "Outsourcing + Production Abroad Rule v1.0",
      blocks: [
        { title: "Jobs Moved Abroad — Not yet measured by WeSee", lines: [
          n("Findings so far: proven U.S. jobs moved abroad in the last 3 years (company statements, federal trade-adjustment records, WARN pairing) → none found."),
          n("No score is claimed: the locked rule activates a company's score only when its full §8 search protocol is completed and logged, and for a company with 60+ subsidiaries that protocol is not yet complete (the federal petition database could not be fully pulled and the subsidiary sweep has not been run; see the evidence pack). An earlier version of this card printed a provisional 100 here; the locked rule does not score a company on an unfinished search, so the provisional is withdrawn, not carried."),
          n("One structural limit applies to every company: the federal program that certified moved jobs stopped taking new cases on July 1, 2022, so recent moves can only be proven from company statements and filings."),
          n("Pattern history (printed, never scored — outside the 3-year window): in 2010 the U.S. Department of Labor certified that Johns Manville — a Berkshire company since 2001 — had moved production of polyester non-woven fabric from Spartanburg, South Carolina to China, and that the move contributed to workers losing their jobs there (Federal Register Doc. 2010-18186). It is printed because it is the verified record, and it is not scored because the rule's window is three years."),
          n("Exposure (printed, never scored): the share of Berkshire's work done by outside contractors is not disclosed. Running businesses abroad is not a moved U.S. job and is never scored as one."),
        ] },
      ],
      factors: {
        offshore_workforce: { status: "not_disclosed", note: "No offshore-workforce share as such is filed. Berkshire files an approximate U.S./foreign employment split (~[[80%]] U.S.) — a foreign workforce serving foreign operations (e.g. Iscar in Israel) is not an offshore/outsourced share, and operating abroad is not itself a moved U.S. job (same basis as the Microsoft map)", links: [{ text: "80%", url: BRK_10K }] },
        outsourced_services: { status: "not_disclosed", note: "Vendor/offshore services spend is not published. Exposure line printed on the card, never scored: contractor share of work — not disclosed" },
      },
    },
    community_resilience: {
      score: null, status: "Not yet measurable",
      sentence:
        "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Berkshire's coverage.",
      footnote: "No filed or public company-level source exists for any company. No number is estimated.",
      factors: {
        local_investment: { status: "not_measurable", note: "No company-level source exists for any company" },
        community_programs: { status: "not_measurable", note: "Program spend is self-reported marketing material, not a filing" },
      },
    },
    production_abroad: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "No proven case of U.S. production moved abroad was found in the records searched. Same protocol status as Jobs Moved Abroad.",
      footnote:
        "Exposure (printed, never scored): the share of what Berkshire's companies sell that is made in the United States is not disclosed.",
      rule: "Outsourcing + Production Abroad Rule v1.0",
      blocks: [
        { title: "Production Moved Abroad — Not yet measured by WeSee", lines: [
          n("Findings so far: proven U.S. production moved abroad in the last 3 years → none found."),
          n("Same protocol status and same 2010 Johns Manville pattern history as Jobs Moved Abroad (above) — the two pillars share the harm record and are scored separately under the locked rule once the protocol completes. The provisional 100 printed at the original build is withdrawn for the same reason."),
          n("Exposure (printed, never scored): the share of what Berkshire's companies sell that is made in the United States is not disclosed."),
        ] },
      ],
      factors: {
        domestic_production: { status: "not_measurable", note: "Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for Berkshire the §8 protocol is incomplete, same as Jobs Moved Abroad above, and no proven in-window move was located; the 2010 Johns Manville certification is the shared pattern history, printed and never scored)" },
        imported_goods: { status: "not_measurable", note: "USITC counts category imports, not a company's imports. Exposure line printed on the card, never scored: U.S.-made share of goods sold — not disclosed" },
      },
    },
    lobbying_activity: {
      score: 32,
      sentence:
        "Its subsidiaries spent [[$8.7M]] lobbying the federal government in 2025, and its family of employee PACs spent $3.2M in the 2024 election cycle.",
      sentenceLinks: [{ text: "$8.7M", url: BRK_OPENSECRETS }],
      footnote:
        "Limitation printed with the score: federal lobbying and federal PACs only — state lobbying and trade-group spending are not counted. Who received the money is never scored.",
      rule: "Lobbying Rule v1.1 — lobbying year plus PAC cycle, added, scored once",
      blocks: [
        { title: "Lobbying — 32", lines: [
          { text: "1. Federal lobbying in 2025 (subsidiaries combined; the parent itself reported $0)", result: "$8,684,000", kind: "step", url: BRK_OPENSECRETS },
          { text: "BNSF Railway [[$3,050,000]] · Charter Brokerage [[$1,490,000]] · Berkshire Hathaway Energy [[$1,100,000]] · Pilot Flying J [[$850,000]] · GEICO [[$560,000]] · the rest under $400,000 each — full list in the evidence pack; the parts add up to the total exactly.", kind: "note", url: BRK_OPENSECRETS, links: [{ text: "$3,050,000", url: BRK_OPENSECRETS }, { text: "$1,490,000", url: BRK_OPENSECRETS }, { text: "$1,100,000", url: BRK_OPENSECRETS }, { text: "$850,000", url: BRK_OPENSECRETS }, { text: "$560,000", url: BRK_OPENSECRETS }] },
          { text: "Remaining subsidiary filers: FlightSafety [[$390,000]] · Lubrizol [[$380,000]] · NetJets [[$290,000]] · NV Energy [[$160,000]] · Precision Castparts [[$120,000]] · Shaw Industries [[$120,000]] · McLane [[$60,000]] · MidAmerican Energy [[$40,000]] · Titanium Metals [[$40,000]] · UTLX [[$34,000]] · Oriental Trading [[$0]].", kind: "note", url: BRK_OPENSECRETS, links: [{ text: "$390,000", url: BRK_OPENSECRETS }, { text: "$380,000", url: BRK_OPENSECRETS }, { text: "$290,000", url: BRK_OPENSECRETS }, { text: "$160,000", url: BRK_OPENSECRETS }, { text: "$120,000", url: BRK_OPENSECRETS }, { text: "$60,000", url: BRK_OPENSECRETS }, { text: "$40,000", url: BRK_OPENSECRETS }, { text: "$34,000", url: BRK_OPENSECRETS }, { text: "$0", url: BRK_OPENSECRETS }] },
          s("2. Employee PAC spending, 2024 election cycle (10 Berkshire-family PACs, FEC records)", "$3,180,867"),
          n("The largest is BNSF Railway's RAILPAC at $2,163,780. PACs of companies Berkshire only holds stock in (like Apple) are not Berkshire's and are not counted; one independent committee using the Berkshire name is not the company's and is not counted."),
          t("= Added together (the rule adds them — it never averages them)", "$11,864,867"),
          t("→ On the published scale ($10M = 35 · $20M = 20)", "32"),
          n("Verification note, kept with the score: the OpenSecrets page for 2025 was read through its search-rendered copy after a direct visit was blocked by the site's bot check; the subsidiary parts summing exactly to the headline total is the consistency check, and a direct re-read is queued. The PAC total rests on a documented FEC search of every committee connected to Berkshire or a subsidiary — with 60+ subsidiaries, a small PAC filed under an unmatched name cannot be ruled out."),
          n("Limitation printed with the score: federal lobbying and federal PACs only — state lobbying and trade-group spending are not counted. Who received the money is never scored."),
          n("Sources: OpenSecrets client summary, Berkshire Hathaway (id D000021757), cycle 2025; FEC committee records for the 10 PACs (ids in the evidence pack)."),
        ] },
      ],
      factors: {
        lobbying_spend: { status: "scored", note: "Lobbying Rule v1.1: [[$8,684,000]] federal lobbying, calendar 2025 (OpenSecrets client summary, Berkshire Hathaway, id D000021757). The parent itself reported $0; the total is the sum of subsidiary filers and the components sum EXACTLY to the headline: BNSF Railway [[$3,050,000]] · Charter Brokerage [[$1,490,000]] · Berkshire Hathaway Energy [[$1,100,000]] · Pilot Flying J [[$850,000]] · GEICO [[$560,000]] · FlightSafety [[$390,000]] · Lubrizol [[$380,000]] · NetJets [[$290,000]] · NV Energy [[$160,000]] · Precision Castparts [[$120,000]] · Shaw Industries [[$120,000]] · McLane [[$60,000]] · MidAmerican Energy [[$40,000]] · Titanium Metals [[$40,000]] · UTLX [[$34,000]] · Oriental Trading [[$0]]. Verification note kept with the record (same situation as Costco's 2025 page): a direct fetch was Cloudflare-blocked in the build run; the figures were read from the search-rendered copy of this exact URL, the exact component sum is the internal consistency check, and a direct re-read is queued in the freshness sweep", links: [{ text: "$8,684,000", url: BRK_OPENSECRETS }, { text: "$3,050,000", url: BRK_OPENSECRETS }, { text: "$1,490,000", url: BRK_OPENSECRETS }, { text: "$1,100,000", url: BRK_OPENSECRETS }, { text: "$850,000", url: BRK_OPENSECRETS }, { text: "$560,000", url: BRK_OPENSECRETS }, { text: "$390,000", url: BRK_OPENSECRETS }, { text: "$380,000", url: BRK_OPENSECRETS }, { text: "$290,000", url: BRK_OPENSECRETS }, { text: "$160,000", url: BRK_OPENSECRETS }, { text: "$120,000", url: BRK_OPENSECRETS }, { text: "$60,000", url: BRK_OPENSECRETS }, { text: "$40,000", url: BRK_OPENSECRETS }, { text: "$34,000", url: BRK_OPENSECRETS }, { text: "$0", url: BRK_OPENSECRETS }] },
        political_contributions: { status: "scored", note: "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Berkshire has no single parent PAC; the family total is every federal PAC whose connected organization is Berkshire Hathaway or a wholly-owned operating subsidiary — 10 committees with activity in 2023–24, totalling $3,180,867 ($3,180,866.57): BNSF Railway RAILPAC C00235739 $2,163,779.95 · Berkshire Hathaway Energy PAC C00324483 $423,303.80 · NetJets Inc. PAC C00481309 $306,512.70 · MidAmerican Energy PAC C00081273 $158,224.06 · NV Energy PAC C00153379 $44,061.79 · PacifiCorp PAC C00082800 $42,748.00 · Lubrizol Employees PAC C00865667 $25,236.27 · McLane Federal PAC C00215558 $10,500.00 · GEICO PAC (filed under its full legal name, Government Employees Insurance Company PAC) C00343749 $6,500.00 · Acme Brick Good Government Fund C00424010 $0.00. Cross-check: OpenSecrets' PAC summary for Berkshire Hathaway Energy reports Total Spent 2023–2024 of $423,304 — matches the FEC figure to rounding. EXCLUDED, printed in the pack: \"Berkshire Brigades PAC\" (C00827261), an independent committee not connected to the company, and PACs of companies Berkshire merely holds stock in (investments, not subsidiaries). Residual scope risk printed: with 60+ subsidiaries, a small PAC filed under an unmatched name cannot be ruled out — the total is the verified sum of the documented search, stated that way. As scored: $8,684,000 + $3,180,867 = $11,864,867 → 32. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple/Walmart/Meta maps" },
      },
    },
  },
  sources: [
    { label: "Form 10-K FY2025 (filed 2026-03-02, accession 0001193125-26-083899)", url: BRK_10K },
    { label: "DEF 14A 2026 (filed 2026-03-13, accession 0001193125-26-106253)", url: BRK_DEF14A },
    { label: "OpenSecrets — Berkshire Hathaway, federal lobbying client summary (id D000021757), cycle 2025", url: BRK_OPENSECRETS },
    { label: "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025 (printed fact, not scored)", url: GAO_PDF },
    { label: "FEC committee master file and committee totals, 2024 cycle (10 PACs, ids in the evidence pack)." },
    { label: "Berkshire Hathaway FY2022 results release (Business Wire, 2023-02-25) — FY2022 net loss attributable $22,759M (Layoff Rule profit context)." },
    { label: "GEICO announcement, October 19, 2023, as reported by Insurance Journal (2023-10-20), S&P Global Market Intelligence, Insurance Business." },
    { label: "Federal Register Doc. 2010-18186 — Johns Manville TAA certification (pattern history, printed, not scored)." },
    { label: "MIT Living Wage Calculator — national benchmark: average of all 50 state pages: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md)." },
    { label: "State WARN notices (IN / CA indexes) and national WARN trackers; announcements and trade press for major subsidiaries — one mass round found, Oct 2023 – Oct 2026." },
  ],
  rules:
    "Methodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.3 · Score Bands v1.0 · Weights Defense v1.0 · Show-Your-Work Spec v1.0 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0",
};
