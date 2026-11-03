create table if not exists public.corrections (
  id uuid primary key default gen_random_uuid(),
  company_slug text not null,
  company_name text not null,
  pillar_factor text,
  description text not null,
  reporter_email text,
  status text not null default 'open' check (status in ('open','reviewing','resolved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select, insert on public.corrections to authenticated;
grant select, insert on public.corrections to anon;
grant all on public.corrections to service_role;

alter table public.corrections enable row level security;

-- anyone may file a correction report
create policy "Anyone can file a correction" on public.corrections
  for insert to anon, authenticated with check (true);

-- only admins can read reports (PII: reporter email)
create policy "Admins can read corrections" on public.corrections
  for select to authenticated using (public.has_role(auth.uid(), 'admin'::app_role));

create or replace function public.touch_updated_at() returns trigger language plpgsql security definer set search_path = 'public' as $$ begin new.updated_at = now(); return new; end $$;

drop trigger if exists corrections_touch on public.corrections;
create trigger corrections_touch before update on public.corrections for each row execute function public.touch_updated_at();