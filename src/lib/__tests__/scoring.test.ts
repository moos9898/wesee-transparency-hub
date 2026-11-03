// Consistency tests for the WeSee scoring model.
// These check the invariants the methodology claims publicly:
//  1. Pillar weights sum to 1.00
//  2. Each pillar's factor weights sum to 1.00
//  3. Derived factor scores reconstruct the headline pillar score
//  4. Derivation is deterministic for the same company
//  5. Bands are monotonic and cover 0..100 with no gaps
//  6. Every pillar in the score model has methodology copy + factors

import { describe, it, expect } from "vitest";
import { PILLARS, calculateOverall, scoreBand, PILLAR_SIGNALS, type PillarKey } from "@/lib/score";
import { FACTORS, factorsByPillar } from "@/lib/methodology/registry";
import { deriveFactorScores } from "@/lib/methodology/derive";

describe("pillar weights", () => {
  it("sum to exactly 1.00", () => {
    const sum = PILLARS.reduce((s, p) => s + p.weight, 0);
    expect(Number(sum.toFixed(6))).toBe(1);
  });

  it("has nine pillars with unique keys and slugs", () => {
    expect(PILLARS.length).toBe(9);
    expect(new Set(PILLARS.map((p) => p.key)).size).toBe(9);
    expect(new Set(PILLARS.map((p) => p.slug)).size).toBe(9);
  });

  it("returns the pillar value when all pillars are equal", () => {
    const all = Object.fromEntries(PILLARS.map((p) => [p.key, 72])) as Record<PillarKey, number>;
    expect(calculateOverall(all)).toBe(72);
  });

  it("is monotonic: raising any single pillar cannot lower the overall", () => {
    const base = Object.fromEntries(PILLARS.map((p) => [p.key, 50])) as Record<PillarKey, number>;
    const baseline = calculateOverall(base);
    for (const p of PILLARS) {
      const bumped = { ...base, [p.key]: 60 } as Record<PillarKey, number>;
      expect(calculateOverall(bumped)).toBeGreaterThan(baseline);
    }
  });

  it("clamps to the 0..100 range at the extremes", () => {
    const zero = Object.fromEntries(PILLARS.map((p) => [p.key, 0])) as Record<PillarKey, number>;
    const hundred = Object.fromEntries(PILLARS.map((p) => [p.key, 100])) as Record<PillarKey, number>;
    expect(calculateOverall(zero)).toBe(0);
    expect(calculateOverall(hundred)).toBe(100);
  });
});

describe("factor registry", () => {
  it("gives every pillar at least two factors", () => {
    for (const p of PILLARS) expect(factorsByPillar(p.key).length).toBeGreaterThanOrEqual(2);
  });

  it("has factor weights summing to 1.00 within each pillar", () => {
    for (const p of PILLARS) {
      const sum = factorsByPillar(p.key).reduce((s, f) => s + f.weight, 0);
      expect(Number(sum.toFixed(6)), `pillar ${p.key}`).toBe(1);
    }
  });

  it("uses unique factor keys and unique slugs inside a pillar", () => {
    expect(new Set(FACTORS.map((f) => f.key)).size).toBe(FACTORS.length);
    for (const p of PILLARS) {
      const slugs = factorsByPillar(p.key).map((f) => f.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("documents at least one source and one variable per factor", () => {
    for (const f of FACTORS) {
      expect(f.variables.length, f.key).toBeGreaterThan(0);
      expect(f.variables.some((v) => Boolean(v.sourceId)), f.key).toBe(true);
    }
  });
});

describe("derived factor scores", () => {
  const seeds = ["meridian-devices", "halcyon-commerce", "mcdonalds", "a", "zzz-long-slug-name"];

  it("reconstruct the headline pillar score (weighted mean)", () => {
    for (const seed of seeds) {
      for (const p of PILLARS) {
        for (const pillarScore of [0, 7, 23, 50, 68, 84, 97, 100]) {
          const derived = deriveFactorScores(p.key, pillarScore, seed);
          const mean = derived.reduce((s, d) => s + d.score * d.factor.weight, 0);
          expect(Math.abs(mean - pillarScore), `${seed}/${p.key}@${pillarScore}`).toBeLessThanOrEqual(1);
        }
      }
    }
  });

  it("keeps every factor score inside 0..100", () => {
    for (const seed of seeds) {
      for (const p of PILLARS) {
        for (const pillarScore of [0, 12, 55, 91, 100]) {
          for (const d of deriveFactorScores(p.key, pillarScore, seed)) {
            expect(d.score).toBeGreaterThanOrEqual(0);
            expect(d.score).toBeLessThanOrEqual(100);
          }
        }
      }
    }
  });

  it("is deterministic — same company and score always give the same factors", () => {
    const a = deriveFactorScores("worker_standards", 64, "meridian-devices");
    const b = deriveFactorScores("worker_standards", 64, "meridian-devices");
    expect(a.map((d) => d.score)).toEqual(b.map((d) => d.score));
  });

  it("does not give two different companies identical spreads", () => {
    const a = deriveFactorScores("worker_standards", 64, "meridian-devices").map((d) => d.score);
    const b = deriveFactorScores("worker_standards", 64, "halcyon-commerce").map((d) => d.score);
    expect(a).not.toEqual(b);
  });
});

describe("bands", () => {
  it("cover the whole 0..100 range and never skip a band", () => {
    const seen = new Set<string>();
    for (let s = 0; s <= 100; s++) seen.add(scoreBand(s));
    expect([...seen].sort()).toEqual(["harmful", "mixed", "positive", "strong", "weak"]);
  });

  it("are monotonic — a higher score never yields a worse band", () => {
    const rank = { harmful: 0, weak: 1, mixed: 2, positive: 3, strong: 4 } as const;
    let last = -1;
    for (let s = 0; s <= 100; s++) {
      const r = rank[scoreBand(s)];
      expect(r).toBeGreaterThanOrEqual(last);
      last = r;
    }
  });

  it("has band copy for every pillar and every band", () => {
    for (const p of PILLARS) {
      const meta = PILLAR_SIGNALS[p.key];
      expect(meta, p.key).toBeTruthy();
      expect(meta.signals.length).toBeGreaterThan(0);
      for (const b of ["strong", "positive", "mixed", "weak", "harmful"] as const) {
        expect(meta.bands[b]?.length, `${p.key}/${b}`).toBeGreaterThan(20);
      }
    }
  });
});
