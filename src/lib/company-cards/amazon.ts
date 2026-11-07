// Amazon (AMZN) — verbatim data from AMAZON_COMPANY_CARD.md BUILD FILE v1.0
// (Methodology v1.0, period FY2025, scoring date 2026-10-09). Data only — no
// number on this card is generated or estimated.

import type { PillarKey } from "@/lib/score";
import { COSTCO_CARD } from "./costco";
import { APPLE_CARD } from "./apple";
import { WALMART_CARD } from "./walmart";
import { META_CARD } from "./meta";
import { MICROSOFT_CARD } from "./microsoft";
import { ALPHABET_CARD } from "./alphabet";
import { NVIDIA_CARD } from "./nvidia";
import { BERKSHIRE_CARD } from "./berkshire";
import { JPMORGAN_CARD } from "./jpmorgan";

export type FactorStatus = "scored" | "not_disclosed" | "not_measurable" | "decision" | "disclosed_not_scored" | "disclosed_in_part" | "removed_by_m";

export const FACTOR_STATUS_LABEL: Record<FactorStatus, string> = {
  scored: "Scored",
  not_disclosed: "Not disclosed by the company",
  not_measurable: "Not yet measurable",
  decision: "Measurable — awaiting methodology decision",
  disclosed_not_scored: "DISCLOSED, NOT SCORED",
  disclosed_in_part: "DISCLOSED IN PART",
  removed_by_m: "REMOVED BY M",
};

export type StepLine = {
  text: string; result?: string; kind?: "step" | "total" | "check" | "note";
  url?: string; // exact source page for this line's number/input; rendered on the result badge
  links?: LinkRef[]; // exact source pages for numbers inside `text`, wrapped as [[...]]
};
export type StepBlock = { title: string; lines: StepLine[] };

// A reference hyperlink ON a stat: `text` is the exact marker text (inside [[...]] in the
// source string, or the stat itself) and `url` is its exact source page. Never invented.
export type LinkRef = { text: string; url: string };

export interface CardPillar {
  score: number | null;
  status?: string;            // shown instead of a number when score is null
  sentence: string;
  footnote?: string;
  rule?: string;
  blocks?: StepBlock[];
  factors: Record<string, { status: FactorStatus; note: string; links?: LinkRef[] }>;
  sentenceLinks?: LinkRef[];  // sources for numbers inside `sentence`, wrapped as [[...]]
  footnoteLinks?: LinkRef[];  // sources for numbers inside `footnote`, wrapped as [[...]]
}

export interface CompanyCard {
  overall: number;
  band: string;
  coverage: string;
  period: string;
  overallBlock: StepBlock;
  pillars: Record<PillarKey, CardPillar>;
  sources: { label: string; url?: string }[];
  rules: string;
}

const s = (text: string, result?: string): StepLine => ({ text, result, kind: "step" });
const t = (text: string, result?: string): StepLine => ({ text, result, kind: "total" });
const c = (text: string): StepLine => ({ text, kind: "check" });
const n = (text: string): StepLine => ({ text, kind: "note" });

