import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ArrowRight, Search, ShieldCheck, Layers, Globe2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CompanyCard } from "@/components/company-card";
import { PILLARS } from "@/lib/score";
import { overlayCardScores } from "./companies";


export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "WeSee — U.S. Corporate Transparency & Economic Contribution" },
      { name: "description", content: "WeSee measures how much major companies reinvest into the American economy, workforce, and communities — analytical, neutral, and data-driven." },
    ],
  }),
});

function Home() {
  const [q, setQ] = useState("");

  const { data: top } = useQuery({
    queryKey: ["top-companies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("companies")
        .select("slug,name,ticker,industry,country,overall_score")
        .order("overall_score", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  // Top six of the ten real companies, ranked by the overlaid card scores.
  // (The DB-side limit was dropped: real rows carry NULL scores, so a DB-side
  // limit/sort would return an arbitrary subset of the ten.)
  const topCompanies = useMemo(
    () =>
      overlayCardScores(top ?? [])
        .sort((a, b) => Number(b.overall_score ?? 0) - Number(a.overall_score ?? 0))
        .slice(0, 6),
    [top],
  );

  const { data: searchResults } = useQuery({
    queryKey: ["search", q],
    enabled: q.length > 1,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("companies")
        .select("slug,name,ticker,industry,country,overall_score")
        .or(`name.ilike.%${q}%,ticker.ilike.%${q}%,industry.ilike.%${q}%`)
        .order("overall_score", { ascending: false })
        .limit(8);
      if (error) throw error;
      return data ?? [];
    },
  });

  // Search shows only the ten real companies, with card scores overlaid.
  const searchRows = useMemo(() => overlayCardScores(searchResults ?? []), [searchResults]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              U.S. Economic Contribution Index
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-7xl text-gradient">
              How much do they<br/>give back to America?
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              WeSee is a U.S.-focused corporate transparency and economic contribution platform. We measure how much companies reinvest into the American economy, workforce, and communities — relative to the profits they earn here.
            </p>

            <div className="mx-auto mt-10 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search Costco, Amazon, Apple…"
                  className="w-full rounded-xl border border-border bg-card pl-11 pr-32 py-4 text-base outline-none ring-0 transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
                <Link
                  to="/companies"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90"
                >
                  Browse all <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {q.length > 1 && (
                <div className="relative">
                  <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover text-left ring-glow">
                    {(searchRows ?? []).length === 0 ? (
                      <div className="px-4 py-3 text-sm text-muted-foreground">No matches</div>
                    ) : (
                      searchRows!.map((r) => (
                        <Link
                          key={r.slug}
                          to="/companies/$slug"
                          params={{ slug: r.slug }}
                          className="flex items-center justify-between px-4 py-3 text-sm hover:bg-accent"
                        >
                          <span>
                            <span className="font-medium">{r.name}</span>
                            <span className="ml-2 text-xs text-muted-foreground">{r.ticker} · {r.industry}</span>
                          </span>
                          <span className="tabular-nums text-muted-foreground">{Number(r.overall_score ?? 0).toFixed(1)}</span>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4 text-center fade-up">
            {[
              { label: "U.S. companies", value: "10" },
              { label: "Weighted pillars", value: String(PILLARS.length) },
              { label: "Signals tracked", value: "70+" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card/40 p-5">
                <p className="font-display text-3xl font-semibold tabular-nums text-gradient">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top scoring */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mt-8 flex items-end justify-between">
          <div>

            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Live Index</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Strongest U.S. contributors</h2>
          </div>
          <Link to="/companies" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex sm:items-center sm:gap-1">
            All companies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topCompanies?.map((c) => <CompanyCard key={c.slug} c={c} />)}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Methodology</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Nine pillars. One contribution score.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Each company is evaluated on how its U.S. operations, workforce decisions, and capital choices flow back into the American economy — using verified disclosures, regulator filings, and third-party data.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Link
                key={p.key}
                to="/methodology/$slug"
                params={{ slug: p.slug }}
                className="group rounded-xl border border-border bg-background p-5 transition hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-secondary text-[10px] font-semibold">{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em]">{(p.weight * 100).toFixed(0)}% weight</span>
                </div>
                <p className="mt-4 font-display text-lg font-semibold">{p.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Read methodology
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Independent", body: "No company pays to be listed or scored. Methodology and weights are public." },
            { icon: Layers, title: "Weighted", body: "Nine pillars combine into one composite. Every score is reproducible." },
            { icon: Globe2, title: "U.S.-focused", body: "Built around domestic reinvestment, worker impact, and community resilience." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <f.icon className="h-5 w-5 text-primary" />
              <p className="mt-4 font-display text-lg font-semibold">{f.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
