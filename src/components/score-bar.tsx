import { scoreColor } from "@/lib/score";

export function ScoreBar({ value, label, weight }: { value: number; label: string; weight?: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm tabular-nums">
          <span className="text-foreground font-semibold">{pct.toFixed(0)}</span>
          {weight !== undefined && (
            <span className="ml-1 text-xs text-muted-foreground">/ {(weight * 100).toFixed(0)}% weight</span>
          )}
        </p>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-[width] duration-1000"
          style={{ width: `${pct}%`, backgroundColor: scoreColor(pct) }}
        />
      </div>
    </div>
  );
}
