// Microsoft (MSFT) — verbatim data from MICROSOFT_COMPANY_CARD.md BUILD FILE v1.0
// (period FY2026 ended Jun 30, 2026; pay/CEO figures FY2025 proxy, latest filed;
// updated 2026-10-24 under U.S. Workforce Rule v1.3). Data only — no number on
// this card is generated or estimated. Source links per FINISH_LINK_SPEC_2026-11-06:
// every [marker] marker's text appears in the matching links array with its exact
// source-page URL; step-line inputs link via the line's `url`. Stats with no exact
// source page in the card / factor map / evidence pack are listed in
// FINISH_DEFECTS_MICROSOFT.md, not linked to a wrong page.
// MS-H1 OPEN: the card prints the USCIS count exactly as the card file states —
// the complete-schedule-sweep mismatch is unresolved and EX-4 holds the print line.

import type { CompanyCard, StepLine } from "./amazon";

const K26 = "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm";
const K25 = "https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm";
const DEF = "https://www.sec.gov/Archives/edgar/data/789019/000119312525245150/d908201ddef14a.htm";
const FEC = "https://www.fec.gov/data/committee/C00227546/?cycle=2024";
const OS = "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000000115";
const GAO = "https://www.gao.gov/assets/890/888620.pdf";
const TAA = "https://www.dol.gov/agencies/eta/tradeact/petitioners/petitions/taw?num=73361";

const s = (text: string, result?: string, url?: string): StepLine => ({ text, result, kind: "step", url });
const t = (text: string, result?: string, url?: string): StepLine => ({ text, result, kind: "total", url });
const c = (text: string): StepLine => ({ text, kind: "check" });
const n = (text: string, url?: string): StepLine => ({ text, kind: "note", url });

