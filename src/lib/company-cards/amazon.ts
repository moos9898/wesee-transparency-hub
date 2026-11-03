// Amazon (AMZN) — verbatim data from AMAZON_COMPANY_CARD.md BUILD FILE v1.0
// (Methodology v1.0, period FY2025, scoring date 2026-10-09). Data only — no
// number on this card is generated or estimated.

import type { PillarKey } from "@/lib/score";
import { COSTCO_CARD } from "./costco";
import { APPLE_CARD } from "./apple";

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

export type StepLine = { text: string; result?: string; kind?: "step" | "total" | "check" | "note" };
export type StepBlock = { title: string; lines: StepLine[] };

export interface CardPillar {
  score: number | null;
  status?: string;            // shown instead of a number when score is null
  sentence: string;
  footnote?: string;
  rule?: string;
  blocks?: StepBlock[];
  factors: Record<string, { status: FactorStatus; note: string }>;
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
  overall: 31,
  band: "Weak",
  coverage:
    "4 of 8 measurable pillars scored from filed sources. Four more are not disclosed by the company; one pillar (Community Resilience) is not yet measurable for any company.",
  period: "Period scored: FY2025 · Scoring date: 2026-10-09 · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      s("1. Worker Standards: 62 × weight 16", "992"),
      s("2. Layoffs: 10 × weight 12", "120"),
      s("3. CEO Pay: 14 × weight 10", "140"),
      s("4. Lobbying: 22 × weight 7", "154"),
      t("= Add them up, divide by the total weight (45): 1,406 ÷ 45", "Overall 31"),
      c("✓ Layoff cap checked: the score may not pass 49 — 31 is below it, nothing changes."),
      c("✓ Coverage cap checked: the score may not pass 59 — 31 is below it, nothing changes."),
      c("✓ Equal weights give 27 — one band lower (Harmful). Published next to the score, as the Weights Defense requires."),
      n("(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.1.)"),
    ],
  },
  pillars: {
    worker_standards: {
      score: 62,
      sentence:
        "Its typical U.S. full-time worker earns $53,211 — above the cost of living, but below the $62,608 the typical American worker makes.",
      footnote: "Scored on pay, the only factor in this pillar verifiable from filings.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        { title: "QUESTION 1 — Can the worker live on the pay?", lines: [
          s("$53,211 (worker earns) → $49,246 (worker needs to live on) → $1.08 earned per $1 needed", "score 76"),
        ] },
        { title: "QUESTION 2 — Is it what other Americans make?", lines: [
          s("$53,211 (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 0.85", "score 35"),
        ] },
        { title: "QUESTION 3 — How is the money split?", lines: [
          s("$77.7B (Amazon's profit for the whole year) ÷ 1,576,000 (workers) = $49,283 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)"),
          s("$53,211 (worker gets) + $49,283 (company keeps per worker) → worker's share 52%", "score 74"),
        ] },
        { title: "FINAL LINE", lines: [
          t("76 + 35 + 74 → ÷ 3", "62"),
          c("Dignity gate: not triggered — pay is above the national living wage."),
          n("Sources: DEF 14A 2026 pay-ratio section; MIT Living Wage; 10-K FY2025 (net income $77,670M; 1,576,000 employees)."),
        ] },
      ],
      factors: {
        living_wage: { status: "scored", note: "Became the Worker Pay Fairness Rule (floor + sharing)" },
        benefits: { status: "not_disclosed", note: "No filing gives comparable healthcare/match/leave/PTO numbers" },
        workplace_safety: { status: "not_disclosed", note: "OSHA publishes per-establishment data, no company-wide filed rate" },
        employee_retention: { status: "not_disclosed", note: "Turnover is not disclosed in the 10-K or proxy" },
      },
    },
    us_workforce_commitment: {
      score: null, status: "Not disclosed by the company",
      sentence: "Amazon reports 1.58 million workers worldwide but does not disclose how many are in the United States.",
      footnote: "10-K discloses only the worldwide total (1,576,000), no U.S. split.",
      factors: {
        full_time_employment: { status: "not_disclosed", note: "Amazon reports 1,576,000 worldwide only — no U.S. full-time count" },
        domestic_hiring: { status: "not_disclosed", note: "Needs a U.S. headcount history; none is published" },
        training_investment: { status: "not_disclosed", note: "Training spend is not published" },
        contractor_dependence: { status: "not_disclosed", note: "Contractor headcount is not published" },
      },
    },
    local_economic: {
      score: null, status: "Not disclosed by the company",
      sentence: "It spent $0 on stock buybacks three years running — but does not disclose how much tax it pays in the U.S. alone.",
      footnote: "Tax provision ($19,087M) and capex ($128,320M) disclosed globally only, no U.S. figures ($0 buybacks 2023–2025 verified, shown as context).",
      factors: {
        domestic_investment: { status: "not_disclosed", note: "Capex is published worldwide only ($128,320M); no U.S. split" },
        domestic_suppliers: { status: "not_disclosed", note: "U.S. procurement share is not published" },
        us_rd: { status: "not_disclosed", note: "R&D geography is not published" },
        taxes: { status: "not_disclosed", note: "Tax provision is worldwide only ($19,087M); the subsidies side (Good Jobs First, ~$15.2B cumulative) is context only until the tax side exists" },
      },
    },
    layoffs_high_profits: {
      score: 10,
      sentence: "It cut about 30,000 corporate jobs in three months while earning a record $77.7B profit — after cutting 27,000+ in 2022–23.",
      rule: "Layoff Rule v1.0",
      blocks: [{ title: "Layoffs — 10", lines: [
        s("● Start", "100"),
        s("− 30,000 jobs cut (Oct 2025 + Jan 2026)", "−75"),
        s("− That is 10% of the whole corporate staff", "−15"),
        s("− Two separate rounds of cuts", "−10"),
        s("+ Credit: $2.7B severance paid, 90 days to find an internal job, no stock buybacks", "+10"),
        t("=", "10"),
        n("The cuts happened in profitable years ($59.2B in 2024, record $77.7B in 2025), so no discount."),
        n("The 27,000+ cut in 2022–23 is older than the 3-year window and is not counted."),
        n("Sources: company announcements; WA WARN notice 2025-10-28 (2,303 WA employees — a state slice used to verify, never presented as the national count); 10-K FY2025."),
      ] }],
      factors: {
        layoff_severity: { status: "scored", note: "Inside Layoff Rule v1.0 (count + segment share)" },
        profitability: { status: "scored", note: "Inside Layoff Rule v1.0 (profitable-year test: $59.2B / $77.7B)" },
        buybacks: { status: "scored", note: "Inside Layoff Rule v1.0 (credit: $0 buybacks 2023-2025)" },
      },
    },
    ceo_pay_ratio: {
      score: 14,
      sentence: "Its CEO actually took home $45.3M in 2025 — 851 times the typical U.S. worker's $53,211.",
      rule: "CEO Pay Rule v1.1, realized pay — what he actually took home",
      blocks: [{ title: "CEO Pay — 14", lines: [
        s("1. Salary", "$365,000"),
        s("2. Other pay (mostly security)", "$1,704,861"),
        s("3. Stock he received in 2025", "$43,235,494"),
        t("= Total actually taken home", "$45,305,355"),
        t("÷ Typical U.S. worker's pay $53,211 → 851× more → on the published scale (500× = 25 · 1,000× = 10)", "14"),
        n("On paper Amazon reports 51:1 — it counts stock in the year promised, and none was promised in 2025."),
        n("Against the worldwide median ($40,206) the same pay is 1,127× — footnote only; the headline uses the U.S. worker."),
        n("Source: DEF 14A 2026, pp.56, 58, 68."),
      ] }],
      factors: {
        ceo_compensation: { status: "scored", note: "Inside CEO Pay Rule v1.1 (realized pay $45,305,355)" },
        median_worker_compensation: { status: "scored", note: "Inside CEO Pay Rule v1.1 (U.S. FT median $53,211 → 851:1 → 14)" },
      },
    },
    outsourcing_exposure: {
      score: null, status: "Not disclosed by the company",
      sentence: "Amazon does not disclose how much of its work is done by contractors and outside firms.",
      footnote: "Contractor share not disclosed.",
      factors: {
        offshore_workforce: { status: "not_disclosed", note: "Non-U.S. headcount split is not published" },
        outsourced_services: { status: "not_disclosed", note: "Vendor/offshore services spend is not published" },
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
      score: null, status: "Not disclosed by the company",
      sentence: "Amazon does not disclose how much of what it sells is made in the United States.",
      footnote: "Domestic production share not disclosed.",
      factors: {
        domestic_production: { status: "not_measurable", note: "Census/USITC count category units, not a company's units" },
        imported_goods: { status: "not_measurable", note: "USITC counts category imports, not a company's imports" },
      },
    },
    lobbying_activity: {
      score: 22,
      sentence: "It spent $18.9M lobbying the federal government in 2025 — among the largest totals of any company in America.",
      rule: "Lobbying Rule v1.0",
      blocks: [{ title: "Lobbying — 22", lines: [
        s("1. Spent lobbying the federal government in 2025", "$18,865,000"),
        t("→ On the published scale ($10M = 35 · $20M = 20)", "22"),
        n("Limitation printed with the score: federal lobbying only — state lobbying and trade-group spending are not counted."),
        n("Source: OpenSecrets client summary, Amazon.com Inc, cycle 2025."),
      ] }],
      factors: {
        lobbying_spend: { status: "scored", note: "Lobbying Rule v1.0: $18,865,000 → 22" },
        political_contributions: { status: "decision", note: "Company PAC giving is filed exactly with the FEC — measurable, but the locked Lobbying Rule scores lobbying only." },
      },
    },
  },
  sources: [
    { label: "DEF 14A 2026 (filed 2026-04-09, accession 0001104659-26-041026)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041026/tm261382-1_def14a.htm" },
    { label: "Form 10-K FY2025 (accession 0001018724-26-000004)", url: "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm" },
    { label: "OpenSecrets — Amazon.com Inc, federal lobbying summary, cycle 2025", url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000023883" },
    { label: "MIT Living Wage Calculator — King County, WA", url: "https://livingwage.mit.edu/counties/53033" },
    { label: "Washington State WARN notices (Employment Security Department) — Amazon notice 2025-10-28" },
  ],
  rules:
    "Methodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v1.1 · Lobbying Rule v1.0 · Insufficient-Data Rule v1.1 · Worker Pay Fairness Rule v1.3 · Weights Defense v1.0 · Show-Your-Work Spec v1.0",
};

export const COMPANY_CARDS: Record<string, CompanyCard> = {
  "amazon-com": AMAZON_CARD,
  "costco-com": COSTCO_CARD,
  "apple-com": APPLE_CARD,
};
