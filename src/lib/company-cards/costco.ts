// Costco (COST) — verbatim supplied BUILD FILE v1.0, updated 2026-10-20.
// Data only; no scores are generated or estimated.
import type { CompanyCard } from "./amazon";

export const COSTCO_CARD = {
  "overall": 93,
  "band": "Strong",
  "coverage": "7 of 7 ready pillars scored — every pillar WeSee has a finished measurement for. U.S. Workforce Commitment also scores (96) and counts in the average, but is not counted in any company's coverage while its measurement is unfinished (Class W). One pillar (Community Resilience) is not yet measurable for any company. No cap applies.",
  "period": "Period scored: FY2025 (52 weeks ended Aug 31, 2025) · Scoring date: 2026-10-11 · Updated 2026-10-24 · Methodology v1.0",
  "overallBlock": {
    "title": "The overall score",
    "lines": [
      {
        "text": "1. Worker Standards: 90 × weight 16",
        "result": "1,440",
        "kind": "step"
      },
      {
        "text": "2. U.S. Workforce Commitment: 96 × weight 14",
        "result": "1,344",
        "kind": "step"
      },
      {
        "text": "3. Local Economic Contribution: 76 × weight 14",
        "result": "1,064",
        "kind": "step"
      },
      {
        "text": "4. Layoffs: 100 × weight 12",
        "result": "1,200",
        "kind": "step"
      },
      {
        "text": "5. CEO Pay: 88 × weight 10",
        "result": "880",
        "kind": "step"
      },
      {
        "text": "6. Jobs Moved Abroad: 100 × weight 10",
        "result": "1,000",
        "kind": "step"
      },
      {
        "text": "7. Production Moved Abroad: 100 × weight 8",
        "result": "800",
        "kind": "step"
      },
      {
        "text": "8. Lobbying: 100 × weight 7",
        "result": "700",
        "kind": "step"
      },
      {
        "text": "= Add them up, divide by the total weight (91): 8,428 ÷ 91",
        "result": "Overall 93 — Strong",
        "kind": "total"
      },
      {
        "text": "✓ Coverage cap checked: 7 of 7 ready pillars are scored (100%), so no coverage cap applies. (U.S. Workforce Commitment counts in the average above but not in coverage — Class W.)",
        "kind": "check"
      },
      {
        "text": "✓ Layoff cap checked: the layoff pillar is 100 — not triggered.",
        "kind": "check"
      },
      {
        "text": "✓ Equal weights give (90 + 96 + 76 + 100 + 88 + 100 + 100 + 100) ÷ 8 = 93.75 → 94 — Strong. Published next to the score, as the Weights Defense requires.",
        "kind": "check"
      },
      {
        "text": "(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2.)",
        "kind": "note"
      }
    ]
  },
  "pillars": {
    "worker_standards": {
      "score": 90,
      "sentence": "Its typical full-time worker earns [[$66,262]] — above the cost of living, and above the $62,608 the typical American worker makes.",
      "sentenceLinks": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }],
      "title": "Worker Standards",
      "factors": {
        "living_wage": {
          "status": "scored",
          "note": "Worker Pay Fairness Rule v1.3 (three questions): Costco 90"
        },
        "benefits": {
          "status": "disclosed_not_scored",
          "note": "10-K describes expansive U.S. benefits qualitatively; no comparable filed numbers to score"
        },
        "workplace_safety": {
          "status": "not_disclosed",
          "note": "OSHA publishes per-establishment data, no company-wide filed rate"
        },
        "employee_retention": {
          "status": "disclosed_not_scored",
          "note": "≈94% retention, U.S./Canada, employees with 1+ year of service (FY2025 10-K) — Amazon does not disclose this"
        }
      },
      "footnote": "Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company.",
      "rule": "Worker Pay Fairness Rule v1.3; pay factor only",
      "blocks": [
        {
          "title": "QUESTION 1 — Can the worker live on the pay?",
          "lines": [
            {
              "text": "[[$66,262]] (worker earns) → $49,246 (worker needs to live on) → $1.35 earned per $1 needed",
              "result": "score 94",
              "kind": "step",
              "links": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            }
          ]
        },
        {
          "title": "QUESTION 2 — Is it what other Americans make?",
          "lines": [
            {
              "text": "[[$66,262]] (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 1.06",
              "result": "score 75",
              "kind": "step",
              "links": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            }
          ]
        },
        {
          "title": "QUESTION 3 — How is the money split?",
          "lines": [
            {
              "text": "First show where $23,751 comes from — it is one division, never present it bare:",
              "kind": "note"
            },
            {
              "text": "[[$8.1B]] (Costco's profit for the whole year) ÷ [[341,000]] (workers) = $23,751 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)",
              "kind": "note",
              "links": [{ "text": "$8.1B", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "341,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "Then the split:",
              "kind": "note"
            },
            {
              "text": "[[$66,262]] (worker gets) + $23,751 (company keeps per worker) → worker's share 74%",
              "result": "score 100",
              "kind": "step",
              "links": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            }
          ]
        },
        {
          "title": "FINAL LINE",
          "lines": [
            {
              "text": "FINAL LINE: 94 + 75 + 100 → ÷ 3",
              "result": "90",
              "kind": "total"
            },
            {
              "text": "Dignity gate: not triggered — pay is above the national living wage.",
              "kind": "note"
            },
            {
              "text": "Pay figure note: [[$66,262]] is the full-time median from Costco's FY2025 proxy (its \"considered population\" excludes [[seven]] small countries; Costco does not disclose a U.S.-only full-time median). The same figure is used in all three questions and in the CEO ratio.",
              "kind": "note",
              "links": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "seven", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            },
            {
              "text": "Context (never scored): U.S. average hourly rate ≈ [[$32.00]] at the end of 2025; starting wage at least [[$20.00/hr]] (U.S./Canada); retention ≈ [[94%]] in the U.S. and Canada for workers with a year or more of service.",
              "kind": "note",
              "links": [{ "text": "$32.00", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$20.00/hr", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "94%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "PRINTED FACT — NOT SCORED (M's decision 2026-10-11; standard for EVERY company card):",
              "kind": "note"
            },
            {
              "text": "\"In Washington — the only one of the 11 reporting states where Costco appears in the GAO's top-25 employer tables — [[256]] of Costco's workers received food stamps (SNAP) in September 2025 (U.S. GAO, report GAO-26-108703). Costco does not appear in any of the report's Medicaid top-25 tables. The GAO lists only each state's 25 largest employers per program, so not appearing in a table does not mean zero. No national count exists.\"",
              "kind": "note",
              "links": [{ "text": "256", "url": "https://www.gao.gov/assets/890/888620.pdf" }]
            },
            {
              "text": "Printed as a government-counted fact with its limits attached; never enters any score (counts measure company size as much as pay, the 11 states are not a national sample, and eligibility is household-based).",
              "kind": "note"
            },
            {
              "text": "Sources: DEF 14A FY2025 pay-ratio section; MIT Living Wage; 10-K FY2025 (net income [[$8,099M]]; [[341,000]] employees).",
              "kind": "note",
              "links": [{ "text": "$8,099M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "341,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            }
          ]
        }
      ]
    },
    "us_workforce_commitment": {
      "score": 96,
      "sentence": "Costco reports [[223,000]] workers in the United States and added [[4,000]] U.S. workers in the scored year ([[+1.83%]]) — under the trend rule, a company that grows its U.S. workforce scores high, so its Domestic Hiring factor scores [[94]]. USCIS approved 89 H-1B petitions for Costco in fiscal 2024 — 0.04 for every 100 U.S. workers, near-zero measured use — and that factor scores 99.",
      "sentenceLinks": [{ "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "4,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "+1.83%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "94", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }],
      "title": "U.S. Workforce Commitment",
      "factors": {
        "full_time_employment": {
          "status": "disclosed_in_part",
          "note": "10-K states a target of at least [[50%]] of the base being full-time; the actual share is not stated",
          "links": [{ "text": "50%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "domestic_hiring": {
          "status": "scored",
          "note": "Trend rule (U.S. Workforce Rule v1.3, locked 2026-10-24 — the old share half and growth-protection floor are retired): U.S. headcount filed by segment: [[208,000]] (2023) → [[219,000]] (2024) → [[223,000]] (2025). The U.S. workforce GREW [[+1.83%]] ([[+4,000]]), so 90 + 2 × 1.83 = 93.66 → factor [[94]]",
          "links": [{ "text": "208,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "219,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "+1.83%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "+4,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "94", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "h1b_intensity": {
          "status": "scored",
          "note": "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2024 (Costco's Clause 3 year): Costco Wholesale Corporation — 4 initial + 85 continuing = 89 approvals ÷ [[223,000]] filed U.S. workers = 0.04 per 100 → factor 99. Pillar: (94 × 25 + 99 × 20) ÷ 45 = 96.22 → 96. The Clause 5 printed line stands on the card",
          "links": [{ "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "training_investment": {
          "status": "removed_by_m",
          "note": "Removed from the design by M 2026-10-14 — no longer measured for any company (cleanup C6). The course-completion figure ([[~7,500]] hourly employees, 2025) stays in the evidence pack as context",
          "links": [{ "text": "~7,500", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "contractor_dependence": {
          "status": "not_disclosed",
          "note": "Contractor headcount is not published"
        }
      },
      "footnote": "Scored on Domestic Hiring and H-1B Intensity — U.S. Workforce Rule v1.3.",
      "rule": "U.S. Workforce Rule v1.3; scored on Domestic Hiring and H-1B Intensity",
      "blocks": [
        {
          "title": "U.S. Workforce Commitment — 96",
          "lines": [
            {
              "text": "U.S. Workforce Commitment — 96 (U.S. Workforce Rule v1.3; scored on Domestic Hiring and H-1B Intensity; factor coverage printed per the rule. This pillar is Class W under Insufficient-Data Rule v1.2: it counts in the average, never in any company's coverage.)",
              "kind": "note"
            },
            {
              "text": "DOMESTIC HIRING — is the company building its U.S. workforce? (trend rule, U.S. Workforce Rule v1.3 — the old share half and growth-protection floor are retired: what matters is what the company does to its U.S. workforce, not what fraction of a global company sits in America):",
              "kind": "note"
            },
            {
              "text": "[[223,000]] (U.S. 2025) − [[219,000]] (U.S. 2024) → [[+4,000]] workers → [[+1.83%]] growth → the U.S. workforce GREW, so 90 + 2 × 1.83 = 93.66",
              "result": "score 94",
              "kind": "step",
              "links": [{ "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "219,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "+4,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "+1.83%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "FACTOR LINE: 94 (Domestic Hiring)",
              "result": "94",
              "kind": "total"
            },
            {
              "text": "H-1B INTENSITY — how heavily the company uses the H-1B visa program (Factor 4, added by U.S. Workforce Rule v1.2):",
              "kind": "note"
            },
            {
              "text": "89 (USCIS-approved H-1B petitions, FY2024 — Costco's Clause 3 year, the most recent USCIS fiscal year completed on or before Aug 31, 2025; 4 initial + 85 continuing) ÷ [[223,000]] (filed U.S. workers) → 0.04 approvals per 100 U.S. workers → on the published scale (0 per 100 = 100 · 0.5 per 100 = 85)",
              "result": "score 99",
              "kind": "step",
              "links": [{ "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "PILLAR LINE: (Domestic Hiring 94 × 25 + H-1B Intensity 99 × 20) ÷ 45",
              "result": "96",
              "kind": "total"
            },
            {
              "text": "(other factors not disclosed: full-time share given only as a target — a promise, not a measurement; contractor share not filed)",
              "kind": "note"
            },
            {
              "text": "Trend inside (context, same filing): [[208,000]] (2023) → [[219,000]] (2024) → [[223,000]] (2025).",
              "kind": "note",
              "links": [{ "text": "208,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "219,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "Sources: 10-K FY2025, Item 1 segment employee table; USCIS H-1B Employer Data Hub, FY2024 employer file (read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md).",
              "kind": "note"
            },
            {
              "text": "PRINTED LINE (U.S. Workforce Rule v1.2, Clause 5 — printed on every card): \"USCIS approved 89 H-1B petitions for Costco in FY2024 — 4 initial + 85 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\"",
              "kind": "note"
            }
          ]
        }
      ]
    },
    "local_economic": {
      "score": 76,
      "sentence": "It invested [[$4,215M]] in the U.S. — [[77%]] of all its investment — and pays a U.S. tax provision of [[$1,784M]] on [[$8,324M]] of U.S. earnings ([[21.4%]]).",
      "sentenceLinks": [{ "text": "$4,215M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "77%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$1,784M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$8,324M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "21.4%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }],
      "title": "Local Economic Contribution",
      "factors": {
        "domestic_investment": {
          "status": "scored",
          "note": "Additions to property & equipment by segment: U.S. [[$4,215M]] of [[$5,498M]] total (FY2025 10-K, Note 11) → [[77%]] → factor 77 — Amazon files capex worldwide only",
          "links": [{ "text": "$4,215M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$5,498M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "77%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "domestic_suppliers": {
          "status": "not_disclosed",
          "note": "U.S. procurement share is not published"
        },
        "us_rd": {
          "status": "not_disclosed",
          "note": "No R&D geography published (no separate R&D line in the 10-K)"
        },
        "taxes": {
          "status": "scored",
          "note": "Finding F-2: Costco DOES file a U.S. tax provision (10-K FY2025, Note 8 — federal [[$1,353M]] + state [[$431M]] = [[$1,784M]] on Domestic pre-tax income [[$8,324M]] → [[21.4%]] → factor 72). Pillar: (77 × 35 + 72 × 15) ÷ 50 = 76 (cleanup B2)",
          "links": [{ "text": "$1,353M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$431M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$1,784M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$8,324M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "21.4%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        }
      },
      "footnote": "Scored on 2 of 4 factors.",
      "rule": "Local Economic Contribution Rule v1.0; scored on 2 of 4 factors",
      "blocks": [
        {
          "title": "Local Economic Contribution — 76",
          "lines": [
            {
              "text": "DOMESTIC INVESTMENT: [[$4,215M]] (U.S. additions) ÷ [[$5,498M]] (all additions) → [[77%]]",
              "result": "77",
              "kind": "step",
              "links": [{ "text": "$4,215M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$5,498M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "77%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "TAXES: [[$1,353M]] (federal provision) + [[$431M]] (state provision) → [[$1,784M]] ÷ [[$8,324M]] (Domestic pre-tax income) → [[21.4%]] → on the published scale (21% = 70 · 25% = 85)",
              "result": "72",
              "kind": "step",
              "links": [{ "text": "$1,353M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$431M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$1,784M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$8,324M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "21.4%", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "FACTOR LINE: (77 × 35 + 72 × 15) ÷ 50",
              "result": "76",
              "kind": "total"
            },
            {
              "text": "(Domestic Suppliers and U.S. R&D not disclosed)",
              "kind": "note"
            },
            {
              "text": "Source: 10-K FY2025, Note 8 (taxes) and segment note (investment).",
              "kind": "note"
            }
          ]
        }
      ]
    },
    "layoffs_high_profits": {
      "score": 100,
      "sentence": "It announced no mass layoffs in three years while profits rose to [[$8.1B]] — and its U.S. workforce grew by [[15,000]].",
      "sentenceLinks": [{ "text": "$8.1B", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "15,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }],
      "title": "Layoffs During High Profits",
      "factors": {
        "layoff_severity": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: no mass round (1,000+) found Oct 2023–Oct 2026"
        },
        "profitability": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: profitable every window year ([[$6,292M]] / [[$7,367M]] / [[$8,099M]])",
          "links": [{ "text": "$6,292M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$7,367M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$8,099M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "buybacks": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: Costco repurchased [[$903M]] in FY2025 — with no layoffs in the window, the buyback term never engages (contrast Amazon's $0)",
          "links": [{ "text": "$903M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        }
      },
      "rule": "Layoff Rule v1.0",
      "blocks": [
        {
          "title": "Layoffs — 100",
          "lines": [
            {
              "text": "● Start",
              "result": "100",
              "kind": "step"
            },
            {
              "text": "− Mass rounds (1,000+ jobs) in the last 3 years → none found",
              "result": "−0",
              "kind": "step"
            },
            {
              "text": "=",
              "result": "100",
              "kind": "total"
            },
            {
              "text": "The search: company announcements and state WARN records (CA / WA / NY / TX indexes and national WARN trackers), Oct 2023 – Oct 2026. WARN is state-by-state and there is no single national WARN registry — the finding is stated exactly as \"no mass round found in WARN records or company announcements.\"",
              "kind": "note"
            },
            {
              "text": "Filed facts behind it: total workforce grew [[316,000]] → [[333,000]] → [[341,000]] (2023–2025); the U.S. workforce grew [[208,000]] → [[219,000]] → [[223,000]]; warehouses grew [[861]] → [[914]]. Profits rose every year ([[$6.3B]] → [[$7.4B]] → [[$8.1B]]), so no loss-year discount would have applied.",
              "kind": "note",
              "links": [{ "text": "316,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "333,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "341,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "208,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "219,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "223,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "861", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "914", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$6.3B", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$7.4B", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "$8.1B", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "Inside context (never scored): Costco repurchased [[$903M]] of its own stock in 2025 — shown because it is true; with no layoffs in the window it changes nothing in this rule.",
              "kind": "note",
              "links": [{ "text": "$903M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
            },
            {
              "text": "Sources: 10-K FY2025 (headcount by segment, buyback note); WARN records and announcements as above.",
              "kind": "note"
            }
          ]
        }
      ]
    },
    "ceo_pay_ratio": {
      "score": 88,
      "sentence": "Its CEO actually took home [[$5.3M]] in fiscal 2025 — [[79]] times the typical full-time worker's [[$66,262]].",
      "sentenceLinks": [{ "text": "$5.3M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "79", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }],
      "title": "CEO-to-Worker Pay Ratio",
      "factors": {
        "ceo_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v2.0 (realized pay [[$5,262,804]])",
          "links": [{ "text": "$5,262,804", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
        },
        "median_worker_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v2.0 (full-time median [[$66,262]] → [[79:1]] → 88 under the v2.0 anchors)",
          "links": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "79:1", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
        }
      },
      "rule": "CEO Pay Rule v2.0, realized pay — what he actually took home",
      "blocks": [
        {
          "title": "CEO Pay — 88",
          "lines": [
            {
              "text": "1. Salary",
              "result": "$1,183,270",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm"
            },
            {
              "text": "2. Bonus actually paid",
              "result": "$600,000",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm"
            },
            {
              "text": "3. Other pay",
              "result": "$58,631",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm"
            },
            {
              "text": "4. Stock he received in fiscal 2025",
              "result": "$3,420,903",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm"
            },
            {
              "text": "= Total actually taken home",
              "result": "$5,262,804",
              "kind": "total",
              "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm"
            },
            {
              "text": "÷ Typical full-time worker's pay [[$66,262]] → [[79×]] more → on the published scale (50× = 100 · 100× = 80)",
              "result": "88",
              "kind": "total",
              "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm",
              "links": [{ "text": "$66,262", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "79×", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            },
            {
              "text": "(Under the superseded v1.1 scale this same ratio scored 68; v2.0 recalibrated the top end of the ruler so the top scores are reachable — see CEO Pay Rule v2.0 changelog.)",
              "kind": "note"
            },
            {
              "text": "On paper Costco reports [[283:1]] — it counts [[$12.0M]] of stock in the year it was promised, and a median worker ([[$49,186]]) that includes part-time and seasonal workers. Against that same all-worker median, the realized pay is [[107×]] — footnote only; the headline uses the full-time worker, per the rule's hierarchy.",
              "kind": "note",
              "links": [{ "text": "283:1", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "$12.0M", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "$49,186", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }, { "text": "107×", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            },
            {
              "text": "Not counted, per the rule's component list: the [[$53,896]] change in pension value in the proxy's summary table.",
              "kind": "note",
              "links": [{ "text": "$53,896", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm" }]
            },
            {
              "text": "Source: DEF 14A FY2025, pp.19, 21, 24.",
              "kind": "note"
            }
          ]
        }
      ]
    },
    "outsourcing_exposure": {
      "score": 100,
      "sentence": "Searched DOL TAA, SEC filings, WARN and company announcements on 2026-10-14: 0 proven cases of Costco moving U.S. work abroad were found.",
      "title": "Jobs Moved Abroad",
      "factors": {
        "offshore_workforce": {
          "status": "disclosed_in_part",
          "note": "Own-workforce split is filed (Canada [[55,000]] · Other International [[63,000]] of [[341,000]]) — but the factor measures work placed offshore/outsourced, which is not the same figure; exposure line inside the locked pillar (printed, never scored)",
          "links": [{ "text": "55,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "63,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }, { "text": "341,000", "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm" }]
        },
        "outsourced_services": {
          "status": "not_disclosed",
          "note": "Vendor/offshore services spend is not published"
        },
        "proven_moves": {
          "status": "scored",
          "note": "Costco's §8 protocol completed and logged 2026-10-14 (HARM_EVIDENCE_SEARCH_LOG) → 0 proven events → 100"
        }
      },
      "footnote": "Exposure, printed never scored: Costco does not disclose how much of its work is done by contractors and outside firms.",
      "rule": "Outsourcing + Production Abroad Rule v1.0",
      "blocks": [
        {
          "title": "Jobs Moved Abroad — 100",
          "lines": [
            {
              "text": "● Start",
              "result": "100",
              "kind": "step"
            },
            {
              "text": "− Proven move events in the window (Oct 2023 – Oct 2026) → none found",
              "result": "−0",
              "kind": "step"
            },
            {
              "text": "=",
              "result": "100",
              "kind": "total"
            },
            {
              "text": "The search (protocol S-1–S-5, completed and logged 2026-10-14 — HARM_EVIDENCE_SEARCH_LOG_2026-10-14.md): DOL TAA determinations (no determination names Costco as a subject firm), SEC filing sweep, WARN pairing, announcement sweep. Gaps on record in the log: G-b (the bulk DOL petitions file was not parsed). Exposure (printed, never scored): contractor share not disclosed by the company.",
              "kind": "note"
            },
            {
              "text": "Costco's §8 protocol completed and logged 2026-10-14 (HARM_EVIDENCE_SEARCH_LOG) → 0 proven events → 100",
              "kind": "note"
            }
          ]
        }
      ]
    },
    "community_resilience": {
      "score": null,
      "sentence": "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Costco's coverage.",
      "title": "Community Resilience",
      "factors": {
        "local_investment": {
          "status": "not_measurable",
          "note": "No company-level source exists for any company"
        },
        "community_programs": {
          "status": "not_measurable",
          "note": "Program spend is self-reported marketing material, not a filing"
        }
      },
      "status": "Not yet measurable"
    },
    "production_abroad": {
      "score": 100,
      "sentence": "Same search, production chain: 0 proven cases of U.S. production moved abroad were found. Its foreign warehouses serve their own markets — foreign operation, not a U.S. job moved.",
      "title": "Production Moved Abroad",
      "factors": {
        "domestic_production": {
          "status": "not_measurable",
          "note": "Census/USITC count category units, not a company's units — the U.S.-made share is the locked rule's exposure line (printed, never scored)"
        },
        "imported_goods": {
          "status": "not_measurable",
          "note": "USITC counts category imports, not a company's imports"
        },
        "proven_moves": {
          "status": "scored",
          "note": "Same §8 protocol, production chain → 0 proven events → Production Moved Abroad 100"
        }
      },
      "footnote": "Exposure, printed never scored: Costco does not disclose how much of what it sells is made in the United States.",
      "rule": "Outsourcing + Production Abroad Rule v1.0",
      "blocks": [
        {
          "title": "Production Moved Abroad — 100",
          "lines": [
            {
              "text": "● Start",
              "result": "100",
              "kind": "step"
            },
            {
              "text": "− Proven U.S. production moves in the window → none found",
              "result": "−0",
              "kind": "step"
            },
            {
              "text": "=",
              "result": "100",
              "kind": "total"
            },
            {
              "text": "Same search, production chain. Its foreign warehouses serve their own markets — foreign operation, not a U.S. job moved. Exposure (printed, never scored): U.S.-made share not disclosed.",
              "kind": "note"
            },
            {
              "text": "Same §8 protocol, production chain → 0 proven events → Production Moved Abroad 100",
              "kind": "note"
            }
          ]
        }
      ]
    },
    "lobbying_activity": {
      "score": 100,
      "sentence": "It reported no federal lobbying spending in 2025 — its last reported lobbying year was 2020, at [[$70,000]].",
      "sentenceLinks": [{ "text": "$70,000", "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703" }],
      "title": "Lobbying Activity",
      "factors": {
        "lobbying_spend": {
          "status": "scored",
          "note": "Lobbying Rule v1.1: [[$0]] reported for 2025 → 100 (verification basis in the evidence pack §4) (cleanup C4)",
          "links": [{ "text": "$0", "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703" }]
        },
        "political_contributions": {
          "status": "scored",
          "note": "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total on the same scale (Lobbying Rule v1.1), never averaged. Costco has no company PAC (OpenSecrets org profile shows [[$0]] from the organization), so [[$0]] is added and the pillar stays 100 (cleanup C5)",
          "links": [{ "text": "$0", "url": "https://www.opensecrets.org/orgs/costco-wholesale/summary?cycle=A&id=D000000703" }]
        }
      },
      "rule": "Lobbying Rule v1.1 — lobbying + PAC, added on the same scale; Costco has no PAC, so $0 is added and the score is unchanged",
      "blocks": [
        {
          "title": "Lobbying — 100",
          "lines": [
            {
              "text": "1. Reported lobbying the federal government in 2025",
              "result": "$0",
              "kind": "step",
              "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703"
            },
            {
              "text": "→ On the published scale ($0 = 100)",
              "result": "100",
              "kind": "total"
            },
            {
              "text": "How the $0 is known: Costco's OpenSecrets client summary page shows its most recent reported lobbying year as 2020 ([[$70,000]]), and its OpenSecrets organization profile states it [[has not reported lobbying the federal government during the 2024 election cycle]]. Its last reported years were 2017 ([[$210,000]]), 2018 ([[$280,000]]) and 2020 ([[$70,000]]) — even the highest would score about 97, and none is in the scored year.",
              "kind": "note",
              "links": [{ "text": "$70,000", "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703" }, { "text": "$210,000", "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703" }, { "text": "$280,000", "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703" }, { "text": "has not reported lobbying the federal government during the 2024 election cycle", "url": "https://www.opensecrets.org/orgs/costco-wholesale/summary?cycle=A&id=D000000703" }]
            },
            {
              "text": "Limitation printed with the score: federal lobbying only — state lobbying and trade-group spending are not counted.",
              "kind": "note"
            },
            {
              "text": "Source: OpenSecrets client summary, Costco Wholesale (id D000000703), and organization profile.",
              "kind": "note"
            },
            {
              "text": "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total on the same scale (Lobbying Rule v1.1), never averaged. Costco has no company PAC (OpenSecrets org profile shows [[$0]] from the organization), so $0 is added and the pillar stays 100 (cleanup C5)",
              "kind": "note",
              "links": [{ "text": "$0", "url": "https://www.opensecrets.org/orgs/costco-wholesale/summary?cycle=A&id=D000000703" }]
            }
          ]
        }
      ]
    }
  },
  "sources": [
    {
      "label": "DEF 14A FY2025 (filed 2025-12-04)",
      "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm"
    },
    {
      "label": "Form 10-K FY2025 (filed 2025-10-07, accession 0000909832-25-000101)",
      "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm"
    },
    {
      "label": "OpenSecrets — Costco Wholesale, federal lobbying client summary (id D000000703)",
      "url": "https://www.openSecrets.org/federal-lobbying/clients/summary?cycle=2024&id=D000000703"
    },
    {
      "label": "OpenSecrets — Costco Wholesale, organization profile summary",
      "url": "https://www.opensecrets.org/orgs/costco-wholesale/summary?cycle=A&id=D000000703"
    },
    {
      "label": "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025 (printed fact, not scored)",
      "url": "https://www.gao.gov/assets/890/888620.pdf"
    },
    {
      "label": "MIT Living Wage Calculator — national benchmark: average of all 50 state pages: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md)."
    },
    {
      "label": "State WARN notices (CA / WA / NY / TX indexes) and national WARN trackers — no Costco mass round found, Oct 2023 – Oct 2026."
    },
    {
      "label": "USCIS H-1B Employer Data Hub, FY2024 employer file (read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md)"
    }
  ],
  "rules": "Methodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.3 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0 · Weights Defense v1.0 · Show-Your-Work Spec v1.0",
  "suppliedBuildFile": "# WeSee Company Card — Costco (COST) — BUILD FILE v1.0\nBuilt 2026-10-11 under Methodology v1.0 (all rules locked). Period scored: FY2025 (52 weeks ended\nAug 31, 2025). Scoring date: 2026-10-11. Evidence: COSTCO_EVIDENCE_PACK.md (same folder).\nUPDATED 2026-10-20 under the final locked rules (Bundles A–D applied by M's approval): CEO Pay\nRule v2.0 (68 → 88) · U.S. Workforce Rule v1.1 growth protection (67 → 69) + Class W coverage\nstatus · Insufficient-Data Rule v1.2 · Local Economic Contribution Rule v1.0 (76) ·\nOutsourcing + Production Abroad Rule v1.0 (100 / 100) · locked-file cleanup pack (Bundle D).\nUPDATED 2026-10-22 under U.S. Workforce Rule v1.2 (Factor 4 — H-1B Intensity — locked by\nM 2026-10-22): the pillar re-scores 69 → 82 on Costco's USCIS FY2024 count — its Clause 3\nyear — of 89 approvals (4 initial + 85 continuing) ÷ 223,000 filed U.S. workers = 0.04 per\n100 → factor 99 (H1B_USCIS_REDERIVATION_2026-10-22.md).\nUPDATED 2026-10-24 under U.S. Workforce Rule v1.3 (Domestic Hiring trend rule — locked by\nM 2026-10-24): the factor re-scores 69 → 94 (U.S. headcount grew +1.83%, so 90 + 2 × 1.83\n= 93.66 → 94; the old share half and growth-protection floor are retired), the pillar\nre-scores 82 → 96, and the overall rises 90 → 93.\nFinal headline: **93 — Strong, uncapped** (see FINAL_BOARD_2026-10-24.md).\nThis is the exact content for the Lovable company page: Layer 1 (simple outside) + full\nShow-Your-Work trail (inside). NOT sent anywhere — publishing is M's call.\n\n---\n\n## LAYER 1 — what every visitor sees\n\n**Costco**\n**Overall: 93 — Strong**\nCoverage: 7 of 7 ready pillars scored — every pillar WeSee has a finished measurement for.\nU.S. Workforce Commitment also scores (96) and counts in the average, but is not counted in\nany company's coverage while its measurement is unfinished (Class W). One pillar (Community\nResilience) is not yet measurable for any company. No cap applies.\n\n### Pillar cards (name · score bar · one sentence)\n\n1. **Worker Standards — 90**\n   Its typical full-time worker earns $66,262 — above the cost of living, and above the $62,608 the typical American worker makes.\n   *(Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company.)*\n\n2. **U.S. Workforce Commitment — 96**\n   Costco reports 223,000 workers in the United States and added 4,000 U.S. workers in the scored year (+1.83%) — under the trend rule, a company that grows its U.S. workforce scores high, so its Domestic Hiring factor scores 94. USCIS approved 89 H-1B petitions for Costco in fiscal 2024 — 0.04 for every 100 U.S. workers, near-zero measured use — and that factor scores 99.\n   *(Scored on Domestic Hiring and H-1B Intensity — U.S. Workforce Rule v1.3.)*\n\n3. **Local Economic Contribution — 76**\n   It invested $4,215M in the U.S. — 77% of all its investment — and pays a U.S. tax provision of $1,784M on $8,324M of U.S. earnings (21.4%).\n   *(Scored on 2 of 4 factors.)*\n\n4. **Layoffs During High Profits — 100**\n   It announced no mass layoffs in three years while profits rose to $8.1B — and its U.S. workforce grew by 15,000.\n\n5. **CEO-to-Worker Pay Ratio — 88**\n   Its CEO actually took home $5.3M in fiscal 2025 — 79 times the typical full-time worker's $66,262.\n\n6. **Jobs Moved Abroad — 100**\n   Searched DOL TAA, SEC filings, WARN and company announcements on 2026-10-14: 0 proven cases of Costco moving U.S. work abroad were found.\n   *(Exposure, printed never scored: Costco does not disclose how much of its work is done by contractors and outside firms.)*\n\n7. **Community Resilience — Not yet measurable**\n   No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Costco's coverage.\n\n8. **Production Moved Abroad — 100**\n   Same search, production chain: 0 proven cases of U.S. production moved abroad were found. Its foreign warehouses serve their own markets — foreign operation, not a U.S. job moved.\n   *(Exposure, printed never scored: Costco does not disclose how much of what it sells is made in the United States.)*\n\n9. **Lobbying Activity — 100**\n   It reported no federal lobbying spending in 2025 — its last reported lobbying year was 2020, at $70,000.\n\n---\n\n## LAYER 2/3 — Show Your Work (inside, expandable on the page)\n\nDISPLAY STANDARD (M, 2026-10-09): every calculation is shown as short step lines — one fact per\nline, a plain word for what happens, the result in a badge. Chains: one line of numbers with\narrows, each number labeled in two-to-four words.\n\n**The overall score**\n1. Worker Standards: 90 × weight 16 → 1,440\n2. U.S. Workforce Commitment: 96 × weight 14 → 1,344\n3. Local Economic Contribution: 76 × weight 14 → 1,064\n4. Layoffs: 100 × weight 12 → 1,200\n5. CEO Pay: 88 × weight 10 → 880\n6. Jobs Moved Abroad: 100 × weight 10 → 1,000\n7. Production Moved Abroad: 100 × weight 8 → 800\n8. Lobbying: 100 × weight 7 → 700\n= Add them up, divide by the total weight (91): 8,428 ÷ 91 → **Overall 93 — Strong**\n✓ Coverage cap checked: 7 of 7 ready pillars are scored (100%), so no coverage cap applies.\n  (U.S. Workforce Commitment counts in the average above but not in coverage — Class W.)\n✓ Layoff cap checked: the layoff pillar is 100 — not triggered.\n✓ Equal weights give (90 + 96 + 76 + 100 + 88 + 100 + 100 + 100) ÷ 8 = 93.75 → 94 — Strong. Published\n  next to the score, as the Weights Defense requires.\n(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2.)\n\n**Worker Standards — 90** (Worker Pay Fairness Rule v1.3; pay factor only)\n\nQUESTION 1 — Can the worker live on the pay?\n$66,262 (worker earns) → $49,246 (worker needs to live on) → $1.35 earned per $1 needed → **score 94**\n\nQUESTION 2 — Is it what other Americans make?\n$66,262 (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 1.06 → **score 75**\n\nQUESTION 3 — How is the money split?\nFirst show where $23,751 comes from — it is one division, never present it bare:\n$8.1B (Costco's profit for the whole year) ÷ 341,000 (workers) = $23,751 (profit per worker —\nwhat the company keeps for each worker it has; a measuring number, not a payment)\nThen the split:\n$66,262 (worker gets) + $23,751 (company keeps per worker) → worker's share 74% → **score 100**\n\nFINAL LINE: 94 + 75 + 100 → ÷ 3 → **90**\nDignity gate: not triggered — pay is above the national living wage.\nPay figure note: $66,262 is the full-time median from Costco's FY2025 proxy (its \"considered\npopulation\" excludes seven small countries; Costco does not disclose a U.S.-only full-time\nmedian). The same figure is used in all three questions and in the CEO ratio.\nContext (never scored): U.S. average hourly rate ≈ $32.00 at the end of 2025; starting wage at\nleast $20.00/hr (U.S./Canada); retention ≈ 94% in the U.S. and Canada for workers with a year or\nmore of service.\n\nPRINTED FACT — NOT SCORED (M's decision 2026-10-11; standard for EVERY company card):\n\"In Washington — the only one of the 11 reporting states where Costco appears in the GAO's\ntop-25 employer tables — 256 of Costco's workers received food stamps (SNAP) in September 2025\n(U.S. GAO, report GAO-26-108703). Costco does not appear in any of the report's Medicaid\ntop-25 tables. The GAO lists only each state's 25 largest employers per program, so not\nappearing in a table does not mean zero. No national count exists.\"\nPrinted as a government-counted fact with its limits attached; never enters any score (counts\nmeasure company size as much as pay, the 11 states are not a national sample, and eligibility\nis household-based).\nSources: DEF 14A FY2025 pay-ratio section; MIT Living Wage; 10-K FY2025 (net income $8,099M;\n341,000 employees).\n\n**U.S. Workforce Commitment — 96** (U.S. Workforce Rule v1.3; scored on Domestic Hiring and\nH-1B Intensity; factor coverage printed per the rule. This pillar is Class W under\nInsufficient-Data Rule v1.2: it counts in the average, never in any company's coverage.)\n\nDOMESTIC HIRING — is the company building its U.S. workforce? (trend rule, U.S.\nWorkforce Rule v1.3 — the old share half and growth-protection floor are retired:\nwhat matters is what the company does to its U.S. workforce, not what fraction of\na global company sits in America):\n223,000 (U.S. 2025) − 219,000 (U.S. 2024) → **+4,000 workers** → +1.83% growth →\nthe U.S. workforce GREW, so 90 + 2 × 1.83 = 93.66 → **score 94**\n\nFACTOR LINE: **94** (Domestic Hiring)\n\nH-1B INTENSITY — how heavily the company uses the H-1B visa program (Factor 4, added by\nU.S. Workforce Rule v1.2):\n89 (USCIS-approved H-1B petitions, FY2024 — Costco's Clause 3 year, the most recent USCIS\nfiscal year completed on or before Aug 31, 2025; 4 initial + 85 continuing) ÷ 223,000\n(filed U.S. workers) → 0.04 approvals per 100 U.S. workers → on the published scale\n(0 per 100 = 100 · 0.5 per 100 = 85) → **score 99**\n\nPILLAR LINE: (Domestic Hiring 94 × 25 + H-1B Intensity 99 × 20) ÷ 45 → **96** (other\nfactors not disclosed: full-time share given only as a target — a promise, not a\nmeasurement; contractor share not filed)\nTrend inside (context, same filing): 208,000 (2023) → 219,000 (2024) → 223,000 (2025).\nSources: 10-K FY2025, Item 1 segment employee table; USCIS H-1B Employer Data Hub,\nFY2024 employer file (read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md).\nPRINTED LINE (U.S. Workforce Rule v1.2, Clause 5 — printed on every card):\n\"USCIS approved 89 H-1B petitions for Costco in FY2024 — 4 initial + 85 continuing,\nsummed over its filed subsidiary list. Approvals count petitions, not people: one worker\ncan be approved more than once in a year.\"\n\n**Layoffs — 100** (Layoff Rule v1.0)\n● Start → 100\n− Mass rounds (1,000+ jobs) in the last 3 years → none found → −0\n= **100**\nThe search: company announcements and state WARN records (CA / WA / NY / TX indexes and national\nWARN trackers), Oct 2023 – Oct 2026. WARN is state-by-state and there is no single national WARN\nregistry — the finding is stated exactly as \"no mass round found in WARN records or company\nannouncements.\"\nFiled facts behind it: total workforce grew 316,000 → 333,000 → 341,000 (2023–2025); the U.S.\nworkforce grew 208,000 → 219,000 → 223,000; warehouses grew 861 → 914. Profits rose every year\n($6.3B → $7.4B → $8.1B), so no loss-year discount would have applied.\nInside context (never scored): Costco repurchased $903M of its own stock in 2025 — shown\nbecause it is true; with no layoffs in the window it changes nothing in this rule.\nSources: 10-K FY2025 (headcount by segment, buyback note); WARN records and announcements as above.\n\n**CEO Pay — 88** (CEO Pay Rule v2.0, realized pay — what he actually took home)\n1. Salary → $1,183,270\n2. Bonus actually paid → $600,000\n3. Other pay → $58,631\n4. Stock he received in fiscal 2025 → $3,420,903\n= Total actually taken home → $5,262,804\n÷ Typical full-time worker's pay $66,262 → 79× more → on the published scale (50× = 100 · 100× = 80) → **88**\n(Under the superseded v1.1 scale this same ratio scored 68; v2.0 recalibrated the top end of\nthe ruler so the top scores are reachable — see CEO Pay Rule v2.0 changelog.)\nOn paper Costco reports 283:1 — it counts $12.0M of stock in the year it was promised, and a\nmedian worker ($49,186) that includes part-time and seasonal workers. Against that same\nall-worker median, the realized pay is 107× — footnote only; the headline uses the full-time\nworker, per the rule's hierarchy.\nNot counted, per the rule's component list: the $53,896 change in pension value in the proxy's\nsummary table.\nSource: DEF 14A FY2025, pp.19, 21, 24.\n\n**Lobbying — 100** (Lobbying Rule v1.1 — lobbying + PAC, added on the same scale;\nCostco has no PAC, so $0 is added and the score is unchanged)\n\n**Local Economic Contribution — 76** (Local Economic Contribution Rule v1.0; scored on 2 of 4\nfactors)\nDOMESTIC INVESTMENT: $4,215M (U.S. additions) ÷ $5,498M (all additions) → 77% → **77**\nTAXES: $1,353M (federal provision) + $431M (state provision) → $1,784M ÷ $8,324M (Domestic\npre-tax income) → 21.4% → on the published scale (21% = 70 · 25% = 85) → **72**\nFACTOR LINE: (77 × 35 + 72 × 15) ÷ 50 → **76** (Domestic Suppliers and U.S. R&D not disclosed)\nSource: 10-K FY2025, Note 8 (taxes) and segment note (investment).\n\n**Jobs Moved Abroad — 100** (Outsourcing + Production Abroad Rule v1.0)\n● Start → 100\n− Proven move events in the window (Oct 2023 – Oct 2026) → none found → −0\n= **100**\nThe search (protocol S-1–S-5, completed and logged 2026-10-14 —\nHARM_EVIDENCE_SEARCH_LOG_2026-10-14.md): DOL TAA determinations (no determination names\nCostco as a subject firm), SEC filing sweep, WARN pairing, announcement sweep. Gaps on record\nin the log: G-b (the bulk DOL petitions file was not parsed). Exposure (printed, never\nscored): contractor share not disclosed by the company.\n\n**Production Moved Abroad — 100** (Outsourcing + Production Abroad Rule v1.0)\n● Start → 100\n− Proven U.S. production moves in the window → none found → −0\n= **100**\nSame search, production chain. Its foreign warehouses serve their own markets — foreign\noperation, not a U.S. job moved. Exposure (printed, never scored): U.S.-made share not\ndisclosed.\n1. Reported lobbying the federal government in 2025 → $0\n→ On the published scale ($0 = 100) → **100**\nHow the $0 is known: Costco's OpenSecrets client summary page shows its most recent reported\nlobbying year as 2020 ($70,000), and its OpenSecrets organization profile states it has not\nreported lobbying the federal government during the 2024 election cycle. Its last reported\nyears were 2017 ($210,000), 2018 ($280,000) and 2020 ($70,000) — even the highest would\nscore about 97, and none is in the scored year.\nLimitation printed with the score: federal lobbying only — state lobbying and trade-group\nspending are not counted.\nSource: OpenSecrets client summary, Costco Wholesale (id D000000703), and organization profile.\n\n**Unscored pillars — why each is unscored** (Insufficient-Data Rule v1.2)\n- Not yet measurable, for any company (excluded from coverage): Community Resilience — no\n  filed or public company-level source exists for any company. No number is estimated.\n- Every other pillar is scored above. (The contractor-share and U.S.-made-share figures\n  Costco does not disclose now print as never-scored exposure lines inside the two\n  harm-evidence pillars, which score from public records.)\n\n### Every factor — all 25 from the original design\nFull factor-by-factor map with statuses: see FACTOR_MAP_COSTCO.md (same folder).\nSummary for Costco (final, 2026-10-22): 14 factors scored inside the locked rules (Living\nWage, Domestic Hiring, H-1B Intensity, Layoff Severity, Profitability Context, Buybacks, CEO Compensation,\nMedian Worker Compensation, Lobbying Spend, Political Contributions, Domestic Investment,\nTaxes, Proven-Moves records for Jobs Moved Abroad and for Production Moved Abroad) · the rest\ndisclosed by Costco as context only, not disclosed, not measurable for any company, or\nremoved by M (Training Investment) — each one listed in the factor map. (Count restated\nunder the cleanup pack as amended by the 2026-10-20 locks.)\n\n### Evidence records (exact sources)\n- DEF 14A FY2025 (filed 2025-12-04):\n  https://www.sec.gov/Archives/edgar/data/909832/000090983225000159/cost-20251204.htm\n- Form 10-K FY2025 (filed 2025-10-07, accession 0000909832-25-000101):\n  https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\n- OpenSecrets — Costco Wholesale, federal lobbying client summary (id D000000703) and\n  organization profile summary.\n- U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026):\n  workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025\n  (printed fact, not scored): https://www.gao.gov/assets/890/888620.pdf\n- MIT Living Wage Calculator — national benchmark: average of all 50 state pages:\n  scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md).\n- State WARN notices (CA / WA / NY / TX indexes) and national WARN trackers — no Costco mass\n  round found, Oct 2023 – Oct 2026.\n\n---\nMethodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 ·\nInsufficient-Data Rule v1.2 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.3 ·\nLocal Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0 ·\nWeights Defense v1.0 · Show-Your-Work Spec v1.0",
  "suppliedFactorMap": "# WeSee — The Full Factor Map (M's original design vs Methodology v1.x) — Costco\nCompanion to FACTOR_MAP_AMAZON.md — same 25 factors, same in-pillar weights, scored under the\nsame locked rules. Built 2026-10-11 from COSTCO_EVIDENCE_PACK.md (all values read on the exact\npages cited there: FY2025 DEF 14A, FY2025 10-K, OpenSecrets, GAO-26-108703).\n\n## Status key\n- **SCORED** — inside a locked rule today, with Costco's real filed value.\n- **DISCLOSED, NOT SCORED** — Costco publishes the value in a filing, but no locked rule scores\n  the factor today (shown on the card as context). New status vs the Amazon map — Costco\n  discloses several things Amazon does not.\n- **NOT DISCLOSED** — the data exists inside the company; Costco does not publish it in usable form.\n- **NOT MEASURABLE** — no company-level source exists for any company.\n- **DECISION** — measurable from an exact source, but currently outside the locked rule. M's call.\n\n## Worker Standards (pillar weight 16%) — pillar score 90 (pay factor only, same basis as Amazon)\n| Factor | In-pillar weight | Status | Note |\n|---|---|---|---|\n| Living Wage | 40% | SCORED | Worker Pay Fairness Rule v1.3 (three questions): Costco 90 |\n| Benefits | 20% | DISCLOSED, NOT SCORED | 10-K describes expansive U.S. benefits qualitatively; no comparable filed numbers to score |\n| Workplace Safety | 20% | NOT DISCLOSED | OSHA publishes per-establishment data, no company-wide filed rate |\n| Employee Retention | 20% | DISCLOSED, NOT SCORED | ≈94% retention, U.S./Canada, employees with 1+ year of service (FY2025 10-K) — Amazon does not disclose this |\n\nUPDATED 2026-10-24 — U.S. Workforce Rule v1.3 (Domestic Hiring trend rule, locked by M 2026-10-24): factor 69 → 94 (+1.83% growth), pillar 82 → 96; see FINAL_BOARD_2026-10-24.md.\n\n## U.S. Workforce Commitment (14%) — pillar score 96 (U.S. Workforce Rule v1.3; Class W — counts in the average, never in coverage)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Full-Time Employment | 35% | DISCLOSED IN PART | 10-K states a target of at least 50% of the base being full-time; the actual share is not stated |\n| Domestic Hiring | 25% | SCORED | Trend rule (U.S. Workforce Rule v1.3, locked 2026-10-24 — the old share half and growth-protection floor are retired): U.S. headcount filed by segment: 208,000 (2023) → 219,000 (2024) → 223,000 (2025). The U.S. workforce GREW +1.83% (+4,000), so 90 + 2 × 1.83 = 93.66 → factor 94 |\n| H-1B Intensity | 20% | SCORED | Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2024 (Costco's Clause 3 year): Costco Wholesale Corporation — 4 initial + 85 continuing = 89 approvals ÷ 223,000 filed U.S. workers = 0.04 per 100 → factor 99. Pillar: (94 × 25 + 99 × 20) ÷ 45 = 96.22 → 96. The Clause 5 printed line stands on the card |\n| Training Investment | 20% | REMOVED BY M | Removed from the design by M 2026-10-14 — no longer measured for any company (cleanup C6). The course-completion figure (~7,500 hourly employees, 2025) stays in the evidence pack as context |\n| Contractor Dependence | 20% | NOT DISCLOSED | Contractor headcount is not published |\n\n## Local Economic Contribution (14%) — pillar score 76 (Local Economic Contribution Rule v1.0, locked 2026-10-20)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Domestic Investment | 35% | SCORED | Additions to property & equipment by segment: U.S. $4,215M of $5,498M total (FY2025 10-K, Note 11) → 77% → factor 77 — Amazon files capex worldwide only |\n| Domestic Suppliers | 25% | NOT DISCLOSED | U.S. procurement share is not published |\n| U.S. R&D | 25% | NOT DISCLOSED | No R&D geography published (no separate R&D line in the 10-K) |\n| Taxes | 15% | SCORED | Finding F-2: Costco DOES file a U.S. tax provision (10-K FY2025, Note 8 — federal $1,353M + state $431M = $1,784M on Domestic pre-tax income $8,324M → 21.4% → factor 72). Pillar: (77 × 35 + 72 × 15) ÷ 50 = 76 (cleanup B2) |\n\n## Layoffs During High Profits (12%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Layoff Severity | 45% | SCORED | Inside Layoff Rule v1.0: no mass round (1,000+) found Oct 2023–Oct 2026 |\n| Profitability Context | 30% | SCORED | Inside Layoff Rule v1.0: profitable every window year ($6,292M / $7,367M / $8,099M) |\n| Buybacks | 25% | SCORED | Inside Layoff Rule v1.0: Costco repurchased $903M in FY2025 — with no layoffs in the window, the buyback term never engages (contrast Amazon's $0) |\nPillar score: **100** — all three of M's factors are in the rule, as inputs rather than separate weighted scores.\n\n## CEO-to-Worker Pay Ratio (10%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| CEO Compensation | 50% | SCORED | Inside CEO Pay Rule v2.0 (realized pay $5,262,804) |\n| Median Worker Compensation | 50% | SCORED | Inside CEO Pay Rule v2.0 (full-time median $66,262 → 79:1 → 88 under the v2.0 anchors) |\nPillar score: **88** (68 under the superseded v1.1 scale).\n\n## Jobs Moved Abroad (10%) — pillar score 100 (Outsourcing + Production Abroad Rule v1.0, locked 2026-10-20)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Offshore Workforce | 60% | DISCLOSED IN PART | Own-workforce split is filed (Canada 55,000 · Other International 63,000 of 341,000) — but the factor measures work placed offshore/outsourced, which is not the same figure; exposure line inside the locked pillar (printed, never scored) |\n| Outsourced Services | 40% | NOT DISCLOSED | Vendor/offshore services spend is not published |\n| Proven-Moves record (locked rule's factor) | — | SCORED | Costco's §8 protocol completed and logged 2026-10-14 (HARM_EVIDENCE_SEARCH_LOG) → 0 proven events → 100 |\n\n## Community Resilience (9%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Local Investment | 60% | NOT MEASURABLE | No company-level source exists for any company |\n| Community Programs | 40% | NOT MEASURABLE | Program spend is self-reported marketing material, not a filing |\n\n## Production Abroad (8%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Domestic Production | 60% | NOT MEASURABLE | Census/USITC count category units, not a company's units — the U.S.-made share is the locked rule's exposure line (printed, never scored) |\n| Imported Goods | 40% | NOT MEASURABLE | USITC counts category imports, not a company's imports |\n| Proven-Moves record (locked rule's factor) | — | SCORED | Same §8 protocol, production chain → 0 proven events → Production Moved Abroad 100 |\n\n## Lobbying Activity (7%) — pillar score 100\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Lobbying Spend | 65% | SCORED | Lobbying Rule v1.1: $0 reported for 2025 → 100 (verification basis in the evidence pack §4) (cleanup C4) |\n| Political Contributions | — | **SCORED** | M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total on the same scale (Lobbying Rule v1.1), never averaged. Costco has no company PAC (OpenSecrets org profile shows $0 from the organization), so $0 is added and the pillar stays 100 (cleanup C5) |\n\n## The count\nFINAL COUNT (2026-10-22, restated under U.S. Workforce Rule v1.2 — the 2026-10-20 count is\nsuperseded): 14 factors scored inside locked rules (Living Wage,\nDomestic Hiring, H-1B Intensity, Domestic Investment, Taxes, Layoff Severity, Profitability Context, Buybacks,\nCEO Compensation, Median Worker Compensation, Lobbying Spend, Political Contributions, and the\nProven-Moves records for Jobs Moved Abroad and for Production Moved Abroad) · Benefits and\nEmployee Retention disclosed in full but dormant (no universal filed source) · Training\nInvestment REMOVED BY M · the rest not disclosed by Costco, disclosed in part, or not\nmeasurable for any company, as itemized above.\n\nThe honest contrast in one line: Costco now scores 14 factors to Amazon's 11 — because Costco\n*publishes* what Amazon withholds (U.S. headcount and its growth, U.S. investment by segment,\na U.S. tax provision), and both companies' harm-evidence protocols are complete. Disclosure is\nnot itself a score under the locked rules; it is recorded here so the card never claims Costco\nhides what it in fact files."
} satisfies CompanyCard & {
  suppliedBuildFile: string;
  suppliedFactorMap: string;
  pillars: Record<keyof CompanyCard["pillars"], CompanyCard["pillars"][keyof CompanyCard["pillars"]] & { title: string }>;
};
