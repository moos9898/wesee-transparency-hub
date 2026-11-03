import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SOURCES } from "@/lib/methodology/registry";
import { TIERS } from "@/lib/sources";

export const Route = createFileRoute("/methodology/source-hierarchy")({
  component: SourceHierarchyPage,
  head: () => ({
    meta: [
      { title: "Source Hierarchy — WeSee Methodology" },
      { name: "description", content: "Tier 1, 2, and 3 sources used by WeSee, with direct links, tier rules, and what each tier is allowed to do." },
      { property: "og:title", content: "Source Hierarchy — WeSee Methodology" },
      { property: "og:description", content: "Every source WeSee uses, its tier, and what it is allowed to do." },
    ],
    links: [{ rel: "canonical", href: "/methodology/source-hierarchy" }],
  }),
});

const TIER_3_EXCLUDED = [
  "Reddit and other user-generated forums",
  "TikTok, Instagram, and short-form social posts",
  "Personal blogs and opinion sites",
  "Anonymous leaks and rumors",
  "Opinion pieces without primary-source citation",
  "AI-generated content without independently verifiable evidence",
];

function SourceHierarchyPage() {
  const t1 = Object.values(SOURCES).filter((s) => s.tier === 1);
  const t2 = Object.values(SOURCES).filter((s) => s.tier === 2);
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Source Hierarchy</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">Source Hierarchy</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Every metric on WeSee cites a source. Sources are ranked into three tiers. Tier-2 provides context
        only — it never independently changes a score. Tier-3 is never used.
      </p>

      <TierBlock title={TIERS[1].label} rule={TIERS[1].rule} tone={TIERS[1].tone}>
        <ul className="grid gap-2 sm:grid-cols-2">
          {t1.map((s) => (
            <li key={s.id}>
              <a href={s.homepage} target="_blank" rel="noopener noreferrer"
                 className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.organization}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </TierBlock>

      <TierBlock title={TIERS[2].label} rule={TIERS[2].rule} tone={TIERS[2].tone}>
        <ul className="grid gap-2 sm:grid-cols-2">
          {t2.map((s) => (
            <li key={s.id}>
              <a href={s.homepage} target="_blank" rel="noopener noreferrer"
                 className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.organization}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </TierBlock>

      <TierBlock title={TIERS[3].label} rule={TIERS[3].rule} tone={TIERS[3].tone}>
        <ul className="grid gap-2">
          {TIER_3_EXCLUDED.map((t) => (
            <li key={t} className="flex gap-2 rounded-lg border border-border bg-card p-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-500" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </TierBlock>
    </article>
  );
}

function TierBlock({ title, rule, tone, children }: { title: string; rule: string; tone: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${tone}`}>{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{rule}</p>
      <div className="mt-4">{children}</div>
    </section>
  );
}
