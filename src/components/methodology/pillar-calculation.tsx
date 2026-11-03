// Plain-language pillar breakdown. Default view: each factor shows its score,
// a one-line explanation, the real numbers, and their sources — no dropdowns.
// The weighted equation and notation live under "Advanced".

import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { pillarSlugFromKey, factorsByPillar } from "@/lib/methodology/registry";
import { deriveFactorScores } from "@/lib/methodology/derive";
import { plainRead } from "@/lib/methodology/plain";
import { getFactorEvidence, type CompanyRow } from "@/lib/methodology/evidence";
import {
  PlainWhy, CalculationFlow, EvidenceCards, Advanced,
} from "@/components/methodology/plain-ui";
import {
  EquationBlock, VariableTable, NormalizationTable, AuditTrail, StepCalculation,
} from "@/components/methodology/factor-ui";
import { BENCHMARK_TIERS } from "@/lib/benchmarks";
import { scoreColor, type PillarKey } from "@/lib/score";

interface Props {
  pillarKey: PillarKey;
  pillarLabel: string;
  pillarScore: number;
  seedKey: string;              // company slug
  companyName?: string;
  ticker?: string | null;
  headquarters?: string | null;
  /** Full company row including pillar_notes; lets real evidence override the example generator. */
  company?: CompanyRow;
}

export function PillarCalculation({
  pillarKey, pillarLabel, pillarScore, seedKey, companyName, ticker, headquarters, company,
}: Props) {
  const factors = factorsByPillar(pillarKey);
  if (!factors.length) return null;
  const derived = deriveFactorScores(pillarKey, pillarScore, seedKey);
  const pillarSlug = pillarSlugFromKey(pillarKey);
  const composite = derived.reduce((s, d) => s + d.score * d.factor.weight, 0);
  const ctx = { companyName: companyName ?? seedKey, ticker, headquarters };
  const co: CompanyRow = company ?? { slug: seedKey };

  return (
    <div className="space-y-3">
      {/* Plain summary of how the pillar adds up */}
      <div className="rounded-xl border border-border bg-card/60 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          What makes up the {pillarLabel} score
        </p>
        <ul className="mt-3 grid gap-1.5">
          {derived.map((d) => (
            <li key={d.factor.key} className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-foreground/90">{d.factor.title}</span>
              <span className="tabular-nums text-muted-foreground">
                <span className="font-semibold text-foreground">{d.score}</span>
                <span className="ml-1 text-xs">counts for {(d.factor.weight * 100).toFixed(0)}%</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t border-border pt-3 text-sm">
          Weighted together, these give a {pillarLabel} score of{" "}
          <span className="text-gradient font-display text-base font-semibold">{Math.round(composite)}</span> out of 100.
        </p>
      </div>

      {derived.map((d) => (
        <FactorCard
          key={d.factor.key}
          factor={d.factor}
          score={d.score}
          pillarSlug={pillarSlug}
          seedKey={seedKey}
          ctx={ctx}
          company={co}
        />
      ))}

      <Advanced title="Advanced — weighted equation for this pillar">
        <p className="font-mono text-xs leading-relaxed text-foreground/90">
          {pillarLabel} Score ={" "}
          {derived.map((d, i) => (
            <span key={d.factor.key}>
              {i > 0 ? " + " : ""}
              (<span className="font-semibold text-foreground">{d.score}</span>
              {" × "}
              <span className="text-muted-foreground">{d.factor.weight.toFixed(2)}</span>)
            </span>
          ))}
          {" = "}
          <span className="font-semibold text-foreground">{composite.toFixed(1)}</span>
        </p>
        <p className="text-[11px] text-muted-foreground">
          Weights sum to {(derived.reduce((s, d) => s + d.factor.weight, 0) * 100).toFixed(0)}%. Factor scores are
          normalized so the weighted mean reconstructs the headline pillar score.
        </p>
      </Advanced>
    </div>
  );
}

function FactorCard({
  factor, pillarSlug, seedKey, score, ctx, company,
}: {
  factor: ReturnType<typeof factorsByPillar>[number];
  pillarSlug: string;
  seedKey: string;
  score: number;
  ctx: { companyName: string; ticker?: string | null; headquarters?: string | null };
  company: CompanyRow;
}) {
  const evidence = getFactorEvidence(factor, company);
  const read = plainRead(factor, evidence, score, ctx.companyName);
  const color = scoreColor(score);
  const bt = BENCHMARK_TIERS[
    score >= 85 ? "exceptional" : score >= 70 ? "strong" : score >= 50 ? "moderate" : score >= 30 ? "weak" : "harmful"
  ];
  const internalHref = { slug: seedKey, pillar: pillarSlug, factor: factor.slug };
  const real = !evidence.illustrative;

  return (
    <section className="rounded-xl border border-border bg-card/60 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="min-w-0">
          <Link
            to="/methodology/$pillar/$factor"
            params={{ pillar: pillarSlug, factor: factor.slug }}
            className="font-display text-base font-semibold text-foreground hover:text-primary hover:underline"
          >
            {factor.title}
          </Link>
          <p className="mt-0.5 text-[12px] text-muted-foreground">{read.what}</p>
        </div>
        <div className="text-right">
          <span className="font-display text-2xl font-semibold text-foreground tabular-nums">{score}</span>
          <span className="ml-1 text-xs text-muted-foreground">/ 100</span>
          <p className={`mt-1 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${bt.tone}`}>
            {bt.label}
          </p>
          <p className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${real ? "text-emerald-400" : "text-amber-400/70"}`}>
            {real ? "Real sourced data" : "Illustrative example"}
          </p>
        </div>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full transition-[width] duration-700"
             style={{ width: `${score}%`, backgroundColor: color }} />
      </div>

      <p className="mt-3 text-sm text-foreground/90">{read.conclusion}</p>

      <div className="mt-4 grid gap-3">
        <CalculationFlow read={read} />
        <PlainWhy read={read} title={`Why ${ctx.companyName} received ${score}`} />
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Numbers used · source shown for every value
          </p>
          <EvidenceCards inputs={evidence.inputs} factor={factor} ctx={ctx} internalHref={internalHref} />
        </div>

        <Advanced title="Advanced methodology — equation, variables, normalization, audit trail">
          <EquationBlock eq={factor.equation} />
          <VariableTable variables={factor.variables} />
          <StepCalculation steps={evidence.steps} score={evidence.normalizedScore} />
          <NormalizationTable rules={factor.normalization} />
          <AuditTrail chain={factor.auditTrail} />
        </Advanced>

        <div className="flex flex-wrap gap-2">
          <Link
            to="/companies/$slug/sources/$pillar/$factor"
            params={internalHref}
            className="inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-foreground hover:border-primary"
          >
            Full evidence record
          </Link>
          <Link
            to="/methodology/$pillar/$factor"
            params={{ pillar: pillarSlug, factor: factor.slug }}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-[11px] text-muted-foreground hover:border-primary/40 hover:text-foreground"
          >
            Methodology <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
