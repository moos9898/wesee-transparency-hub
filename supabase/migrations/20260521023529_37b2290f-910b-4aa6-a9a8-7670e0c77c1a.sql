
-- Roles enum + table
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null default 'user',
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create policy "users view their roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);
create policy "admins manage roles" on public.user_roles for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

-- Companies
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  ticker text,
  industry text,
  sector text,
  headquarters text,
  country text,
  founded int,
  employees int,
  ceo text,
  website text,
  description text,
  logo_url text,
  governance_score numeric not null default 0,
  environment_score numeric not null default 0,
  labor_score numeric not null default 0,
  financial_score numeric not null default 0,
  privacy_score numeric not null default 0,
  overall_score numeric generated always as (
    round(((governance_score*0.25) + (environment_score*0.20) + (labor_score*0.20) + (financial_score*0.20) + (privacy_score*0.15))::numeric, 1)
  ) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.companies enable row level security;
create index on public.companies (overall_score desc);
create index on public.companies using gin (to_tsvector('english', name || ' ' || coalesce(ticker,'') || ' ' || coalesce(industry,'')));

create policy "public read companies" on public.companies for select using (true);
create policy "admins write companies" on public.companies for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

-- Methodology pages (markdown content)
create table public.methodology_pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  content text not null,
  pillar text,
  weight numeric,
  order_index int not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.methodology_pages enable row level security;
create policy "public read methodology" on public.methodology_pages for select using (true);
create policy "admins write methodology" on public.methodology_pages for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

-- updated_at trigger
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end $$;

create trigger companies_touch before update on public.companies
for each row execute function public.touch_updated_at();

create trigger methodology_touch before update on public.methodology_pages
for each row execute function public.touch_updated_at();

-- Auto assign 'user' role on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$ begin insert into public.user_roles (user_id, role) values (new.id, 'user') on conflict do nothing; return new; end $$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
