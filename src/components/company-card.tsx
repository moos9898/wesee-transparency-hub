import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { scoreColor, scoreGrade } from "@/lib/score";

export interface CompanyCardData {
  slug: string;
  name: string;
  ticker?: string | null;
  industry?: string | null;
  country?: string | null;
  overall_score: number | null;
}

export function CompanyCard({ c, index = 0 }: { c: CompanyCardData; index?: number }) {
  const hasScore = c.overall_score != null;
  const score = Number(c.overall_score ?? 0);
  const grade = scoreGrade(score);
  return (
    <Link
      to="/companies/$slug"
      params={{ slug: c.slug }}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-accent/40 motion-safe:animate-card-in"
      style={{ animationDelay: `${Math.min(index, 11) * 45}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {c.ticker ?? c.industry ?? "—"}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold tracking-tight">{c.name}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{c.industry} · {c.country}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Transparency</p>
          {hasScore ? (
            <p className="font-display text-3xl font-semibold tabular-nums text-gradient">
              {score.toFixed(1)}
            </p>
          ) : (
            <p className="font-display text-2xl font-semibold text-muted-foreground">Partial</p>
          )}
        </div>
        {hasScore ? (
          <span
            className="rounded-md px-2 py-1 text-xs font-semibold"
            style={{ color: scoreColor(score), backgroundColor: "oklch(1 0 0 / 4%)" }}
          >
            {grade.letter}
          </span>
        ) : (
          <span className="rounded-md border border-border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Sourcing
          </span>
        )}
      </div>

      {hasScore && (
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full transition-[width] duration-700"
            style={{ width: `${score}%`, backgroundColor: scoreColor(score) }}
          />
        </div>
      )}
    </Link>
  );
}
