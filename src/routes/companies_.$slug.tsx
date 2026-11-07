import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Building2, Globe, Users, Calendar, TrendingUp, TrendingDown, Trophy, BarChart3, Sparkles, Gauge, Info, ChevronDown, AlertTriangle, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ScoreRing } from "@/components/score-ring";

import { PILLARS, scoreGrade, pillarRationale, scoreColor, type PillarKey } from "@/lib/score";
import { pillarTransparency, confidenceMeta, TIERS } from "@/lib/sources";
import { deriveSubScores, BENCHMARK_TIERS, benchmarkTier, EXPLAINABLE_MODELING_NOTE } from "@/lib/benchmarks";
import { computeReinvestmentInsight } from "@/lib/reinvestment";
import { computeLayoffCalibration } from "@/lib/layoff";
import { pillarMateriality, MATERIALITY_META } from "@/lib/materiality";
import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PillarCalculation } from "@/components/methodology/pillar-calculation";
import { factorsByPillar } from "@/lib/methodology/registry";
import { hasRealEvidence } from "@/lib/methodology/evidence";
import { DemoDataBanner } from "@/components/demo-data-banner";
import { COMPANY_CARDS, FACTOR_STATUS_LABEL, type CompanyCard, type CardPillar, type StepBlock } from "@/lib/company-cards/amazon";
import { renderLinkedText } from "@/lib/linked-text";

