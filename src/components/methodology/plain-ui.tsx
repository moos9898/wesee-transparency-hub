// Plain-language, source-first UI primitives. These render the default view:
// simple explanation → real numbers with visible citations → final score.
// Equations and notation live behind <Advanced>.

import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ChevronDown, ExternalLink, FileText } from "lucide-react";
import type { EvidenceInput } from "@/lib/methodology/examples";
import type { FactorDef } from "@/lib/methodology/registry";
import { source } from "@/lib/methodology/registry";
import { TIERS } from "@/lib/sources";
import { directSourceLink, type SourceContext } from "@/lib/methodology/deep-links";
import { fmtValue, type PlainRead } from "@/lib/methodology/plain";

// ---- "Why did this company receive N?" -------------------------------------

export function PlainWhy({ read, title }: { read: PlainRead; title?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/70 p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {title ?? `Why this score is ${read.score}`}
      </p>
      <p className="mt-2 text-sm text-foreground/90">{read.what}</p>
      <ul className="mt-3 grid gap-2">
        {read.why.map((w) => (
          <li key={w} className="flex gap-2 text-sm text-foreground/90">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span>{w}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 border-t border-border pt-3 text-sm font-medium text-foreground">
        {read.conclusion}
      </p>
    </div>
  );
}

// ---- Visual calculation flow ----------------------------------------------

const TONE: Record<string, string> = {
  up: "text-emerald-400",
  down: "text-orange-400",
  neutral: "text-foreground",
};

export function CalculationFlow({ read, label }: { read: PlainRead; label?: string }) {
  return (
    <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
        {label ?? "How we calculated this"}
      </p>
      <ol className="mt-4 grid gap-1">
        {read.flow.map((n, i) => (
          <li key={`${n.label}-${i}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg bg-background/40 px-3 py-2">
              <span className="text-xs text-muted-foreground">{n.label}</span>
              <span className="flex items-baseline gap-2 text-sm tabular-nums">
                {n.from && n.to ? (
                  <>
                    <span className="text-foreground/70">{n.from}</span>
                    <ArrowRight className="h-3 w-3 self-center text-muted-foreground" />
                    <span className="font-semibold text-foreground">{n.to}</span>
                  </>
                ) : (
                  <span className="font-semibold text-foreground">{n.value}</span>
                )}
                {n.delta && (
                  <span className={`text-xs font-semibold ${TONE[n.tone ?? "neutral"]}`}>({n.delta})</span>
                )}
              </span>
            </div>
            {i < read.flow.length - 1 && (
              <div className="flex justify-center py-0.5">
                <ArrowDown className="h-3 w-3 text-muted-foreground" />
              </div>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-4 flex items-baseline justify-between border-t border-primary/20 pt-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Final score
        </span>
        <span className="text-gradient font-display text-2xl font-semibold">{read.score} / 100</span>
      </div>
    </div>
  );
}

// ---- Source card (always visible) -----------------------------------------

export function SourceCard({
  input, ctx, internalHref,
}: {
  input: EvidenceInput;
  ctx: SourceContext;
  internalHref?: { slug: string; pillar: string; factor: string };
}) {
  const s = source(input.sourceId);
  const tier = TIERS[s.tier];
  const link = directSourceLink(input.sourceId, ctx, { document: input.document, page: input.page });

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-medium text-foreground">{input.label ?? input.variableKey}</p>
        <p className="font-display text-lg font-semibold text-foreground tabular-nums">
          {fmtValue(input.value, input.unit)}
          {input.unit && !input.unit.includes("USD") && !input.unit.includes("%") && (
            <span className="ml-1 text-xs font-normal text-muted-foreground">{input.unit}</span>
          )}
        </p>
      </div>
      <dl className="mt-3 grid gap-x-4 gap-y-1 text-[11px] sm:grid-cols-2">
        <Row k="Source" v={s.name} />
        <Row k="Company" v={ctx.companyName} />
        {input.document && <Row k="Document" v={`${input.document}${input.filingYear ? ` (${input.filingYear})` : ""}`} />}
        {input.section && <Row k="Section" v={input.section} />}
        {input.page !== undefined && <Row k="Page" v={String(input.page)} />}
        <Row k="Retrieved" v={input.retrievedAt} />
        <Row k="Confidence" v={`${tier.shortLabel} — ${s.organization}`} />
      </dl>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-foreground hover:border-primary"
        >
          {link.label} <ExternalLink className="h-3 w-3" />
        </a>
        {internalHref && (
          <Link
            to="/companies/$slug/sources/$pillar/$factor"
            params={internalHref}
            className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-[11px] text-muted-foreground hover:border-primary/40 hover:text-foreground"
          >
            <FileText className="h-3 w-3" /> Evidence page
          </Link>
        )}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2">
      <dt className="shrink-0 uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
      <dd className="truncate text-foreground/90">{v}</dd>
    </div>
  );
}

// ---- Evidence list: every number with its citation, no dropdowns ----------

export function EvidenceCards({
  inputs, factor, ctx, internalHref,
}: {
  inputs: EvidenceInput[];
  factor: FactorDef;
  ctx: SourceContext;
  internalHref?: { slug: string; pillar: string; factor: string };
}) {
  const withLabels = inputs.map((i) => ({
    ...i,
    label: i.label ?? factor.variables.find((v) => v.key === i.variableKey)?.label ?? i.variableKey,
  }));
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {withLabels.map((i) => (
        <SourceCard key={`${i.variableKey}`} input={i} ctx={ctx} internalHref={internalHref} />
      ))}
    </div>
  );
}

// ---- Advanced disclosure ---------------------------------------------------

export function Advanced({
  title = "Advanced methodology", children,
}: { title?: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-border bg-muted/10">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
        {title}
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="space-y-4 border-t border-border px-4 py-4">{children}</div>
    </details>
  );
}
