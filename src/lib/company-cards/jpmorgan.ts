// JPMorgan Chase (JPM) — data from JPMORGAN_COMPANY_CARD.md BUILD FILE v1.0
// (Methodology v1.0, period FY2025, scoring date 2026-10-14; updated 2026-10-24
// under U.S. Workforce Rule v1.3: Domestic Hiring 58 → 85, overall 59 → 64).
// Data only — no number on this card is generated or estimated. Every URL below
// appears in JPMORGAN_COMPANY_CARD.md, FACTOR_MAP_JPMORGAN.md,
// JPMORGAN_EVIDENCE_PACK.md, or LOAD_MESSAGE_JPMORGAN_DRAFT.md.
import type { CompanyCard } from "./amazon";

const TEN_K =
  "https://www.sec.gov/Archives/edgar/data/19617/000162828026008131/jpm-20251231.htm";
const DEF14A =
  "https://www.sec.gov/Archives/edgar/data/19617/000001961726000096/jpm-20260402.htm";
const OPENSECRETS =
  "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000000103";
const GAO = "https://www.gao.gov/assets/890/888620.pdf";

export const JPMORGAN_CARD: CompanyCard = {
  overall: 64,
  band: "Mixed",
  coverage:
    "5 of 7 ready pillars scored from filed sources. On the scored pillars JPMorgan averages 64; no cap binds. One pillar (Community Resilience) is not yet measurable for any company.",
  period:
    "Period scored: FY2025 (year ended Dec 31, 2025) · Scoring date: 2026-10-14 · Updated 2026-10-24 under U.S. Workforce Rule v1.3 · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      { text: "1. Worker Standards: 82 × weight 16", result: "1,312", kind: "step" },
      { text: "2. U.S. Workforce Commitment: 85 × weight 14", result: "1,190", kind: "step" },
      { text: "3. Local Economic Contribution: 63 × weight 14", result: "882", kind: "step" },
      { text: "4. Layoffs: 65 × weight 12", result: "780", kind: "step" },
      { text: "5. CEO Pay: 18 × weight 10", result: "180", kind: "step" },
      { text: "6. Lobbying: 44 × weight 7", result: "308", kind: "step" },
      {
        text: "= Add them up, divide by the total weight (73): 4,652 ÷ 73",
        result: "Overall 64 — Mixed",
        kind: "total",
      },
      {
        text: "✓ Coverage cap checked: 5 of 7 ready pillars are scored (71%), so the score may not pass 69 — 64 is below it; the cap does not bind.",
        kind: "check",
      },
      {
        text: "✓ Layoff cap checked: the layoff pillar is 65 — not triggered.",
        kind: "check",
      },
      {
        text: "✓ Equal weights give (82 + 85 + 63 + 65 + 18 + 44) ÷ 6 = 59.5 → 60 — also Mixed. Published next to the score, as the Weights Defense requires.",
        kind: "check",
      },
      {
        text: "(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2.)",
        kind: "note",
      },
    ],
  },
  pillars: {
    worker_standards: {
      score: 82,
      sentence:
        "Its typical worker earns [[$111,905]] a year — more than twice the cost of living ($49,246), and well above the $62,608 the typical American worker makes.",
      sentenceLinks: [{ text: "$111,905", url: DEF14A }],
      footnote:
        "Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company. The pay figure is the bank's worldwide median: it does not disclose a U.S.-only median, and that is printed wherever the figure is used.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        {
          title: "QUESTION 1 — Can the worker live on the pay?",
          lines: [
            {
              text: "$111,905 (worker earns) → $49,246 (worker needs to live on) → $2.27 earned per $1 needed",
              result: "score 100",
              kind: "step",
              url: DEF14A,
            },
          ],
        },
        {
          title: "QUESTION 2 — Is it what other Americans make?",
          lines: [
            {
              text: "$111,905 (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week × 52) → 1.79",
              result: "score 100",
              kind: "step",
              url: DEF14A,
            },
          ],
        },
        {
          title: "QUESTION 3 — How is the money split?",
          lines: [
            {
              text: "First show where $179,102 comes from — it is one division, never present it bare:",
              kind: "note",
            },
            {
              text: "$57.0B (the bank's profit for the whole year) ÷ 318,512 (workers) = $179,102 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)",
              kind: "step",
              url: TEN_K,
            },
            {
              text: "$111,905 (worker gets) + $179,102 (company keeps per worker) → worker's share 38.5%",
              result: "score 47",
              kind: "step",
              url: DEF14A,
            },
          ],
        },
        {
          title: "FINAL LINE",
          lines: [
            { text: "100 + 100 + 47 → ÷ 3", result: "82", kind: "total" },
            {
              text: "Dignity gate: not triggered — pay is above the national living wage.",
              kind: "check",
            },
            {
              text: "Pay figure note: $111,905 is the estimated median employee pay from the bank's 2026 proxy — a WORLDWIDE figure (global full-time, part-time, temporary and seasonal workers; no full-time adjustment for part-time staff). The bank discloses no U.S.-only median and no full-time median, so the worldwide figure is used and flagged, per the rule's hierarchy. The same figure is used in all three questions and in the CEO ratio.",
              kind: "note",
              url: DEF14A,
            },
            {
              text: "Limitation (printed per the rule): profit per worker is company-wide — no company files a U.S.-only profit figure.",
              kind: "note",
            },
            {
              text: "\"JPMorgan Chase does not appear among the employers reported in the GAO's top-25 employer tables — for food stamps (SNAP) or for Medicaid — in any of the 11 reporting states (U.S. GAO, report [[GAO-26-108703]], September 2025 snapshot). The GAO lists only each state's 25 largest employers per program, so not appearing does not mean none of its workers receive these benefits. No national count exists.\"",
              kind: "note",
              links: [{ text: "GAO-26-108703", url: GAO }],
            },
          ],
        },
      ],
      factors: {
        living_wage: {
          status: "scored",
          note: "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 47 → 82, on the worldwide median [[$111,905]] (hierarchy step (c) — JPMorgan discloses no U.S.-only median and no full-time median; the proxy's median is the global full-time, part-time, temporary and seasonal population with NO full-time-equivalent adjustment for part-time staff; flagged wherever the figure is used, and the same figure is used in all three questions and in the CEO ratio). Q1: 111,905 ÷ 49,246 = 2.27x → 100. Q2: 111,905 ÷ 62,608 = 1.79x → 100. Q3: profit per worker [[57,048M]] ÷ [[318,512]] = $179,102 → worker's share 111,905 ÷ (111,905 + 179,102) = 38.5% → 47. Dignity gate not triggered. Limitation printed on the card: profit per worker is company-wide — no company files a U.S.-only profit figure (the rule's one declared exception)",
          links: [
            { text: "$111,905", url: DEF14A },
            { text: "57,048M", url: TEN_K },
            { text: "318,512", url: TEN_K },
          ],
        },
        benefits: {
          status: "not_disclosed",
          note: "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)",
        },
        workplace_safety: {
          status: "not_disclosed",
          note: "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)",
        },
        employee_retention: {
          status: "not_disclosed",
          note: "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none; Retention is dormant under the U.S.-only principle)",
        },
      },
    },
    us_workforce_commitment: {
      score: 85,
      sentence:
        "The bank files a U.S. share ([[58%]] of its [[318,512]] workers) but no U.S. count and no history, so growth cannot be measured — under the trend rule that scores 85.",
      sentenceLinks: [
        { text: "58%", url: TEN_K },
        { text: "318,512", url: TEN_K },
      ],
      footnote:
        "Scored on Domestic Hiring, the only factor in this pillar filed in comparable form — U.S. Workforce Rule v1.3, trend rule. Class W: counts in the average, never in coverage.",
      rule: "U.S. Workforce Rule v1.3; scored on Domestic Hiring only",
      blocks: [
        {
          title: "DOMESTIC HIRING — is the bank building its U.S. workforce?",
          lines: [
            {
              text: "NOT COMPUTABLE as a trend — the bank files no U.S. headcount for any year, only the current share (58% of workers in the U.S.), so there is no U.S. change to measure. (The worldwide total grew by 1,279 in 2025 — context only, never scored: WeSee does not score global hiring.) With a U.S. presence filed and no evidence of shrinkage, the factor scores 85.",
              kind: "note",
              url: TEN_K,
            },
            {
              text: "FACTOR LINE: 85 = the pillar score (other factors not disclosed: full-time share is not filed — the filing covers full-time and part-time workers together; contractor share is not filed)",
              result: "85",
              kind: "total",
            },
            {
              text: "Context inside (never scored): by region the bank reports North America 185,208 workers — that figure includes Canada and is NOT the U.S. count; the filed U.S. figure is the 58%.",
              kind: "note",
              url: TEN_K,
            },
          ],
        },
        {
          title: "H-1B INTENSITY — PRINTED, NOT SCORED",
          lines: [
            {
              text: "PRINTED LINE (Clause 5): \"USCIS approved 3,068 H-1B petitions for JPMorgan Chase in FY2025 — 553 initial + 2,515 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\"",
              kind: "note",
            },
            {
              text: "The factor's denominator is a filed U.S. headcount COUNT; the bank files only a share (58%), so the factor cannot score and the pillar re-normalizes without it — the pillar stays 85.",
              kind: "note",
              url: TEN_K,
            },
          ],
        },
      ],
      factors: {
        full_time_employment: {
          status: "not_disclosed",
          note: "The FY2025 10-K (Item 1, Human Capital) covers full-time AND part-time employees together ([[318,512]] globally) and files no FT/PT split — word searches confirm only that framing sentence. A filed full-time share is what this factor scores; none exists",
          links: [{ text: "318,512", url: TEN_K }],
        },
        domestic_hiring: {
          status: "scored",
          note: "Trend rule (U.S. Workforce Rule v1.3, locked 2026-10-24 — the old share half is retired) → 85 = the factor score and the pillar score. The bank files no U.S. headcount for any year, only the current share ([[58%]] of workers located in the U.S.), so there is no U.S. change to measure — growth is UNMEASURABLE; the worldwide total grew by [[1,279]] in 2025, printed as context only, never scored (the worldwide fallback is rejected by M, D-2). With a U.S. presence filed and no evidence of shrinkage, the factor scores 85. Context inside, never scored: by region the bank reports North America [[185,208]] workers — that figure includes Canada and is NOT the U.S. count; the filed U.S. figure is the 58%",
          links: [
            { text: "58%", url: TEN_K },
            { text: "1,279", url: TEN_K },
            { text: "185,208", url: TEN_K },
          ],
        },
        training_investment: {
          status: "removed_by_m",
          note: "Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors",
        },
        contractor_dependence: {
          status: "not_disclosed",
          note: "The Human Capital section excludes contractors and no contractor count or share is filed, so that factor is dormant and the pillar re-normalizes over the one filed factor",
        },
        h1b_intensity: {
          status: "disclosed_not_scored",
          note: "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: JPMorgan Chase & Co — 553 initial + 2,515 continuing = 3,068 approvals. The factor scores only where a filed U.S. headcount COUNT exists (Clause 5); the bank files only a [[58%]] share, so the factor cannot score, the pillar re-normalizes without it (stays 85), and the count prints on the card (Clause 5 line)",
          links: [{ text: "58%", url: TEN_K }],
        },
      },
    },
    local_economic: {
      score: 63,
      sentence:
        "On [[$56.2B]] of U.S. profit it booked [[$11.0B]] of U.S. tax — a [[19.6%]] rate.",
      sentenceLinks: [
        { text: "$56.2B", url: TEN_K },
        { text: "$11.0B", url: TEN_K },
        { text: "19.6%", url: TEN_K },
      ],
      footnote:
        "Scored under Local Economic Contribution Rule v1.0, locked 2026-10-20, on the Taxes factor only.",
      rule: "Local Economic Contribution Rule v1.0; Taxes factor only",
      blocks: [
        {
          title: "Local Economic Contribution — 63",
          lines: [
            {
              text: "U.S. tax booked: federal $3,109M current + $4,447M deferred → $7,556M; state & local $2,559M current + $906M deferred → $3,465M; together → $11,021M",
              kind: "step",
              url: TEN_K,
            },
            {
              text: "$11,021M (U.S. tax booked) ÷ $56,184M (U.S. profit before tax) → 19.6% → on the draft scale (17% = 50 · 21% federal statutory rate = 70)",
              result: "63",
              kind: "total",
              url: TEN_K,
            },
            {
              text: "Not disclosed, so not scored in this pillar: U.S. investment (the filing gives long-lived assets by geography in words only — no U.S. additions figure), domestic suppliers, U.S. R&D.",
              kind: "note",
            },
            {
              text: "Context inside (never scored): cash taxes actually paid in the U.S. were about $633M net in 2025 (federal refunds offset state payments) — the locked rule scores the booked provision, not cash, for every company.",
              kind: "note",
              url: TEN_K,
            },
          ],
        },
      ],
      factors: {
        domestic_investment: {
          status: "not_disclosed",
          note: "No U.S. additions flow is filed anywhere: Note 31 gives long-lived assets by geography in WORDS only (majority in the U.S.; not significant vs total assets) — the draft requires a filed flow, and a stock share is never scored. North America revenue [[$139,689M]] of [[$182,447M]] and North America pre-tax income [[$55,113M]] are regional figures (they include Canada), printed as context only, never presented as U.S. figures",
          links: [
            { text: "$139,689M", url: TEN_K },
            { text: "$182,447M", url: TEN_K },
            { text: "$55,113M", url: TEN_K },
          ],
        },
        domestic_suppliers: {
          status: "not_disclosed",
          note: "No supplier-spend or purchases-by-origin split is filed",
        },
        us_rd: {
          status: "not_disclosed",
          note: "No R&D line and no geographic R&D split is filed",
        },
        taxes: {
          status: "scored",
          note: "U.S. provision IS filed (FY2025 10-K Note 25: U.S. federal [[$3,109M]] current + [[$4,447M]] deferred = [[$7,556M]]; U.S. state & local [[$2,559M]] current + [[$906M]] deferred = [[$3,465M]]; together [[$11,021M]] on U.S. pre-tax income [[$56,184M]] → [[19.6%]]) → factor 63 under the locked rule = the pillar (Taxes alone; anchors 17% = 50 · 21% statutory = 70). Finding F-2 holds for JPMorgan too: it DOES file a U.S./foreign tax split. Context only, never scored: U.S. cash taxes paid were about [[$633M]] net in 2025 (federal −[[$1,099M]] net refunds + state & local [[$1,732M]]) — the locked rule scores the booked provision, not cash",
          links: [
            { text: "$3,109M", url: TEN_K },
            { text: "$4,447M", url: TEN_K },
            { text: "$7,556M", url: TEN_K },
            { text: "$2,559M", url: TEN_K },
            { text: "$906M", url: TEN_K },
            { text: "$3,465M", url: TEN_K },
            { text: "$11,021M", url: TEN_K },
            { text: "$56,184M", url: TEN_K },
            { text: "19.6%", url: TEN_K },
            { text: "$633M", url: TEN_K },
            { text: "$1,099M", url: TEN_K },
            { text: "$1,732M", url: TEN_K },
          ],
        },
      },
    },
    layoffs_high_profits: {
      score: 65,
      sentence:
        "No single mass round — instead, rolling cuts adding up to about 1,260 verified U.S. jobs across 2025–26, while profits stayed near record levels ([[$57.0B]] in 2025).",
      sentenceLinks: [{ text: "$57.0B", url: TEN_K }],
      rule: "Layoff Rule v1.0",
      blocks: [
        {
          title: "Layoffs — 65",
          lines: [
            { text: "● Start", result: "100", kind: "step" },
            {
              text: "− Jobs cut in the window (Oct 2023 – Oct 2026), verified count ≈1,260 → band 1,000–4,999",
              result: "−25",
              kind: "step",
            },
            {
              text: "− Repetition: distinct rounds in 2025 and again in 2026",
              result: "−10",
              kind: "step",
            },
            {
              text: "+ Credits → +0 (the bank bought back $31.6B of its own stock in 2025, so the zero-buyback credit does not apply; severance at scale is not disclosed; no documented 60+ day transfer window)",
              kind: "step",
              url: TEN_K,
            },
            { text: "=", result: "65", kind: "total" },
            {
              text: "How the count is built (the judgment is printed, per Show-Your-Work): no single announced round of 1,000+ was found. The bank ran rolling reductions through 2025–26; the rule counts 1,000+ roles in one announcement OR one aggregated WARN program, so the WARN-verified notices under the program are added: Jersey City NJ 475 in 2025 + 541 in 2026 (the five listed 2026 notices sum to 540 — a one-person discrepancy in the sources, flagged in the evidence pack) + a Plano TX call-center closure of 244 reported by one source. New Jersey WARN alone is ≈1,016 — the band is the same with or without Texas. The February 2025 announced tranche (\"fewer than 1,000\") is NOT added on top — the WARN notices are the verification of the same program, and nothing is double-counted.",
              kind: "note",
            },
            {
              text: "Profit context: the bank was profitable every window year ($49.6B · $58.5B · $57.0B), so no loss-year discount applies.",
              kind: "note",
              url: TEN_K,
            },
          ],
        },
      ],
      factors: {
        layoff_severity: {
          status: "scored",
          note: "Inside Layoff Rule v1.0: NO single announced round of 1,000+ was found. The bank ran rolling reductions through 2025–26; the rule counts 1,000+ roles in one announcement OR one aggregated WARN program, so the WARN-verified notices under the program are aggregated: Jersey City NJ 475 in 2025 (121 + 145 + 63 + 88 + 58) + 541 in 2026 as tallied (the five listed 2026 notices sum to 540 — a one-person discrepancy in the sources, flagged in the pack, not silently resolved) + a Plano TX call-center closure of 244 reported by ONE lower-quality source (single-sourced, flagged) = ≈1,260 documented → band 1,000–4,999 → −25. NJ WARN alone is ≈1,016 — the band is the same with or without Texas. Segment share: documented count ≈0.4% of the firm; no disclosed affected-segment denominator reaches 5% → −0. The February 2025 announced tranche (\"fewer than 1,000\", Reuters / Barron's, Feb 12, 2025) is NOT added on top — the WARN notices verify the same program, and nothing is double-counted. 2024 NJ rounds (reported; sizes not verified) are NOT counted",
        },
        profitability: {
          status: "scored",
          note: "Inside Layoff Rule v1.0: the bank was profitable every window year (10-K net income [[$49,552M]] 2023 · [[$58,471M]] 2024 · [[$57,048M]] 2025) — no loss-year discount applies",
          links: [
            { text: "$49,552M", url: TEN_K },
            { text: "$58,471M", url: TEN_K },
            { text: "$57,048M", url: TEN_K },
          ],
        },
        buybacks: {
          status: "scored",
          note: "Inside Layoff Rule v1.0: credits evaluated leg by leg and = +0 — the zero-buyback credit FAILS (the bank repurchased [[$31,591M]] of its own stock in 2025; 2024: [[$18,830M]]; 2023: [[$9,824M]]); severance at scale is NOT VERIFIED (a full-text search of the FY2025 10-K finds no severance figure — zero matches; the proxy describes a broad-based U.S. Severance Plan but no disclosed at-scale dollar total was located); no documented 60+ day transfer window (public redeployment statements, incl. 14,000 open positions cited Feb 2025, are context only)",
          links: [
            { text: "$31,591M", url: TEN_K },
            { text: "$18,830M", url: TEN_K },
            { text: "$9,824M", url: TEN_K },
          ],
        },
      },
    },
    ceo_pay_ratio: {
      score: 18,
      sentence:
        "CEO Jamie Dimon actually took home [[$82.3M]] in 2025 — [[735]] times the typical worker's [[$111,905]].",
      sentenceLinks: [
        { text: "$82.3M", url: DEF14A },
        { text: "735", url: DEF14A },
        { text: "$111,905", url: DEF14A },
      ],
      footnote:
        "Scored on CEO Pay Rule v2.0 — at [[735:1]] the recalibrated top end does not reach this ratio, so the score is the same 18 under v1.1 and v2.0.",
      footnoteLinks: [{ text: "735:1", url: DEF14A }],
      rule: "CEO Pay Rule v2.0, realized pay — what he actually took home",
      blocks: [
        {
          title: "CEO Pay — 18",
          lines: [
            { text: "1. Salary", result: "$1,500,000", kind: "step", url: DEF14A },
            { text: "2. Bonus actually paid", result: "$5,000,000", kind: "step", url: DEF14A },
            { text: "3. Other pay", result: "$1,587,852", kind: "step", url: DEF14A },
            {
              text: "4. Stock that vested in 2025 (297,186 shares)",
              result: "$74,214,007",
              kind: "step",
              url: DEF14A,
            },
            {
              text: "5. Options exercised in 2025",
              result: "$0 (the proxy states there were none)",
              kind: "step",
              url: DEF14A,
            },
            { text: "= Total actually taken home", result: "$82,301,859", kind: "total" },
            {
              text: "÷ Typical worker's pay $111,905 → 735× more → on the published scale (500× = 25 · 1,000× = 10)",
              result: "18",
              kind: "total",
            },
            {
              text: "Not counted, per the rule: the $32,500,000 of stock awards in the proxy's summary table — that is a grant-date promise, not pay received; the $44,872 change in pension value (not in the rule's component list); and the 2021 special retention award of stock appreciation rights — unexercised and not vested in 2025, so it counts $0 until the year it vests or is exercised.",
              kind: "note",
              url: DEF14A,
            },
            {
              text: "On paper the bank reports 363:1 — it counts the $32.5M grant-date promise instead of the $74.2M that actually vested, against the same median. Footnote only, per the rule.",
              kind: "note",
              url: DEF14A,
            },
          ],
        },
      ],
      factors: {
        ceo_compensation: {
          status: "scored",
          note: "Inside CEO Pay Rule v1.1 (realized pay [[$82,301,859]] — salary [[$1,500,000]] + bonus actually paid [[$5,000,000]] + all other [[$1,587,852]] + stock vested [[$74,214,007]] ([[297,186 shares]]) + [[$0]] options exercised — the proxy states there were none in 2025). The CEO scored is Jamie Dimon. Never counted, per the rule: the [[$32,500,000]] of stock awards in the summary table (a grant-date promise, not pay received); the [[$44,872]] change in pension value (not in the rule's component list); and the July 2021 special retention award of stock appreciation rights — unexercised and not vested in 2025 (exercisable in year five, 2026), so it counts [[$0]] until the year it vests or is exercised. Bonus timing printed in the pack: the $5,000,000 bonus is the cash incentive earned for the performance year, awarded the following January; the 2024 bonus was also $5,000,000, so the realized total is $5,000,000 on either convention",
          links: [
            { text: "$82,301,859", url: DEF14A },
            { text: "$1,500,000", url: DEF14A },
            { text: "$5,000,000", url: DEF14A },
            { text: "$1,587,852", url: DEF14A },
            { text: "$74,214,007", url: DEF14A },
            { text: "297,186 shares", url: DEF14A },
            { text: "$32,500,000", url: DEF14A },
            { text: "$44,872", url: DEF14A },
            { text: "$0", url: DEF14A },
          ],
        },
        median_worker_compensation: {
          status: "scored",
          note: "Inside CEO Pay Rule v1.1 (worldwide median [[$111,905]], hierarchy step (c), flagged → [[735:1]] → 18). On paper the bank reports [[363:1]] — it counts the [[$32.5M]] grant-date promise ([[$40,644,723]] incl. firm-paid benefits) instead of the [[$74.2M]] that actually vested, against the same median. Footnote only, per the rule",
          links: [
            { text: "$111,905", url: DEF14A },
            { text: "735:1", url: DEF14A },
            { text: "363:1", url: DEF14A },
            { text: "$32.5M", url: DEF14A },
            { text: "$40,644,723", url: DEF14A },
            { text: "$74.2M", url: DEF14A },
          ],
        },
      },
    },
    outsourcing_exposure: {
      score: null,
      status: "Not yet measured by WeSee",
      sentence:
        "Federal records prove the bank moved some U.S. service jobs abroad in 2013–2021. No proven move was found in the current three-year window. The rule for this pillar is locked, but the full search protocol is not complete, so no score is printed yet.",
      blocks: [
        {
          title: "Jobs Moved Abroad / Production Moved Abroad — search findings",
          lines: [
            {
              text: "The federal Trade Adjustment Assistance record for this bank, read on the Labor Department's own determination pages:",
              kind: "note",
            },
            {
              text: "- CERTIFIED foreign-shift cases (the government's own finding that the firm shifted the service to a foreign country): Brookfield + Neenah, Wisconsin client-data teams (TA-W-95,303 / 95,303A, 2019) · Brooklyn, NY hedge-fund services (TA-W-92,031, 2016). A further Jersey City group was certified in 2021 (TA-W-97,098); an earlier Florence, SC group was covered by a 2013-era certification (TA-W-83,177).",
              kind: "note",
            },
            {
              text: "- DENIED petitions (allegations the government tested and did not prove — they count for nothing): six, 2009–2016, including a Florence, SC call center where investigators found the work had moved to another U.S. location.",
              kind: "note",
            },
            {
              text: "- The TAA program ended June 30, 2022 — no determination can exist for the current window. In the window itself (Oct 2023 – Oct 2026): the FY2025 10-K states no move of U.S. work abroad, and the 2025–26 WARN notices name no foreign destination. No proven in-window move was found.",
              kind: "note",
            },
            {
              text: "The search protocol was not run end-to-end (the Labor Department's full petitions data file and the FY2023–24 filing sweeps are outstanding), so no score — not even a provisional one — is printed for either pillar.",
              kind: "note",
            },
            {
              text: "Exposure context (printed, never scored): 42% of the bank's workers are outside the U.S. — operating abroad is not a moved U.S. job, and foreign growth is never a negative while the U.S. workforce grows (Operating Rule 4).",
              kind: "note",
              url: TEN_K,
            },
          ],
        },
      ],
      factors: {
        offshore_workforce: {
          status: "not_disclosed",
          note: "No offshore-workforce share as such is filed. JPMorgan files a U.S./non-U.S. employment split ([[58%]] U.S. / [[42%]] outside) — the 42% is printed on the card as exposure context, never scored: a foreign workforce serving foreign operations is not an offshore/outsourced share, and operating abroad is not itself a moved U.S. job. Foreign growth is never a negative while the U.S. workforce grows (Operating Rule 4)",
          links: [
            { text: "58%", url: TEN_K },
            { text: "42%", url: TEN_K },
          ],
        },
        outsourced_services: {
          status: "not_disclosed",
          note: "Vendor/offshore services spend is not published",
        },
      },
    },
    community_resilience: {
      score: null,
      status: "Not yet measurable",
      sentence:
        "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against JPMorgan's coverage.",
      footnote:
        "No filed or public company-level source exists for any company. No number is estimated.",
      blocks: [
        {
          title: "Community Resilience — Not yet measurable",
          lines: [
            {
              text: "No reproducible source exists today to measure any company's community resilience, so this pillar is excluded from the coverage count for every company — it lowers no one's score and raises no one's. When a source exists that can carry it, every company is scored on it at once.",
              kind: "note",
            },
          ],
        },
      ],
      factors: {
        local_investment: {
          status: "not_measurable",
          note: "No company-level source exists for any company (Class U — excluded from coverage for everyone)",
        },
        community_programs: {
          status: "not_measurable",
          note: "Program spend is self-reported marketing material, not a filing",
        },
      },
    },
    production_abroad: {
      score: null,
      status: "Not yet measured by WeSee",
      sentence:
        "A bank produces services, not goods, and no production move was found in the records searched. Same protocol status as Jobs Moved Abroad, so no score is printed yet.",
      blocks: [
        {
          title: "Production Moved Abroad — Not yet measured by WeSee",
          lines: [
            {
              text: "The locked harm-evidence rule (Outsourcing + Production Abroad Rule v1.0) searches proven U.S.-to-abroad moves instead of these design factors. For JPMorgan the §8 protocol is incomplete, same as Jobs Moved Abroad above, and no production move was located in any channel searched. JPMorgan produces services, not goods: there is no goods production in the U.S. to be moved, which is printed on the card rather than scored as either a pass or a fail.",
              kind: "note",
            },
          ],
        },
      ],
      factors: {
        domestic_production: {
          status: "not_measurable",
          note: "Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for JPMorgan the §8 protocol is incomplete, same as Jobs Moved Abroad above, and no production move was located in any channel searched. JPMorgan produces services, not goods: there is no goods production in the U.S. to be moved, which is printed on the card rather than scored as either a pass or a fail)",
        },
        imported_goods: {
          status: "not_measurable",
          note: "USITC counts category imports, not a company's imports. A bank imports no goods inventory; no exposure line is scored",
        },
      },
    },
    lobbying_activity: {
      score: 44,
      sentence:
        "It spent [[$4,380,000]] lobbying the federal government in 2025, plus $2,525,978 through its two PACs in the 2023–24 election cycle — $6,905,978 in total.",
      sentenceLinks: [{ text: "$4,380,000", url: OPENSECRETS }],
      footnote:
        "Verified 2026-10-15 from the Senate lobbying database after the OpenSecrets page would not render at the original build; applied 2026-10-20 under Bundle B.",
      rule: "Lobbying Rule v1.1: lobbying year total + PAC total, added, one scale",
      blocks: [
        {
          title: "Lobbying — 44",
          lines: [
            {
              text: "1. Federal lobbying, 2025",
              result: "$4,380,000",
              kind: "step",
              url: OPENSECRETS,
            },
            {
              text: "JPMORGAN CHASE HOLDINGS LLC (in-house registrant): Q1 $940,000 + Q2 $1,180,000 + Q3 $1,140,000 + Q4 $1,120,000 = $4,380,000 — matching the printed 2025 total on its OpenSecrets client summary (id D000000103), which rolls the Holdings LLC filings into the JPMorgan Chase & Co profile.",
              kind: "note",
              url: OPENSECRETS,
            },
            {
              text: "2. PAC spending, 2023–24 cycle (the most recent completed cycle)",
              result: "$2,525,978",
              kind: "step",
            },
            {
              text: "JPMORGAN CHASE & CO. PAC $1,110,274 + JPMORGAN CHASE & CO. FEDERAL POLITICAL ACTION COMMITTEE $1,415,704 → $2,525,978 (two committees, one company — both lines shown; OpenSecrets PAC profiles, FEC data)",
              kind: "note",
            },
            {
              text: "= $4,380,000 + $2,525,978 → $6,905,978 → on the published scale ($5M = 50 · $10M = 35)",
              result: "44",
              kind: "total",
            },
            {
              text: "(At the original build this pillar was NOT SCORED — the OpenSecrets page was read three times on 2026-10-14 and its totals table did not render. The rebuild read the total on the source page and cross-checked it against the Senate LDA self-filer sums; applied 2026-10-20 under Bundle B. Federal lobbying in 2024 was $3,600,000 — context only.)",
              kind: "note",
            },
            {
              text: "Limitation printed with the pillar: federal lobbying only — state lobbying and trade-group spending are not counted.",
              kind: "note",
            },
          ],
        },
      ],
      factors: {
        lobbying_spend: {
          status: "scored",
          note: "Lobbying Rule v1.1: calendar-2025 federal lobbying total from the OpenSecrets client summary (JPMorgan Chase & Co, id D000000103) — [[$4,380,000]] (JPMORGAN CHASE HOLDINGS LLC in-house: Q1 [[$940,000]] + Q2 [[$1,180,000]] + Q3 [[$1,140,000]] + Q4 [[$1,120,000]]), read on the rendered page in the 2026-10-15 LDA rebuild and cross-checked exactly against the LDA self-filer sums. At the original build the page's totals table did not render (opened three times) and the factor was NOT SCORED THIS RUN rather than estimated; applied 2026-10-20 under Bundle B. Verified context: 2024 lobbying $3,600,000. Limitation printed with the pillar: federal lobbying only — state lobbying and trade-group spending are not counted",
          links: [
            { text: "$4,380,000", url: OPENSECRETS },
            { text: "$940,000", url: OPENSECRETS },
            { text: "$1,180,000", url: OPENSECRETS },
            { text: "$1,140,000", url: OPENSECRETS },
            { text: "$1,120,000", url: OPENSECRETS },
          ],
        },
        political_contributions: {
          status: "scored",
          note: "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. JPMorgan has TWO active connected PACs with the same treasurer, so the company's PAC spending is the sum, both lines printed: JPMORGAN CHASE & CO. PAC (FEC C00128512) total spent $1,110,274 (only $3,000 of it to federal candidates) + JPMORGAN CHASE & CO. FEDERAL POLITICAL ACTION COMMITTEE (FEC C00104299) total spent $1,415,704 ($726,000 to federal candidates) = $2,525,978, 2023–24 completed cycle, verified on each committee's exact OpenSecrets PAC profile page (FEC data). The committees' 2025–26 cycle-to-date figures are NOT used — the rule takes the completed cycle. Final chain: [[$4,380,000]] + $2,525,978 = $6,905,978 → 44. The old 65/35 in-pillar split is superseded, as on the Amazon/Apple/Walmart/Meta/Microsoft/Nvidia/Berkshire maps",
          links: [{ text: "$4,380,000", url: OPENSECRETS }],
        },
      },
    },
  },
  sources: [
    {
      label: "Form 10-K FY2025 (filed 2026-02-13, accession 0001628280-26-008131)",
      url: TEN_K,
    },
    {
      label: "DEF 14A 2026 (filed 2026-04-06, accession 0000019617-26-000096)",
      url: DEF14A,
    },
    {
      label:
        "OpenSecrets — JPMorgan Chase & Co lobbying client summary + org profile (id D000000103); Commercial Banks industry page (2024 lobbying); PAC profiles C00128512 and C00104299 (2023–24 cycle).",
      url: OPENSECRETS,
    },
    {
      label:
        "U.S. Department of Labor — TAA determinations TA-W-97,098 · TA-W-95,303 · TA-W-95,303A · TA-W-92,031 · TA-W-85,201 · TA-W-83,113 · TA-W-80,102 · TA-W-71,903 · TA-W-81,401 · TA-W-85,446 · TA-W-85,217 · TA-W-95,059 · TA-W-59,591.",
    },
    {
      label: "Reuters / Barron's (Feb 12, 2025) and New Jersey WARN notices — layoff window.",
    },
    {
      label:
        "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): workers on SNAP/Medicaid by employer, 11 reporting states, snapshot September 2025 (printed fact, not scored)",
      url: GAO,
    },
    {
      label:
        "MIT Living Wage Calculator — national benchmark: average of all 50 state pages: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md).",
    },
    {
      label:
        "USCIS H-1B Employer Data Hub, FY2025 employer file (JPMorgan Chase & Co; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md).",
    },
    {
      label:
        "Senate LDA database via LDA_LOBBYING_REBUILD_2026-10-15.md (lobbying cross-check; no direct page URL in the card materials).",
    },
  ],
  rules:
    "Methodology v1.0 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · Worker Pay Fairness Rule v1.3 · U.S. Workforce Rule v1.3 · Score Bands v1.0 · Weights Defense v1.0 · Show-Your-Work Spec v1.0 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0 (findings only for JPMorgan — protocol incomplete)",
};
