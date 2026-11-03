// Source reliability framework + per-pillar citations + weight justifications.
// Frontend-only catalog: lets every score, rationale, and metric be traced to
// an official, hyperlinked public source with a visible confidence level.

import type { PillarKey } from "./score";

export type SourceTier = 1 | 2 | 3;
export type Confidence = "high" | "medium" | "low";

export const TIERS: Record<SourceTier, {
  label: string;
  shortLabel: string;
  description: string;
  rule: string;
  tone: string;
}> = {
  1: {
    label: "Tier 1 — Official Verified Sources",
    shortLabel: "Tier 1",
    description: "Government filings and primary regulatory disclosures. Eligible for direct scoring impact.",
    rule: "May directly modify scores and metrics through the automated pipeline.",
    tone: "text-emerald-400",
  },
  2: {
    label: "Tier 2 — Verified Secondary Sources",
    shortLabel: "Tier 2",
    description: "Established financial and investigative journalism. Allowed only as supporting context.",
    rule: "May support rationale notes or trigger manual review. Cannot independently modify scores.",
    tone: "text-amber-400",
  },
  3: {
    label: "Tier 3 — Disallowed Sources",
    shortLabel: "Tier 3",
    description: "Unverified, speculative, or opinion-based content.",
    rule: "Never used to score, cite, or substantiate any WeSee finding.",
    tone: "text-red-400",
  },
};

export const TIER_1_EXAMPLES = [
  { name: "SEC EDGAR", url: "https://www.sec.gov/edgar/search/", note: "10-K, 10-Q, DEF 14A filings" },
  { name: "U.S. Bureau of Labor Statistics", url: "https://www.bls.gov/data/", note: "Wage, employment, productivity data" },
  { name: "OSHA Establishment Search", url: "https://www.osha.gov/ords/imis/establishment.html", note: "Workplace injury and citation records" },
  { name: "U.S. Census Bureau", url: "https://www.census.gov/data.html", note: "Economic and demographic datasets" },
  { name: "OpenSecrets", url: "https://www.opensecrets.org/", note: "Federal lobbying and political spend disclosures" },
  { name: "MIT Living Wage Calculator", url: "https://livingwage.mit.edu/", note: "County-level cost-of-living benchmarks" },
];

export const TIER_2_EXAMPLES = [
  { name: "Reuters", url: "https://www.reuters.com/" },
  { name: "Bloomberg", url: "https://www.bloomberg.com/" },
  { name: "Financial Times", url: "https://www.ft.com/" },
  { name: "Associated Press", url: "https://apnews.com/" },
  { name: "Wall Street Journal", url: "https://www.wsj.com/" },
];

export const TIER_3_EXAMPLES = [
  "Reddit and other user-generated forums",
  "TikTok, Instagram, and short-form social posts",
  "Personal blogs and opinion sites",
  "Unverified leaks or speculative reporting",
];

const CONFIDENCE_LABEL: Record<Confidence, string> = {
  high: "High confidence",
  medium: "Medium confidence",
  low: "Low confidence",
};
const CONFIDENCE_TONE: Record<Confidence, string> = {
  high: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  medium: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  low: "text-orange-400 border-orange-500/30 bg-orange-500/5",
};
const CONFIDENCE_DESC: Record<Confidence, string> = {
  high: "Backed by official, primary-source filings within the last reporting cycle.",
  medium: "Backed by a mix of verified primary and secondary sources; some estimation involved.",
  low: "Partial or estimated data; flagged for manual review and re-verification.",
};

export function confidenceMeta(c: Confidence) {
  return {
    label: CONFIDENCE_LABEL[c],
    tone: CONFIDENCE_TONE[c],
    description: CONFIDENCE_DESC[c],
  };
}

export interface SourceCitation {
  name: string;          // e.g. "SEC 10-K"
  publisher: string;     // e.g. "U.S. Securities and Exchange Commission"
  type: string;          // e.g. "Annual report filing"
  url: string;           // canonical, hyperlinked
  tier: SourceTier;
}

export interface PillarTransparency {
  confidence: Confidence;
  weightRationale: string;
  normalization: string;
  scaleResponsibility?: string;
  sources: SourceCitation[];
}

