// Deterministic illustrative example evidence for every factor. Used when a
// company has no verified filing on record — every rendered value is clearly
// labelled "Illustrative example" so users do not mistake it for a real
// disclosure. Real evidence, when backfilled, lives in companies.pillar_notes.

import type { FactorDef } from "./registry";
import { source } from "./registry";

export interface EvidenceInput {
  variableKey: string;
  label?: string;             // plain-English label when not a registry variable
  value: number | string;
  unit: string;
  sourceId: string;
  document?: string;
  section?: string;
  filingYear?: number;
  page?: number;
  url: string;
  retrievedAt: string;
}

export interface EvidenceBundle {
  factorKey: string;
  illustrative: boolean;
  inputs: EvidenceInput[];
  steps: string[];              // human-readable calculation steps
  normalizedScore: number;      // 0..100
  confidenceOverride?: "high" | "medium" | "low";
  notes?: string;
}

const YEAR = 2026;
const RETRIEVED = "2026-07-17";

/** Deterministic PRNG so the same slug always yields the same illustration. */
function seededRand(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ex(v: string, val: number | string, sourceId: string, document?: string, section?: string, page?: number, unit = "", label?: string): EvidenceInput {
  const s = source(sourceId);
  const base = s.homepage;
  const url = page ? `${base}#page=${page}` : base;
  return {
    variableKey: v, label, value: val, unit,
    sourceId, document, section, filingYear: YEAR, page,
    url, retrievedAt: RETRIEVED,
  };
}

export function exampleEvidence(factor: FactorDef, companySlug?: string): EvidenceBundle {
  const seed = `${companySlug ?? "sample"}::${factor.key}`;
  const rnd = seededRand(seed);

  switch (factor.key) {
    case "domestic_hiring": {
      const e0 = 8_000 + Math.round(rnd() * 120_000);
      const hireGrowth = 0.04 + rnd() * 0.3;
      const e1 = Math.round(e0 * (1 + hireGrowth));
      const r0 = (4 + Math.round(rnd() * 40)) * 1_000_000_000;
      const revGrowth = 0.08 + rnd() * 0.4;
      const r1 = Math.round(r0 * (1 + revGrowth));
      const elasticity = hireGrowth / revGrowth;
      const normalized = Math.round(Math.max(0, Math.min(100, elasticity * 85)));
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs: [
          ex("employeesStart", e0, "sec_edgar", "10-K", "Human Capital", 37, "headcount", "Beginning U.S. employees"),
          ex("employeesEnd", e1, "sec_edgar", "10-K", "Human Capital", 37, "headcount", "Ending U.S. employees"),
          ex("revenueStart", r0, "sec_edgar", "10-K", "Segment disclosures", 62, "USD", "Beginning U.S. revenue"),
          ex("revenueEnd", r1, "sec_edgar", "10-K", "Segment disclosures", 62, "USD", "Ending U.S. revenue"),
        ],
        steps: [
          `U.S. employees: ${e0.toLocaleString()} → ${e1.toLocaleString()} (+${(hireGrowth * 100).toFixed(0)}%)`,
          `U.S. revenue: $${(r0 / 1e9).toFixed(1)}B → $${(r1 / 1e9).toFixed(1)}B (+${(revGrowth * 100).toFixed(0)}%)`,
          `Hiring elasticity = ${(hireGrowth * 100).toFixed(0)}% ÷ ${(revGrowth * 100).toFixed(0)}% = ${elasticity.toFixed(2)}`,
          `Normalized Score = ${normalized} / 100`,
        ],
      };
    }
    case "living_wage": {
      const median = 42000 + Math.round(rnd() * 30000);
      const mit = 38000 + Math.round(rnd() * 12000);
      const ratio = median / mit;
      const normalized = Math.round(Math.max(0, Math.min(100, ((ratio - 0.75) / 1.25) * 100)) * 10) / 10;
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs: [
          ex("medianWorkerWage", median, "sec_edgar", "DEF 14A", "Executive Compensation", 48, "USD/yr"),
          ex("mitLivingWage", mit, "mit_livingwage", "Living Wage Calculator", "County index", undefined, "USD/yr"),
        ],
        steps: [
          `Median Worker Wage = $${median.toLocaleString()}`,
          `MIT Living Wage = $${mit.toLocaleString()}`,
          `Ratio = ${median.toLocaleString()} ÷ ${mit.toLocaleString()} = ${ratio.toFixed(3)}`,
          `Normalized Score = ${normalized.toFixed(1)} / 100`,
        ],
      };
    }
    case "workplace_safety": {
      const co = +(1 + rnd() * 4).toFixed(2);
      const ind = +(2 + rnd() * 3).toFixed(2);
      const ratio = co / ind;
      const normalized = Math.round(Math.max(0, Math.min(100, (1 - (ratio - 0.5) / 1.5) * 100)) * 10) / 10;
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs: [
          ex("companyRate", co, "osha", "Form 300A", "Establishment record", undefined, "per 100 FTE"),
          ex("industryRate", ind, "bls", "IIF Survey", `${YEAR} industry table`, undefined, "per 100 FTE"),
        ],
        steps: [
          `Company recordable rate = ${co}`,
          `Industry median = ${ind}`,
          `Safety ratio = ${co} ÷ ${ind} = ${ratio.toFixed(3)}`,
          `Normalized Score = ${normalized.toFixed(1)} / 100 (lower ratio → higher score)`,
        ],
      };
    }
    case "ceo_compensation": {
      const base = 1_200_000 + Math.round(rnd() * 800_000);
      const equity = 8_000_000 + Math.round(rnd() * 12_000_000);
      const incentive = 2_000_000 + Math.round(rnd() * 5_000_000);
      const other = 200_000 + Math.round(rnd() * 400_000);
      const total = base + equity + incentive + other;
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: 0,
        inputs: [
          ex("baseSalary", base, "sec_edgar", "DEF 14A", "Summary Compensation Table", 42, "USD"),
          ex("equityAwards", equity, "sec_edgar", "DEF 14A", "Summary Compensation Table", 42, "USD"),
          ex("incentive", incentive, "sec_edgar", "DEF 14A", "Summary Compensation Table", 42, "USD"),
          ex("otherComp", other, "sec_edgar", "DEF 14A", "Summary Compensation Table", 42, "USD"),
        ],
        steps: [
          `Base + Equity + Incentive + Other = $${base.toLocaleString()} + $${equity.toLocaleString()} + $${incentive.toLocaleString()} + $${other.toLocaleString()}`,
          `CEO Total Compensation = $${total.toLocaleString()}`,
        ],
      };
    }
    case "median_worker_compensation": {
      const wage = 46_000 + Math.round(rnd() * 40_000);
      const ceoTotal = 12_000_000 + Math.round(rnd() * 15_000_000);
      const ratio = Math.round(ceoTotal / wage);
      const normalized = Math.round(Math.max(0, Math.min(100, 100 - (ratio - 50) / 5)));
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs: [
          ex("medianWorkerComp", wage, "sec_edgar", "DEF 14A", "Pay Ratio Disclosure", 48, "USD/yr"),
        ],
        steps: [
          `Median Worker Total Comp = $${wage.toLocaleString()}`,
          `CEO Pay Ratio = $${ceoTotal.toLocaleString()} ÷ $${wage.toLocaleString()} = ${ratio}:1`,
          `Normalized Score = ${normalized} / 100 (higher ratio → lower score vs. sector)`,
        ],
      };
    }
    case "lobbying_spend": {
      const spend = 2_500_000 + Math.round(rnd() * 10_000_000);
      const rev = 20 + Math.round(rnd() * 60); // $B
      const perB = spend / rev;
      const normalized = Math.round(Math.max(0, Math.min(100, 100 - perB / 30000)));
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs: [
          ex("lobbyingSpend", spend, "opensecrets", "Federal Lobbying Summary", `${YEAR}`, undefined, "USD"),
          ex("usRevenue3", rev * 1_000_000_000, "sec_edgar", "10-K", "Segment disclosures", 62, "USD"),
        ],
        steps: [
          `Federal lobbying spend = $${spend.toLocaleString()}`,
          `U.S. revenue = $${rev}B`,
          `Spend per $1B U.S. revenue = $${Math.round(perB).toLocaleString()}`,
          `Normalized Score = ${normalized} / 100 (higher spend/rev → lower score)`,
        ],
      };
    }
    case "layoff_severity": {
      const positions = 800 + Math.round(rnd() * 12_000);
      const workforce = 40_000 + Math.round(rnd() * 800_000);
      const idx = Math.log10(1 + positions) * Math.sqrt(positions / workforce);
      const normalized = Math.round(Math.max(0, Math.min(100, 100 - idx * 22)));
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs: [
          ex("positionsAffected", positions, "warn", "WARN Notice", `${YEAR} filing`, undefined, "workers"),
          ex("usWorkforce", workforce, "sec_edgar", "10-K", "Human Capital", 12, "headcount"),
        ],
        steps: [
          `U.S. positions affected = ${positions.toLocaleString()}`,
          `Total U.S. workforce = ${workforce.toLocaleString()}`,
          `Severity Index = log10(1 + ${positions.toLocaleString()}) × √(${positions.toLocaleString()} / ${workforce.toLocaleString()}) = ${idx.toFixed(3)}`,
          `Normalized Score = ${normalized} / 100 (higher severity → lower score)`,
        ],
      };
    }
    default: {
      // Generic scaffold — every factor gets illustrative inputs so pages are never empty.
      const inputs = factor.variables.map((v, i) => {
        const val = Math.round((10 + rnd() * 90) * 100) / 100;
        return ex(v.key, val, v.sourceId, v.documentHint?.split(" — ")[0], v.documentHint?.split(" — ")[1], undefined, v.unit);
      });
      const normalized = Math.round(35 + rnd() * 55);
      return {
        factorKey: factor.key, illustrative: true, normalizedScore: normalized,
        inputs,
        steps: [
          ...inputs.map((i) => `${i.variableKey} = ${i.value}${i.unit ? " " + i.unit : ""}`),
          `Weighted composite → Normalized Score = ${normalized} / 100`,
        ],
      };
    }
  }
}
