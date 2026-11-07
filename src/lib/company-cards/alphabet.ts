// Alphabet (GOOGL) — verbatim data from ALPHABET_COMPANY_CARD.md BUILD FILE v1.0
// (period FY2025, year ended Dec 31, 2025; updated 2026-10-20 under Bundles A–D).
// Data only — no number on this card is generated or estimated. Source links per
// FINISH_LINK_SPEC_2026-11-06: every [marker] marker's text appears in the matching
// links array with its exact source-page URL; step-line inputs link via the line's
// `url`. Stats with no exact source page in the card / factor map / evidence pack
// are listed in FINISH_DEFECTS_ALPHABET.md, not linked to a wrong page.
// Alphabet's H-1B count is the Google LLC figure per its card file — used exactly
// as the card file states; the single-name re-read figure was NOT substituted.

import type { CompanyCard, StepLine } from "./amazon";

const DEF26 = "https://www.sec.gov/Archives/edgar/data/1652044/000130817926000342/goog-20260424.htm";
const K25 = "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm";
const OS = "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000067823";
const FEC = "https://www.fec.gov/data/committee/C00428623/";
const GAO = "https://www.gao.gov/assets/890/888620.pdf";
const DOL = "https://www.dol.gov/sites/dolgov/files/ETA/tradeact/pdfs/TAA_Termination_Fact_Sheet.pdf";

const s = (text: string, result?: string, url?: string): StepLine => ({ text, result, kind: "step", url });
const t = (text: string, result?: string, url?: string): StepLine => ({ text, result, kind: "total", url });
const c = (text: string): StepLine => ({ text, kind: "check" });
const n = (text: string, url?: string): StepLine => ({ text, kind: "note", url });

