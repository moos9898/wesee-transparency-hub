import { describe, expect, it } from "vitest";
import { AMAZON_CARD, COMPANY_CARDS } from "../company-cards/amazon";
import { APPLE_CARD } from "../company-cards/apple";
import { COSTCO_CARD } from "../company-cards/costco";

describe("supplied Apple card", () => {
  it("registers apple-com without replacing other cards", () => {
    expect(COMPANY_CARDS["apple-com"]).toBe(APPLE_CARD);
    expect(COMPANY_CARDS["amazon-com"]).toBe(AMAZON_CARD);
    expect(COMPANY_CARDS["costco-com"]).toBe(COSTCO_CARD);
    expect(AMAZON_CARD.overall).toBe(49);
    expect(COSTCO_CARD.overall).toBe(93);
  });

  it("uses the supplied final headline and pillar scores", () => {
    expect(APPLE_CARD.overall).toBe(56);
    expect(Object.fromEntries(Object.entries(APPLE_CARD.pillars).map(([key, p]) => [key, p.score]))).toEqual({
      worker_standards: 68,
      us_workforce_commitment: null,
      local_economic: 74,
      layoffs_high_profits: 75,
      ceo_pay_ratio: 5,
      outsourcing_exposure: null,
      community_resilience: null,
      production_abroad: null,
      lobbying_activity: 34,
    });
    const total = 68 * 16 + 74 * 14 + 75 * 12 + 5 * 10 + 34 * 7;
    expect(total).toBe(3312);
    expect(Math.round(total / 59)).toBe(APPLE_CARD.overall);
  });

  it("does not score unfinished pillars or printed H-1B petitions", () => {
    expect(APPLE_CARD.pillars.us_workforce_commitment.status).toBe("Not yet measured by WeSee");
    expect(APPLE_CARD.pillars.outsourcing_exposure.status).toBe("Not yet measured by WeSee");
    expect(APPLE_CARD.pillars.production_abroad.status).toBe("Not yet measured by WeSee");
    expect(APPLE_CARD.pillars.community_resilience.status).toBe("Not yet measurable");
    expect(APPLE_CARD.pillars.us_workforce_commitment.factors.h1b_intensity.status).not.toBe("scored");
    expect(APPLE_CARD.pillars.us_workforce_commitment.factors.training_investment.status).toBe("removed_by_m");
    const factors = Object.values(APPLE_CARD.pillars).flatMap(p => Object.values(p.factors));
    expect(factors.filter(f => f.status === "scored")).toHaveLength(9);
    expect(factors.filter(f => f.status === "not_disclosed")).toHaveLength(11);
    expect(factors.filter(f => f.status === "not_measurable")).toHaveLength(4);
  });
});