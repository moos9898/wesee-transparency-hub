// Deterministic derivation of per-factor scores from a headline pillar score.
// Same technique as deriveSubScores() in benchmarks.ts, but keyed to the
// canonical registry factors (equation, variables, sources, audit trail).
//
// The weighted average of the derived factor scores reconstructs the pillar
// score exactly, so the "worked calculation" shown to users is internally
// consistent with the headline number.

import { factorsByPillar, type FactorDef } from "./registry";
import type { PillarKey } from "@/lib/score";
import { benchmarkTier, type BenchmarkTier } from "@/lib/benchmarks";

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
    seed = (seed + 0x6d2b79f5) | 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface FactorScore {
  factor: FactorDef;
  score: number;      // 0..100, integer
  tier: BenchmarkTier;
}

export function deriveFactorScores(
  pillarKey: PillarKey,
  pillarScore: number,
  seedKey: string,
): FactorScore[] {
  const factors = factorsByPillar(pillarKey);
  if (!factors.length) return [];
  const rand = mulberry32(hashSeed(`${seedKey}::factors::${pillarKey}`));
  const rawOffsets = factors.map(() => (rand() - 0.5) * 30); // ±15
  const meanOffset = factors.reduce((s, f, i) => s + f.weight * rawOffsets[i], 0);
  const centered = rawOffsets.map((o) => o - meanOffset);

  // First pass: clamp to [0,100].
  const scores = factors.map((_, i) => Math.max(0, Math.min(100, pillarScore + centered[i])));

  // Correct the residual so the weighted mean equals the pillar score exactly.
  // Clamping (especially near 0 and 100) can absorb offsets, so distribute the
  // remainder across every factor that still has headroom, largest weight first.
  const order = factors.map((_, i) => i).sort((a, b) => factors[b].weight - factors[a].weight);
  for (let pass = 0; pass < 8; pass++) {
    const weightedMean = factors.reduce((s, f, i) => s + f.weight * scores[i], 0);
    let residual = pillarScore - weightedMean;
    if (Math.abs(residual) < 1e-6) break;
    for (const i of order) {
      if (Math.abs(residual) < 1e-6) break;
      const room = residual > 0 ? 100 - scores[i] : -scores[i];
      if (Math.abs(room) < 1e-9) continue;
      const delta = residual / factors[i].weight;
      const applied = residual > 0 ? Math.min(delta, room) : Math.max(delta, room);
      scores[i] += applied;
      residual -= applied * factors[i].weight;
    }
  }


  return factors.map((factor, i) => {
    const score = Math.round(scores[i]);
    return { factor, score, tier: benchmarkTier(score) };
  });
}

/** Pretty "78 × 0.30" pair. */
export function fmtTerm(score: number, weight: number): string {
  return `${score} × ${weight.toFixed(2)}`;
}
