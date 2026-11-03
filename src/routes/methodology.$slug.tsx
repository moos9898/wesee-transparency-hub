import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ExternalLink, ShieldCheck, Scale, BarChart3, BookOpen, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  resolveMethodology, type PillarContent, type FrameworkContent,
} from "@/lib/methodology-content";
import { PILLAR_SUBINDICATORS, BENCHMARK_TIERS } from "@/lib/benchmarks";
import { pillarTransparency, confidenceMeta, TIERS } from "@/lib/sources";
import { factorsByPillar, pillarSlugFromKey } from "@/lib/methodology/registry";

export const Route = createFileRoute("/methodology/$slug")({
  component: MethodologyPage,
  head: ({ params }) => {
    const r = resolveMethodology(params.slug);
    const title = r ? r.content.title : params.slug;
    const description = r
      ? r.kind === "pillar"
        ? r.content.purpose
        : r.content.summary
      : `Methodology for the ${params.slug} pillar of the WeSee Transparency Index.`;
    return {
      meta: [
        { title: `${title} — WeSee Methodology` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — WeSee Methodology` },
        { property: "og:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/methodology/${params.slug}` }],
    };
  },
});

function MethodologyPage() {
  const { slug } = Route.useParams();
  const resolved = resolveMethodology(slug);

  if (resolved?.kind === "pillar")   return <PillarView c={resolved.content} />;
  if (resolved?.kind === "framework") return <FrameworkView c={resolved.content} />;
  return <DbFallbackView slug={slug} />;
}

// ---- Pillar view -----------------------------------------------------------

