
ALTER TABLE public.companies
  ADD COLUMN IF NOT EXISTS us_workforce_commitment numeric NOT NULL DEFAULT 60;

ALTER TABLE public.companies
  DROP COLUMN overall_score;

ALTER TABLE public.companies
  ADD COLUMN overall_score numeric GENERATED ALWAYS AS (
    round(
      (worker_standards        * 0.16)
    + (us_workforce_commitment * 0.14)
    + (local_economic          * 0.14)
    + (layoffs_high_profits    * 0.12)
    + (ceo_pay_ratio           * 0.10)
    + (outsourcing_exposure    * 0.10)
    + (community_resilience    * 0.09)
    + (production_abroad       * 0.08)
    + (lobbying_activity       * 0.07)
    , 1)
  ) STORED;

INSERT INTO public.methodology_pages (slug, title, summary, content, pillar, weight, order_index)
VALUES (
  'us-workforce-commitment',
  'U.S. Workforce Commitment',
  'Measures long-term investment in the American workforce relative to reliance on temporary or lower-cost labor structures.',
  E'## What this measures\n\nThis pillar evaluates how strongly a company invests in the long-term U.S. workforce — through domestic hiring, worker development, apprenticeships, and stable full-time roles — relative to its reliance on temporary, outsourced, or lower-cost labor structures.\n\nIt is an economic and workforce metric, not a political one. The focus is on corporate labor allocation, domestic workforce investment, and long-term economic contribution.\n\n## Signals weighed\n\n- Share of full-time U.S. employees vs. temporary, seasonal, and contractor labor\n- Apprenticeship, tuition, and skills-development spend per U.S. employee\n- Multi-year net U.S. hiring trend in core operating roles\n- Internal promotion and tenure rates across U.S. operations\n- Use of staffing-agency or short-term labor models for core functions\n\n## How scores translate\n\n- **Strong U.S. workforce investment** — sustained domestic hiring, well-funded training pipelines, low reliance on temporary labor.\n- **Balanced workforce structure** — moderate use of contingent labor offset by stable full-time hiring and development programs.\n- **Heavy reliance on lower-cost labor structures** — material share of core work performed by short-term or staffing-agency labor.\n- **Minimal long-term domestic workforce investment** — thin training spend and shrinking full-time U.S. headcount despite U.S. revenue growth.',
  'us_workforce_commitment',
  0.14,
  1
)
ON CONFLICT (slug) DO UPDATE
SET title = EXCLUDED.title,
    summary = EXCLUDED.summary,
    content = EXCLUDED.content,
    pillar = EXCLUDED.pillar,
    weight = EXCLUDED.weight;
