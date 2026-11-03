# WeSee — The Idea

## One-line

WeSee measures how much a company reinvests into the American economy, workforce, and
communities relative to the profits it earns from the U.S. market — and shows the exact
numbers, equations, and source documents behind every score.

## The problem

Corporate ratings today fail in one of two ways:

1. **ESG ratings** are opaque. Two providers give the same company opposite grades and
   neither publishes the arithmetic. Users cannot reproduce a score.
2. **Consumer reviews** (Glassdoor-style) are anecdotal, unweighted, and not tied to
   filings.

Meanwhile the question most Americans actually ask — *"does this company give back to the
country it earns from?"* — has no measurable answer anywhere.

## The WeSee answer

A single 0–100 **U.S. Economic Contribution Index**, built from nine weighted pillars,
26 factors, and only Tier‑1/Tier‑2 public data (SEC filings, BLS, OSHA, Census, USITC,
Senate LDA, FEC, WARN notices, Good Jobs First, MIT Living Wage).

Every score must answer four questions in seconds:

| Question | Where WeSee answers it |
| --- | --- |
| What equation was used? | Factor page → Advanced → equation block |
| What numbers were used? | Evidence cards on the company page (always visible) |
| Where did those numbers come from? | Source card: document, section, page, retrieved date |
| How can I verify them? | One-click deep link into the original filing/dataset |

## Product principles

1. **Plain English first, notation second.** The default view is a sentence, real numbers,
   and a visual before → after calculation flow. Equations live behind an "Advanced"
   disclosure.
2. **No number without a citation.** Every value on screen carries its source, tier, and a
   direct link.
3. **Calm and factual tone.** No moralizing. Lobbying is "intensity", not "corruption".
   Layoffs are scored on measurable severity, not outrage.
4. **Scale-Responsibility Principle.** Absolute human impact matters, not just percentages.
   10,000 layoffs at a highly profitable employer is a large societal event even if it is
   2% of headcount.
5. **Materiality awareness.** "Production Abroad" is flagged as low-relevance for a SaaS
   company; badges tell the user when a pillar barely applies.
6. **Reproducibility over polish.** If a value is an illustrative reconstruction pending
   filing ingestion, the UI says so explicitly.

## Audiences

- **Consumers** — one score, a band label (Strong → Harmful), and two strength / two
  concern chips.
- **Workers & job seekers** — worker standards, affordability, layoff history.
- **Journalists & researchers** — the audit trail: equations, inputs, citations, evidence
  pages that are permanently linkable per company + factor.
- **Internal analysts (admin)** — a dashboard to edit pillar scores and per-pillar notes
  with a live weighted composite preview.

## Design language

Bloomberg's density + Glassdoor's accessibility + Apple's restraint: dark premium theme,
`text-gradient` display headings, tabular numerals, thin score bars, generous whitespace,
motion only where it explains something (bar fills, flow arrows).

## What is deliberately *not* in the score

**Workforce Reinvestment Capacity** (profit margin, revenue per employee, buybacks,
affordability vs. high-cost metros) is an analytics layer, not a pillar. Capacity to pay is
context, not conduct. Its only effect on the index is a rare **recognition bonus of up to
+10** for companies with exceptional worker standards *and* workforce commitment.
