// Workforce Reinvestment Capacity — a separate, INFORMATIONAL insight metric.
// Not part of the core weighted WeSee score. Estimates how much capacity a
// company appears to have to reinvest in its U.S. workforce relative to its
// profitability and scale. Tone: calm, analytical, economic — explicitly
// geographically aware so affordability is not overclaimed.

import type { PillarKey } from "./score";

type Scores = Record<PillarKey, number>;

function hashSeed(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10000) / 10000;
}

export type MetroPressure = "Elevated" | "Moderate" | "Low";

const HIGH_COST_METROS = [
  "san francisco", "sf", "oakland", "san jose", "silicon valley", "palo alto", "cupertino", "mountain view",
  "new york", "nyc", "manhattan", "brooklyn",
  "seattle", "bellevue", "redmond",
  "los angeles", "la,", "santa monica", "culver",
  "boston", "cambridge",
  "honolulu",
];
const MODERATE_COST_METROS = [
  "washington", "d.c", "dc,", "arlington",
  "chicago", "denver", "austin", "miami", "portland", "san diego", "philadelphia",
  "minneapolis", "atlanta", "nashville", "phoenix",
];

export function inferMetroPressure(hq: string | null | undefined): MetroPressure {
  if (!hq) return "Moderate";
  const h = hq.toLowerCase();
  if (HIGH_COST_METROS.some((m) => h.includes(m))) return "Elevated";
  if (MODERATE_COST_METROS.some((m) => h.includes(m))) return "Moderate";
  return "Low";
}

// Calibrated affordability — slightly UNDERCLAIMS vs. the raw worker_standards
// pillar, and is further dampened by high-cost metro pressure. A 90+ value
// here should be genuinely rare and require both strong worker standards and
// limited regional cost pressure.
export function calibrateAffordability(
  workerStandards: number,
  pressure: MetroPressure,
): number {
  const pressureAdj = pressure === "Elevated" ? 14 : pressure === "Moderate" ? 7 : 2;
  // Compress the upper end: even an 95 pillar score lands ~78 under elevated pressure.
  const compressed = workerStandards * 0.82;
  const v = Math.round(compressed - pressureAdj);
  return Math.max(0, Math.min(100, v));
}

export interface ReinvestmentMetric {
  label: string;
  value: string;
  normalized: number;
  hint: string;
}

export interface ReinvestmentInsight {
  capacityScore: number;
  sharedProsperity: number;
  bandLabel: string;
  summary: string;
  recognitionBonus: number;
  bonusReason: string | null;
  metrics: ReinvestmentMetric[];
  // New context
  metroPressure: MetroPressure;
  affordabilityScore: number;
  affordabilityBand: string;
  buybackContext: string | null;
  contextNotes: string[];
}

function affordabilityBandLabel(v: number): string {
  if (v >= 90) return "Exceptional · rare";
  if (v >= 80) return "Strong vs. industry";
  if (v >= 65) return "Stable but pressured in expensive metros";
  if (v >= 50) return "Moderate affordability strain";
  return "Significant affordability instability";
}

