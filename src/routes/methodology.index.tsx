import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Scale, GitBranch, Calculator, Database } from "lucide-react";
import { PILLAR_INDEX, FRAMEWORK_INDEX } from "@/lib/methodology-content";
import { factorsByPillar } from "@/lib/methodology/registry";

export const Route = createFileRoute("/methodology/")({
  component: MethodologyIndex,
  head: () => ({
    meta: [
      { title: "Methodology — WeSee U.S. Economic Contribution Index" },
      { name: "description", content: "Interactive methodology for every WeSee pillar: weighted indicators, benchmark thresholds, normalization rules, source policy, confidence levels, and calibration logic." },
      { property: "og:title", content: "Methodology — WeSee" },
      { property: "og:description", content: "Interactive, auditable methodology behind every WeSee score." },
    ],
    links: [{ rel: "canonical", href: "/methodology" }],
  }),
});

const FRAMEWORK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "source-confidence-policy": ShieldCheck,
  "normalization-framework": Scale,
  "scale-responsibility-principle": GitBranch,
};

function MethodologyIndex() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Methodology</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">
        How U.S. economic contribution is scored.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        The WeSee score is a weighted composite of nine pillars. Each pillar is decomposed into weighted sub-indicators with transparent thresholds, normalized against industry peers and real-world cost-of-living conditions. Every page below is interactive — click any pillar to inspect indicators, benchmarks, calibration logic, and source citations.
      </p>

      {/* Frameworks */}
      <section className="mt-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Transparency frameworks</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {FRAMEWORK_INDEX.map((f) => {
            const Icon = FRAMEWORK_ICONS[f.slug] ?? ShieldCheck;
            return (
              <Link
                key={f.slug}
                to="/methodology/$slug"
                params={{ slug: f.slug }}
                className="group rounded-2xl border border-primary/30 bg-primary/5 p-5 transition hover:border-primary/60 hover:bg-primary/10"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-primary" />
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold">{f.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Overall score + source hierarchy */}
      <section className="mt-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Full audit surfaces</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Link to="/methodology/overall-score"
                className="group rounded-2xl border border-primary/30 bg-primary/5 p-5 transition hover:border-primary/60 hover:bg-primary/10">
            <div className="flex items-center justify-between">
              <Calculator className="h-4 w-4 text-primary" />
              <ArrowRight className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
            </div>
            <h2 className="mt-3 font-display text-lg font-semibold">Overall WeSee Score</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">The weighted-sum equation and every pillar weight, clickable.</p>
          </Link>
          <Link to="/methodology/source-hierarchy"
                className="group rounded-2xl border border-primary/30 bg-primary/5 p-5 transition hover:border-primary/60 hover:bg-primary/10">
            <div className="flex items-center justify-between">
              <Database className="h-4 w-4 text-primary" />
              <ArrowRight className="h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
            </div>
            <h2 className="mt-3 font-display text-lg font-semibold">Source Hierarchy</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">Tier 1, 2, and 3 sources with direct links and what each tier is allowed to do.</p>
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="mt-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Scoring pillars</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {PILLAR_INDEX.map((p) => {
            const factors = factorsByPillar(p.pillarKey);
            return (
              <Link
                key={p.slug}
                to="/methodology/$slug"
                params={{ slug: p.slug }}
                className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {(p.weight * 100).toFixed(0)}% weight
                  </p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.purpose}</p>
                {factors.length > 0 && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    Factors: {factors.map((f) => f.title).join(" · ")}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <p className="mt-12 text-xs text-muted-foreground">
        Looking for the full source &amp; confidence framework page? It's also available at{" "}
        <Link to="/methodology/$slug" params={{ slug: "source-confidence-policy" }} className="text-foreground underline underline-offset-2 hover:text-primary">/methodology/source-confidence-policy</Link>.
      </p>
    </div>
  );
}
