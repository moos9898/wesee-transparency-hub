import { AlertTriangle } from "lucide-react";

export function DemoDataBanner() {
  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm sm:px-5">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-amber-300 text-[11px]">
            Demo data — for methodology preview only
          </p>
          <p className="mt-1 text-foreground/80">
            All companies shown are fictional examples created to demonstrate how WeSee scores are
            calculated and sourced. Nothing here is a claim about any real company.
          </p>
        </div>
      </div>
    </div>
  );
}
