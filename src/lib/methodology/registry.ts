// Structured metric registry — single source of truth for every equation,
// variable, source, normalization rule, and audit-trail node WeSee publishes.
// Every factor page and pillar page is generated from this data so users can
// reproduce any displayed score with a calculator and a browser.

import type { PillarKey } from "@/lib/score";
import type { Confidence, SourceTier } from "@/lib/sources";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SourceRef {
  id: string;                 // stable id
  name: string;               // e.g. "SEC EDGAR"
  organization: string;       // publisher
  tier: SourceTier;
  homepage: string;
  description: string;
}

export interface Variable {
  key: string;
  label: string;
  unit: string;
  definition: string;
  sourceId: string;           // pointer into SOURCES
  documentHint?: string;      // e.g. "DEF 14A — Executive Compensation"
}

/** Equation as a small AST so the same object drives math AND rendering. */
export type Equation =
  | { kind: "fraction"; numerator: string; denominator: string; label?: string }
  | { kind: "sum"; terms: { label: string; weight: number }[]; label?: string }
  | { kind: "expr"; expression: string; label?: string };

export interface NormalizationRule {
  when: string;               // e.g. "Ratio ≥ 2.0"
  score: string;              // e.g. "100"
  meaning?: string;
}

export interface FactorDef {
  key: string;                          // stable id, unique across all pillars
  pillarKey: PillarKey;
  slug: string;                         // url segment, unique within pillar
  title: string;
  weight: number;                       // share of pillar (sums to 1 per pillar)
  definition: string;
  equation: Equation;
  variables: Variable[];
  normalization: NormalizationRule[];
  limitations: string[];
  confidence: Confidence;
  confidenceRationale: string;
  auditTrail: string[];                 // top → bottom chain
}

// ---------------------------------------------------------------------------
// Tier-1/2/3 source catalog
// ---------------------------------------------------------------------------

export const SOURCES: Record<string, SourceRef> = {
  sec_edgar: {
    id: "sec_edgar", name: "SEC EDGAR", organization: "U.S. Securities and Exchange Commission",
    tier: 1, homepage: "https://www.sec.gov/edgar/search/",
    description: "Primary registry of 10-K, 10-Q, and DEF 14A corporate filings.",
  },
  bls: {
    id: "bls", name: "U.S. Bureau of Labor Statistics", organization: "U.S. Department of Labor",
    tier: 1, homepage: "https://www.bls.gov/data/",
    description: "Wage, employment, injury, and productivity statistics.",
  },
  osha: {
    id: "osha", name: "OSHA Establishment Search", organization: "Occupational Safety and Health Administration",
    tier: 1, homepage: "https://www.osha.gov/ords/imis/establishment.html",
    description: "Workplace injury records and inspection history.",
  },
  census: {
    id: "census", name: "U.S. Census Bureau", organization: "U.S. Census Bureau",
    tier: 1, homepage: "https://www.census.gov/data.html",
    description: "Economic, capex, and demographic datasets.",
  },
  warn: {
    id: "warn", name: "DOL WARN Notices", organization: "Employment & Training Administration",
    tier: 1, homepage: "https://www.dol.gov/agencies/eta/layoffs/warn",
    description: "Mandatory layoff filings under the WARN Act.",
  },
  senate_lda: {
    id: "senate_lda", name: "U.S. Senate LDA Database", organization: "U.S. Senate Office of Public Records",
    tier: 1, homepage: "https://lda.senate.gov/system/public/",
    description: "Primary lobbying disclosure filings.",
  },
  usitc: {
    id: "usitc", name: "USITC DataWeb", organization: "U.S. International Trade Commission",
    tier: 1, homepage: "https://dataweb.usitc.gov/",
    description: "Trade, tariff, and import data.",
  },
  mit_livingwage: {
    id: "mit_livingwage", name: "MIT Living Wage Calculator", organization: "Massachusetts Institute of Technology",
    tier: 1, homepage: "https://livingwage.mit.edu/",
    description: "County-level cost-of-living benchmarks.",
  },
  gjf: {
    id: "gjf", name: "Good Jobs First Subsidy Tracker", organization: "Good Jobs First",
    tier: 1, homepage: "https://subsidytracker.goodjobsfirst.org/",
    description: "Federal, state, and local subsidy database.",
  },
  opensecrets: {
    id: "opensecrets", name: "OpenSecrets", organization: "Center for Responsive Politics",
    tier: 1, homepage: "https://www.opensecrets.org/federal-lobbying",
    description: "Aggregated LDA lobbying and political spend data.",
  },
  fec: {
    id: "fec", name: "Federal Election Commission", organization: "Federal Election Commission",
    tier: 1, homepage: "https://www.fec.gov/data/",
    description: "PAC and political-contribution filings.",
  },
  reuters: {
    id: "reuters", name: "Reuters", organization: "Reuters", tier: 2,
    homepage: "https://www.reuters.com/", description: "Verified financial and business reporting — context only, never scored.",
  },
  bloomberg: {
    id: "bloomberg", name: "Bloomberg", organization: "Bloomberg L.P.", tier: 2,
    homepage: "https://www.bloomberg.com/", description: "Financial market reporting — context only.",
  },
  ft: {
    id: "ft", name: "Financial Times", organization: "Financial Times", tier: 2,
    homepage: "https://www.ft.com/", description: "Investigative business reporting — context only.",
  },
  ap: {
    id: "ap", name: "Associated Press", organization: "Associated Press", tier: 2,
    homepage: "https://apnews.com/", description: "Wire reporting — context only.",
  },
  wsj: {
    id: "wsj", name: "Wall Street Journal", organization: "Dow Jones & Company", tier: 2,
    homepage: "https://www.wsj.com/", description: "Business reporting — context only.",
  },
};

