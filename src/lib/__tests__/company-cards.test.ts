import { describe, expect, it } from "vitest";
import { AMAZON_CARD, COMPANY_CARDS } from "@/lib/company-cards/amazon";
import { COSTCO_CARD } from "@/lib/company-cards/costco";

describe("supplied Costco data", () => {
  it("registers Costco separately without replacing Amazon", () => {
    expect(COMPANY_CARDS["costco-com"]).toBe(COSTCO_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(AMAZON_CARD.overall).toBe(31);
  });

  it("preserves the supplied overall and nine pillar values", () => {
    expect(COSTCO_CARD.overall).toBe(88);
    expect(Object.fromEntries(Object.entries(COSTCO_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 90,
      us_workforce_commitment: 69,
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
    expect(Object.values(COSTCO_CARD.pillars).flatMap(p => Object.values(p.factors)).filter(f => f.status === "scored")).toHaveLength(13);
  });
});