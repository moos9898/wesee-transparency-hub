import { describe, expect, it } from "vitest";
import { AMAZON_CARD, COMPANY_CARDS } from "@/lib/company-cards/amazon";
import type { CompanyCard } from "@/lib/company-cards/amazon";
import { COSTCO_CARD } from "@/lib/company-cards/costco";
import { APPLE_CARD } from "@/lib/company-cards/apple";
import { WALMART_CARD } from "@/lib/company-cards/walmart";
import { META_CARD } from "@/lib/company-cards/meta";
import { MICROSOFT_CARD } from "@/lib/company-cards/microsoft";
import { ALPHABET_CARD } from "@/lib/company-cards/alphabet";
import { NVIDIA_CARD } from "@/lib/company-cards/nvidia";
import { BERKSHIRE_CARD } from "@/lib/company-cards/berkshire";
import { JPMORGAN_CARD } from "@/lib/company-cards/jpmorgan";

describe("supplied Costco data", () => {
  it("registers Costco separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["costco-com"]).toBe(COSTCO_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(AMAZON_CARD.overall).toBe(49);
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(COSTCO_CARD.overall).toBe(93);
    expect(Object.fromEntries(Object.entries(COSTCO_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 90,
      us_workforce_commitment: 96,
      local_economic: 76,
      layoffs_high_profits: 100,
      ceo_pay_ratio: 88,
      outsourcing_exposure: 100,
      community_resilience: null,
      production_abroad: 100,
      lobbying_activity: 100,
    });
  });

  it("keeps dormant, removed and unmeasurable factors unscored", () => {
    expect(COSTCO_CARD.pillars.worker_standards.factors.benefits.status).toBe("disclosed_not_scored");
    expect(COSTCO_CARD.pillars.worker_standards.factors.employee_retention.status).toBe("disclosed_not_scored");
    expect(COSTCO_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(COSTCO_CARD.pillars.community_resilience.score).toBeNull();
    expect(Object.values(COSTCO_CARD.pillars).flatMap(p => Object.values(p.factors)).filter(f => f.status === "scored")).toHaveLength(14);
  });
});

describe("supplied Walmart data (v1.3 refresh)", () => {
  it("registers Walmart separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["walmart-com"]).toBe(WALMART_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(WALMART_CARD.overall).toBe(54);
  });

  it("preserves the refreshed overall and nine pillar values", () => {
    expect(WALMART_CARD.overall).toBe(54);
    expect(WALMART_CARD.band).toBe("Mixed");
    expect(Object.fromEntries(Object.entries(WALMART_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 43,
      us_workforce_commitment: 80,
      local_economic: 78,
      layoffs_high_profits: 65,
      ceo_pay_ratio: 0,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 34,
    });
  });

  it("scores the v1.3 trend rule and keeps the harm pillars unmeasured", () => {
    expect(WALMART_CARD.pillars.us_workforce_commitment.factors.domestic_hiring.status).toBe("scored");
    expect(WALMART_CARD.pillars.us_workforce_commitment.factors.h1b_intensity.status).toBe("scored");
    expect(WALMART_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(WALMART_CARD.pillars.outsourcing_exposure.score).toBeNull();
    expect(WALMART_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(WALMART_CARD.pillars.production_abroad.score).toBeNull();
    expect(WALMART_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(WALMART_CARD.pillars.community_resilience.score).toBeNull();
    expect(WALMART_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(Object.values(WALMART_CARD.pillars).flatMap(p => Object.values(p.factors)).filter(f => f.status === "scored")).toHaveLength(13);
  });

  it("carries the refreshed supplied card and factor map, with exact-page source links", () => {
    expect(WALMART_CARD.suppliedBuildFile).toContain("Overall score: **54 — Mixed**");
    expect(WALMART_CARD.suppliedBuildFile).toContain("U.S. Workforce Rule v1.3");
    expect(WALMART_CARD.suppliedFactorMap).toContain("pillar score 80 (U.S. Workforce Rule v1.3");
    expect(WALMART_CARD.sources.find(s => s.label.startsWith("Walmart fiscal 2026 annual report"))?.url)
      .toBe("https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm");
    expect(WALMART_CARD.sources.find(s => s.label.startsWith("fiscal 2026 proxy statement"))?.url)
      .toBe("https://www.sec.gov/Archives/edgar/data/104169/000119312526173673/wmt-20260423.htm");
    expect(WALMART_CARD.sources.find(s => s.label.startsWith("Federal Election Commission"))?.url)
      .toBe("https://www.fec.gov/data/committee/C00093054/?cycle=2024&tab=summary");
    expect(WALMART_CARD.sources.find(s => s.label.startsWith("U.S. Government Accountability Office"))?.url)
      .toBe("https://www.gao.gov/assets/890/888620.pdf");
  });
});

describe("supplied Meta data", () => {
  it("registers Meta separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["meta-com"]).toBe(META_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(META_CARD.overall).toBe(49);
  });

  it("preserves the overall and nine pillar values", () => {
    expect(META_CARD.overall).toBe(49);
    expect(META_CARD.band).toBe("Weak");
    expect(Object.fromEntries(Object.entries(META_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 79,
      us_workforce_commitment: null,
      local_economic: 94,
      layoffs_high_profits: 15,
      ceo_pay_ratio: 94,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 18,
    });
  });

  it("keeps the U.S. Workforce and harm pillars unscored, with the H-1B count printed not scored", () => {
    expect(META_CARD.pillars.us_workforce_commitment.status).toBe("Not yet measured by WeSee");
    expect(META_CARD.pillars.us_workforce_commitment.factors.h1b_intensity.status).toBe("disclosed_not_scored");
    expect(META_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(META_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(META_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(META_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(Object.values(META_CARD.pillars).flatMap(p => Object.values(p.factors)).filter(f => f.status === "scored")).toHaveLength(9);
    // EX-4 HOLD: the printed USCIS line stays at 6,384 exactly.
    expect(JSON.stringify(META_CARD)).toContain(
      "USCIS approved 6,384 H-1B petitions for Meta Platforms in FY2025 — 1,554 initial + 4,830 continuing",
    );
    expect(JSON.stringify(META_CARD)).not.toContain("6,387");
    expect(JSON.stringify(META_CARD)).not.toContain("6,297");
  });

  it("links the filed figures to their exact source pages", () => {
    expect(META_CARD.sources.find(s => s.label.startsWith("Form 10-K FY2025"))?.url)
      .toBe("https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm");
    expect(META_CARD.sources.find(s => s.label.startsWith("DEF 14A 2026"))?.url)
      .toBe("https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm");
    expect(META_CARD.sources.find(s => s.label.startsWith("OpenSecrets — META PLATFORMS, INC. PAC"))?.url)
      .toBe("https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024");
    expect(META_CARD.sources.find(s => s.label.startsWith("U.S. Government Accountability Office"))?.url)
      .toBe("https://www.gao.gov/assets/890/888620.pdf");
    expect(META_CARD.pillars.lobbying_activity.sentenceLinks).toEqual([
      { text: "$333,503", url: "https://www.opensecrets.org/political-action-committees-pacs/meta/C00502906/summary/2024" },
    ]);
  });
});

describe("supplied Microsoft data", () => {
  it("registers Microsoft separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["microsoft-com"]).toBe(MICROSOFT_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(MICROSOFT_CARD.overall).toBe(49);
    expect(MICROSOFT_CARD.band).toBe("Weak");
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(MICROSOFT_CARD.overall).toBe(49);
    expect(Object.fromEntries(Object.entries(MICROSOFT_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 77,
      us_workforce_commitment: 68,
      local_economic: 57,
      layoffs_high_profits: 15,
      ceo_pay_ratio: 22,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 32,
    });
  });

  it("keeps the U.S. Workforce v1.3 values and the unscored harm pillars", () => {
    expect(MICROSOFT_CARD.pillars.us_workforce_commitment.factors.domestic_hiring.status).toBe("scored");
    expect(MICROSOFT_CARD.pillars.us_workforce_commitment.factors.h1b_intensity.status).toBe("scored");
    expect(MICROSOFT_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(MICROSOFT_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(MICROSOFT_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(MICROSOFT_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(MICROSOFT_CARD.pillars.community_resilience.score).toBeNull();
    // 12 scored factors per FACTOR_MAP_MICROSOFT.md (final, 2026-10-22):
    // Living Wage; Full-Time, Domestic Hiring, H-1B; Taxes; Layoff Severity,
    // Profitability, Buybacks; CEO Comp, Median Worker Comp; Lobbying Spend,
    // Political Contributions.
    expect(Object.values(MICROSOFT_CARD.pillars).flatMap(p => Object.values(p.factors)).filter(f => f.status === "scored")).toHaveLength(12);
  });

  it("prints the card-file H-1B count, not the complete-schedule-sweep figure (MS-H1 OPEN)", () => {
    expect(MICROSOFT_CARD.pillars.us_workforce_commitment.sentence).toContain("6,258");
    expect(MICROSOFT_CARD.pillars.us_workforce_commitment.sentence).not.toContain("7,213");
  });
});

describe("supplied Alphabet data", () => {
  it("registers Alphabet separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["alphabet-com"]).toBe(ALPHABET_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(ALPHABET_CARD.overall).toBe(51);
    expect(ALPHABET_CARD.band).toBe("Mixed");
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(ALPHABET_CARD.overall).toBe(51);
    expect(Object.fromEntries(Object.entries(ALPHABET_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 77,
      us_workforce_commitment: null,
      local_economic: 40,
      layoffs_high_profits: 80,
      ceo_pay_ratio: 8,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 23,
    });
  });

  it("keeps the U.S. Workforce pillar unmeasured and the H-1B count printed, not scored", () => {
    expect(ALPHABET_CARD.pillars.us_workforce_commitment.status).toBe("Not yet measured by WeSee");
    expect(ALPHABET_CARD.pillars.us_workforce_commitment.score).toBeNull();
    expect(ALPHABET_CARD.pillars.us_workforce_commitment.factors.h1b_intensity.status).toBe("disclosed_not_scored");
    expect(ALPHABET_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(ALPHABET_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(ALPHABET_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(ALPHABET_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    // 9 scored factors per FACTOR_MAP_ALPHABET.md (final, 2026-10-22):
    // Living Wage; Taxes; Layoff Severity, Profitability, Buybacks;
    // CEO Comp, Median Worker Comp; Lobbying Spend, Political Contributions.
    expect(Object.values(ALPHABET_CARD.pillars).flatMap(p => Object.values(p.factors)).filter(f => f.status === "scored")).toHaveLength(9);
  });

  it("prints the card-file H-1B count for Google LLC (5,512), not the 5,559 re-read", () => {
    const usw = ALPHABET_CARD.pillars.us_workforce_commitment;
    const h1bText = usw.blocks?.flatMap(b => b.lines.map(l => l.text)).join(" ") ?? "";
    expect(h1bText).toContain("5,512");
    expect(h1bText).not.toContain("5,559");
  });
});

describe("supplied NVIDIA data", () => {
  it("registers NVIDIA separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["nvidia-com"]).toBe(NVIDIA_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(NVIDIA_CARD.overall).toBe(58);
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(NVIDIA_CARD.overall).toBe(58);
    expect(NVIDIA_CARD.band).toBe("Mixed");
    expect(NVIDIA_CARD.coverage).toContain("5 of 7");
    expect(Object.fromEntries(Object.entries(NVIDIA_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 67,
      us_workforce_commitment: null,
      local_economic: 38,
      layoffs_high_profits: 100,
      ceo_pay_ratio: 24,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 50,
    });
  });

  it("keeps the unscored pillars unscored with the card's status strings", () => {
    expect(NVIDIA_CARD.pillars.us_workforce_commitment.status).toBe("Not yet measured by WeSee");
    expect(NVIDIA_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(NVIDIA_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(NVIDIA_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(NVIDIA_CARD.pillars.community_resilience.score).toBeNull();
  });

  it("keeps the factor map's scored / removed / unmeasurable factors", () => {
    const factors = Object.values(NVIDIA_CARD.pillars).flatMap(p => Object.values(p.factors));
    expect(factors.filter(f => f.status === "scored")).toHaveLength(9);
    expect(NVIDIA_CARD.pillars.worker_standards.factors.living_wage.status).toBe("scored");
    expect(NVIDIA_CARD.pillars.local_economic.factors.taxes.status).toBe("scored");
    expect(NVIDIA_CARD.pillars.lobbying_activity.factors.lobbying_spend.status).toBe("scored");
    expect(NVIDIA_CARD.pillars.lobbying_activity.factors.political_contributions.status).toBe("scored");
    expect(NVIDIA_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(NVIDIA_CARD.pillars.community_resilience.factors.local_investment.status).toBe("not_measurable");
    expect(NVIDIA_CARD.pillars.production_abroad.factors.domestic_production.status).toBe("not_measurable");
  });
});

describe("supplied Berkshire data", () => {
  it("registers Berkshire separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["berkshire-com"]).toBe(BERKSHIRE_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(BERKSHIRE_CARD.overall).toBe(69);
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(BERKSHIRE_CARD.overall).toBe(69);
    expect(BERKSHIRE_CARD.band).toBe("Mixed");
    expect(BERKSHIRE_CARD.coverage).toContain("5 of 7");
    expect(Object.fromEntries(Object.entries(BERKSHIRE_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 80,
      us_workforce_commitment: 85,
      local_economic: 56,
      layoffs_high_profits: 83,
      ceo_pay_ratio: 100,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 32,
    });
  });

  it("keeps the coverage cap visible (raw 75, headline 69)", () => {
    expect(BERKSHIRE_CARD.coverage).toContain("69");
    expect(BERKSHIRE_CARD.overallBlock.lines.map(l => l.text).join(" ")).toContain("5,474 ÷ 73");
    expect(BERKSHIRE_CARD.overallBlock.lines.map(l => l.text).join(" ")).toContain("so the score may not pass 69");
  });

  it("keeps the unscored pillars unscored with the card's status strings", () => {
    expect(BERKSHIRE_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(BERKSHIRE_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(BERKSHIRE_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(BERKSHIRE_CARD.pillars.community_resilience.score).toBeNull();
  });

  it("keeps the factor map's scored / removed / unmeasurable factors", () => {
    const factors = Object.values(BERKSHIRE_CARD.pillars).flatMap(p => Object.values(p.factors));
    expect(factors.filter(f => f.status === "scored")).toHaveLength(10);
    expect(BERKSHIRE_CARD.pillars.us_workforce_commitment.factors.domestic_hiring.status).toBe("scored");
    expect(BERKSHIRE_CARD.pillars.worker_standards.factors.living_wage.status).toBe("scored");
    expect(BERKSHIRE_CARD.pillars.local_economic.factors.taxes.status).toBe("scored");
    expect(BERKSHIRE_CARD.pillars.lobbying_activity.factors.lobbying_spend.status).toBe("scored");
    expect(BERKSHIRE_CARD.pillars.lobbying_activity.factors.political_contributions.status).toBe("scored");
    expect(BERKSHIRE_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(BERKSHIRE_CARD.pillars.community_resilience.factors.local_investment.status).toBe("not_measurable");
    expect(BERKSHIRE_CARD.pillars.production_abroad.factors.domestic_production.status).toBe("not_measurable");
  });
});

describe("supplied JPMorgan data", () => {
  it("registers JPMorgan separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["jpmorgan-com"]).toBe(JPMORGAN_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(JPMORGAN_CARD.overall).toBe(64);
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(JPMORGAN_CARD.overall).toBe(64);
    expect(Object.fromEntries(Object.entries(JPMORGAN_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 82,
      us_workforce_commitment: 85,
      local_economic: 63,
      layoffs_high_profits: 65,
      ceo_pay_ratio: 18,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 44,
    });
    const total = 82 * 16 + 85 * 14 + 63 * 14 + 65 * 12 + 18 * 10 + 44 * 7;
    expect(total).toBe(4652);
    expect(Math.round(total / 73)).toBe(JPMORGAN_CARD.overall);
  });

  it("keeps dormant, removed and unmeasurable factors unscored", () => {
    expect(JPMORGAN_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    expect(JPMORGAN_CARD.pillars.us_workforce_commitment.factors.h1b_intensity.status).not.toBe("scored");
    expect(JPMORGAN_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(JPMORGAN_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(JPMORGAN_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(JPMORGAN_CARD.pillars.community_resilience.score).toBeNull();
    const factors = Object.values(JPMORGAN_CARD.pillars).flatMap(p => Object.values(p.factors));
    expect(factors.filter(f => f.status === "scored")).toHaveLength(10);
    expect(factors.filter(f => f.status === "not_disclosed")).toHaveLength(10);
    expect(factors.filter(f => f.status === "not_measurable")).toHaveLength(4);
  });

  it("links every marker to its source page", () => {
    // Every [[...]] marker in a sentence/footnote/factor note has a matching
    // entry in that field's sentenceLinks/footnoteLinks/links array.
    const markers = (s: string) => [...s.matchAll(/\[\[([^\]]+)\]\]/g)].map(m => m[1]);
    for (const p of Object.values(JPMORGAN_CARD.pillars)) {
      for (const m of markers(p.sentence)) expect(p.sentenceLinks?.map(l => l.text)).toContain(m);
      if (p.footnote) for (const m of markers(p.footnote)) expect(p.footnoteLinks?.map(l => l.text)).toContain(m);
      for (const f of Object.values(p.factors)) {
        for (const m of markers(f.note)) expect(f.links?.map(l => l.text)).toContain(m);
      }
    }
  });
});

// Link-integrity guard for the finish rule (M, 2026-11-02): every [[...]]
// marker in every card must have a matching in-scope links entry with an
// https:// URL. Walks pillar sentences, footnotes, blocks and factor notes.
function collectMarkers(card: CompanyCard): { scope: string; marker: string; links: { text: string; url?: string }[] }[] {
  const out: { scope: string; marker: string; links: { text: string; url?: string }[] }[] = [];
  const markerRe = /\[\[([^\]]+)\]\]/g;
  const push = (scope: string, text: string | undefined, links?: { text: string; url?: string }[]) => {
    if (!text) return;
    for (const m of text.matchAll(markerRe)) out.push({ scope, marker: m[1], links: links ?? [] });
  };
  for (const [key, p] of Object.entries(card.pillars)) {
    push(`pillar ${key} sentence`, p.sentence, p.sentenceLinks);
    push(`pillar ${key} footnote`, p.footnote, p.footnoteLinks);
    for (const block of p.blocks ?? []) {
      for (const line of block.lines) push(`pillar ${key} block "${block.title}"`, line.text, line.links);
    }
    for (const [fkey, f] of Object.entries(p.factors)) push(`pillar ${key} factor ${fkey}`, f.note, f.links);
  }
  return out;
}

it("links every marked stat in all ten cards", () => {
  for (const card of [AMAZON_CARD, COSTCO_CARD, APPLE_CARD, WALMART_CARD, META_CARD, MICROSOFT_CARD, ALPHABET_CARD, NVIDIA_CARD, BERKSHIRE_CARD, JPMORGAN_CARD]) {
    for (const { scope, marker, links } of collectMarkers(card)) {
      expect(links.map(l => l.text), scope).toContain(marker);
      expect(links.find(l => l.text === marker)?.url, scope).toMatch(/^https:\/\//);
    }
  }
});
