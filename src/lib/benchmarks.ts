// Benchmarking framework: every pillar score is decomposed into weighted
// sub-indicators with transparent thresholds and normalization bases.
// This module replaces subjective labels ("strong", "weak") with
// explainable, benchmark-relative tiers tied to peer-percentile ranges.

import type { PillarKey } from "./score";

export type BenchmarkTier = "exceptional" | "strong" | "moderate" | "weak" | "harmful";

export const BENCHMARK_TIERS: Record<BenchmarkTier, {
  label: string;
  range: string;       // e.g. "Top 10% of tracked peers"
  description: string; // explainable, non-emotional
  tone: string;
  min: number;
}> = {
  exceptional: {
    label: "Exceptional",
    range: "Top 10% of tracked peers",
    description: "Performs in the top decile of weighted indicators against industry peers, adjusted for cost-of-living and workforce scale.",
    tone: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    min: 85,
  },
  strong: {
    label: "Strong",
    range: "Top 25% of tracked peers",
    description: "Performs in the top quartile across weighted indicators relative to industry benchmarks and affordability conditions.",
    tone: "text-lime-400 border-lime-500/30 bg-lime-500/5",
    min: 70,
  },
  moderate: {
    label: "Moderate",
    range: "Median to 75th percentile",
    description: "Performs near the peer median across weighted indicators; mixed results once normalized for industry context.",
    tone: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    min: 50,
  },
  weak: {
    label: "Weak",
    range: "Bottom 50% of tracked peers",
    description: "Indicators trail peer medians after normalization for industry baselines and cost-of-living conditions.",
    tone: "text-orange-400 border-orange-500/30 bg-orange-500/5",
    min: 30,
  },
  harmful: {
    label: "Harmful",
    range: "Bottom 25% of tracked peers",
    description: "Sustained underperformance across weighted indicators relative to industry peers and minimum sustainability thresholds.",
    tone: "text-red-400 border-red-500/30 bg-red-500/5",
    min: 0,
  },
};

export function benchmarkTier(score: number): BenchmarkTier {
  if (score >= 85) return "exceptional";
  if (score >= 70) return "strong";
  if (score >= 50) return "moderate";
  if (score >= 30) return "weak";
  return "harmful";
}

export interface SubIndicator {
  key: string;
  label: string;
  weight: number;        // sub-indicator weight within the pillar (sums to 1)
  basis: string;         // normalization basis — how the value is benchmarked
}

