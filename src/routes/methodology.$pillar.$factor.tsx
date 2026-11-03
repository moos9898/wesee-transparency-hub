import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Calculator, Scale, ShieldCheck, GitBranch, AlertCircle, Weight } from "lucide-react";
import {
  findFactor, pillarKeyFromSlug, factorsByPillar, pillarSlugFromKey,
} from "@/lib/methodology/registry";
import { exampleEvidence } from "@/lib/methodology/examples";
import { plainRead } from "@/lib/methodology/plain";
import { PlainWhy, CalculationFlow, EvidenceCards, Advanced } from "@/components/methodology/plain-ui";
import {
  EquationBlock, VariableTable, RawInputsTable, StepCalculation,
  NormalizationTable, ConfidenceBadge, AuditTrail, SourceCitations, IllustrativeBanner,
} from "@/components/methodology/factor-ui";
import { PILLAR_INDEX } from "@/lib/methodology-content";


export const Route = createFileRoute("/methodology/$pillar/$factor")({
  component: FactorPage,
  head: ({ params }) => {
    const f = findFactor(params.pillar, params.factor);
    const title = f ? `${f.title} — WeSee Methodology` : `${params.factor} — WeSee Methodology`;
    const description = f?.definition ?? "Auditable methodology for a WeSee scoring factor.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/methodology/${params.pillar}/${params.factor}` }],
    };
  },
});

function FactorPage() {
  const { pillar, factor } = Route.useParams();
  const def = findFactor(pillar, factor);
  const pillarKey = pillarKeyFromSlug(pillar);

  if (!def || !pillarKey) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> All methodology
        </Link>
        <p className="mt-6 text-muted-foreground">Factor not found.</p>
      </div>
    );
  }

  const pillarMeta = PILLAR_INDEX.find((p) => p.pillarKey === pillarKey);
  const evidence = exampleEvidence(def);
  const read = plainRead(def, evidence, Math.round(evidence.normalizedScore));
  const siblings = factorsByPillar(pillarKey);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link to="/methodology/$slug" params={{ slug: pillar }}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> {pillarMeta?.title ?? "Pillar"}
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        <span>{(def.weight * 100).toFixed(0)}% weight in pillar</span>
        <span aria-hidden>·</span>
        <span>{pillarMeta ? `${(pillarMeta.weight * 100).toFixed(0)}% pillar weight in WeSee Index` : ""}</span>
      </div>

      <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-gradient">{def.title}</h1>

      {/* What this measures */}
      <Section icon={BookOpen} label="What this measures">
        <p className="text-foreground/90 leading-relaxed">{def.definition}</p>
      </Section>

      {/* How we calculated this — plain English + real numbers */}
      <Section icon={Calculator} label="How we calculated this">
        <div className="grid gap-4">
          <CalculationFlow read={read} label="Worked example, step by step" />
          <PlainWhy read={read} title="Why a score like this happens" />
        </div>
      </Section>

      {/* Example with real numbers, each with its source visible */}
      <Section icon={ShieldCheck} label="Example numbers & where they come from">
        <IllustrativeBanner bundle={evidence} />
        <div className="mt-3">
          <EvidenceCards inputs={evidence.inputs} factor={def} ctx={{ companyName: "Example U.S. employer" }} />
        </div>
        <div className="mt-4">
          <SourceCitations inputs={evidence.inputs} />
        </div>
      </Section>


      {/* 8. Weight */}
      <Section icon={Weight} label="Weight">
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-sm text-foreground/90">
            <strong>{def.title}</strong> is <strong className="text-gradient">{(def.weight * 100).toFixed(0)}%</strong> of the{" "}
            <Link to="/methodology/$slug" params={{ slug: pillar }} className="text-primary hover:underline">
              {pillarMeta?.title}
            </Link>{" "}
            pillar, which in turn is <strong className="text-gradient">{pillarMeta ? (pillarMeta.weight * 100).toFixed(0) : "—"}%</strong> of the{" "}
            <Link to="/methodology/overall-score" className="text-primary hover:underline">Overall WeSee Score</Link>.
          </p>
          <div className="mt-4 space-y-2">
            {siblings.map((s) => (
              <Link key={s.key} to="/methodology/$pillar/$factor"
                    params={{ pillar, factor: s.slug }}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm transition ${s.key === def.key ? "border-primary/60 bg-primary/5" : "border-border hover:border-primary/40"}`}>
                <span>{s.title}</span>
                <span className="tabular-nums text-muted-foreground">{(s.weight * 100).toFixed(0)}%</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Researcher detail — secondary by design */}
      <Section icon={Calculator} label="Advanced methodology">
        <Advanced title="Equation, variables, normalization, confidence, limitations, audit trail">
          <EquationBlock eq={def.equation} />
          <VariableTable variables={def.variables} />
          <IllustrativeBanner bundle={evidence} />
          <RawInputsTable inputs={evidence.inputs} variables={def.variables} />
          <StepCalculation steps={evidence.steps} score={evidence.normalizedScore} />
          <NormalizationTable rules={def.normalization} />
          <ConfidenceBadge level={def.confidence} rationale={def.confidenceRationale} />
          <div>
            <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <AlertCircle className="h-3.5 w-3.5" /> Limitations
            </p>
            <ul className="grid gap-2">
              {def.limitations.map((l) => (
                <li key={l} className="flex gap-2 text-sm text-foreground/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <GitBranch className="h-3.5 w-3.5" /> Audit trail
            </p>
            <AuditTrail chain={def.auditTrail} />
          </div>
        </Advanced>
      </Section>


      <p className="mt-12 text-xs text-muted-foreground">
        Pillar overview:{" "}
        <Link to="/methodology/$slug" params={{ slug: pillarSlugFromKey(pillarKey) }} className="underline hover:text-primary">
          {pillarMeta?.title}
        </Link>{" "}
        · Full framework:{" "}
        <Link to="/methodology/overall-score" className="underline hover:text-primary">Overall Score</Link>
        {" · "}
        <Link to="/methodology/source-hierarchy" className="underline hover:text-primary">Source Hierarchy</Link>
      </p>
    </article>
  );
}

function Section({
  icon: Icon, label, children,
}: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