export const MICROSOFT_CARD: CompanyCard = {
  overall: 49,
  band: "Weak",
  coverage:
    "5 of 7 ready pillars scored from filed sources. On the scored pillars Microsoft averages 48 before caps; the layoff rule caps any company at 49 when it keeps running mass layoffs in profitable years — the cap stands, but the raw score is below it, so it does not bind. One pillar (Community Resilience) is not yet measurable for any company.",
  period: "Period scored: FY2026 (ended Jun 30, 2026) · Scoring date: 2026-10-14 · Updated 2026-10-24 under U.S. Workforce Rule v1.3 · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      s("1. Worker Standards: 77 × weight 16", "1,232"),
      s("2. U.S. Workforce Commitment: 68 × weight 14", "952"),
      s("3. Local Economic Contribution: 57 × weight 14", "798"),
      s("4. Layoffs: 15 × weight 12", "180"),
      s("5. CEO Pay: 22 × weight 10", "220"),
      s("6. Lobbying: 32 × weight 7", "224"),
      t("= Add them up, divide by the total weight (73): 3,606 ÷ 73", "49 before caps"),
      c("✓ Coverage cap checked: 5 of 7 ready pillars are scored (71%), so the score may not pass 69 → 49 is below it; this cap does not bind. (U.S. Workforce Commitment counts in the average above but not in coverage — Class W.)"),
      c("✓ Layoff cap checked: the layoff pillar is 15 — under 20, with rounds in profitable years → the overall may not pass 49 → 49 sits at the ceiling, so the cap does not bind and the raw figure stands → Overall 49 — Weak"),
      c("✓ Equal weights give (77 + 68 + 57 + 15 + 22 + 32) ÷ 6 → 45 — Weak (below the layoff cap either way). Published next to the score, as the Weights Defense requires."),
      n("(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2.)"),
    ],
  },
  pillars: {
    worker_standards: {
      score: 77,
      sentence:
        "Its typical worker earns [[$200,972]] a year — about four times the national cost of living, and over three times what the typical American worker makes.",
      sentenceLinks: [{ text: "$200,972", url: DEF }],
      footnote:
        "Pay figure is the company's worldwide median — Microsoft does not disclose a U.S.-only figure. From the fiscal 2025 proxy, the latest filed. Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        { title: "QUESTION 1 — Can the worker live on the pay?", lines: [
          s("$200,972 (worker earns) → $49,246 (worker needs to live on) → $4.08 earned per $1 needed", "score 100"),
        ] },
        { title: "QUESTION 2 — Is it what other Americans make?", lines: [
          s("$200,972 (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 3.21", "score 100"),
        ] },
        { title: "QUESTION 3 — How is the money split?", lines: [
          n("First show where $446,632 comes from — it is one division, never present it bare:"),
          s("$101,832M (Microsoft's profit for fiscal 2025 — the same fiscal year as the pay figure) ÷ 228,000 (workers that year) = $446,632 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)", undefined, K25),
          s("$200,972 (worker gets) + $446,632 (company keeps per worker) → worker's share 31%", "score 32"),
        ] },
        { title: "FINAL LINE", lines: [
          t("100 + 100 + 32 → ÷ 3", "77"),
          c("Dignity gate: not triggered — pay is far above the national living wage."),
          n("Known limit, printed per the rule: profit per worker is company-wide because no company files a U.S.-only profit — the worker's side is the best disclosed pay figure, the profit side is the whole company, for every company alike."),
          n("Sources: DEF 14A FY2025 (pay-ratio section, p.55); 10-K FY2025 (net income $101,832M; 228,000 employees).", DEF),
          n("PRINTED FACT — NOT SCORED (M's decision 2026-10-11; standard for EVERY company card): \"Microsoft does not appear among the top-25 employers of SNAP recipients or of Medicaid enrollees in any of the 11 states the U.S. GAO counted (report GAO-26-108703, September 2025 snapshot). The GAO lists only each state's 25 largest employers per program, so not appearing in a table does not mean zero. No national count exists.\" Printed as a government-counted fact with its limits attached; never enters any score. Verified by a full-text search of the report: the name Microsoft appears nowhere in its tables.", GAO),
        ] },
      ],
      factors: {
        living_wage: { status: "scored", note: "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 32 → 77, on the worldwide median [[$200,972]] (hierarchy step (c) — Microsoft files no U.S.-only median; flagged on the card; FY2025 proxy, latest filed). Q3: profit per worker [[$101,832M]] ÷ [[228,000]] = [[$446,632]] → worker's share 31.0% → 32. Dignity gate not triggered.", links: [{ text: "$200,972", url: DEF }, { text: "$101,832M", url: K25 }, { text: "228,000", url: K25 }, { text: "$446,632", url: K25 }] },
        benefits: { status: "not_disclosed", note: "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)" },
        workplace_safety: { status: "not_disclosed", note: "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)" },
        employee_retention: { status: "not_disclosed", note: "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none; Retention is dormant under the U.S.-only principle)" },
      },
    },
    us_workforce_commitment: {
      score: 68,
      sentence:
        "It reports [[121,000]] workers in the United States and files that workforce as full-time; the U.S. count fell by [[4,000]] in the scored year (−3.2%), so its Domestic Hiring factor scores 58 under the trend rule — shrinkage pulls it down. USCIS approved 6,258 H-1B petitions for Microsoft in fiscal 2025 — 5.17 for every 100 U.S. workers, the heaviest measured use among the scored companies — and that factor scores 24.",
      sentenceLinks: [{ text: "121,000", url: K26 }, { text: "4,000", url: K26 }],
      footnote: "Scored on 3 of the pillar's 4 factors — the contractor count is not filed.",
      rule: "U.S. Workforce Rule v1.3; scored on 3 of 4 factors",
      blocks: [
        { title: "U.S. Workforce Commitment — 68", lines: [
          n("FULL-TIME EMPLOYMENT — are the jobs full-time jobs?"),
          s("The FY2026 10-K files the workforce as employed \"on a full-time basis\" — a filed measurement, not a target → filed full-time share 100%", "score 100", K26),
          n("DOMESTIC HIRING — is the company building its U.S. workforce? (trend rule, U.S. Workforce Rule v1.3 — the old share half is retired: what matters is what the company does to its U.S. workforce, not what fraction sits in America):"),
          s("121,000 (U.S. 2026) − 125,000 (U.S. 2025) → −4,000 workers → −3.2% → the U.S. workforce FELL, so 90 − 10 × 3.2 = 58", "score 58", K26),
          t("FACTOR LINE: 58 (Domestic Hiring)"),
          n("H-1B INTENSITY — how heavily the company uses the H-1B visa program (Factor 4, added by U.S. Workforce Rule v1.2):"),
          s("6,258 (USCIS-approved H-1B petitions, FY2025 — 1,394 initial + 4,864 continuing) ÷ 121,000 (filed U.S. workers) → 5.17 approvals per 100 U.S. workers → on the published scale (5 per 100 = 25 · 7.5 per 100 = 10)", "score 24"),
          t("PILLAR LINE: (Full-Time 100 × 35 + Domestic Hiring 58 × 25 + H-1B Intensity 24 × 20) ÷ 80", "68"),
          n("Not disclosed: the contractor share — Microsoft files no contractor or agency headcount, so that factor (20% of the design) is dormant, and the pillar re-normalizes over the three filed factors."),
          n("PRINTED LINE (U.S. Workforce Rule v1.2, Clause 5 — printed on every card): \"USCIS approved 6,258 H-1B petitions for Microsoft in FY2025 — 1,394 initial + 4,864 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\""),
          n("Filed-source note, printed openly: Microsoft files one year of headcount per 10-K, so the 2025 count (125,000 U.S.) is taken from the FY2025 10-K as filed — each year's count is the one that year's filing printed; no restated figure was mixed in.", K25),
          n("Sources: 10-K FY2026, Item 1 (223,000 total · 121,000 U.S. · 102,000 international); 10-K FY2025, Item 1 (228,000 total · 125,000 U.S.).", K26),
        ] },
      ],
      factors: {
        full_time_employment: { status: "scored", note: "The FY2026 10-K files the workforce as employed \"on a full-time basis\" — a filed measurement, not a target → filed full-time share [[100%]] → factor 100.", links: [{ text: "100%", url: K26 }] },
        domestic_hiring: { status: "scored", note: "Trend rule (U.S. Workforce Rule v1.3, locked 2026-10-24 — the old share half is retired): [[121,000]] (U.S., 2026) − [[125,000]] (U.S., 2025) = −4,000 → −3.2% → the U.S. workforce FELL, so 90 − 10 × 3.2 = 58 → factor 58.", links: [{ text: "121,000", url: K26 }, { text: "125,000", url: K25 }] },
        training_investment: { status: "removed_by_m", note: "Removed from the design by M 2026-10-14 — counted in the 26-factor design total, not in the 25 active factors" },
        contractor_dependence: { status: "not_disclosed", note: "No contractor/agency headcount or share is filed, so that factor is dormant and the pillar re-normalizes over the three filed factors" },
        h1b_intensity: { status: "scored", note: "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Microsoft Corporation — 1,394 initial + 4,864 continuing = 6,258 approvals ÷ 121,000 filed U.S. workers = 5.17 per 100 → on the §12 anchor table (5 → 25 · 7.5 → 10, straight-line) → factor 24. Scores because Microsoft files a U.S. headcount (Clause 5); the Clause 5 printed line stands on the card." },
      },
    },
    local_economic: {
      score: 57,
      sentence:
        "Scored on the one factor it files: it booked U.S. taxes at [[18.4%]] of its U.S. profits. It does not split its investment, supplier, or research spending by country.",
      sentenceLinks: [{ text: "18.4%", url: K26 }],
      footnote: "Scored on 1 of 4 factors.",
      rule: "Local Economic Contribution Rule v1.0, locked 2026-10-20; Taxes alone",
      blocks: [
        { title: "Local Economic Contribution — 57", lines: [
          n("TAXES — the one factor Microsoft files:"),
          s("$2,461M (U.S. federal tax, current) + $12,780M (federal, deferred) + $2,713M (state, current) + $1,113M (state, deferred) → $19,067M (total U.S. tax booked, FY2026) → ÷ $103,591M (profit earned in the U.S., FY2026) → 18.4% → on the locked scale (17% = 50 · 21% = 70)", "57", K26),
          n("Not disclosed (the rule's other three factors): U.S. investment — the 10-K files $115,948M of worldwide equipment and property additions with no U.S. split (its U.S. long-lived assets are 63.2% of the total, a balance, not a year's investment — shown as context, never scored); U.S. suppliers — not filed; U.S. research — $35,562M filed worldwide only.", K26),
          t("PILLAR LINE: 57 on the one filed factor", "57"),
          n("Source: 10-K FY2026, Note 11 (income taxes) and segment note.", K26),
        ] },
      ],
      factors: {
        domestic_investment: { status: "not_disclosed", note: "The FY2026 10-K files additions to property and equipment of [[$115,948M]] worldwide with no U.S. flow split. U.S. long-lived assets [[$300,354M]] ÷ [[$475,513M]] = [[63.2%]] are printed on the pack/card as context only — a balance-sheet stock, which the locked rule does not score.", links: [{ text: "$115,948M", url: K26 }, { text: "$300,354M", url: K26 }, { text: "$475,513M", url: K26 }, { text: "63.2%", url: K26 }] },
        domestic_suppliers: { status: "not_disclosed", note: "No supplier-spend or purchases-by-origin split is filed" },
        us_rd: { status: "not_disclosed", note: "Research and development expense of [[$35,562M]] is filed worldwide only; no U.S. split.", links: [{ text: "$35,562M", url: K26 }] },
        taxes: { status: "scored", note: "U.S. provision IS filed (FY2026 10-K Note 11: federal current [[$2,461M]] + federal deferred [[$12,780M]] + state current [[$2,713M]] + state deferred [[$1,113M]] = $19,067M on U.S. pre-tax [[$103,591M]] → 18.4%) → factor 57 under the locked rule = the pillar (Taxes alone). Context only, never scored: U.S. cash taxes paid [[$9,163M]].", links: [{ text: "$2,461M", url: K26 }, { text: "$12,780M", url: K26 }, { text: "$2,713M", url: K26 }, { text: "$1,113M", url: K26 }, { text: "$103,591M", url: K26 }, { text: "$9,163M", url: K26 }] },
      },
    },
    layoffs_high_profits: {
      score: 15,
      sentence:
        "It cut about 22,700 jobs in three years — four mass rounds, including about 6,000 in May 2025 and about 9,000 in July 2025 — while profits rose every year, reaching [[$133.7B]] in fiscal 2026.",
      sentenceLinks: [{ text: "$133.7B", url: K26 }],
      rule: "Layoff Rule v1.0; window Oct 2023 – Oct 2026",
      blocks: [{ title: "Layoffs — 15", lines: [
        s("● Start", "100"),
        s("− Jobs cut in the window → about 22,655 counted → band 10,000–24,999", "−60"),
        s("− Share of the workforce → 22,655 ÷ 228,000 → 9.9% → at least 5%", "−10"),
        s("− Repetition → 4 separate mass rounds (1,000+ jobs) in 3 years", "−15"),
        s("+ Credits → +0 (no severance total disclosed at scale in its filings; no 60+ day internal-transfer window disclosed; it bought back $22.3B of its own stock in fiscal 2026, a layoff year)", "+0", K26),
        t("=", "15"),
        n("The count, round by round (company announcements first; state WARN notices used to verify — never added on top): Jan 2024 → 1,900 (gaming, after the Activision Blizzard purchase) · Sep 2024 → 650 (gaming) · May 2025 → about 6,000 (company-wide; Washington WARN verified 1,985 of them) · Jun 2025 → 305 (Washington WARN) · Jul 2025 → about 9,000 (company-wide; Washington WARN verified 830) · Jul 2026 → 4,800 announced company-wide, about 3,200 of them in Xbox through fiscal 2027 (Washington WARN verified 605)."),
        n("Not counted: performance-based cuts in January 2025 — the company confirmed them but announced no total, and WeSee never estimates one. A voluntary buyout offer in 2026 is not a layoff round. The 10,000 cut in January 2023 is outside the 3-year window — pattern history, not counted twice."),
        n("Profit check: every round fell in a profitable year — profits at each announcement were $72.4B (fiscal 2023), $88.1B (fiscal 2024), and $101.8B (fiscal 2025) — so no loss-year discount applies, and because this pillar is under 20, the overall score is capped at 49."),
        n("Robustness, printed so the judgment calls can be tested: leaving out both small rounds gives 21,700; adding the uncounted January 2025 cuts at their reported ceiling gives under 24,935 — the same deduction band either way."),
        n("Sources: company memos and announcements as published (Microsoft Gaming, Jan + Sep 2024; company statements May 13 + Jul 2, 2025 and Jul 6, 2026); Washington WARN notices; 10-Ks FY2024–FY2026 (profits; buybacks $17,254M / $18,420M / $22,271M)."),
      ] }],
      factors: {
        layoff_severity: { status: "scored", note: "Inside Layoff Rule v1.0: 22,655 counted in the window (Jan 2024 1,900 + Sep 2024 650 + May 2025 ≈6,000 + Jun 2025 305 + Jul 2025 ≈9,000 + Jul 2026 4,800) → 10,000–24,999 band −60; share 22,655 ÷ [[228,000]] = 9.9% → ≥5% → −10 (the one filed segment cross-check, Jan 2024 gaming 1,900 ÷ 22,000 = 8.6%, gives the same tier; a press-derived ~20% Xbox reading was NOT used — no filed Xbox headcount).", links: [{ text: "228,000", url: K25 }] },
        profitability: { status: "scored", note: "Inside Layoff Rule v1.0: every round fell in a profitable year (net income $72,361M FY2023 · $88,136M FY2024 · [[$101,832M]] FY2025 at the respective announcements) — no loss-year discount applies.", links: [{ text: "$101,832M", url: K25 }] },
        buybacks: { status: "scored", note: "Inside Layoff Rule v1.0: buybacks $17,254M (FY2024) / $18,420M (FY2025) / [[$22,271M]] (FY2026) fail the zero-buyback credit test; no severance total disclosed at scale and no 60+ day transfer window disclosed → credits +0.", links: [{ text: "$22,271M", url: K26 }] },
      },
    },
    ceo_pay_ratio: {
      score: 22,
      sentence:
        "Its CEO actually took home [[$122.8M]] in fiscal 2025 — [[611]] times the typical worker's [[$200,972]].",
      sentenceLinks: [{ text: "$122.8M", url: DEF }, { text: "611", url: DEF }, { text: "$200,972", url: DEF }],
      footnote: "From the fiscal 2025 proxy, the latest filed. Scored on CEO Pay Rule v2.0 — at 611:1 the recalibrated top end does not reach this ratio, so the score is the same 22 under v1.1 and v2.0.",
      rule: "CEO Pay Rule v2.0, realized pay — what he actually took home; fiscal 2025, latest filed proxy",
      blocks: [{ title: "CEO Pay — 22", lines: [
        s("1. Salary", "$2,500,000", DEF),
        s("2. Cash incentive actually paid", "$9,555,000", DEF),
        s("3. Other pay", "$196,294", DEF),
        s("4. Stock that became his in fiscal 2025", "$110,586,317 (265,106 shares vested)", DEF),
        s("5. Stock options exercised", "$0 (he held none; the company has not granted options since 2003)", DEF),
        t("= Total actually taken home", "$122,837,611"),
        t("÷ Typical worker's pay $200,972 → 611× more → on the published scale (500× = 25 · 1,000× = 10)", "22", DEF),
        n("Not counted, per the rule: $84,245,496 of stock awards valued in the year they were promised (grant date) — a promise is not pay received.", DEF),
        n("On paper Microsoft reports 480:1 — it counts the promised stock instead of the vested stock. Against the same worker figure, that is a footnote only; the headline uses what he actually took home, per the rule.", DEF),
        n("Scale note: scored on CEO Pay Rule v2.0 (locked 2026-10-20). The v2.0 recalibration changed only the top-end anchors (350:1 and below); at 611:1 Microsoft sits in the unchanged 500–1,000 segment, so its score is 22 under both v1.1 and v2.0."),
        n("Source: DEF 14A FY2025, Summary Compensation Table (p.50), Stock Vested table (p.54), CEO Pay Ratio (p.55).", DEF),
      ] }],
      factors: {
        ceo_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (realized pay [[$122,837,611]] — salary [[$2,500,000]] + non-equity incentive [[$9,555,000]] + all other [[$196,294]] + stock vested [[$110,586,317]] ([[265,106]] shares) + $0 options exercised; FY2025 proxy, latest filed). Never counted: [[$84,245,496]] grant-date stock awards — a promise is not pay received.", links: [{ text: "$122,837,611", url: DEF }, { text: "$2,500,000", url: DEF }, { text: "$9,555,000", url: DEF }, { text: "$196,294", url: DEF }, { text: "$110,586,317", url: DEF }, { text: "265,106", url: DEF }, { text: "$84,245,496", url: DEF }] },
        median_worker_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (worldwide median [[$200,972]], hierarchy step (c), flagged → 611:1 → 22; Microsoft's own filed grant-date ratio [[480:1]] printed as a footnote, never scored).", links: [{ text: "$200,972", url: DEF }, { text: "480:1", url: DEF }] },
      },
    },
    outsourcing_exposure: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "Federal trade-adjustment petitions, SEC filings, and WARN notices were searched. No case meeting the proof standard — U.S. work shown moved to a named foreign country — was found. The rule is locked, but the full search protocol is not yet complete and logged for Microsoft, so it is not scored yet.",
      footnote:
        "The search so far: DOL trade-adjustment (TAA) petitions for Microsoft and its subsidiaries — the only determination found is a 2010 DENIAL ([[TAW-73361]], Issaquah, WA), and a denial never scores; no certified petition exists, and the TAA archive is frozen (the program ended in 2022). SEC filings for 2025–2026 state no move of named U.S. work or production to a named foreign country. WARN notices give counts, not destinations. No case meets the rule's proof standard, and no score is claimed until the full §8 protocol completes and is logged.",
      footnoteLinks: [{ text: "TAW-73361", url: TAA }],
      factors: {
        offshore_workforce: { status: "not_disclosed", note: "No offshore-workforce share as such is filed (Microsoft files a U.S./international headcount split — [[121,000]] / [[102,000]] — which scores in U.S. Workforce; a foreign workforce serving foreign operations is not an offshore/outsourced share, and operating abroad is not itself a moved U.S. job).", links: [{ text: "121,000", url: K26 }, { text: "102,000", url: K26 }] },
        outsourced_services: { status: "not_disclosed", note: "Vendor/offshore services spend is not published" },
      },
    },
    community_resilience: {
      score: null, status: "Not yet measurable",
      sentence:
        "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Microsoft's coverage.",
      footnote: "No filed or public company-level source exists for any company. No number is estimated.",
      factors: {
        local_investment: { status: "not_measurable", note: "No company-level source exists for any company (Class U — excluded from coverage for everyone)" },
        community_programs: { status: "not_measurable", note: "Program spend is self-reported marketing material, not a filing" },
      },
    },
    production_abroad: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "Its devices are made by contractors abroad, but no record was found of Microsoft moving a U.S. production operation overseas — and foreign production alone is never scored. Same status as Jobs Moved Abroad: locked rule, protocol incomplete, no score yet.",
      factors: {
        domestic_production: { status: "not_measurable", note: "Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for Microsoft searches were run, same as Jobs Moved Abroad above, and no proven move of U.S. production abroad was located, but the §8 protocol is not logged, so the pillar is not yet measured; its devices are made by contractors abroad and its services run in data centers worldwide, but foreign production alone is never scored — only a proven MOVE of U.S. production would be)" },
        imported_goods: { status: "not_measurable", note: "USITC counts category imports, not a company's imports" },
      },
    },
    lobbying_activity: {
      score: 32,
      sentence:
        "It spent [[$10,105,000]] lobbying the federal government in 2025 (Microsoft itself [[$9,360,000]], plus its subsidiary LinkedIn [[$745,000]]), plus [[$2,072,361]] through its PAC in the 2023–24 election cycle (FEC — verified) — $12,177,361 in total.",
      sentenceLinks: [{ text: "$10,105,000", url: OS }, { text: "$9,360,000", url: OS }, { text: "$745,000", url: OS }, { text: "$2,072,361", url: FEC }],
      footnote:
        "Verified 2026-10-15 from the Senate lobbying database after the OpenSecrets page would not render its totals at the original build; applied 2026-10-20 under Bundle B.",
      rule: "Lobbying Rule v1.1: lobbying year + PAC, added",
      blocks: [{ title: "Lobbying — 32", lines: [
        s("1. Federal lobbying, 2025 (parent + subsidiaries, per the rule's OpenSecrets-summary definition — rebuilt 2026-10-15 from the Senate lobbying database, Bundle B): Microsoft Corporation $9,360,000 + LinkedIn Corporation $745,000", "$10,105,000", OS),
        s("2. PAC — verified: Microsoft Corporation Stakeholders Voluntary PAC (MSVPAC), FEC committee C00227546 → total spent in the completed 2023–24 cycle", "$2,072,361", FEC),
        t("= $10,105,000 + $2,072,361", "$12,177,361"),
        t("→ On the published scale ($10M = 35 · $20M = 20)", "32"),
        n("Verified context from the same OpenSecrets page family: 2024 → $10,353,764 (company $9,424,000 + LinkedIn $869,764 + Activision Blizzard $60,000); 2023 → $10,544,433.", OS),
        n("Limitation printed with the score: federal lobbying and the federal PAC only — state lobbying and trade-group spending are not counted."),
        n("Sources: FEC committee page C00227546 (cycle 2024); Senate LDA database via LDA_LOBBYING_REBUILD_2026-10-15.md; OpenSecrets client summary, Microsoft Corp (id D000000115).", FEC),
      ] }],
      factors: {
        lobbying_spend: { status: "scored", note: "Lobbying Rule v1.1: calendar-2025 federal lobbying total (parent + subsidiaries), per the OpenSecrets client summary definition (Microsoft Corp, id D000000115) — [[$10,105,000]], fully reconstructed in the 2026-10-15 LDA rebuild (Microsoft Corporation [[$9,360,000]] + LinkedIn Corporation [[$745,000]]; Activision Blizzard $0 in 2025 — it did not reappear as a 2025 client). Verified context: 2024 [[$10,353,764]] · 2023 [[$10,544,433]].", links: [{ text: "$10,105,000", url: OS }, { text: "$9,360,000", url: OS }, { text: "$745,000", url: OS }, { text: "$10,353,764", url: OS }, { text: "$10,544,433", url: OS }] },
        political_contributions: { status: "scored", note: "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Microsoft PAC (MSVPAC, FEC C00227546) 2023–24 total disbursements [[$2,072,361]] ([[$2,072,360.72]] on the FEC page). Final chain: $10,105,000 + $2,072,361 = $12,177,361 → 32.", links: [{ text: "$2,072,361", url: FEC }, { text: "$2,072,360.72", url: FEC }] },
      },
    },
  },
  sources: [
    { label: "Form 10-K FY2026 (filed 2026-07-29, accession 0001193125-26-323660)", url: K26 },
    { label: "Form 10-K FY2025 (filed 2025-07-30, accession 0000950170-25-100235)", url: K25 },
    { label: "DEF 14A FY2025 (accession 0001193125-25-245150)", url: DEF },
    { label: "FEC — Microsoft Corporation Stakeholders Voluntary PAC, MSVPAC (C00227546), committee overview, cycle 2024", url: FEC },
    { label: "OpenSecrets — Microsoft Corp federal lobbying client summary (id D000000115)", url: OS },
    { label: "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025 (printed fact, not scored)", url: GAO },
    { label: "U.S. Department of Labor — TAA determination TAW-73361 (denied, 2010)", url: TAA },
    { label: "MIT Living Wage Calculator — national benchmark: average of all 50 state pages: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md)." },
    { label: "Company layoff announcements and Washington WARN notices, Oct 2023 – Oct 2026 — round-by-round in MICROSOFT_EVIDENCE_PACK.md §3." },
  ],
  rules:
    "Methodology v1.0 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.3 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · Score Bands v1.0 · Weights Defense v1.0 · Show-Your-Work Spec v1.0 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0",
};