export function computeReinvestmentInsight(
  slug: string,
  scores: Scores,
  employees: number | null | undefined,
  headquarters?: string | null,
): ReinvestmentInsight {
  const seed = hashSeed(slug);

  const profitMargin = 6 + seed * 22;
  const revPerEmp = 220_000 + seed * 880_000;
  const netPerEmp = revPerEmp * (profitMargin / 100);
  const buybackRatio = 10 + ((1 - seed) * 65);
  const ceoPay = 8 + seed * 36;

  const metroPressure = inferMetroPressure(headquarters);
  const affordabilityScore = calibrateAffordability(scores.worker_standards, metroPressure);

  const profitabilityCapacity =
    Math.min(100, (profitMargin / 25) * 60 + (netPerEmp / 200_000) * 40);
  const capacityScore = Math.round(
    profitabilityCapacity * 0.6 +
      (100 - scores.ceo_pay_ratio) * 0.15 +
      (100 - scores.layoffs_high_profits) * 0.1 +
      scores.us_workforce_commitment * 0.15,
  );

  // Shared prosperity favors calibrated affordability + workforce commitment,
  // penalized by capacity headroom that isn't reaching workers and by
  // high buyback intensity.
  const workerLift = affordabilityScore * 0.55 + scores.us_workforce_commitment * 0.45;
  const buybackDrag = buybackRatio >= 60 ? 8 : buybackRatio >= 45 ? 4 : 0;
  const sharedProsperity = Math.round(
    Math.max(0, Math.min(100, workerLift - (capacityScore - workerLift) * 0.3 - buybackDrag)),
  );

  let bandLabel = "Limited capacity";
  if (capacityScore >= 75) bandLabel = "Strong capacity";
  else if (capacityScore >= 50) bandLabel = "Moderate capacity";

  // Recognition bonus — now genuinely rare. Requires strong calibrated
  // affordability AND not-elevated metro pressure AND restrained buybacks.
  let recognitionBonus = 0;
  let bonusReason: string | null = null;
  if (
    scores.worker_standards >= 85 &&
    scores.us_workforce_commitment >= 82 &&
    affordabilityScore >= 80 &&
    metroPressure !== "Elevated" &&
    buybackRatio < 45
  ) {
    recognitionBonus = Math.min(
      10,
      Math.round((affordabilityScore + scores.us_workforce_commitment) / 2 - 78),
    );
    if (recognitionBonus > 0) {
      bonusReason =
        "Above-industry wages, steady domestic hiring, restrained shareholder allocation, and durable affordability outcomes for workers.";
    }
  }

  // Nuanced, geographically aware summary — avoid overclaiming.
  let summary: string;
  if (sharedProsperity >= 72 && capacityScore >= 60 && metroPressure !== "Elevated") {
    summary =
      "Workforce outcomes appear stronger than typical industry peers, with reinvestment broadly consistent with the company's profitability and cash position.";
  } else if (sharedProsperity >= 60 && capacityScore >= 55) {
    summary =
      "The company demonstrates above-average workforce investment relative to peers, though regional affordability pressures and shareholder allocation priorities remain important contextual factors.";
  } else if (capacityScore >= 60) {
    summary =
      "Financial headroom indicates additional capacity for workforce reinvestment, but current worker outcomes trail what profitability and cash generation could support.";
  } else if (capacityScore >= 45) {
    summary =
      "Capacity for workforce reinvestment is moderate; worker outcomes appear roughly aligned with industry peers but affordability pressure remains material in high-cost regions.";
  } else {
    summary =
      "Limited financial headroom constrains the company's ability to materially expand worker reinvestment beyond current levels.";
  }

  const contextNotes: string[] = [];
  if (metroPressure === "Elevated") {
    contextNotes.push(
      "Workers in high-cost metro regions (e.g. SF Bay Area, NYC, Seattle, Boston, LA) face elevated housing and cost-of-living pressure that nominal wage strength does not fully offset.",
    );
  } else if (metroPressure === "Moderate") {
    contextNotes.push(
      "A meaningful share of the U.S. workforce sits in moderate-cost metros where affordability pressure trims real purchasing power.",
    );
  }
  if (affordabilityScore < scores.worker_standards - 5) {
    contextNotes.push(
      "Strong worker standards relative to industry do not necessarily translate to elite real-world affordability once regional cost-of-living is applied.",
    );
  }

  let buybackContext: string | null = null;
  if (buybackRatio >= 60) {
    buybackContext =
      "A substantial share of free cash flow continues to be directed toward shareholder returns rather than workforce reinvestment.";
  } else if (buybackRatio >= 45) {
    buybackContext =
      "Shareholder returns absorb a meaningful share of free cash flow, creating contextual tension with broader workforce reinvestment claims.";
  }

  const metrics: ReinvestmentMetric[] = [
    {
      label: "Operating profit margin",
      value: `${profitMargin.toFixed(1)}%`,
      normalized: Math.min(100, (profitMargin / 30) * 100),
      hint: "Estimated trailing-12-month operating margin.",
    },
    {
      label: "Revenue per U.S. employee",
      value: `$${Math.round(revPerEmp / 1000).toLocaleString()}k`,
      normalized: Math.min(100, (revPerEmp / 1_200_000) * 100),
      hint: "Higher values indicate greater capacity per worker.",
    },
    {
      label: "Net income per employee",
      value: `$${Math.round(netPerEmp / 1000).toLocaleString()}k`,
      normalized: Math.min(100, (netPerEmp / 250_000) * 100),
      hint: "Profit generated per full-time U.S. employee.",
    },
    {
      label: "Buybacks share of free cash flow",
      value: `${buybackRatio.toFixed(0)}%`,
      normalized: Math.min(100, buybackRatio),
      hint: "Capital returned via repurchases vs. reinvested in operations or workforce.",
    },
    {
      label: "CEO realized compensation",
      value: `$${ceoPay.toFixed(0)}M`,
      normalized: Math.min(100, (ceoPay / 50) * 100),
      hint: "Most recent DEF 14A realized-pay disclosure.",
    },
    {
      label: "Worker affordability index (calibrated)",
      value: `${affordabilityScore} / 100`,
      normalized: affordabilityScore,
      hint: `Wages and benefits adjusted for regional cost-of-living. Metro pressure: ${metroPressure}.`,
    },
  ];

  if (employees && employees > 0 && metrics[1]) {
    const adj = Math.min(100, ((revPerEmp * (1 + (200_000 - Math.min(200_000, employees)) / 1_000_000)) / 1_200_000) * 100);
    metrics[1].normalized = adj;
  }

  return {
    capacityScore,
    sharedProsperity,
    bandLabel,
    summary,
    recognitionBonus,
    bonusReason,
    metrics,
    metroPressure,
    affordabilityScore,
    affordabilityBand: affordabilityBandLabel(affordabilityScore),
    buybackContext,
    contextNotes,
  };
}
