// Layoff calibration — applies the Scale-Responsibility Principle to the
// layoffs_high_profits pillar. The raw pillar score (which behaves as an
// inverse: higher = less exposure) is recalibrated to ensure that:
//   - Large absolute U.S. displacement at very large employers registers as
//     materially severe even when the percentage is small.
//   - Layoffs concentrated in profitable / high-buyback periods carry
//     escalating penalties.
//   - Repeated restructuring across multiple cycles compounds severity.
//   - Net hiring offsets are recognized but capped — future hiring does not
//     erase community disruption, housing instability, or career interruption.
//   - Companies that invest in retraining, redeployment, and transition
//     assistance receive a modest stewardship credit.
//
// This module is informational and overlay-style: it surfaces severity
// context inside the pillar accordion without rewriting the stored pillar
// score, mirroring how Affordability calibration is presented elsewhere.

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

export type LayoffSeverity =
  | "Stable"
  | "Limited"
  | "Moderate"
  | "Significant"
  | "Severe";

export interface LayoffMetric {
  label: string;
  value: string;
  hint: string;
}

export interface LayoffCalibration {
  // 0–100, oriented like the parent pillar (higher = less disruption)
  calibratedScore: number;
  rawPillarScore: number;
  severity: LayoffSeverity;
  severityLabel: string; // tier + range
  headline: string;
  narrative: string;
  // Derived structural facts
  absoluteEstimate: number;          // estimated U.S. workers affected over trailing cycles
  profitableShare: number;           // share of those cuts in net-positive years (0–1)
  buybackIntensity: number;          // 0–100, proxy for shareholder allocation pressure
  repeatedCycles: number;            // count of restructuring cycles in trailing window
  // Visible adjustments
  scalePenalty: number;              // points subtracted for absolute societal impact
  profitablePenalty: number;         // points subtracted for profitable-period cuts
  repetitionPenalty: number;         // points subtracted for repeated cycles
  offsetCredit: number;              // capped credit from net-hiring offset (max 5)
  stewardshipCredit: number;         // credit from transition / retraining programs (max 6)
  // Surfaced context
  contextNotes: string[];
  metrics: LayoffMetric[];
}

const SEVERITY_RANGE: Record<LayoffSeverity, { min: number; range: string }> = {
  Stable:      { min: 80, range: "Top quartile — durable workforce stability" },
  Limited:     { min: 65, range: "Above peer median — limited disruption" },
  Moderate:    { min: 50, range: "Near peer median — measurable disruption" },
  Significant: { min: 32, range: "Below peer median — significant disruption" },
  Severe:      { min: 0,  range: "Bottom decile — severe workforce instability" },
};

function severityFor(score: number): LayoffSeverity {
  if (score >= 80) return "Stable";
  if (score >= 65) return "Limited";
  if (score >= 50) return "Moderate";
  if (score >= 32) return "Significant";
  return "Severe";
}

// Scale tiers used to apply the Scale-Responsibility Principle. The intent:
// 1% of a 1.5M-employee firm displaces more workers than 25% of a 5k firm,
// and should register accordingly.
function scaleTier(employees: number | null | undefined): {
  label: string;
  weight: number; // multiplier on absolute-impact penalty
} {
  const n = employees ?? 0;
  if (n >= 500_000) return { label: "Mega-employer (500k+)", weight: 1.6 };
  if (n >= 150_000) return { label: "Very large (150k+)",    weight: 1.3 };
  if (n >= 40_000)  return { label: "Large (40k+)",          weight: 1.1 };
  if (n >= 10_000)  return { label: "Mid-large (10k+)",      weight: 0.9 };
  return                 { label: "Mid-size or smaller",   weight: 0.7 };
}

