ALTER TABLE public.companies
ADD COLUMN IF NOT EXISTS pillar_notes jsonb NOT NULL DEFAULT '{}'::jsonb;