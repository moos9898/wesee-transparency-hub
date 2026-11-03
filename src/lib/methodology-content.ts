// Rich, interactive content for the WeSee methodology system.
// Each pillar page and framework page is a structured document with:
// purpose, why_matters, indicators, normalization, calibration,
// threshold table, examples, FAQ, limitations, scale-responsibility.
//
// Aliases map several reader-friendly URLs onto the same canonical pillar.

import type { PillarKey } from "./score";

export interface ThresholdRow {
  tier: string;
  range: string;
  meaning: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Example {
  title: string;
  body: string;
}

export interface PillarContent {
  kind: "pillar";
  pillarKey: PillarKey;
  slug: string;            // canonical slug used by this page
  title: string;
  weight: number;          // share of total
  purpose: string;
  whyMatters: string;
  calibration?: string;
  scaleResponsibility?: string;
  examples: Example[];
  thresholds: ThresholdRow[];
  limitations: string[];
  faqs: FaqItem[];
}

export interface FrameworkContent {
  kind: "framework";
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: FaqItem[];
}

// ---- Shared building blocks ------------------------------------------------

const PEER_THRESHOLDS: ThresholdRow[] = [
  { tier: "Exceptional", range: "85 – 100 · Top 10% of peers",   meaning: "Top decile across weighted indicators after industry normalization and cost-of-living adjustments." },
  { tier: "Strong",      range: "70 – 84 · Top 25% of peers",    meaning: "Top quartile across weighted indicators; consistent above-median performance." },
  { tier: "Moderate",    range: "50 – 69 · Median to 75th pct",  meaning: "Near peer median; mixed results once normalized for industry and regional context." },
  { tier: "Weak",        range: "30 – 49 · Bottom 50% of peers", meaning: "Indicators trail peer medians after normalization." },
  { tier: "Harmful",     range: "0 – 29 · Bottom 25% of peers",  meaning: "Sustained underperformance across multiple weighted indicators relative to minimum sustainability thresholds." },
];

const COMMON_LIMITS = [
  "Score reflects publicly disclosed data — private workforce arrangements not subject to disclosure are out of scope.",
  "Filings lag real-world events by a quarter or more; very recent changes may not yet be reflected.",
  "Sub-indicator decomposition is a deterministic estimate around the verified pillar score for transparency and stability.",
];

const COMMON_FAQS: FaqItem[] = [
  { q: "How often is the data refreshed?", a: "Tier-1 source extracts run on each reporting cycle (10-K, 10-Q, DEF 14A, BLS, OSHA, OpenSecrets). The extraction date and last verified date are shown alongside every metric." },
  { q: "Can a score change without new filings?", a: "Yes — peer-percentile thresholds shift as competitors update. WeSee preserves prior snapshots so historical reads remain reproducible." },
];

// ---- Pillar pages ----------------------------------------------------------

const WORKER_STANDARDS: PillarContent = {
  kind: "pillar",
  pillarKey: "worker_standards",
  slug: "worker-standards",
  title: "Worker Standards",
  weight: 0.16,
  purpose: "Measures whether a company's compensation, benefits, safety, and retention practices allow U.S. workers to sustain stable living standards relative to local cost-of-living conditions.",
  whyMatters: "Wages, benefits, and workplace safety determine whether employment is genuinely sustaining or merely transactional. A wage that clears a federal minimum can still fail an MIT Living Wage threshold in high-cost metros, which is why benchmarks are county-level rather than national.",
  calibration: "Affordability sub-indicator is adjusted by regional cost-of-living. A wage above industry median in Mississippi may still fall below the Bay Area living wage; both contexts are weighted accordingly so exceptional scores are difficult to earn in elevated-pressure metros.",
  examples: [
    { title: "Above-industry compensation, elevated metro pressure", body: "A logistics employer pays 18% above BLS median for the role, but operates in an Elevated cost-of-living region. The Wage Competitiveness sub-score is high; the Affordability sub-score is dampened. Pillar settles in the Strong band rather than Exceptional." },
    { title: "Mid-pack wages with weak safety record", body: "Wage Competitiveness is at peer median, but OSHA recordable injury rate is in the top quartile of the industry. Safety sub-score drops below 30, pulling the pillar into the Weak band even with average pay." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: [
    ...COMMON_LIMITS,
    "Benefits depth (e.g. paid family leave structure) is partly self-reported in 10-K Human Capital disclosures.",
  ],
  faqs: [
    { q: "Why isn't headline wage enough?", a: "A wage figure without affordability context misrepresents worker stability. WeSee benchmarks wages against MIT Living Wage thresholds at the county level to capture purchasing power, not just nominal pay." },
    ...COMMON_FAQS,
  ],
};

const US_WORKFORCE_COMMITMENT: PillarContent = {
  kind: "pillar",
  pillarKey: "us_workforce_commitment",
  slug: "us-workforce-commitment",
  title: "U.S. Workforce Commitment",
  weight: 0.14,
  purpose: "Measures how strongly a company invests in the long-term American workforce relative to reliance on temporary, outsourced, or lower-cost labor structures.",
  whyMatters: "Sustained full-time hiring, internal promotion, and skills investment are leading indicators of workforce stability. Heavy reliance on contingent labor or staffing-agency models for core operations correlates with weaker long-term outcomes for U.S. workers.",
  examples: [
    { title: "Steady full-time growth", body: "Three consecutive 10-Ks show net U.S. headcount growth tracking U.S. revenue growth, with low contractor share. Pillar lands in the Strong tier." },
    { title: "Staffing-agency reliance for core ops", body: "Disclosed agency/contractor headcount exceeds 25% of core operating roles. Full-time share sub-score is below the 25th percentile; pillar lands in the Weak tier." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: [
    ...COMMON_LIMITS,
    "Contingent labor disclosure varies across industries — software firms disclose more granularly than logistics peers.",
  ],
  faqs: COMMON_FAQS,
};

const LOCAL_ECONOMIC: PillarContent = {
  kind: "pillar",
  pillarKey: "local_economic",
  slug: "local-economic-contribution",
  title: "Local Economic Contribution",
  weight: 0.14,
  purpose: "Measures whether profits earned from U.S. customers flow back into U.S. capex, U.S. suppliers, and U.S. R&D.",
  whyMatters: "Domestic reinvestment is the difference between a U.S. revenue base that strengthens the U.S. economy and one that doesn't. Capex, supplier spend, and R&D footprint are direct, auditable measures.",
  examples: [
    { title: "Reinvestment tracks revenue mix", body: "A manufacturer earns 62% of revenue domestically and concentrates 58% of capex and 60% of supplier spend in the U.S. Pillar lands in the Strong tier." },
    { title: "Profit extraction, thin reinvestment", body: "A consumer-products company earns 70% of revenue domestically but allocates only 18% of capex and 22% of supplier spend in the U.S. Pillar lands in the Weak tier." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: COMMON_LIMITS,
  faqs: COMMON_FAQS,
};

const LAYOFFS: PillarContent = {
  kind: "pillar",
  pillarKey: "layoffs_high_profits",
  slug: "layoffs-during-high-profits",
  title: "Layoffs During High Profits",
  weight: 0.12,
  purpose: "Evaluates the workforce-stability impact of layoff events, especially those announced in profitable cycles with active buyback programs.",
  whyMatters: "Layoffs ripple across regional housing markets, local tax bases, supplier ecosystems, and household stability. The same percentage cut at very different employer scales produces very different societal impact.",
  scaleResponsibility: "WeSee evaluates both proportional and absolute workforce impact. 8,000 layoffs at a 1.5M-employee mega-cap may displace more workers — and produce broader regional disruption — than a 20% reduction at a 4,000-employee firm. Both are weighted accordingly via a log-scaled absolute-impact penalty.",
  calibration: "Layoffs announced during net-positive earnings or active buyback periods receive an additional profitable-period penalty. Repeated restructuring cycles within a five-year window escalate the penalty further. Severance quality, healthcare bridge, and internal redeployment programs partially offset the penalty.",
  examples: [
    { title: "Mega-cap, sub-1% cut", body: "8,000-person reduction at a profitable 1.5M-employee employer with an active buyback program. Absolute-impact penalty dominates; pillar drops to Weak even though the headline percentage is small." },
    { title: "Mid-cap, double-digit cut, strong severance", body: "12% reduction at a profitable 6,000-person firm with 6-month severance, healthcare bridge, and documented internal redeployment. Severance credit partially offsets, pillar lands in the Moderate band." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: [
    ...COMMON_LIMITS,
    "Layoff events must be confirmed by WARN filings or 10-Q disclosures before they alter the score automatically; press reports alone are insufficient.",
  ],
  faqs: [
    { q: "Why aren't large percentage cuts at small firms penalized more heavily?", a: "Because the absolute number of workers and dependents affected is the primary driver of regional economic disruption. A small employer cutting 25% may affect fewer households than a megacap cutting 1%." },
    { q: "Does net hiring elsewhere offset layoffs?", a: "Partially. The offset is capped at 12% of the pillar weight so that hiring in adjacent geographies cannot erase the impact on displaced workers and communities." },
    ...COMMON_FAQS,
  ],
};

const OUTSOURCING: PillarContent = {
  kind: "pillar",
  pillarKey: "outsourcing_exposure",
  slug: "outsourcing-exposure",
  title: "Outsourcing Exposure",
  weight: 0.10,
  purpose: "Tracks the share of core operating roles a company contracts offshore and the trend of those decisions over time.",
  whyMatters: "Offshoring of core functions directly reduces the U.S. labor base. Even modest percentage shifts at large employers can materially affect regional labor markets.",
  scaleResponsibility: "For employers above 100,000 U.S. workers, both the percentage of roles displaced and the absolute count of U.S. positions affected are evaluated.",
  examples: [
    { title: "Back-office offshore, core onshore", body: "A retailer contracts payroll processing and L1 customer support offshore but keeps merchandising, store operations, and engineering U.S.-based. Pillar lands in the Strong/Moderate band depending on trend." },
    { title: "Core engineering offshoring trend", body: "A software firm shifts 40% of engineering and product roles to offshore contractors over three years while reducing U.S. engineering headcount. Pillar drops to Weak." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: COMMON_LIMITS,
  faqs: COMMON_FAQS,
};

const COMMUNITY: PillarContent = {
  kind: "pillar",
  pillarKey: "community_resilience",
  slug: "community-resilience",
  title: "Community Resilience",
  weight: 0.09,
  purpose: "Measures whether a company's local presence strengthens — or destabilizes — the communities hosting it.",
  whyMatters: "Site stability, local tax contribution net of subsidies, and disaster-response activity directly affect regional economic health.",
  examples: [
    { title: "Tenured presence with documented programs", body: "Five-year footprint is stable, local programs are quantified, and net tax contribution exceeds subsidy receipts. Pillar lands in the Strong tier." },
    { title: "Subsidy capture without commensurate benefit", body: "Subsidy receipts outpace jobs created; site closures occur within five years of incentive packages. Pillar lands in the Weak tier." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: COMMON_LIMITS,
  faqs: COMMON_FAQS,
};

const PRODUCTION_ABROAD: PillarContent = {
  kind: "pillar",
  pillarKey: "production_abroad",
  slug: "production-abroad",
  title: "Production Abroad",
  weight: 0.08,
  purpose: "Measures the share of goods sold to U.S. customers that are produced or assembled domestically.",
  whyMatters: "Production location for U.S.-bound goods determines how domestic demand translates into domestic manufacturing activity and supply-chain resilience.",
  examples: [
    { title: "Diversified U.S.-anchored production", body: "70% of U.S. unit sales are U.S.-assembled with diversified critical-input sourcing. Pillar lands in the Strong tier." },
    { title: "Single-country concentration", body: "U.S. demand is met almost entirely by production concentrated in one foreign country. Pillar lands in the Harmful tier." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: COMMON_LIMITS,
  faqs: COMMON_FAQS,
};

const LOBBYING: PillarContent = {
  kind: "pillar",
  pillarKey: "lobbying_activity",
  slug: "lobbying-activity",
  title: "Lobbying Activity",
  weight: 0.07,
  purpose: "Contextualizes how much a company invests in shaping federal policy relative to its U.S. revenue and peer set.",
  whyMatters: "Lobbying intensity, normalized by U.S. revenue, reveals the scale of a company's policy footprint. High reliance on opaque trade-association vehicles reduces disclosure quality.",
  examples: [
    { title: "Modest, transparent footprint", body: "Spend per $1B U.S. revenue is below sector median, with direct LDA filings detailing concurrent issues. Pillar lands in the Strong tier." },
    { title: "Top-decile spend via trade associations", body: "Spend per $1B U.S. revenue is in the top decile with majority of issues lobbied through third-party trade groups. Pillar lands in the Weak tier." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: COMMON_LIMITS,
  faqs: COMMON_FAQS,
};

const CEO_PAY: PillarContent = {
  kind: "pillar",
  pillarKey: "ceo_pay_ratio",
  slug: "ceo-worker-pay-ratio",
  title: "CEO-to-Worker Pay Ratio",
  weight: 0.10,
  purpose: "Uses the mandatory SEC DEF 14A CEO-to-median-worker pay ratio to evaluate internal pay structure relative to sector peers.",
  whyMatters: "The disclosed pay ratio is a standardized, low-estimation measure of internal pay equity. Multi-year trend is weighted to smooth one-time equity grants.",
  examples: [
    { title: "At or below sector median", body: "Ratio sits at the sector median with an equity-heavy structure and performance gates. Pillar lands in the Strong tier." },
    { title: "Top-quintile ratio, persistent", body: "Ratio is in the top quintile of the S&P 500 across multiple cycles. Pillar lands in the Weak tier." },
  ],
  thresholds: PEER_THRESHOLDS,
  limitations: COMMON_LIMITS,
  faqs: COMMON_FAQS,
};

// ---- Framework pages -------------------------------------------------------

const SOURCE_CONFIDENCE_POLICY: FrameworkContent = {
  kind: "framework",
  slug: "source-confidence-policy",
  title: "Source & Confidence Policy",
  summary: "How WeSee classifies every source it uses, what each tier is allowed to do, and how confidence levels are assigned.",
  sections: [
    { heading: "Tier 1 — Official verified sources", body: "Government filings and primary regulatory disclosures (SEC EDGAR, BLS, OSHA, U.S. Census, OpenSecrets, MIT Living Wage Calculator). These are the only sources allowed to directly modify scores through the automated pipeline." },
    { heading: "Tier 2 — Verified secondary sources", body: "Established financial and investigative journalism (Reuters, Bloomberg, Financial Times, Associated Press, Wall Street Journal). May support rationale notes or trigger manual analyst review. Cannot independently modify a score." },
    { heading: "Tier 3 — Disallowed sources", body: "Unverified, speculative, or opinion-based content (Reddit, TikTok, personal blogs, opinion sites). Never used to score, cite, or substantiate any WeSee finding." },
    { heading: "Confidence levels", body: "Every metric and pillar carries a visible confidence badge.", bullets: [
      "High confidence — backed by official primary-source filings within the most recent reporting cycle.",
      "Medium confidence — backed by a mix of primary and secondary sources; some estimation involved.",
      "Low confidence — partial or estimated data; flagged for manual review and re-verification.",
    ] },
    { heading: "Multi-source verification", body: "High-impact events (layoffs, outsourcing, buyback announcements, executive compensation anomalies) require either official filing confirmation or at least two independent Tier-1/Tier-2 sources before any score change is published." },
    { heading: "Anti-hallucination rule", body: "WeSee never fabricates workforce numbers, layoff counts, compensation data, outsourcing estimates, or profitability metrics. When confidence is weak, the metric is shown with a Low-confidence badge and an uncertainty notice — never escalated into an aggressive scoring conclusion." },
  ],
  faqs: [
    { q: "Can a single news article change a score?", a: "No. Tier-2 sources cannot independently modify a score. They can support context or trigger a manual review, but score changes require Tier-1 confirmation or multi-source verification." },
    { q: "What happens when sources conflict?", a: "Conflicting filings are flagged for manual review. The score is held at the prior value until the conflict is resolved by an analyst with a documented source citation." },
  ],
};

const NORMALIZATION: FrameworkContent = {
  kind: "framework",
  slug: "normalization-framework",
  title: "Normalization Framework",
  summary: "How raw metrics are converted into benchmark-relative, peer-normalized scores you can compare across industries and regions.",
  sections: [
    { heading: "Industry peer cohorts", body: "Every company is grouped into a NAICS-aligned peer cohort. Wages, turnover, injury rates, capex intensity, lobbying spend, and pay ratios are benchmarked against the cohort's distribution — not a global average." },
    { heading: "Cost-of-living adjustment", body: "Worker Standards (specifically the Affordability sub-indicator) is calibrated by metropolitan cost-of-living pressure. Three bands — Elevated, Moderate, Low — dampen raw scores accordingly so that 90+ affordability scores are exceptionally rare in high-cost regions." },
    { heading: "Scale-aware impact", body: "For workforce-impact pillars (Layoffs During High Profits, Outsourcing Exposure) the absolute number of U.S. positions affected is incorporated via a log-scaled penalty, in addition to the relative percentage." },
    { heading: "Percentile tiers", body: "Final pillar scores map onto five tiers — Exceptional (top 10%), Strong (top 25%), Moderate (median–75th), Weak (bottom 50%), Harmful (bottom 25%). Tier labels reflect peer-percentile position, not subjective judgement." },
    { heading: "Stability of breakdowns", body: "Sub-indicator decompositions are derived from the verified pillar score via a deterministic, seeded function so the same company always shows the same breakdown across reloads." },
  ],
  faqs: [
    { q: "Why use peer cohorts instead of a global benchmark?", a: "A 4% voluntary turnover rate is excellent for retail and mediocre for asset management. Peer-cohort normalization keeps comparisons meaningful." },
    { q: "Why is affordability dampened in high-cost metros?", a: "Nominal wage above industry median can still fail MIT Living Wage thresholds in elevated-pressure regions. Calibration ensures exceptional affordability scores reflect real purchasing power." },
  ],
};

const SCALE_RESPONSIBILITY: FrameworkContent = {
  kind: "framework",
  slug: "scale-responsibility-principle",
  title: "Scale-Responsibility Principle",
  summary: "Why both proportional and absolute workforce impact are weighted — and how scale-aware calibration prevents very large employers from being under-penalized.",
  sections: [
    { heading: "The problem with percentage-only models", body: "A 1% workforce reduction at a 1.5M-employee employer affects more workers, dependents, and regional economies than a 25% reduction at a 4,000-employee firm. A percentage-only model under-counts the second-order disruption of large absolute events." },
    { heading: "How WeSee weights both", body: "Workforce-impact pillars combine (a) the relative share of roles affected and (b) the absolute count of U.S. positions affected, normalized by metropolitan-area employment where available. Absolute impact is log-scaled to prevent dominance by single megacap events while still registering scale-driven disruption." },
    { heading: "Worked example", body: "Layoffs During High Profits — 8,000 layoffs at a 1.5M-employee employer with an active buyback program: Absolute-Impact Penalty dominates, Profitable-Period Penalty adds further deduction, Severance Credit partially offsets if generous. Net result lands in the Weak band even though the headline percentage is below 1%." },
    { heading: "What it doesn't do", body: "Scale-responsibility is not a blanket penalty on size. Large employers can earn Exceptional pillar scores by maintaining stable headcount, strong reinvestment, and strong severance practices. The principle only fires when actual workforce-impact events occur." },
  ],
  faqs: [
    { q: "Does scale-responsibility apply to every pillar?", a: "No. It applies primarily to workforce-impact pillars: Layoffs During High Profits and Outsourcing Exposure. Other pillars use industry-normalized peer benchmarks." },
    { q: "Why log-scale absolute impact?", a: "Log-scaling prevents a single mega-event from saturating the indicator while still ensuring that absolute disruption is visibly priced into the score." },
  ],
};

// ---- Registry + alias resolution -------------------------------------------

const PILLARS_BY_SLUG: Record<string, PillarContent> = {
  "worker-standards":              WORKER_STANDARDS,
  "us-workforce-commitment":       US_WORKFORCE_COMMITMENT,
  "local-economic-contribution":   LOCAL_ECONOMIC,
  "local-economic":                LOCAL_ECONOMIC,           // legacy alias
  "layoffs-during-high-profits":   LAYOFFS,
  "layoffs-high-profits":          LAYOFFS,                  // legacy alias
  "outsourcing-exposure":          OUTSOURCING,
  "community-resilience":          COMMUNITY,
  "production-abroad":             PRODUCTION_ABROAD,
  "lobbying-activity":             LOBBYING,
  "ceo-worker-pay-ratio":          CEO_PAY,
  "ceo-pay-ratio":                 CEO_PAY,                  // legacy alias
};

const FRAMEWORKS_BY_SLUG: Record<string, FrameworkContent> = {
  "source-confidence-policy":      SOURCE_CONFIDENCE_POLICY,
  "normalization-framework":       NORMALIZATION,
  "scale-responsibility-principle": SCALE_RESPONSIBILITY,
};

export type ResolvedMethodology =
  | { kind: "pillar"; content: PillarContent }
  | { kind: "framework"; content: FrameworkContent }
  | null;

export function resolveMethodology(slug: string): ResolvedMethodology {
  const pillar = PILLARS_BY_SLUG[slug];
  if (pillar) return { kind: "pillar", content: pillar };
  const framework = FRAMEWORKS_BY_SLUG[slug];
  if (framework) return { kind: "framework", content: framework };
  return null;
}

// Canonical (non-alias) slugs surfaced by the index page.
export const PILLAR_INDEX: { slug: string; title: string; weight: number; purpose: string; pillarKey: PillarKey }[] = [
  WORKER_STANDARDS, US_WORKFORCE_COMMITMENT, LOCAL_ECONOMIC, LAYOFFS,
  CEO_PAY, OUTSOURCING, COMMUNITY, PRODUCTION_ABROAD, LOBBYING,
].map((p) => ({ slug: p.slug, title: p.title, weight: p.weight, purpose: p.purpose, pillarKey: p.pillarKey }));

export const FRAMEWORK_INDEX: { slug: string; title: string; summary: string }[] = [
  SOURCE_CONFIDENCE_POLICY, NORMALIZATION, SCALE_RESPONSIBILITY,
].map((f) => ({ slug: f.slug, title: f.title, summary: f.summary }));
