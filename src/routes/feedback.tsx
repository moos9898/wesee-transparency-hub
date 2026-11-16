import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/feedback")({
  component: Feedback,
  head: () => ({
    meta: [
      { title: "Give feedback — WeSee" },
      { name: "description", content: "Tell WeSee what works, what is wrong, and what to improve." },
    ],
    links: [{ rel: "canonical", href: "/feedback" }],
  }),
});

const FORM_URL = "https://forms.gle/wb2VBaLVwtkMoQYv8";

function Feedback() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Feedback</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-gradient">
        Give feedback
      </h1>
      <p className="mt-4 text-muted-foreground">
        Tell us what works, what looks wrong, and what WeSee should improve. Your answers go straight to our feedback form — no account needed.
      </p>
      <div className="mt-8 rounded-xl border border-border bg-card p-4">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Open the feedback form
        </a>
        <p className="mt-3 text-[11px] text-muted-foreground">
          The form opens in a new tab. See our{" "}
          <Link to="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</Link>.
        </p>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        <Link to="/" className="text-primary underline underline-offset-2">Back to the index</Link>
      </p>
    </div>
  );
}
