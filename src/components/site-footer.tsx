import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">WeSee</p>
          <p className="mt-2 text-sm text-muted-foreground">
            U.S. corporate transparency & economic contribution.
          </p>
        </div>
        <FooterCol title="Platform" links={[
          { to: "/companies", label: "Companies" },
          { to: "/methodology", label: "Methodology" },
          { to: "/about", label: "About" },
          { to: "/feedback", label: "Give feedback" },
        ]} />
        <FooterCol title="Legal" links={[
          { to: "/privacy", label: "Privacy Policy" },
          { to: "/terms", label: "Terms of Use" },
          { to: "/companies", label: "Report an error" },
        ]} />
        <FooterCol title="Pillars" links={[
          { to: "/methodology/worker-standards", label: "Worker Standards" },
          { to: "/methodology/local-economic", label: "Local Economic" },
          { to: "/methodology/layoffs-high-profits", label: "Layoffs in Profits" },
          { to: "/methodology/ceo-pay-ratio", label: "CEO Pay Ratio" },
          { to: "/methodology/outsourcing-exposure", label: "Outsourcing" },
        ]} />
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} WeSee. All company scores are drawn from public filings and disclosed sources.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-foreground/80 hover:text-foreground transition">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