export const ALPHABET_CARD: CompanyCard = {
  overall: 51,
  band: "Mixed",
  coverage:
    "5 of 7 ready pillars scored from filed sources. On the scored pillars Alphabet averages 51; the coverage cap for 5 of 7 (69) does not lower it. One pillar (Community Resilience) is not yet measurable for any company. With all pillars weighted equally the score would be 46 — Weak; we publish that next to the official score, as our weights rule requires.",
  period: "Period scored: FY2025 (year ended Dec 31, 2025) · Scoring date: 2026-10-14 · Updated 2026-10-20 under the final locked rules (Bundles A–D) · Methodology v1.0",
  overallBlock: {
    title: "The overall score",
    lines: [
      s("1. Worker Standards: 77 × weight 16", "1,232"),
      s("2. Local Economic Contribution: 40 × weight 14", "560"),
      s("3. Layoffs: 80 × weight 12", "960"),
      s("4. CEO Pay: 8 × weight 10", "80"),
      s("5. Lobbying: 23 × weight 7", "161"),
      t("= Add them up, divide by the total weight (59): 2,993 ÷ 59", "51"),
      c("✓ Coverage cap checked: 5 of 7 ready pillars are scored (71%), so the score may not pass 69 — 51 is below it, the cap does not change the score → Overall 51 — Mixed"),
      c("✓ Layoff cap checked: the layoff pillar is 80 — not triggered."),
      c("✓ Equal weights give 46 — one band lower (Weak). Published next to the score, as the Weights Defense requires."),
      n("What could still change (labelled, not a score): if the two harm-evidence protocols later complete with no proven move (100 each, the locked rule's clean-record result), the seven scorable pillars would give (1,232 + 560 + 960 + 80 + 1,000 + 800 + 161) ÷ 77 → 62 — Mixed. U.S. Workforce would remain unmeasured until Alphabet files a U.S. headcount. This scenario is arithmetic, not Alphabet's rating — the rating is 51."),
      n("(Scored pillars only; unscored pillars excluded and weights re-normalized — Insufficient-Data Rule v1.2.)"),
    ],
  },
  pillars: {
    worker_standards: {
      score: 77,
      sentence:
        "Its typical worker earns [[$310,826]] a year — far above the cost of living — but Alphabet keeps about [[$692,642]] in profit per worker, more than twice that pay.",
      sentenceLinks: [{ text: "$310,826", url: DEF26 }, { text: "$692,642", url: K25 }],
      footnote:
        "Scored on pay, the only factor in this pillar verifiable from filings — the same basis as every company. Alphabet does not disclose a U.S. pay figure, so this pillar is scored on its worldwide median pay, flagged inside.",
      rule: "Worker Pay Fairness Rule v1.3; pay factor only",
      blocks: [
        { title: "QUESTION 1 — Can the worker live on the pay?", lines: [
          s("$310,826 (worker earns) → $49,246 (worker needs to live on) → $6.31 earned per $1 needed", "score 100"),
        ] },
        { title: "QUESTION 2 — Is it what other Americans make?", lines: [
          s("$310,826 (worker earns) → $62,608 (typical American worker makes, BLS 2025: $1,204/week x 52) → 4.96", "score 100"),
        ] },
        { title: "QUESTION 3 — How is the money split?", lines: [
          n("First show where $692,642 comes from — it is one division, never present it bare:"),
          s("$132.2B (Alphabet's profit for the whole year) ÷ 190,820 (workers) = $692,642 (profit per worker — what the company keeps for each worker it has; a measuring number, not a payment)", undefined, K25),
          s("$310,826 (worker gets) + $692,642 (company keeps per worker) → worker's share 31%", "score 32"),
        ] },
        { title: "FINAL LINE", lines: [
          t("100 + 100 + 32 → ÷ 3", "77"),
          c("Dignity gate: not triggered — pay is far above the national living wage."),
          n("Known limit, printed with the score: profit per worker is company-wide because no company files a U.S.-only profit — for every company alike. Alphabet's pay figure is worldwide too (see note above); both halves of every comparison are labelled."),
          n("Pay figure note (printed with the score): Alphabet does not disclose a U.S. pay figure. Its proxy reports a median worker pay of $310,826 measured across ALL of its employees worldwide (its own filed methodology: every employee except the CEO, counted Dec 31, 2025). Per the rule's hierarchy the worldwide figure is used and flagged: \"U.S. pay figure not disclosed — scored on the worldwide figure.\" The same figure is used in all three questions and in the CEO ratio.", DEF26),
          n("Sources: DEF 14A 2026, pay-ratio section (p.56); MIT Living Wage; 10-K FY2025 (net income $132,170M; 190,820 employees).", K25),
          n("PRINTED FACT — NOT SCORED (M's decision 2026-10-11; standard for EVERY company card): \"Alphabet (Google) is not among the employers reported in the U.S. GAO's count of workers on food stamps (SNAP) or Medicaid (report GAO-26-108703): it does not appear in any of the report's top-25 employer tables for the 11 reporting states (September 2025). The GAO lists only each state's 25 largest employers per program, so not appearing in a table does not mean zero. No national count exists.\" Printed as a government-counted fact with its limits attached; never enters any score.", GAO),
        ] },
      ],
      factors: {
        living_wage: { status: "scored", note: "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 32 → 77, on the worldwide median [[$310,826]] (hierarchy step (c) — Alphabet files no U.S.-only and no full-time-only median; its filed methodology covers every employee except the CEO at Dec 31, 2025; flagged on the card). Q3: profit per worker [[$132,170M]] ÷ [[190,820]] = [[$692,642]] → worker's share 31.0% → 32. Dignity gate not triggered.", links: [{ text: "$310,826", url: DEF26 }, { text: "$132,170M", url: K25 }, { text: "190,820", url: K25 }, { text: "$692,642", url: K25 }] },
        benefits: { status: "not_disclosed", note: "No benefits dollar figure or per-worker cost is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none; Benefits is dormant for every company until a U.S.-filed source exists)" },
        workplace_safety: { status: "not_disclosed", note: "No company-wide filed rate; OSHA holds establishment-level data only (same basis as the other built maps)" },
        employee_retention: { status: "not_disclosed", note: "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build in comparable U.S.-only form (the pack records none; Retention is dormant under the U.S.-only principle)" },
      },
    },
    us_workforce_commitment: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "Alphabet reports [[190,820]] workers worldwide and does not say how many of them are in the United States.",
      sentenceLinks: [{ text: "190,820", url: K25 }],
      footnote:
        "Class W — counts in no company's coverage. The underlying fact stands: Alphabet does not file a U.S. headcount. The 10-K discloses only the worldwide total (190,820), no U.S. split, no U.S. full-time share, no contractor count. (The worldwide change, +7,497 in 2025, is context only — the locked rule rejects it for scoring: hiring that may be outside the U.S. cannot earn credit in a U.S. pillar.)",
      blocks: [
        { title: "U.S. Workforce Commitment — not yet measured", lines: [
          n("PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 5,512 H-1B petitions for Alphabet in FY2025 — 1,042 initial + 4,470 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" The H-1B Intensity factor scores only where a U.S. headcount is filed; Alphabet files none, so the factor does not score and this count is the standing record (Clause 7(iii))."),
          n("Source: USCIS H-1B Employer Data Hub, FY2025 employer file (read under Google LLC; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md)."),
        ] },
      ],
      factors: {
        full_time_employment: { status: "not_disclosed", note: "Alphabet files one worldwide total only ([[190,820]] employees at Dec 31, 2025) — no U.S. count and no full-time/part-time split.", links: [{ text: "190,820", url: K25 }] },
        domestic_hiring: { status: "not_disclosed", note: "Needs a filed U.S. headcount (share + scored-year change); none is published. Worldwide context printed on the pack/card, never scored (M's D-2): headcount grew +7,497 in 2025 (183,323 → [[190,820]]) — worldwide growth is not a U.S. figure.", links: [{ text: "190,820", url: K25 }] },
        training_investment: { status: "removed_by_m", note: "Removed from the design by M 2026-10-14 — counted in the 26-factor design total, not in the 25 active factors" },
        contractor_dependence: { status: "not_disclosed", note: "No contractor/agency headcount or share is filed" },
        h1b_intensity: { status: "disclosed_not_scored", note: "PRINTED, NOT SCORED — Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2025: Google LLC — 1,042 initial + 4,470 continuing = 5,512 approvals. The factor scores only where a U.S. headcount is filed (Clause 5); Alphabet files none, so the count prints on the card (Clause 5 line) and the factor does not score." },
      },
    },
    local_economic: {
      score: 40,
      sentence:
        "On the U.S. earnings it books, Alphabet's U.S. tax provision rate is [[15.1%]] — below the 21% federal statutory rate.",
      sentenceLinks: [{ text: "15.1%", url: K25 }],
      footnote: "Local Economic Contribution Rule v1.0, locked 2026-10-20; scored on Taxes, the only factor filed in comparable form.",
      rule: "Local Economic Contribution Rule v1.0, locked 2026-10-20; Taxes alone",
      blocks: [
        { title: "Local Economic Contribution — 40", lines: [
          s("1. U.S. tax provision (federal + state, as Alphabet files them combined)", "$21,621M", K25),
          s("2. ÷ U.S. (\"Domestic operations\") pre-tax income", "$143,591M", K25),
          t("→ U.S. rate 15.1% → On the locked scale (13% = 30 · 17% = 50)", "40"),
          n("The other factors: Domestic Investment — Alphabet files investment by business segment and as a worldwide total ($91.4B in 2025), not by country; the U.S. share of what it OWNS (long-lived assets $195,337M of $261,818M = 74.6%) is printed as context only, because the locked rule scores the year's flow, not the accumulated stock. Domestic Suppliers and U.S. R&D — not disclosed (R&D is filed as a worldwide total, $61,087M).", K25),
          n("Source: 10-K FY2025, Notes 2, 14, 15.", K25),
        ] },
      ],
      factors: {
        domestic_investment: { status: "not_disclosed", note: "Alphabet files capital expenditures as a worldwide total ([[$91.4B]] in 2025) and by business segment, not by country — no year's U.S. additions flow is filed. U.S. long-lived assets [[$195,337M]] ÷ [[$261,818M]] = [[74.6%]] are printed on the pack/card as context only — a balance-sheet stock, which the locked rule does not score.", links: [{ text: "$91.4B", url: K25 }, { text: "$195,337M", url: K25 }, { text: "$261,818M", url: K25 }, { text: "74.6%", url: K25 }] },
        domestic_suppliers: { status: "not_disclosed", note: "No supplier-spend or purchases-by-origin split is filed" },
        us_rd: { status: "not_disclosed", note: "Research and development expense of [[$61,087M]] is filed worldwide only; no U.S. split.", links: [{ text: "$61,087M", url: K25 }] },
        taxes: { status: "scored", note: "U.S. provision IS filed (FY2025 10-K Note 14: current federal and state [[$13,378M]] + deferred federal and state [[$8,243M]] = [[$21,621M]] on Domestic pre-tax [[$143,591M]] → 15.1%; Alphabet merges federal and state into one line, unlike Amazon/Costco) → factor 40 under the locked rule = the pillar (Taxes alone). Context only, never scored: U.S. provision is 81.1% of the total provision against a 90.4% domestic share of pre-tax income; total effective rate 16.8% as reconciled in the note.", links: [{ text: "$13,378M", url: K25 }, { text: "$8,243M", url: K25 }, { text: "$21,621M", url: K25 }, { text: "$143,591M", url: K25 }] },
      },
    },
    layoffs_high_profits: {
      score: 80,
      sentence:
        "It has cut jobs in round after round since late 2023 — over 1,000 in January 2024 alone — while profits rose to a record [[$132.2B]]; the rounds were small against its [[190,820]] workers, and it paid severance and gave workers time to find other roles inside.",
      sentenceLinks: [{ text: "$132.2B", url: K25 }, { text: "190,820", url: K25 }],
      rule: "Layoff Rule v1.0; window Oct 2023 – Oct 2026",
      blocks: [{ title: "Layoffs — 80", lines: [
        s("● Start", "100"),
        s("− Roles eliminated in the window → verified band 1,000–4,999", "−25"),
        s("− Cuts reaching 5% of a workforce segment → none (cuts spread across many units)", "−0"),
        s("− Repetition of mass rounds (1,000+ in one program) → one such program (January 2024)", "−0"),
        s("+ Credits → severance paid in the rounds and a 60-day window to find another role inside are documented; the no-buybacks credit does not apply (Alphabet repurchased $45.7B of its own stock in 2025)", "+5", K25),
        t("=", "80"),
        n("Profit context: Alphabet was profitable in every year of the window (net income $73.8B → $100.1B → $132.2B), so no loss-year discount. The January 2023 round (12,000 jobs) is older than the 3-year window and is not counted — it is shown here as pattern history only."),
        n("The count, stated exactly as the evidence supports it: Google does not announce totals. The January 2024 program alone was reported at over 1,000 roles from the company's own announcements (California WARN notices for the program covered 702 Bay Area workers); adding every documented round since — \"Core\" teams ≥200 (Apr–May 2024), Platforms & Devices \"hundreds\" (Apr 2025), Global Business ~200 (May 2025), Cloud design 100+ (Oct 2025), Washington WARN 52 (Aug 2026), and several rounds whose counts the company did not disclose (finance/real estate Apr 2024; Cloud Feb 2025 and summer 2026) — the total stays inside the 1,000–4,999 band, and Alphabet's worldwide headcount GREW over the window (182,502 → 183,323 → 190,820). The pillar scores the band the records prove, never an invented total."),
        n("Inside context (never scored): in September 2025 more than 200 AI-ratings roles held by contractors at a vendor (GlobalLogic) were eliminated — a vendor's workers, not Alphabet's, so they are not in this count. Voluntary exit programs (offered in several divisions in 2025) are offers, not eliminations, and are not counted either."),
        n("Sources: company announcements and confirmations (TechCrunch, Reuters, CNBC, Bloomberg, AP); CA EDD and WA ESD WARN records as cited in the evidence pack; 10-K FY2025 (headcount, buybacks, profits).", K25),
      ] }],
      factors: {
        layoff_severity: { status: "scored", note: "Inside Layoff Rule v1.0: verified band 1,000–4,999 in the window (floor: the January 2024 program alone at >1,000, CA WARN 702 Bay Area; adding every documented round since — \"Core\" ≥200, Platforms & Devices \"hundreds,\" Global Business ~200, Cloud design 100+, WA WARN 52, plus rounds with no disclosed count — stays inside the band; headcount GREW 182,502 → [[190,820]] over the window) → −25; segment share → −0 (cuts spread across many units; no single disclosed segment cut reaches 5%).", links: [{ text: "190,820", url: K25 }] },
        profitability: { status: "scored", note: "Inside Layoff Rule v1.0: profitable in every window year (net income $73,795M → $100,118M → [[$132,170M]]) — no loss-year discount applies.", links: [{ text: "$132,170M", url: K25 }] },
        buybacks: { status: "scored", note: "Inside Layoff Rule v1.0: repetition — one mass program (January 2024 at 1,000+) → −0; credits +5 (severance paid in the rounds and a 60-day internal-application window are documented; the no-buybacks credit does NOT apply — Alphabet repurchased $62,222M in 2024 and [[$45,709M]] in 2025).", links: [{ text: "$45,709M", url: K25 }] },
      },
    },
    ceo_pay_ratio: {
      score: 8,
      sentence:
        "Its CEO actually took home [[$347.1M]] in 2025 — about [[1,117]] times the typical worker's [[$310,826]] — as [[$336.2M]] of stock from earlier years vested in a single year.",
      sentenceLinks: [{ text: "$347.1M", url: DEF26 }, { text: "1,117", url: DEF26 }, { text: "$310,826", url: DEF26 }, { text: "$336.2M", url: DEF26 }],
      rule: "CEO Pay Rule v2.0, realized pay — what he actually took home",
      blocks: [{ title: "CEO Pay — 8", lines: [
        s("1. Salary", "$2,007,692", DEF26),
        s("2. Bonus actually paid", "$0", DEF26),
        s("3. Other pay", "$8,898,387 (of which $8,803,400 is personal security)", DEF26),
        s("4. Stock he received in fiscal 2025", "$336,172,535 (1,642,724 shares vested)", DEF26),
        t("= Total actually taken home", "$347,078,614"),
        t("÷ Typical worker's pay $310,826 → about 1,117× more → on the published scale (1,000× = 10 · 1,500× = 0)", "8", DEF26),
        n("On paper Alphabet reports 35:1 — it uses the proxy's compensation-table total ($10,906,079), which contains no stock at all for 2025: none was granted that year, and the $336.2M that actually vested is invisible to it. We count what he actually took home.", DEF26),
        n("Flag: this pillar is scored on CEO Pay Rule v2.0 (locked 2026-10-20). The v2.0 recalibration changed only the top-end anchors; Alphabet's ratio is in the bottom segment (1,000–1,500:1) under either calibration, so the score is 8 under both."),
        n("Source: DEF 14A 2026, pp.50, 54, 56.", DEF26),
      ] }],
      factors: {
        ceo_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (realized pay [[$347,078,614]] — salary [[$2,007,692]] + bonus $0 + non-equity $0 + all other [[$8,898,387]] (of which [[$8,803,400]] is personal security) + stock vested [[$336,172,535]] ([[1,642,724]] shares); DEF 14A 2026 pp.50, 54). Never counted: $0 stock granted in 2025 — the SCT total [[$10,906,079]] contains no stock at all for 2025.", links: [{ text: "$347,078,614", url: DEF26 }, { text: "$2,007,692", url: DEF26 }, { text: "$8,898,387", url: DEF26 }, { text: "$8,803,400", url: DEF26 }, { text: "$336,172,535", url: DEF26 }, { text: "1,642,724", url: DEF26 }, { text: "$10,906,079", url: DEF26 }] },
        median_worker_compensation: { status: "scored", note: "Inside CEO Pay Rule v2.0 (worldwide median [[$310,826]], hierarchy step (c), flagged → ≈1,117:1 → 8 — the bottom segment is unchanged in v2.0; Alphabet's own filed ratio [[35:1]] printed as a footnote, never scored — it uses the SCT total and never sees the [[$336.2M]] that actually vested).", links: [{ text: "$310,826", url: DEF26 }, { text: "35:1", url: DEF26 }, { text: "$336.2M", url: DEF26 }] },
      },
    },
    outsourcing_exposure: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "No proven case of U.S. jobs moved abroad was found in government records. Three worker petitions alleging 1,050 jobs sit untested at the Labor Department, and 2024 reports of roles rebuilt in India and Mexico have not completed the proof check — so no score is claimed yet.",
      footnote:
        "Locked rule — full search protocol not yet complete for Alphabet. The TAA channel is frozen: the program entered phaseout termination on July 1, 2022, so no certification can exist for any recent move. Three TAA petitions naming Google sit in DOL's pending-petitions table — CA-16 (Nov 25, 2024; 956 workers as alleged), GA-5 (Aug 21, 2024; 62), OR-1 (Aug 14, 2024; 32) — 1,050 workers as alleged. DOL is barred from investigating them. An untested petition is an allegation, not a finding: it deducts nothing. Documented reports, chain not completed: in spring 2024 the company's own internal documents, as reported by CNBC, stated that many of ~50 eliminated Sunnyvale engineering roles would be re-staffed in Mexico and India (part of a \"Core\" cut of at least 200), and the CFO's memo expanded finance hubs in Bangalore, Mexico City and Dublin alongside U.S. finance cuts. No filing statement or WARN pairing completes the locked rule's proof chain for these roles, so no deduction is taken — the reports print as DOCUMENTED, NOT PROVEN.",
      factors: {
        offshore_workforce: { status: "not_disclosed", note: "No offshore-workforce share as such is filed (Alphabet files revenue and long-lived assets by geography, not people; a foreign workforce serving foreign operations is not an offshore/outsourced share, and operating abroad is not itself a moved U.S. job)" },
        outsourced_services: { status: "not_disclosed", note: "Vendor/offshore services spend is not published" },
      },
    },
    community_resilience: {
      score: null, status: "Not yet measurable",
      sentence:
        "No public source yet measures any company's effect on the communities where it operates. This pillar is not scored for any company and does not count against Alphabet's coverage.",
      footnote: "No filed or public company-level source exists for any company. No number is estimated.",
      factors: {
        local_investment: { status: "not_measurable", note: "No company-level source exists for any company (Class U — excluded from coverage for everyone)" },
        community_programs: { status: "not_measurable", note: "Program spend is self-reported marketing material, not a filing" },
      },
    },
    production_abroad: {
      score: null, status: "Not yet measured by WeSee",
      sentence:
        "No proven case of U.S. production moved abroad was found. Alphabet sells services, and no record searched ties a U.S. production shutdown to a move overseas. Same protocol status as Jobs Moved Abroad.",
      footnote:
        "Alphabet is a services and software company; no U.S. production workforce, and no record searched ties a U.S. production shutdown to a foreign move. Its devices are made by contract manufacturers abroad — printed as exposure context only: selling goods made abroad that were never made in the U.S. is not a \"move,\" and the locked rule never scores it as one. Pillar status: NOT YET MEASURED BY WESEE until the §8 protocol completes.",
      factors: {
        domestic_production: { status: "not_measurable", note: "Census/USITC count category units, not a company's units (design classification; the locked harm rule re-founds this pillar on proven production moves — for Alphabet searches were run, same as Jobs Moved Abroad above, and no record ties a U.S. production shutdown to a move overseas, but the §8 protocol is not complete, so the pillar is not yet measured; Alphabet is a services/software company with no U.S. production workforce in any record searched, and its devices are made by contract manufacturers abroad — printed as exposure context only, since selling goods made abroad that were never made in the U.S. is not a \"move\")" },
        imported_goods: { status: "not_measurable", note: "USITC counts category imports, not a company's imports" },
      },
    },
    lobbying_activity: {
      score: 23,
      sentence:
        "It spent [[$16.6M]] lobbying the federal government in 2025, plus [[$1.4M]] through its PAC in the last election cycle — among the largest political spenders in America.",
      sentenceLinks: [{ text: "$16.6M", url: OS }, { text: "$1.4M", url: FEC }],
      rule: "Lobbying Rule v1.1 — lobbying + PAC, added on the same scale",
      blocks: [{ title: "Lobbying — 23", lines: [
        s("1. Spent lobbying the federal government in 2025", "$16,620,000", OS),
        s("2. Its PAC spent in the last completed election cycle (2023–24)", "$1,414,672", FEC),
        t("= Total political spending", "$18,034,672"),
        t("→ On the published scale ($10M = 35 · $20M = 20)", "23"),
        n("Limitation printed with the score: federal lobbying + federal PAC only — state lobbying and trade-group spending are not counted."),
        n("Sources: OpenSecrets client summary, Alphabet Inc, cycle 2025 (id D000067823); FEC committee C00428623, GOOGLE LLC NETPAC (2023–24 cycle totals).", OS),
      ] }],
      factors: {
        lobbying_spend: { status: "scored", note: "Lobbying Rule v1.1: [[$16,620,000]] federal lobbying, calendar 2025 (OpenSecrets client summary, Alphabet Inc, id D000067823; cross-checked against the same page's annual-trends data: 2023 [[$14,450,000]] · 2024 [[$14,860,000]] · 2025 [[$16,620,000]]; [[109]] lobbyists in 2025; no subsidiary split shown for this client).", links: [{ text: "$16,620,000", url: OS }, { text: "$14,450,000", url: OS }, { text: "$14,860,000", url: OS }, { text: "109", url: OS }] },
        political_contributions: { status: "scored", note: "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. GOOGLE LLC NETPAC (FEC C00428623) 2023–24 total disbursements [[$1,414,672]] (receipts [[$1,902,224.63]]). Total: $16,620,000 + $1,414,672 = $18,034,672 → 23.", links: [{ text: "$1,414,672", url: FEC }, { text: "$1,902,224.63", url: FEC }] },
      },
    },
  },
  sources: [
    { label: "DEF 14A 2026 (filed 2026-04-24, accession 0001308179-26-000342)", url: DEF26 },
    { label: "Form 10-K FY2025 (filed 2026-02-05, accession 0001652044-26-000018)", url: K25 },
    { label: "Form 10-K FY2024 (accession 0001652044-25-000014) — Dec 31, 2024 headcount 183,323." },
    { label: "OpenSecrets — Alphabet Inc, federal lobbying client summary, cycle 2025 (id D000067823)", url: OS },
    { label: "FEC — GOOGLE LLC NETPAC (committee C00428623), 2023–24 cycle totals", url: FEC },
    { label: "U.S. Government Accountability Office — GAO-26-108703 (June 2026; reissued Aug 24, 2026): Alphabet/Google appears in none of the top-25 employer tables (printed fact, not scored)", url: GAO },
    { label: "U.S. Department of Labor — TAA phaseout-termination status pages; \"TAA Termination Impacts: By the Numbers\" fact sheet, Table 1 (petitions CA-16, GA-5, OR-1)", url: DOL },
    { label: "MIT Living Wage Calculator — national benchmark: average of all 50 state pages: scored benchmark $49,246/year (see MIT_NATIONAL_BENCHMARK.md)." },
    { label: "Layoff records: company announcements/confirmations and WARN filings as itemised in ALPHABET_EVIDENCE_PACK.md §3 (TechCrunch, Reuters, CNBC, Bloomberg, AP; CA EDD; WA ESD)." },
  ],
  rules:
    "Methodology v1.0 · Worker Pay Fairness Rule v1.3 · Layoff Rule v1.0 · CEO Pay Rule v2.0 · Lobbying Rule v1.1 · Insufficient-Data Rule v1.2 · U.S. Workforce Rule v1.2 · Score Bands v1.0 · Weights Defense v1.0 · Ideology Operating Rules v1 · Local Economic Contribution Rule v1.0 · Outsourcing + Production Abroad Rule v1.0",
};
