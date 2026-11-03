alter table public.companies alter column worker_standards drop not null;
alter table public.companies alter column local_economic drop not null;
alter table public.companies alter column community_resilience drop not null;
alter table public.companies alter column outsourcing_exposure drop not null;
alter table public.companies alter column production_abroad drop not null;
alter table public.companies alter column lobbying_activity drop not null;
alter table public.companies alter column ceo_pay_ratio drop not null;
alter table public.companies alter column layoffs_high_profits drop not null;
alter table public.companies alter column us_workforce_commitment drop not null;

update public.companies c set
  name = v.name, ticker = v.ticker, ceo = v.ceo,
  website = v.website, logo_url = null
from (values
  ('apple','Meridian Devices','MRDN','Adrian Cole','https://example.com/meridian'),
  ('amazon','Halcyon Commerce','HLCN','Rhea Vargas','https://example.com/halcyon'),
  ('walmart','Baywood Retail','BYWD','Caleb Reyes','https://example.com/baywood'),
  ('tesla','Emberline Motors','EMBL','Julian Stark','https://example.com/emberline'),
  ('disney','Lumenarc Media','LMNC','Mara Quinn','https://example.com/lumenarc'),
  ('microsoft','Cipheron Systems','CPHR','Soren Vale','https://example.com/cipheron'),
  ('alphabet','Northstar Labs','NRTH','Pia Lindgren','https://example.com/northstar'),
  ('meta','Mirage Networks','MRGE','Dane Holloway','https://example.com/mirage'),
  ('nvidia','Vector Silicon','VCTR','Hideo Tanaka','https://example.com/vector'),
  ('jpmorgan','Sterling Reserve Bank','STRL','Gideon Ashworth','https://example.com/sterling'),
  ('berkshire','Highland Holdings','HGHL','Wesley Barrett','https://example.com/highland'),
  ('pfizer','Verdant Pharma','VRDN','Adriana Costa','https://example.com/verdant'),
  ('jnj','Caelum Health','CLMH','Julian Benedict','https://example.com/caelum'),
  ('procter-gamble','Lumina Consumer Goods','LMNA','Mira Sutherland','https://example.com/lumina'),
  ('costco','Fairhaven Wholesale','FRHV','Roland Sinclair','https://example.com/fairhaven'),
  ('homedepot','Buildmore Supply','BLMR','Theodore Marcus','https://example.com/buildmore'),
  ('boeing','Aeroforge Industries','AERF','Damian Calder','https://example.com/aeroforge'),
  ('ford','Ironvale Motor Works','IRNV','Jonah Farley','https://example.com/ironvale'),
  ('gm','Axlecraft Motors','AXLC','Marcus Barrow','https://example.com/axlecraft'),
  ('chevron','Petroforge Energy','PTFR','Micah Wren','https://example.com/petroforge'),
  ('exxonmobil','Blackridge Petroleum','BRPT','Derek Woodson','https://example.com/blackridge'),
  ('lockheed','Sentinel Aerospace','SNTL','James Talbot','https://example.com/sentinel'),
  ('starbucks','Morningbrew Coffee','MRNB','Lila Nash','https://example.com/morningbrew'),
  ('target','Cedarwood Retail','CDWD','Bryn Cardell','https://example.com/cedarwood'),
  ('coca-cola','Crispwell Beverages','CRSP','Jenna Quill','https://example.com/crispwell')
) as v(slug, name, ticker, ceo, website)
where c.slug = v.slug;

update public.companies
  set description = 'Fictional company created to demonstrate the WeSee scoring methodology. Not a real company; all figures shown are illustrative examples.'
  where slug in ('apple','amazon','walmart','tesla','disney','microsoft','alphabet','meta','nvidia','jpmorgan','berkshire','pfizer','jnj','procter-gamble','costco','homedepot','boeing','ford','gm','chevron','exxonmobil','lockheed','starbucks','target','coca-cola');

insert into public.companies (
  slug, name, ticker, industry, sector, headquarters, country,
  founded, employees, ceo, website, description,
  worker_standards, local_economic, community_resilience, outsourcing_exposure,
  production_abroad, lobbying_activity, ceo_pay_ratio, layoffs_high_profits,
  us_workforce_commitment, pillar_notes
) values (
  'mcdonalds', 'McDonald''s Corporation', 'MCD',
  'Quick-Service Restaurants', 'Consumer Discretionary', 'Chicago, IL', 'United States',
  1955, 150000, 'Christopher Kempczinski', 'https://www.mcdonalds.com',
  'Real company used to demonstrate the WeSee scoring engine on verified public data. The CEO-to-Worker Pay Ratio is sourced from the 2023 DEF 14A proxy statement; the other eight pillars are not yet independently scored and are shown as "Not yet scored".',
  null, null, null, null, null, null, 12, null, null,
  jsonb_build_object(
    'evidence', jsonb_build_object(
      'median_worker_compensation', jsonb_build_object(
        'factorKey','median_worker_compensation','illustrative',false,'normalizedScore',12,'confidenceOverride','high',
        'notes','Sourced from McDonald''s 2023 DEF 14A Pay Ratio disclosure (filed 2024-05-22). The median employee is a Poland-based crew employee, which depresses the median due to non-U.S. compensation — a known limitation of the SEC ratio.',
        'inputs', jsonb_build_array(
          jsonb_build_object('variableKey','medianWorkerComp','label','Median employee total compensation','value',15802,'unit','USD/yr','sourceId','sec_edgar','document','DEF 14A','section','2023 Pay Ratio Disclosure','filingYear',2023,'page',48,'url','https://www.sec.gov/Archives/edgar/data/63908/000155837024004818/mcd-20240522xdef14a.htm','retrievedAt','2026-07-17'),
          jsonb_build_object('variableKey','ceoTotalComp','label','CEO total compensation','value',19155001,'unit','USD','sourceId','sec_edgar','document','DEF 14A','section','2023 Pay Ratio Disclosure','filingYear',2023,'page',48,'url','https://www.sec.gov/Archives/edgar/data/63908/000155837024004818/mcd-20240522xdef14a.htm','retrievedAt','2026-07-17')
        ),
        'steps', jsonb_build_array(
          'Median employee total compensation = $15,802 (a restaurant crew employee located in Poland, per the 2023 Pay Ratio disclosure).',
          'CEO total compensation = $19,155,001.',
          'CEO Pay Ratio = $19,155,001 / $15,802 = 1,212:1.',
          'A 1,212:1 ratio sits in the highest decile of S&P 500 disclosed ratios (median ~ 250:1), so the normalized contribution score is very low (12/100).'
        )
      ),
      'ceo_compensation', jsonb_build_object(
        'factorKey','ceo_compensation','illustrative',false,'normalizedScore',12,'confidenceOverride','high',
        'inputs', jsonb_build_array(
          jsonb_build_object('variableKey','ceoTotalComp','label','CEO total compensation','value',19155001,'unit','USD','sourceId','sec_edgar','document','DEF 14A','section','Summary Compensation Table','filingYear',2023,'page',42,'url','https://www.sec.gov/Archives/edgar/data/63908/00015583908/000155837024004818/mcd-20240522xdef14a.htm','retrievedAt','2026-07-17')
        ),
        'steps', jsonb_build_array('CEO Total Compensation (2023) = $19,155,001, per the DEF 14A Pay Ratio disclosure.')
      )
    )
  )
);