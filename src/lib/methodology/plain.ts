// Plain-English reading of any factor: what happened, the real numbers, a
// simple cause-and-effect flow, and why the score landed where it did.
// No notation, no variables — the equation stays available under "Advanced".

import type { FactorDef } from "./registry";
import type { EvidenceBundle, EvidenceInput } from "./examples";

export interface FlowNode {
  label: string;
  value: string;
  from?: string;
  to?: string;
  delta?: string;
  tone?: "up" | "down" | "neutral";
}

export interface PlainRead {
  /** One sentence: what this factor looks at, in everyday words. */
  what: string;
  /** Bullet reasons written with the real numbers substituted in. */
  why: string[];
  /** Simple visual chain shown instead of an equation. */
  flow: FlowNode[];
  /** One plain sentence explaining the score. */
  conclusion: string;
  score: number;
}

// ---- formatting helpers ----------------------------------------------------

export function fmtValue(v: number | string, unit?: string): string {
  if (typeof v === "string") return v;
  const u = unit ?? "";
  if (u.includes("USD")) {
    if (Math.abs(v) >= 1_000_000_000) return `$${(v / 1_000_000_000).toFixed(1)}B`;
    if (Math.abs(v) >= 1_000_000) return `$${(v / 1_000_000).toFixed(1)}M`;
    return `$${Math.round(v).toLocaleString()}`;
  }
  if (u.includes("%")) return `${v}%`;
  if (Math.abs(v) >= 1000) return Math.round(v).toLocaleString();
  return String(v);
}

function num(inputs: EvidenceInput[], key: string): number | undefined {
  const hit = inputs.find((i) => i.variableKey === key);
  return typeof hit?.value === "number" ? hit.value : undefined;
}
function inp(inputs: EvidenceInput[], key: string): EvidenceInput | undefined {
  return inputs.find((i) => i.variableKey === key);
}

function tierWord(score: number): string {
  if (score >= 85) return "well ahead of";
  if (score >= 70) return "ahead of";
  if (score >= 50) return "roughly in line with";
  if (score >= 30) return "behind";
  return "well behind";
}

function pct(a: number, b: number): string {
  if (!b) return "—";
  return `${(((a - b) / b) * 100 >= 0 ? "+" : "")}${(((a - b) / b) * 100).toFixed(0)}%`;
}

// ---- main ------------------------------------------------------------------