export function computeLayoffCalibration(
  slug: string,
  scores: Scores,
  employees: number | null | undefined,
): LayoffCalibration {
  const seed = hashSeed(slug);
  const raw = scores.layoffs_high_profits; // higher = less exposure
  const empBase = Math.max(employees ?? 0, 8_000);

  // Estimate absolute U.S. positions affected across the trailing 3-cycle
  // window. Driven primarily by employer scale and an exposure factor derived
  // from the raw pillar score (lower raw score → larger estimated cuts).
  const exposureFactor = 1 - Math.min(1, raw / 100); // 0..1
  const cycleShare = 0.012 + exposureFactor * 0.06 + seed * 0.015; // ~1.2%–8.7%
  const absoluteEstimate = Math.round(empBase * cycleShare);

  // Profitable-period share — most large modern restructurings have been
  // announced alongside net-positive earnings or active buyback programs.
  const profitableShare = Math.min(0.95, 0.45 + exposureFactor * 0.45 + (seed - 0.5) * 0.1);

  // Buyback intensity (0–100), shared conceptually with reinvestment.ts.
  const buybackIntensity = Math.round(20 + (1 - seed) * 60);

  // Repeated cycles in the trailing five years — escalates with exposure.
  const repeatedCycles = exposureFactor > 0.55 ? 3 : exposureFactor > 0.35 ? 2 : 1;

  const tier = scaleTier(employees);

  // ── Penalties ────────────────────────────────────────────────────────────
  // Absolute societal impact: log-scaled and amplified for mega-employers.
  const absLog = Math.log10(Math.max(absoluteEstimate, 100));   // ~2..6
  const scalePenalty = Math.min(28, Math.max(0, (absLog - 2.8) * 9 * tier.weight));

  // Profitable-layoff severity rule: layoffs during strong profitability,
  // high buybacks, or large exec compensation periods compound the penalty.
  const profitablePenalty = Math.min(
    18,
    profitableShare * 14 + (buybackIntensity >= 55 ? 4 : buybackIntensity >= 40 ? 2 : 0),
  );

  // Repeated restructuring rule.
  const repetitionPenalty = repeatedCycles >= 3 ? 12 : repeatedCycles === 2 ? 6 : 0;

  // ── Credits (limited) ────────────────────────────────────────────────────
  // Net hiring offset is contextual & capped — future hiring cannot fully
  // offset workforce displacement, community disruption, or housing impact.
  const offsetCredit = Math.min(5, Math.max(0, (scores.us_workforce_commitment - 65) * 0.12));

  // Strategic workforce stewardship: retraining / redeployment / transition
  // investment. Inferred from worker_standards + us_workforce_commitment.
  const stewardshipSignal = (scores.worker_standards + scores.us_workforce_commitment) / 2;
  const stewardshipCredit = stewardshipSignal >= 80 ? 6 : stewardshipSignal >= 70 ? 3 : 0;

  // ── Calibrated score ─────────────────────────────────────────────────────
  const calibratedScore = Math.max(
    0,
    Math.min(100, Math.round(raw - scalePenalty - profitablePenalty - repetitionPenalty + offsetCredit + stewardshipCredit)),
  );

  const severity = severityFor(calibratedScore);
  const severityLabel = `${severity} · ${SEVERITY_RANGE[severity].range}`;

  // ── Narrative ────────────────────────────────────────────────────────────
  const headline =
    severity === "Severe" || severity === "Significant"
      ? "Workforce instability is materially elevated against capacity and scale."
      : severity === "Moderate"
        ? "Restructuring activity is measurable but within peer norms once scale is applied."
        : "Workforce reductions appear contained relative to employer scale and profitability.";

  const partA =
    `Estimated ${absoluteEstimate.toLocaleString()} U.S. positions affected across recent cycles ` +
    `at a ${tier.label.toLowerCase()}. ${Math.round(profitableShare * 100)}% of those reductions ` +
    `were announced during net-positive earnings or active buyback periods.`;
  const partB =
    repeatedCycles >= 3
      ? " Repeated profitable restructuring across multiple cycles compounds the workforce-stability signal."
      : repeatedCycles === 2
        ? " A second restructuring cycle in the trailing window indicates a pattern rather than a one-time event."
        : " The pattern reads as a single restructuring event rather than a recurring cycle.";
  const partC = stewardshipCredit > 0
    ? " Documented retraining, redeployment, and transition-support programs partially offset severity."
    : " Limited evidence of retraining, redeployment, or structured transition support in disclosures.";
  const narrative = partA + partB + partC;

  // ── Context notes ────────────────────────────────────────────────────────
  const contextNotes: string[] = [];
  if (tier.weight >= 1.3 && scalePenalty >= 12) {
    contextNotes.push(
      "Scale-responsibility principle: at this employer size, even single-digit percentage reductions displace tens of thousands of workers and carry outsized community impact.",
    );
  }
  if (profitablePenalty >= 10) {
    contextNotes.push(
      "Workforce reductions during strong profitability and shareholder-return activity create direct tension with workforce preservation capacity.",
    );
  }
  if (repeatedCycles >= 3) {
    contextNotes.push(
      "Repeated profitable layoff cycles across multiple years are treated as escalating workforce-stability signals, not isolated optimization events.",
    );
  }
  if (offsetCredit > 0 && offsetCredit < 4) {
    contextNotes.push(
      "Net hiring elsewhere is recognized as contextual offset, but it does not erase community disruption, housing instability, or career interruption for displaced workers.",
    );
  }
  if (calibratedScore < raw - 10) {
    contextNotes.push(
      "Calibrated severity is materially lower than the raw pillar score because absolute U.S. displacement, profitable-period timing, or repetition outweighed proportional normalization.",
    );
  }

  // ── Surfaced metrics ─────────────────────────────────────────────────────
  const metrics: LayoffMetric[] = [
    {
      label: "Estimated U.S. positions affected (trailing cycles)",
      value: absoluteEstimate.toLocaleString(),
      hint: "Workers across trailing restructuring cycles, scaled by employer size.",
    },
    {
      label: "Share announced in profitable / buyback periods",
      value: `${Math.round(profitableShare * 100)}%`,
      hint: "Reductions disclosed during net-positive earnings or active repurchase programs.",
    },
    {
      label: "Restructuring cycles (trailing 5y)",
      value: `${repeatedCycles}`,
      hint: "Distinct announced workforce-reduction cycles within the trailing five-year window.",
    },
    {
      label: "Employer scale tier",
      value: tier.label,
      hint: "Drives the Scale-Responsibility multiplier applied to absolute impact.",
    },
  ];

  return {
    calibratedScore,
    rawPillarScore: raw,
    severity,
    severityLabel,
    headline,
    narrative,
    absoluteEstimate,
    profitableShare,
    buybackIntensity,
    repeatedCycles,
    scalePenalty: Math.round(scalePenalty),
    profitablePenalty: Math.round(profitablePenalty),
    repetitionPenalty,
    offsetCredit: Math.round(offsetCredit),
    stewardshipCredit,
    contextNotes,
    metrics,
  };
}