// Canonical public-source registry per pillar. URLs point to canonical
// catalog landing pages so they remain stable across reporting cycles.
export const PILLAR_TRANSPARENCY: Record<PillarKey, PillarTransparency> = {
  worker_standards: {
    confidence: "high",
    weightRationale:
      "Compensation, benefits, and safety receive the largest pillar weight because they most directly determine whether U.S. workers can sustain stable living standards relative to local cost-of-living conditions.",
    normalization:
      "Wages are benchmarked against MIT Living Wage thresholds at the county level. Injury rates are normalized against BLS industry medians. Turnover is compared to NAICS peer cohorts.",
    sources: [
      { name: "BLS Occupational Employment & Wage Statistics", publisher: "U.S. Bureau of Labor Statistics", type: "Government dataset", url: "https://www.bls.gov/oes/", tier: 1 },
      { name: "OSHA Establishment Search", publisher: "Occupational Safety and Health Administration", type: "Inspection and injury database", url: "https://www.osha.gov/ords/imis/establishment.html", tier: 1 },
      { name: "MIT Living Wage Calculator", publisher: "Massachusetts Institute of Technology", type: "Cost-of-living benchmark", url: "https://livingwage.mit.edu/", tier: 1 },
    ],
  },
  us_workforce_commitment: {
    confidence: "medium",
    weightRationale:
      "Sustained domestic hiring and full-time conversion materially influence long-term workforce stability. Weighted just below worker standards because disclosures are less standardized.",
    normalization:
      "Full-time vs. contingent ratios are normalized by industry. Multi-year hiring trends are indexed against U.S. revenue growth to control for organic scaling.",
    sources: [
      { name: "SEC 10-K — Human Capital Disclosure", publisher: "U.S. Securities and Exchange Commission", type: "Annual report filing", url: "https://www.sec.gov/edgar/search/", tier: 1 },
      { name: "BLS Quarterly Census of Employment & Wages", publisher: "U.S. Bureau of Labor Statistics", type: "Government dataset", url: "https://www.bls.gov/cew/", tier: 1 },
    ],
  },
  local_economic: {
    confidence: "high",
    weightRationale:
      "Domestic capex, supplier spend, and U.S. R&D are direct measures of whether profits earned from U.S. customers flow back into the U.S. economy.",
    normalization:
      "Domestic reinvestment is expressed as a share of U.S.-attributable revenue. Supplier spend is normalized against total procurement disclosed in 10-K filings.",
    sources: [
      { name: "SEC 10-K — Segment & Geographic Disclosures", publisher: "U.S. Securities and Exchange Commission", type: "Annual report filing", url: "https://www.sec.gov/edgar/search/", tier: 1 },
      { name: "U.S. Census Bureau — Annual Capital Expenditures Survey", publisher: "U.S. Census Bureau", type: "Government dataset", url: "https://www.census.gov/programs-surveys/aces.html", tier: 1 },
    ],
  },
  community_resilience: {
    confidence: "medium",
    weightRationale:
      "Site stability and local tax contribution net of subsidies measure whether a company strengthens or destabilizes the communities hosting it.",
    normalization:
      "Subsidy receipts are normalized against jobs created and tenure. Site closures are weighted by local labor-market share.",
    sources: [
      { name: "Good Jobs First — Subsidy Tracker", publisher: "Good Jobs First", type: "Public subsidy database", url: "https://subsidytracker.goodjobsfirst.org/", tier: 1 },
      { name: "U.S. Census Bureau — County Business Patterns", publisher: "U.S. Census Bureau", type: "Government dataset", url: "https://www.census.gov/programs-surveys/cbp.html", tier: 1 },
    ],
  },
  outsourcing_exposure: {
    confidence: "medium",
    weightRationale:
      "Outsourcing is weighted similarly to layoffs because large-scale domestic workforce displacement creates measurable societal impact. Even modest percentage shifts at scale can materially affect regional labor markets.",
    scaleResponsibility:
      "For employers above 100,000 U.S. workers, WeSee evaluates both the percentage of roles displaced and the absolute count of U.S. positions affected.",
    normalization:
      "Offshoring intensity combines (a) the relative share of core roles contracted abroad and (b) the absolute number of U.S. positions reduced, normalized by metropolitan-area employment.",
    sources: [
      { name: "U.S. Department of Labor — WARN Notices", publisher: "Employment & Training Administration", type: "Mandatory layoff filings", url: "https://www.dol.gov/agencies/eta/layoffs/warn", tier: 1 },
      { name: "SEC 10-K — Risk & Operations Disclosures", publisher: "U.S. Securities and Exchange Commission", type: "Annual report filing", url: "https://www.sec.gov/edgar/search/", tier: 1 },
    ],
  },
  production_abroad: {
    confidence: "medium",
    weightRationale:
      "Production location for goods sold into the U.S. market is a direct measure of how domestic demand translates into domestic manufacturing activity.",
    normalization:
      "Domestic production share is expressed as a ratio of U.S.-assembled or U.S.-grown goods to total U.S. unit sales. Supplier concentration is benchmarked against industry norms.",
    sources: [
      { name: "U.S. Census Bureau — Annual Survey of Manufactures", publisher: "U.S. Census Bureau", type: "Government dataset", url: "https://www.census.gov/programs-surveys/asm.html", tier: 1 },
      { name: "USITC DataWeb", publisher: "U.S. International Trade Commission", type: "Trade and tariff data", url: "https://dataweb.usitc.gov/", tier: 1 },
    ],
  },
  lobbying_activity: {
    confidence: "high",
    weightRationale:
      "Lobbying intensity contextualizes how much a company invests in shaping public policy relative to its U.S. revenue and peer set.",
    normalization:
      "Annual federal lobbying spend is normalized per $1B of U.S.-attributable revenue and compared against industry medians.",
    sources: [
      { name: "OpenSecrets — Lobbying Database", publisher: "Center for Responsive Politics", type: "Aggregated LDA filings", url: "https://www.opensecrets.org/federal-lobbying", tier: 1 },
      { name: "U.S. Senate — Lobbying Disclosure Act Database", publisher: "U.S. Senate Office of Public Records", type: "Primary disclosure registry", url: "https://lda.senate.gov/system/public/", tier: 1 },
    ],
  },
  ceo_pay_ratio: {
    confidence: "high",
    weightRationale:
      "CEO-to-median-worker pay ratio is a standardized, mandatory SEC disclosure that captures internal pay structure with minimal estimation.",
    normalization:
      "Ratios are benchmarked against sector medians and the S&P 500 distribution. Multi-year trends are weighted to smooth one-time equity grants.",
    sources: [
      { name: "SEC DEF 14A — Proxy Statement", publisher: "U.S. Securities and Exchange Commission", type: "Annual proxy filing", url: "https://www.sec.gov/edgar/search/", tier: 1 },
    ],
  },
  layoffs_high_profits: {
    confidence: "high",
    weightRationale:
      "Layoffs announced in profitable cycles receive substantial weight because large-scale workforce reductions can create broad regional, housing, and labor-market disruption — even when the percentage of total workforce is modest.",
    scaleResponsibility:
      "WeSee evaluates both proportional workforce impact and absolute societal impact. A 1% reduction at a 1.5M-employee employer may displace more workers than a 25% reduction at a mid-cap firm; both are weighted accordingly.",
    normalization:
      "Layoff events are paired with the same reporting period's net income, free cash flow, and buyback activity. Severance quality and net hiring elsewhere are credited as offsets.",
    sources: [
      { name: "U.S. Department of Labor — WARN Notices", publisher: "Employment & Training Administration", type: "Mandatory layoff filings", url: "https://www.dol.gov/agencies/eta/layoffs/warn", tier: 1 },
      { name: "SEC 10-Q — Quarterly Financial Disclosures", publisher: "U.S. Securities and Exchange Commission", type: "Quarterly report filing", url: "https://www.sec.gov/edgar/search/", tier: 1 },
    ],
  },
};

export function pillarTransparency(key: PillarKey): PillarTransparency {
  return PILLAR_TRANSPARENCY[key];
}
