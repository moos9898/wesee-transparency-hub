// WeSee scoring model — measures U.S. economic & workforce contribution.
// Each pillar is 0–100 where 100 = strongest contribution to the U.S. economy.
// For "exposure"-style pillars (outsourcing, production abroad, lobbying,
// CEO pay ratio, layoffs during high profits) the column already stores
// the *inverse* (higher = less exposure), so all pillars are oriented the
// same way and combine via a simple weighted average.

export const PILLARS = [
  { key: "worker_standards",        label: "Worker Standards",            weight: 0.16, slug: "worker-standards",        inverse: false },
  { key: "us_workforce_commitment", label: "U.S. Workforce Commitment",   weight: 0.14, slug: "us-workforce-commitment", inverse: false },
  { key: "local_economic",          label: "Local Economic Contribution", weight: 0.14, slug: "local-economic",          inverse: false },
  { key: "layoffs_high_profits",    label: "Layoffs During High Profits", weight: 0.12, slug: "layoffs-high-profits",    inverse: true  },
  { key: "ceo_pay_ratio",           label: "CEO-to-Worker Pay Ratio",     weight: 0.10, slug: "ceo-pay-ratio",            inverse: true  },
  { key: "outsourcing_exposure",    label: "Outsourcing Exposure",        weight: 0.10, slug: "outsourcing-exposure",     inverse: true  },
  { key: "community_resilience",    label: "Community Resilience",        weight: 0.09, slug: "community-resilience",     inverse: false },
  { key: "production_abroad",       label: "Production Abroad",           weight: 0.08, slug: "production-abroad",        inverse: true  },
  { key: "lobbying_activity",       label: "Lobbying Activity",           weight: 0.07, slug: "lobbying-activity",        inverse: true  },
] as const;

export type PillarKey = (typeof PILLARS)[number]["key"];

export function calculateOverall(scores: Record<PillarKey, number>): number {
  const total = PILLARS.reduce((acc, p) => acc + (scores[p.key] ?? 0) * p.weight, 0);
  return Math.round(total * 10) / 10;
}

export type Band = "strong" | "positive" | "mixed" | "weak" | "harmful";

const BAND_LABEL: Record<Band, string> = {
  strong: "Strong",
  positive: "Positive",
  mixed: "Mixed",
  weak: "Weak",
  harmful: "Harmful",
};

const BAND_FULL: Record<Band, string> = {
  strong: "Strong Community Impact",
  positive: "Positive Contribution",
  mixed: "Mixed Signals",
  weak: "Weak Contribution",
  harmful: "Harmful to Local Economy",
};

const BAND_TONE: Record<Band, string> = {
  strong: "text-emerald-400",
  positive: "text-lime-400",
  mixed: "text-amber-400",
  weak: "text-orange-400",
  harmful: "text-red-400",
};

export function scoreBand(score: number): Band {
  if (score >= 85) return "strong";
  if (score >= 70) return "positive";
  if (score >= 50) return "mixed";
  if (score >= 30) return "weak";
  return "harmful";
}

export function scoreGrade(score: number): { letter: string; full: string; tone: string; band: Band } {
  const band = scoreBand(score);
  return { letter: BAND_LABEL[band], full: BAND_FULL[band], tone: BAND_TONE[band], band };
}

export function scoreColor(score: number): string {
  const band = scoreBand(score);
  switch (band) {
    case "strong":   return "oklch(0.74 0.17 152)";
    case "positive": return "oklch(0.78 0.17 130)";
    case "mixed":    return "oklch(0.82 0.17 82)";
    case "weak":     return "oklch(0.74 0.18 50)";
    case "harmful":  return "oklch(0.65 0.22 25)";
  }
}

