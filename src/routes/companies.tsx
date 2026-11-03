import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CompanyCard } from "@/components/company-card";
import { DemoDataBanner } from "@/components/demo-data-banner";


export const Route = createFileRoute("/companies")({
  component: CompaniesPage,
  head: () => ({
    meta: [
      { title: "Companies — WeSee Transparency Index" },
      { name: "description", content: "Browse and search the WeSee transparency index across industries and regions." },
    ],
    links: [{ rel: "canonical", href: "/companies" }],
  }),
});

type Row = {
  slug: string; name: string; ticker: string | null; industry: string | null;
  country: string | null; overall_score: number | null;
};

function CompaniesPage() {
  const [q, setQ] = useState("");
  const [industry, setIndustry] = useState<string>("all");
  const [coverage, setCoverage] = useState<"all" | "scored" | "partial">("all");
  const [sort, setSort] = useState<"score" | "name">("score");

  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("companies")
        .select("slug,name,ticker,industry,country,overall_score")
        .order("overall_score", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Row[];
    },
  });

  const industries = useMemo(() => {
    const s = new Set<string>();
    data?.forEach((d) => d.industry && s.add(d.industry));
    return ["all", ...Array.from(s).sort()];
  }, [data]);

  const counts = useMemo(() => {
    const rows = data ?? [];
    const scored = rows.filter((r) => r.overall_score != null).length;
    return { all: rows.length, scored, partial: rows.length - scored };
  }, [data]);

  const filtered = useMemo(() => {
    let rows = data ?? [];
    if (q) {
      const Q = q.toLowerCase();
      rows = rows.filter((r) =>
        r.name.toLowerCase().includes(Q) ||
        (r.ticker ?? "").toLowerCase().includes(Q) ||
        (r.industry ?? "").toLowerCase().includes(Q) ||
        (r.country ?? "").toLowerCase().includes(Q)
      );
    }
    if (industry !== "all") rows = rows.filter((r) => r.industry === industry);
    if (coverage === "scored") rows = rows.filter((r) => r.overall_score != null);
    if (coverage === "partial") rows = rows.filter((r) => r.overall_score == null);
    rows = [...rows].sort((a, b) =>
      sort === "score" ? Number(b.overall_score ?? 0) - Number(a.overall_score ?? 0) : a.name.localeCompare(b.name)
    );
    return rows;
  }, [data, q, industry, coverage, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <DemoDataBanner />
      <div className="mt-8 flex flex-col gap-2">

        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Index</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Companies</h1>
        <p className="text-muted-foreground">
          {data?.length ?? 0} U.S.-operating companies scored across nine contribution pillars.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, ticker, industry, country…"
            className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm"
        >
          {industries.map((i) => <option key={i} value={i}>{i === "all" ? "All industries" : i}</option>)}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "score" | "name")}
          className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm"
        >
          <option value="score">Sort: Score</option>
          <option value="name">Sort: Name</option>
        </select>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by scoring coverage">
        {([
          { key: "all", label: "All companies", count: counts.all },
          { key: "scored", label: "Fully scored", count: counts.scored },
          { key: "partial", label: "Partial", count: counts.partial },
        ] as const).map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setCoverage(t.key)}
            aria-pressed={coverage === t.key}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              coverage === t.key
                ? "border-primary/50 bg-primary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
            <span className="ml-1.5 tabular-nums text-muted-foreground">{t.count}</span>
          </button>
        ))}
        <p className="text-[11px] text-muted-foreground">
          Partial companies have at least one pillar still awaiting a verified public filing, so no composite is published.
        </p>
      </div>



      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 animate-pulse rounded-xl border border-border bg-card/40" />
            ))
          : filtered.map((c) => <CompanyCard key={c.slug} c={c} />)}
      </div>

      {!isLoading && filtered.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
          No companies match your filters.
        </div>
      )}
    </div>
  );
}
