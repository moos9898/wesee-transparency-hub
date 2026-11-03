import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — WeSee" },
      { name: "description", content: "What WeSee collects, what we don't do with it, how long we keep it, and how to request deletion." },
      { property: "og:title", content: "Privacy Policy — WeSee" },
      { property: "og:description", content: "What WeSee collects, what we don't do with it, and how to request deletion." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mt-2 flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-primary" />
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Legal</p>
      </div>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>

      <div className="prose-custom mt-8 space-y-8">
        <Section title="What we collect">
          <p>WeSee is a corporate transparency index. We collect very little personal data:</p>
          <ul>
            <li><b>Account email</b> — only if you create an account to use the admin dashboard. We use Supabase Auth, which stores your email and an authentication hash. We never request your password in plain text and never store payment information.</li>
            <li><b>Correction reports</b> — if you submit a factual-error report, we store the company name, the pillar or factor you flagged, your description, and the optional email you provide so we can follow up.</li>
            <li><b>Standard server logs</b> — IP address, browser type, and request timestamps, retained briefly for security and abuse prevention.</li>
          </ul>
        </Section>

        <Section title="What we do not do">
          <ul>
            <li>We do not sell, rent, or share your personal data with third parties for marketing.</li>
            <li>We do not run third-party advertising or ad-tracking networks on this site.</li>
            <li>We do not profile you based on which companies you view.</li>
            <li>We do not collect sensitive personal data (race, religion, health, political affiliation).</li>
          </ul>
        </Section>

        <Section title="How we use your data">
          <p>Account emails are used solely to authenticate administrators who maintain company scores and evidence. Correction reports are used only to investigate and fix factual errors. Server logs are used only to operate and protect the service.</p>
        </Section>

        <Section title="Retention">
          <ul>
            <li><b>Server logs:</b> retained up to 30 days, then deleted.</li>
            <li><b>Correction reports:</b> retained while the report is open, plus up to 12 months after resolution for audit purposes, then deleted.</li>
            <li><b>Account data:</b> retained until you request deletion.</li>
          </ul>
        </Section>

        <Section title="Deletion requests">
          <p>You can request deletion of your account and any personal data we hold at any time. Email <a href="mailto:privacy@wesee.example" className="text-primary underline underline-offset-2">privacy@wesee.example</a> and we will remove your records within 30 days. Note that company scores and evidence are public analytical content, not personal data, and are not affected by account deletion.</p>
        </Section>

        <Section title="Children">
          <p>WeSee is not directed at children under 13 and we do not knowingly collect their data. If you believe a child has provided personal data, contact us and we will delete it.</p>
        </Section>

        <Section title="Contact">
          <p>Questions about this policy? <Mail className="inline h-3.5 w-3.5" /> <a href="mailto:privacy@wesee.example" className="text-primary underline underline-offset-2">privacy@wesee.example</a></p>
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