function StepLines({ block }: { block: StepBlock }) {
  return (
    <div className="rounded-lg border border-border bg-muted/10 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{block.title}</p>
      <ul className="mt-2 grid gap-1.5">
        {block.lines.map((l, i) => (
          <li key={i} className={`flex items-baseline justify-between gap-3 text-xs ${l.kind === "total" ? "border-t border-border pt-1.5 font-semibold text-foreground" : l.kind === "step" ? "text-foreground/90" : "text-muted-foreground"}`}>
            <span>{renderLinkedText(l.text, l.links)}</span>
            {l.result && (
              l.url ? (
                <a href={l.url} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-md border border-primary/40 bg-primary/10 px-1.5 py-0.5 tabular-nums text-foreground underline underline-offset-2">{l.result}</a>
              ) : (
                <span className="shrink-0 rounded-md border border-primary/40 bg-primary/10 px-1.5 py-0.5 tabular-nums text-foreground">{l.result}</span>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardOverall({ card }: { card: CompanyCard }) {
  return (
    <div className="mt-4 space-y-2">
      <p className="text-[11px] text-muted-foreground">{card.period}</p>
      <StepLines block={{ ...card.overallBlock, title: `How the overall ${card.overall} is calculated` }} />
    </div>
  );
}

function CardPillarItem({ pillarKey, label, weight, cp }: { pillarKey: string; label: string; weight: number; cp: CardPillar }) {
  const value = cp.score;
  const factors = factorsByPillar(pillarKey as PillarKey);
  return (
    <AccordionItem id={`pillar-${pillarKey}`} value={pillarKey} className={`border-border ${value == null ? "opacity-70" : ""}`}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex-1 pr-4">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm font-medium">{label}</span>
            {value == null ? (
              <span className="text-xs text-muted-foreground">{cp.status}</span>
            ) : (
              <span className="text-sm tabular-nums">
                <span className="font-semibold">{value}</span>
                <span className="ml-1 text-xs text-muted-foreground">· {(weight * 100).toFixed(0)}% weight</span>
              </span>
            )}
          </div>
          <div className={`mt-2 h-1.5 overflow-hidden rounded-full ${value == null ? "bg-muted/40" : "bg-muted"}`}>
            {value != null && (
              <div className="h-full rounded-full transition-[width] duration-1000" style={{ width: `${value}%`, backgroundColor: scoreColor(value) }} />
            )}
          </div>
          <p className="mt-2 text-left text-xs font-normal text-muted-foreground">{renderLinkedText(cp.sentence, cp.sentenceLinks)}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3 pt-2 text-sm">
          {cp.footnote && <p className="text-[12px] italic text-muted-foreground">{renderLinkedText(cp.footnote, cp.footnoteLinks)}</p>}
          {cp.rule && <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{cp.rule}</p>}
          {cp.blocks?.map((b, i) => <StepLines key={i} block={b} />)}
          <div className="rounded-lg border border-border bg-muted/10 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Every factor</p>
            <ul className="mt-2 grid gap-2">
              {factors.map((f) => {
                const fs = cp.factors[f.key];
                return (
                  <li key={f.key} className="text-xs">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium text-foreground">{f.title} <span className="text-muted-foreground">· {(f.weight * 100).toFixed(0)}%</span></span>
                      <span className={fs?.status === "scored" ? "text-emerald-400" : "text-muted-foreground"}>
                        {fs ? FACTOR_STATUS_LABEL[fs.status] : "Not yet measurable"}
                      </span>
                    </div>
                    {fs?.note && <p className="mt-0.5 text-[11px] text-muted-foreground">{renderLinkedText(fs.note, fs.links)}</p>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function CardSources({ card }: { card: CompanyCard }) {
  return (
    <div className="mt-6 rounded-lg border border-border bg-muted/10 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Evidence records (exact sources)</p>
      <ul className="mt-2 grid gap-1.5 text-xs">
        {card.sources.map((s) => (
          <li key={s.label}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary underline underline-offset-2 hover:text-foreground">
                {s.label} <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-foreground/90">{s.label}</span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] text-muted-foreground">{card.rules}</p>
    </div>
  );
}


export const Route = createFileRoute("/companies_/$slug")({
  component: CompanyPage,
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — WeSee Transparency Score` },
      { name: "description", content: `Transparency score, methodology, and pillar breakdown for ${params.slug}.` },
    ],
    links: [{ rel: "canonical", href: `/companies/${params.slug}` }],
  }),
});

function CompanyPage() {
  const { slug } = Route.useParams();
  const [reinvestmentAdvanced, setReinvestmentAdvanced] = useState(false);
  const { data: all, isLoading, error } = useQuery({
    queryKey: ["companies-all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("companies").select("*");
      if (error) throw error;
      return data ?? [];
    },
  });

  if (isLoading) {
    return <div className="mx-auto max-w-6xl px-4 py-20 text-muted-foreground">Loading…</div>;
  }
  const data = (all ?? []).find((c) => c.slug === slug);
  if (error || !data) {
    return <div className="mx-auto max-w-6xl px-4 py-20 text-muted-foreground">Company not found.</div>;
  }

  const scores = Object.fromEntries(
    PILLARS.map((p) => {
      const raw = (data as Record<string, unknown>)[p.key];
      return [p.key, raw == null ? null : Number(raw)];
    }),
  ) as Record<PillarKey, number | null>;
  // Coerced view for helper math (unscored pillars contribute 0, same as the generated composite treats null).
  const numericScores = Object.fromEntries(
    PILLARS.map((p) => [p.key, scores[p.key] ?? 0]),
  ) as Record<PillarKey, number>;
  const overall = data.overall_score == null ? null : Number(data.overall_score);
  const isPartial = overall == null;
  const scoredCount = PILLARS.filter((p) => scores[p.key] != null).length;
  const realSourced = hasRealEvidence(data);
  const card = COMPANY_CARDS[data.slug];
  // Employees tile links to the company's 10-K (the URL already in the card's sources).
  const tenKUrl = card?.sources.find((s) => /10-K/i.test(s.label))?.url;

  // Build positives / penalties from weighted contribution deltas from a neutral 60 baseline
  const ranked = PILLARS.map((p) => {
    const v = scores[p.key] ?? 0;
    return { ...p, value: v, weighted: (v - 60) * p.weight, scored: scores[p.key] != null };
  });
  const positives = [...ranked].filter((r) => r.scored && r.value >= 60).sort((a, b) => b.weighted - a.weighted).slice(0, 3);
  const penalties = [...ranked].filter((r) => r.scored && r.value < 60).sort((a, b) => a.weighted - b.weighted).slice(0, 3);

  // Comparisons — only among fully-scored companies
  const scoredCompanies = (all ?? []).filter((c) => c.overall_score != null);
  const industryPeers = scoredCompanies.filter((c) => c.industry === data.industry);
  const industryAvg = industryPeers.length
    ? industryPeers.reduce((s, c) => s + Number(c.overall_score), 0) / industryPeers.length
    : null;
  const sorted = [...scoredCompanies].sort((a, b) => Number(b.overall_score) - Number(a.overall_score));
  const topCompany = sorted[0];
  const bottomCompany = sorted[sorted.length - 1];
  const rank = isPartial ? null : sorted.findIndex((c) => c.slug === slug) + 1;

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-64 bg-radial-glow" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Link to="/companies" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> All companies
        </Link>

        <div className="mt-4">
          {hasRealEvidence(data) || card ? (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm sm:px-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-emerald-300 text-[11px]">
                    Real sourced data — partial
                  </p>
                  <p className="mt-1 text-foreground/80">
                    {data.name}'s verified factors are scored from real public filings (SEC EDGAR, OpenSecrets, DOL WARN).
                    {card
                      ? " Pillars and factors without filed data show their status — never a generated or estimated number."
                      : ' Factors without a filed record are labelled "Illustrative example" on this page and not counted as real data.'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <DemoDataBanner />
          )}
        </div>


        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {data.ticker} · {data.sector}
            </p>
            <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-6xl text-gradient">
              {data.name}
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">{data.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Meta icon={Building2} label="Industry" value={data.industry} />
              <Meta icon={Globe} label="HQ" value={data.headquarters} />
              <Meta icon={Users} label="Employees" value={data.employees?.toLocaleString()} href={tenKUrl} />
              <Meta icon={Calendar} label="Founded" value={data.founded} />
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 ring-glow">
            {card ? (
              <>
                <ScoreRing score={card.overall} label="Contribution" />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  <span className={`font-semibold ${scoreGrade(card.overall).tone}`}>Overall: {card.overall} — {card.band}</span>
                </p>
                <p className="mt-1 max-w-[16rem] text-center text-[11px] text-muted-foreground">Coverage: {card.coverage}</p>
              </>
            ) : isPartial ? (
              <>
                <p className="font-display text-4xl font-semibold text-muted-foreground">Partial</p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  {scoredCount} of {PILLARS.length} pillars sourced
                </p>
                <p className="mt-1 max-w-[16rem] text-center text-[11px] text-muted-foreground">
                  The overall composite is unavailable until every pillar is independently scored from a verified public filing.
                </p>
              </>
            ) : (
              <>
                <ScoreRing score={overall} label="Contribution" />
                {(() => {
                  const bt = BENCHMARK_TIERS[benchmarkTier(overall)];
                  const grade = scoreGrade(overall);
                  return (
                    <>
                      <p className="mt-4 text-center text-sm text-muted-foreground">
                        <span className={`font-semibold ${grade.tone}`}>{bt.label}</span> · {bt.range}
                      </p>
                      <p className="mt-1 text-center text-[11px] text-muted-foreground">
                        Weighted across {PILLARS.length} benchmarked pillars
                      </p>
                    </>
                  );
                })()}
              </>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-start gap-2 rounded-xl border border-border bg-muted/20 p-4 text-[12px] text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>{EXPLAINABLE_MODELING_NOTE}</span>
        </div>

        {/* Non-endorsement disclaimer */}
        <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
          This score reflects WeSee's independent analysis based on public filings and disclosures.
          It is not endorsed by or affiliated with {data.name}. See our{" "}
          <Link to="/terms" className="text-primary underline underline-offset-2 hover:text-foreground">Terms of Use</Link>.
        </p>

        {/* Report an error */}
        <ReportError companySlug={data.slug} companyName={data.name} />


        {/* Quick Read — casual-user summary (fully-scored companies only) */}
        {overall != null && (
        <section className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" /> Quick read
          </div>
          <p className="mt-3 text-base text-foreground/90 leading-relaxed">
            {buildQuickReadSummary(data.name, positives, penalties, overall)}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">Key strengths</p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {positives.length === 0 && <li className="text-muted-foreground">No pillar scored materially above baseline.</li>}
                {positives.slice(0, 2).map((p) => (
                  <li key={p.key} className="flex items-baseline justify-between gap-3">
                    <span>{p.label}</span>
                    <span className="tabular-nums text-emerald-400">{p.value.toFixed(0)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-400">Key concerns</p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
                {penalties.length === 0 && <li className="text-muted-foreground">No pillar fell materially below baseline.</li>}
                {penalties.slice(0, 2).map((p) => (
                  <li key={p.key} className="flex items-baseline justify-between gap-3">
                    <span>{p.label}</span>
                    <span className="tabular-nums text-orange-400">{p.value.toFixed(0)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            Scroll for the full pillar breakdown, or jump directly to{" "}
            <a href="#methodology-detail" className="text-foreground underline underline-offset-2 hover:text-primary">advanced analysis</a>.
          </p>
        </section>
        )}



        <div id="methodology-detail" className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">Pillar breakdown</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Weighted contribution to the composite. Expand each pillar to see why it earned this score.
            </p>
            {card && <CardOverall card={card} />}
            <Accordion type="multiple" className="mt-6">
              {PILLARS.map((p) => {
                const value = scores[p.key];
                if (card) return <CardPillarItem key={p.key} pillarKey={p.key} label={p.label} weight={p.weight} cp={card.pillars[p.key]} />;
                if (value == null) {
                  return (
                    <AccordionItem id={`pillar-${p.key}`} key={p.key} value={p.key} className="border-border opacity-70">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex-1 pr-4">
                          <div className="flex items-baseline justify-between">
                            <span className="text-sm font-medium">{p.label}</span>
                            <span className="text-xs text-muted-foreground">Not yet scored</span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted/40" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="pt-2 text-sm text-muted-foreground">
                          WeSee has not yet independently scored this pillar for {data.name}. It is excluded from the composite until sourced from a verified public filing.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
                const customNote = (data.pillar_notes as Record<string, string> | null)?.[p.key];
                const r = pillarRationale(p.key as PillarKey, value, customNote);
                const color = scoreColor(value);
                return (
                  <AccordionItem id={`pillar-${p.key}`} key={p.key} value={p.key} className="border-border">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex-1 pr-4">
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-medium">{p.label}</span>
                          <span className="text-sm tabular-nums">
                            <span className="font-semibold">{value.toFixed(0)}</span>
                            <span className="ml-1 text-xs text-muted-foreground">
                              · {(p.weight * 100).toFixed(0)}% weight
                            </span>
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full transition-[width] duration-1000"
                            style={{ width: `${value}%`, backgroundColor: color }}
                          />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2 text-sm">
                        {(() => {
                          const bt = BENCHMARK_TIERS[benchmarkTier(value)];
                          const mat = pillarMateriality(data.industry, p.key as PillarKey);
                          const mm = MATERIALITY_META[mat];
                          return (
                            <>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${bt.tone}`}>
                                  {bt.label} · {bt.range}
                                </span>
                                {mat !== "standard" && (
                                  <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${mm.tone}`}>
                                    {mm.label}
                                  </span>
                                )}
                              </div>
                              {mm.note && (
                                <div className="rounded-lg border border-border bg-muted/20 p-3 text-[12px] text-muted-foreground">
                                  {mm.note}
                                </div>
                              )}
                            </>
                          );
                        })()}
                        <p className="text-muted-foreground">
                          {BENCHMARK_TIERS[benchmarkTier(value)].description}
                        </p>
                        <p className="text-muted-foreground">{r.summary}</p>
                        {r.customNote && (
                          <div className="rounded-lg border border-border bg-muted/30 p-3 text-foreground/90">
                            <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                              Company-specific note
                            </p>
                            {r.customNote}
                          </div>
                        )}

                        {/* Registry-driven factor breakdown with worked equation + per-factor drilldowns */}
                        {factorsByPillar(p.key as PillarKey).length > 0 ? (
                          <PillarCalculation
                            pillarKey={p.key as PillarKey}
                            pillarLabel={p.label}
                            pillarScore={value}
                            seedKey={data.slug}
                            companyName={data.name}
                            ticker={data.ticker}
                            headquarters={data.headquarters}
                            company={data}
                          />


                        ) : (() => {
                          const subs = deriveSubScores(p.key as PillarKey, value, data.slug);
                          return (
                            <div className="rounded-lg border border-border bg-muted/10 p-3">
                              <div className="flex items-baseline justify-between">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                  Weighted indicator breakdown
                                </p>
                                <p className="text-[10px] text-muted-foreground">Sum of weights = 100%</p>
                              </div>
                              <ul className="mt-3 grid gap-3">
                                {subs.map((s) => {
                                  const sColor = scoreColor(s.score);
                                  const tier = BENCHMARK_TIERS[s.tier];
                                  return (
                                    <li key={s.key} className="text-xs">
                                      <div className="flex items-baseline justify-between gap-3">
                                        <span className="font-medium text-foreground">{s.label}</span>
                                        <span className="tabular-nums text-muted-foreground">
                                          <span className="font-semibold text-foreground">{s.score}</span>
                                          <span className="ml-1">· {(s.weight * 100).toFixed(0)}% weight</span>
                                        </span>
                                      </div>
                                      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
                                        <div
                                          className="h-full rounded-full transition-[width] duration-700"
                                          style={{ width: `${s.score}%`, backgroundColor: sColor }}
                                        />
                                      </div>
                                      <div className="mt-1 flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
                                        <span>{s.basis}</span>
                                        <span className={tier.tone.split(" ")[0]}>{tier.label}</span>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })()}

                        {p.key === "layoffs_high_profits" && (() => {
                          const cal = computeLayoffCalibration(data.slug, numericScores, data.employees);
                          const calColor = scoreColor(cal.calibratedScore);
                          return (
                            <div className="rounded-lg border border-primary/25 bg-primary/5 p-4">
                              <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-primary">
                                  Scale-calibrated layoff severity
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  Raw pillar: <span className="tabular-nums">{cal.rawPillarScore.toFixed(0)}</span> · Calibrated: <span className="font-semibold tabular-nums text-foreground">{cal.calibratedScore}</span>
                                </p>
                              </div>
                              <p className="mt-2 text-sm font-medium text-foreground">{cal.headline}</p>
                              <div className="mt-2 flex flex-wrap items-center gap-2">
                                <span
                                  className="rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
                                  style={{ color: calColor, borderColor: `${calColor}55`, backgroundColor: `${calColor}10` }}
                                >
                                  {cal.severityLabel}
                                </span>
                                {cal.repeatedCycles >= 2 && (
                                  <span className="rounded-md border border-orange-500/30 bg-orange-500/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                                    {cal.repeatedCycles >= 3 ? "Repeated cycles" : "Pattern forming"}
                                  </span>
                                )}
                                {cal.stewardshipCredit > 0 && (
                                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                                    Stewardship credit +{cal.stewardshipCredit}
                                  </span>
                                )}
                              </div>
                              <p className="mt-3 text-sm text-muted-foreground">{cal.narrative}</p>

                              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                                {cal.metrics.map((m) => (
                                  <li key={m.label} className="rounded-md border border-border bg-background/40 p-2.5">
                                    <div className="flex items-baseline justify-between gap-2">
                                      <span className="text-[11px] text-muted-foreground">{m.label}</span>
                                      <span className="text-xs font-semibold tabular-nums text-foreground">{m.value}</span>
                                    </div>
                                    <p className="mt-1 text-[10px] text-muted-foreground">{m.hint}</p>
                                  </li>
                                ))}
                              </ul>

                              <div className="mt-4 grid gap-2 text-[11px] text-muted-foreground sm:grid-cols-2">
                                <div className="flex justify-between gap-2 rounded border border-border/60 px-2 py-1">
                                  <span>Absolute-impact penalty</span>
                                  <span className="tabular-nums text-foreground">−{cal.scalePenalty}</span>
                                </div>
                                <div className="flex justify-between gap-2 rounded border border-border/60 px-2 py-1">
                                  <span>Profitable-period penalty</span>
                                  <span className="tabular-nums text-foreground">−{cal.profitablePenalty}</span>
                                </div>
                                <div className="flex justify-between gap-2 rounded border border-border/60 px-2 py-1">
                                  <span>Repeated-cycle penalty</span>
                                  <span className="tabular-nums text-foreground">−{cal.repetitionPenalty}</span>
                                </div>
                                <div className="flex justify-between gap-2 rounded border border-border/60 px-2 py-1">
                                  <span>Net-hiring offset (capped)</span>
                                  <span className="tabular-nums text-foreground">+{cal.offsetCredit}</span>
                                </div>
                              </div>

                              {cal.contextNotes.length > 0 && (
                                <ul className="mt-4 grid gap-1.5">
                                  {cal.contextNotes.map((n) => (
                                    <li key={n} className="flex gap-2 text-[11px] text-muted-foreground">
                                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                                      <span>{n}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                Interpretation
                              </p>
                              <p className="mt-1 text-[11px] text-muted-foreground">
                                A low calibrated score does not mean layoffs are inherently wrong. It indicates that the scale, timing, profitability context, or repetition of workforce reductions created substantial workforce-stability concerns relative to the company's capacity and economic scale.
                              </p>
                            </div>
                          );
                        })()}



                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            Signals weighed for this pillar
                          </p>
                          <ul className="mt-2 grid gap-1.5">
                            {r.signals.map((s) => (
                              <li key={s} className="flex gap-2 text-muted-foreground">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>


                        {(() => {
                          const tx = pillarTransparency(p.key as PillarKey);
                          const cm = confidenceMeta(tx.confidence);
                          return (
                            <details className="group rounded-lg border border-border bg-muted/10 p-3 [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex cursor-pointer items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">
                                <span>Advanced analysis · methodology, normalization & sources</span>
                                <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
                              </summary>
                              <div className="mt-4 space-y-3">
                                <span className={`inline-block rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${cm.tone}`}>
                                  {cm.label}
                                </span>
                              <div className="rounded-lg border border-border bg-muted/20 p-3">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Why this weight</p>
                                <p className="mt-1.5 text-foreground/90">{tx.weightRationale}</p>
                              </div>
                              <div className="rounded-lg border border-border bg-muted/20 p-3">
                                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Normalization</p>
                                <p className="mt-1.5 text-foreground/90">{tx.normalization}</p>
                              </div>
                              {tx.scaleResponsibility && (
                                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary">Scale-responsibility principle</p>
                                  <p className="mt-1.5 text-foreground/90">{tx.scaleResponsibility}</p>
                                </div>
                              )}
                              <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                  Source citations
                                </p>
                                <ul className="mt-2 grid gap-2">
                                  {tx.sources.map((src) => {
                                    const tier = TIERS[src.tier];
                                    return (
                                      <li key={src.url}>
                                        <a
                                          href={src.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="group flex items-start justify-between gap-3 rounded-lg border border-border bg-background/40 px-3 py-2 hover:border-primary/40 hover:bg-accent/30"
                                        >
                                          <span className="min-w-0">
                                            <span className="block truncate text-xs font-medium text-foreground">
                                              {src.name}
                                            </span>
                                            <span className="block truncate text-[11px] text-muted-foreground">
                                              {src.publisher} · {src.type}
                                            </span>
                                          </span>
                                          <span className="flex shrink-0 items-center gap-2">
                                            <span className={`rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] ${tier.tone}`}>
                                              {tier.shortLabel}
                                            </span>
                                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
                                          </span>
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                              </div>
                            </details>
                          );
                        })()}

                        <Link
                          to="/methodology/$slug"
                          params={{ slug: p.slug }}
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                        >
                          Read full {p.label.toLowerCase()} methodology →
                        </Link>
                      </div>
                    </AccordionContent>

                  </AccordionItem>
                );
              })}
            </Accordion>
            {card && <CardSources card={card} />}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">How this score is built</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The composite is a weighted average of nine pillars covering U.S. workforce, domestic reinvestment, and community impact. Each draws on verified disclosures and third-party data.
            </p>
            <div className="mt-6 space-y-2">
              {PILLARS.map((p) => (
                <div
                  key={p.key}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm hover:bg-accent"
                >
                  <span>
                    <Link
                      to="/methodology/$slug"
                      params={{ slug: p.slug }}
                      className="font-medium hover:underline"
                    >
                      {p.label}
                    </Link>
                    <span className="ml-2 text-xs text-muted-foreground">{(p.weight * 100).toFixed(0)}%</span>
                  </span>
                  <a href={`#pillar-${p.key}`} className="tabular-nums text-muted-foreground underline underline-offset-2 hover:text-foreground">
                    {card
                      ? card.pillars[p.key].score != null
                        ? card.pillars[p.key].score
                        : card.pillars[p.key].status ?? "—"
                      : scores[p.key] == null ? "—" : scores[p.key]!.toFixed(0)}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why this score — hidden for card companies (never derived from database scores) */}
        {!card && (
        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-xl font-semibold">Why this score?</h2>
            <span className="text-xs text-muted-foreground">Top weighted contributors</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            The strongest positive and negative pillars driving {data.name}'s composite, ranked by weighted impact.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <div className="flex items-center gap-2 text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">What helped</span>
              </div>
              <ul className="mt-4 space-y-3">
                {positives.length === 0 && (
                  <li className="text-sm text-muted-foreground">No pillar scored materially above the neutral baseline.</li>
                )}
                {positives.map((p) => (
                  <li key={p.key} className="text-sm">
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium">{p.label}</span>
                      <span className="tabular-nums text-emerald-400">{p.value.toFixed(0)}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pillarRationale(p.key as PillarKey, p.value).summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
              <div className="flex items-center gap-2 text-orange-400">
                <TrendingDown className="h-4 w-4" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">What weighed it down</span>
              </div>
              <ul className="mt-4 space-y-3">
                {penalties.length === 0 && (
                  <li className="text-sm text-muted-foreground">No pillar fell materially below the neutral baseline.</li>
                )}
                {penalties.map((p) => (
                  <li key={p.key} className="text-sm">
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium">{p.label}</span>
                      <span className="tabular-nums text-orange-400">{p.value.toFixed(0)}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pillarRationale(p.key as PillarKey, p.value).summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        )}

        {/* Comparisons — fully-scored companies only */}
        {overall != null && (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ComparisonCard
            icon={BarChart3}
            label={`Industry average · ${data.industry ?? "—"}`}
            value={industryAvg ?? 0}
            self={overall}
            sublabel={`${industryPeers.length} peer${industryPeers.length === 1 ? "" : "s"} in WeSee`}
          />
          {topCompany && (
            <ComparisonCard
              icon={Trophy}
              label="Top-ranked"
              value={Number(topCompany.overall_score ?? 0)}
              self={overall}
              sublabel={topCompany.name}
              linkSlug={topCompany.slug}
            />
          )}
          {bottomCompany && (
            <ComparisonCard
              icon={TrendingDown}
              label="Lowest-ranked"
              value={Number(bottomCompany.overall_score ?? 0)}
              self={overall}
              sublabel={bottomCompany.name}
              linkSlug={bottomCompany.slug}
            />
          )}
        </div>
        )}
        {rank != null && (
        <p className="mt-4 text-xs text-muted-foreground">
          {data.name} ranks <span className="text-foreground font-medium">#{rank}</span> of {sorted.length} companies currently tracked.
        </p>
        )}

        {/* Workforce Reinvestment Capacity — informational, separate from core score (fully-scored companies only) */}
        {!isPartial && (() => {
          const insight = computeReinvestmentInsight(data.slug, numericScores, data.employees, data.headquarters);
          const capColor = scoreColor(insight.capacityScore);
          const spColor = scoreColor(insight.sharedProsperity);
          const pressureTone =
            insight.metroPressure === "Elevated"
              ? "text-orange-400 border-orange-500/30 bg-orange-500/5"
              : insight.metroPressure === "Moderate"
                ? "text-amber-400 border-amber-500/30 bg-amber-500/5"
                : "text-emerald-400 border-emerald-500/30 bg-emerald-500/5";
          return (
            <section className="mt-12 rounded-2xl border border-border bg-gradient-to-b from-card to-card/40 p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5" /> Insight · Not part of weighted score
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    Workforce Reinvestment Capacity
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    An analytical estimate of how much capacity {data.name} appears to have for workforce reinvestment relative to its profitability, scale, and regional cost-of-living conditions. Shown separately so readers can weigh it independently.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${pressureTone}`}>
                      High-cost metro pressure: {insight.metroPressure}
                    </span>
                    <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Affordability {insight.affordabilityScore} · {insight.affordabilityBand}
                    </span>
                  </div>
                </div>
                {insight.recognitionBonus > 0 && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-4 py-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-400">
                      <Trophy className="h-3.5 w-3.5" /> Recognition bonus
                    </div>
                    <p className="mt-1 font-display text-2xl font-semibold tabular-nums text-emerald-400">
                      +{insight.recognitionBonus}
                    </p>
                    <p className="mt-1 max-w-[14rem] text-[11px] text-muted-foreground">{insight.bonusReason}</p>
                  </div>
                )}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <GaugeCard icon={Gauge} label="Reinvestment capacity" value={insight.capacityScore} color={capColor} band={insight.bandLabel} />
                <GaugeCard icon={BarChart3} label="Shared prosperity potential" value={insight.sharedProsperity} color={spColor} band={insight.sharedProsperity >= 70 ? "Well-distributed" : insight.sharedProsperity >= 50 ? "Mixed distribution" : "Concentrated upside"} />
              </div>

              <p className="mt-5 text-sm text-muted-foreground">{insight.summary}</p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-[11px] text-muted-foreground">
                  {reinvestmentAdvanced ? "Showing full advanced breakdown." : "Simple view — toggle for detailed profitability, productivity & calibration metrics."}
                </p>
                <button
                  type="button"
                  onClick={() => setReinvestmentAdvanced((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  {reinvestmentAdvanced ? "Hide advanced" : "Show advanced"}
                  <ChevronDown className={`h-3 w-3 transition-transform ${reinvestmentAdvanced ? "rotate-180" : ""}`} />
                </button>
              </div>

              {reinvestmentAdvanced && (
                <>
                  {insight.buybackContext && (
                    <p className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-sm text-amber-100/90">
                      {insight.buybackContext}
                    </p>
                  )}

                  {insight.contextNotes.length > 0 && (
                    <ul className="mt-3 grid gap-2">
                      {insight.contextNotes.map((note) => (
                        <li key={note} className="flex gap-2 rounded-lg border border-border bg-muted/20 p-3 text-[12px] text-muted-foreground">
                          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {insight.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-border bg-card/60 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{m.label}</p>
                        <p className="mt-2 font-display text-xl font-semibold tabular-nums">{m.value}</p>
                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full transition-[width] duration-700"
                            style={{ width: `${m.normalized}%`, backgroundColor: scoreColor(m.normalized) }}
                          />
                        </div>
                        <p className="mt-2 text-[11px] text-muted-foreground">{m.hint}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-6 flex items-start gap-2 rounded-lg border border-border bg-muted/20 p-3 text-[11px] text-muted-foreground">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>
                  Informational only. This insight does not change the weighted WeSee score above. Affordability is calibrated against regional cost-of-living, so strong industry-relative worker standards do not automatically imply elite real-world affordability — especially in high-cost metros.
                </span>
              </div>
            </section>
          );
        })()}


        {!realSourced && !card && (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/40 p-6 text-sm text-muted-foreground">
            This is a fictional demo company. Scores, evidence values and citations are synthetic examples showing how the WeSee methodology works — they are not measurements of any real business. Live deployment would ingest real filings via the admin dashboard or scheduled jobs.
          </div>
        )}

      </div>
    </div>
  );
}

function GaugeCard({ icon: Icon, label, value, color, band }: { icon: any; label: string; value: number; color: string; band: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-display text-4xl font-semibold tabular-nums" style={{ color }}>{value}</span>
        <span className="text-xs text-muted-foreground">/ 100</span>
        <span className="ml-auto text-[11px] font-medium" style={{ color }}>{band}</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-[width] duration-1000"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function Meta({ icon: Icon, label, value, href }: { icon: any; label: string; value: any; href?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/40 px-3 py-2.5">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <p className="mt-1 truncate text-sm font-medium">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            {value ?? "—"}
          </a>
        ) : (
          value ?? "—"
        )}
      </p>
    </div>
  );
}

function ComparisonCard({
  icon: Icon,
  label,
  value,
  self,
  sublabel,
  linkSlug,
}: {
  icon: any;
  label: string;
  value: number;
  self: number;
  sublabel?: string;
  linkSlug?: string;
}) {
  const delta = self - value;
  const color = scoreColor(value);
  const body = (
    <div className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-accent/30">
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <span className="font-display text-3xl font-semibold tabular-nums" style={{ color }}>
          {value.toFixed(1)}
        </span>
        <span className={`text-xs font-medium tabular-nums ${delta >= 0 ? "text-emerald-400" : "text-orange-400"}`}>
          {delta >= 0 ? "+" : ""}{delta.toFixed(1)} vs this company
        </span>
      </div>
      {sublabel && <p className="mt-2 text-xs text-muted-foreground">{sublabel}</p>}
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-[width] duration-700"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
  if (linkSlug) {
    return (
      <Link to="/companies/$slug" params={{ slug: linkSlug }} className="block">
        {body}
      </Link>
    );
  }
  return body;
}


type RankedPillar = { label: string; value: number };

function buildQuickReadSummary(
  name: string,
  positives: RankedPillar[],
  penalties: RankedPillar[],
  overall: number,
): string {
  const pos = positives[0];
  const neg = penalties[0];
  const grade =
    overall >= 75 ? "broadly strong" :
    overall >= 60 ? "moderately positive" :
    overall >= 45 ? "mixed" :
    "weak";

  if (pos && neg) {
    return `${name}'s workforce-economic profile is ${grade}. ${pos.label} is a clear strength, while ${neg.label.toLowerCase()} reduces broader workforce sustainability — readers should weigh that tradeoff against their own purchasing priorities.`;
  }
  if (pos) {
    return `${name}'s workforce-economic profile is ${grade}, led by ${pos.label.toLowerCase()}. No pillar materially weighed the composite down.`;
  }
  if (neg) {
    return `${name}'s workforce-economic profile is ${grade}, with ${neg.label.toLowerCase()} as the primary drag. No pillar materially lifted the composite above the neutral baseline.`;
  }
  return `${name}'s workforce-economic profile sits near the neutral baseline with no pillar materially above or below peer norms.`;
}

// ---- Report an error --------------------------------------------------------
// Writes to the corrections table; visible only to admins.
function ReportError({ companySlug, companyName }: { companySlug: string; companyName: string }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [pillar, setPillar] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await (supabase as unknown as {
      from: (t: string) => { insert: (r: Record<string, unknown>) => Promise<{ error: { message: string } | null }> };
    }).from("corrections").insert({
      company_slug: companySlug,
      company_name: companyName,
      pillar_factor: pillar.trim() || null,
      description: description.trim(),
      reporter_email: email.trim() || null,
      status: "open",
    });
    setBusy(false);
    if (error) {
      toast.error("Could not submit. Please try again.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-200/90">
        Thank you — your report was received. We review every submission and correct verified errors promptly.
      </p>
    );
  }

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <AlertTriangle className="h-3.5 w-3.5" /> Report an error in {companyName}'s data
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <form onSubmit={submit} className="mt-3 grid gap-3 rounded-xl border border-border bg-card p-4">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Pillar or factor (optional)</span>
            <input
              value={pillar}
              onChange={(e) => setPillar(e.target.value)}
              placeholder="e.g. CEO Pay Ratio — CEO Compensation"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What is incorrect?</span>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="The CEO pay ratio is listed as X, but the DEF 14A filed on <date> states Y…"
              className="mt-1 min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your email (optional)</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {busy ? "Submitting…" : "Submit report"}
          </button>
          <p className="text-[11px] text-muted-foreground">
            Reports are sent to WeSee editors and never shared. See our{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}
