import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calculator } from "lucide-react";
import { PILLARS } from "@/lib/score";
import { PILLAR_INDEX } from "@/lib/methodology-content";

export const Route = createFileRoute("/methodology/overall-score")({
  component: OverallScorePage,
  head: () => ({
    meta: [
      { title: "Overall WeSee Score — Methodology" },
      { name: "description", content: "The Overall WeSee Score is a weighted sum of nine pillars. Every weight, equation, and pillar is published and clickable." },
      { property: "og:title", content: "Overall WeSee Score — Methodology" },
      { property: "og:description", content: "The Overall WeSee Score is a weighted sum of nine pillars. Every weight is published." },
    ],
    links: [{ rel: "canonical", href: "/methodology/overall-score" }],
  }),
});

function OverallScorePage() {
  const totalWeight = PILLARS.reduce((s, p) => s + p.weight, 0);
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Overall Score</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">
        Overall WeSee Score
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        The Overall Score is a weighted sum of nine pillars. Every pillar weight is fixed and published.
        Click any pillar to drill into its factors, equations, raw inputs, and original sources.
      </p>

      <section className="mt-10">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Equation</p>
          <p className="mt-3 font-display text-2xl">Overall Score = Σ (Pillar Score × Pillar Weight)</p>
          <p className="mt-2 text-xs text-muted-foreground">Weights sum to {(totalWeight * 100).toFixed(0)}%.</p>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          <Calculator className="h-3.5 w-3.5" /> Pillar weights
        </div>
        <div className="mt-4 grid gap-2">
          {PILLARS.map((p) => {
            const meta = PILLAR_INDEX.find((m) => m.pillarKey === p.key);
            const slug = meta?.slug ?? p.slug;
            return (
              <Link key={p.key} to="/methodology/$slug" params={{ slug }}
                    className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-primary/40">
                <div>
                  <p className="font-display text-lg font-semibold">{p.label}</p>
                  {meta && <p className="mt-1 text-sm text-muted-foreground">{meta.purpose}</p>}
                </div>
                <div className="text-right tabular-nums">
                  <p className="text-gradient font-display text-2xl">{(p.weight * 100).toFixed(0)}%</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">of Index</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">
        Every pillar page publishes its own equation, factor weights, raw inputs, and source citations.
        See also the{" "}
        <Link to="/methodology/source-hierarchy" className="underline hover:text-primary">Source Hierarchy</Link>{" "}
        and{" "}
        <Link to="/methodology/$slug" params={{ slug: "normalization-framework" }} className="underline hover:text-primary">
          Normalization Framework
        </Link>.
      </p>
    </article>
  );
}
