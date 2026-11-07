// Apple Inc. (AAPL) — supplied card and companion factor map. Data only.
import type { CompanyCard } from "./amazon";

export const APPLE_SUPPLIED_COMPANY_CARD = "# Apple Inc. (AAPL)\n\n**Overall: 56 — Mixed**\n\n*Updated 2026-10-20 under the final locked rules (Bundles A–D): Local Economic Contribution\nRule v1.0 locked (74 now official) · Insufficient-Data Rule v1.2 (coverage now counts the 7\nready pillars) · CEO Pay Rule v2.0 (Apple's 1,259:1 sits in an unchanged segment — score\nunchanged at 5). Previous headline: 51 — Mixed. See FINAL_BOARD_2026-10-20.md.*\n\n*Scored on fiscal 2025 (year ended September 27, 2025) — the most recent year with a filed 10‑K. A leadership change took effect after the period scored; the CEO scored here is the one the fiscal‑2025 filings cover.*\n\nOne line: Its typical worker is paid well above the cost of living and the typical American's pay, and its layoff record is the lightest of any company scored so far — but its CEO actually took home $175.7M in one year, it spent a record $10.4M on lobbying, and it does not disclose how many of its workers are in the United States.\n\n---\n\n## The nine pillars\n\n### Worker Standards — 68\nIts typical worker earns $139,483 — about three times what a worker needs to live on and more than twice the typical American's pay. The score is held down by the third question: Apple keeps so much profit per worker that the worker's share of the split is small. (Its pay figure is the worldwide median — the only one Apple discloses.)\n\n### U.S. Workforce Commitment — Not yet measured by WeSee\nApple reports only its worldwide workforce (about 166,000 people). It does not say how many of its workers are in the United States, so there is nothing filed to score — and we do not estimate it. This pillar is not counted in any company's coverage while WeSee's measurement for it is unfinished (Class W).\n\n### Local Economic Contribution — 74\nScored on the one factor Apple files in U.S. form: its U.S. tax provision was 22.1% of its U.S. pre-tax income. Apple does not disclose U.S. investment, U.S. R&D, or supplier figures.\n\n### Layoff & Job Security — 75\nIt eliminated about 1,035 jobs across four small rounds in three years while profits hit a record $112B — no single mass round, but not zero either. Severance is disclosed nowhere.\n\n### CEO Pay Ratio — 5\nCEO Tim Cook actually took home $175,658,290 in 2025 — 1,259 times the typical worker's $139,483. Most of it was stock from past years that became his in 2025.\n\n### Jobs Moved Abroad — Not yet measured by WeSee\nIn the records searched so far, no proven case of Apple moving U.S. jobs abroad was found. The full search protocol is not complete, so no score is claimed yet.\n\n### Community Resilience — Not yet measurable\nWe cannot measure this yet — for any company. When we can, every company gets scored on it.\n\n### Production Moved Abroad — Not yet measured by WeSee\nIn the records searched so far, no proven case of Apple moving U.S. production abroad was found. The full search protocol is not complete, so no score is claimed yet.\n\n### Lobbying & Influence — 34\nIt spent $10,410,000 lobbying the federal government in 2025 — the most in Apple's history. Apple has no PAC, so nothing is added for political-committee money.\n\n**Workers on public food and health benefits:** Apple is not among the employers reported in the government's 11‑state count (September 2025). *No national count exists.*\n\n---\n\n# Show Your Work\n\n## How the overall is built\n\n```\nWorker Standards        68 × 16 (weight) = 1,088\nLocal Economic          74 × 14 (weight) = 1,036\nLayoff & Job Security   75 × 12 (weight) =   900\nCEO Pay Ratio            5 × 10 (weight) =    50\nLobbying & Influence    34 ×  7 (weight) =   238\n                                          ──────\nTotal                                    = 3,312\nOverall = 3,312 ÷ 59 (total weight scored) = 56.1 → 56 — Mixed\n```\n\nFive of the seven ready pillars carry scores. Two do not: Jobs Moved Abroad and Production\nMoved Abroad are **not yet measured by WeSee** — their rule is locked, but the full search\nprotocol for Apple is not complete, so no score is claimed (their findings so far are shown\nbelow). The U.S. Workforce pillar is also unscored (Apple files no U.S. headcount) but is\nClass W — not counted in any company's coverage. Community Resilience is **not yet\nmeasurable for any company** and is excluded from the count for everyone.\n\n**Coverage: 5 of 7 ready pillars scored (71%).** The coverage rule caps the overall at 69 at\nthis coverage when the company was profitable — Apple earned $112.0B in fiscal 2025, so the\ncap is live, but 56 is below 69, so **the cap does not bind** and the score stands as\ncomputed. The layoff cap (overall capped at 49 when the layoff pillar falls below 20 with\ncuts in a profitable year) does not apply: the layoff pillar is 75.\n\n**Equal weights, for comparison:** if all scored pillars counted the same, (68 + 74 + 75 + 5 + 34) ÷ 5 = 51.2 → **51 — Mixed** — the same band.\n\n**Score bands (locked):** 85–100 Strong · 70–84 Positive · 50–69 Mixed · 30–49 Weak · 0–29 Harmful — read from the final score.\n\n---\n\n## 1. Worker Standards — 68\n\nThe pillar asks three questions about the best pay figure Apple discloses: the **worldwide median worker's total pay, $139,483**, from the fiscal‑2025 proxy statement. Apple discloses no U.S.-only pay figure; the published hierarchy for this rule takes the best figure the company files and flags it — the flag is the word \"worldwide\" everywhere this number appears.\n\n**Benchmarks (the same for every company):** a worker needs **$49,246** a year (MIT living-wage budget for one adult with no children, converted to a national figure). The typical U.S. worker makes **$62,608** a year (BLS, Quarterly Census of Employment and Wages, 2025).\n\n**Question 1 — Can the worker live on it?**\n```\n$139,483 (typical worker's pay) ÷ $49,246 (cost of living) = 2.83× → score 100\n```\n(Scale: at or above 1.5× the cost of living = 100.)\n\n**Question 2 — How does it compare to the typical American's pay?**\n```\n$139,483 ÷ $62,608 (typical U.S. pay) = 2.23× → score 100\n```\n\n**Question 3 — How is the money split between the worker and the company?**\n```\nCompany profit $112,010,000,000 (2025 net income, Form 10-K) ÷ 166,000 workers = $674,759 (profit per worker)\n$139,483 (worker) ÷ ($139,483 + $674,759) = 17.1% (the worker's share) → score 4\n```\n(Scale: a worker's share of 70% or more = 100; 55% = 80; 45% = 60; 35% = 40; 25% = 20; 15% or less = 0. This question uses company‑wide profit — the one declared exception to the U.S.‑only principle, printed here because no U.S.-only profit figure exists.)\n\n**Pillar score:** (100 + 100 + 4) ÷ 3 = **68**.\n\n**One sentence for the card:** *\"Its typical worker earns $139,483 a year — well above the cost of living ($49,246) and the typical U.S. worker's pay ($62,608); the score is held down because Apple's profit per worker is so large that the worker's share of the split is small.\"* — with the worldwide flag attached: the $139,483 is Apple's worldwide median (full‑time and part‑time permanent staff, annualized), the only pay figure it files.\n\n**Dignity gate checked:** a median pay below the $49,246 cost of living would cap this pillar at 49. Apple's median is above it → gate not triggered.\n\nWhere the numbers come from: median pay and how it was computed (global population; base salary + bonuses + commissions + grant-date equity value; permanent staff annualized) — DEF 14A proxy, \"CEO Pay Ratio—2025\" (p. 62). Net income and employee count — Form 10‑K fiscal 2025. Apple grants stock broadly, so its median includes equity value — the figure is as Apple filed it; we use a company's own disclosed figure rather than adjusting it.\n\n---\n\n## 2. U.S. Workforce Commitment — Not yet measured by WeSee\n\nThe locked rule scores four factors: the share of workers who are full‑time, whether U.S. hiring is growing, the share of work done by contractors instead of employees, and H-1B intensity (Factor 4, added by U.S. Workforce Rule v1.2). **Apple files none of the inputs.** Its 10‑K reports one number — approximately 166,000 full‑time‑equivalent employees worldwide — with no U.S. split, no full‑time/part‑time split of its own workforce, and no contractor count. Factor coverage: **0 of 4 factors could be scored → pillar NOT SCORED** (the fourth factor, H-1B Intensity, prints its count below without scoring).\n\nThis pillar therefore appears on this card as **\"Not yet measured by WeSee\"** — under\nInsufficient-Data Rule v1.2 the pillar is Class W (its locked measurement cannot yet score\nmost companies from filed sources), so it is excluded from every company's coverage,\nApple's included; the underlying fact — Apple files no U.S. headcount — is recorded here,\nnot charged. Apple has announced large U.S. investment commitments (a $600B four‑year program announced in August 2025); under this rule an announcement is not a measurement — a filed **target** or pledge never scores, only filed counts do. When Apple files a U.S. headcount, this pillar scores the same day.\n\nPRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 3,879\nH-1B petitions for Apple in FY2024 — 864 initial + 3,015 continuing, summed over its\nfiled subsidiary list. Approvals count petitions, not people: one worker can be approved\nmore than once in a year.\" (FY2024 is Apple's Clause 3 year: the most recent USCIS fiscal\nyear completed on or before the last day of Apple's scored fiscal year.) The H-1B\nIntensity factor scores only where a U.S. headcount is filed; Apple files none, so the\nfactor does not score and this count is the standing record (Clause 7(iii)). Source:\nUSCIS H-1B Employer Data Hub, FY2024 employer file (Apple Inc + Apple Payments Services\nLLC; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md).\n\n---\n\n## 3. Local Economic Contribution — 74 (Local Economic Contribution Rule v1.0, locked 2026-10-20)\n\nThe locked rule (Domestic Investment 35% · U.S. Suppliers 25% · U.S. R&D 25% · U.S. Taxes 15%, each factor scored alone on what is actually filed, weights re-normalized over scored factors):\n\n**Taxes factor — the one factor Apple files:**\n```\n$9,683M (federal tax provision) + $1,541M (state tax provision) = $11,224M (U.S. tax provision, 10-K Note 7)\n$132,729M (total pre-tax income) − $82,000M (foreign pre-tax income, Note 7) = $50,729M (U.S. pre-tax income)\n$11,224M ÷ $50,729M = 22.1% (U.S. effective rate) → score 74\n```\n(Locked scale: 30% or more = 100 · 25% = 85 · 21% = 70 · 17% = 50 · 13% = 30 · 8% = 15 · 0% = 0, interpolated: 70 + (1.1 ÷ 4 × 15) = 74.2 → 74. For scale: the U.S. statutory federal rate is 21%. An earlier draft scale printed in this card's first build gave the same 74; the locked scale governs.)\n\n**The other three factors — not filed:** Domestic Investment (Apple files capital spending of $12,715M **worldwide only**; its geographic note reports U.S. long‑lived assets of $40,274M — a balance built over decades, and the locked rule does not score balances) → **not disclosed**. U.S. R&D (total $34,550M filed; no geographic split exists) → **not disclosed**. U.S. Suppliers (no supplier‑spend figure filed) → **not disclosed**.\n\n**Pillar = 74** (the Taxes factor alone, under the locked rule's scored‑factors‑only design — not a four‑factor measurement). Honesty note: Apple's U.S. rate is volatile year to year (17.9% in fiscal 2023 → factor 55; 8.5% in fiscal 2024 → 16, a year distorted by foreign‑tax effects around a one‑time European settlement; 22.1% in fiscal 2025 → 74), and pooling the three filed years would give 16.3% → 47. Under the locked rule the filed scored year governs (decision D‑3), so 74 is the pillar.\n\n---\n\n## 4. Layoff & Job Security — 75\n\nThe rule scores mass layoffs over a rolling three‑year window (October 2023 – October 2026 here), counted from announcements and filings first, WARN notices to verify. Profitable years matter — every year in this window was profitable for Apple (2024: $93.7B · 2025: $112.0B).\n\n**The rounds, as counted:**\n\n| When | Jobs | What happened | How we know |\n|---|---|---|---|\n| Spring 2024 (notice Mar 28, effective May 27) | 614 | Santa Clara — the electric‑car project (Titan) and MicroLED display teams were shut down | California WARN reports — 8 separate notices, added up: 371 + 11 + 23 + 15 + 58 + 49 + 35 + 52 = 614 |\n| Spring 2024 (notice Jan 11, effective Apr 26) | 121 | San Diego — Siri data‑annotations team; Apple offered moves to Austin, Texas, and its own filing calls the event a permanent layoff | California WARN report |\n| August 2024 | ~100 | Services division (Books, News, and other teams); affected staff were reported to have 60 days to find another role inside Apple | Bloomberg, reported at the time |\n| August 2026 (notice Aug 21, effective Oct 20) | ~200 | Siri and Vision Pro teams, in an AI reorganization. The California WARN notices inside this round total 147 (Cupertino 79, Sunnyvale 28 + 40) — the same event, counted once at the reported total | Bloomberg; California WARN reports |\n\n```\nTotal counted: 614 + 121 + 100 + 200 = ~1,035 jobs over three years\n1,000–4,999 band → −25\nSegment share: the whole three-year tally is ~0.6% of 166,000 workers → no extra deduction\nMass rounds (a single round of 1,000+): none → no repetition deduction\nLoss-year discount: no round fell in a loss year → no discount\nCredits: +0 — severance is disclosed nowhere in Apple's filings; Apple bought back $90,711M of its own stock in fiscal 2025, which alone fails the zero-buyback credit; the one reported transfer window (60 days, 2024) was press-reported on the smallest round only\nScore: 100 − 25 = 75\n```\n\n**Counted honestly, in both directions:**\n- **If only WARN‑filed jobs counted** (614 + 121 + 147 = 882), the tally would fall in the 1–999 band and this pillar would be **90**. We count rounds a company announces or reputable reporting quantifies even when no WARN notice exists — a layoff is a layoff — and we print the filed‑only number so you can see the difference.\n- **Not counted, and why:** an Escondido store closure (57 workers, June 2026) whose staff continued at nearby stores — a closure is not a separation. Cuts Apple confirmed in November 2025 (\"dozens\" of sales roles) and September 2026 (\"a handful,\" Fitness+ audio) — real events with **no published count**; this rule never estimates, so they are noted here and can only lower this score if a count is ever published. And in September 2026 Apple **considered** cutting ~5,000 support jobs for AI automation and decided not to — a plan never carried out is not a layoff, and it is not counted.\n\nContext (printed, never scored): share buybacks of $90,711M in fiscal 2025 ($94,949M in fiscal 2024) are not penalized by this rule on their own; they appear here because they decide the buyback credit above.\n\n---\n\n## 5. CEO Pay Ratio — 5\n\n**Scored on CEO Pay Rule v2.0 (locked 2026-10-20).** The v2.0 recalibration changed only the low-ratio anchors (350:1 and below); at 1,259:1 Apple sits in the unchanged 1,000–1,500 segment, so the score is **5** under both v1.1 and v2.0.\n\nThe rule counts what the CEO **actually took home** in fiscal 2025 — salary, bonus paid, other compensation, and stock that **vested** that year — never the grant‑date value of new awards.\n\n```\n$3,000,000 (salary)\n+ $12,000,000 (bonus paid for 2025)\n+ $1,759,518 (all other compensation)\n+ $158,898,772 (stock that vested in 2025 — 695,869 shares, incl. $2,146,321 of dividend equivalents paid on vesting)\n+ $0 (option exercises — Apple grants stock units only; there were no options to exercise)\n= $175,658,290 (actually realized in 2025)\n÷ $139,483 (typical worker's pay — worldwide median, the only one Apple discloses)\n= 1,259× → ratio 1,259:1 → score 5\n```\n\n(Scale: 20:1 or less = 100 · 50:1 = 80 · 100:1 = 60 · 250:1 = 40 · 500:1 = 25 · 1,000:1 = 10 · 1,500:1 or more = 0, interpolated.)\n\nWhy so large: in 2025 a very large stock award granted in an earlier year finished vesting. Under the realized rule, that money counts in the year it became the CEO's — all $158.9M of it — which is why this pillar, not pay levels for ordinary workers, is Apple's worst.\n\n*For comparison only:* Apple's own filed SEC pay ratio is **533:1**. The SEC computes it from grant‑date award values ($74,294,811 for 2025, of which $57,535,293 is stock awarded that year at grant‑date value). WeSee's rule counts realized pay instead; the filed figure is printed here as a footnote and is never scored. One disclosure note: the proxy's footnote breaking down the $1,759,518 of other compensation lists items that add to $1,714,441 — $45,077 less than the filed table total. We score the filed table total, as filed, and note the gap rather than hide it.\n\nSources: DEF 14A proxy — Summary Compensation Table (2025 row), \"Stock Vested—2025\" table (p. 55), \"CEO Pay Ratio—2025\" (p. 62).\n\n---\n\n## 6. Jobs Moved Abroad — Not yet measured by WeSee (search protocol incomplete)\n\nThe **locked rule** (Outsourcing + Production Abroad Rule v1.0): this pillar scores only **proven** cases of a company moving U.S. jobs abroad — proven by a government certification, the company's own words, or a closure notice paired with the same work appearing abroad — over a three‑year window. The rule requires a five‑step search protocol before any score is claimed. Run for Apple on 2026‑10‑14:\n\n- **Government certifications (TAA):** exactly one determination in the archive names Apple — **TA‑W‑82,817 (2013)** — and it does **not** certify Apple: the workers were employees of a staffing firm (Volt Management) working on‑site at Apple in Austin, and the government certified that **the staffing firm** shifted their development‑support work abroad. Printed here as history; under the locked rule it deducts nothing from Apple (wrong firm, and 13 years outside the window). No determination names Apple Inc. itself.\n- **WARN pairing:** every Apple WARN event in the window was checked for work moving abroad. The San Diego team was offered relocation **to Austin, Texas** — a move inside the U.S. No event states a foreign move.\n- **Announcements:** no announcement of Apple moving U.S. jobs abroad was located; Apple's announced direction in the window was expanded U.S. manufacturing commitments — which earn **no points** under the locked rule (claims are not proof, in either direction).\n- **Not yet complete:** the full petition‑data pull and a dedicated full‑text sweep of Apple's SEC filings for relocation language are still open steps.\n\n**Status printed on this card: NOT YET MEASURED BY WESEE — no proven move found in the steps run; no score claimed until the protocol completes.** If the completed search confirms no proven moves, the locked rule scores this pillar at 100.\n\n---\n\n## 7. Community Resilience — Not yet measurable\n\nNo reproducible source exists today to measure any company's community resilience, so this pillar is **excluded from the coverage count for every company** — it lowers no one's score and raises no one's. When a source exists that can carry it, every company is scored on it at once.\n\n---\n\n## 8. Production Moved Abroad — Not yet measured by WeSee (search protocol incomplete)\n\nThe same locked rule and the same search as §6, applied to production: no proven case of Apple moving U.S. production abroad was located in the steps run (its one U.S. product‑assembly site in Austin appears in no closure or move record in the window). **Status: NOT YET MEASURED BY WESEE — no score claimed until the protocol completes;** a completed clean search scores 100 under the locked rule.\n\nPrinted but never scored (the rule's exposure lines, as filed): foreign pre‑tax earnings were $82.0B of $132.7B (61.8%) in fiscal 2025; non‑U.S. sales were $264.4B of $416.2B (63.5%). That Apple sells and earns mostly outside the U.S. is a **structure**, printed for the reader — under WeSee's rules, structure is not an act, and it is not scored.\n\n---\n\n## 9. Lobbying & Influence — 34\n\nThe rule adds two amounts — never averaged, because averaging would let a small second number soften a large first one — and scores the total on one universal scale for every company.\n\n```\n$10,410,000 (federal lobbying, 2025 — OpenSecrets client summary for Apple Inc)\n+ $0 (PAC disbursements, 2023–24 cycle — Apple has no PAC)\n= $10,410,000 → score 34\n```\n\n(Scale: $0 = 100 · $1M = 70 · $5M = 50 · $10M = 35 · $20M = 20 · $50M = 10 · $100M or more = 0, interpolated.)\n\nTwo facts give the number its meaning: **$10.41M is the most Apple has ever spent on federal lobbying in a year** (prior high $9.78M in 2023), and **Apple operates no political action committee at all** — its former CEO has said so publicly for years, and the FEC's committee registry contains no Apple Inc. PAC — so the PAC line adds $0 instead of cushioning or worsening the lobbying total. Cross‑check: Apple's own quarterly lobbying filings for 2025 add to $10.0M for its in‑house program; the OpenSecrets client total above also counts outside firms that reported Apple as their client.\n\n*Limitations of this measure (printed with every company's score):* federal lobbying disclosures and PAC disbursements only. State lobbying, and dues paid to trade associations that lobby, appear in no federal dataset and are excluded for every company equally.\n\n---\n\n## Printed fact (never scored)\n\n**Workers on public food and health benefits (SNAP / Medicaid):** the government's count (GAO, June 2026) lists the 25 largest employers of benefit recipients in each of 11 reporting states, as of September 2025. **Apple is not among the employers reported.** *No national count exists.* These counts are printed as context only — they measure a company's size as much as its pay, eligibility depends on a worker's whole household, and they are never part of any score. (The only \"Apple\" anywhere in the report is Applebee's — a different company.)\n\n---\n\n## All-nine picture — final (2026-10-20)\n\nShown because every WeSee card carries all nine pillars.\n\n| Pillar | Value |\n|---|---|\n| Worker Standards | 68 |\n| U.S. Workforce Commitment | Not yet measured by WeSee (Apple files no U.S. headcount; Class W — counts in no one's coverage) |\n| Local Economic Contribution | 74 (locked rule, one factor filed) |\n| Layoff & Job Security | 75 |\n| CEO Pay Ratio | 5 (v2.0 — unchanged segment) |\n| Jobs Moved Abroad | Not yet measured by WeSee (protocol incomplete) |\n| Community Resilience | Not yet measurable — for any company |\n| Production Moved Abroad | Not yet measured by WeSee (protocol incomplete) |\n| Lobbying & Influence | 34 |\n\nThe headline is **56 — Mixed** on the five scored pillars (see \"How the overall is built\").\nWhen the two harm-evidence protocols complete and are logged, those pillars activate at their\ncomputed values in the next refresh. Apple's U.S. Workforce cell does not move until Apple\nfiles a U.S. headcount — no rule can score a number the company does not file, and we will\nnot estimate one.\n\n---\n\n## Sources and retrieval\n\nEvery number above was read on its source page on **2026‑10‑14**:\n\n- **Form 10‑K, fiscal 2025** (filed October 31, 2025; accession `0000320193-25-000079`) — net income $112,010M; tax Note 7 (federal $9,683M + state $1,541M provisions; foreign pre‑tax $82.0B); employees ~166,000 worldwide, no U.S. split; R&D $34,550M; capex $12,715M worldwide; buybacks $90,711M. EDGAR check the same day confirmed no fiscal‑2026 10‑K had been filed.\n- **DEF 14A proxy** (filed January 8, 2026; accession `0001308179-26-000008`) — median pay $139,483 and filed ratio 533:1 (p. 62); CEO summary compensation table; stock vested $158,898,772 (p. 55).\n- **California EDD WARN reports** FY2023‑24 through FY2026‑27, read in full — Apple's complete notice census (735 jobs filed in 2024; 147 in 2026; zero in FY2024‑25).\n- **OpenSecrets** — Apple Inc lobbying client summary, 2025: $10,410,000 (client id `D000021754`); **FEC committee registry** — no Apple Inc. PAC exists.\n- **Bloomberg via Reuters and others** — the August 2024 (~100) and August 2026 (~200) rounds; Apple's confirmed November 2025 cuts (uncounted — no published count); the considered‑and‑dropped 5,000‑person plan (never carried out).\n- **U.S. Department of Labor** — TAA determination TA‑W‑82,817 (Volt Management Corp., on‑site at Apple Austin; certified 2013).\n- **GAO‑26‑108703** (June 22, 2026; reissued August 24, 2026) — employer tables searched in full; Apple Inc. appears in none.\n\nFull working, every near‑miss and exclusion, and the register of what could **not** be verified (including the lobbying page's unreadable subsidiary breakdown, the two uncounted rounds with no published count, and the two open search steps) are in the evidence pack: `APPLE_EVIDENCE_PACK.md`.";

