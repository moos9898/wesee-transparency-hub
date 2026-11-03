import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { LogOut, Save, Plus, Search, ShieldAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { PILLARS } from "@/lib/score";

export const Route = createFileRoute("/admin")({
  component: Admin,
  head: () => ({ meta: [{ title: "Admin — WeSee" }, { name: "robots", content: "noindex" }] }),
});

function Admin() {
  const nav = useNavigate();
  const qc = useQueryClient();
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) nav({ to: "/auth" });
  }, [user, loading, nav]);

  useEffect(() => {
    if (!user) return;
    supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  const { data: companies } = useQuery({
    queryKey: ["admin-companies"],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("companies").select("*").order("name");
      if (error) throw error;
      return data ?? [];
    },
  });

  const filtered = useMemo(() => {
    if (!q) return companies ?? [];
    const Q = q.toLowerCase();
    return (companies ?? []).filter((c) => c.name.toLowerCase().includes(Q) || (c.ticker ?? "").toLowerCase().includes(Q));
  }, [companies, q]);

  const current = (companies ?? []).find((c) => c.id === selected) ?? null;

  async function save(form: Record<string, any>) {
    if (!current) return;
    const clamp = (v: any) => {
      const n = Number(v);
      if (!Number.isFinite(n)) return 0;
      return Math.max(0, Math.min(100, n));
    };
    const pillarScores = Object.fromEntries(
      PILLARS.map((p) => [p.key, clamp(form[p.key])]),
    ) as Record<string, number>;
    const overall =
      Math.round(
        PILLARS.reduce((acc, p) => acc + pillarScores[p.key] * p.weight, 0) * 10,
      ) / 10;

    const notes: Record<string, string> = {};
    for (const p of PILLARS) {
      const n = (form.pillar_notes?.[p.key] ?? "").toString().trim();
      if (n) notes[p.key] = n;
    }

    const payload: any = {
      name: form.name, ticker: form.ticker, industry: form.industry, sector: form.sector,
      headquarters: form.headquarters, country: form.country,
      founded: form.founded ? Number(form.founded) : null,
      employees: form.employees ? Number(form.employees) : null,
      ceo: form.ceo, website: form.website, description: form.description,
      ...pillarScores,
      overall_score: overall,
      pillar_notes: notes,
    };
    const { error } = await supabase.from("companies").update(payload).eq("id", current.id);
    if (error) { toast.error(error.message); return; }
    toast.success("Saved");
    qc.invalidateQueries({ queryKey: ["admin-companies"] });
    qc.invalidateQueries({ queryKey: ["companies"] });
    qc.invalidateQueries({ queryKey: ["company", current.slug] });
  }

  async function addCompany() {
    const name = prompt("Company name?");
    if (!name) return;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const { data, error } = await supabase.from("companies").insert({ name, slug }).select().single();
    if (error) return toast.error(error.message);
    toast.success("Created");
    qc.invalidateQueries({ queryKey: ["admin-companies"] });
    setSelected(data!.id);
  }

  if (loading || !user) return null;

  if (isAdmin === false) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <ShieldAlert className="mx-auto h-8 w-8 text-amber-400" />
        <h1 className="mt-4 font-display text-2xl font-semibold">Admin access required</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your account is signed in but not promoted to admin. Ask an existing admin to grant you the role, or run the promotion query in the database.
        </p>
        <button onClick={() => supabase.auth.signOut().then(() => nav({ to: "/auth" }))}
          className="mt-6 inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm">
          <LogOut className="h-3 w-3" /> Sign out
        </button>
        <pre className="mt-8 overflow-auto rounded-lg border border-border bg-card p-4 text-left text-[11px] text-muted-foreground">
{`insert into public.user_roles (user_id, role)
values ('${user.id}', 'admin');`}
        </pre>
      </div>
    );
  }

  if (isAdmin === null) return <div className="mx-auto max-w-6xl p-12 text-muted-foreground">Loading…</div>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Admin</p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={addCompany} className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
            <Plus className="h-3 w-3" /> New company
          </button>
          <button onClick={() => supabase.auth.signOut().then(() => nav({ to: "/auth" }))}
            className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-xs">
            <LogOut className="h-3 w-3" /> Sign out
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-xl border border-border bg-card p-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…"
              className="w-full rounded-md border border-border bg-background pl-8 pr-3 py-2 text-sm outline-none" />
          </div>
          <ul className="mt-2 max-h-[70vh] overflow-auto text-sm">
            {filtered.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => setSelected(c.id)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-accent ${selected === c.id ? "bg-accent" : ""}`}
                >
                  <span>
                    <span className="block font-medium">{c.name}</span>
                    <span className="block text-xs text-muted-foreground">{c.ticker ?? "—"}</span>
                  </span>
                  <span className="tabular-nums text-muted-foreground">{Number(c.overall_score).toFixed(0)}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="rounded-xl border border-border bg-card p-6">
          {!current ? (
            <p className="text-sm text-muted-foreground">Select a company to edit.</p>
          ) : (
            <EditForm key={current.id} initial={current} onSave={save} />
          )}
        </section>
      </div>

      <AuditTrail enabled={isAdmin === true} />
      <Corrections enabled={isAdmin === true} />
    </div>
  );
}

function AuditTrail({ enabled }: { enabled: boolean }) {
  const { data, isLoading } = useQuery({
    queryKey: ["audit-log"],
    enabled,
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from("audit_log")
        .select("id,table_name,company_slug,action,changed_fields,actor_id,created_at")
        .order("created_at", { ascending: false })
        .limit(50);
      if (error) throw error;
      return (data ?? []) as any[];
    },
  });

  return (
    <section className="mt-8 rounded-xl border border-border bg-card p-6">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Integrity</p>
          <h2 className="mt-1 font-display text-xl font-semibold tracking-tight">Audit trail</h2>
        </div>
        <p className="text-xs text-muted-foreground">Read-only · last 50 changes</p>
      </div>

      {isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
      ) : !data?.length ? (
        <p className="mt-4 text-sm text-muted-foreground">No recorded changes yet.</p>
      ) : (
        <ul className="mt-4 divide-y divide-border text-sm">
          {data.map((row) => {
            const fields = Object.keys(row.changed_fields ?? {});
            return (
              <li key={row.id} className="py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {row.action}
                  </span>
                  <span className="font-medium">{row.company_slug ?? row.table_name}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(row.created_at).toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    · actor {row.actor_id ? String(row.actor_id).slice(0, 8) : "system"}
                  </span>
                </div>
                {row.action === "UPDATE" && fields.length > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {fields.slice(0, 8).join(", ")}
                    {fields.length > 8 ? ` +${fields.length - 8} more` : ""}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

const CORRECTION_STATUSES = ["open", "reviewing", "accepted", "rejected"] as const;
type CorrectionStatus = (typeof CORRECTION_STATUSES)[number];

const STATUS_TONE: Record<string, string> = {
  open: "text-amber-400",
  reviewing: "text-sky-400",
  accepted: "text-emerald-400",
  rejected: "text-muted-foreground",
};

function Corrections({ enabled }: { enabled: boolean }) {
  const qc = useQueryClient();
  const [filter, setFilter] = useState<"queue" | CorrectionStatus | "all">("queue");
  const [notes, setNotes] = useState<Record<string, string>>({});
  const { data, isLoading } = useQuery({
    queryKey: ["corrections"],
    enabled,
    queryFn: async () => {
      const { data, error } = await (supabase as any)
        .from("corrections")
        .select("id,company_slug,company_name,pillar_factor,description,reporter_email,status,resolution_note,is_public,reviewed_at,created_at")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) throw error;
      return (data ?? []) as any[];
    },
  });

  async function patch(id: string, fields: Record<string, unknown>) {
    const { error } = await (supabase as any)
      .from("corrections")
      .update({ ...fields, reviewed_at: new Date().toISOString() })
      .eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Report updated");
    qc.invalidateQueries({ queryKey: ["corrections"] });
    qc.invalidateQueries({ queryKey: ["public-corrections"] });
  }

  const rows = (data ?? []).filter((r) =>
    filter === "all" ? true : filter === "queue" ? r.status === "open" || r.status === "reviewing" : r.status === filter,
  );
  const openCount = (data ?? []).filter((r) => r.status === "open" || r.status === "reviewing").length;

  return (
    <section className="mt-8 rounded-xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Public reports</p>
          <h2 className="mt-1 font-display text-xl font-semibold tracking-tight">
            Corrections queue
            {openCount > 0 && <span className="ml-2 text-sm font-normal text-amber-400">{openCount} awaiting review</span>}
          </h2>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(["queue", "accepted", "rejected", "all"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-2.5 py-1 text-[11px] capitalize transition ${
                filter === f ? "border-primary/50 bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
      ) : !rows.length ? (
        <p className="mt-4 text-sm text-muted-foreground">No reports in this view.</p>
      ) : (
        <ul className="mt-4 divide-y divide-border text-sm">
          {rows.map((r) => (
            <li key={r.id} className="py-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium">{r.company_name}</span>
                {r.pillar_factor && (
                  <span className="rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {r.pillar_factor}
                  </span>
                )}
                <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${STATUS_TONE[r.status] ?? "text-muted-foreground"}`}>
                  {r.status}
                </span>
                {r.is_public && (
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    on company page
                  </span>
                )}
                <span className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleString()}</span>
                {r.reporter_email && <span className="text-xs text-muted-foreground">· {r.reporter_email}</span>}
              </div>
              <p className="mt-1.5 text-foreground/85">{r.description}</p>

              <textarea
                value={notes[r.id] ?? r.resolution_note ?? ""}
                onChange={(e) => setNotes((p) => ({ ...p, [r.id]: e.target.value }))}
                placeholder="Editor resolution note (shown publicly if you publish this correction)…"
                className="mt-2 min-h-[56px] w-full rounded-md border border-border bg-background px-3 py-2 text-xs outline-none focus:border-primary/60"
              />

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => patch(r.id, { status: "reviewing", resolution_note: notes[r.id] ?? r.resolution_note ?? null })}
                  className="rounded-md border border-border px-2.5 py-1 text-xs hover:bg-accent"
                >
                  Mark reviewing
                </button>
                <button
                  type="button"
                  onClick={() => patch(r.id, { status: "accepted", resolution_note: notes[r.id] ?? r.resolution_note ?? null })}
                  className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:opacity-90"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={() => patch(r.id, { status: "rejected", is_public: false, resolution_note: notes[r.id] ?? r.resolution_note ?? null })}
                  className="rounded-md border border-border px-2.5 py-1 text-xs hover:bg-accent"
                >
                  Reject
                </button>
                <label className="ml-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={!!r.is_public}
                    disabled={r.status !== "accepted"}
                    onChange={(e) => patch(r.id, { is_public: e.target.checked, resolution_note: notes[r.id] ?? r.resolution_note ?? null })}
                  />
                  Publish on company page
                </label>
              </div>
              {r.status !== "accepted" && (
                <p className="mt-1 text-[11px] text-muted-foreground">Accept a report before publishing it.</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function EditForm({ initial, onSave }: { initial: any; onSave: (f: any) => Promise<void> }) {
  const [f, setF] = useState<Record<string, any>>(() => ({
    ...initial,
    pillar_notes: { ...(initial.pillar_notes ?? {}) },
  }));
  const [busy, setBusy] = useState(false);
  function set<K extends string>(k: K, v: any) { setF((p) => ({ ...p, [k]: v })); }
  function setNote(key: string, v: string) {
    setF((p) => ({ ...p, pillar_notes: { ...(p.pillar_notes ?? {}), [key]: v } }));
  }

  const livePreview =
    Math.round(
      PILLARS.reduce((acc, p) => {
        const v = Number(f[p.key]);
        return acc + (Number.isFinite(v) ? Math.max(0, Math.min(100, v)) : 0) * p.weight;
      }, 0) * 10,
    ) / 10;

  return (
    <form
      onSubmit={async (e) => { e.preventDefault(); setBusy(true); await onSave(f); setBusy(false); }}
      className="grid gap-4"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name"><input className="inp" value={f.name ?? ""} onChange={(e) => set("name", e.target.value)} /></Field>
        <Field label="Ticker"><input className="inp" value={f.ticker ?? ""} onChange={(e) => set("ticker", e.target.value)} /></Field>
        <Field label="Industry"><input className="inp" value={f.industry ?? ""} onChange={(e) => set("industry", e.target.value)} /></Field>
        <Field label="Sector"><input className="inp" value={f.sector ?? ""} onChange={(e) => set("sector", e.target.value)} /></Field>
        <Field label="HQ"><input className="inp" value={f.headquarters ?? ""} onChange={(e) => set("headquarters", e.target.value)} /></Field>
        <Field label="Country"><input className="inp" value={f.country ?? ""} onChange={(e) => set("country", e.target.value)} /></Field>
        <Field label="Founded"><input className="inp" type="number" value={f.founded ?? ""} onChange={(e) => set("founded", e.target.value)} /></Field>
        <Field label="Employees"><input className="inp" type="number" value={f.employees ?? ""} onChange={(e) => set("employees", e.target.value)} /></Field>
        <Field label="CEO"><input className="inp" value={f.ceo ?? ""} onChange={(e) => set("ceo", e.target.value)} /></Field>
        <Field label="Website"><input className="inp" value={f.website ?? ""} onChange={(e) => set("website", e.target.value)} /></Field>
      </div>
      <Field label="Description">
        <textarea className="inp min-h-[80px]" value={f.description ?? ""} onChange={(e) => set("description", e.target.value)} />
      </Field>

      <div>
        <div className="flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Pillar scores (0–100)</p>
          <p className="text-xs text-muted-foreground">
            Weighted composite: <span className="font-semibold tabular-nums text-foreground">{livePreview.toFixed(1)}</span>
          </p>
        </div>
        <div className="mt-3 grid gap-4">
          {PILLARS.map((p) => (
            <div key={p.key} className="rounded-lg border border-border bg-background/40 p-3">
              <div className="grid gap-3 sm:grid-cols-[1fr_120px]">
                <div>
                  <p className="text-sm font-medium">{p.label}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {(p.weight * 100).toFixed(0)}% weight{p.inverse ? " · inverse signal" : ""}
                  </p>
                </div>
                <input
                  className="inp"
                  type="number"
                  min={0}
                  max={100}
                  step="0.1"
                  value={f[p.key] ?? 0}
                  onChange={(e) => set(p.key, e.target.value)}
                />
              </div>
              <textarea
                className="inp mt-2 min-h-[56px] text-xs"
                placeholder="Optional company-specific note for this pillar…"
                value={f.pillar_notes?.[p.key] ?? ""}
                onChange={(e) => setNote(p.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button type="submit" disabled={busy}
          className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60">
          <Save className="h-3 w-3" /> {busy ? "Saving…" : "Save"}
        </button>
      </div>

      <style>{`.inp{width:100%;border:1px solid var(--color-border);background:var(--color-background);border-radius:.5rem;padding:.55rem .7rem;font-size:.875rem;outline:none}.inp:focus{border-color:oklch(0.78 0.16 78 / .6)}`}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
