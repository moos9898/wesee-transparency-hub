// Walmart (WMT) — supplied company card and factor map, updated 2026-10-22.
// Data only: supplied scores and calculation text are never recomputed.
import type { CompanyCard } from "./amazon";

export const WALMART_CARD = {
  "overall": 53,
  "band": "Mixed",
  "coverage": "Score from 5 of 7 ready measures. The two harm-evidence measures are unfinished because\nWeSee's own search protocol for Walmart is incomplete — that counts against no one. U.S.\nWorkforce Commitment scores (77) and counts in the average, but is not counted in any\ncompany's coverage (Class W).",
  "period": "Period scored: fiscal 2026 (year ended January 31, 2026 — Walmart's most recent filed year).",
  "overallBlock": {
    "title": "The Overall, step by step",
    "lines": [
      {
        "text": "1. Worker Standards → 43 × weight 16 = 688",
        "kind": "step"
      },
      {
        "text": "2. U.S. Workforce Commitment → 77 × weight 14 = 1,078",
        "kind": "step"
      },
      {
        "text": "3. Local Economic Contribution → 78 × weight 14 = 1,092",
        "kind": "step"
      },
      {
        "text": "4. Layoffs → 65 × weight 12 = 780",
        "kind": "step"
      },
      {
        "text": "5. CEO Pay → 0 × weight 10 = 0",
        "kind": "step"
      },
      {
        "text": "6. Lobbying → 34 × weight 7 = 238",
        "kind": "step"
      },
      {
        "text": "7. 688 + 1,078 + 1,092 + 780 + 0 + 238 = 3,876 ÷ 73 = 53 (73 = the weights of the scored pillars only)",
        "kind": "total"
      },
      {
        "text": "8. Coverage check: 5 of 7 ready measures scored (71%) → the coverage cap is 69. 53 is below it — the cap does not bind. (U.S. Workforce Commitment counts in the average above but not in coverage — Class W. The two harm-evidence measures are not yet measured by WeSee.)",
        "kind": "check"
      },
      {
        "text": "9. Layoff check: the layoff score is 65, so the layoff cap does not apply.",
        "kind": "check"
      },
      {
        "text": "10. Overall: 53 — Mixed. Equal weights: (43 + 77 + 78 + 65 + 0 + 34) ÷ 6 = 49.5 → 50 — Mixed, published beside the score per the Weights Defense.",
        "kind": "total"
      },
      {
        "text": "Updated 2026-10-22 under U.S. Workforce Rule v1.2 (Factor 4 — H-1B Intensity — locked",
        "kind": "note"
      },
      {
        "text": "by M 2026-10-22): the U.S. Workforce pillar re-scores 71 → 77 on Walmart's USCIS FY2025",
        "kind": "note"
      },
      {
        "text": "count (3,233 approvals ÷ about 1,600,000 filed U.S. workers = 0.20 per 100 → factor 94),",
        "kind": "note"
      },
      {
        "text": "and the overall rises 52 → 53. Earlier update: 2026-10-20 under the final locked rules",
        "kind": "note"
      },
      {
        "text": "(Bundles A–D): Local Economic Contribution Rule v1.0 locked (78 now official) · U.S.",
        "kind": "note"
      },
      {
        "text": "Workforce Rule v1.1 consistency amendment (Domestic Hiring scores on Half A alone;",
        "kind": "note"
      },
      {
        "text": "pillar 71) · Lobbying corrected to 34 (Bundle B, Finding W) · Outsourcing + Production",
        "kind": "note"
      },
      {
        "text": "Abroad Rule v1.0 locked — Walmart's search protocol is not yet complete, so those two",
        "kind": "note"
      },
      {
        "text": "pillars read \"Not yet measured by WeSee\" and carry no score. Previous headline: 44 —",
        "kind": "note"
      },
      {
        "text": "Weak. See FINAL_BOARD_2026-10-22.md.",
        "kind": "note"
      },
      {
        "text": "Score from 5 of 7 ready measures. The two harm-evidence measures are unfinished because",
        "kind": "note"
      },
      {
        "text": "WeSee's own search protocol for Walmart is incomplete — that counts against no one. U.S.",
        "kind": "note"
      },
      {
        "text": "Workforce Commitment scores (77) and counts in the average, but is not counted in any",
        "kind": "note"
      },
      {
        "text": "company's coverage (Class W).",
        "kind": "note"
      },
      {
        "text": "Equal weights: 50 — Mixed. (49.5 before rounding, half-up — level with the official score's band.)",
        "kind": "note"
      },
      {
        "text": "Period scored: fiscal 2026 (year ended January 31, 2026 — Walmart's most recent filed year).",
        "kind": "note"
      },
      {
        "text": "One-line summary: America's largest employer pays its typical worker below the cost of living on the only median it discloses, cut about 2,500 corporate jobs across two rounds while earning $21.9B, and its CEO took home $76.0M in one year — about 2,491 times the typical worker.",
        "kind": "note"
      },
      {
        "text": "Biggest reason for this score: Its CEO took home $76.0M in one year — about 2,491 times what its typical worker earns.",
        "kind": "note"
      },
      {
        "text": "Read in under a minute — the details below show every number and where it came from.",
        "kind": "note"
      },
      {
        "text": "WeSee's full design has 9 pillars and 25 scored factors (24 in the original design, plus H-1B Intensity, added 2026-10-22). Here is the state of every one for Walmart:",
        "kind": "note"
      },
      {
        "text": "26 design factors = 25 active + 1 removed (Training Investment, removed by M 2026-10-14;",
        "kind": "note"
      },
      {
        "text": "H-1B Intensity added by U.S. Workforce Rule v1.2, 2026-10-22).",
        "kind": "note"
      },
      {
        "text": "On the 25 active factors (final, 2026-10-22): 13 scored inside locked rules (Living",
        "kind": "note"
      },
      {
        "text": "Wage; Full-Time Employment; Domestic Hiring; H-1B Intensity; Domestic Investment; Taxes;",
        "kind": "note"
      },
      {
        "text": "Layoff Severity, Profitability Context, Buybacks; CEO Compensation, Median Worker",
        "kind": "note"
      },
      {
        "text": "Compensation; Lobbying Spend, Political Contributions) · 1 disclosed in part",
        "kind": "note"
      },
      {
        "text": "(Offshore Workforce — approximate own-workforce U.S./international split filed,",
        "kind": "note"
      },
      {
        "text": "outsourced share not filed) · 7 not disclosed by Walmart (Benefits, Workplace Safety,",
        "kind": "note"
      },
      {
        "text": "Employee Retention, Contractor Dependence, Domestic Suppliers, U.S. R&D, Outsourced",
        "kind": "note"
      },
      {
        "text": "Services) · 4 not measurable for any company (Community 2, Production 2 — the",
        "kind": "note"
      },
      {
        "text": "Production pair's pillar is additionally not yet measured by WeSee, its §8 protocol",
        "kind": "note"
      },
      {
        "text": "partial).",
        "kind": "note"
      },
      {
        "text": "13 + 1 + 7 + 4 = 25. ✓",
        "kind": "note"
      },
      {
        "text": "The honest contrast in one line: Walmart now scores 13 factors — it files a U.S. full-time",
        "kind": "note"
      },
      {
        "text": "share, a U.S. workforce share, U.S. segment investment, and a U.S. tax provision — but it",
        "kind": "note"
      },
      {
        "text": "files them only as rounded approximations, and it withholds the prior-year U.S. count",
        "kind": "note"
      },
      {
        "text": "that would let Domestic Hiring's growth half run, which is why that factor scores on",
        "kind": "note"
      },
      {
        "text": "Half A alone and its coverage is 5 of 7 ready pillars.",
        "kind": "note"
      }
    ]
  },
  "pillars": {
    "worker_standards": {
      "score": 43,
      "sentence": "Its typical worker earns $30,520 a year — below the $49,246 it takes to live on — scored on the worldwide figure, because Walmart does not disclose a U.S. median.",
      "blocks": [
        {
          "title": "Worker Standards — 43 (of 100)",
          "lines": [
            {
              "text": "One question: how does Walmart treat the people who work for it? This pillar asks three questions about pay. (The other parts of this pillar — benefits, safety, keeping workers — cannot be scored for any company yet: no comparable public figure exists. So this score is the pay factor, standing for the pillar until the rest can be measured.)",
              "kind": "note"
            },
            {
              "text": "Can the worker live on it? → $30,520 ÷ $49,246 = 0.62 → 15",
              "kind": "step"
            },
            {
              "text": "Is it what other Americans make? → $30,520 ÷ $62,608 = 0.49 → 15",
              "kind": "step"
            },
            {
              "text": "How is the money split? → $21,893,000,000 ÷ 2,100,000 workers = $10,425 profit per worker → $30,520 ÷ ($30,520 + $10,425) = 74% → the Worker's Share → 100",
              "kind": "step"
            },
            {
              "text": "Pillar score: (15 + 15 + 100) ÷ 3 = 43",
              "kind": "total"
            },
            {
              "text": "Read the three answers together: Walmart's profit per worker is thin (≈$10,425), so the split is fair — the worker keeps 74 cents of every dollar of pay-plus-profit. But the pay itself fails both level tests on the only median Walmart discloses. A rule also says: pay below the cost of living caps this score at 49 — the computed 43 stands under that cap either way.",
              "kind": "note"
            },
            {
              "text": "Where the numbers come from: Walmart's typical worker pay: $30,520 a year (fiscal 2026 proxy statement). ⚠️ U.S. pay figure not disclosed — scored on the worldwide figure. Walmart reports one median for its ~2.1 million workers worldwide (full-time, part-time, seasonal and temporary together); it discloses no U.S. median and no full-time median, so the rule uses the worldwide figure and flags it here — the same hierarchy applied to every company. The cost of living, $49,246 a year, is MIT's national living wage — the cost of basic needs for one adult with no children, averaged across all 50 states. What other Americans make, $62,608, is the U.S. Bureau of Labor Statistics median pay for full-time workers in 2025. Walmart's profit: $21,893,000,000 in fiscal 2026 (Form 10-K), over about 2,100,000 workers — Walmart files rounded approximations, not exact counts, and the score uses them exactly as filed.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Worker Standards (pillar weight 16%) — pillar score 43 (pay factor only, same basis as Amazon/Costco/Apple)",
          "lines": [
            {
              "text": "Living Wage · 40% · SCORED · Worker Pay Fairness Rule v1.3 (three questions): Q1 15 / Q2 15 / Q3 100 → 43, on the worldwide median $30,520 (hierarchy step (c) — Walmart files no U.S. median and no full-time median; flagged on the card). Dignity gate triggered (pay below the $49,246 living-wage benchmark); the computed 43 stands below the 49 cap either way",
              "kind": "note"
            },
            {
              "text": "Benefits · 20% · NOT DISCLOSED · No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none)",
              "kind": "note"
            },
            {
              "text": "Workplace Safety · 20% · NOT DISCLOSED · No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)",
              "kind": "note"
            },
            {
              "text": "Employee Retention · 20% · NOT DISCLOSED · No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none)",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Worker Standards: Pay Level vs Living Wage — scored (15) · Pay Level vs U.S. Typical Pay — scored (15) · Worker's Share of Profit — scored (100) · Benefits — not measurable yet (no per-worker cost figure is filed by any company) · Safety — not measurable as designed (injury counts can't be compared fairly across company sizes yet) · Retention — not measurable yet (no turnover figure is filed in comparable form — Walmart's only filed retention-type figures mix countries or don't exist)",
              "kind": "step"
            }
          ]
        },
        {
          "title": "Printed fact — never scored",
          "lines": [
            {
              "text": "In September 2025, Walmart workers were counted among those receiving public food and health assistance in the states that reported employer data to the U.S. Government Accountability Office (GAO): 15,515 Walmart workers on SNAP (food assistance) and 16,055 on Medicaid (health coverage). (GAO report GAO-26-108703, June 2026.) These counts come from 11 states, and each state lists only its 25 largest employers per program — so a company missing from a state's list may still have workers enrolled there. The counts also reflect how big an employer Walmart is and that benefit eligibility is based on household income, not one job's wage. No national count exists, and this fact is printed for context only — it is never part of any score.",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "living_wage": {
          "status": "scored",
          "note": "Worker Pay Fairness Rule v1.3 (three questions): Q1 15 / Q2 15 / Q3 100 → 43, on the worldwide median $30,520 (hierarchy step (c) — Walmart files no U.S. median and no full-time median; flagged on the card). Dignity gate triggered (pay below the $49,246 living-wage benchmark); the computed 43 stands below the 49 cap either way"
        },
        "benefits": {
          "status": "not_disclosed",
          "note": "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none)"
        },
        "workplace_safety": {
          "status": "not_disclosed",
          "note": "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)"
        },
        "employee_retention": {
          "status": "not_disclosed",
          "note": "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none)"
        }
      }
    },
    "us_workforce_commitment": {
      "score": 77,
      "sentence": "About 68% of its U.S. workers are full-time, and about 1.6 million of its 2.1 million workers are in America — but it files only rounded approximations, with no exact or year-by-year U.S. count. USCIS approved 3,233 H-1B petitions for Walmart in fiscal 2025 — 0.20 for every 100 U.S. workers, minimal measured use — and that factor scores 94.",
      "blocks": [
        {
          "title": "U.S. Workforce Commitment — 77 (of 100) · scored on 3 of 4 factors",
          "lines": [
            {
              "text": "One question: is this company building its workforce in the United States — real full-time jobs, hiring here, work done by its own people? Walmart's 10-K reports its headcount in one rounded statement: about 2.1 million workers worldwide, about 1.6 million of them in the U.S., and in the U.S. about 92% hourly, about 68% full-time.",
              "kind": "note"
            },
            {
              "text": "Full-time share — 68. → filed U.S. full-time share ≈ 68% → 68 × 100 → 68",
              "kind": "step"
            },
            {
              "text": "(A filed share is a measurement — unlike a company's target, it scores. Walmart files the share but only as an approximation, \"approximately 68%,\" and the score uses it exactly as filed.)",
              "kind": "note"
            },
            {
              "text": "Domestic hiring — 76. Half A, the U.S. share of the workforce, is filed: → 1,600,000 ÷ 2,100,000 = 76 → 76. Half B — did the U.S. workforce grow in fiscal 2026? — is not computable: Walmart files no prior-year U.S. count in this filing, and the rule never mixes counts across filings or substitutes the worldwide figure. Under the rule's consistency amendment (v1.1, the JPMorgan precedent applied uniformly), the factor scores on Half A alone: 76. Because growth cannot be established from filed counts, the growth-protection floor does not apply.",
              "kind": "step"
            },
            {
              "text": "Contractor share — not disclosed. Walmart files no count of contractor or agency workers. Nothing is estimated.",
              "kind": "step"
            },
            {
              "text": "H-1B intensity — 94. (Factor 4, added by U.S. Workforce Rule v1.2, locked 2026-10-22.) USCIS approved 3,233 H-1B petitions for Walmart in fiscal 2025 → 3,233 ÷ about 1,600,000 filed U.S. workers = 0.20 approvals per 100 U.S. workers → on the published scale (0 per 100 = 100 · 0.5 per 100 = 85) → 94. Stated plainly: the factor RAISES Walmart — at 0.20 per 100 its measured use is minimal, and a scored factor rewards the measurement; the negative lands on heavy users.",
              "kind": "step"
            },
            {
              "text": "PRINTED LINE (Clause 5 — printed on every card): \"USCIS approved 3,233 H-1B petitions for Walmart in FY2025 — 478 initial + 2,755 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" (Source: USCIS H-1B Employer Data Hub, FY2025 employer file — Wal-Mart Associates Inc was the only Walmart Schedule name with FY2025 rows; read 2026-10-22.)",
              "kind": "note"
            },
            {
              "text": "Pillar score: (68 × 35 + 76 × 25 + 94 × 20) ÷ 80 = 77 — the weighted average of its scored factors (three of four), printed here so the basis is never hidden. (Updated 2026-10-22 under Rule v1.2: previously 71, on Full-Time and Domestic Hiring — (68 × 35 + 76 × 25) ÷ 60; before that, 68 on Full-Time alone, with Domestic Hiring printed as context.)",
              "kind": "total"
            }
          ]
        },
        {
          "title": "U.S. Workforce Commitment (14%) — pillar score 77 (U.S. Workforce Rule v1.2; scored on 3 of 4 factors; Class W — counts in the average, never in coverage)",
          "lines": [
            {
              "text": "Full-Time Employment · 35% · SCORED · Filed U.S. full-time share ≈68% → factor 68. Walmart files the share only as an approximation (\"approximately 68%,\" FY2026 10-K Item 1: ≈2.1M worldwide, ≈1.6M U.S., ≈92% hourly in the U.S.) — a filed measurement, not a target, so it scores exactly as filed (contrast Costco, whose ≥50% is a target and earns nothing)",
              "kind": "note"
            },
            {
              "text": "Domestic Hiring · 25% · SCORED · Half A is filed: ≈1,600,000 ÷ ≈2,100,000 = 76. Half B (scored-year net U.S. change) cannot be computed — Walmart files no prior-year U.S. count in this filing and no segment headcount table, and the rule never mixes counts across filings or substitutes the worldwide figure (M's D-2). Under the v1.1 consistency amendment (locked 2026-10-20; the JPMorgan precedent applied uniformly), the factor scores on Half A alone: 76. Growth-protection check: growth cannot be established from filed counts → no floor applies",
              "kind": "note"
            },
            {
              "text": "H-1B Intensity · 20% · SCORED · Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Wal-Mart Associates Inc — 478 initial + 2,755 continuing = 3,233 approvals (the only Walmart Schedule name with FY2025 rows) ÷ ≈1,600,000 filed U.S. workers (as filed, rounded) = 0.20 per 100 → on the §12 anchor table (0 → 100 · 0.5 → 85, straight-line) → factor 94. The Clause 5 printed line stands on the card",
              "kind": "note"
            },
            {
              "text": "Training Investment · 20% · REMOVED · Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors",
              "kind": "note"
            },
            {
              "text": "Contractor Dependence · 20% · NOT DISCLOSED · No contractor/agency headcount or share is filed",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "U.S. Workforce Commitment: Full-Time Employment — scored (68) · Domestic Hiring — scored (76) (Half A alone under the v1.1 consistency amendment — the year-change half needs a prior-year U.S. count Walmart doesn't file) · H-1B Intensity — scored (94) (Factor 4, U.S. Workforce Rule v1.2 — 3,233 USCIS approvals in FY2025 ÷ about 1.6M filed U.S. workers = 0.20 per 100) · Contractor Dependence — not disclosed",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "full_time_employment": {
          "status": "scored",
          "note": "Filed U.S. full-time share ≈68% → factor 68. Walmart files the share only as an approximation (\"approximately 68%,\" FY2026 10-K Item 1: ≈2.1M worldwide, ≈1.6M U.S., ≈92% hourly in the U.S.) — a filed measurement, not a target, so it scores exactly as filed (contrast Costco, whose ≥50% is a target and earns nothing)"
        },
        "domestic_hiring": {
          "status": "scored",
          "note": "Half A is filed: ≈1,600,000 ÷ ≈2,100,000 = 76. Half B (scored-year net U.S. change) cannot be computed — Walmart files no prior-year U.S. count in this filing and no segment headcount table, and the rule never mixes counts across filings or substitutes the worldwide figure (M's D-2). Under the v1.1 consistency amendment (locked 2026-10-20; the JPMorgan precedent applied uniformly), the factor scores on Half A alone: 76. Growth-protection check: growth cannot be established from filed counts → no floor applies"
        },
        "h1b_intensity": {
          "status": "scored",
          "note": "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Wal-Mart Associates Inc — 478 initial + 2,755 continuing = 3,233 approvals (the only Walmart Schedule name with FY2025 rows) ÷ ≈1,600,000 filed U.S. workers (as filed, rounded) = 0.20 per 100 → on the §12 anchor table (0 → 100 · 0.5 → 85, straight-line) → factor 94. The Clause 5 printed line stands on the card"
        },
        "training_investment": {
          "status": "removed_by_m",
          "note": "Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors"
        },
        "contractor_dependence": {
          "status": "not_disclosed",
          "note": "No contractor/agency headcount or share is filed"
        }
      }
    },
    "local_economic": {
      "score": 78,
      "sentence": "It put 79% of its filed investment into its U.S. segments in fiscal 2026 and paid U.S. tax at a 22.0% rate on its U.S. earnings.",
      "blocks": [
        {
          "title": "Local Economic Contribution — 78 (of 100) — Local Economic Contribution Rule v1.0 (locked 2026-10-20)",
          "lines": [
            {
              "text": "One question: of the money this company puts to work, how much stays in America?",
              "kind": "note"
            },
            {
              "text": "Investment in the U.S. — 79. Walmart files its investment spending by segment: → Walmart U.S. $20,157,000,000 + Sam's Club U.S. $914,000,000 = $21,071,000,000 ÷ $26,642,000,000 total → 79% → 79",
              "kind": "step"
            },
            {
              "text": "(The filer's \"Corporate and support\" investment, $2,374,000,000, is assigned to no country in the filing; it is counted in the total and not in the U.S. part — the conservative reading. Counting it as U.S. could only raise this factor.)",
              "kind": "note"
            },
            {
              "text": "Suppliers in the U.S. — not disclosed. Walmart files no split of what it buys by country of origin.",
              "kind": "step"
            },
            {
              "text": "U.S. tax rate — 74. → U.S. tax $5,110,000,000 ÷ U.S. profit $23,272,000,000 = 22.0% → the locked scale (the 21% federal rate = 70) → 74",
              "kind": "step"
            },
            {
              "text": "(The 5,110 is the filed U.S. provision: federal $2,128M + state/local $678M + deferred federal $2,010M + deferred state/local $294M, 10-K tax note.)",
              "kind": "note"
            },
            {
              "text": "Research in the U.S. — not disclosed. Walmart files no research line with a U.S. split.",
              "kind": "step"
            },
            {
              "text": "Pillar score: (79 × 35 + 74 × 15) ÷ 50 = 78 — scored on 2 of 4 factors, the two filed in comparable form.",
              "kind": "total"
            }
          ]
        },
        {
          "title": "Local Economic Contribution (14%) — pillar score 78 (Local Economic Contribution Rule v1.0, locked 2026-10-20)",
          "lines": [
            {
              "text": "Domestic Investment · 35% · SCORED · U.S. segment additions ARE filed (FY2026 10-K segment note: Walmart U.S. $20,157M + Sam's Club U.S. $914M = $21,071M ÷ $26,642M total → 79.1%) → factor 79 under the locked rule. The filer's \"Corporate and support\" $2,374M is assigned to no country in the filing; the rule counts it in the total and not in the U.S. part (decision D-4: the conservative reading)",
              "kind": "note"
            },
            {
              "text": "Domestic Suppliers · 25% · NOT DISCLOSED · No supplier-spend or purchases-by-origin split is filed",
              "kind": "note"
            },
            {
              "text": "U.S. R&D · 25% · NOT DISCLOSED · Walmart files no R&D line with a U.S. split",
              "kind": "note"
            },
            {
              "text": "Taxes · 15% · SCORED · U.S. provision IS filed (FY2026 10-K Note 8: current federal $2,128M + state/local $678M + deferred federal $2,010M + deferred state/local $294M = $5,110M on U.S. pre-tax $23,272M → 22.0%) → factor 74 under the locked rule. Pillar: (79 × 35 + 74 × 15) ÷ 50 = 78",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Local Economic Contribution: Domestic Investment — scored (79) · Domestic Suppliers — not disclosed · Local Employment Multiplier — retired from the design 2026-10-14 (kept visible here; it was never in any math) · Taxes — scored (74) · U.S. R&D Investment — not disclosed",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "domestic_investment": {
          "status": "scored",
          "note": "U.S. segment additions ARE filed (FY2026 10-K segment note: Walmart U.S. $20,157M + Sam's Club U.S. $914M = $21,071M ÷ $26,642M total → 79.1%) → factor 79 under the locked rule. The filer's \"Corporate and support\" $2,374M is assigned to no country in the filing; the rule counts it in the total and not in the U.S. part (decision D-4: the conservative reading)"
        },
        "domestic_suppliers": {
          "status": "not_disclosed",
          "note": "No supplier-spend or purchases-by-origin split is filed"
        },
        "us_rd": {
          "status": "not_disclosed",
          "note": "Walmart files no R&D line with a U.S. split"
        },
        "taxes": {
          "status": "scored",
          "note": "U.S. provision IS filed (FY2026 10-K Note 8: current federal $2,128M + state/local $678M + deferred federal $2,010M + deferred state/local $294M = $5,110M on U.S. pre-tax $23,272M → 22.0%) → factor 74 under the locked rule. Pillar: (79 × 35 + 74 × 15) ÷ 50 = 78"
        }
      }
    },
    "layoffs_high_profits": {
      "score": 65,
      "sentence": "It cut about 2,500 corporate jobs in two rounds (May 2025 and May 2026) while profits rose — and spent $8.1B buying back its own stock in the same year as the second round.",
      "blocks": [
        {
          "title": "Layoffs During High Profits — 65 (of 100)",
          "lines": [
            {
              "text": "One question: did this company cut large numbers of jobs while it was making money? Walmart announced two mass rounds in the last three years — both in profitable years.",
              "kind": "note"
            },
            {
              "text": "Start → 100",
              "kind": "step"
            },
            {
              "text": "About 2,500 roles cut in the window (1,000–4,999 band) → about 1,500 in May 2025 + about 1,000 in May 2026 → −25",
              "kind": "step"
            },
            {
              "text": "Cut in more than one round → 2 separate rounds → −10",
              "kind": "step"
            },
            {
              "text": "Share of one workforce hit → the rounds hit corporate and technology staff; Walmart does not disclose that group's size, so no share can be computed → no deduction, nothing estimated",
              "kind": "step"
            },
            {
              "text": "How the company softened it → no severance disclosed at scale in either round (its annual filing never mentions severance); no 60+ day internal-transfer window disclosed; and it bought back $4,494,000,000 (fiscal 2025) and $8,088,000,000 (fiscal 2026) of its own stock in the layoff years → +0 of the +10 possible",
              "kind": "step"
            },
            {
              "text": "Pillar score: 100 − 25 − 10 = 65",
              "kind": "total"
            },
            {
              "text": "The rounds (from the company's own announcements): May 21, 2025 — about 1,500 corporate roles eliminated across technology, e-commerce fulfillment and advertising, in a memo from the U.S. CEO and the technology chief (reported the same day by Reuters and the Wall Street Journal; California WARN notices for San Bruno and Sunnyvale verify pieces of it — 106 + 381 jobs — and are never added to the announced total). May 12, 2026 — about 1,000 roles eliminated or relocated in the technology and product teams (company memo; California WARN notices verify 394 of them). That second round mixes eliminations with moves inside the U.S.; it is counted at the announced total, and the alternate reading is shown below so nothing rests on one interpretation.",
              "kind": "note"
            },
            {
              "text": "Shown openly, not hidden: if the May 2026 round were read as relocation-first (fewer than 1,000 jobs actually eliminated), it would not count as a mass round and this pillar would be 75. If a February 2025 office-consolidation program — verified pieces so far total 748 jobs (Hoboken 481, Charlotte 267) — were shown to reach 1,000 across all states, it would be a third round and this pillar would be 60. Also in the window, not counted (no total was ever announced and no rule counts what cannot be sized): the April 2024 closure of all 51 Walmart Health clinics and its virtual-care service (workers were paid for 90 days, with transfer options and severance after), and a May 2024 program of several hundred head-office cuts tied to relocations.",
              "kind": "note"
            },
            {
              "text": "Profit check: Walmart earned $19,436,000,000 in fiscal 2025 and $21,893,000,000 in fiscal 2026 — the rounds happened while the company was solidly profitable, so no \"the company was losing money\" reduction applies. And a standing limit, printed on every card: job-cut notices (WARN) are filed state by state and there is no single national list — these findings are what the announcements and the notices found actually show.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Layoffs During High Profits (12%)",
          "lines": [
            {
              "text": "Layoff Severity · 45% · SCORED · Inside Layoff Rule v1.0: ≈2,500 counted in the window (≈1,500 May 2025 + ≈1,000 May 2026) → 1,000–4,999 band −25; repetition (2 rounds) −10; segment share not computable (Walmart does not disclose the corporate/Global Tech headcount) → no extra deduction, nothing estimated",
              "kind": "note"
            },
            {
              "text": "Profitability Context · 30% · SCORED · Inside Layoff Rule v1.0: profitable in the layoff years (FY2025 net income attributable $19,436M; FY2026 $21,893M) — no losing-money reduction applies",
              "kind": "note"
            },
            {
              "text": "Buybacks · 25% · SCORED · Inside Layoff Rule v1.0: buybacks $4,494M in FY2025 and $8,088M in FY2026 fail the zero-buyback credit test; no severance disclosed at scale and no 60+ day transfer window disclosed → credits +0",
              "kind": "note"
            },
            {
              "text": "Pillar score: 65 — all three of M's factors are in the rule, as inputs rather than separate weighted scores. Sensitivities printed on the card: 75 if the May 2026 round is read as relocation-first (below the mass-round line); 60 if the Feb 2025 consolidation program (748 verified so far) reached 1,000.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Layoffs During High Profits: Layoff Scale & Frequency — scored (65) (segment-share step not computable — the affected group's size is not disclosed)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "layoff_severity": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: ≈2,500 counted in the window (≈1,500 May 2025 + ≈1,000 May 2026) → 1,000–4,999 band −25; repetition (2 rounds) −10; segment share not computable (Walmart does not disclose the corporate/Global Tech headcount) → no extra deduction, nothing estimated"
        },
        "profitability": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: profitable in the layoff years (FY2025 net income attributable $19,436M; FY2026 $21,893M) — no losing-money reduction applies"
        },
        "buybacks": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: buybacks $4,494M in FY2025 and $8,088M in FY2026 fail the zero-buyback credit test; no severance disclosed at scale and no 60+ day transfer window disclosed → credits +0"
        }
      }
    },
    "ceo_pay_ratio": {
      "score": 0,
      "sentence": "CEO Doug McMillon actually took home $76.0M in fiscal 2026 — about 2,491 times the typical worker's $30,520.",
      "blocks": [
        {
          "title": "CEO Pay — 0 (of 100)",
          "lines": [
            {
              "text": "One question: how many typical workers' pay equals what the CEO actually took home? \"Actually took home\" means pay that really arrived — salary, cash bonus, and stock that vested (became his) that year. Promised future stock doesn't count.",
              "kind": "note"
            },
            {
              "text": "CEO pay that actually arrived in fiscal 2026 → salary $1,500,000 + cash incentive $4,032,000 + other $442,047 + stock that became his $70,045,795 = $76,019,842",
              "kind": "step"
            },
            {
              "text": "The typical worker → $30,520 (⚠️ worldwide figure — Walmart discloses no U.S. median; same flag as Worker Standards)",
              "kind": "step"
            },
            {
              "text": "The split → $76,019,842 ÷ $30,520 = 2,491 to 1",
              "kind": "step"
            },
            {
              "text": "On the locked scale, 1,500-to-1 or more scores zero → 0",
              "kind": "step"
            },
            {
              "text": "(A note on the official ratio: Walmart's own filing reports 958 to 1. That number counts $21,051,605 of stock promised in fiscal 2026 at its promise-date value and uses the on-paper pay total of $29,240,930 — it never counts the $70.0M of earlier promises that actually became the CEO's money this year. WeSee counts what arrived, so WeSee's ratio is higher than the filed one here — the opposite direction from companies whose CEOs vest little.)",
              "kind": "note"
            },
            {
              "text": "(Methods note: the scale's top end was recalibrated in CEO Pay Rule v2.0 (locked 2026-10-20) for ratios under 500-to-1. At 2,491-to-1, Walmart scores 0 under the old scale and under v2.0 alike.)",
              "kind": "note"
            }
          ]
        },
        {
          "title": "CEO-to-Worker Pay Ratio (10%)",
          "lines": [
            {
              "text": "CEO Compensation · 50% · SCORED · Inside CEO Pay Rule v1.1 (realized pay $76,019,842 — salary $1,500,000 + non-equity incentive $4,032,000 + all other $442,047 + stock vested $70,045,795 + $0 options exercised)",
              "kind": "note"
            },
            {
              "text": "Median Worker Compensation · 50% · SCORED · Inside CEO Pay Rule v1.1 (worldwide median $30,520, hierarchy step (c), flagged → ≈2,491:1 → 0; Walmart's own filed grant-date ratio 958:1 printed as a footnote, never scored — WeSee's realized ratio is higher than the filed one, the opposite direction from Amazon's)",
              "kind": "note"
            },
            {
              "text": "Pillar score: 0. At ≈2,491:1 Walmart scores 0 under the locked scale and under the pending draft ruler v2 alike (500:1 and below unchanged in the draft; Decision C-1/C-2).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "CEO Pay: CEO Pay Ratio (realized) — scored (0)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "ceo_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v1.1 (realized pay $76,019,842 — salary $1,500,000 + non-equity incentive $4,032,000 + all other $442,047 + stock vested $70,045,795 + $0 options exercised)"
        },
        "median_worker_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v1.1 (worldwide median $30,520, hierarchy step (c), flagged → ≈2,491:1 → 0; Walmart's own filed grant-date ratio 958:1 printed as a footnote, never scored — WeSee's realized ratio is higher than the filed one, the opposite direction from Amazon's)"
        }
      }
    },
    "outsourcing_exposure": {
      "score": null,
      "sentence": "No proven case of Walmart moving U.S. work abroad was found in the records searched for Oct 2023–Oct 2026, but WeSee's full search protocol for Walmart is not finished, so no score is claimed yet; government certifications from 2019 and earlier are on the inside timeline.",
      "blocks": [
        {
          "title": "Outsourcing (Jobs Moved Abroad) — Not yet measured by WeSee",
          "lines": [
            {
              "text": "One question: has this company been proven — by a government determination, its own filing, or a closure notice paired with its own words — to have moved American jobs abroad? Foreign growth alone never counts; a closure alone is not proof.",
              "kind": "note"
            },
            {
              "text": "In the window (Oct 2023 – Oct 2026): no proven move found in the records searched. Under the locked rule (Outsourcing + Production Abroad Rule v1.0), a score activates only when the full search protocol (S-1–S-5) is completed and logged for the company — Walmart's is not yet complete, so no score is claimed (an earlier version of this card printed a provisional 100 here; the locked rule does not score a company on an unfinished search, and the provisional is withdrawn, not carried).",
              "kind": "step"
            },
            {
              "text": "The search, stated honestly: the government's Trade Adjustment Assistance database (the historical record of certified job moves) could not yet be pulled in full — its company-name view was inaccessible — and Walmart's short filings (8-Ks) for the window have not yet been swept. The annual filing was read in full: it contains no statement moving named U.S. work abroad. The two layoff rounds above were announced as eliminations and moves inside the U.S.; neither names a foreign destination. Walmart's growing technology operation in India opened new roles abroad; with no named U.S. function moved there, that is foreign growth, which the rules never score.",
              "kind": "step"
            },
            {
              "text": "The older record, printed as history (scores zero today — outside the window): 2019–2020 — the U.S. Department of Labor certified workers at Walmart's Global Business Services division in Charlotte, NC, for trade-adjustment assistance (a second petition was closed because the first certification already covered them); the certification's stated basis could not be re-read for this card, so it is printed as a certification, nothing more. 2019 — a petition for the same division's Derby, KS office was denied: investigators found the work had moved within the U.S., not abroad — a claim tested and not sustained. 2009 — an optical-lab certification in Lockbourne, OH.",
              "kind": "step"
            },
            {
              "text": "Printed, never scored: the share of Walmart's workforce that is contractors — not disclosed.",
              "kind": "step"
            }
          ]
        },
        {
          "title": "Jobs Moved Abroad (10%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; §8 protocol partial — search not yet exhaustive)",
          "lines": [
            {
              "text": "Offshore Workforce · 60% · DISCLOSED IN PART · Own-workforce split is filed approximately (≈1.6M U.S. / ≈0.5M international of ≈2.1M) — but the factor measures work placed offshore/outsourced, which is not the same figure; no offshore-workforce share as such is filed",
              "kind": "note"
            },
            {
              "text": "Outsourced Services · 40% · NOT DISCLOSED · Vendor/offshore services spend is not published",
              "kind": "note"
            },
            {
              "text": "Locked-rule status (not a factor status): the locked harm-evidence rule",
              "kind": "note"
            },
            {
              "text": "(Outsourcing + Production Abroad Rule v1.0) searches proven U.S.-to-abroad moves instead",
              "kind": "note"
            },
            {
              "text": "of these design factors. For Walmart the §8 protocol is PARTIAL (pack §9: S-1 full",
              "kind": "note"
            },
            {
              "text": "petition-file pull and S-2 8-K sweep still outstanding; the FY2026 10-K was read in full",
              "kind": "note"
            },
            {
              "text": "and states no move; the two layoff rounds name no foreign destination) — no proven move",
              "kind": "note"
            },
            {
              "text": "was located in the window (Oct 2023 – Oct 2026), but the locked rule activates a score",
              "kind": "note"
            },
            {
              "text": "only on a completed, logged protocol, so both harm pillars are NOT YET MEASURED BY WESEE",
              "kind": "note"
            },
            {
              "text": "(the draft's provisional 100s are withdrawn, not carried). Historical TAA, printed never",
              "kind": "note"
            },
            {
              "text": "scored in the window: TA-W-95,112 Charlotte GBS certification exists (verified via the",
              "kind": "note"
            },
            {
              "text": "TA-W-95,113 termination notice; its basis text was NOT read — pack §11), TA-W-94,571 Derby",
              "kind": "note"
            },
            {
              "text": "GBS DENIED in full (work shifted domestically), TA-W-71,077 Lockbourne optical-lab",
              "kind": "note"
            },
            {
              "text": "certification (2009; basis not read). Contractor share prints as the exposure line: not",
              "kind": "note"
            },
            {
              "text": "disclosed.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Outsourcing: Contractor Use — printed, never scored (not disclosed) · Jobs Moved Abroad — not yet measured by WeSee (no proven move found in the window; the full search protocol is not yet complete, so no score is claimed)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "offshore_workforce": {
          "status": "disclosed_in_part",
          "note": "Own-workforce split is filed approximately (≈1.6M U.S. / ≈0.5M international of ≈2.1M) — but the factor measures work placed offshore/outsourced, which is not the same figure; no offshore-workforce share as such is filed"
        },
        "outsourced_services": {
          "status": "not_disclosed",
          "note": "Vendor/offshore services spend is not published"
        }
      },
      "status": "Not yet measured by WeSee"
    },
    "community_resilience": {
      "score": null,
      "sentence": "(for any company — the same standard for everyone).",
      "blocks": [
        {
          "title": "Community Resilience — Not yet measurable",
          "lines": [
            {
              "text": "This pillar asks whether a company strengthens or weakens the communities it operates in over time. There is no fair way to measure that for any company yet — no public number exists that means the same thing for every company. So it is not scored for anyone, and it does not count against Walmart's coverage. It stays on the card so the gap is visible, not hidden.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Community Resilience (9%)",
          "lines": [
            {
              "text": "Local Investment · 60% · NOT MEASURABLE · No company-level source exists for any company (Class U — excluded from coverage for everyone)",
              "kind": "note"
            },
            {
              "text": "Community Programs · 40% · NOT MEASURABLE · Program spend is self-reported marketing material, not a filing",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Community Resilience: Community Investment — not measurable yet (no universal measure exists)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "local_investment": {
          "status": "not_measurable",
          "note": "No company-level source exists for any company (Class U — excluded from coverage for everyone)"
        },
        "community_programs": {
          "status": "not_measurable",
          "note": "Program spend is self-reported marketing material, not a filing"
        }
      },
      "status": "Not yet measurable"
    },
    "production_abroad": {
      "score": null,
      "sentence": "No proven case of Walmart moving U.S. production abroad was found in the window searched; the same unfinished protocol means no score yet; a 2009 optical-lab certification is on the inside timeline.",
      "blocks": [
        {
          "title": "Production Abroad (Production Moved Abroad) — Not yet measured by WeSee",
          "lines": [
            {
              "text": "One question: has this company been proven to have moved American production abroad? (Goods it was always going to import are not \"moved production\"; the rule waits for a proven move.)",
              "kind": "note"
            },
            {
              "text": "In the window: no proven move found — and no score, under the same unfinished protocol stated above.",
              "kind": "step"
            },
            {
              "text": "History, printed not scored: the 2009 Lockbourne optical-lab certification is the production-side item in Walmart's located record; no production move was located in the window.",
              "kind": "step"
            },
            {
              "text": "Printed, never scored: the share of what Walmart sells that is made in the U.S. — not disclosed. (Outside rankings call Walmart America's largest importer by volume; import volume is not a moved U.S. factory and is never scored.)",
              "kind": "step"
            }
          ]
        },
        {
          "title": "Production Moved Abroad (8%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; same incomplete protocol as Jobs Moved Abroad)",
          "lines": [
            {
              "text": "Domestic Production · 60% · NOT MEASURABLE · Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for Walmart the §8 protocol is partial, same as Jobs Moved Abroad above, so the pillar is not yet measured; the design factor itself stays not measurable)",
              "kind": "note"
            },
            {
              "text": "Imported Goods · 40% · NOT MEASURABLE · USITC counts category imports, not a company's imports. U.S.-made share of goods sold prints as the exposure line: not disclosed (outside rankings calling Walmart the largest U.S. importer by volume are context only — import volume is not a moved U.S. factory and is never scored)",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Production Abroad: Production Moved Abroad — not yet measured by WeSee (no proven move found in the window; protocol incomplete) · U.S.-Made Share — printed, never scored (not disclosed)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "domestic_production": {
          "status": "not_measurable",
          "note": "Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for Walmart the §8 protocol is partial, same as Jobs Moved Abroad above, so the pillar is not yet measured; the design factor itself stays not measurable)"
        },
        "imported_goods": {
          "status": "not_measurable",
          "note": "USITC counts category imports, not a company's imports. U.S.-made share of goods sold prints as the exposure line: not disclosed (outside rankings calling Walmart the largest U.S. importer by volume are context only — import volume is not a moved U.S. factory and is never scored)"
        }
      },
      "status": "Not yet measured by WeSee"
    },
    "lobbying_activity": {
      "score": 34,
      "sentence": "It spent $7.8M lobbying the federal government in 2025, plus $3.1M through its PAC in the last completed election cycle.",
      "blocks": [
        {
          "title": "Lobbying Activity — 34 (of 100)",
          "lines": [
            {
              "text": "One question: how much does this company spend to influence the government? The rule counts federal lobbying for one year, plus the company's PAC spending over the last completed election cycle — added together, never averaged (averaging would let a small PAC number dilute a large lobbying record).",
              "kind": "note"
            },
            {
              "text": "Federal lobbying, 2025 → $7,840,000 (Walmart Inc — the total printed on its OpenSecrets client summary; cross-checked against the Senate lobbying database's self-filer filings, which sum to the same figure)",
              "kind": "step"
            },
            {
              "text": "Its PAC, 2023–24 election cycle → $3,084,031 in total spending (Walmart Inc. PAC for Responsible Government, Federal Election Commission records)",
              "kind": "step"
            },
            {
              "text": "Added together → $7,840,000 + $3,084,031 = $10,924,031 → on the scale ($10M = 35, $20M = 20) → 34",
              "kind": "step"
            },
            {
              "text": "Correction (2026-10-20, Bundle B — Finding W): this pillar previously printed 29, built on $10,726,000 — the $7,840,000 in-house figure PLUS the $2,886,000 paid to outside firms. The outside firms' money is a portion OF the printed total, not an addition to it (OpenSecrets' own in-house/outside bars partition the $7.84M), so the build double-counted it. The corrected chain above follows the locked rule's definition — the OpenSecrets printed total — exactly as every other company's chain does. Full audit: LDA_LOBBYING_REBUILD_2026-10-15.md §5.",
              "kind": "step"
            },
            {
              "text": "Printed limit (every company): this counts federal lobbying and the federal PAC only. State-level lobbying and money routed through trade groups are not in these records, and are never estimated.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Lobbying Activity (7%) — pillar score 34 (corrected 2026-10-20, Bundle B — Finding W)",
          "lines": [
            {
              "text": "Lobbying Spend · 65% · SCORED · Lobbying Rule v1.1: the filed measure is the printed total on the OpenSecrets client summary — $7,840,000 for calendar 2025 (cross-checked: Walmart's self-filer LDA filings sum to $7,840,000). Finding W (LDA_LOBBYING_REBUILD_2026-10-15.md §5): the build's $10,726,000 added outside-firm payments ($2,886,000) ON TOP of the printed total those payments are a portion OF — a double-count, corrected 2026-10-20",
              "kind": "note"
            },
            {
              "text": "Political Contributions · — · SCORED · M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Walmart PAC (WALMART INC. PAC FOR RESPONSIBLE GOVERNMENT, FEC C00093054) 2023–24 total disbursements $3,084,031. Final: $7,840,000 + $3,084,031 = $10,924,031 → 34. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple maps",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Lobbying Activity: Lobbying — scored (34) (federal lobbying + the PAC, added; corrected 2026-10-20 — see the pillar section)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "lobbying_spend": {
          "status": "scored",
          "note": "Lobbying Rule v1.1: the filed measure is the printed total on the OpenSecrets client summary — $7,840,000 for calendar 2025 (cross-checked: Walmart's self-filer LDA filings sum to $7,840,000). Finding W (LDA_LOBBYING_REBUILD_2026-10-15.md §5): the build's $10,726,000 added outside-firm payments ($2,886,000) ON TOP of the printed total those payments are a portion OF — a double-count, corrected 2026-10-20"
        },
        "political_contributions": {
          "status": "scored",
          "note": "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Walmart PAC (WALMART INC. PAC FOR RESPONSIBLE GOVERNMENT, FEC C00093054) 2023–24 total disbursements $3,084,031. Final: $7,840,000 + $3,084,031 = $10,924,031 → 34. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple maps"
        }
      }
    }
  },
  "sources": [
    {
      "label": "Walmart fiscal 2026 annual report (Form 10-K, SEC, filed March 13, 2026)"
    },
    {
      "label": "fiscal 2026 proxy statement (DEF 14A, SEC, filed April 23, 2026)"
    },
    {
      "label": "Senate lobbying disclosure database (2025 filings) and OpenSecrets"
    },
    {
      "label": "Federal Election Commission (Walmart PAC, 2023–24 cycle)"
    },
    {
      "label": "U.S. Department of Labor, Trade Adjustment Assistance determinations"
    },
    {
      "label": "state WARN notices (California, New Jersey)"
    },
    {
      "label": "company layoff announcements as reported by Reuters and the Wall Street Journal (May 2025, May 2026)"
    },
    {
      "label": "U.S. Government Accountability Office report GAO-26-108703 (June 2026)"
    },
    {
      "label": "MIT Living Wage Calculator (national benchmark)"
    },
    {
      "label": "U.S. Bureau of Labor Statistics (median pay)"
    },
    {
      "label": "USCIS H-1B Employer Data Hub (FY2025 employer file)."
    },
    {
      "label": "see WALMART_EVIDENCE_PACK.md — every chain above, plus everything this run could NOT verify, listed openly."
    }
  ],
  "rules": "Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.2 · Local Economic Contribution Rule v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Outsourcing + Production Abroad Rule v1.0 · Insufficient-Data Rule v1.2",
  "suppliedBuildFile": "# WeSee — Walmart\n## Overall score: **53 — Mixed**\n*Updated 2026-10-22 under U.S. Workforce Rule v1.2 (Factor 4 — H-1B Intensity — locked\nby M 2026-10-22): the U.S. Workforce pillar re-scores 71 → 77 on Walmart's USCIS FY2025\ncount (3,233 approvals ÷ about 1,600,000 filed U.S. workers = 0.20 per 100 → factor 94),\nand the overall rises 52 → 53. Earlier update: 2026-10-20 under the final locked rules\n(Bundles A–D): Local Economic Contribution Rule v1.0 locked (78 now official) · U.S.\nWorkforce Rule v1.1 consistency amendment (Domestic Hiring scores on Half A alone;\npillar 71) · Lobbying corrected to 34 (Bundle B, Finding W) · Outsourcing + Production\nAbroad Rule v1.0 locked — Walmart's search protocol is not yet complete, so those two\npillars read \"Not yet measured by WeSee\" and carry no score. Previous headline: 44 —\nWeak. See FINAL_BOARD_2026-10-22.md.*\n**Score from 5 of 7 ready measures.** The two harm-evidence measures are unfinished because\nWeSee's own search protocol for Walmart is incomplete — that counts against no one. U.S.\nWorkforce Commitment scores (77) and counts in the average, but is not counted in any\ncompany's coverage (Class W).\n**Equal weights: 50 — Mixed.** (49.5 before rounding, half-up — level with the official score's band.)\n**Period scored: fiscal 2026** (year ended January 31, 2026 — Walmart's most recent filed year).\n**One-line summary:** America's largest employer pays its typical worker below the cost of living on the only median it discloses, cut about 2,500 corporate jobs across two rounds while earning $21.9B, and its CEO took home $76.0M in one year — about 2,491 times the typical worker.\n**Biggest reason for this score:** Its CEO took home $76.0M in one year — about 2,491 times what its typical worker earns.\n**Read in under a minute — the details below show every number and where it came from.**\n\n---\n\n## The 9 pillars — one line each\n\n1. **Worker Standards — 43 — Weak.** Its typical worker earns $30,520 a year — below the $49,246 it takes to live on — scored on the worldwide figure, because Walmart does not disclose a U.S. median.\n2. **U.S. Workforce Commitment — 77 — Positive.** About 68% of its U.S. workers are full-time, and about 1.6 million of its 2.1 million workers are in America — but it files only rounded approximations, with no exact or year-by-year U.S. count. USCIS approved 3,233 H-1B petitions for Walmart in fiscal 2025 — 0.20 for every 100 U.S. workers, minimal measured use — and that factor scores 94.\n3. **Local Economic Contribution — 78 — Positive.** It put 79% of its filed investment into its U.S. segments in fiscal 2026 and paid U.S. tax at a 22.0% rate on its U.S. earnings.\n4. **Layoffs During High Profits — 65 — Mixed.** It cut about 2,500 corporate jobs in two rounds (May 2025 and May 2026) while profits rose — and spent $8.1B buying back its own stock in the same year as the second round.\n5. **CEO Pay — 0 — Harmful.** CEO Doug McMillon actually took home $76.0M in fiscal 2026 — about 2,491 times the typical worker's $30,520.\n6. **Outsourcing (Jobs Moved Abroad) — Not yet measured by WeSee.** No proven case of Walmart moving U.S. work abroad was found in the records searched for Oct 2023–Oct 2026, but WeSee's full search protocol for Walmart is not finished, so no score is claimed yet; government certifications from 2019 and earlier are on the inside timeline.\n7. **Community Resilience — Not yet measurable** (for any company — the same standard for everyone).\n8. **Production Abroad (Production Moved Abroad) — Not yet measured by WeSee.** No proven case of Walmart moving U.S. production abroad was found in the window searched; the same unfinished protocol means no score yet; a 2009 optical-lab certification is on the inside timeline.\n9. **Lobbying Activity — 34 — Weak.** It spent $7.8M lobbying the federal government in 2025, plus $3.1M through its PAC in the last completed election cycle.\n\n---\n\n## The numbers behind the score\n\n### Worker Standards — 43 (of 100)\nOne question: how does Walmart treat the people who work for it? This pillar asks three questions about pay. (The other parts of this pillar — benefits, safety, keeping workers — cannot be scored for any company yet: no comparable public figure exists. So this score is the pay factor, standing for the pillar until the rest can be measured.)\n- Can the worker live on it? → $30,520 ÷ $49,246 = 0.62 → **15**\n- Is it what other Americans make? → $30,520 ÷ $62,608 = 0.49 → **15**\n- How is the money split? → $21,893,000,000 ÷ 2,100,000 workers = $10,425 profit per worker → $30,520 ÷ ($30,520 + $10,425) = 74% → the Worker's Share → **100**\n- **Pillar score: (15 + 15 + 100) ÷ 3 = 43**\n\nRead the three answers together: Walmart's profit per worker is thin (≈$10,425), so the *split* is fair — the worker keeps 74 cents of every dollar of pay-plus-profit. But the pay itself fails both level tests on the only median Walmart discloses. A rule also says: pay below the cost of living caps this score at 49 — the computed 43 stands under that cap either way.\n**Where the numbers come from:** Walmart's typical worker pay: **$30,520** a year (fiscal 2026 proxy statement). ⚠️ **U.S. pay figure not disclosed — scored on the worldwide figure.** Walmart reports one median for its ~2.1 million workers worldwide (full-time, part-time, seasonal and temporary together); it discloses no U.S. median and no full-time median, so the rule uses the worldwide figure and flags it here — the same hierarchy applied to every company. The cost of living, **$49,246** a year, is MIT's national living wage — the cost of basic needs for one adult with no children, averaged across all 50 states. What other Americans make, **$62,608**, is the U.S. Bureau of Labor Statistics median pay for full-time workers in 2025. Walmart's profit: **$21,893,000,000** in fiscal 2026 (Form 10-K), over **about 2,100,000 workers** — Walmart files rounded approximations, not exact counts, and the score uses them exactly as filed.\n\n### U.S. Workforce Commitment — 77 (of 100) · scored on 3 of 4 factors\nOne question: is this company building its workforce in the United States — real full-time jobs, hiring here, work done by its own people? Walmart's 10-K reports its headcount in one rounded statement: about **2.1 million workers worldwide, about 1.6 million of them in the U.S.**, and in the U.S. about **92% hourly, about 68% full-time**.\n- **Full-time share — 68.** → filed U.S. full-time share ≈ 68% → 68 × 100 → **68**\n  (A filed share is a measurement — unlike a company's target, it scores. Walmart files the share but only as an approximation, \"approximately 68%,\" and the score uses it exactly as filed.)\n- **Domestic hiring — 76.** Half A, the U.S. share of the workforce, is filed: → 1,600,000 ÷ 2,100,000 = 76 → **76**. Half B — did the U.S. workforce grow in fiscal 2026? — is not computable: Walmart files no prior-year U.S. count in this filing, and the rule never mixes counts across filings or substitutes the worldwide figure. Under the rule's consistency amendment (v1.1, the JPMorgan precedent applied uniformly), the factor scores on Half A alone: **76**. Because growth cannot be established from filed counts, the growth-protection floor does not apply.\n- **Contractor share — not disclosed.** Walmart files no count of contractor or agency workers. Nothing is estimated.\n- **H-1B intensity — 94.** (Factor 4, added by U.S. Workforce Rule v1.2, locked 2026-10-22.) USCIS approved 3,233 H-1B petitions for Walmart in fiscal 2025 → 3,233 ÷ about 1,600,000 filed U.S. workers = 0.20 approvals per 100 U.S. workers → on the published scale (0 per 100 = 100 · 0.5 per 100 = 85) → **94**. Stated plainly: the factor RAISES Walmart — at 0.20 per 100 its measured use is minimal, and a scored factor rewards the measurement; the negative lands on heavy users.\n  PRINTED LINE (Clause 5 — printed on every card): \"USCIS approved 3,233 H-1B petitions for Walmart in FY2025 — 478 initial + 2,755 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" (Source: USCIS H-1B Employer Data Hub, FY2025 employer file — Wal-Mart Associates Inc was the only Walmart Schedule name with FY2025 rows; read 2026-10-22.)\n- **Pillar score: (68 × 35 + 76 × 25 + 94 × 20) ÷ 80 = 77** — the weighted average of its scored factors (three of four), printed here so the basis is never hidden. (Updated 2026-10-22 under Rule v1.2: previously 71, on Full-Time and Domestic Hiring — (68 × 35 + 76 × 25) ÷ 60; before that, 68 on Full-Time alone, with Domestic Hiring printed as context.)\n\n### Local Economic Contribution — 78 (of 100) — Local Economic Contribution Rule v1.0 (locked 2026-10-20)\nOne question: of the money this company puts to work, how much stays in America?\n- **Investment in the U.S. — 79.** Walmart files its investment spending by segment: → Walmart U.S. $20,157,000,000 + Sam's Club U.S. $914,000,000 = $21,071,000,000 ÷ $26,642,000,000 total → 79% → **79**\n  (The filer's \"Corporate and support\" investment, $2,374,000,000, is assigned to no country in the filing; it is counted in the total and not in the U.S. part — the conservative reading. Counting it as U.S. could only raise this factor.)\n- **Suppliers in the U.S. — not disclosed.** Walmart files no split of what it buys by country of origin.\n- **U.S. tax rate — 74.** → U.S. tax $5,110,000,000 ÷ U.S. profit $23,272,000,000 = 22.0% → the locked scale (the 21% federal rate = 70) → **74**\n  (The 5,110 is the filed U.S. provision: federal $2,128M + state/local $678M + deferred federal $2,010M + deferred state/local $294M, 10-K tax note.)\n- **Research in the U.S. — not disclosed.** Walmart files no research line with a U.S. split.\n- **Pillar score: (79 × 35 + 74 × 15) ÷ 50 = 78** — scored on 2 of 4 factors, the two filed in comparable form.\n\n### Layoffs During High Profits — 65 (of 100)\nOne question: did this company cut large numbers of jobs while it was making money? Walmart announced two mass rounds in the last three years — both in profitable years.\n- Start → **100**\n- **About 2,500 roles cut in the window** (1,000–4,999 band) → about 1,500 in May 2025 + about 1,000 in May 2026 → **−25**\n- **Cut in more than one round** → 2 separate rounds → **−10**\n- **Share of one workforce hit** → the rounds hit corporate and technology staff; Walmart does not disclose that group's size, so no share can be computed → **no deduction, nothing estimated**\n- **How the company softened it** → no severance disclosed at scale in either round (its annual filing never mentions severance); no 60+ day internal-transfer window disclosed; and it bought back **$4,494,000,000** (fiscal 2025) and **$8,088,000,000** (fiscal 2026) of its own stock in the layoff years → **+0 of the +10 possible**\n- **Pillar score: 100 − 25 − 10 = 65**\n**The rounds (from the company's own announcements):** **May 21, 2025** — about 1,500 corporate roles eliminated across technology, e-commerce fulfillment and advertising, in a memo from the U.S. CEO and the technology chief (reported the same day by Reuters and the Wall Street Journal; California WARN notices for San Bruno and Sunnyvale verify pieces of it — 106 + 381 jobs — and are never added to the announced total). **May 12, 2026** — about 1,000 roles eliminated or relocated in the technology and product teams (company memo; California WARN notices verify 394 of them). That second round mixes eliminations with moves inside the U.S.; it is counted at the announced total, and the alternate reading is shown below so nothing rests on one interpretation.\n**Shown openly, not hidden:** if the May 2026 round were read as relocation-first (fewer than 1,000 jobs actually eliminated), it would not count as a mass round and this pillar would be **75**. If a February 2025 office-consolidation program — verified pieces so far total 748 jobs (Hoboken 481, Charlotte 267) — were shown to reach 1,000 across all states, it would be a third round and this pillar would be **60**. Also in the window, not counted (no total was ever announced and no rule counts what cannot be sized): the April 2024 closure of all 51 Walmart Health clinics and its virtual-care service (workers were paid for 90 days, with transfer options and severance after), and a May 2024 program of several hundred head-office cuts tied to relocations.\n**Profit check:** Walmart earned $19,436,000,000 in fiscal 2025 and $21,893,000,000 in fiscal 2026 — the rounds happened while the company was solidly profitable, so no \"the company was losing money\" reduction applies. And a standing limit, printed on every card: job-cut notices (WARN) are filed state by state and there is no single national list — these findings are what the announcements and the notices found actually show.\n\n### CEO Pay — 0 (of 100)\nOne question: how many typical workers' pay equals what the CEO actually took home? \"Actually took home\" means pay that really arrived — salary, cash bonus, and stock that vested (became his) that year. Promised future stock doesn't count.\n- CEO pay that actually arrived in fiscal 2026 → salary $1,500,000 + cash incentive $4,032,000 + other $442,047 + stock that became his $70,045,795 = **$76,019,842**\n- The typical worker → **$30,520** (⚠️ worldwide figure — Walmart discloses no U.S. median; same flag as Worker Standards)\n- The split → $76,019,842 ÷ $30,520 = **2,491 to 1**\n- On the locked scale, 1,500-to-1 or more scores zero → **0**\n*(A note on the official ratio: Walmart's own filing reports **958 to 1**. That number counts $21,051,605 of stock promised in fiscal 2026 at its promise-date value and uses the on-paper pay total of $29,240,930 — it never counts the $70.0M of earlier promises that actually became the CEO's money this year. WeSee counts what arrived, so WeSee's ratio is higher than the filed one here — the opposite direction from companies whose CEOs vest little.)*\n*(Methods note: the scale's top end was recalibrated in CEO Pay Rule v2.0 (locked 2026-10-20) for ratios under 500-to-1. At 2,491-to-1, Walmart scores 0 under the old scale and under v2.0 alike.)*\n\n### Lobbying Activity — 34 (of 100)\nOne question: how much does this company spend to influence the government? The rule counts federal lobbying for one year, plus the company's PAC spending over the last completed election cycle — added together, never averaged (averaging would let a small PAC number dilute a large lobbying record).\n- Federal lobbying, 2025 → **$7,840,000** (Walmart Inc — the total printed on its OpenSecrets client summary; cross-checked against the Senate lobbying database's self-filer filings, which sum to the same figure)\n- Its PAC, 2023–24 election cycle → **$3,084,031** in total spending (Walmart Inc. PAC for Responsible Government, Federal Election Commission records)\n- Added together → $7,840,000 + $3,084,031 = **$10,924,031** → on the scale ($10M = 35, $20M = 20) → **34**\n- **Correction (2026-10-20, Bundle B — Finding W):** this pillar previously printed 29, built on $10,726,000 — the $7,840,000 in-house figure PLUS the $2,886,000 paid to outside firms. The outside firms' money is a portion OF the printed total, not an addition to it (OpenSecrets' own in-house/outside bars partition the $7.84M), so the build double-counted it. The corrected chain above follows the locked rule's definition — the OpenSecrets printed total — exactly as every other company's chain does. Full audit: LDA_LOBBYING_REBUILD_2026-10-15.md §5.\n*Printed limit (every company): this counts federal lobbying and the federal PAC only. State-level lobbying and money routed through trade groups are not in these records, and are never estimated.*\n\n### Outsourcing (Jobs Moved Abroad) — Not yet measured by WeSee\nOne question: has this company been *proven* — by a government determination, its own filing, or a closure notice paired with its own words — to have moved American jobs abroad? Foreign growth alone never counts; a closure alone is not proof.\n- **In the window (Oct 2023 – Oct 2026): no proven move found** in the records searched. Under the locked rule (Outsourcing + Production Abroad Rule v1.0), a score activates only when the full search protocol (S-1–S-5) is completed and logged for the company — Walmart's is not yet complete, so **no score is claimed** (an earlier version of this card printed a provisional 100 here; the locked rule does not score a company on an unfinished search, and the provisional is withdrawn, not carried).\n- **The search, stated honestly:** the government's Trade Adjustment Assistance database (the historical record of certified job moves) could not yet be pulled in full — its company-name view was inaccessible — and Walmart's short filings (8-Ks) for the window have not yet been swept. The annual filing was read in full: it contains no statement moving named U.S. work abroad. The two layoff rounds above were announced as eliminations and moves *inside* the U.S.; neither names a foreign destination. Walmart's growing technology operation in India opened new roles abroad; with no named U.S. function moved there, that is foreign growth, which the rules never score.\n- **The older record, printed as history (scores zero today — outside the window):** 2019–2020 — the U.S. Department of Labor **certified** workers at Walmart's Global Business Services division in Charlotte, NC, for trade-adjustment assistance (a second petition was closed because the first certification already covered them); the certification's stated basis could not be re-read for this card, so it is printed as a certification, nothing more. 2019 — a petition for the same division's Derby, KS office was **denied**: investigators found the work had moved within the U.S., not abroad — a claim tested and not sustained. 2009 — an optical-lab certification in Lockbourne, OH.\n- **Printed, never scored:** the share of Walmart's workforce that is contractors — not disclosed.\n\n### Production Abroad (Production Moved Abroad) — Not yet measured by WeSee\nOne question: has this company been *proven* to have moved American production abroad? (Goods it was always going to import are not \"moved production\"; the rule waits for a proven move.)\n- **In the window: no proven move found** — and no score, under the same unfinished protocol stated above.\n- **History, printed not scored:** the 2009 Lockbourne optical-lab certification is the production-side item in Walmart's located record; no production move was located in the window.\n- **Printed, never scored:** the share of what Walmart sells that is made in the U.S. — not disclosed. (Outside rankings call Walmart America's largest importer by volume; import volume is not a moved U.S. factory and is never scored.)\n\n### Community Resilience — Not yet measurable\nThis pillar asks whether a company strengthens or weakens the communities it operates in over time. There is no fair way to measure that for any company yet — no public number exists that means the same thing for every company. So it is not scored for anyone, and it does not count against Walmart's coverage. It stays on the card so the gap is visible, not hidden.\n\n---\n\n## Printed fact — never scored\n**In September 2025, Walmart workers were counted among those receiving public food and health assistance in the states that reported employer data to the U.S. Government Accountability Office (GAO): 15,515 Walmart workers on SNAP (food assistance) and 16,055 on Medicaid (health coverage).** (GAO report GAO-26-108703, June 2026.) These counts come from 11 states, and each state lists only its 25 largest employers per program — so a company missing from a state's list may still have workers enrolled there. The counts also reflect how big an employer Walmart is and that benefit eligibility is based on household income, not one job's wage. **No national count exists**, and this fact is printed for context only — it is never part of any score.\n\n## The Overall, step by step\n1. Worker Standards → 43 × weight 16 = 688\n2. U.S. Workforce Commitment → 77 × weight 14 = 1,078\n3. Local Economic Contribution → 78 × weight 14 = 1,092\n4. Layoffs → 65 × weight 12 = 780\n5. CEO Pay → 0 × weight 10 = 0\n6. Lobbying → 34 × weight 7 = 238\n7. **688 + 1,078 + 1,092 + 780 + 0 + 238 = 3,876 ÷ 73 = 53** (73 = the weights of the scored pillars only)\n8. Coverage check: 5 of 7 ready measures scored (71%) → the coverage cap is 69. 53 is below it — the cap does not bind. (U.S. Workforce Commitment counts in the average above but not in coverage — Class W. The two harm-evidence measures are not yet measured by WeSee.)\n9. Layoff check: the layoff score is 65, so the layoff cap does not apply.\n10. **Overall: 53 — Mixed.** Equal weights: (43 + 77 + 78 + 65 + 0 + 34) ÷ 6 = 49.5 → 50 — Mixed, published beside the score per the Weights Defense.\n\n## Every factor — the whole design, nothing hidden\nWeSee's full design has 9 pillars and 25 scored factors (24 in the original design, plus H-1B Intensity, added 2026-10-22). Here is the state of every one for Walmart:\n- **Worker Standards:** Pay Level vs Living Wage — **scored (15)** · Pay Level vs U.S. Typical Pay — **scored (15)** · Worker's Share of Profit — **scored (100)** · Benefits — **not measurable yet** (no per-worker cost figure is filed by any company) · Safety — **not measurable as designed** (injury counts can't be compared fairly across company sizes yet) · Retention — **not measurable yet** (no turnover figure is filed in comparable form — Walmart's only filed retention-type figures mix countries or don't exist)\n- **U.S. Workforce Commitment:** Full-Time Employment — **scored (68)** · Domestic Hiring — **scored (76)** (Half A alone under the v1.1 consistency amendment — the year-change half needs a prior-year U.S. count Walmart doesn't file) · H-1B Intensity — **scored (94)** (Factor 4, U.S. Workforce Rule v1.2 — 3,233 USCIS approvals in FY2025 ÷ about 1.6M filed U.S. workers = 0.20 per 100) · Contractor Dependence — **not disclosed**\n- **Local Economic Contribution:** Domestic Investment — **scored (79)** · Domestic Suppliers — **not disclosed** · Local Employment Multiplier — **retired from the design 2026-10-14** (kept visible here; it was never in any math) · Taxes — **scored (74)** · U.S. R&D Investment — **not disclosed**\n- **Layoffs During High Profits:** Layoff Scale & Frequency — **scored (65)** (segment-share step not computable — the affected group's size is not disclosed)\n- **CEO Pay:** CEO Pay Ratio (realized) — **scored (0)**\n- **Outsourcing:** Contractor Use — **printed, never scored** (not disclosed) · Jobs Moved Abroad — **not yet measured by WeSee** (no proven move found in the window; the full search protocol is not yet complete, so no score is claimed)\n- **Community Resilience:** Community Investment — **not measurable yet** (no universal measure exists)\n- **Production Abroad:** Production Moved Abroad — **not yet measured by WeSee** (no proven move found in the window; protocol incomplete) · U.S.-Made Share — **printed, never scored** (not disclosed)\n- **Lobbying Activity:** Lobbying — **scored (34)** (federal lobbying + the PAC, added; corrected 2026-10-20 — see the pillar section)\n\n**Sources:** Walmart fiscal 2026 annual report (Form 10-K, SEC, filed March 13, 2026) · fiscal 2026 proxy statement (DEF 14A, SEC, filed April 23, 2026) · Senate lobbying disclosure database (2025 filings) and OpenSecrets · Federal Election Commission (Walmart PAC, 2023–24 cycle) · U.S. Department of Labor, Trade Adjustment Assistance determinations · state WARN notices (California, New Jersey) · company layoff announcements as reported by Reuters and the Wall Street Journal (May 2025, May 2026) · U.S. Government Accountability Office report GAO-26-108703 (June 2026) · MIT Living Wage Calculator (national benchmark) · U.S. Bureau of Labor Statistics (median pay) · USCIS H-1B Employer Data Hub (FY2025 employer file).\nFull working: see `WALMART_EVIDENCE_PACK.md` — every chain above, plus everything this run could NOT verify, listed openly.",
  "suppliedFactorMap": "# WeSee — The Full Factor Map (M's original design vs Methodology v1.x) — Walmart\nCompanion to FACTOR_MAP_AMAZON.md / FACTOR_MAP_COSTCO.md / FACTOR_MAP_APPLE.md — same\ndesign factors, same in-pillar weights, scored under the same locked rules. Built\n2026-10-16 from WALMART_EVIDENCE_PACK.md + WALMART_COMPANY_CARD.md only (all values\nread on the exact pages cited there on 2026-10-14: FY2026 10-K filed 2026-03-13,\naccession 0000104169-26-000055; FY2026 DEF 14A filed 2026-04-23, accession\n0001193125-26-173673; Senate LDA filings for calendar 2025; FEC committee C00093054;\nDOL TAA determinations; CA/NJ WARN; GAO-26-108703). No new value is introduced in this\nmap; where the pack/card record no filed figure for a factor, the map says so rather\nthan reaching for another source.\nUPDATED 2026-10-20 — Bundles A–D applied (M approved): the Finding W lobbying\ncorrection IS applied (Lobbying 34); Local Economic Contribution Rule v1.0 is LOCKED\n(Investment 79 + Taxes 74 → pillar 78, official); U.S. Workforce Rule v1.1 consistency\namendment scores Domestic Hiring on Half A alone (76) → pillar (68 × 35 + 76 × 25) ÷ 60\n= 71; Outsourcing + Production Abroad Rule v1.0 is LOCKED — Walmart's §8 protocol is\nPARTIAL, so both harm pillars are NOT YET MEASURED BY WESEE (the provisional 100s are\nwithdrawn). Card arithmetic re-verified: Overall 3,792 ÷ 73 = 51.9 → 52 — Mixed;\nequal weights 48.5 → 49 — Weak; coverage 5 of 7 ready (cap 69, not binding).\nUPDATED 2026-10-22 — U.S. Workforce Rule v1.2 applied (Factor 4 — H-1B Intensity,\nlocked by M 2026-10-22; count re-derived from the USCIS FY2025 employer file —\nH1B_USCIS_REDERIVATION_2026-10-22.md): 3,233 approvals (478 initial + 2,755\ncontinuing; Wal-Mart Associates Inc the only Walmart Schedule name with FY2025 rows)\n÷ ≈1,600,000 filed U.S. workers = 0.20 per 100 → factor 94 → pillar (68 × 35 + 76 × 25\n+ 94 × 20) ÷ 80 = 77.0 → 77; overall 3,876 ÷ 73 = 53.10 → 53 — Mixed; equal weights\n49.5 → 50 — Mixed; coverage 5 of 7 ready (cap 69, not binding). The Clause 5 printed\nline stands on the card.\n\n## Status key\n- **SCORED** — inside a locked rule today, with Walmart's real filed value.\n- **DISCLOSED, NOT SCORED** — Walmart publishes the value in a filing, but no locked rule\n  scores the factor today (a draft rule may compute it provisionally — labelled as such).\n- **DISCLOSED IN PART** — Walmart publishes part of what the factor's formula needs;\n  the rest is not filed, so the factor cannot be completed or scored.\n- **NOT DISCLOSED** — the data exists inside the company; Walmart does not publish it in\n  usable form in the filings read for this build.\n- **NOT MEASURABLE** — no company-level source exists for any company.\n- **REMOVED** — factor removed from the design by M (Training Investment, 2026-10-14).\n\n## Worker Standards (pillar weight 16%) — pillar score 43 (pay factor only, same basis as Amazon/Costco/Apple)\n| Factor | In-pillar weight | Status | Note |\n|---|---|---|---|\n| Living Wage | 40% | SCORED | Worker Pay Fairness Rule v1.3 (three questions): Q1 15 / Q2 15 / Q3 100 → 43, on the worldwide median $30,520 (hierarchy step (c) — Walmart files no U.S. median and no full-time median; flagged on the card). Dignity gate triggered (pay below the $49,246 living-wage benchmark); the computed 43 stands below the 49 cap either way |\n| Benefits | 20% | NOT DISCLOSED | No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none) |\n| Workplace Safety | 20% | NOT DISCLOSED | No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps) |\n| Employee Retention | 20% | NOT DISCLOSED | No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none) |\n\n## U.S. Workforce Commitment (14%) — pillar score 77 (U.S. Workforce Rule v1.2; scored on 3 of 4 factors; Class W — counts in the average, never in coverage)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Full-Time Employment | 35% | SCORED | Filed U.S. full-time share ≈68% → factor 68. Walmart files the share only as an approximation (\"approximately 68%,\" FY2026 10-K Item 1: ≈2.1M worldwide, ≈1.6M U.S., ≈92% hourly in the U.S.) — a filed measurement, not a target, so it scores exactly as filed (contrast Costco, whose ≥50% is a target and earns nothing) |\n| Domestic Hiring | 25% | SCORED | Half A is filed: ≈1,600,000 ÷ ≈2,100,000 = 76. Half B (scored-year net U.S. change) cannot be computed — Walmart files no prior-year U.S. count in this filing and no segment headcount table, and the rule never mixes counts across filings or substitutes the worldwide figure (M's D-2). Under the v1.1 consistency amendment (locked 2026-10-20; the JPMorgan precedent applied uniformly), the factor scores on Half A alone: 76. Growth-protection check: growth cannot be established from filed counts → no floor applies |\n| H-1B Intensity | 20% | SCORED | Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Wal-Mart Associates Inc — 478 initial + 2,755 continuing = 3,233 approvals (the only Walmart Schedule name with FY2025 rows) ÷ ≈1,600,000 filed U.S. workers (as filed, rounded) = 0.20 per 100 → on the §12 anchor table (0 → 100 · 0.5 → 85, straight-line) → factor 94. The Clause 5 printed line stands on the card |\n| Training Investment | 20% | REMOVED | Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors |\n| Contractor Dependence | 20% | NOT DISCLOSED | No contractor/agency headcount or share is filed |\n\n## Local Economic Contribution (14%) — pillar score 78 (Local Economic Contribution Rule v1.0, locked 2026-10-20)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Domestic Investment | 35% | SCORED | U.S. segment additions ARE filed (FY2026 10-K segment note: Walmart U.S. $20,157M + Sam's Club U.S. $914M = $21,071M ÷ $26,642M total → 79.1%) → factor 79 under the locked rule. The filer's \"Corporate and support\" $2,374M is assigned to no country in the filing; the rule counts it in the total and not in the U.S. part (decision D-4: the conservative reading) |\n| Domestic Suppliers | 25% | NOT DISCLOSED | No supplier-spend or purchases-by-origin split is filed |\n| U.S. R&D | 25% | NOT DISCLOSED | Walmart files no R&D line with a U.S. split |\n| Taxes | 15% | SCORED | U.S. provision IS filed (FY2026 10-K Note 8: current federal $2,128M + state/local $678M + deferred federal $2,010M + deferred state/local $294M = $5,110M on U.S. pre-tax $23,272M → 22.0%) → factor 74 under the locked rule. Pillar: (79 × 35 + 74 × 15) ÷ 50 = 78 |\n\n## Layoffs During High Profits (12%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Layoff Severity | 45% | SCORED | Inside Layoff Rule v1.0: ≈2,500 counted in the window (≈1,500 May 2025 + ≈1,000 May 2026) → 1,000–4,999 band −25; repetition (2 rounds) −10; segment share not computable (Walmart does not disclose the corporate/Global Tech headcount) → no extra deduction, nothing estimated |\n| Profitability Context | 30% | SCORED | Inside Layoff Rule v1.0: profitable in the layoff years (FY2025 net income attributable $19,436M; FY2026 $21,893M) — no losing-money reduction applies |\n| Buybacks | 25% | SCORED | Inside Layoff Rule v1.0: buybacks $4,494M in FY2025 and $8,088M in FY2026 fail the zero-buyback credit test; no severance disclosed at scale and no 60+ day transfer window disclosed → credits +0 |\nPillar score: **65** — all three of M's factors are in the rule, as inputs rather than separate weighted scores. Sensitivities printed on the card: 75 if the May 2026 round is read as relocation-first (below the mass-round line); 60 if the Feb 2025 consolidation program (748 verified so far) reached 1,000.\n\n## CEO-to-Worker Pay Ratio (10%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| CEO Compensation | 50% | SCORED | Inside CEO Pay Rule v1.1 (realized pay $76,019,842 — salary $1,500,000 + non-equity incentive $4,032,000 + all other $442,047 + stock vested $70,045,795 + $0 options exercised) |\n| Median Worker Compensation | 50% | SCORED | Inside CEO Pay Rule v1.1 (worldwide median $30,520, hierarchy step (c), flagged → ≈2,491:1 → 0; Walmart's own filed grant-date ratio 958:1 printed as a footnote, never scored — WeSee's realized ratio is higher than the filed one, the opposite direction from Amazon's) |\nPillar score: **0**. At ≈2,491:1 Walmart scores 0 under the locked scale and under the pending draft ruler v2 alike (500:1 and below unchanged in the draft; Decision C-1/C-2).\n\n## Jobs Moved Abroad (10%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; §8 protocol partial — search not yet exhaustive)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Offshore Workforce | 60% | DISCLOSED IN PART | Own-workforce split is filed approximately (≈1.6M U.S. / ≈0.5M international of ≈2.1M) — but the factor measures work placed offshore/outsourced, which is not the same figure; no offshore-workforce share as such is filed |\n| Outsourced Services | 40% | NOT DISCLOSED | Vendor/offshore services spend is not published |\nLocked-rule status (not a factor status): the locked harm-evidence rule\n(Outsourcing + Production Abroad Rule v1.0) searches proven U.S.-to-abroad moves instead\nof these design factors. For Walmart the §8 protocol is PARTIAL (pack §9: S-1 full\npetition-file pull and S-2 8-K sweep still outstanding; the FY2026 10-K was read in full\nand states no move; the two layoff rounds name no foreign destination) — no proven move\nwas located in the window (Oct 2023 – Oct 2026), but the locked rule activates a score\nonly on a completed, logged protocol, so both harm pillars are NOT YET MEASURED BY WESEE\n(the draft's provisional 100s are withdrawn, not carried). Historical TAA, printed never\nscored in the window: TA-W-95,112 Charlotte GBS certification exists (verified via the\nTA-W-95,113 termination notice; its basis text was NOT read — pack §11), TA-W-94,571 Derby\nGBS DENIED in full (work shifted domestically), TA-W-71,077 Lockbourne optical-lab\ncertification (2009; basis not read). Contractor share prints as the exposure line: not\ndisclosed.\n\n## Community Resilience (9%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Local Investment | 60% | NOT MEASURABLE | No company-level source exists for any company (Class U — excluded from coverage for everyone) |\n| Community Programs | 40% | NOT MEASURABLE | Program spend is self-reported marketing material, not a filing |\n\n## Production Moved Abroad (8%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; same incomplete protocol as Jobs Moved Abroad)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Domestic Production | 60% | NOT MEASURABLE | Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for Walmart the §8 protocol is partial, same as Jobs Moved Abroad above, so the pillar is not yet measured; the design factor itself stays not measurable) |\n| Imported Goods | 40% | NOT MEASURABLE | USITC counts category imports, not a company's imports. U.S.-made share of goods sold prints as the exposure line: not disclosed (outside rankings calling Walmart the largest U.S. importer by volume are context only — import volume is not a moved U.S. factory and is never scored) |\n\n## Lobbying Activity (7%) — pillar score 34 (corrected 2026-10-20, Bundle B — Finding W)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Lobbying Spend | 65% | SCORED | Lobbying Rule v1.1: the filed measure is the printed total on the OpenSecrets client summary — $7,840,000 for calendar 2025 (cross-checked: Walmart's self-filer LDA filings sum to $7,840,000). Finding W (LDA_LOBBYING_REBUILD_2026-10-15.md §5): the build's $10,726,000 added outside-firm payments ($2,886,000) ON TOP of the printed total those payments are a portion OF — a double-count, corrected 2026-10-20 |\n| Political Contributions | — | **SCORED** | M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Walmart PAC (WALMART INC. PAC FOR RESPONSIBLE GOVERNMENT, FEC C00093054) 2023–24 total disbursements $3,084,031. Final: $7,840,000 + $3,084,031 = $10,924,031 → 34. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple maps |\n\n## The count\n26 design factors = 25 active + 1 removed (Training Investment, removed by M 2026-10-14;\nH-1B Intensity added by U.S. Workforce Rule v1.2, 2026-10-22).\nOn the 25 active factors (final, 2026-10-22): **13 scored** inside locked rules (Living\nWage; Full-Time Employment; Domestic Hiring; H-1B Intensity; Domestic Investment; Taxes;\nLayoff Severity, Profitability Context, Buybacks; CEO Compensation, Median Worker\nCompensation; Lobbying Spend, Political Contributions) · **1 disclosed in part**\n(Offshore Workforce — approximate own-workforce U.S./international split filed,\noutsourced share not filed) · **7 not disclosed by Walmart** (Benefits, Workplace Safety,\nEmployee Retention, Contractor Dependence, Domestic Suppliers, U.S. R&D, Outsourced\nServices) · **4 not measurable for any company** (Community 2, Production 2 — the\nProduction pair's pillar is additionally not yet measured by WeSee, its §8 protocol\npartial).\n13 + 1 + 7 + 4 = 25. ✓\n\nThe honest contrast in one line: Walmart now scores 13 factors — it files a U.S. full-time\nshare, a U.S. workforce share, U.S. segment investment, and a U.S. tax provision — but it\nfiles them only as rounded approximations, and it withholds the prior-year U.S. count\nthat would let Domestic Hiring's growth half run, which is why that factor scores on\nHalf A alone and its coverage is 5 of 7 ready pillars."
} satisfies CompanyCard & { suppliedBuildFile: string; suppliedFactorMap: string };