// Per-pillar signals + band-derived rationale text. Neutral, analytical.
export const PILLAR_SIGNALS: Record<PillarKey, {
  signals: string[];
  bands: Record<Band, string>;
}> = {
  worker_standards: {
    signals: [
      "Median U.S. wage vs. industry benchmark",
      "Healthcare, retirement, and parental-leave benefits",
      "OSHA recordable injury and illness rates",
      "Voluntary turnover relative to peers",
      "Apprenticeship and tuition-support investment",
    ],
    bands: {
      strong: "Wages, benefits, safety, and retention all meaningfully exceed industry norms; structured advancement pipelines are funded.",
      positive: "Above-average compensation and benefits; minor gaps in injury rate, retention, or training scale.",
      mixed: "Workforce metrics are mid-pack; pay floor or safety record lags in parts of the operation.",
      weak: "Material gaps in wages, safety, or retention; documented workforce concerns.",
      harmful: "Sustained pattern of below-industry wages, injury rates, or repeat labor-law violations.",
    },
  },
  us_workforce_commitment: {
    signals: [
      "Share of full-time U.S. employees vs. temporary and contractor labor",
      "Apprenticeship, tuition, and skills-development spend per U.S. employee",
      "Multi-year net U.S. hiring trend in core operating roles",
      "Internal promotion and tenure rates across U.S. operations",
      "Use of staffing-agency or short-term labor models for core functions",
    ],
    bands: {
      strong: "Sustained domestic hiring with well-funded training pipelines and low reliance on temporary labor for core operations.",
      positive: "Steady U.S. hiring and credible workforce-development programs; limited reliance on contingent labor.",
      mixed: "Balanced workforce structure; moderate use of contingent labor offset by stable full-time hiring.",
      weak: "Material share of core work performed by short-term or staffing-agency labor; thin training investment.",
      harmful: "Minimal long-term U.S. workforce investment; shrinking full-time headcount despite U.S. revenue growth.",
    },
  },
  local_economic: {
    signals: [
      "Domestic capex relative to U.S. revenue",
      "U.S. supplier spend share of total procurement",
      "U.S. R&D footprint",
      "Net U.S. job creation trend",
      "State and local tax contribution net of credits",
    ],
    bands: {
      strong: "Domestic reinvestment closely tracks the share of revenue earned from U.S. customers.",
      positive: "Meaningful U.S. capex and supplier spend with steady net domestic hiring.",
      mixed: "Domestic reinvestment trails the share of revenue earned in the U.S.; supplier or capex disclosure is partial.",
      weak: "U.S. reinvestment is well below the company's share of revenue earned domestically.",
      harmful: "Sustained net disinvestment in U.S. operations despite profitable U.S. business lines.",
    },
  },
  community_resilience: {
    signals: [
      "Local employment stability (multi-year regional headcount)",
      "Plant, store, and office permanence over five-year windows",
      "State and local tax-base contribution net of subsidies received",
      "Subsidy-to-job ratio for incentivized facility openings",
      "Workforce and infrastructure investment in host regions",
    ],
    bands: {
      strong: "Long-tenured regional employment with permanent facilities and tax-base contribution that comfortably exceeds public subsidies received.",
      positive: "Stable regional workforce with limited closures; subsidies are broadly matched by tax and employment contribution.",
      mixed: "Mixed regional footprint stability; subsidy-to-job ratio or facility permanence is unclear in disclosure.",
      weak: "Repeated closures or workforce contraction in incentivized regions; subsidies outpace measurable local contribution.",
      harmful: "Sustained pattern of subsidy capture without commensurate local employment or tax-base contribution.",
    },
  },
  outsourcing_exposure: {
    signals: [
      "Share of customer support, engineering, and operations contracted offshore",
      "Trend in offshore contractor headcount vs. U.S. employees",
      "Use of body-shop staffing models",
      "Documented impact on U.S. roles from offshoring decisions",
    ],
    bands: {
      strong: "Core operations remain U.S.-anchored with transparent disclosure of any contractor footprint.",
      positive: "Limited offshoring of core functions; back-office work partly contracted abroad.",
      mixed: "Material offshoring of select functions; U.S. headcount trend is flat.",
      weak: "Repeated offshoring announcements with measurable U.S. role displacement.",
      harmful: "Core operating activity has been largely shifted offshore at the expense of U.S. roles.",
    },
  },
  production_abroad: {
    signals: [
      "Share of U.S. revenue tied to U.S.-assembled or U.S.-grown goods",
      "Trend in domestic manufacturing capacity",
      "Reliance on single foreign suppliers for critical inputs",
      "Adoption of nearshoring or reshoring programs",
    ],
    bands: {
      strong: "Most goods sold to U.S. customers are produced domestically; diversified critical-input sourcing.",
      positive: "Substantial U.S. production for the U.S. market; some imported components.",
      mixed: "Roughly balanced domestic and foreign production for U.S. demand.",
      weak: "Majority of U.S.-sold goods are produced abroad; thin domestic manufacturing base.",
      harmful: "U.S. demand is met almost entirely by foreign production with single-country concentration risk.",
    },
  },
  lobbying_activity: {
    signals: [
      "Federal lobbying spend per $B of U.S. revenue (OpenSecrets)",
      "Breadth of policy issues lobbied concurrently",
      "Reliance on trade associations as indirect vehicles",
      "Disclosure timeliness and granularity",
      "Peer-normalized political-participation intensity",
    ],
    bands: {
      strong: "Lobbying footprint is modest relative to U.S. revenue with transparent, granular issue-level disclosure.",
      positive: "Lobbying intensity is in line with industry peers; disclosure quality is reasonable.",
      mixed: "Lobbying intensity is above the peer median across several concurrent issues; readers should weigh how much policy-influence concentration matters to them.",
      weak: "Lobbying intensity is well above peer norms with heavy reliance on indirect trade-association vehicles, reducing visibility into policy aims.",
      harmful: "Top-decile lobbying intensity concentrated in opaque vehicles dominates the company's institutional-policy footprint.",
    },
  },
  ceo_pay_ratio: {
    signals: [
      "Realized CEO pay vs. median worker (DEF 14A disclosure)",
      "Multi-year trend in the ratio",
      "Composition of CEO pay (equity vs. cash)",
      "One-time grants and performance modifiers",
    ],
    bands: {
      strong: "CEO compensation is at or below sector median relative to the median worker.",
      positive: "Pay ratio is in line with the sector; equity-heavy structure with reasonable performance gates.",
      mixed: "Pay ratio is above sector median but within the broader S&P 500 range.",
      weak: "Pay ratio is in the top quintile of the S&P 500, often inflated by one-time grants.",
      harmful: "Pay ratio is among the highest disclosed and has persisted across multiple cycles.",
    },
  },
  layoffs_high_profits: {
    signals: [
      "Announced U.S. layoffs as a share of headcount in high-profit years",
      "Severance and transition-support quality",
      "Net hiring offset across the same period",
      "Pattern across multiple cycles",
    ],
    bands: {
      strong: "No material U.S. workforce reductions during recent record-profit cycles.",
      positive: "Limited or targeted reductions paired with credible severance and net hiring elsewhere.",
      mixed: "Multi-percent workforce reductions in profitable years, partly offset by hiring.",
      weak: "Repeated broad reductions in profitable cycles with thin offsetting hiring.",
      harmful: "Successive double-digit workforce cuts concentrated in U.S. roles during record-profit years.",
    },
  },
};

export function pillarRationale(key: PillarKey, score: number, customNote?: string | null) {
  const band = scoreBand(score);
  const meta = PILLAR_SIGNALS[key];
  return {
    band,
    headline: BAND_FULL[band],
    summary: meta.bands[band],
    signals: meta.signals,
    customNote: customNote?.trim() || null,
  };
}
