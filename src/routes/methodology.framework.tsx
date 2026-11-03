import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, AlertTriangle, XCircle, ExternalLink, ShieldCheck, FileText, GitBranch } from "lucide-react";
import { TIERS, TIER_1_EXAMPLES, TIER_2_EXAMPLES, TIER_3_EXAMPLES, confidenceMeta } from "@/lib/sources";

export const Route = createFileRoute("/methodology/framework")({
  component: FrameworkPage,
  head: () => ({
    meta: [
      { title: "Source & Confidence Framework — WeSee" },
      { name: "description", content: "How WeSee classifies sources, assigns confidence, and audits every score. Three-tier source reliability framework, citation policy, and governance standards." },
      { property: "og:title", content: "Source & Confidence Framework — WeSee" },
      { property: "og:description", content: "Three-tier source reliability framework, confidence levels, and governance standards behind every WeSee score." },
    ],
    links: [{ rel: "canonical", href: "/methodology/framework" }],
  }),
});

function FrameworkPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Transparency framework</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">
        Source &amp; confidence framework
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Every WeSee score is built from verifiable public data. This page documents the three-tier source policy, the confidence labels you'll see throughout the platform, and the governance standards that gate any score modification.
      </p>

      {/* Tier framework */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Three-tier source reliability framework</h2>
        <div className="mt-6 space-y-4">
          <TierCard
            icon={CheckCircle2}
            tier={1}
            examples={TIER_1_EXAMPLES.map((s) => ({ name: s.name, url: s.url, note: s.note }))}
          />
          <TierCard
            icon={AlertTriangle}
            tier={2}
            examples={TIER_2_EXAMPLES.map((s) => ({ name: s.name, url: s.url }))}
          />
          <TierCard icon={XCircle} tier={3} examplesText={TIER_3_EXAMPLES} />
        </div>
      </section>

      {/* Confidence */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Confidence levels</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Each pillar carries a visible confidence badge so readers know how much of its score is anchored in primary-source data versus estimation.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {(["high", "medium", "low"] as const).map((c) => {
            const m = confidenceMeta(c);
            return (
              <div key={c} className={`rounded-xl border p-5 ${m.tone}`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">{m.label}</p>
                <p className="mt-3 text-sm text-foreground/90">{m.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Citation policy */}
      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          <FileText className="h-3.5 w-3.5" /> Citation policy
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">Every metric is traceable</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Each rationale note, score contributor, and pillar metric on WeSee displays the source name, the filing or dataset, the publisher, and a direct hyperlink to the original record. Readers can audit any claim independently.
        </p>
        <ul className="mt-5 grid gap-2 text-sm text-foreground/90">
          {[
            "Source name (e.g. SEC 10-K, OpenSecrets Filing, OSHA Record)",
            "Publishing institution",
            "Source type and reporting period",
            "Tier classification (1 / 2 / 3)",
            "Direct hyperlink to the canonical public record",
            "Confidence level for the underlying metric",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Scale responsibility */}
      <section className="mt-16 rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5" /> Scale responsibility principle
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">Proportional and absolute impact both matter</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          WeSee evaluates both <span className="text-foreground font-medium">proportional workforce impact</span> and <span className="text-foreground font-medium">absolute societal impact</span>. Large-scale workforce reductions can materially affect regional economies, housing stability, and local labor markets even when the percentage of total workforce is modest. For employers above 100,000 U.S. workers, the absolute count of affected positions is incorporated alongside the relative percentage.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground italic">
          Example: "Although layoffs represented less than 1% of total workforce size, the absolute number of workers affected significantly reduced this company's Workforce Stability score."
        </p>
      </section>

      {/* Governance */}
      <section className="mt-16">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          <GitBranch className="h-3.5 w-3.5" /> Governance &amp; audit
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">How score changes are reviewed</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            { t: "Automated ingestion", d: "Tier-1 sources (SEC, BLS, OSHA, OpenSecrets, Census, MIT Living Wage) feed the scoring engine through standardized normalization layers." },
            { t: "Human review layer", d: "Material score swings — mass layoffs, large outsourcing events, controversial workforce actions — require analyst review before publication." },
            { t: "Override audit log", d: "Every manual score adjustment records the editor, timestamp, source citation, and written reason. History is preserved across revisions." },
            { t: "Methodology revisions", d: "Weight or normalization changes are versioned. Prior score snapshots remain accessible so historical reads stay reproducible." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-base font-semibold">{b.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-2xl border border-dashed border-border bg-card/40 p-6 text-sm text-muted-foreground">
        Questions about a specific citation or score? Every pillar page lists its canonical sources with hyperlinks. Open any company page and expand a pillar to see the same citations applied to that company's reading.
      </div>
    </article>
  );
}

function TierCard({
  icon: Icon,
  tier,
  examples,
  examplesText,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tier: 1 | 2 | 3;
  examples?: { name: string; url: string; note?: string }[];
  examplesText?: string[];
}) {
  const t = TIERS[tier];
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 ${t.tone}`} />
        <div className="flex-1">
          <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${t.tone}`}>{t.shortLabel}</p>
          <h3 className="mt-1 font-display text-xl font-semibold">{t.label.split("—")[1]?.trim()}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
          <p className="mt-2 text-xs text-foreground/80"><span className="font-medium">Rule: </span>{t.rule}</p>

          {examples && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {examples.map((e) => (
                <li key={e.name}>
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 text-xs hover:border-primary/40 hover:bg-accent/40"
                  >
                    <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground group-hover:text-foreground" />
                    <span>
                      <span className="font-medium text-foreground">{e.name}</span>
                      {e.note && <span className="block text-muted-foreground">{e.note}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {examplesText && (
            <ul className="mt-4 grid gap-1.5">
              {examplesText.map((e) => (
                <li key={e} className="flex gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400/60" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
