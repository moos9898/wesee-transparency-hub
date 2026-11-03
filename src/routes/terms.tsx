import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollText, AlertTriangle, Mail } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — WeSee" },
      { name: "description", content: "WeSee is analytical opinion about public information, not investment advice. How to report a factual error." },
      { property: "og:title", content: "Terms of Use — WeSee" },
      { property: "og:description", content: "WeSee is analytical opinion about public information, not investment advice." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mt-2 flex items-center gap-3">
        <ScrollText className="h-6 w-6 text-primary" />
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Legal</p>
      </div>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Terms of Use</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>

      <div className="prose-custom mt-8 space-y-8">
        <Section title="What WeSee is">
          <p>WeSee publishes an independent, analytical index that scores U.S.-operating companies on their economic and workforce contribution. Scores are <b>WeSee's opinion</b>, derived from a published methodology and public filings and disclosures. They reflect how WeSee interprets public information — they are not statements of fact about any company, and they are not endorsed by or affiliated with the companies scored.</p>
        </Section>

        <Section title="Not investment advice">
          <div className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p className="text-sm text-amber-100/90">
              Nothing on WeSee is investment, financial, legal, or business advice. Scores are analytical opinions about public information. Do not buy, sell, or hold any security, or make any business decision, based on a WeSee score. WeSee is not a registered investment adviser.
            </p>
          </div>
        </Section>

        <Section title="Sources and accuracy">
          <p>Every score is built from cited public sources — primarily U.S. government filings (SEC EDGAR, OSHA, BLS, DOL WARN) and public disclosure databases (OpenSecrets, Good Jobs First). We link to the original record wherever possible. Despite our care, public data can lag, change, or be misread. If you find a factual error, please report it (see below).</p>
        </Section>

        <Section title="Commentary, not defamation">
          <p>WeSee provides factual commentary and opinion about public companies based on public information, consistent with First Amendment protections. Scores are analytical judgments, not assertions of illegal conduct. Where we cite a filed number (for example, a CEO pay ratio from a DEF 14A), we link to the filing so you can verify it yourself.</p>
        </Section>

        <Section title="Reporting a factual error">
          <p>If a specific number, source, or calculation is wrong, we want to fix it. Use the <b>“Report an error”</b> link on any company page, or email <a href="mailto:corrections@wesee.example" className="text-primary underline underline-offset-2">corrections@wesee.example</a>. Tell us the company, the pillar or factor, and what is incorrect. We review every report and correct verified errors promptly.</p>
          <p className="mt-2">
            <Link to="/companies" className="text-primary underline underline-offset-2">Browse companies →</Link>
          </p>
        </Section>

        <Section title="Acceptable use">
          <ul>
            <li>You may view, share, and cite WeSee scores and methodology for non-commercial commentary, journalism, and research.</li>
            <li>You may not scrape the site at volume, overload our infrastructure, or republish scores commercially without permission.</li>
            <li>You may not attempt to access admin features or alter data you are not authorized to change.</li>
          </ul>
        </Section>

        <Section title="Limitation of liability">
          <p>WeSee is provided “as is” without warranty. To the fullest extent permitted by law, WeSee is not liable for any loss arising from reliance on scores or content. Always verify material facts against the linked primary sources before relying on them.</p>
        </Section>

        <Section title="Contact">
          <p><Mail className="inline h-3.5 w-3.5" /> <a href="mailto:hello@wesee.example" className="text-primary underline underline-offset-2">hello@wesee.example</a></p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-display text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/85 [&_a]:text-primary [&_li]:mt-1.5 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
