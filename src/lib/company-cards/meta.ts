// Meta Platforms (META) — supplied company card and factor map, built 2026-10-14, updated 2026-10-20.
// Data only: supplied scores and calculation text are never recomputed.
import type { CompanyCard } from "./amazon";

export const META_CARD: CompanyCard = {
  "overall": 49,
  "band": "Weak",
  "coverage": "Score from 5 of 7 ready measures. On the scored pillars Meta averages 65 before caps; because its layoff pillar is below 20 with cuts made in profitable years, the layoff rule caps the overall at 49. One pillar (Community Resilience) is not yet measurable for any company.",
  "period": "Period scored: FY2025 (year ended December 31, 2025) · Layoff window Oct 14, 2023 – Oct 14, 2026 · Scoring date: 2026-10-14 · Updated 2026-10-20 · Methodology v1.0",
  "overallBlock": {
    "title": "The overall score",
    "lines": [
      {
        "text": "1. Worker Standards: 79 × weight 16",
        "result": "1,264",
        "kind": "step"
      },
      {
        "text": "2. Local Economic Contribution: 94 × weight 14",
        "result": "1,316",
        "kind": "step"
      },
      {
        "text": "3. Layoffs: 15 × weight 12",
        "result": "180",
        "kind": "step"
      },
      {
        "text": "4. CEO Pay: 94 × weight 10",
        "result": "940",
        "kind": "step"
      },
      {
        "text": "5. Lobbying: 18 × weight 7",
        "result": "126",
        "kind": "step"
      },
      {
        "text": "= Add them up, divide by the total weight (59): 3,826 ÷ 59",
        "result": "65 before caps",
        "kind": "total"
      },
      {
        "text": "✓ Layoff cap checked: the layoff pillar is 15 — below 20 — and the cuts were made in profitable years, so the score may not pass 49 → Overall 49",
        "kind": "check"
      },
      {
        "text": "✓ Coverage cap checked: 5 of 7 ready pillars are scored (71%), so the coverage cap is 69 — not binding here (49 is lower).",
        "kind": "check"
      },
      {
        "text": "✓ Equal weights give 60 before caps — also capped at 49. Published next to the score, as the Weights Defense requires.",
        "kind": "check"
      },
      {
        "text": "(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2.)",
        "kind": "note"
      },
      {
        "text": "No company that keeps cutting thousands of jobs while profits rise can score above Weak overall.",
        "kind": "note"
      },
      {
        "text": "What could still change (labeled — arithmetic, not the official score): Meta's overall is now 65 before caps. If the two harm pillars later complete their search protocols clean, the pre-cap figure would rise to 73 — and still be capped at 49. Meta's ceiling today is set by the layoff rule, not by missing data.",
        "kind": "note"
      }
    ]
  },
  "pillars": {
    "worker_standards": {
      "score": 79,
      "sentence": "Its typical worker worldwide earns [[$388,200]] a year — far above the cost of living ($49,246) and the typical U.S. worker's pay ($62,608); against [[$766,631]] of profit per employee, the worker's share of the split is 34%.",
      "sentenceLinks": [
        {
          "text": "$388,200",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
        },
        {
          "text": "$766,631",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
        }
      ],
      "footnote": "Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company. The pay figure is worldwide — Meta files no U.S.-only median; flagged, per the rule's hierarchy.",
      "rule": "Worker Pay Fairness Rule v1.3; pay factor only",
      "blocks": [
        {
          "title": "QUESTION 1 — Can the worker live on the pay?",
          "lines": [
            {
              "text": "[[$388,200]] (worker earns) → $49,246 (worker needs to live on) → $7.88 earned per $1 needed",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "result": "score 100",
              "kind": "step"
            }
          ]
        },
        {
          "title": "QUESTION 2 — Is it what other Americans make?",
          "lines": [
            {
              "text": "[[$388,200]] (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 6.20",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "result": "score 100",
              "kind": "step"
            }
          ]
        },
        {
          "title": "QUESTION 3 — How is the money split?",
          "lines": [
            {
              "text": "First show where $766,631 comes from — it is one division, never present it bare:",
              "kind": "note"
            },
            {
              "text": "[[$60.5B]] (Meta's profit for the whole year) ÷ [[78,865]] (workers) = [[$766,631]] (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
              "links": [
                {
                  "text": "$60.5B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$766,631",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "step"
            },
            {
              "text": "Then the split:",
              "kind": "note"
            },
            {
              "text": "[[$388,200]] (worker gets) + [[$766,631]] (company keeps per worker) → worker's share 34%",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$766,631",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "result": "score 37",
              "kind": "step"
            }
          ]
        },
        {
          "title": "FINAL LINE",
          "lines": [
            {
              "text": "100 + 100 + 37 → ÷ 3",
              "result": "79",
              "kind": "total"
            },
            {
              "text": "Dignity gate: not triggered — pay is far above the national living wage.",
              "kind": "note"
            },
            {
              "text": "Pay figure note: [[$388,200]] is the worldwide median employee pay from Meta's 2026 proxy (all full-time and part-time employees other than the CEO, Oct 31, 2025). Meta does not disclose a U.S.-only or full-time-only median, so the rule's hierarchy uses the worldwide figure, flagged. Profit is company-wide — no company files U.S.-only profit; that limitation is part of the published rule.",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Sources: DEF 14A 2026 pay-ratio section; 10-K FY2025 (net income [[$60,458M]]; [[78,865]] employees); MIT Living Wage national benchmark; BLS 2025.",
              "links": [
                {
                  "text": "$60,458M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            }
          ]
        },
        {
          "title": "Printed fact — never scored",
          "lines": [
            {
              "text": "Meta Platforms does not appear in the U.S. GAO's tables of the [[25]] largest employers of workers on food stamps (SNAP) or Medicaid in any of the [[11]] reporting states (report GAO-26-108703, snapshot September 2025; Medicaid tables cover [[6]] states, SNAP tables [[9]]). The GAO lists only each state's 25 largest employers per program, so not appearing in a table does not mean zero. No national count exists.",
              "links": [
                {
                  "text": "25",
                  "url": "https://www.gao.gov/assets/890/888620.pdf"
                },
                {
                  "text": "11",
                  "url": "https://www.gao.gov/assets/890/888620.pdf"
                },
                {
                  "text": "6",
                  "url": "https://www.gao.gov/assets/890/888620.pdf"
                },
                {
                  "text": "9",
                  "url": "https://www.gao.gov/assets/890/888620.pdf"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Printed as a government-counted fact with its limits attached; never enters any score (counts measure company size as much as pay, the 11 states are not a national sample, and eligibility is household-based).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Worker Standards (pillar weight 16%) — pillar score 79 (pay factor only, same basis as Amazon/Costco/Apple/Walmart)",
          "lines": [
            {
              "text": "Living Wage · 40% · SCORED · Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 37 → 79, on the worldwide median [[$388,200]] (hierarchy step (c) — Meta files no U.S.-only and no full-time-only median; flagged on the card). Q3: profit per worker [[$60,458M]] ÷ [[78,865]] = [[$766,631]] → worker's share 34% → 37. Dignity gate not triggered",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$60,458M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$766,631",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Benefits · 20% · NOT DISCLOSED · No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)",
              "kind": "note"
            },
            {
              "text": "Workplace Safety · 20% · NOT DISCLOSED · No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)",
              "kind": "note"
            },
            {
              "text": "Employee Retention · 20% · NOT DISCLOSED · No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none; Retention is dormant under the U.S.-only principle)",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Worker Standards: Living Wage — scored (Q1 100 · Q2 100 · Q3 37 → 79) · Benefits — not disclosed · Workplace Safety — not disclosed · Employee Retention — not disclosed",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "living_wage": {
          "status": "scored",
          "note": "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 37 → 79, on the worldwide median [[$388,200]] (hierarchy step (c) — Meta files no U.S.-only and no full-time-only median; flagged on the card). Q3: profit per worker [[$60,458M]] ÷ [[78,865]] = [[$766,631]] → worker's share 34% → 37. Dignity gate not triggered",
          "links": [
            {
              "text": "$388,200",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "$60,458M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "78,865",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$766,631",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        },
        "benefits": {
          "status": "not_disclosed",
          "note": "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)"
        },
        "workplace_safety": {
          "status": "not_disclosed",
          "note": "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)"
        },
        "employee_retention": {
          "status": "not_disclosed",
          "note": "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none; Retention is dormant under the U.S.-only principle)"
        }
      }
    },
    "us_workforce_commitment": {
      "score": null,
      "status": "Not yet measured by WeSee",
      "sentence": "Meta reports [[78,865]] employees worldwide and does not file how many of them are in the United States — so this pillar cannot be scored from its filings.",
      "sentenceLinks": [
        {
          "text": "78,865",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
        }
      ],
      "footnote": "Pillar status under Insufficient-Data Rule v1.2: Class W — it counts in no company's coverage. The underlying fact stands: Meta does not file a U.S. headcount.",
      "blocks": [
        {
          "title": "U.S. Workforce Commitment — Not yet measured by WeSee",
          "lines": [
            {
              "text": "Meta files a worldwide headcount only ([[78,865]]); no U.S. headcount, full-time share, or contractor share is filed.",
              "links": [
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 6,384 H-1B petitions for Meta Platforms in FY2025 — 1,554 initial + 4,830 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" The H-1B Intensity factor scores only where a U.S. headcount is filed; Meta files none, so the factor does not score and this count is the standing record (Clause 7(iii)). Source: USCIS H-1B Employer Data Hub, FY2025 employer file (Meta Platforms Inc; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "U.S. Workforce Commitment (14%) — pillar NOT YET MEASURED BY WESEE (U.S. Workforce Rule v1.2; Class W — counts in no company's coverage; Meta files none of its inputs)",
          "lines": [
            {
              "text": "Full-Time Employment · 35% · NOT DISCLOSED · Meta files one worldwide total only ([[78,865]] employees at Dec 31, 2025) — no U.S. count and no full-time/part-time split",
              "links": [
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Domestic Hiring · 25% · NOT DISCLOSED · Needs a filed U.S. headcount (share + scored-year change); none is published. Worldwide context printed on the pack, never scored (M's D-2): headcount grew +6% in 2025, [[74,067]] → [[78,865]] — worldwide growth is not a U.S. figure",
              "links": [
                {
                  "text": "74,067",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Training Investment · 20% · REMOVED · Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors",
              "kind": "note"
            },
            {
              "text": "Contractor Dependence · 20% · NOT DISCLOSED · No contractor/agency headcount or share is filed",
              "kind": "note"
            },
            {
              "text": "H-1B Intensity · 20% · PRINTED, NOT SCORED · Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Meta Platforms Inc — 1,554 initial + 4,830 continuing = 6,384 approvals. The factor scores only where a U.S. headcount is filed (Clause 5); Meta files none, so the count prints on the card (Clause 5 line) and the factor does not score",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "U.S. Workforce Commitment: Full-Time Employment — not disclosed · Domestic Hiring — not disclosed · H-1B Intensity — printed, not scored (6,384 USCIS approvals, FY2025 — no U.S. headcount filed) · Contractor Dependence — not disclosed",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "full_time_employment": {
          "status": "not_disclosed",
          "note": "Meta files one worldwide total only ([[78,865]] employees at Dec 31, 2025) — no U.S. count and no full-time/part-time split",
          "links": [
            {
              "text": "78,865",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        },
        "domestic_hiring": {
          "status": "not_disclosed",
          "note": "Needs a filed U.S. headcount (share + scored-year change); none is published. Worldwide context printed on the pack, never scored (M's D-2): headcount grew +6% in 2025, [[74,067]] → [[78,865]] — worldwide growth is not a U.S. figure",
          "links": [
            {
              "text": "74,067",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "78,865",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        },
        "training_investment": {
          "status": "removed_by_m",
          "note": "Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors"
        },
        "contractor_dependence": {
          "status": "not_disclosed",
          "note": "No contractor/agency headcount or share is filed"
        },
        "h1b_intensity": {
          "status": "disclosed_not_scored",
          "note": "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Meta Platforms Inc — 1,554 initial + 4,830 continuing = 6,384 approvals. The factor scores only where a U.S. headcount is filed (Clause 5); Meta files none, so the count prints on the card (Clause 5 line) and the factor does not score"
        }
      }
    },
    "local_economic": {
      "score": 94,
      "sentence": "Its U.S. tax provision was [[28.0%]] of its U.S. pre-tax income in 2025 — a year that included a one-time [[$15.9B]] tax-law charge; its three-year rate is [[17.7%]].",
      "sentenceLinks": [
        {
          "text": "28.0%",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
        },
        {
          "text": "$15.9B",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
        },
        {
          "text": "17.7%",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
        }
      ],
      "rule": "Local Economic Contribution Rule v1.0, locked 2026-10-20",
      "blocks": [
        {
          "title": "Local Economic Contribution — 94 (Local Economic Contribution Rule v1.0, locked 2026-10-20)",
          "lines": [
            {
              "text": "TAXES — the only factor in this pillar Meta files in U.S. form:",
              "kind": "note"
            },
            {
              "text": "[[$22,339M]] (U.S. federal + state tax provision) → [[$79,644M]] (U.S. pre-tax income) → [[28.0%]] → on the locked scale (25% = 85 · 30% = 100) → 94",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
              "links": [
                {
                  "text": "$22,339M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$79,644M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "28.0%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "result": "94",
              "kind": "step"
            },
            {
              "text": "Printed with the number: 2025 includes a one-time [[$15.9B]] charge from the 2025 tax-law change ([[$14.0B]] of it a valuation allowance) — it raises this year's rate. The same calculation gives [[8.4%]] for 2024 and [[13.1%]] for 2023; the three-year pooled rate is [[17.7%]], which would score 54 on the same scale. The locked rule resolves the period question: the scored year governs (decision D-3) — so the pillar uses [[28.0%]].",
              "links": [
                {
                  "text": "$15.9B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$14.0B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "8.4%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "13.1%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "17.7%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "28.0%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "NOT DISCLOSED under the rule: the year's U.S. share of investment additions (Meta files investment by business segment, not by country; its U.S. long-lived assets are [[88.1%]] of the total — a stock figure, context only), domestic supplier share, U.S. R&D share.",
              "links": [
                {
                  "text": "88.1%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "FACTOR LINE: Taxes 94 is the only scored factor → pillar = 94",
              "result": "94",
              "kind": "total"
            }
          ]
        },
        {
          "title": "Local Economic Contribution (14%) — pillar score 94 (Local Economic Contribution Rule v1.0, locked 2026-10-20; Taxes alone)",
          "lines": [
            {
              "text": "Domestic Investment · 35% · NOT DISCLOSED · Meta files investment by business segment (Family of Apps / Reality Labs), not by country — no year's U.S. additions flow is filed. U.S. long-lived assets [[$173,390M]] ÷ [[$196,804M]] = [[88.1%]] is printed on the pack/card as context only — a stock figure, which the draft rule does not score",
              "links": [
                {
                  "text": "$173,390M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$196,804M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "88.1%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Domestic Suppliers · 25% · NOT DISCLOSED · No supplier-spend or purchases-by-origin split is filed",
              "kind": "note"
            },
            {
              "text": "U.S. R&D · 25% · NOT DISCLOSED · No R&D line with a U.S. split is filed",
              "kind": "note"
            },
            {
              "text": "Taxes · 15% · SCORED · U.S. provision IS filed (FY2025 10-K Note 14: current federal [[$2,820M]] + deferred federal [[$18,379M]] + current state [[$745M]] + deferred state [[$395M]] = [[$22,339M]] on U.S. pre-tax [[$79,644M]] → [[28.0%]]) → factor 94 under the locked rule = the pillar (Taxes alone). Printed with the number: 2025 includes a one-time [[$15.93B]] tax-law (OBBBA) charge incl. a [[$14.03B]] valuation allowance; the pooled 3-year rate is [[17.7%]], which would score 54 on the same scale (the locked rule scores the scored year — Decision D-3)",
              "links": [
                {
                  "text": "$2,820M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$18,379M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$745M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$395M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$22,339M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$79,644M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "28.0%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$15.93B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$14.03B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "17.7%",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Local Economic Contribution: Domestic Investment — not disclosed · Domestic Suppliers — not disclosed · Taxes — scored (94) · U.S. R&D Investment — not disclosed",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "domestic_investment": {
          "status": "not_disclosed",
          "note": "Meta files investment by business segment (Family of Apps / Reality Labs), not by country — no year's U.S. additions flow is filed. U.S. long-lived assets [[$173,390M]] ÷ [[$196,804M]] = [[88.1%]] is printed on the pack/card as context only — a stock figure, which the draft rule does not score",
          "links": [
            {
              "text": "$173,390M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$196,804M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "88.1%",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        },
        "domestic_suppliers": {
          "status": "not_disclosed",
          "note": "No supplier-spend or purchases-by-origin split is filed"
        },
        "us_rd": {
          "status": "not_disclosed",
          "note": "No R&D line with a U.S. split is filed"
        },
        "taxes": {
          "status": "scored",
          "note": "U.S. provision IS filed (FY2025 10-K Note 14: current federal [[$2,820M]] + deferred federal [[$18,379M]] + current state [[$745M]] + deferred state [[$395M]] = [[$22,339M]] on U.S. pre-tax [[$79,644M]] → [[28.0%]]) → factor 94 under the locked rule = the pillar (Taxes alone). Printed with the number: 2025 includes a one-time [[$15.93B]] tax-law (OBBBA) charge incl. a [[$14.03B]] valuation allowance; the pooled 3-year rate is [[17.7%]], which would score 54 on the same scale (the locked rule scores the scored year — Decision D-3)",
          "links": [
            {
              "text": "$2,820M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$18,379M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$745M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$395M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$22,339M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$79,644M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "28.0%",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$15.93B",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$14.03B",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "17.7%",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        }
      }
    },
    "layoffs_high_profits": {
      "score": 15,
      "sentence": "It cut about 14,400 jobs across five rounds in 2025–26 — including 8,000 at once in May 2026 — while profits stayed above $60B a year.",
      "rule": "Layoff Rule v1.0",
      "blocks": [
        {
          "title": "Layoffs — 15 (Layoff Rule v1.0)",
          "lines": [
            {
              "text": "● Start",
              "result": "100",
              "kind": "step"
            },
            {
              "text": "− Jobs cut in the last 3 years, all rounds added: about 14,400 → in the 10,000–24,999 band",
              "result": "−60",
              "kind": "step"
            },
            {
              "text": "− Biggest round as a share of the company: the May 2026 round was announced as about 10% of the whole workforce (8,000 of [[78,865]] workers = 10.1%)",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
              "links": [
                {
                  "text": "78,865",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "result": "−15",
              "kind": "step"
            },
            {
              "text": "− Repeated mass rounds (1,000+ jobs): three — Feb 2025 (~3,600), Jan 2026 (~1,500), May 2026 (~8,000)",
              "result": "−15",
              "kind": "step"
            },
            {
              "text": "+ Credit: severance terms disclosed at scale — the 10-K describes the severance package and the May 2026 round's terms were announced (16+ weeks of base pay, 18 months of healthcare)",
              "result": "+5",
              "kind": "step"
            },
            {
              "text": "=",
              "result": "15",
              "kind": "total"
            },
            {
              "text": "The rounds: ~3,600 (Feb 2025, announced as ~5% of staff) · ~600 (Oct 2025) · ~1,500 (Jan 2026, Reality Labs) · ~700 (Mar 2026) · ~8,000 (May 2026). WARN notices verify the May 2026 round state by state (3,196 Bay Area positions in California WARN filings); state slices are parts of the announced rounds, never added on top. Every round fell in a profitable year (2024 profit [[$62.4B]]; 2025 profit [[$60.5B]]), so no loss-year discount applies. The 2022–23 rounds (11,000 + 10,000) are outside the 3-year window — pattern history only.",
              "links": [
                {
                  "text": "$62.4B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$60.5B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Honest notes printed with this pillar: the Feb 2025 count is the company's announced ~5% applied to its filed headcount — Meta never filed an exact count. The Jan 2026 round is not charged a segment deduction because Reality Labs' size is reported (~15,000), not filed; on that reported size it would be 10% of its segment and the pillar would be 0. The +5 credit is a judgment call: Meta shows one of the rule's three credit behaviors (severance), not the transfer window, and it bought back [[$26.3B]] of stock in 2025 — both printed here.",
              "links": [
                {
                  "text": "$26.3B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            }
          ]
        },
        {
          "title": "Layoffs During High Profits (12%)",
          "lines": [
            {
              "text": "Layoff Severity · 45% · SCORED · Inside Layoff Rule v1.0: ≈14,400 counted in the window (Feb 2025 ≈3,600 + Oct 2025 ≈600 + Jan 2026 ≈1,500 + Mar 2026 ≈700 + May 2026 ≈8,000) → 10,000–24,999 band −60; biggest round ≈10.1% of the company (8,000 ÷ 78,865) → −15; repetition (3 mass rounds) → −15",
              "kind": "note"
            },
            {
              "text": "Profitability Context · 30% · SCORED · Inside Layoff Rule v1.0: every round fell in a profitable year (FY2024 net income [[$62,360M]]; FY2025 [[$60,458M]]) — no loss-year discount applies",
              "links": [
                {
                  "text": "$62,360M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                },
                {
                  "text": "$60,458M",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Buybacks · 25% · SCORED · Inside Layoff Rule v1.0: buybacks [[$26.26B]] in 2025 fail the zero-buyback credit test; severance described at scale in the 10-K and announced for the May 2026 round (16+ weeks base + 18 months healthcare) → credit +5 (one of three credit behaviours; flagged on the pack as a judgment call)",
              "links": [
                {
                  "text": "$26.26B",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Pillar score: 15 — all three of M's factors are in the rule, as inputs rather than separate weighted scores. Pillar below 20 in profitable years → the overall layoff cap of 49 binds. Honest notes on the card/pack: the Feb 2025 count is the announced ~5% applied to filed headcount (no exact count filed); the Jan 2026 Reality Labs round takes no segment deduction because the segment's ~15,000 size is reported, not filed (on that size it would be −15 more → pillar 0).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Layoffs During High Profits: Layoff Scale & Frequency — scored (15) (segment-share step not computable — the affected group's size is not disclosed)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "layoff_severity": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: ≈14,400 counted in the window (Feb 2025 ≈3,600 + Oct 2025 ≈600 + Jan 2026 ≈1,500 + Mar 2026 ≈700 + May 2026 ≈8,000) → 10,000–24,999 band −60; biggest round ≈10.1% of the company (8,000 ÷ 78,865) → −15; repetition (3 mass rounds) → −15"
        },
        "profitability": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: every round fell in a profitable year (FY2024 net income [[$62,360M]]; FY2025 [[$60,458M]]) — no loss-year discount applies",
          "links": [
            {
              "text": "$62,360M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            },
            {
              "text": "$60,458M",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        },
        "buybacks": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: buybacks [[$26.26B]] in 2025 fail the zero-buyback credit test; severance described at scale in the 10-K and announced for the May 2026 round (16+ weeks base + 18 months healthcare) → credit +5 (one of three credit behaviours; flagged on the pack as a judgment call)",
          "links": [
            {
              "text": "$26.26B",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
            }
          ]
        }
      }
    },
    "ceo_pay_ratio": {
      "score": 94,
      "sentence": "Its CEO actually took home [[$25.1M]] in 2025 — 65 times the typical worker's [[$388,200]]; almost all of it is security costs, not salary or stock.",
      "sentenceLinks": [
        {
          "text": "$25.1M",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
        },
        {
          "text": "$388,200",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
        }
      ],
      "rule": "CEO Pay Rule v2.0, realized pay — what he actually took home",
      "blocks": [
        {
          "title": "CEO Pay — 94 (CEO Pay Rule v2.0, realized pay — what he actually took home)",
          "lines": [
            {
              "text": "1. Salary",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm",
              "result": "$1",
              "kind": "step"
            },
            {
              "text": "2. Bonus actually paid",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm",
              "result": "$0",
              "kind": "step"
            },
            {
              "text": "3. Stock that vested in 2025",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm",
              "result": "$0",
              "kind": "step"
            },
            {
              "text": "4. Other pay — almost all security: protection at his homes and while traveling, a [[$14,000,000]] yearly security allowance, and personal aircraft use",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm",
              "links": [
                {
                  "text": "$14,000,000",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "result": "$25,125,903",
              "kind": "step"
            },
            {
              "text": "= Total actually taken home",
              "result": "$25,125,904",
              "kind": "total"
            },
            {
              "text": "÷ Typical worker's pay [[$388,200]] → 65× more → on the published scale (50× = 100 · 100× = 80)",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "result": "94",
              "kind": "total"
            },
            {
              "text": "On paper Meta reports [[65:1]] — for once nearly the same as the realized figure, because the CEO was granted no stock in 2025 and none vested. The headline uses the realized pay, per the rule.",
              "links": [
                {
                  "text": "65:1",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "(Under the superseded v1.1 scale this same ratio scored 74; v2.0 recalibrated the top end of the ruler — see CEO Pay Rule v2.0 changelog.)",
              "kind": "note"
            },
            {
              "text": "Source: DEF 14A 2026 — Summary Compensation Table and Stock Vested table.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "CEO-to-Worker Pay Ratio (10%)",
          "lines": [
            {
              "text": "CEO Compensation · 50% · SCORED · Inside CEO Pay Rule v2.0 (realized pay [[$25,125,904]] — salary $1 + bonus $0 + stock vested $0 + options $0 + all other [[$25,125,903]], almost all security: ≈[[$8,498,301]] residence/travel security + [[$14,000,000]] security allowance + ≈[[$2,467,562]] personal aircraft + [[$160,040]] facilities)",
              "links": [
                {
                  "text": "$25,125,904",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$25,125,903",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$8,498,301",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$14,000,000",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$2,467,562",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "$160,040",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Median Worker Compensation · 50% · SCORED · Inside CEO Pay Rule v2.0 (worldwide median [[$388,200]], hierarchy step (c), flagged → [[64.7:1]] → 94 under the v2.0 anchors (74 under the superseded v1.1 scale); Meta's own filed grant-date ratio [[65:1]] printed as a footnote, never scored — here the filed and realized ratios nearly coincide because the CEO was granted and vested no stock in 2025)",
              "links": [
                {
                  "text": "$388,200",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "64.7:1",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                },
                {
                  "text": "65:1",
                  "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
                }
              ],
              "kind": "note"
            },
            {
              "text": "Pillar score: 94 (CEO Pay Rule v2.0; 74 under the superseded v1.1 scale).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "CEO Pay: CEO Pay Ratio (realized) — scored (94)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "ceo_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v2.0 (realized pay [[$25,125,904]] — salary $1 + bonus $0 + stock vested $0 + options $0 + all other [[$25,125,903]], almost all security: ≈[[$8,498,301]] residence/travel security + [[$14,000,000]] security allowance + ≈[[$2,467,562]] personal aircraft + [[$160,040]] facilities)",
          "links": [
            {
              "text": "$25,125,904",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "$25,125,903",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "$8,498,301",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "$14,000,000",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "$2,467,562",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "$160,040",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            }
          ]
        },
        "median_worker_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v2.0 (worldwide median [[$388,200]], hierarchy step (c), flagged → [[64.7:1]] → 94 under the v2.0 anchors (74 under the superseded v1.1 scale); Meta's own filed grant-date ratio [[65:1]] printed as a footnote, never scored — here the filed and realized ratios nearly coincide because the CEO was granted and vested no stock in 2025)",
          "links": [
            {
              "text": "$388,200",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "64.7:1",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            },
            {
              "text": "65:1",
              "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
            }
          ]
        }
      }
    },
    "outsourcing_exposure": {
      "score": null,
      "status": "Not yet measured by WeSee",
      "sentence": "Searches of the federal record found no proven case of Meta moving U.S. work abroad. The rule for this pillar is locked, but the full search protocol is not finished for Meta, so it carries no score yet — a clean search is not a score until the protocol completes and is logged.",
      "blocks": [
        {
          "title": "Jobs Moved Abroad — Not yet measured by WeSee",
          "lines": [
            {
              "text": "One question: has this company been proven — by a government determination, its own filing, or a closure notice paired with its own words — to have moved American jobs abroad? Foreign growth alone never counts; a closure alone is not proof.",
              "kind": "note"
            },
            {
              "text": "In the window: no proven move was found in the federal record searches run on 2026-10-14 (the TAA channel is closed: the program has issued no determinations since June 30, 2022). A search result is not a score; scoring starts when the full protocol is completed and logged. Full findings: META_EVIDENCE_PACK.md §8.",
              "kind": "step"
            }
          ]
        },
        {
          "title": "Jobs Moved Abroad (10%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; §8 search protocol incomplete for Meta, NO score claimed)",
          "lines": [
            {
              "text": "Offshore Workforce · 60% · NOT DISCLOSED · No workforce geography is filed (Meta files a worldwide headcount only); no offshore-workforce share as such is filed",
              "kind": "note"
            },
            {
              "text": "Outsourced Services · 40% · NOT DISCLOSED · Vendor/offshore services spend is not published",
              "kind": "note"
            },
            {
              "text": "Locked-rule status (not a factor status): the locked harm-evidence rule (Outsourcing + Production Abroad Rule v1.0, locked 2026-10-20) searches proven U.S.-to-abroad moves instead of these design factors. For Meta the protocol is INCOMPLETE (pack §8: searches run 2026-10-14 on DOL/Federal Register/web indexes; the TAA petition front-end no longer exists — program in phase-out termination since July 1, 2022, PAWS decommissioned May 14, 2025) — no proven move was located in the steps run (no TAA determination for Facebook/Meta found; no SEC filing or announcement stating a U.S.-to-foreign move; 2026 \"location strategy\" reporting and India-hiring commentary recorded as allegations/context only), and NO score — provisional or otherwise — is claimed.",
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
          "status": "not_disclosed",
          "note": "No workforce geography is filed (Meta files a worldwide headcount only); no offshore-workforce share as such is filed"
        },
        "outsourced_services": {
          "status": "not_disclosed",
          "note": "Vendor/offshore services spend is not published"
        }
      }
    },
    "community_resilience": {
      "score": null,
      "status": "Not yet measurable",
      "sentence": "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Meta's coverage.",
      "blocks": [
        {
          "title": "Community Resilience — Not yet measurable",
          "lines": [
            {
              "text": "This pillar asks whether a company strengthens or weakens the communities it operates in over time. There is no fair way to measure that for any company yet — no public number exists that means the same thing for every company. So it is not scored for anyone, and it does not count against Meta's coverage. It stays on the card so the gap is visible, not hidden.",
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
      }
    },
    "production_abroad": {
      "score": null,
      "status": "Not yet measured by WeSee",
      "sentence": "Same status as Jobs Moved Abroad: no proven case of U.S. production moved abroad was found in the searches run; locked rule, unfinished protocol, no score yet.",
      "blocks": [
        {
          "title": "Production Moved Abroad — Not yet measured by WeSee",
          "lines": [
            {
              "text": "One question: has this company been proven to have moved American production abroad? (Goods it was always going to import are not \"moved production\"; the rule waits for a proven move.)",
              "kind": "note"
            },
            {
              "text": "In the window: no proven move found — and no score, under the same unfinished protocol stated above.",
              "kind": "step"
            }
          ]
        },
        {
          "title": "Production Moved Abroad (8%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; same incomplete search as Jobs Moved Abroad, NO score claimed)",
          "lines": [
            {
              "text": "Domestic Production · 60% · NOT MEASURABLE · Census/USITC count category units, not a company's units (design classification; the draft harm rule would re-found this pillar on proven production moves — for Meta that search is incomplete, same protocol as Outsourcing above, and no proven move of U.S. production abroad was located; Meta's production is performed by third-party contract manufacturers abroad by design, but no U.S.-production baseline is filed and operating abroad is not itself a moved U.S. job)",
              "kind": "note"
            },
            {
              "text": "Imported Goods · 40% · NOT MEASURABLE · USITC counts category imports, not a company's imports",
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
          "note": "Census/USITC count category units, not a company's units (design classification; the draft harm rule would re-found this pillar on proven production moves — for Meta that search is incomplete, same protocol as Outsourcing above, and no proven move of U.S. production abroad was located; Meta's production is performed by third-party contract manufacturers abroad by design, but no U.S.-production baseline is filed and operating abroad is not itself a moved U.S. job)"
        },
        "imported_goods": {
          "status": "not_measurable",
          "note": "USITC counts category imports, not a company's imports"
        }
      }
    },
    "lobbying_activity": {
      "score": 18,
      "sentence": "It spent $26.3M lobbying the federal government in 2025 — the most of any company — plus [[$333,503]] of PAC spending in the 2024 election cycle.",
      "sentenceLinks": [
        {
          "text": "$333,503",
          "url": "https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024"
        }
      ],
      "rule": "Lobbying Rule v1.1 — lobbying + PAC, summed once",
      "blocks": [
        {
          "title": "Lobbying — 18 (Lobbying Rule v1.1 — lobbying + PAC, summed once)",
          "lines": [
            {
              "text": "1. Reported lobbying the federal government in 2025",
              "result": "$26,290,000",
              "kind": "step"
            },
            {
              "text": "2. Its PAC's spending in the 2023–24 election cycle",
              "url": "https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024",
              "result": "$333,503",
              "kind": "step"
            },
            {
              "text": "= $26,623,503 on the published scale ($20M = 20 · $50M = 10)",
              "result": "18",
              "kind": "total"
            },
            {
              "text": "Limitation printed with the score: federal lobbying and federal PAC spending only — state lobbying and trade-group spending are not counted.",
              "kind": "note"
            },
            {
              "text": "Sources: OpenSecrets client summary, Meta (id D000033563), cycle 2025; OpenSecrets — META PLATFORMS, INC. PAC (FEC C00502906), 2023–24 cycle.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Lobbying Activity (7%) — pillar score 18",
          "lines": [
            {
              "text": "Lobbying Spend · 65% · SCORED · Lobbying Rule v1.1: $26,290,000 federal lobbying, calendar 2025 (OpenSecrets client summary, Meta, id D000033563; read on the companion client page and corroborated to the dollar by Bloomberg's LDA analysis — fetch limitation disclosed in pack §4). The most Meta has reported, and the largest single-company total of 2025 in that analysis",
              "kind": "note"
            },
            {
              "text": "Political Contributions · — · SCORED · M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Meta PAC (META PLATFORMS, INC. PAC, FEC C00502906) 2023–24 total spent [[$333,503]]. Total: $26,290,000 + $333,503 = $26,623,503 → 18. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple/Walmart maps",
              "links": [
                {
                  "text": "$333,503",
                  "url": "https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024"
                }
              ],
              "kind": "note"
            }
          ]
        },
        {
          "title": "Every factor — the whole design, nothing hidden",
          "lines": [
            {
              "text": "Lobbying Activity: Lobbying — scored (18) (federal lobbying + the PAC, added)",
              "kind": "step"
            }
          ]
        }
      ],
      "factors": {
        "lobbying_spend": {
          "status": "scored",
          "note": "Lobbying Rule v1.1: $26,290,000 federal lobbying, calendar 2025 (OpenSecrets client summary, Meta, id D000033563; read on the companion client page and corroborated to the dollar by Bloomberg's LDA analysis — fetch limitation disclosed in pack §4). The most Meta has reported, and the largest single-company total of 2025 in that analysis"
        },
        "political_contributions": {
          "status": "scored",
          "note": "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Meta PAC (META PLATFORMS, INC. PAC, FEC C00502906) 2023–24 total spent [[$333,503]]. Total: $26,290,000 + $333,503 = $26,623,503 → 18. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple/Walmart maps",
          "links": [
            {
              "text": "$333,503",
              "url": "https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024"
            }
          ]
        }
      }
    }
  },
  "sources": [
    {
      "label": "Form 10-K FY2025 (filed 2026-01-29, accession 0001628280-26-003942)",
      "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
    },
    {
      "label": "DEF 14A 2026 (filed 2026-04-16, accession 0001628280-26-025532)",
      "url": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm"
    },
    {
      "label": "OpenSecrets — Meta, federal lobbying client (id D000033563), cycle 2025"
    },
    {
      "label": "OpenSecrets — META PLATFORMS, INC. PAC (FEC C00502906), 2023–24 cycle summary",
      "url": "https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024"
    },
    {
      "label": "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025 (printed fact, not scored)",
      "url": "https://www.gao.gov/assets/890/888620.pdf"
    },
    {
      "label": "MIT Living Wage Calculator — national benchmark: average of all 50 state pages: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md)."
    },
    {
      "label": "BLS median full-time weekly earnings 2025: $1,204/week → $62,608/year."
    },
    {
      "label": "Layoff announcements and WARN records as itemized in META_EVIDENCE_PACK.md §3."
    },
    {
      "label": "USCIS H-1B Employer Data Hub, FY2025 employer file (Meta Platforms Inc; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md)."
    }
  ],
  "rules": "Methodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.2 · Weights Defense v1.0 · Score Bands v1.0 · Show-Your-Work Spec v1.0 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0"
};