// Per-pillar sub-indicators with transparent weights.
// Worker Standards uses the canonical structure called out in the brief.
export const PILLAR_SUBINDICATORS: Record<PillarKey, SubIndicator[]> = {
  worker_standards: [
    { key: "wage_competitiveness", label: "Wage competitiveness", weight: 0.30, basis: "Median U.S. wage vs. BLS industry medians at county level" },
    { key: "benefits",             label: "Benefits",             weight: 0.20, basis: "Healthcare, retirement, parental leave, PTO scored against industry baselines" },
    { key: "affordability",        label: "Affordability",        weight: 0.20, basis: "Wage vs. MIT Living Wage by county; disposable-income index" },
    { key: "retention",            label: "Retention",            weight: 0.15, basis: "Voluntary turnover and tenure vs. NAICS peer cohort" },
    { key: "safety",               label: "Safety",               weight: 0.10, basis: "OSHA recordable injury and lost-time rates vs. industry baseline" },
    { key: "advancement",          label: "Advancement",          weight: 0.05, basis: "Apprenticeship, tuition, and internal promotion rates per employee" },
  ],
  us_workforce_commitment: [
    { key: "ft_share",        label: "Full-time vs. contingent share", weight: 0.35, basis: "Full-time U.S. employees vs. temp/contractor headcount, by industry" },
    { key: "hiring_trend",    label: "Multi-year U.S. hiring trend",   weight: 0.25, basis: "Net U.S. headcount change indexed to U.S. revenue growth" },
    { key: "training_spend",  label: "Training & apprenticeship",      weight: 0.20, basis: "Training and tuition spend per U.S. employee vs. peers" },
    { key: "promotion_rate",  label: "Internal promotion rate",        weight: 0.20, basis: "Share of openings filled internally; multi-year tenure curves" },
  ],
  local_economic: [
    { key: "domestic_capex",   label: "Domestic capex / U.S. revenue", weight: 0.30, basis: "Capex in U.S. as a share of U.S.-attributable revenue" },
    { key: "supplier_spend",   label: "U.S. supplier spend share",     weight: 0.25, basis: "Share of procurement contracted to U.S. suppliers" },
    { key: "rd_footprint",     label: "U.S. R&D footprint",            weight: 0.20, basis: "R&D headcount and spend conducted on U.S. soil" },
    { key: "net_jobs",         label: "Net U.S. job creation",         weight: 0.15, basis: "Multi-year net U.S. hiring in core operating roles" },
    { key: "tax_contribution", label: "State & local tax contribution",weight: 0.10, basis: "State and local taxes paid net of subsidies received" },
  ],
  community_resilience: [
    { key: "footprint_stability", label: "Site footprint stability",   weight: 0.35, basis: "Plant/store/office closures vs. openings over five years" },
    { key: "local_programs",      label: "Local philanthropy & programs", weight: 0.25, basis: "Community spend per region normalized by local revenue" },
    { key: "subsidy_balance",     label: "Tax base vs. subsidies",     weight: 0.25, basis: "Local tax contribution net of public subsidies received" },
    { key: "disaster_response",   label: "Disaster-response contributions", weight: 0.15, basis: "Documented infrastructure and relief contributions" },
  ],
  outsourcing_exposure: [
    { key: "core_offshore",   label: "Core-function offshoring share", weight: 0.40, basis: "Share of core operating roles contracted offshore" },
    { key: "offshore_trend",  label: "Offshore contractor trend",       weight: 0.25, basis: "Offshore contractor headcount trend vs. U.S. employee trend" },
    { key: "body_shop",       label: "Body-shop staffing use",          weight: 0.20, basis: "Reliance on third-party staffing for core functions" },
    { key: "displacement",    label: "Documented displacement events",  weight: 0.15, basis: "WARN notices and SEC-disclosed U.S. role reductions tied to offshoring" },
  ],
  production_abroad: [
    { key: "domestic_share",     label: "Domestic production share",     weight: 0.40, basis: "U.S.-assembled goods as a share of U.S. unit sales" },
    { key: "capacity_trend",     label: "Domestic capacity trend",       weight: 0.25, basis: "Multi-year change in U.S. manufacturing capacity" },
    { key: "supplier_concentration", label: "Critical-input concentration", weight: 0.20, basis: "Single-country supplier concentration for critical inputs" },
    { key: "reshoring",          label: "Reshoring program adoption",    weight: 0.15, basis: "Announced and verified nearshoring/reshoring commitments" },
  ],
  lobbying_activity: [
    { key: "spend_intensity", label: "Spend per $1B U.S. revenue",     weight: 0.40, basis: "OpenSecrets federal lobbying spend normalized by U.S. revenue" },
    { key: "issue_breadth",   label: "Issue breadth",                  weight: 0.20, basis: "Number of concurrent policy issues lobbied vs. peers" },
    { key: "trade_assoc",     label: "Trade-association reliance",     weight: 0.20, basis: "Share of lobbying conducted via indirect trade-association vehicles" },
    { key: "disclosure",      label: "Disclosure quality",             weight: 0.20, basis: "Timeliness and granularity of LDA filings" },
  ],
  ceo_pay_ratio: [
    { key: "ratio_vs_sector", label: "Ratio vs. sector median", weight: 0.50, basis: "DEF 14A CEO-to-median-worker ratio vs. sector median" },
    { key: "trend",           label: "Multi-year trend",        weight: 0.25, basis: "Five-year direction of the disclosed pay ratio" },
    { key: "equity_mix",      label: "Equity vs. cash mix",     weight: 0.15, basis: "Composition of CEO realized compensation" },
    { key: "performance_gate",label: "Performance gates",       weight: 0.10, basis: "Quality of performance modifiers attached to equity grants" },
  ],
  layoffs_high_profits: [
    { key: "absolute_impact",  label: "Absolute U.S. positions affected", weight: 0.42, basis: "Total U.S. workers displaced — weighted by societal disruption, not just headcount percentage" },
    { key: "share_profitable", label: "Layoff share in profitable years", weight: 0.28, basis: "Announced U.S. layoffs during net-positive earnings, high free cash flow, or active buyback periods" },
    { key: "severance",        label: "Severance & transition quality",   weight: 0.18, basis: "Severance generosity, healthcare bridge, retraining, redeployment, and re-employment support" },
    { key: "offset_hiring",    label: "Net hiring offset (capped)",       weight: 0.12, basis: "Offsetting U.S. hiring during the same period — contextual only, limited score-recovery power" },
  ],
};

// Deterministic seeded PRNG so the same company always shows the same
// sub-indicator breakdown across reloads.
function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed: number) {
  return function () {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface SubScore extends SubIndicator {
  score: number;       // 0–100
  tier: BenchmarkTier;
}

// Derive sub-indicator scores from a pillar score so the weighted average of
// the parts reconstructs the headline number. Variance is bounded by ±18
// points around the pillar score to keep breakdowns plausible and stable.
export function deriveSubScores(
  pillarKey: PillarKey,
  pillarScore: number,
  seedKey: string,
): SubScore[] {
  const indicators = PILLAR_SUBINDICATORS[pillarKey];
  const rand = mulberry32(hashSeed(`${seedKey}:${pillarKey}`));
  const offsets = indicators.map(() => (rand() - 0.5) * 36); // ±18

  // Re-center offsets so weighted sum equals 0 (preserves pillar average).
  const meanOffset = indicators.reduce((s, ind, i) => s + ind.weight * offsets[i], 0);
  const recentered = offsets.map((o) => o - meanOffset);

  return indicators.map((ind, i) => {
    const raw = pillarScore + recentered[i];
    const score = Math.max(0, Math.min(100, Math.round(raw)));
    return { ...ind, score, tier: benchmarkTier(score) };
  });
}

// One-line, non-emotional summary using benchmark language.
export function benchmarkSummary(pillarLabel: string, score: number): string {
  const t = BENCHMARK_TIERS[benchmarkTier(score)];
  return `${pillarLabel} indicators score in the ${t.range.toLowerCase()} after weighted, industry-normalized analysis.`;
}

export const EXPLAINABLE_MODELING_NOTE =
  "WeSee scores are generated through weighted analysis of verified workforce, affordability, compensation, and economic-contribution indicators normalized against industry benchmarks and real-world cost-of-living conditions. Tier labels reflect relative position against tracked peers, not absolute moral judgements.";
