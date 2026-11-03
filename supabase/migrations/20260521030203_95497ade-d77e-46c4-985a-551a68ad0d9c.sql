-- Drop generated composite and old pillar columns
ALTER TABLE public.companies DROP COLUMN IF EXISTS overall_score;
ALTER TABLE public.companies
  DROP COLUMN IF EXISTS governance_score,
  DROP COLUMN IF EXISTS environment_score,
  DROP COLUMN IF EXISTS labor_score,
  DROP COLUMN IF EXISTS financial_score,
  DROP COLUMN IF EXISTS privacy_score;

-- Add eight new pillar scores (0-100, higher = better contribution to U.S. economy)
ALTER TABLE public.companies
  ADD COLUMN worker_standards numeric NOT NULL DEFAULT 0,
  ADD COLUMN local_economic numeric NOT NULL DEFAULT 0,
  ADD COLUMN community_resilience numeric NOT NULL DEFAULT 0,
  ADD COLUMN outsourcing_exposure numeric NOT NULL DEFAULT 0,
  ADD COLUMN production_abroad numeric NOT NULL DEFAULT 0,
  ADD COLUMN lobbying_activity numeric NOT NULL DEFAULT 0,
  ADD COLUMN ceo_pay_ratio numeric NOT NULL DEFAULT 0,
  ADD COLUMN layoffs_high_profits numeric NOT NULL DEFAULT 0;

-- Recreate overall_score as weighted generated column
ALTER TABLE public.companies
  ADD COLUMN overall_score numeric GENERATED ALWAYS AS (
    round((
      (worker_standards * 0.18) +
      (local_economic * 0.16) +
      (community_resilience * 0.10) +
      (outsourcing_exposure * 0.12) +
      (production_abroad * 0.10) +
      (lobbying_activity * 0.08) +
      (ceo_pay_ratio * 0.12) +
      (layoffs_high_profits * 0.14)
    )::numeric, 1)
  ) STORED;

CREATE INDEX IF NOT EXISTS companies_overall_score_idx ON public.companies (overall_score DESC);