export function source(id: string): SourceRef {
  return SOURCES[id] ?? {
    id, name: id, organization: "Unknown", tier: 3,
    homepage: "#", description: "Unregistered source",
  };
}

// ---------------------------------------------------------------------------
// Pillar → factor definitions
// ---------------------------------------------------------------------------

// Pillar slug uses the canonical slug from PILLAR_INDEX in methodology-content.ts.
export const PILLAR_SLUG: Record<PillarKey, string> = {
  worker_standards: "worker-standards",
  us_workforce_commitment: "us-workforce-commitment",
  local_economic: "local-economic-contribution",
  layoffs_high_profits: "layoffs-during-high-profits",
  ceo_pay_ratio: "ceo-worker-pay-ratio",
  outsourcing_exposure: "outsourcing-exposure",
  community_resilience: "community-resilience",
  production_abroad: "production-abroad",
  lobbying_activity: "lobbying-activity",
};

const F = (f: FactorDef): FactorDef => f;

export const FACTORS: FactorDef[] = [
  // ---------------- Worker Standards ----------------
  F({
    key: "living_wage", pillarKey: "worker_standards", slug: "living-wage",
    title: "Living Wage", weight: 0.40,
    definition: "Whether the median U.S. worker's compensation clears the MIT county-level living wage where they are employed.",
    equation: { kind: "fraction", numerator: "Median Worker Wage", denominator: "MIT Living Wage", label: "Living Wage Ratio" },
    variables: [
      { key: "medianWorkerWage", label: "Median Worker Wage", unit: "USD / year", sourceId: "sec_edgar",
        documentHint: "DEF 14A — Executive Compensation",
        definition: "Annual total compensation of the company's median employee, as disclosed under SEC pay-ratio rules." },
      { key: "mitLivingWage", label: "MIT Living Wage", unit: "USD / year", sourceId: "mit_livingwage",
        definition: "County-level living wage estimate for a single adult, one child, from the MIT Living Wage Calculator." },
    ],
    normalization: [
      { when: "Ratio ≥ 2.0", score: "100", meaning: "Median wage at least 2× local living wage." },
      { when: "Ratio = 1.5", score: "75" },
      { when: "Ratio = 1.0", score: "50", meaning: "Median wage exactly meets the living wage floor." },
      { when: "Ratio < 0.75", score: "0", meaning: "Median wage substantially below the living wage floor." },
    ],
    limitations: [
      "Some companies only disclose annual compensation and not hourly equivalents.",
      "MIT Living Wage estimates are updated annually and lag rapid cost-of-living changes.",
      "Median-employee methodology can vary across issuers within SEC guidance.",
    ],
    confidence: "high",
    confidenceRationale: "Both inputs are primary Tier-1 disclosures with mandatory publication cycles.",
    auditTrail: [
      "Worker Standards", "Living Wage score", "Living Wage ratio",
      "Median Worker Wage", "SEC DEF 14A", "Executive Compensation section", "Original filing",
    ],
  }),
  F({
    key: "benefits", pillarKey: "worker_standards", slug: "benefits",
    title: "Benefits", weight: 0.20,
    definition: "Depth of healthcare, retirement, parental leave, and PTO benefits versus industry baselines.",
    equation: { kind: "sum", label: "Benefits Score", terms: [
      { label: "Healthcare coverage", weight: 0.35 },
      { label: "Retirement match", weight: 0.25 },
      { label: "Paid family leave", weight: 0.20 },
      { label: "PTO days", weight: 0.20 },
    ] },
    variables: [
      { key: "healthcareCoverage", label: "Healthcare coverage tier", unit: "0–100", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Employer-paid premium share for full-time workers, benchmarked vs. industry." },
      { key: "retirementMatch", label: "Retirement match", unit: "% of salary", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Disclosed 401(k)/pension match rate." },
      { key: "familyLeaveWeeks", label: "Paid family leave", unit: "weeks", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Fully paid parental/family leave available to U.S. workers." },
      { key: "ptoDays", label: "PTO baseline", unit: "days", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Baseline paid time off for U.S. full-time workers." },
    ],
    normalization: [
      { when: "Top-quartile on all four sub-components", score: "≥ 85" },
      { when: "Above industry median on three of four", score: "70 – 84" },
      { when: "At industry median", score: "50 – 69" },
      { when: "Below median on two or more", score: "< 50" },
    ],
    limitations: [
      "Human Capital disclosures are partly self-reported and vary in granularity.",
      "State-level statutory leave is not double-counted.",
    ],
    confidence: "medium",
    confidenceRationale: "Primary-source but partly self-reported; peer normalization mitigates disclosure variance.",
    auditTrail: ["Worker Standards", "Benefits score", "Sub-component weights", "SEC 10-K", "Human Capital section", "Original filing"],
  }),
  F({
    key: "workplace_safety", pillarKey: "worker_standards", slug: "workplace-safety",
    title: "Workplace Safety", weight: 0.20,
    definition: "OSHA recordable injury rate relative to industry baselines.",
    equation: { kind: "fraction", numerator: "Company Recordable Rate", denominator: "BLS Industry Median Rate", label: "Safety Ratio (lower is better)" },
    variables: [
      { key: "companyRate", label: "Company recordable rate", unit: "per 100 FTE",
        sourceId: "osha", definition: "OSHA Form 300A total recordable cases per 100 full-time-equivalent workers." },
      { key: "industryRate", label: "Industry median rate", unit: "per 100 FTE",
        sourceId: "bls", definition: "BLS injury and illness industry median for the same NAICS code and year." },
    ],
    normalization: [
      { when: "Ratio ≤ 0.5", score: "100", meaning: "Recordable rate less than half the industry median." },
      { when: "Ratio = 1.0", score: "50" },
      { when: "Ratio ≥ 2.0", score: "0" },
    ],
    limitations: [
      "OSHA Form 300A data can lag by up to 12 months.",
      "Contractor injuries are not always captured in the company's own Form 300A.",
    ],
    confidence: "high",
    confidenceRationale: "Both inputs are mandatory, publicly available Tier-1 filings.",
    auditTrail: ["Worker Standards", "Safety score", "Safety ratio", "OSHA Form 300A", "Original establishment record"],
  }),
  F({
    key: "employee_retention", pillarKey: "worker_standards", slug: "employee-retention",
    title: "Employee Retention", weight: 0.20,
    definition: "Voluntary turnover and tenure relative to NAICS peer cohort.",
    equation: { kind: "fraction", numerator: "Peer Median Voluntary Turnover", denominator: "Company Voluntary Turnover", label: "Retention Ratio" },
    variables: [
      { key: "companyTurnover", label: "Company voluntary turnover", unit: "% / year", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Voluntary attrition as disclosed in the Human Capital section." },
      { key: "peerTurnover", label: "Peer median voluntary turnover", unit: "% / year", sourceId: "bls",
        definition: "BLS Job Openings and Labor Turnover Survey (JOLTS) for the peer NAICS cohort." },
    ],
    normalization: [
      { when: "Ratio ≥ 1.5", score: "100" },
      { when: "Ratio = 1.0", score: "50" },
      { when: "Ratio ≤ 0.5", score: "0" },
    ],
    limitations: ["Voluntary vs. involuntary split is not always separately disclosed."],
    confidence: "medium",
    confidenceRationale: "10-K disclosure quality on retention varies by issuer.",
    auditTrail: ["Worker Standards", "Retention score", "Retention ratio", "SEC 10-K", "Human Capital section", "Original filing"],
  }),

  // ---------------- U.S. Workforce Commitment ----------------
  F({
    key: "full_time_employment", pillarKey: "us_workforce_commitment", slug: "full-time-employment",
    title: "Full-Time Employment", weight: 0.35,
    definition: "Share of U.S. workforce employed full-time versus temporary or contingent.",
    equation: { kind: "fraction", numerator: "U.S. Full-Time Employees", denominator: "Total U.S. Workforce (FT + Contingent)", label: "Full-Time Share" },
    variables: [
      { key: "ftEmployees", label: "U.S. full-time employees", unit: "headcount", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Full-time U.S. headcount as disclosed in the 10-K." },
      { key: "contingent", label: "U.S. contingent / contractor headcount", unit: "headcount", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Temporary, agency, or contractor headcount performing core roles." },
    ],
    normalization: [
      { when: "Share ≥ 0.95", score: "100" },
      { when: "Share = 0.80", score: "60" },
      { when: "Share ≤ 0.60", score: "0" },
    ],
    limitations: ["Contingent labor disclosure varies across industries."],
    confidence: "medium",
    confidenceRationale: "Human Capital disclosures are Tier-1 but non-standardized on contingent labor.",
    auditTrail: ["U.S. Workforce Commitment", "Full-Time score", "Full-Time share", "SEC 10-K", "Human Capital section"],
  }),
  F({
    key: "domestic_hiring", pillarKey: "us_workforce_commitment", slug: "domestic-hiring",
    title: "Domestic Hiring", weight: 0.25,
    definition: "Multi-year net U.S. headcount growth indexed to U.S. revenue growth.",
    equation: { kind: "fraction", numerator: "Δ U.S. Headcount (5y)", denominator: "Δ U.S. Revenue (5y)", label: "Hiring Elasticity" },
    variables: [
      { key: "deltaHeadcount", label: "5-year Δ U.S. headcount", unit: "%", sourceId: "sec_edgar", documentHint: "10-K — Human Capital",
        definition: "Percent change in disclosed U.S. employees over five reporting cycles." },
      { key: "deltaRevenue", label: "5-year Δ U.S. revenue", unit: "%", sourceId: "sec_edgar", documentHint: "10-K — Segment disclosures",
        definition: "Percent change in U.S.-attributable revenue over five reporting cycles." },
    ],
    normalization: [
      { when: "Elasticity ≥ 0.8", score: "≥ 85" },
      { when: "Elasticity ≈ 0.5", score: "50 – 70" },
      { when: "Elasticity ≤ 0.0", score: "0 – 20" },
    ],
    limitations: ["Segment revenue geography must be reported to be usable."],
    confidence: "medium",
    confidenceRationale: "Both inputs are 10-K disclosures; segment geography detail varies.",
    auditTrail: ["U.S. Workforce Commitment", "Domestic Hiring score", "Hiring elasticity", "SEC 10-K", "Segment + Human Capital"],
  }),
  F({
    key: "training_investment", pillarKey: "us_workforce_commitment", slug: "training-investment",
    title: "Training Investment", weight: 0.20,
    definition: "Training, apprenticeship, and tuition spend per U.S. employee versus peers.",
    equation: { kind: "fraction", numerator: "Annual Training Spend (USD)", denominator: "U.S. Employees", label: "Training $ / Employee" },
    variables: [
      { key: "trainingSpend", label: "Annual training spend", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Human Capital",
        definition: "Disclosed training, apprenticeship, and tuition reimbursement outlays." },
      { key: "usEmployees", label: "U.S. employees", unit: "headcount", sourceId: "sec_edgar", documentHint: "10-K — Human Capital",
        definition: "Total U.S. employee headcount." },
    ],
    normalization: [
      { when: "≥ $2,500 / employee", score: "≥ 85" },
      { when: "≈ $1,000 / employee", score: "≈ 50" },
      { when: "≤ $250 / employee", score: "≤ 20" },
    ],
    limitations: ["Training spend disclosure is optional and inconsistent."],
    confidence: "low",
    confidenceRationale: "Disclosure is voluntary; missing data reduces score confidence.",
    auditTrail: ["U.S. Workforce Commitment", "Training score", "Training $/employee", "SEC 10-K", "Human Capital section"],
  }),
  F({
    key: "contractor_dependence", pillarKey: "us_workforce_commitment", slug: "contractor-dependence",
    title: "Contractor Dependence", weight: 0.20,
    definition: "Reliance on third-party staffing agencies for core operating roles.",
    equation: { kind: "fraction", numerator: "Contractor Headcount (Core Roles)", denominator: "Core Operating Headcount", label: "Contractor Share (lower is better)" },
    variables: [
      { key: "contractorHeadcount", label: "Contractor headcount in core roles", unit: "headcount", sourceId: "sec_edgar",
        documentHint: "10-K — Risk & Human Capital", definition: "Agency/contractor workers performing core operating functions." },
      { key: "coreHeadcount", label: "Core operating headcount", unit: "headcount", sourceId: "sec_edgar",
        documentHint: "10-K — Segment", definition: "Total headcount across core operating functions." },
    ],
    normalization: [
      { when: "Share ≤ 0.05", score: "100" },
      { when: "Share = 0.20", score: "50" },
      { when: "Share ≥ 0.40", score: "0" },
    ],
    limitations: ["Definition of 'core role' varies by industry."],
    confidence: "medium",
    confidenceRationale: "Filings disclose direction and magnitude; per-function detail is uneven.",
    auditTrail: ["U.S. Workforce Commitment", "Contractor score", "Contractor share", "SEC 10-K"],
  }),

  // ---------------- Local Economic Contribution ----------------
  F({
    key: "domestic_investment", pillarKey: "local_economic", slug: "domestic-investment",
    title: "Domestic Investment", weight: 0.35,
    definition: "U.S. capital expenditure as a share of U.S.-attributable revenue.",
    equation: { kind: "fraction", numerator: "U.S. Capex", denominator: "U.S. Revenue", label: "Domestic Capex Intensity" },
    variables: [
      { key: "usCapex", label: "U.S. capital expenditure", unit: "USD", sourceId: "census",
        definition: "Capex conducted on U.S. soil from the Census Annual Capital Expenditures Survey." },
      { key: "usRevenue", label: "U.S.-attributable revenue", unit: "USD", sourceId: "sec_edgar",
        documentHint: "10-K — Segment disclosures", definition: "Revenue attributed to U.S. customers per segment reporting." },
    ],
    normalization: [
      { when: "Intensity ≥ industry 75th pct", score: "≥ 85" },
      { when: "Intensity ≈ industry median", score: "≈ 50" },
      { when: "Intensity ≤ industry 25th pct", score: "≤ 20" },
    ],
    limitations: ["Cross-border shared capex is imperfectly allocable."],
    confidence: "high",
    confidenceRationale: "Both inputs derive from primary Tier-1 filings.",
    auditTrail: ["Local Economic Contribution", "Domestic Investment score", "Capex intensity", "10-K + Census ACES"],
  }),
  F({
    key: "domestic_suppliers", pillarKey: "local_economic", slug: "domestic-suppliers",
    title: "Domestic Suppliers", weight: 0.25,
    definition: "Share of procurement spend contracted to U.S. suppliers.",
    equation: { kind: "fraction", numerator: "U.S. Procurement Spend", denominator: "Total Procurement Spend", label: "U.S. Supplier Share" },
    variables: [
      { key: "usProcurement", label: "U.S. procurement spend", unit: "USD", sourceId: "sec_edgar",
        documentHint: "10-K — Supply chain / Risk", definition: "Disclosed procurement contracted to U.S.-domiciled suppliers." },
      { key: "totalProcurement", label: "Total procurement spend", unit: "USD", sourceId: "sec_edgar",
        documentHint: "10-K — Supply chain / Risk", definition: "Total supplier expenditure across geographies." },
    ],
    normalization: [
      { when: "Share ≥ 0.70", score: "≥ 85" },
      { when: "Share ≈ 0.50", score: "≈ 60" },
      { when: "Share ≤ 0.20", score: "≤ 20" },
    ],
    limitations: ["Supplier geography detail is often qualitative rather than quantitative."],
    confidence: "medium",
    confidenceRationale: "Tier-1 source but supplier-geography detail varies.",
    auditTrail: ["Local Economic Contribution", "Supplier score", "U.S. supplier share", "SEC 10-K"],
  }),
  F({
    key: "us_rd", pillarKey: "local_economic", slug: "us-rd",
    title: "U.S. R&D", weight: 0.25,
    definition: "R&D activity conducted on U.S. soil, by headcount and spend.",
    equation: { kind: "fraction", numerator: "U.S. R&D Spend", denominator: "Total R&D Spend", label: "U.S. R&D Share" },
    variables: [
      { key: "usRdSpend", label: "U.S. R&D spend", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — R&D geography",
        definition: "R&D spend attributed to U.S. locations." },
      { key: "totalRdSpend", label: "Total R&D spend", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — R&D",
        definition: "Global R&D spend for the reporting period." },
    ],
    normalization: [
      { when: "Share ≥ 0.80", score: "≥ 85" },
      { when: "Share ≈ 0.50", score: "≈ 55" },
      { when: "Share ≤ 0.20", score: "≤ 20" },
    ],
    limitations: ["Geographic split of R&D is not always separately disclosed."],
    confidence: "medium",
    confidenceRationale: "Primary-source but disclosure granularity varies.",
    auditTrail: ["Local Economic Contribution", "R&D score", "U.S. R&D share", "SEC 10-K"],
  }),
  F({
    key: "taxes", pillarKey: "local_economic", slug: "taxes",
    title: "Taxes", weight: 0.15,
    definition: "State and local taxes paid net of public subsidies received.",
    equation: { kind: "expr", label: "Net Tax Contribution", expression: "(State + Local Taxes Paid) − (Subsidies Received)" },
    variables: [
      { key: "stateLocalTax", label: "State & local taxes paid", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Income taxes",
        definition: "Combined state and local tax payments disclosed in the tax footnote." },
      { key: "subsidies", label: "Subsidies received", unit: "USD", sourceId: "gjf",
        definition: "Federal, state, and local subsidies logged by Good Jobs First Subsidy Tracker." },
    ],
    normalization: [
      { when: "Net > 0 and rising 5y", score: "≥ 75" },
      { when: "Net ≈ 0", score: "≈ 50" },
      { when: "Net < 0 (subsidy exceeds contribution)", score: "≤ 25" },
    ],
    limitations: ["Subsidy timing (present-value vs. announced) affects year-over-year comparisons."],
    confidence: "medium",
    confidenceRationale: "Both inputs are Tier-1 but require period alignment.",
    auditTrail: ["Local Economic Contribution", "Tax score", "Net tax contribution", "10-K + Subsidy Tracker"],
  }),

  // ---------------- Layoffs During High Profits ----------------
  F({
    key: "layoff_severity", pillarKey: "layoffs_high_profits", slug: "layoff-severity",
    title: "Layoff Severity", weight: 0.45,
    definition: "Absolute U.S. positions eliminated in the reporting period, log-scaled by employer size.",
    equation: { kind: "expr", label: "Severity Index",
      expression: "log10(1 + U.S. Positions Affected) × (U.S. Positions Affected / Total U.S. Workforce)^0.5" },
    variables: [
      { key: "positionsAffected", label: "U.S. positions affected", unit: "headcount", sourceId: "warn",
        definition: "Sum of confirmed WARN notices in the reporting period." },
      { key: "usWorkforce", label: "Total U.S. workforce", unit: "headcount", sourceId: "sec_edgar",
        documentHint: "10-K — Human Capital", definition: "Disclosed U.S. employee headcount at period start." },
    ],
    normalization: [
      { when: "Severity Index ≤ 0.5", score: "≥ 85" },
      { when: "Severity Index ≈ 2.0", score: "≈ 50" },
      { when: "Severity Index ≥ 4.5", score: "≤ 15" },
    ],
    limitations: ["WARN thresholds vary by state; sub-threshold layoffs may be undercounted."],
    confidence: "high",
    confidenceRationale: "WARN notices are legally mandated and independently searchable.",
    auditTrail: ["Layoffs During High Profits", "Severity score", "Severity index",
                 "U.S. positions affected", "DOL WARN filing", "Original notice"],
  }),
  F({
    key: "profitability", pillarKey: "layoffs_high_profits", slug: "profitability",
    title: "Profitability Context", weight: 0.30,
    definition: "Whether the layoff period coincided with net income and free cash flow.",
    equation: { kind: "expr", label: "Profitable-Period Multiplier",
      expression: "1 + max(0, Net Income / |Net Income Prior Year| − 0)  ×  1[FCF > 0]" },
    variables: [
      { key: "netIncome", label: "Net income (period)", unit: "USD", sourceId: "sec_edgar", documentHint: "10-Q / 10-K — Income statement",
        definition: "Reported net income for the same period as the layoff." },
      { key: "fcf", label: "Free cash flow (period)", unit: "USD", sourceId: "sec_edgar", documentHint: "10-Q / 10-K — Cash flow",
        definition: "Operating cash flow minus capital expenditure." },
    ],
    normalization: [
      { when: "Multiplier ≤ 1.0 (loss period)", score: "No penalty" },
      { when: "Multiplier = 1.5", score: "Moderate penalty" },
      { when: "Multiplier ≥ 2.0", score: "Full penalty" },
    ],
    limitations: ["Segment-level profitability can differ from consolidated figures."],
    confidence: "high",
    confidenceRationale: "Financials are audited Tier-1 filings.",
    auditTrail: ["Layoffs During High Profits", "Profitability multiplier", "SEC 10-Q / 10-K", "Income + Cash Flow"],
  }),
  F({
    key: "buybacks", pillarKey: "layoffs_high_profits", slug: "buybacks",
    title: "Buybacks", weight: 0.25,
    definition: "Share repurchase activity in the same period as the layoff.",
    equation: { kind: "fraction", numerator: "Share Repurchases (Period)", denominator: "Layoff Severance Cost", label: "Buyback-to-Severance Ratio" },
    variables: [
      { key: "buybacks", label: "Share repurchases", unit: "USD", sourceId: "sec_edgar", documentHint: "10-Q — Financing activities",
        definition: "Cash outlay for share repurchases in the reporting period." },
      { key: "severanceCost", label: "Layoff severance cost", unit: "USD", sourceId: "sec_edgar", documentHint: "10-Q — Restructuring",
        definition: "Restructuring cash charge tied to the layoff event." },
    ],
    normalization: [
      { when: "Ratio ≤ 1", score: "Neutral" },
      { when: "Ratio ≈ 10", score: "Moderate penalty" },
      { when: "Ratio ≥ 50", score: "Full penalty" },
    ],
    limitations: ["Announced vs. executed buyback programs may diverge within a quarter."],
    confidence: "high",
    confidenceRationale: "All inputs are audited Tier-1 disclosures.",
    auditTrail: ["Layoffs During High Profits", "Buyback ratio", "SEC 10-Q", "Financing + Restructuring"],
  }),

  // ---------------- CEO-to-Worker Pay Ratio ----------------
  F({
    key: "ceo_compensation", pillarKey: "ceo_pay_ratio", slug: "ceo-compensation",
    title: "CEO Compensation", weight: 0.50,
    definition: "Total CEO compensation as disclosed in the DEF 14A Summary Compensation Table.",
    equation: { kind: "expr", label: "CEO Total Compensation",
      expression: "Base Salary + Bonus + Stock Awards + Option Awards + Non-Equity Incentive + Pension + Other" },
    variables: [
      { key: "baseSalary", label: "Base salary", unit: "USD", sourceId: "sec_edgar", documentHint: "DEF 14A — Summary Compensation Table",
        definition: "Annualized cash base salary paid to the CEO." },
      { key: "equityAwards", label: "Equity awards (stock + options)", unit: "USD", sourceId: "sec_edgar", documentHint: "DEF 14A — Summary Compensation Table",
        definition: "Grant-date fair value of equity awards for the fiscal year." },
      { key: "incentive", label: "Bonus + non-equity incentive", unit: "USD", sourceId: "sec_edgar", documentHint: "DEF 14A — Summary Compensation Table",
        definition: "Cash bonuses and non-equity performance incentive payouts." },
      { key: "otherComp", label: "Pension + other", unit: "USD", sourceId: "sec_edgar", documentHint: "DEF 14A — Summary Compensation Table",
        definition: "All other compensation including pension value changes and perquisites." },
    ],
    normalization: [
      { when: "Composition uses grant-date fair value per SEC rules", score: "Reported as-is" },
    ],
    limitations: ["Realized-pay differs from reported grant-date fair value."],
    confidence: "high",
    confidenceRationale: "SEC pay-ratio disclosure is standardized and mandatory.",
    auditTrail: ["CEO-to-Worker Pay Ratio", "CEO Compensation", "DEF 14A", "Summary Compensation Table", "Original filing"],
  }),
  F({
    key: "median_worker_compensation", pillarKey: "ceo_pay_ratio", slug: "median-worker-compensation",
    title: "Median Worker Compensation", weight: 0.50,
    definition: "Annual total compensation of the company's median employee.",
    equation: { kind: "expr", label: "Median Worker Total Compensation",
      expression: "Base Wage + Overtime + Bonus + Employer-paid Benefits (per SEC Item 402(u))" },
    variables: [
      { key: "medianWorkerComp", label: "Median employee total compensation", unit: "USD", sourceId: "sec_edgar",
        documentHint: "DEF 14A — Pay Ratio Disclosure",
        definition: "Annualized total compensation of the median employee, calculated using the same components used for the CEO." },
    ],
    normalization: [
      { when: "Ratio ≤ sector 25th pct", score: "≥ 85" },
      { when: "Ratio ≈ sector median", score: "≈ 55" },
      { when: "Ratio ≥ sector 90th pct", score: "≤ 15" },
    ],
    limitations: ["Median-employee methodology is only re-identified every three years under SEC rules."],
    confidence: "high",
    confidenceRationale: "Standardized SEC pay-ratio disclosure.",
    auditTrail: ["CEO-to-Worker Pay Ratio", "Median Worker Compensation", "DEF 14A", "Pay Ratio Disclosure", "Original filing"],
  }),

  // ---------------- Outsourcing Exposure ----------------
  F({
    key: "offshore_workforce", pillarKey: "outsourcing_exposure", slug: "offshore-workforce",
    title: "Offshore Workforce", weight: 0.60,
    definition: "Share of core operating headcount located outside the U.S.",
    equation: { kind: "fraction", numerator: "Non-U.S. Core Headcount", denominator: "Total Core Headcount", label: "Offshore Share (lower is better)" },
    variables: [
      { key: "offshoreHeadcount", label: "Non-U.S. core headcount", unit: "headcount", sourceId: "sec_edgar", documentHint: "10-K — Human Capital",
        definition: "Core-role employees + contractors located outside the U.S." },
      { key: "totalCore", label: "Total core headcount", unit: "headcount", sourceId: "sec_edgar", documentHint: "10-K — Human Capital",
        definition: "Total core-role workforce (U.S. + offshore)." },
    ],
    normalization: [
      { when: "Share ≤ 0.20", score: "≥ 85" },
      { when: "Share ≈ 0.40", score: "≈ 55" },
      { when: "Share ≥ 0.70", score: "≤ 15" },
    ],
    limitations: ["Geographic breakdown of contractor headcount is often absent."],
    confidence: "medium",
    confidenceRationale: "10-K disclosure quality varies; contractor geography is uneven.",
    auditTrail: ["Outsourcing Exposure", "Offshore workforce score", "Offshore share", "SEC 10-K", "Human Capital"],
  }),
  F({
    key: "outsourced_services", pillarKey: "outsourcing_exposure", slug: "outsourced-services",
    title: "Outsourced Services", weight: 0.40,
    definition: "Share of services (IT, support, back-office) contracted to third-party offshore vendors.",
    equation: { kind: "fraction", numerator: "Offshore Vendor Spend", denominator: "Total Services Spend", label: "Outsourced-Services Share" },
    variables: [
      { key: "offshoreVendorSpend", label: "Offshore vendor spend", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Risk / Vendors",
        definition: "Payments to third-party vendors performing services outside the U.S." },
      { key: "totalServicesSpend", label: "Total services spend", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Operating expenses",
        definition: "Total third-party services spend regardless of geography." },
    ],
    normalization: [
      { when: "Share ≤ 0.15", score: "≥ 85" },
      { when: "Share ≈ 0.35", score: "≈ 55" },
      { when: "Share ≥ 0.60", score: "≤ 15" },
    ],
    limitations: ["Vendor geography is often qualitative."],
    confidence: "low",
    confidenceRationale: "Disclosure is uneven and often narrative rather than quantitative.",
    auditTrail: ["Outsourcing Exposure", "Outsourced-services score", "Vendor share", "SEC 10-K"],
  }),

  // ---------------- Community Resilience ----------------
  F({
    key: "local_investment", pillarKey: "community_resilience", slug: "local-investment",
    title: "Local Investment", weight: 0.60,
    definition: "Site-level capital and employment stability net of received subsidies.",
    equation: { kind: "expr", label: "Local Investment Index",
      expression: "(Site Retention Rate × Local Employment Stability) − (Subsidies / Jobs Retained)" },
    variables: [
      { key: "siteRetention", label: "5-year site retention rate", unit: "%", sourceId: "census",
        definition: "Share of facilities open at t-5 that are still open at t, per County Business Patterns." },
      { key: "subsidyPerJob", label: "Subsidy per retained job", unit: "USD / job", sourceId: "gjf",
        definition: "Subsidy Tracker outlays divided by retained U.S. headcount at incentivized sites." },
    ],
    normalization: [
      { when: "Retention ≥ 0.95 and subsidy/job ≤ $10k", score: "≥ 85" },
      { when: "Retention ≈ 0.80 and subsidy/job ≈ $50k", score: "≈ 50" },
      { when: "Retention ≤ 0.60 or subsidy/job ≥ $200k", score: "≤ 20" },
    ],
    limitations: ["Present-value of multi-year subsidy packages requires estimation."],
    confidence: "medium",
    confidenceRationale: "Tier-1 inputs but require careful period alignment.",
    auditTrail: ["Community Resilience", "Local Investment score", "Local Investment Index", "Census CBP + Subsidy Tracker"],
  }),
  F({
    key: "community_programs", pillarKey: "community_resilience", slug: "community-programs",
    title: "Community Programs", weight: 0.40,
    definition: "Documented community, workforce-development, and disaster-response programs.",
    equation: { kind: "fraction", numerator: "Documented Program Spend (USD)", denominator: "U.S. Revenue", label: "Program Intensity" },
    variables: [
      { key: "programSpend", label: "Documented program spend", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K / Sustainability report",
        definition: "Disclosed spending on community, workforce-development, and disaster-response programs." },
      { key: "usRevenue2", label: "U.S. revenue", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Segment",
        definition: "U.S.-attributable revenue for the same period." },
    ],
    normalization: [
      { when: "Intensity ≥ industry 75th pct", score: "≥ 85" },
      { when: "Intensity ≈ industry median", score: "≈ 50" },
      { when: "No documented programs", score: "≤ 15" },
    ],
    limitations: ["Community-program disclosure is voluntary and inconsistent."],
    confidence: "low",
    confidenceRationale: "Disclosure is voluntary; peer normalization mitigates variance.",
    auditTrail: ["Community Resilience", "Community Programs score", "Program intensity", "SEC 10-K / Sustainability report"],
  }),

  // ---------------- Production Abroad ----------------
  F({
    key: "domestic_production", pillarKey: "production_abroad", slug: "domestic-production",
    title: "Domestic Production", weight: 0.60,
    definition: "Share of goods sold in the U.S. that are produced or assembled domestically.",
    equation: { kind: "fraction", numerator: "U.S.-Assembled Unit Sales", denominator: "Total U.S. Unit Sales", label: "Domestic Production Share" },
    variables: [
      { key: "domesticUnits", label: "U.S.-assembled unit sales", unit: "units", sourceId: "census",
        definition: "Annual Survey of Manufactures — U.S.-produced units shipped domestically." },
      { key: "totalUsUnits", label: "Total U.S. unit sales", unit: "units", sourceId: "usitc",
        definition: "USITC DataWeb U.S. consumption units (domestic + imports)." },
    ],
    normalization: [
      { when: "Share ≥ 0.80", score: "≥ 85" },
      { when: "Share ≈ 0.50", score: "≈ 55" },
      { when: "Share ≤ 0.20", score: "≤ 15" },
    ],
    limitations: ["Assembled-in-U.S. vs. made-in-U.S. distinctions can vary."],
    confidence: "medium",
    confidenceRationale: "Combines two Tier-1 sources; unit reconciliation requires care.",
    auditTrail: ["Production Abroad", "Domestic Production score", "Domestic share", "Census ASM + USITC DataWeb"],
  }),
  F({
    key: "imported_goods", pillarKey: "production_abroad", slug: "imported-goods",
    title: "Imported Goods", weight: 0.40,
    definition: "Concentration of imports from single-country suppliers for critical inputs.",
    equation: { kind: "fraction", numerator: "Top-Country Import Value", denominator: "Total Category Imports", label: "Single-Country Concentration" },
    variables: [
      { key: "topCountryImports", label: "Top-country import value", unit: "USD", sourceId: "usitc",
        definition: "Largest single foreign source of imports in the critical input category." },
      { key: "totalCatImports", label: "Total category imports", unit: "USD", sourceId: "usitc",
        definition: "Total imports in the same category across all countries." },
    ],
    normalization: [
      { when: "Concentration ≤ 0.20", score: "≥ 85" },
      { when: "Concentration ≈ 0.50", score: "≈ 50" },
      { when: "Concentration ≥ 0.80", score: "≤ 15" },
    ],
    limitations: ["Category attribution to individual firms requires 10-K supplier disclosure."],
    confidence: "medium",
    confidenceRationale: "USITC is Tier-1; company-level attribution is the limiting step.",
    auditTrail: ["Production Abroad", "Imported Goods score", "Concentration ratio", "USITC DataWeb"],
  }),

  // ---------------- Lobbying Activity ----------------
  F({
    key: "lobbying_spend", pillarKey: "lobbying_activity", slug: "lobbying-spend",
    title: "Lobbying Spend", weight: 0.65,
    definition: "Federal lobbying spend per $1B of U.S.-attributable revenue.",
    equation: { kind: "fraction", numerator: "Federal Lobbying Spend (USD)", denominator: "U.S. Revenue (USD, $B)", label: "Spend per $1B U.S. Revenue" },
    variables: [
      { key: "lobbyingSpend", label: "Federal lobbying spend", unit: "USD", sourceId: "opensecrets",
        definition: "Sum of quarterly LDA filings aggregated by OpenSecrets." },
      { key: "usRevenue3", label: "U.S.-attributable revenue", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Segment",
        definition: "U.S. revenue for the same fiscal year." },
    ],
    normalization: [
      { when: "≤ sector 25th pct spend/rev", score: "≥ 85" },
      { when: "≈ sector median", score: "≈ 55" },
      { when: "≥ sector 90th pct", score: "≤ 15" },
    ],
    limitations: ["Trade-association lobbying is only partly attributable to individual companies."],
    confidence: "high",
    confidenceRationale: "OpenSecrets aggregates mandatory LDA filings.",
    auditTrail: ["Lobbying Activity", "Lobbying Spend score", "Spend per $1B", "OpenSecrets + Senate LDA", "Original quarterly filing"],
  }),
  F({
    key: "political_contributions", pillarKey: "lobbying_activity", slug: "political-contributions",
    title: "Political Contributions", weight: 0.35,
    definition: "PAC and independent-expenditure contributions per $1B of U.S. revenue.",
    equation: { kind: "fraction", numerator: "PAC + IE Contributions (USD)", denominator: "U.S. Revenue (USD, $B)", label: "Contributions per $1B" },
    variables: [
      { key: "pacContributions", label: "PAC + IE contributions", unit: "USD", sourceId: "fec",
        definition: "Corporate-affiliated PAC contributions and independent expenditures per FEC filings." },
      { key: "usRevenue4", label: "U.S.-attributable revenue", unit: "USD", sourceId: "sec_edgar", documentHint: "10-K — Segment",
        definition: "U.S. revenue for the same election cycle." },
    ],
    normalization: [
      { when: "≤ sector 25th pct", score: "≥ 85" },
      { when: "≈ sector median", score: "≈ 55" },
      { when: "≥ sector 90th pct", score: "≤ 15" },
    ],
    limitations: ["Executive-level personal contributions are excluded."],
    confidence: "high",
    confidenceRationale: "FEC filings are Tier-1 primary disclosures.",
    auditTrail: ["Lobbying Activity", "Political Contributions score", "Contributions per $1B", "FEC filings"],
  }),
];

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export function factorsByPillar(key: PillarKey): FactorDef[] {
  return FACTORS.filter((f) => f.pillarKey === key);
}

export function pillarSlugFromKey(key: PillarKey): string {
  return PILLAR_SLUG[key];
}

export function pillarKeyFromSlug(slug: string): PillarKey | undefined {
  const entry = (Object.entries(PILLAR_SLUG) as [PillarKey, string][]).find(([, s]) => s === slug);
  return entry?.[0];
}

export function findFactor(pillarSlug: string, factorSlug: string): FactorDef | undefined {
  const key = pillarKeyFromSlug(pillarSlug);
  if (!key) return undefined;
  return FACTORS.find((f) => f.pillarKey === key && f.slug === factorSlug);
}

// Dev-only sanity: pillar factor weights sum to 1.
if (import.meta.env?.DEV) {
  const groups = new Map<PillarKey, number>();
  for (const f of FACTORS) groups.set(f.pillarKey, (groups.get(f.pillarKey) ?? 0) + f.weight);
  for (const [k, w] of groups) {
    if (Math.abs(w - 1) > 0.001) {
      // eslint-disable-next-line no-console
      console.warn(`[methodology] pillar ${k} factor weights sum to ${w.toFixed(3)} (expected 1.0)`);
    }
  }
}
