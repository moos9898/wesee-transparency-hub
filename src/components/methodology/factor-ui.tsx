// Reusable primitives that render the auditable methodology view for one
// factor: equation, variables, raw inputs, calculation steps, sources,
// normalization table, confidence badge, and audit trail.

import { ExternalLink } from "lucide-react";
import type { Equation, FactorDef, Variable } from "@/lib/methodology/registry";
import { source } from "@/lib/methodology/registry";
import type { EvidenceBundle, EvidenceInput } from "@/lib/methodology/examples";
import { confidenceMeta, TIERS } from "@/lib/sources";
import type { Confidence } from "@/lib/sources";

// ---- Equation --------------------------------------------------------------

export function EquationBlock({ eq }: { eq: Equation }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      {eq.label && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {eq.label}
        </p>
      )}
      <div className="mt-3 font-display text-lg">
        {eq.kind === "fraction" && (
          <div className="inline-flex flex-col items-center">
            <span>{eq.numerator}</span>
            <span className="my-1 h-px w-full min-w-[220px] bg-foreground/60" />
            <span>{eq.denominator}</span>
          </div>
        )}
        {eq.kind === "sum" && (
          <div className="space-y-1">
            {eq.terms.map((t, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="text-muted-foreground tabular-nums">{i === 0 ? "" : "+"}</span>
                <span>({t.label}) × {(t.weight * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        )}
        {eq.kind === "expr" && <code className="text-base">{eq.expression}</code>}
      </div>
    </div>
  );
}

// ---- Variable table --------------------------------------------------------

export function VariableTable({ variables }: { variables: Variable[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/40 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">Variable</th>
            <th className="px-4 py-2 text-left">Definition</th>
            <th className="px-4 py-2 text-left">Unit</th>
            <th className="px-4 py-2 text-left">Primary source</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {variables.map((v) => {
            const s = source(v.sourceId);
            return (
              <tr key={v.key}>
                <td className="px-4 py-3 font-medium">{v.label}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.definition}</td>
                <td className="px-4 py-3 tabular-nums text-foreground/90">{v.unit}</td>
                <td className="px-4 py-3">
                  <a href={s.homepage} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-primary hover:underline">
                    {s.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  {v.documentHint && <p className="text-xs text-muted-foreground">{v.documentHint}</p>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ---- Raw inputs table ------------------------------------------------------

function formatVal(v: number | string, unit?: string): string {
  if (typeof v === "number") {
    if (unit?.includes("USD") && v >= 1000) return `$${v.toLocaleString()}`;
    if (Math.abs(v) >= 1000) return v.toLocaleString();
    return String(v);
  }
  return v;
}

export function RawInputsTable({ inputs, variables }: { inputs: EvidenceInput[]; variables: Variable[] }) {
  const varMap = new Map(variables.map((v) => [v.key, v] as const));
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/40 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">Variable</th>
            <th className="px-4 py-2 text-right">Value</th>
            <th className="px-4 py-2 text-left">Source</th>
            <th className="px-4 py-2 text-left">Filing</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {inputs.map((i) => {
            const v = varMap.get(i.variableKey);
            const s = source(i.sourceId);
            return (
              <tr key={i.variableKey}>
                <td className="px-4 py-3 font-medium">{v?.label ?? i.variableKey}</td>
                <td className="px-4 py-3 text-right tabular-nums">{formatVal(i.value, i.unit)}{i.unit ? <span className="ml-1 text-xs text-muted-foreground">{i.unit}</span> : null}</td>
                <td className="px-4 py-3">
                  <a href={i.url} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 text-primary hover:underline">
                    {s.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">
                  {i.document && <div>{i.document}{i.filingYear ? ` (${i.filingYear})` : ""}</div>}
                  {i.section && <div>{i.section}</div>}
                  {i.page !== undefined && <div>Page {i.page}</div>}
                  <div>Retrieved {i.retrievedAt}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ---- Step calculation ------------------------------------------------------

export function StepCalculation({ steps, score }: { steps: string[]; score: number }) {
  return (
    <ol className="space-y-2 rounded-xl border border-border bg-card p-6 font-mono text-sm">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-3">
          <span className="w-6 shrink-0 text-muted-foreground tabular-nums">{i + 1}.</span>
          <span>{s}</span>
        </li>
      ))}
      <li className="flex gap-3 border-t border-border pt-3 font-display text-base">
        <span className="w-6 shrink-0 text-primary">→</span>
        <span>Normalized score = <span className="text-gradient font-semibold">{score.toFixed(1)} / 100</span></span>
      </li>
    </ol>
  );
}

// ---- Normalization table ---------------------------------------------------

export function NormalizationTable({ rules }: { rules: FactorDef["normalization"] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/40 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <tr>
            <th className="px-4 py-2 text-left">When</th>
            <th className="px-4 py-2 text-left">Score</th>
            <th className="px-4 py-2 text-left">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rules.map((r, i) => (
            <tr key={i}>
              <td className="px-4 py-3 font-medium">{r.when}</td>
              <td className="px-4 py-3 tabular-nums text-foreground/90">{r.score}</td>
              <td className="px-4 py-3 text-muted-foreground">{r.meaning ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---- Confidence badge ------------------------------------------------------

export function ConfidenceBadge({ level, rationale }: { level: Confidence; rationale?: string }) {
  const c = confidenceMeta(level);
  const dot = level === "high" ? "🟢" : level === "medium" ? "🟡" : "🔴";
  return (
    <div className={`rounded-xl border p-4 text-sm ${c.tone}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">{dot} {c.label}</p>
      <p className="mt-2">{rationale ?? c.description}</p>
    </div>
  );
}

// ---- Audit trail -----------------------------------------------------------

export function AuditTrail({ chain }: { chain: string[] }) {
  return (
    <ol className="space-y-1 rounded-xl border border-border bg-card p-6 text-sm">
      {chain.map((node, i) => (
        <li key={i} className="flex items-center gap-3">
          <span className="w-6 shrink-0 text-primary tabular-nums">{i === chain.length - 1 ? "✓" : "↓"}</span>
          <span className={i === chain.length - 1 ? "font-semibold text-foreground" : "text-foreground/90"}>{node}</span>
        </li>
      ))}
    </ol>
  );
}

// ---- Source citations block ------------------------------------------------

export function SourceCitations({ inputs }: { inputs: EvidenceInput[] }) {
  const bySource = new Map<string, { sourceId: string; entries: EvidenceInput[] }>();
  for (const i of inputs) {
    const bucket = bySource.get(i.sourceId) ?? { sourceId: i.sourceId, entries: [] };
    bucket.entries.push(i);
    bySource.set(i.sourceId, bucket);
  }
  return (
    <ul className="grid gap-2">
      {[...bySource.values()].map((bucket) => {
        const s = source(bucket.sourceId);
        const tier = TIERS[s.tier];
        return (
          <li key={s.id}>
            <a href={s.homepage} target="_blank" rel="noopener noreferrer"
               className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.organization}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.description}</p>
                <ul className="mt-2 space-y-0.5 text-xs text-muted-foreground">
                  {bucket.entries.map((e, i) => (
                    <li key={i}>
                      {e.document ? `${e.document}${e.filingYear ? ` (${e.filingYear})` : ""}` : "Filing"}
                      {e.section ? ` — ${e.section}` : ""}
                      {e.page !== undefined ? ` · p. ${e.page}` : ""}
                      {" · "}retrieved {e.retrievedAt}
                    </li>
                  ))}
                </ul>
              </div>
              <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] ${tier.tone}`}>
                {tier.shortLabel}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

// ---- Illustrative-example banner ------------------------------------------

export function IllustrativeBanner({ bundle }: { bundle: EvidenceBundle }) {
  if (!bundle.illustrative) return null;
  return (
    <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-100">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
        Illustrative example
      </p>
      <p className="mt-2">
        No verified filing is on record for this company/factor yet. The values below are a deterministic
        illustration of how the calculation would work — they are not real disclosures. Once a filing is
        ingested, this page will show live values with direct links to the original document.
      </p>
    </div>
  );
}
