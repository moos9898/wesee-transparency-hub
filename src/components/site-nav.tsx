import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 glass">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30 transition group-hover:bg-primary/25">
            <Eye className="h-4 w-4 text-primary" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">WeSee</span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Transparency Index
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <NavItem to="/companies">Companies</NavItem>
          <NavItem to="/methodology">Methodology</NavItem>
          <NavItem to="/about">About</NavItem>
          <Link
            to="/auth"
            className="ml-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-accent"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      activeProps={{ className: "rounded-md px-3 py-1.5 text-foreground bg-accent" }}
    >
      {children}
    </Link>
  );
}