export const APPLE_SUPPLIED_FACTOR_MAP = "# WeSee — The Full Factor Map (M's original design vs Methodology v1.x) — Apple\nCompanion to FACTOR_MAP_AMAZON.md / FACTOR_MAP_COSTCO.md — same design factors, same\nin-pillar weights, scored under the same locked rules. Built 2026-10-15 from\nAPPLE_EVIDENCE_PACK.md + APPLE_COMPANY_CARD.md only (all values read on the exact pages\ncited there on 2026-10-14: FY2025 10-K, FY2025 DEF 14A, California WARN, OpenSecrets,\nFEC registry, DOL TAA, GAO-26-108703). No new value is introduced in this map; where the\npack/card record no filed figure for a factor, the map says so rather than reaching for\nanother source. Card arithmetic re-verified in this pass: Worker (100 + 100 + 4) ÷ 3 = 68;\nOverall 2,276 ÷ 45 = 50.6 → 51 — Mixed; equal weights 46 — Weak; provisional all-8\n5,112 ÷ 77 = 66.4 → 66. All match the card exactly.\n\n## Status key\n- **SCORED** — inside a locked rule today, with Apple's real filed value.\n- **DISCLOSED, NOT SCORED** — Apple publishes the value in a filing, but no locked rule\n  scores the factor today (a draft rule may compute it provisionally — labelled as such).\n- **NOT DISCLOSED** — the data exists inside the company; Apple does not publish it in\n  usable form in the filings read for this build.\n- **NOT MEASURABLE** — no company-level source exists for any company.\n- **REMOVED** — factor removed from the design by M (Training Investment, 2026-10-14).\n\n## Worker Standards (pillar weight 16%) — pillar score 68 (pay factor only, same basis as Amazon/Costco)\n| Factor | In-pillar weight | Status | Note |\n|---|---|---|---|\n| Living Wage | 40% | SCORED | Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 4 → 68, on the worldwide median $139,483 (hierarchy step (c) — Apple files no U.S. or full-time-only median; flagged on the card) |\n| Benefits | 20% | NOT DISCLOSED | No benefits figure is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none) |\n| Workplace Safety | 20% | NOT DISCLOSED | No company-wide filed rate; OSHA holds establishment-level data only (same basis as both built maps) |\n| Employee Retention | 20% | NOT DISCLOSED | No retention/turnover figure is filed in the 10-K / DEF 14A read for this build (the pack records none) |\n\n## U.S. Workforce Commitment (14%) — pillar NOT YET MEASURED BY WESEE (U.S. Workforce Rule v1.2; Class W — counts in no company's coverage; Apple files none of its inputs)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Full-Time Employment | 35% | NOT DISCLOSED | Apple files one worldwide total only (~166,000 full-time-equivalent employees) — no U.S. count and no full-time/part-time split of its own workforce |\n| Domestic Hiring | 25% | NOT DISCLOSED | Needs a filed U.S. headcount (share + scored-year change); none is published. Apple's $600B four-year U.S. investment announcement (Aug 2025) is a pledge, printed as context on the card — a target never scores under the locked rule |\n| Training Investment | 20% | REMOVED | Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors |\n| Contractor Dependence | 20% | NOT DISCLOSED | Contractor headcount/share is not published |\n| H-1B Intensity | 20% | PRINTED, NOT SCORED | Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2024 (Apple's Clause 3 year): Apple Inc 864 initial + 3,011 continuing, plus Apple Payments Services LLC 0 + 4 → 3,879 approvals (864 initial + 3,015 continuing). The factor scores only where a U.S. headcount is filed (Clause 5); Apple files none, so the count prints on the card (Clause 5 line) and the factor does not score |\n\n## Local Economic Contribution (14%) — pillar score 74 (Local Economic Contribution Rule v1.0, locked 2026-10-20; Taxes alone)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Domestic Investment | 35% | NOT DISCLOSED | Capex is filed worldwide only ($12,715M); no U.S. additions flow is filed. U.S. long-lived assets $40,274M are printed on the card as context only — a decades-built stock, which the draft rule does not score |\n| Domestic Suppliers | 25% | NOT DISCLOSED | No supplier-spend figure is filed |\n| U.S. R&D | 25% | NOT DISCLOSED | R&D is filed worldwide only ($34,550M, all inside the Corporate segment); no U.S. split exists |\n| Taxes | 15% | SCORED | U.S. provision IS filed (Note 7: federal $9,683M + state $1,541M = $11,224M on U.S. pre-tax $50,729M → 22.1%) → factor 74 under Local Economic Contribution Rule v1.0 (locked 2026-10-20) = the pillar (Taxes alone) |\n\n## Layoffs During High Profits (12%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Layoff Severity | 45% | SCORED | Inside Layoff Rule v1.0: ~1,035 counted in the window (614 + 121 + ~100 + ~200) → 1,000–4,999 band −25; segment share ~0.6% → no extra deduction |\n| Profitability Context | 30% | SCORED | Inside Layoff Rule v1.0: profitable in every window year (FY2025 net income $112,010M) |\n| Buybacks | 25% | SCORED | Inside Layoff Rule v1.0: buybacks $90,711M in FY2025 alone fail the zero-buyback credit test; severance disclosed nowhere → credits +0 |\nPillar score: **75** — all three of M's factors are in the rule, as inputs rather than separate weighted scores.\n\n## CEO-to-Worker Pay Ratio (10%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| CEO Compensation | 50% | SCORED | Inside CEO Pay Rule v2.0 (realized pay $175,658,290 — salary $3,000,000 + bonus $12,000,000 + all other $1,759,518 + stock vested $158,898,772 + $0 options) |\n| Median Worker Compensation | 50% | SCORED | Inside CEO Pay Rule v2.0 (worldwide median $139,483, hierarchy step (c), flagged → 1,259:1 → 5 — the 1,000–1,500 segment is unchanged in v2.0; Apple's own filed grant-date ratio 533:1 printed as a footnote, never scored) |\nPillar score: **5**.\n\n## Jobs Moved Abroad (10%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; §8 search protocol incomplete for Apple)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Offshore Workforce | 60% | NOT DISCLOSED | No workforce geography is filed (sales / pre-tax / asset splits are filed and printed on the card as exposure context — foreign pre-tax 61.8%, non-U.S. sales 63.5% — never scored; structure is not an act) |\n| Outsourced Services | 40% | NOT DISCLOSED | Vendor/offshore services spend is not published |\nLocked-rule status (not a factor status): the locked harm-evidence rule (Outsourcing + Production Abroad Rule v1.0, locked 2026-10-20) searches proven U.S.-to-abroad moves\ninstead of these design factors. For Apple the protocol is INCOMPLETE (pack §7.3: S-1 full\npetition-file pull and the dedicated S-2 filing sweep still open) — no proven move was located\nin the steps run, and NO score is claimed. The one Apple-named TAA determination, TA-W-82,817\n(2013), certified the staffing firm Volt Management, not Apple, and is 13 years outside the\nwindow — printed as pattern history, zero deduction.\n\n## Community Resilience (9%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Local Investment | 60% | NOT MEASURABLE | No company-level source exists for any company (Class U — excluded from coverage for everyone) |\n| Community Programs | 40% | NOT MEASURABLE | Program spend is self-reported marketing material, not a filing |\n\n## Production Abroad (8%)\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Domestic Production | 60% | NOT MEASURABLE | Census/USITC count category units, not a company's units (design classification; the draft harm rule would re-found this pillar on proven production moves — for Apple that search is incomplete, same protocol as Outsourcing above, and no score is claimed) |\n| Imported Goods | 40% | NOT MEASURABLE | USITC counts category imports, not a company's imports |\n\n## Lobbying Activity (7%) — pillar score 34\n| Factor | Weight | Status | Note |\n|---|---|---|---|\n| Lobbying Spend | 65% | SCORED | Lobbying Rule v1.1: $10,410,000 federal lobbying, calendar 2025 (OpenSecrets client summary, Apple Inc, id D000021754) — the most Apple has ever reported in a year |\n| Political Contributions | — | **SCORED** | M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Apple has NO PAC (FEC committee registry contains no Apple Inc. PAC) → $0 added. The old 65/35 in-pillar split is superseded, as on the Amazon map |\n\n## The count\n26 design factors = 25 active + 1 removed (Training Investment, removed by M 2026-10-14;\nH-1B Intensity added by U.S. Workforce Rule v1.2, 2026-10-22).\nOn the 25 active factors (final, 2026-10-22): **9 scored** inside locked rules (Living\nWage; Taxes; Layoff Severity, Profitability Context, Buybacks; CEO Compensation, Median\nWorker Compensation; Lobbying Spend, Political Contributions) · **11 not disclosed by\nApple** (Benefits, Workplace Safety, Employee Retention, Full-Time Employment, Domestic\nHiring, Contractor Dependence, Domestic Investment, Domestic Suppliers, U.S. R&D,\nOffshore Workforce, Outsourced Services) · **4 not measurable for any company**\n(Community 2, Production 2 — the Production pair's pillar is additionally not yet\nmeasured by WeSee, its §8 protocol incomplete).\n9 + 11 + 4 = 24, plus H-1B Intensity printed, not scored (Clause 5) = 25 active. ✓\n\nThe honest contrast in one line: Apple now scores 9 factors — including the U.S. tax split\n(the F-2 finding) that Amazon's map originally missed — but it\nwithholds the entire U.S. Workforce pillar (no U.S. headcount of any kind), which is why\nits coverage is 4 of 8 and its overall is capped at 59 (not binding at 51).";