function PillarView({ c }: { c: PillarContent }) {
  const subs = PILLAR_SUBINDICATORS[c.pillarKey];
  const transparency = pillarTransparency(c.pillarKey);
  const conf = confidenceMeta(transparency.confidence);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        <span>{(c.weight * 100).toFixed(0)}% of total score</span>
        <span aria-hidden>·</span>
        <span className={`rounded-full border px-2 py-0.5 ${conf.tone}`}>{conf.label}</span>
      </div>

      <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-gradient">{c.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{c.purpose}</p>

      {/* Why this matters */}
      <Section icon={BookOpen} label="Why this matters">
        <p className="text-foreground/90 leading-relaxed">{c.whyMatters}</p>
      </Section>

      {/* Weighted indicators */}
      <Section icon={BarChart3} label="How this is calculated — weighted indicators">
        <p className="mb-4 text-sm text-muted-foreground">
          The pillar score is a weighted composite of the sub-indicators below. Weights sum to 100%.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-4 py-2 text-left">Sub-indicator</th>
                <th className="px-4 py-2 text-right">Weight</th>
                <th className="px-4 py-2 text-left">Normalization basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subs.map((s) => (
                <tr key={s.key}>
                  <td className="px-4 py-3 font-medium">{s.label}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{(s.weight * 100).toFixed(0)}%</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Factor drilldowns — every factor has its own auditable page */}
      <FactorLinks pillarKey={c.pillarKey} />


      {/* Threshold table */}
      <Section icon={Scale} label="Benchmark thresholds">
        <p className="mb-4 text-sm text-muted-foreground">
          Tier labels reflect peer-percentile position after industry normalization, not subjective judgement.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-4 py-2 text-left">Tier</th>
                <th className="px-4 py-2 text-left">Range</th>
                <th className="px-4 py-2 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {c.thresholds.map((row) => {
                const key = row.tier.toLowerCase() as keyof typeof BENCHMARK_TIERS;
                const tone = BENCHMARK_TIERS[key]?.tone ?? "text-foreground";
                return (
                  <tr key={row.tier}>
                    <td className={`px-4 py-3 font-medium ${tone}`}>{row.tier}</td>
                    <td className="px-4 py-3 tabular-nums text-foreground/90">{row.range}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.meaning}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Normalization + calibration */}
      <Section icon={Scale} label="Normalization & calibration">
        <p className="text-foreground/90 leading-relaxed">{transparency.normalization}</p>
        {c.calibration && (
          <div className="mt-4 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Calibration</p>
            <p className="mt-2">{c.calibration}</p>
          </div>
        )}
        {(transparency.scaleResponsibility || c.scaleResponsibility) && (
          <div className="mt-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground/90">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Scale-responsibility principle</p>
            <p className="mt-2">{c.scaleResponsibility ?? transparency.scaleResponsibility}</p>
            <Link to="/methodology/$slug" params={{ slug: "scale-responsibility-principle" }} className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline">
              Read the scale-responsibility principle →
            </Link>
          </div>
        )}
        <div className="mt-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Why this weight</p>
          <p className="mt-2">{transparency.weightRationale}</p>
        </div>
      </Section>

      {/* Real-world examples */}
      <Section icon={BookOpen} label="Score interpretation examples">
        <div className="grid gap-3 md:grid-cols-2">
          {c.examples.map((ex) => (
            <div key={ex.title} className="rounded-xl border border-border bg-card p-5">
              <p className="font-display text-base font-semibold">{ex.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{ex.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section icon={ShieldCheck} label="Source requirements & citations">
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className={`rounded-xl border p-4 ${conf.tone}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">{conf.label}</p>
            <p className="mt-2 text-sm">{conf.description}</p>
          </div>
          <Link to="/methodology/$slug" params={{ slug: "source-confidence-policy" }} className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Three-tier source policy</p>
              <p className="mt-1 text-sm">View source confidence policy →</p>
            </div>
          </Link>
        </div>
        <ul className="grid gap-2">
          {transparency.sources.map((s) => {
            const tier = TIERS[s.tier];
            return (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.publisher} · {s.type}</p>
                  </div>
                  <span className={`shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] ${tier.tone}`}>{tier.shortLabel}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Limitations */}
      <Section icon={AlertCircle} label="Known limitations">
        <ul className="grid gap-2">
          {c.limitations.map((l) => (
            <li key={l} className="flex gap-2 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section icon={BookOpen} label="Frequently asked questions">
        <Accordion type="single" collapsible className="w-full">
          {c.faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </article>
  );
}

// ---- Framework view --------------------------------------------------------

function FrameworkView({ c }: { c: FrameworkContent }) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">Transparency framework</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">{c.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{c.summary}</p>

      <div className="mt-10 space-y-4">
        {c.sections.map((s) => (
          <div key={s.heading} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">{s.heading}</h2>
            <p className="mt-2 text-foreground/90 leading-relaxed">{s.body}</p>
            {s.bullets && (
              <ul className="mt-3 grid gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/90">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <Section icon={BookOpen} label="Frequently asked questions">
        <Accordion type="single" collapsible className="w-full">
          {c.faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </article>
  );
}

// ---- DB fallback (legacy methodology_pages rows not in the rich registry) --

function DbFallbackView({ slug }: { slug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["methodology", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("methodology_pages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <div className="mx-auto max-w-3xl px-4 py-20 text-muted-foreground">Loading…</div>;
  if (!data) return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>
      <p className="mt-6 text-muted-foreground">Page not found.</p>
    </div>
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link to="/methodology" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> All methodology
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {data.weight ? `${(Number(data.weight) * 100).toFixed(0)}% of total score` : "Overview"}
      </p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">{data.title}</h1>
      {data.summary && <p className="mt-4 text-lg text-muted-foreground">{data.summary}</p>}
      <div className="prose prose-invert mt-10 max-w-none whitespace-pre-wrap rounded-2xl border border-border bg-card p-8 text-foreground/90 leading-relaxed">
        {data.content}
      </div>
    </article>
  );
}

// ---- Factor drilldown links -----------------------------------------------

function FactorLinks({ pillarKey }: { pillarKey: import("@/lib/score").PillarKey }) {
  const factors = factorsByPillar(pillarKey);
  const pillarSlug = pillarSlugFromKey(pillarKey);
  if (!factors.length) return null;
  return (
    <Section icon={BookOpen} label="Factor drilldowns — click any factor for full audit">
      <div className="grid gap-2 sm:grid-cols-2">
        {factors.map((f) => (
          <Link key={f.key} to="/methodology/$pillar/$factor"
                params={{ pillar: pillarSlug, factor: f.slug }}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
            <div>
              <p className="font-display text-base font-semibold">{f.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{f.definition}</p>
            </div>
            <span className="ml-3 shrink-0 text-xs tabular-nums text-muted-foreground">{(f.weight * 100).toFixed(0)}%</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

// ---- Shared section wrapper ------------------------------------------------


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
