import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

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

function Feedback() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [comments, setComments] = useState("");
  const [email, setEmail] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name.trim() || "(not given)"}`,
      `Rating: ${rating} / 5`,
      `Email: ${email.trim() || "(not given)"}`,
      "",
      "Comments:",
      comments.trim(),
    ].join("\n");
    window.location.href =
      `mailto:mostafa98007@yahoo.com?subject=${encodeURIComponent("WeSee feedback")}` +
      `&body=${encodeURIComponent(body)}`;
    setDone(true);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-200/90">
          Thank you — your feedback is ready to send in your email app. We read every message.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          <Link to="/" className="text-primary underline underline-offset-2">Back to the index</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Feedback</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl text-gradient">
        Give feedback
      </h1>
      <p className="mt-4 text-muted-foreground">
        Tell us what works, what looks wrong, and what WeSee should improve. Your message opens in your email app — no account needed.
      </p>
      <form onSubmit={submit} className="mt-8 grid gap-3 rounded-xl border border-border bg-card p-4">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your name (optional)</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Rating</span>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
          >
            <option value="5">5 — Excellent</option>
            <option value="4">4 — Good</option>
            <option value="3">3 — Okay</option>
            <option value="2">2 — Poor</option>
            <option value="1">1 — Very poor</option>
          </select>
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Comments</span>
          <textarea
            required
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="What should we fix or improve?"
            className="mt-1 min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your email (optional)</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Send feedback
        </button>
        <p className="text-[11px] text-muted-foreground">
          Sending opens your email app addressed to WeSee. See our{" "}
          <Link to="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}