export function plainRead(
  factor: FactorDef,
  ev: EvidenceBundle,
  score: number,
  companyName = "This company",
): PlainRead {
  const I = ev.inputs;

  switch (factor.key) {
    case "living_wage": {
      const median = num(I, "medianWorkerWage") ?? 0;
      const mit = num(I, "mitLivingWage") ?? 0;
      const ratio = mit ? median / mit : 0;
      return {
        what: "Whether a typical worker's pay covers the real cost of living where they work.",
        why: [
          `The typical (median) worker is paid ${fmtValue(median, "USD")} a year.`,
          `Living independently in that area costs about ${fmtValue(mit, "USD")} a year.`,
          ratio >= 1
            ? `Pay covers the local cost of living ${ratio.toFixed(2)}× over.`
            : `Pay falls short of the local cost of living by ${Math.round((1 - ratio) * 100)}%.`,
          `That places ${companyName} ${tierWord(score)} most large U.S. employers.`,
        ],
        flow: [
          { label: "Typical worker pay", value: fmtValue(median, "USD") },
          { label: "Local cost of living", value: fmtValue(mit, "USD") },
          {
            label: ratio >= 1 ? "Pay covers living costs" : "Pay below living costs",
            value: `${ratio.toFixed(2)}×`,
            tone: ratio >= 1 ? "up" : "down",
          },
        ],
        conclusion:
          ratio >= 1
            ? `Because pay clears the local cost of living, this factor scored ${score} out of 100.`
            : `Because pay does not clear the local cost of living, the score was reduced to ${score} out of 100.`,
        score,
      };
    }

    case "domestic_hiring": {
      const e0 = num(I, "employeesStart");
      const e1 = num(I, "employeesEnd");
      const r0 = num(I, "revenueStart");
      const r1 = num(I, "revenueEnd");
      if (e0 && e1 && r0 && r1) {
        const hire = ((e1 - e0) / e0) * 100;
        const rev = ((r1 - r0) / r0) * 100;
        const lag = hire < rev;
        return {
          what: "Whether U.S. hiring kept pace with how fast the business grew.",
          why: [
            `Revenue increased by ${rev.toFixed(0)}% over five years.`,
            `U.S. employment increased by ${hire.toFixed(0)}% over the same period.`,
            lag
              ? "Most companies in this industry hired faster relative to growth."
              : "Hiring grew at least as fast as the business itself.",
            lag
              ? "Because hiring lagged behind growth, the score was reduced."
              : "Because hiring matched growth, the score was supported.",
          ],
          flow: [
            {
              label: "U.S. employees",
              value: `${fmtValue(e0)} → ${fmtValue(e1)}`,
              from: fmtValue(e0),
              to: fmtValue(e1),
              delta: `${hire >= 0 ? "+" : ""}${hire.toFixed(0)}%`,
              tone: hire >= 0 ? "up" : "down",
            },
            {
              label: "U.S. revenue",
              value: `${fmtValue(r0, "USD")} → ${fmtValue(r1, "USD")}`,
              from: fmtValue(r0, "USD"),
              to: fmtValue(r1, "USD"),
              delta: `${rev >= 0 ? "+" : ""}${rev.toFixed(0)}%`,
              tone: rev >= 0 ? "up" : "down",
            },
            {
              label: lag ? "Hiring slower than revenue" : "Hiring kept pace with revenue",
              value: `${hire.toFixed(0)}% vs ${rev.toFixed(0)}%`,
              tone: lag ? "down" : "up",
            },
          ],
          conclusion: lag
            ? `Because hiring grew slower than the business, Domestic Hiring scored ${score} out of 100.`
            : `Because hiring grew alongside the business, Domestic Hiring scored ${score} out of 100.`,
          score,
        };
      }
      break;
    }

    case "workplace_safety": {
      const co = num(I, "companyRate") ?? 0;
      const ind = num(I, "industryRate") ?? 0;
      const safer = co < ind;
      return {
        what: "How often workers are injured on the job, compared with similar employers.",
        why: [
          `${co} recordable injuries per 100 full-time workers were reported.`,
          `The industry average is ${ind} per 100 workers.`,
          safer
            ? `That is ${Math.round((1 - co / (ind || 1)) * 100)}% fewer injuries than the typical employer in this industry.`
            : `That is ${Math.round((co / (ind || 1) - 1) * 100)}% more injuries than the typical employer in this industry.`,
        ],
        flow: [
          { label: "Injuries per 100 workers", value: String(co), tone: safer ? "up" : "down" },
          { label: "Industry average", value: String(ind) },
          { label: safer ? "Safer than peers" : "Less safe than peers", value: `${co} vs ${ind}`, tone: safer ? "up" : "down" },
        ],
        conclusion: safer
          ? `Fewer injuries than peers lifted this factor to ${score} out of 100.`
          : `More injuries than peers reduced this factor to ${score} out of 100.`,
        score,
      };
    }

    case "median_worker_compensation": {
      const wage = num(I, "medianWorkerComp") ?? 0;
      return {
        what: "What the typical employee earns in a year, including benefits and equity.",
        why: [
          `The median employee's total pay is ${fmtValue(wage, "USD")} a year.`,
          "This is the same figure the company must report to the SEC for its CEO pay ratio.",
          `Compared with sector norms, that is ${tierWord(score)} peer employers.`,
        ],
        flow: [
          { label: "Median employee pay", value: fmtValue(wage, "USD") },
          { label: "Compared with sector median", value: tierWord(score) },
        ],
        conclusion: `Relative to sector pay levels, this factor scored ${score} out of 100.`,
        score,
      };
    }

    case "ceo_compensation": {
      const base = num(I, "baseSalary") ?? 0;
      const eq = num(I, "equityAwards") ?? 0;
      const inc = num(I, "incentive") ?? 0;
      const other = num(I, "otherComp") ?? 0;
      const total = base + eq + inc + other;
      return {
        what: "Everything the CEO was paid last year, added together.",
        why: [
          `Salary: ${fmtValue(base, "USD")}.`,
          `Stock and options: ${fmtValue(eq, "USD")} — usually the largest part.`,
          `Bonus and incentives: ${fmtValue(inc, "USD")}.`,
          `Pension and other pay: ${fmtValue(other, "USD")}.`,
          `Total CEO pay: ${fmtValue(total, "USD")}.`,
        ],
        flow: [
          { label: "Salary", value: fmtValue(base, "USD") },
          { label: "Stock & options", value: fmtValue(eq, "USD") },
          { label: "Bonus & incentives", value: fmtValue(inc, "USD") },
          { label: "Total CEO pay", value: fmtValue(total, "USD"), tone: "neutral" },
        ],
        conclusion:
          "CEO pay is not scored on its own — it is compared with typical worker pay to produce the pay-ratio score.",
        score,
      };
    }

    case "lobbying_spend": {
      const spend = num(I, "lobbyingSpend") ?? 0;
      const rev = num(I, "usRevenue3") ?? 0;
      const perB = rev ? spend / (rev / 1_000_000_000) : 0;
      return {
        what: "How much the company spends influencing federal policy, relative to its size.",
        why: [
          `Federal lobbying spend was ${fmtValue(spend, "USD")} last year.`,
          `U.S. revenue over the same period was ${fmtValue(rev, "USD")}.`,
          `That works out to about ${fmtValue(Math.round(perB), "USD")} of lobbying for every $1 billion of U.S. revenue.`,
          "WeSee reports intensity relative to peers; it does not judge the content of any position.",
        ],
        flow: [
          { label: "Lobbying spend", value: fmtValue(spend, "USD") },
          { label: "U.S. revenue", value: fmtValue(rev, "USD") },
          { label: "Per $1B of revenue", value: fmtValue(Math.round(perB), "USD") },
        ],
        conclusion: `Compared with industry medians, lobbying intensity scored ${score} out of 100.`,
        score,
      };
    }

    case "layoff_severity": {
      const pos = num(I, "positionsAffected") ?? 0;
      const wf = num(I, "usWorkforce") ?? 0;
      const share = wf ? (pos / wf) * 100 : 0;
      return {
        what: "How many U.S. workers lost their jobs, and how much that affected the wider workforce.",
        why: [
          `${fmtValue(pos)} U.S. positions were cut.`,
          `The company employs about ${fmtValue(wf)} people in the U.S.`,
          `That is ${share.toFixed(1)}% of the U.S. workforce — but ${fmtValue(pos)} households in absolute terms.`,
          "WeSee weighs the absolute number of people affected, not just the percentage.",
        ],
        flow: [
          { label: "U.S. positions cut", value: fmtValue(pos), tone: "down" },
          { label: "U.S. workforce", value: fmtValue(wf) },
          { label: "Share of workforce", value: `${share.toFixed(1)}%` },
        ],
        conclusion: `Given the number of people affected, layoff severity scored ${score} out of 100.`,
        score,
      };
    }
  }

  // ---- generic fallback: real numbers + plain comparison sentence ----------
  const rows = I.slice(0, 4);
  const labelFor = (i: EvidenceInput) =>
    i.label ?? factor.variables.find((v) => v.key === i.variableKey)?.label ?? i.variableKey;

  const primary = rows[0];
  const secondary = rows[1];
  const compare =
    primary && secondary && typeof primary.value === "number" && typeof secondary.value === "number"
      ? `${labelFor(primary)} is ${pct(primary.value, secondary.value)} versus ${labelFor(secondary).toLowerCase()}.`
      : null;

  return {
    what: factor.definition,
    why: [
      ...rows.map((i) => `${labelFor(i)}: ${fmtValue(i.value, i.unit)}${i.unit && !i.unit.includes("USD") && !i.unit.includes("%") ? ` ${i.unit}` : ""}.`),
      ...(compare ? [compare] : []),
      `Measured against industry benchmarks, this result is ${tierWord(score)} peer employers.`,
    ],
    flow: [
      ...rows.map((i) => ({ label: labelFor(i), value: fmtValue(i.value, i.unit) })),
      { label: `${factor.title} score`, value: `${score} / 100`, tone: score >= 60 ? ("up" as const) : ("down" as const) },
    ],
    conclusion: `Comparing these figures with industry benchmarks produced a score of ${score} out of 100.`,
    score,
  };
}