export const AMAZON_CARD: CompanyCard = {
  overall: 49,
  band: "Weak",
  coverage:
    "7 of 7 ready pillars scored. On the scored pillars Amazon averages 51 before caps; because its layoff pillar is below 20 with cuts made in profitable years, the layoff rule caps the overall at 49. U.S. Workforce Commitment is not counted in coverage for any company (Not yet measured by WeSee — Class W); Community Resilience is not yet measurable for any company.",
  period: "Period scored: FY2025 · Scoring date: 2026-10-09 · Updated 2026-10-22 · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      s("1. Worker Standards: 62 × weight 16", "992"),
      s("2. Local Economic Contribution: 51 × weight 14", "714"),
      s("3. Layoffs: 10 × weight 12", "120"),
      s("4. CEO Pay: 14 × weight 10", "140"),
      s("5. Jobs Moved Abroad: 100 × weight 10", "1,000"),
      s("6. Production Moved Abroad: 100 × weight 8", "800"),
      s("7. Lobbying: 20 × weight 7", "140"),
      t("= Add them up, divide by the total weight (77): 3,906 ÷ 77", "51 before caps"),
      c("✓ Layoff cap checked: the layoff pillar is 10 — below 20 — and the cuts were made in profitable years, so the score may not pass 49 → Overall 49 — Weak, capped by the layoff rule"),
      c("✓ Coverage cap checked: 7 of 7 ready pillars are scored (100%), so no coverage cap applies."),
      c("✓ Equal weights give 51 before caps → 49 after the same layoff cap. Published next to the score, as the Weights Defense requires."),
      n("(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2. U.S. Workforce Commitment is Class W: excluded from coverage for every company; Amazon files no U.S. split in any case.)"),
    ],
  },
  pillars: {
    worker_standards: {
      score: 62,
      sentence:
        "Its typical full-time worker in the U.S. earns [[$53,211]] a year — above the cost of living ($49,246), but below what the typical U.S. worker makes ($62,608).",
      sentenceLinks: [
        { text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
      ],
      footnote: "Scored on pay, the only factor in this pillar verifiable from filings.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        { title: "QUESTION 1 — Can the worker live on the pay?", lines: [
          { ...s("[[$53,211]] (worker earns) → $49,246 (worker needs to live on) → $1.08 earned per $1 needed", "score 76"), links: [{ text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        ] },
        { title: "QUESTION 2 — Is it what other Americans make?", lines: [
          { ...s("[[$53,211]] (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 0.85", "score 35"), links: [{ text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        ] },
        { title: "QUESTION 3 — How is the money split?", lines: [
          { ...s("[[$77.7B]] (Amazon's profit for the whole year) ÷ [[1,576,000]] (workers) = $49,283 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)"), links: [{ text: "$77.7B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "1,576,000", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
          { ...s("[[$53,211]] (worker gets) + $49,283 (company keeps per worker) → worker's share 52%", "score 74"), links: [{ text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        ] },
        { title: "FINAL LINE", lines: [
          t("76 + 35 + 74 → ÷ 3", "62"),
          c("Dignity gate: not triggered — pay is above the national living wage."),
          { ...n("Sources: DEF 14A 2026 pay-ratio section; MIT Living Wage; 10-K FY2025 (net income [[$77,670M]]; [[1,576,000]] employees)."), links: [{ text: "$77,670M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "1,576,000", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        ] },
        { title: "PRINTED FACT — NOT SCORED (U.S. GAO, report GAO-26-108703)", lines: [
          { ...n("\"In the 11 states that report this, [[12,346]] of Amazon's workers received food stamps (SNAP) and [[11,338]] were on Medicaid (U.S. GAO, report GAO-26-108703, snapshot September 2025). No national count exists.\""), links: [{ text: "12,346", url: "https://www.gao.gov/assets/890/888620.pdf" }, { text: "11,338", url: "https://www.gao.gov/assets/890/888620.pdf" }] },
          n("Printed as a government-counted fact with its limit attached; never enters any score (counts measure company size as much as pay, the 11 states are not a national sample, and eligibility is household-based)."),
        ] },
      ],
      factors: {
        living_wage: { status: "scored", note: "Became the Worker Pay Fairness Rule v1.3 (three questions: floor + typical-pay + sharing): Amazon 62" },
        benefits: { status: "not_disclosed", note: "No filing gives comparable healthcare/match/leave/PTO numbers" },
        workplace_safety: { status: "not_disclosed", note: "OSHA publishes per-establishment data, no company-wide filed rate" },
        employee_retention: { status: "not_disclosed", note: "Turnover is not disclosed in the 10-K or proxy" },
      },
    },
    us_workforce_commitment: {
      score: null, status: "Not yet measured by WeSee",
      sentence: "Amazon reports [[1.58 million]] workers worldwide but does not disclose how many are in the United States.",
      sentenceLinks: [
        { text: "1.58 million", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
      ],
      footnote: "10-K discloses only the worldwide total ([[1,576,000]]), no U.S. split.",
      footnoteLinks: [
        { text: "1,576,000", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
      ],
      rule: "U.S. Workforce Rule v1.2 (Class W — counts in no company's coverage)",
      blocks: [
        { title: "PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5)", lines: [
          n("USCIS approved 16,892 H-1B petitions for Amazon in FY2025 — 3,687 initial + 13,205 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year."),
          { ...n("The count sums the [[nine]] subsidiaries on Amazon's Form 10-K Exhibit 21.1 — Amazon.com Services LLC · Amazon Web Services, Inc. · Amazon Data Services, Inc. · Amazon Technologies, Inc. · Amazon.com Sales, Inc. · Amazon.com NV Investment Holdings LLC · Amazon US Services LLC · A100 ROW, Inc. · Day One Insurance, Inc."), links: [{ text: "nine", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231xex211.htm" }] },
          n("Three of the nine had FY2025 Hub rows: Services LLC 3,003 initial + 10,262 continuing (both Hub punctuation variants summed) + Web Services 511 + 2,390 + Data Services 173 + 553 = 3,687 initial + 13,205 continuing; Technologies is a Hub name with no FY2025 rows, and the other five do not appear as Hub names."),
          n("Methodology note: Amazon-family petitioners NOT on the filed exhibit — Amazon Development Center U S Inc, Audible, Twitch, and Whole Foods — had 2,173 approvals counted in the sweep, and they are NOT in the 16,892: Clause 2 sums the filed list only, and WeSee takes the filing as published. Counting them would take a rule change, not a correction."),
        ] },
      ],
      factors: {
        full_time_employment: { status: "not_disclosed", note: "Amazon reports [[1,576,000]] worldwide only — no U.S. full-time count", links: [{ text: "1,576,000", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        domestic_hiring: { status: "not_disclosed", note: "Needs a U.S. headcount history; none is published" },
        training_investment: { status: "removed_by_m", note: "Removed from the design by M 2026-10-14 — no longer measured for any company (cleanup C6)" },
        contractor_dependence: { status: "not_disclosed", note: "Contractor headcount is not published" },
        h1b_intensity: { status: "disclosed_not_scored", note: "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: 3,687 initial + 13,205 continuing = 16,892 approvals, summed over Amazon's Exhibit 21 Schedule (9 significant subsidiaries, PETITIONER_NAME_SCHEDULE_AMAZON.md — Schedule completed 2026-10-22). The factor scores only where a U.S. headcount is filed (Clause 5); Amazon files none, so the count prints on the card (Clause 5 line) and the factor does not score" },
      },
    },
    local_economic: {
      score: 51,
      sentence: "It pays a U.S. tax provision of [[$15.4B]] on [[$89.5B]] of U.S. earnings ([[17.2%]]) — the only factor in this pillar it files in comparable form.",
      sentenceLinks: [
        { text: "$15.4B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
        { text: "$89.5B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
        { text: "17.2%", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
      ],
      footnote: "Scored on 1 of 4 factors.",
      rule: "Local Economic Contribution Rule v1.0; scored on 1 of 4 factors",
      blocks: [{ title: "Local Economic Contribution — 51", lines: [
        { ...s("TAXES: [[$12,354M]] (U.S. federal provision) + [[$3,051M]] (U.S. state provision) → [[$15,405M]] ÷ [[$89,537M]] (U.S. pre-tax income) → [[17.2%]] → on the published scale (17% = 50 · 21% = 70)", "51"), links: [{ text: "$12,354M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "$3,051M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "$15,405M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "$89,537M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "17.2%", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        { ...n("The other factors are NOT DISCLOSED: Domestic Investment (capex of [[$128,320M]] is filed globally only, no U.S. split), Domestic Suppliers, U.S. R&D."), links: [{ text: "$128,320M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        { ...n("($0 buybacks 2023–2025 verified, shown as context in the Layoffs section.)"), links: [{ text: "$0", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        n("Source: 10-K FY2025, Note 9."),
      ] }],
      factors: {
        domestic_investment: { status: "not_disclosed", note: "Capex is published worldwide only ([[$128,320M]]); no U.S. split", links: [{ text: "$128,320M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        domestic_suppliers: { status: "not_disclosed", note: "U.S. procurement share is not published" },
        us_rd: { status: "not_disclosed", note: "R&D geography is not published" },
        taxes: { status: "scored", note: "Finding F-2 (2026-10-14 evidence build): Amazon DOES file a U.S./foreign tax split (10-K FY2025, Note 8). U.S. tax provision (federal + state) [[$15,405M]] ÷ U.S. pre-tax income [[$89,537M]] → [[17.2%]] → factor 51 under Local Economic Contribution Rule v1.0 (locked 2026-10-20). Subsidies (Good Jobs First, [[~$15.2B]] cumulative) stay context only under the locked rule (decision D-6)", links: [{ text: "$15,405M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "$89,537M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "17.2%", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "~$15.2B", url: "https://goodjobsfirst.org/corporate-subsidies-medicaid-snap-double-subsidy/" }] },
      },
    },
    layoffs_high_profits: {
      score: 10,
      sentence: "It cut about 30,000 corporate jobs in three months while earning a record [[$77.7B]] profit — after cutting 27,000+ in 2022–23.",
      sentenceLinks: [
        { text: "$77.7B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
      ],
      rule: "Layoff Rule v1.0",
      blocks: [{ title: "Layoffs — 10", lines: [
        s("● Start", "100"),
        s("− 30,000 jobs cut (Oct 2025 + Jan 2026)", "−75"),
        s("− That is 10% of the whole corporate staff", "−15"),
        s("− Two separate rounds of cuts", "−10"),
        s("+ Credit: $2.7B severance paid, 90 days to find an internal job, no stock buybacks", "+10"),
        t("=", "10"),
        { ...n("The cuts happened in profitable years ([[$59.2B]] in 2024, record [[$77.7B]] in 2025), so no discount."), links: [{ text: "$59.2B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "$77.7B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        n("The 27,000+ cut in 2022–23 is older than the 3-year window and is not counted."),
        n("Sources: company announcements; WA WARN notice 2025-10-28 (2,303 WA employees — a state slice used to verify, never presented as the national count); 10-K FY2025."),
      ] }],
      factors: {
        layoff_severity: { status: "scored", note: "Inside Layoff Rule v1.0 (count + segment share)" },
        profitability: { status: "scored", note: "Inside Layoff Rule v1.0 (profitable-year test: [[$59.2B]] / [[$77.7B]])", links: [{ text: "$59.2B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }, { text: "$77.7B", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
        buybacks: { status: "scored", note: "Inside Layoff Rule v1.0 (credit: [[$0]] buybacks 2023-2025)", links: [{ text: "$0", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" }] },
      },
    },
    ceo_pay_ratio: {
      score: 14,
      sentence: "Its CEO actually took home [[$45.3M]] in 2025 — [[851]] times the typical U.S. worker's [[$53,211]].",
      sentenceLinks: [
        { text: "$45.3M", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
        { text: "851", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
        { text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
      ],
      rule: "CEO Pay Rule v2.0, realized pay — what he actually took home; Amazon's 851:1 sits in the 500–1,000 segment, which v2.0 left unchanged, so the score is identical under v1.1 and v2.0",
      blocks: [{ title: "CEO Pay — 14", lines: [
        { ...s("1. Salary", "$365,000"), url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
        { ...s("2. Other pay (mostly security)", "$1,704,861"), url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
        { ...s("3. Stock he received in 2025", "$43,235,494"), url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
        { ...t("= Total actually taken home", "$45,305,355"), url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
        { ...t("÷ Typical U.S. worker's pay [[$53,211]] → [[851×]] more → on the published scale (500× = 25 · 1,000× = 10)", "14"), url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm", links: [{ text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }, { text: "851×", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        { ...n("On paper Amazon reports [[51:1]] — it counts stock in the year promised, and none was promised in 2025."), links: [{ text: "51:1", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        { ...n("Against the worldwide median ([[$40,206]]) the same pay is 1,127× — footnote only; the headline uses the U.S. worker."), links: [{ text: "$40,206", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        n("Source: DEF 14A 2026, pp.56, 58, 68."),
      ] }],
      factors: {
        ceo_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (realized pay [[$45,305,355]])", links: [{ text: "$45,305,355", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
        median_worker_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (U.S. FT median [[$53,211]] → [[851:1]] → 14; the 851:1 segment is unchanged in v2.0)", links: [{ text: "$53,211", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }, { text: "851:1", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" }] },
      },
    },
    outsourcing_exposure: {
      score: 100,
      sentence: "Searched DOL TAA, SEC filings, WARN and company announcements on 2026-10-14: 0 proven cases of Amazon moving U.S. work abroad were found.",
      footnote: "Exposure, printed never scored: Amazon does not disclose how much of its work is done by contractors and outside firms.",
      rule: "Outsourcing + Production Abroad Rule v1.0",
      blocks: [{ title: "Jobs Moved Abroad — 100", lines: [
        s("● Start", "100"),
        s("− Proven move events in the window (Oct 2023 – Oct 2026) → none found", "−0"),
        t("=", "100"),
        n("The search (protocol S-1–S-5, completed and logged 2026-10-14 — HARM_EVIDENCE_SEARCH_LOG_2026-10-14.md): DOL TAA determinations, SEC filing sweep, WARN pairing, announcement sweep. The one TAA record that exists — a 2010 Seattle petition claiming work was outsourced to India and China — was investigated by the Department of Labor and DENIED (TA-W-73,764): a tested allegation, printed here, never scored. Gaps on record in the log: G-b (the bulk DOL petitions file was not parsed). Exposure (printed, never scored): contractor share not disclosed by the company."),
      ] }],
      factors: {
        offshore_workforce: { status: "not_disclosed", note: "Non-U.S. headcount split is not published — exposure line inside the locked harm pillar (printed, never scored)" },
        outsourced_services: { status: "not_disclosed", note: "Vendor/offshore services spend is not published" },
        proven_moves: { status: "scored", note: "Outsourcing + Production Abroad Rule v1.0 (locked 2026-10-20): Amazon's §8 protocol completed and logged 2026-10-14 → 0 proven events → Jobs Moved Abroad 100" },
      },
    },
    community_resilience: {
      score: null, status: "Not yet measurable",
      sentence: "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Amazon's coverage.",
      footnote: "No filed or public company-level source exists for any company. No number is estimated.",
      factors: {
        local_investment: { status: "not_measurable", note: "No company-level source exists for any company" },
        community_programs: { status: "not_measurable", note: "Program spend is self-reported marketing material, not a filing" },
      },
    },
    production_abroad: {
      score: 100,
      sentence: "Same search, production chain: 0 proven cases of U.S. production moved abroad were found.",
      footnote: "Exposure, printed never scored: Amazon does not disclose how much of what it sells is made in the United States.",
      rule: "Outsourcing + Production Abroad Rule v1.0",
      blocks: [{ title: "Production Moved Abroad — 100", lines: [
        s("● Start", "100"),
        s("− Proven U.S. production moves in the window → none found", "−0"),
        t("=", "100"),
        n("Same search, production chain. Exposure (printed, never scored): Amazon does not disclose how much of what it sells is made in the United States; import data stays out of scoring entirely."),
      ] }],
      factors: {
        domestic_production: { status: "not_measurable", note: "Census/USITC count category units, not a company's units — the U.S.-made share is the locked rule's exposure line (printed, never scored)" },
        imported_goods: { status: "not_measurable", note: "USITC counts category imports, not a company's imports" },
        proven_moves: { status: "scored", note: "Same §8 protocol, production chain → 0 proven events → Production Moved Abroad 100" },
      },
    },
    lobbying_activity: {
      score: 20,
      sentence: "It spent [[$18.9M]] lobbying the federal government in 2025 — among the largest totals of any company in America.",
      sentenceLinks: [
        { text: "$18.9M", url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000023883" },
      ],
      rule: "Lobbying Rule v1.1 — lobbying + PAC, added on the same scale",
      blocks: [{ title: "Lobbying — 20", lines: [
        { ...s("1. Spent lobbying the federal government in 2025", "$18,865,000"), url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000023883" },
        s("2. Its PAC spent in the last completed election cycle (2023–24)", "$1,461,053"),
        t("= Total political spending", "$20,326,053"),
        t("→ On the published scale ($20M = 20 · $50M = 10)", "20"),
        n("Limitation printed with the score: federal lobbying + federal PAC only — state lobbying and trade-group spending are not counted."),
        n("Sources: OpenSecrets client summary, Amazon.com Inc, cycle 2025; FEC committee C00360354 (2023–24 cycle totals)."),
      ] }],
      factors: {
        lobbying_spend: { status: "scored", note: "Lobbying Rule v1.1: [[$18,865,000]] lobbying + $1,461,053 PAC = $20,326,053 → 20", links: [{ text: "$18,865,000", url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000023883" }] },
        political_contributions: { status: "scored", note: "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged (averaging cushioned). The old 65/35 in-pillar split is superseded. Amazon PAC 2023–24: $1,461,053 (FEC C00360354)." },
      },
    },
  },
  sources: [
    { label: "DEF 14A 2026 (filed 2026-04-09, accession 0001104659-26-041026)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
    { label: "Form 10-K FY2025 (accession 0001018724-26-000004)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
    { label: "Form 10-K FY2025, Exhibit 21.1 — List of Significant Subsidiaries (9 subsidiaries, as filed)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231xex211.htm" },
    { label: "USCIS H-1B Employer Data Hub, FY2025 employer file (read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md)" },
    { label: "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025 (printed fact, not scored)", url: "https://www.gao.gov/assets/890/888620.pdf" },
    { label: "OpenSecrets — Amazon.com Inc, federal lobbying summary, cycle 2025", url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000023883" },
    { label: "MIT Living Wage Calculator — King County, WA (context only)", url: "https://livingwage.mit.edu/counties/53033" },
    { label: "Washington State WARN notices (Employment Security Department) — Amazon notice 2025-10-28" },
  ],
  rules:
    "Methodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.2 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0 · Weights Defense v1.0 · Show-Your-Work Spec v1.0",
};

export const COMPANY_CARDS: Record<string, CompanyCard> = {
  "amazon-com": AMAZON_CARD,
  "costco-com": COSTCO_CARD,
  "apple-com": APPLE_CARD,
  "walmart-com": WALMART_CARD,
  "meta-com": META_CARD,
  "microsoft-com": MICROSOFT_CARD,
  "alphabet-com": ALPHABET_CARD,
  "nvidia-com": NVIDIA_CARD,
  "berkshire-com": BERKSHIRE_CARD,
  "jpmorgan-com": JPMORGAN_CARD,
};
