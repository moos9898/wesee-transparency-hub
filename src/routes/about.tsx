import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — WeSee" },
      { name: "description", content: "WeSee is an independent transparency index covering the world's largest companies." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About</p>
      <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight text-gradient">
        Built for everyone who wants to see clearly.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        WeSee combines the rigor of a financial terminal, the candor of a workplace review site,
        and the clarity of consumer technology. We score the world's largest companies on
        transparency — and we show exactly how.
      </p>

      <div className="mt-10 space-y-4">
        <p>
          Our index spans <strong>nine pillars</strong> covering worker standards, U.S. workforce commitment, local economic contribution, community resilience, outsourcing exposure, production abroad, lobbying activity, CEO-to-worker pay ratio, and layoffs during high-profit years. The composite score is a weighted average — never an opaque black box.
        </p>
        <p>
          We do not accept payment to list or rank companies. Methodology is public, signals are documented,
          and every score is reproducible.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/companies" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
          Browse the index
        </Link>
        <Link to="/methodology" className="rounded-md border border-border px-4 py-2 text-sm font-semibold">
          Read methodology
        </Link>
      </div>
    </div>
  );
}