export const APPLE_CARD = {
  "overall": 56,
  "band": "Mixed",
  "coverage": "5 of 7 ready pillars scored (71%).",
  "period": "Scored on fiscal 2025 (year ended September 27, 2025) — the most recent year with a filed 10‑K. A leadership change took effect after the period scored; the CEO scored here is the one the fiscal‑2025 filings cover.",
  "overallBlock": {
    "title": "How the overall is built",
    "lines": [
      {
        "text": "One line: Its typical worker is paid well above the cost of living and the typical American's pay, and its layoff record is the lightest of any company scored so far — but its CEO actually took home [[$175.7M]] in one year, it spent a record [[$10.4M]] on lobbying, and it does not disclose how many of its workers are in the United States.",
        "links": [{ "text": "$175.7M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$10.4M", "url": "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000021754" }],
        "kind": "note"
      },
      {
        "text": "Worker Standards        68 × 16 (weight) = 1,088",
        "kind": "step"
      },
      {
        "text": "Local Economic          74 × 14 (weight) = 1,036",
        "kind": "step"
      },
      {
        "text": "Layoff & Job Security   75 × 12 (weight) =   900",
        "kind": "step"
      },
      {
        "text": "CEO Pay Ratio            5 × 10 (weight) =    50",
        "kind": "step"
      },
      {
        "text": "Lobbying & Influence    34 ×  7 (weight) =   238",
        "kind": "step"
      },
      {
        "text": "                                          ──────",
        "kind": "step"
      },
      {
        "text": "Total                                    = 3,312",
        "kind": "total"
      },
      {
        "text": "Overall = 3,312 ÷ 59 (total weight scored) = 56.1 → 56 — Mixed",
        "kind": "total"
      },
      {
        "text": "Five of the seven ready pillars carry scores. Two do not: Jobs Moved Abroad and Production Moved Abroad are not yet measured by WeSee — their rule is locked, but the full search protocol for Apple is not complete, so no score is claimed (their findings so far are shown below). The U.S. Workforce pillar is also unscored (Apple files no U.S. headcount) but is Class W — not counted in any company's coverage. Community Resilience is not yet measurable for any company and is excluded from the count for everyone.",
        "kind": "note"
      },
      {
        "text": "Coverage: 5 of 7 ready pillars scored (71%). The coverage rule caps the overall at 69 at this coverage when the company was profitable — Apple earned $112.0B in fiscal 2025, so the cap is live, but 56 is below 69, so the cap does not bind and the score stands as computed. The layoff cap (overall capped at 49 when the layoff pillar falls below 20 with cuts in a profitable year) does not apply: the layoff pillar is 75.",
        "kind": "note"
      },
      {
        "text": "Equal weights, for comparison: if all scored pillars counted the same, (68 + 74 + 75 + 5 + 34) ÷ 5 = 51.2 → 51 — Mixed — the same band.",
        "kind": "note"
      },
      {
        "text": "Score bands (locked): 85–100 Strong · 70–84 Positive · 50–69 Mixed · 30–49 Weak · 0–29 Harmful — read from the final score.",
        "kind": "note"
      }
    ]
  },
  "pillars": {
    "worker_standards": {
      "score": 68,
      "sentence": "Its typical worker earns [[$139,483]] — about three times what a worker needs to live on and more than twice the typical American's pay. The score is held down by the third question: Apple keeps so much profit per worker that the worker's share of the split is small. (Its pay figure is the worldwide median — the only one Apple discloses.)",
      "sentenceLinks": [{ "text": "$139,483", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }],
      "blocks": [
        {
          "title": "1. Worker Standards — 68",
          "lines": [
            {
              "text": "The pillar asks three questions about the best pay figure Apple discloses: the worldwide median worker's total pay, $139,483, from the fiscal‑2025 proxy statement. Apple discloses no U.S.-only pay figure; the published hierarchy for this rule takes the best figure the company files and flags it — the flag is the word \"worldwide\" everywhere this number appears.",
              "kind": "note"
            },
            {
              "text": "Benchmarks (the same for every company): a worker needs $49,246 a year (MIT living-wage budget for one adult with no children, converted to a national figure). The typical U.S. worker makes $62,608 a year (BLS, Quarterly Census of Employment and Wages, 2025).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Question 1 — Can the worker live on it?",
          "lines": [
            {
              "text": "$139,483 (typical worker's pay) ÷ $49,246 (cost of living) = 2.83× → score 100",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "(Scale: at or above 1.5× the cost of living = 100.)",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Question 2 — How does it compare to the typical American's pay?",
          "lines": [
            {
              "text": "$139,483 ÷ $62,608 (typical U.S. pay) = 2.23× → score 100",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            }
          ]
        },
        {
          "title": "Question 3 — How is the money split between the worker and the company?",
          "lines": [
            {
              "text": "Company profit $112,010,000,000 (2025 net income, Form 10-K) ÷ 166,000 workers = $674,759 (profit per worker)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "$139,483 (worker) ÷ ($139,483 + $674,759) = 17.1% (the worker's share) → score 4",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "(Scale: a worker's share of 70% or more = 100; 55% = 80; 45% = 60; 35% = 40; 25% = 20; 15% or less = 0. This question uses company‑wide profit — the one declared exception to the U.S.‑only principle, printed here because no U.S.-only profit figure exists.)",
              "kind": "note"
            },
            {
              "text": "Pillar score: (100 + 100 + 4) ÷ 3 = 68.",
              "kind": "note"
            },
            {
              "text": "One sentence for the card: \"Its typical worker earns $139,483 a year — well above the cost of living ($49,246) and the typical U.S. worker's pay ($62,608); the score is held down because Apple's profit per worker is so large that the worker's share of the split is small.\" — with the worldwide flag attached: the $139,483 is Apple's worldwide median (full‑time and part‑time permanent staff, annualized), the only pay figure it files.",
              "kind": "note",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "Dignity gate checked: a median pay below the $49,246 cost of living would cap this pillar at 49. Apple's median is above it → gate not triggered.",
              "kind": "note"
            },
            {
              "text": "Where the numbers come from: median pay and how it was computed (global population; base salary + bonuses + commissions + grant-date equity value; permanent staff annualized) — DEF 14A proxy, \"CEO Pay Ratio—2025\" (p. 62). Net income and employee count — Form 10‑K fiscal 2025. Apple grants stock broadly, so its median includes equity value — the figure is as Apple filed it; we use a company's own disclosed figure rather than adjusting it.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Worker Standards (pillar weight 16%) — pillar score 68 (pay factor only, same basis as Amazon/Costco)",
          "lines": [
            {
              "text": "| Factor | In-pillar weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Living Wage | 40% | SCORED | Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 4 → 68, on the worldwide median $139,483 (hierarchy step (c) — Apple files no U.S. or full-time-only median; flagged on the card) |",
              "kind": "note"
            },
            {
              "text": "| Benefits | 20% | NOT DISCLOSED | No benefits figure is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none) |",
              "kind": "note"
            },
            {
              "text": "| Workplace Safety | 20% | NOT DISCLOSED | No company-wide filed rate; OSHA holds establishment-level data only (same basis as both built maps) |",
              "kind": "note"
            },
            {
              "text": "| Employee Retention | 20% | NOT DISCLOSED | No retention/turnover figure is filed in the 10-K / DEF 14A read for this build (the pack records none) |",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "living_wage": {
          "status": "scored",
          "note": "Worker Pay Fairness Rule v1.3 (three questions): Q1 100 / Q2 100 / Q3 4 → 68, on the worldwide median [[$139,483]] (hierarchy step (c) — Apple files no U.S. or full-time-only median; flagged on the card)",
          "links": [{ "text": "$139,483", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }]
        },
        "benefits": {
          "status": "not_disclosed",
          "note": "No benefits figure is filed in the 10-K / DEF 14A read for this build that a rule could score (the pack records none)"
        },
        "workplace_safety": {
          "status": "not_disclosed",
          "note": "No company-wide filed rate; OSHA holds establishment-level data only (same basis as both built maps)"
        },
        "employee_retention": {
          "status": "not_disclosed",
          "note": "No retention/turnover figure is filed in the 10-K / DEF 14A read for this build (the pack records none)"
        }
      }
    },
    "us_workforce_commitment": {
      "score": null,
      "sentence": "Apple reports only its worldwide workforce (about [[166,000]] people). It does not say how many of its workers are in the United States, so there is nothing filed to score — and we do not estimate it. This pillar is not counted in any company's coverage while WeSee's measurement for it is unfinished (Class W).",
      "sentenceLinks": [{ "text": "166,000", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }],
      "blocks": [
        {
          "title": "2. U.S. Workforce Commitment — Not yet measured by WeSee",
          "lines": [
            {
              "text": "The locked rule scores four factors: the share of workers who are full‑time, whether U.S. hiring is growing, the share of work done by contractors instead of employees, and H-1B intensity (Factor 4, added by U.S. Workforce Rule v1.2). Apple files none of the inputs. Its 10‑K reports one number — approximately 166,000 full‑time‑equivalent employees worldwide — with no U.S. split, no full‑time/part‑time split of its own workforce, and no contractor count. Factor coverage: 0 of 4 factors could be scored → pillar NOT SCORED (the fourth factor, H-1B Intensity, prints its count below without scoring).",
              "kind": "note",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "This pillar therefore appears on this card as \"Not yet measured by WeSee\" — under Insufficient-Data Rule v1.2 the pillar is Class W (its locked measurement cannot yet score most companies from filed sources), so it is excluded from every company's coverage, Apple's included; the underlying fact — Apple files no U.S. headcount — is recorded here, not charged. Apple has announced large U.S. investment commitments (a $600B four‑year program announced in August 2025); under this rule an announcement is not a measurement — a filed target or pledge never scores, only filed counts do. When Apple files a U.S. headcount, this pillar scores the same day.",
              "kind": "note"
            },
            {
              "text": "PRINTED LINE — NOT SCORED (U.S. Workforce Rule v1.2, Clause 5): \"USCIS approved 3,879 H-1B petitions for Apple in FY2024 — 864 initial + 3,015 continuing, summed over its filed subsidiary list. Approvals count petitions, not people: one worker can be approved more than once in a year.\" (FY2024 is Apple's Clause 3 year: the most recent USCIS fiscal year completed on or before the last day of Apple's scored fiscal year.) The H-1B Intensity factor scores only where a U.S. headcount is filed; Apple files none, so the factor does not score and this count is the standing record (Clause 7(iii)). Source: USCIS H-1B Employer Data Hub, FY2024 employer file (Apple Inc + Apple Payments Services LLC; read 2026-10-22 — H1B_USCIS_REDERIVATION_2026-10-22.md).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "U.S. Workforce Commitment (14%) — pillar NOT YET MEASURED BY WESEE (U.S. Workforce Rule v1.2; Class W — counts in no company's coverage; Apple files none of its inputs)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Full-Time Employment | 35% | NOT DISCLOSED | Apple files one worldwide total only (~166,000 full-time-equivalent employees) — no U.S. count and no full-time/part-time split of its own workforce |",
              "kind": "note"
            },
            {
              "text": "| Domestic Hiring | 25% | NOT DISCLOSED | Needs a filed U.S. headcount (share + scored-year change); none is published. Apple's $600B four-year U.S. investment announcement (Aug 2025) is a pledge, printed as context on the card — a target never scores under the locked rule |",
              "kind": "note"
            },
            {
              "text": "| Training Investment | 20% | REMOVED | Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors |",
              "kind": "note"
            },
            {
              "text": "| Contractor Dependence | 20% | NOT DISCLOSED | Contractor headcount/share is not published |",
              "kind": "note"
            },
            {
              "text": "| H-1B Intensity | 20% | PRINTED, NOT SCORED | Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2024 (Apple's Clause 3 year): Apple Inc 864 initial + 3,011 continuing, plus Apple Payments Services LLC 0 + 4 → 3,879 approvals (864 initial + 3,015 continuing). The factor scores only where a U.S. headcount is filed (Clause 5); Apple files none, so the count prints on the card (Clause 5 line) and the factor does not score |",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "full_time_employment": {
          "status": "not_disclosed",
          "note": "Apple files one worldwide total only (~[[166,000]] full-time-equivalent employees) — no U.S. count and no full-time/part-time split of its own workforce",
          "links": [{ "text": "166,000", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
        },
        "domestic_hiring": {
          "status": "not_disclosed",
          "note": "Needs a filed U.S. headcount (share + scored-year change); none is published. Apple's $600B four-year U.S. investment announcement (Aug 2025) is a pledge, printed as context on the card — a target never scores under the locked rule"
        },
        "training_investment": {
          "status": "removed_by_m",
          "note": "Removed from the design by M 2026-10-14 (\"Ignore training remove it\") — counted in the 26-factor design total, not in the 25 active factors"
        },
        "contractor_dependence": {
          "status": "not_disclosed",
          "note": "Contractor headcount/share is not published"
        },
        "h1b_intensity": {
          "status": "disclosed_not_scored",
          "note": "Factor 4, added by U.S. Workforce Rule v1.2 (locked 2026-10-22). USCIS H-1B Employer Data Hub, FY2024 (Apple's Clause 3 year): Apple Inc 864 initial + 3,011 continuing, plus Apple Payments Services LLC 0 + 4 → 3,879 approvals (864 initial + 3,015 continuing). The factor scores only where a U.S. headcount is filed (Clause 5); Apple files none, so the count prints on the card (Clause 5 line) and the factor does not score"
        }
      },
      "status": "Not yet measured by WeSee"
    },
    "local_economic": {
      "score": 74,
      "sentence": "Scored on the one factor Apple files in U.S. form: its U.S. tax provision was [[22.1%]] of its U.S. pre-tax income. Apple does not disclose U.S. investment, U.S. R&D, or supplier figures.",
      "sentenceLinks": [{ "text": "22.1%", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }],
      "blocks": [
        {
          "title": "3. Local Economic Contribution — 74 (Local Economic Contribution Rule v1.0, locked 2026-10-20)",
          "lines": [
            {
              "text": "The locked rule (Domestic Investment 35% · U.S. Suppliers 25% · U.S. R&D 25% · U.S. Taxes 15%, each factor scored alone on what is actually filed, weights re-normalized over scored factors):",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Taxes factor — the one factor Apple files:",
          "lines": [
            {
              "text": "$9,683M (federal tax provision) + $1,541M (state tax provision) = $11,224M (U.S. tax provision, 10-K Note 7)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "$132,729M (total pre-tax income) − $82,000M (foreign pre-tax income, Note 7) = $50,729M (U.S. pre-tax income)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "$11,224M ÷ $50,729M = 22.1% (U.S. effective rate) → score 74",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "(Locked scale: 30% or more = 100 · 25% = 85 · 21% = 70 · 17% = 50 · 13% = 30 · 8% = 15 · 0% = 0, interpolated: 70 + (1.1 ÷ 4 × 15) = 74.2 → 74. For scale: the U.S. statutory federal rate is 21%. An earlier draft scale printed in this card's first build gave the same 74; the locked scale governs.)",
              "kind": "note"
            },
            {
              "text": "The other three factors — not filed: Domestic Investment (Apple files capital spending of $12,715M worldwide only; its geographic note reports U.S. long‑lived assets of $40,274M — a balance built over decades, and the locked rule does not score balances) → not disclosed. U.S. R&D (total $34,550M filed; no geographic split exists) → not disclosed. U.S. Suppliers (no supplier‑spend figure filed) → not disclosed.",
              "kind": "note",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "Pillar = 74 (the Taxes factor alone, under the locked rule's scored‑factors‑only design — not a four‑factor measurement). Honesty note: Apple's U.S. rate is volatile year to year (17.9% in fiscal 2023 → factor 55; 8.5% in fiscal 2024 → 16, a year distorted by foreign‑tax effects around a one‑time European settlement; 22.1% in fiscal 2025 → 74), and pooling the three filed years would give 16.3% → 47. Under the locked rule the filed scored year governs (decision D‑3), so 74 is the pillar.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Local Economic Contribution (14%) — pillar score 74 (Local Economic Contribution Rule v1.0, locked 2026-10-20; Taxes alone)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Domestic Investment | 35% | NOT DISCLOSED | Capex is filed worldwide only ($12,715M); no U.S. additions flow is filed. U.S. long-lived assets $40,274M are printed on the card as context only — a decades-built stock, which the draft rule does not score |",
              "kind": "note"
            },
            {
              "text": "| Domestic Suppliers | 25% | NOT DISCLOSED | No supplier-spend figure is filed |",
              "kind": "note"
            },
            {
              "text": "| U.S. R&D | 25% | NOT DISCLOSED | R&D is filed worldwide only ($34,550M, all inside the Corporate segment); no U.S. split exists |",
              "kind": "note"
            },
            {
              "text": "| Taxes | 15% | SCORED | U.S. provision IS filed (Note 7: federal $9,683M + state $1,541M = $11,224M on U.S. pre-tax $50,729M → 22.1%) → factor 74 under Local Economic Contribution Rule v1.0 (locked 2026-10-20) = the pillar (Taxes alone) |",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "domestic_investment": {
          "status": "not_disclosed",
          "note": "Capex is filed worldwide only ([[$12,715M]]); no U.S. additions flow is filed. U.S. long-lived assets [[$40,274M]] are printed on the card as context only — a decades-built stock, which the draft rule does not score",
          "links": [{ "text": "$12,715M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }, { "text": "$40,274M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
        },
        "domestic_suppliers": {
          "status": "not_disclosed",
          "note": "No supplier-spend figure is filed"
        },
        "us_rd": {
          "status": "not_disclosed",
          "note": "R&D is filed worldwide only ([[$34,550M]], all inside the Corporate segment); no U.S. split exists",
          "links": [{ "text": "$34,550M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
        },
        "taxes": {
          "status": "scored",
          "note": "U.S. provision IS filed (Note 7: federal [[$9,683M]] + state [[$1,541M]] = [[$11,224M]] on U.S. pre-tax [[$50,729M]] → [[22.1%]]) → factor 74 under Local Economic Contribution Rule v1.0 (locked 2026-10-20) = the pillar (Taxes alone)",
          "links": [{ "text": "$9,683M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }, { "text": "$1,541M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }, { "text": "$11,224M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }, { "text": "$50,729M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }, { "text": "22.1%", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
        }
      }
    },
    "layoffs_high_profits": {
      "score": 75,
      "sentence": "It eliminated about 1,035 jobs across four small rounds in three years while profits hit a record [[$112B]] — no single mass round, but not zero either. Severance is disclosed nowhere.",
      "sentenceLinks": [{ "text": "$112B", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }],
      "blocks": [
        {
          "title": "4. Layoff & Job Security — 75",
          "lines": [
            {
              "text": "The rule scores mass layoffs over a rolling three‑year window (October 2023 – October 2026 here), counted from announcements and filings first, WARN notices to verify. Profitable years matter — every year in this window was profitable for Apple (2024: $93.7B · 2025: $112.0B).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "The rounds, as counted:",
          "lines": [
            {
              "text": "| When | Jobs | What happened | How we know |",
              "kind": "note"
            },
            {
              "text": "| Spring 2024 (notice Mar 28, effective May 27) | 614 | Santa Clara — the electric‑car project (Titan) and MicroLED display teams were shut down | California WARN reports — 8 separate notices, added up: 371 + 11 + 23 + 15 + 58 + 49 + 35 + 52 = 614 |",
              "kind": "note"
            },
            {
              "text": "| Spring 2024 (notice Jan 11, effective Apr 26) | 121 | San Diego — Siri data‑annotations team; Apple offered moves to Austin, Texas, and its own filing calls the event a permanent layoff | California WARN report |",
              "kind": "note"
            },
            {
              "text": "| August 2024 | ~100 | Services division (Books, News, and other teams); affected staff were reported to have 60 days to find another role inside Apple | Bloomberg, reported at the time |",
              "kind": "note"
            },
            {
              "text": "| August 2026 (notice Aug 21, effective Oct 20) | ~200 | Siri and Vision Pro teams, in an AI reorganization. The California WARN notices inside this round total 147 (Cupertino 79, Sunnyvale 28 + 40) — the same event, counted once at the reported total | Bloomberg; California WARN reports |",
              "kind": "note"
            },
            {
              "text": "Total counted: 614 + 121 + 100 + 200 = ~1,035 jobs over three years",
              "kind": "total"
            },
            {
              "text": "1,000–4,999 band → −25",
              "kind": "step"
            },
            {
              "text": "Segment share: the whole three-year tally is ~0.6% of 166,000 workers → no extra deduction",
              "kind": "step"
            },
            {
              "text": "Mass rounds (a single round of 1,000+): none → no repetition deduction",
              "kind": "step"
            },
            {
              "text": "Loss-year discount: no round fell in a loss year → no discount",
              "kind": "step"
            },
            {
              "text": "Credits: +0 — severance is disclosed nowhere in Apple's filings; Apple bought back $90,711M of its own stock in fiscal 2025, which alone fails the zero-buyback credit; the one reported transfer window (60 days, 2024) was press-reported on the smallest round only",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            },
            {
              "text": "Score: 100 − 25 = 75",
              "kind": "total"
            }
          ]
        },
        {
          "title": "Counted honestly, in both directions:",
          "lines": [
            {
              "text": "- If only WARN‑filed jobs counted (614 + 121 + 147 = 882), the tally would fall in the 1–999 band and this pillar would be 90. We count rounds a company announces or reputable reporting quantifies even when no WARN notice exists — a layoff is a layoff — and we print the filed‑only number so you can see the difference.",
              "kind": "note"
            },
            {
              "text": "- Not counted, and why: an Escondido store closure (57 workers, June 2026) whose staff continued at nearby stores — a closure is not a separation. Cuts Apple confirmed in November 2025 (\"dozens\" of sales roles) and September 2026 (\"a handful,\" Fitness+ audio) — real events with no published count; this rule never estimates, so they are noted here and can only lower this score if a count is ever published. And in September 2026 Apple considered cutting ~5,000 support jobs for AI automation and decided not to — a plan never carried out is not a layoff, and it is not counted.",
              "kind": "note"
            },
            {
              "text": "Context (printed, never scored): share buybacks of $90,711M in fiscal 2025 ($94,949M in fiscal 2024) are not penalized by this rule on their own; they appear here because they decide the buyback credit above.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Layoffs During High Profits (12%)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Layoff Severity | 45% | SCORED | Inside Layoff Rule v1.0: ~1,035 counted in the window (614 + 121 + ~100 + ~200) → 1,000–4,999 band −25; segment share ~0.6% → no extra deduction |",
              "kind": "note"
            },
            {
              "text": "| Profitability Context | 30% | SCORED | Inside Layoff Rule v1.0: profitable in every window year (FY2025 net income $112,010M) |",
              "kind": "note"
            },
            {
              "text": "| Buybacks | 25% | SCORED | Inside Layoff Rule v1.0: buybacks $90,711M in FY2025 alone fail the zero-buyback credit test; severance disclosed nowhere → credits +0 |",
              "kind": "note"
            },
            {
              "text": "Pillar score: 75 — all three of M's factors are in the rule, as inputs rather than separate weighted scores.",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "layoff_severity": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: ~1,035 counted in the window (614 + 121 + ~100 + ~200) → 1,000–4,999 band −25; segment share ~0.6% → no extra deduction"
        },
        "profitability": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: profitable in every window year (FY2025 net income [[$112,010M]])",
          "links": [{ "text": "$112,010M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
        },
        "buybacks": {
          "status": "scored",
          "note": "Inside Layoff Rule v1.0: buybacks [[$90,711M]] in FY2025 alone fail the zero-buyback credit test; severance disclosed nowhere → credits +0",
          "links": [{ "text": "$90,711M", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
        }
      }
    },
    "ceo_pay_ratio": {
      "score": 5,
      "sentence": "CEO Tim Cook actually took home [[$175,658,290]] in 2025 — [[1,259]] times the typical worker's [[$139,483]]. Most of it was stock from past years that became his in 2025.",
      "sentenceLinks": [{ "text": "$175,658,290", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "1,259", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$139,483", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }],
      "blocks": [
        {
          "title": "5. CEO Pay Ratio — 5",
          "lines": [
            {
              "text": "Scored on CEO Pay Rule v2.0 (locked 2026-10-20). The v2.0 recalibration changed only the low-ratio anchors (350:1 and below); at 1,259:1 Apple sits in the unchanged 1,000–1,500 segment, so the score is 5 under both v1.1 and v2.0.",
              "kind": "note"
            },
            {
              "text": "The rule counts what the CEO actually took home in fiscal 2025 — salary, bonus paid, other compensation, and stock that vested that year — never the grant‑date value of new awards.",
              "kind": "note"
            },
            {
              "text": "$3,000,000 (salary)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "+ $12,000,000 (bonus paid for 2025)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "+ $1,759,518 (all other compensation)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "+ $158,898,772 (stock that vested in 2025 — 695,869 shares, incl. $2,146,321 of dividend equivalents paid on vesting)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "+ $0 (option exercises — Apple grants stock units only; there were no options to exercise)",
              "kind": "step",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "= $175,658,290 (actually realized in 2025)",
              "kind": "total"
            },
            {
              "text": "÷ $139,483 (typical worker's pay — worldwide median, the only one Apple discloses)",
              "kind": "step"
            },
            {
              "text": "= 1,259× → ratio 1,259:1 → score 5",
              "kind": "total"
            },
            {
              "text": "(Scale: 20:1 or less = 100 · 50:1 = 80 · 100:1 = 60 · 250:1 = 40 · 500:1 = 25 · 1,000:1 = 10 · 1,500:1 or more = 0, interpolated.)",
              "kind": "note"
            },
            {
              "text": "Why so large: in 2025 a very large stock award granted in an earlier year finished vesting. Under the realized rule, that money counts in the year it became the CEO's — all $158.9M of it — which is why this pillar, not pay levels for ordinary workers, is Apple's worst.",
              "kind": "note"
            },
            {
              "text": "For comparison only: Apple's own filed SEC pay ratio is 533:1. The SEC computes it from grant‑date award values ($74,294,811 for 2025, of which $57,535,293 is stock awarded that year at grant‑date value). WeSee's rule counts realized pay instead; the filed figure is printed here as a footnote and is never scored. One disclosure note: the proxy's footnote breaking down the $1,759,518 of other compensation lists items that add to $1,714,441 — $45,077 less than the filed table total. We score the filed table total, as filed, and note the gap rather than hide it.",
              "kind": "note",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
            },
            {
              "text": "Sources: DEF 14A proxy — Summary Compensation Table (2025 row), \"Stock Vested—2025\" table (p. 55), \"CEO Pay Ratio—2025\" (p. 62).",
              "kind": "note"
            }
          ]
        },
        {
          "title": "CEO-to-Worker Pay Ratio (10%)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| CEO Compensation | 50% | SCORED | Inside CEO Pay Rule v2.0 (realized pay $175,658,290 — salary $3,000,000 + bonus $12,000,000 + all other $1,759,518 + stock vested $158,898,772 + $0 options) |",
              "kind": "note"
            },
            {
              "text": "| Median Worker Compensation | 50% | SCORED | Inside CEO Pay Rule v2.0 (worldwide median $139,483, hierarchy step (c), flagged → 1,259:1 → 5 — the 1,000–1,500 segment is unchanged in v2.0; Apple's own filed grant-date ratio 533:1 printed as a footnote, never scored) |",
              "kind": "note"
            },
            {
              "text": "Pillar score: 5.",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "ceo_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v2.0 (realized pay [[$175,658,290]] — salary [[$3,000,000]] + bonus [[$12,000,000]] + all other [[$1,759,518]] + stock vested [[$158,898,772]] + [[$0]] options)",
          "links": [{ "text": "$175,658,290", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$3,000,000", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$12,000,000", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$1,759,518", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$158,898,772", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "$0", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }]
        },
        "median_worker_compensation": {
          "status": "scored",
          "note": "Inside CEO Pay Rule v2.0 (worldwide median [[$139,483]], hierarchy step (c), flagged → [[1,259:1]] → 5 — the 1,000–1,500 segment is unchanged in v2.0; Apple's own filed grant-date ratio [[533:1]] printed as a footnote, never scored)",
          "links": [{ "text": "$139,483", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "1,259:1", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }, { "text": "533:1", "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html" }]
        }
      }
    },
    "outsourcing_exposure": {
      "score": null,
      "sentence": "In the records searched so far, no proven case of Apple moving U.S. jobs abroad was found. The full search protocol is not complete, so no score is claimed yet.",
      "blocks": [
        {
          "title": "6. Jobs Moved Abroad — Not yet measured by WeSee (search protocol incomplete)",
          "lines": [
            {
              "text": "The locked rule (Outsourcing + Production Abroad Rule v1.0): this pillar scores only proven cases of a company moving U.S. jobs abroad — proven by a government certification, the company's own words, or a closure notice paired with the same work appearing abroad — over a three‑year window. The rule requires a five‑step search protocol before any score is claimed. Run for Apple on 2026‑10‑14:",
              "kind": "note"
            },
            {
              "text": "- Government certifications (TAA): exactly one determination in the archive names Apple — TA‑W‑82,817 (2013) — and it does not certify Apple: the workers were employees of a staffing firm (Volt Management) working on‑site at Apple in Austin, and the government certified that the staffing firm shifted their development‑support work abroad. Printed here as history; under the locked rule it deducts nothing from Apple (wrong firm, and 13 years outside the window). No determination names Apple Inc. itself.",
              "kind": "note"
            },
            {
              "text": "- WARN pairing: every Apple WARN event in the window was checked for work moving abroad. The San Diego team was offered relocation to Austin, Texas — a move inside the U.S. No event states a foreign move.",
              "kind": "note"
            },
            {
              "text": "- Announcements: no announcement of Apple moving U.S. jobs abroad was located; Apple's announced direction in the window was expanded U.S. manufacturing commitments — which earn no points under the locked rule (claims are not proof, in either direction).",
              "kind": "note"
            },
            {
              "text": "- Not yet complete: the full petition‑data pull and a dedicated full‑text sweep of Apple's SEC filings for relocation language are still open steps.",
              "kind": "note"
            },
            {
              "text": "Status printed on this card: NOT YET MEASURED BY WESEE — no proven move found in the steps run; no score claimed until the protocol completes. If the completed search confirms no proven moves, the locked rule scores this pillar at 100.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Jobs Moved Abroad (10%) — NOT YET MEASURED BY WESEE (locked harm-evidence rule; §8 search protocol incomplete for Apple)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Offshore Workforce | 60% | NOT DISCLOSED | No workforce geography is filed (sales / pre-tax / asset splits are filed and printed on the card as exposure context — foreign pre-tax 61.8%, non-U.S. sales 63.5% — never scored; structure is not an act) |",
              "kind": "note"
            },
            {
              "text": "| Outsourced Services | 40% | NOT DISCLOSED | Vendor/offshore services spend is not published |",
              "kind": "note"
            },
            {
              "text": "Locked-rule status (not a factor status): the locked harm-evidence rule (Outsourcing + Production Abroad Rule v1.0, locked 2026-10-20) searches proven U.S.-to-abroad moves instead of these design factors. For Apple the protocol is INCOMPLETE (pack §7.3: S-1 full petition-file pull and the dedicated S-2 filing sweep still open) — no proven move was located in the steps run, and NO score is claimed. The one Apple-named TAA determination, TA-W-82,817 (2013), certified the staffing firm Volt Management, not Apple, and is 13 years outside the window — printed as pattern history, zero deduction.",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "offshore_workforce": {
          "status": "not_disclosed",
          "note": "No workforce geography is filed (sales / pre-tax / asset splits are filed and printed on the card as exposure context — foreign pre-tax [[61.8%]], non-U.S. sales [[63.5%]] — never scored; structure is not an act)",
          "links": [{ "text": "61.8%", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }, { "text": "63.5%", "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html" }]
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
      "sentence": "We cannot measure this yet — for any company. When we can, every company gets scored on it.",
      "blocks": [
        {
          "title": "7. Community Resilience — Not yet measurable",
          "lines": [
            {
              "text": "No reproducible source exists today to measure any company's community resilience, so this pillar is excluded from the coverage count for every company — it lowers no one's score and raises no one's. When a source exists that can carry it, every company is scored on it at once.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Community Resilience (9%)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Local Investment | 60% | NOT MEASURABLE | No company-level source exists for any company (Class U — excluded from coverage for everyone) |",
              "kind": "note"
            },
            {
              "text": "| Community Programs | 40% | NOT MEASURABLE | Program spend is self-reported marketing material, not a filing |",
              "kind": "note"
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
      "sentence": "In the records searched so far, no proven case of Apple moving U.S. production abroad was found. The full search protocol is not complete, so no score is claimed yet.",
      "blocks": [
        {
          "title": "8. Production Moved Abroad — Not yet measured by WeSee (search protocol incomplete)",
          "lines": [
            {
              "text": "The same locked rule and the same search as §6, applied to production: no proven case of Apple moving U.S. production abroad was located in the steps run (its one U.S. product‑assembly site in Austin appears in no closure or move record in the window). Status: NOT YET MEASURED BY WESEE — no score claimed until the protocol completes; a completed clean search scores 100 under the locked rule.",
              "kind": "note"
            },
            {
              "text": "Printed but never scored (the rule's exposure lines, as filed): foreign pre‑tax earnings were $82.0B of $132.7B (61.8%) in fiscal 2025; non‑U.S. sales were $264.4B of $416.2B (63.5%). That Apple sells and earns mostly outside the U.S. is a structure, printed for the reader — under WeSee's rules, structure is not an act, and it is not scored.",
              "kind": "note",
              "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
            }
          ]
        },
        {
          "title": "Production Abroad (8%)",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Domestic Production | 60% | NOT MEASURABLE | Census/USITC count category units, not a company's units (design classification; the draft harm rule would re-found this pillar on proven production moves — for Apple that search is incomplete, same protocol as Outsourcing above, and no score is claimed) |",
              "kind": "note"
            },
            {
              "text": "| Imported Goods | 40% | NOT MEASURABLE | USITC counts category imports, not a company's imports |",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "domestic_production": {
          "status": "not_measurable",
          "note": "Census/USITC count category units, not a company's units (design classification; the draft harm rule would re-found this pillar on proven production moves — for Apple that search is incomplete, same protocol as Outsourcing above, and no score is claimed)"
        },
        "imported_goods": {
          "status": "not_measurable",
          "note": "USITC counts category imports, not a company's imports"
        }
      },
      "status": "Not yet measured by WeSee"
    },
    "lobbying_activity": {
      "score": 34,
      "sentence": "It spent [[$10,410,000]] lobbying the federal government in 2025 — the most in Apple's history. Apple has no PAC, so nothing is added for political-committee money.",
      "sentenceLinks": [{ "text": "$10,410,000", "url": "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000021754" }],
      "blocks": [
        {
          "title": "9. Lobbying & Influence — 34",
          "lines": [
            {
              "text": "The rule adds two amounts — never averaged, because averaging would let a small second number soften a large first one — and scores the total on one universal scale for every company.",
              "kind": "note"
            },
            {
              "text": "$10,410,000 (federal lobbying, 2025 — OpenSecrets client summary for Apple Inc)",
              "kind": "step",
              "url": "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000021754"
            },
            {
              "text": "+ $0 (PAC disbursements, 2023–24 cycle — Apple has no PAC)",
              "kind": "step"
            },
            {
              "text": "= $10,410,000 → score 34",
              "kind": "total"
            },
            {
              "text": "(Scale: $0 = 100 · $1M = 70 · $5M = 50 · $10M = 35 · $20M = 20 · $50M = 10 · $100M or more = 0, interpolated.)",
              "kind": "note"
            },
            {
              "text": "Two facts give the number its meaning: $10.41M is the most Apple has ever spent on federal lobbying in a year (prior high $9.78M in 2023), and Apple operates no political action committee at all — its former CEO has said so publicly for years, and the FEC's committee registry contains no Apple Inc. PAC — so the PAC line adds $0 instead of cushioning or worsening the lobbying total. Cross‑check: Apple's own quarterly lobbying filings for 2025 add to $10.0M for its in‑house program; the OpenSecrets client total above also counts outside firms that reported Apple as their client.",
              "kind": "note"
            },
            {
              "text": "Limitations of this measure (printed with every company's score): federal lobbying disclosures and PAC disbursements only. State lobbying, and dues paid to trade associations that lobby, appear in no federal dataset and are excluded for every company equally.",
              "kind": "note"
            }
          ]
        },
        {
          "title": "Lobbying Activity (7%) — pillar score 34",
          "lines": [
            {
              "text": "| Factor | Weight | Status | Note |",
              "kind": "note"
            },
            {
              "text": "| Lobbying Spend | 65% | SCORED | Lobbying Rule v1.1: $10,410,000 federal lobbying, calendar 2025 (OpenSecrets client summary, Apple Inc, id D000021754) — the most Apple has ever reported in a year |",
              "kind": "note"
            },
            {
              "text": "| Political Contributions | — | SCORED | M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Apple has NO PAC (FEC committee registry contains no Apple Inc. PAC) → $0 added. The old 65/35 in-pillar split is superseded, as on the Amazon map |",
              "kind": "note"
            }
          ]
        }
      ],
      "factors": {
        "lobbying_spend": {
          "status": "scored",
          "note": "Lobbying Rule v1.1: [[$10,410,000]] federal lobbying, calendar 2025 (OpenSecrets client summary, Apple Inc, id D000021754) — the most Apple has ever reported in a year",
          "links": [{ "text": "$10,410,000", "url": "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000021754" }]
        },
        "political_contributions": {
          "status": "scored",
          "note": "M decided 2026-10-14: PAC money is INCLUDED — added to the lobbying total and scored on the same scale (Lobbying Rule v1.1), never averaged. Apple has NO PAC (FEC committee registry contains no Apple Inc. PAC) → $0 added. The old 65/35 in-pillar split is superseded, as on the Amazon map"
        }
      }
    }
  },
  "sources": [
    {
      "label": "Form 10‑K, fiscal 2025 (filed October 31, 2025; accession 0000320193-25-000079) — net income $112,010M; tax Note 7 (federal $9,683M + state $1,541M provisions; foreign pre‑tax $82.0B); employees ~166,000 worldwide, no U.S. split; R&D $34,550M; capex $12,715M worldwide; buybacks $90,711M. EDGAR check the same day confirmed no fiscal‑2026 10‑K had been filed.",
      "url": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/0000320193-25-000079-index.html"
    },
    {
      "label": "DEF 14A proxy (filed January 8, 2026; accession 0001308179-26-000008) — median pay $139,483 and filed ratio 533:1 (p. 62); CEO summary compensation table; stock vested $158,898,772 (p. 55).",
      "url": "https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/0001308179-26-000008-index.html"
    },
    {
      "label": "California EDD WARN reports FY2023‑24 through FY2026‑27, read in full — Apple's complete notice census (735 jobs filed in 2024; 147 in 2026; zero in FY2024‑25)."
    },
    {
      "label": "OpenSecrets — Apple Inc lobbying client summary, 2025: $10,410,000 (client id D000021754); FEC committee registry — no Apple Inc. PAC exists.",
      "url": "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000021754"
    },
    {
      "label": "Bloomberg via Reuters and others — the August 2024 (~100) and August 2026 (~200) rounds; Apple's confirmed November 2025 cuts (uncounted — no published count); the considered‑and‑dropped 5,000‑person plan (never carried out)."
    },
    {
      "label": "U.S. Department of Labor — TAA determination TA‑W‑82,817 (Volt Management Corp., on‑site at Apple Austin; certified 2013)."
    },
    {
      "label": "GAO‑26‑108703 (June 22, 2026; reissued August 24, 2026) — employer tables searched in full; Apple Inc. appears in none.",
      "url": "https://www.gao.gov/assets/890/888620.pdf"
    },
    {
      "label": "Workers on public food and health benefits (SNAP / Medicaid): the government's count (GAO, June 2026) lists the 25 largest employers of benefit recipients in each of 11 reporting states, as of September 2025. Apple is not among the employers reported. No national count exists. These counts are printed as context only — they measure a company's size as much as its pay, eligibility depends on a worker's whole household, and they are never part of any score. (The only \"Apple\" anywhere in the report is Applebee's — a different company.)",
      "url": "https://www.gao.gov/assets/890/888620.pdf"
    },
    {
      "label": "Every number above was read on its source page on 2026‑10‑14:"
    },
    {
      "label": "Full working, every near‑miss and exclusion, and the register of what could not be verified (including the lobbying page's unreadable subsidiary breakdown, the two uncounted rounds with no published count, and the two open search steps) are in the evidence pack: APPLE_EVIDENCE_PACK.md."
    }
  ],
  "rules": "Updated 2026-10-20 under the final locked rules (Bundles A–D): Local Economic Contribution\nRule v1.0 locked (74 now official) · Insufficient-Data Rule v1.2 (coverage now counts the 7\nready pillars) · CEO Pay Rule v2.0 (Apple's 1,259:1 sits in an unchanged segment — score\nunchanged at 5). Previous headline: 51 — Mixed. See FINAL_BOARD_2026-10-20.md."
} satisfies CompanyCard;
