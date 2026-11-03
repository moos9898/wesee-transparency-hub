import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { findFactor, pillarKeyFromSlug, source } from "@/lib/methodology/registry";
import { exampleEvidence } from "@/lib/methodology/examples";
import { deriveFactorScores } from "@/lib/methodology/derive";
import { plainRead } from "@/lib/methodology/plain";
import { directSourceLink } from "@/lib/methodology/deep-links";
import { PlainWhy, CalculationFlow, EvidenceCards, Advanced } from "@/components/methodology/plain-ui";
import { EquationBlock, VariableTable, NormalizationTable, ConfidenceBadge, AuditTrail } from "@/components/methodology/factor-ui";
import { TIERS } from "@/lib/sources";
import { PILLAR_INDEX } from "@/lib/methodology-content";
import type { PillarKey } from "@/lib/score";

export const Route = createFileRoute("/companies_/$slug_/sources/$pillar/$factor")({
  component: SourcePage,
  head: ({ params }) => {
    const f = findFactor(params.pillar, params.factor);
    const title = `${f?.title ?? params.factor} evidence — ${params.slug} — WeSee`;
    const description = `Exact value, document, page, and original filing used for the ${f?.title ?? params.factor} score of ${params.slug}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: `/companies/${params.slug}/sources/${params.pillar}/${params.factor}` }],
    };
  },
});

function SourcePage() {
  const { slug, pillar, factor } = Route.useParams();
  const def = findFactor(pillar, factor);
  const pillarKey = pillarKeyFromSlug(pillar) as PillarKey | undefined;

  const { data: company, isLoading } = useQuery({
    queryKey: ["company", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("companies").select("*").eq("slug", slug).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  if (!def || !pillarKey) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link to="/companies" className="text-xs text-muted-foreground hover:text-foreground">← All companies</Link>
        <p className="mt-6 text-muted-foreground">Metric not found.</p>
      </div>
    );
  }
  if (isLoading) {
    return <div className="mx-auto max-w-3xl px-4 py-20 text-muted-foreground">Loading evidence…</div>;
  }
  if (!company) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link to="/companies" className="text-xs text-muted-foreground hover:text-foreground">← All companies</Link>
        <p className="mt-6 text-muted-foreground">Company not found.</p>
      </div>
    );
  }

  const pillarScore = Number((company as Record<string, unknown>)[pillarKey] ?? 0);
  const derived = deriveFactorScores(pillarKey, pillarScore, slug);
  const score = derived.find((d) => d.factor.key === def.key)?.score ?? 0;
  const evidence = exampleEvidence(def, slug);
  const read = plainRead(def, evidence, score, company.name);
  const ctx = { companyName: company.name, ticker: company.ticker, headquarters: company.headquarters };
  const pillarMeta = PILLAR_INDEX.find((p) => p.pillarKey === pillarKey);
  const primary = evidence.inputs[0];
  const primaryLink = primary ? directSourceLink(primary.sourceId, ctx, { document: primary.document, page: primary.page }) : null;
  const tier = primary ? TIERS[source(primary.sourceId).tier] : null;

  return (
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <Link to="/companies/$slug" params={{ slug }}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> {company.name}
      </Link>

      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Evidence record · {pillarMeta?.title ?? pillar}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
        {def.title}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        {company.name} · score <span className="font-semibold text-foreground">{score} / 100</span>
      </p>

      {tier && primaryLink && (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-4">
          <ShieldCheck className={`h-4 w-4 ${tier.tone}`} />
          <span className="text-sm text-foreground/90">{tier.label}</span>
          <a href={primaryLink.url} target="_blank" rel="noopener noreferrer"
             className="ml-auto inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary">
            {primaryLink.label} <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}

      <div className="mt-8 grid gap-4">
        <PlainWhy read={read} title={`Why ${company.name} received ${score}`} />
        <CalculationFlow read={read} />

        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Values used, with the exact document they came from
          </p>
          <EvidenceCards inputs={evidence.inputs} factor={def} ctx={ctx} />
        </div>

        <div className="rounded-xl border border-border bg-card p-5 text-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Why these values were selected
          </p>
          <p className="mt-2 text-foreground/90">
            WeSee uses the most recent mandatory disclosure available for each input. Where a company reports
            a figure directly (for example in a 10-K or DEF 14A), that number is used unchanged. Where no
            company disclosure exists, the closest official government dataset for the same period and
            geography is used, and the confidence level is lowered accordingly.
          </p>
          {evidence.illustrative && (
            <p className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-[13px] text-amber-100">
              This evidence record is an illustrative reconstruction. Filing ingestion for this company and
              metric is pending; once ingested, the values above are replaced with the filed figures.
            </p>
          )}
        </div>

        <Advanced title="Advanced methodology — equation, variables, normalization, audit trail">
          <EquationBlock eq={def.equation} />
          <VariableTable variables={def.variables} />
          <NormalizationTable rules={def.normalization} />
          <ConfidenceBadge level={def.confidence} rationale={def.confidenceRationale} />
          <AuditTrail chain={def.auditTrail} />
        </Advanced>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Full methodology:{" "}
        <Link to="/methodology/$pillar/$factor" params={{ pillar, factor }} className="underline hover:text-primary">
          {def.title}
        </Link>{" "}
        ·{" "}
        <Link to="/methodology/source-hierarchy" className="underline hover:text-primary">Source hierarchy</Link>
      </p>
    </article>
  );
}
