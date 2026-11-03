import { scoreColor, scoreGrade } from "@/lib/score";
import { useEffect, useRef, useState } from "react";

interface Props {
  score: number;
  size?: number;
  stroke?: number;
  label?: string;
  /** Disable the count-up animation (e.g. reduced motion or SSR). */
  animate?: boolean;
}

export function ScoreRing({ score, size = 160, stroke = 10, label, animate = true }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, score));
  const color = scoreColor(pct);
  const grade = scoreGrade(pct);

  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(animate && !reduced ? 0 : pct);
  const [dash, setDash] = useState(animate && !reduced ? 0 : (pct / 100) * c);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!animate || reduced) {
      setDisplay(pct);
      setDash((pct / 100) * c);
      return;
    }
    const start = performance.now();
    const dur = 1100;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const v = pct * ease(t);
      setDisplay(v);
      setDash((v / 100) * c);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pct, animate, reduced]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90 drop-shadow-[0_0_24px_rgba(255,255,255,0.04)]">
        <defs>
          <linearGradient id={`ring-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.95" />
            <stop offset="100%" stopColor={color} stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke="oklch(1 0 0 / 6%)" strokeWidth={stroke} fill="none"
        />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={`url(#ring-${size})`} strokeWidth={stroke} fill="none" strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
        <span className="font-display text-4xl font-semibold tabular-nums text-gradient leading-none">
          {Math.round(display)}
        </span>
        <span className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] ${grade.tone}`}>
          {grade.full}
        </span>
        {label && <span className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{label}</span>}
      </div>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
