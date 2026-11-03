// Industry materiality system — declares how relevant each pillar is to an
// industry so the UI can suppress weak proxy scoring instead of pretending
// every pillar applies equally to every company.

import type { PillarKey } from "./score";

export type Materiality = "high" | "standard" | "low";

interface Rule {
  test: (industry: string) => boolean;
  pillars: Partial<Record<PillarKey, Materiality>>;
}

const RULES: Rule[] = [
  // Software / SaaS / Cloud platforms — physical production is largely n/a
  {
    test: (i) => /software|saas|cloud|platform|internet|media|streaming/i.test(i),
    pillars: {
      production_abroad: "low",
      outsourcing_exposure: "standard",
    },
  },
  // Banking, insurance, asset management — no physical production
  {
    test: (i) => /bank|financ|insur|asset manage|brokerage|fintech/i.test(i),
    pillars: {
      production_abroad: "low",
    },
  },
  // Manufacturing / hardware / retail / consumer goods — production is core
  {
    test: (i) => /manufact|hardware|semiconduct|automotive|aerospace|industrial|consumer goods|apparel|retail/i.test(i),
    pillars: {
      production_abroad: "high",
      local_economic: "high",
    },
  },
];

export function pillarMateriality(
  industry: string | null | undefined,
  pillar: PillarKey,
): Materiality {
  if (!industry) return "standard";
  for (const r of RULES) {
    if (r.test(industry) && r.pillars[pillar]) return r.pillars[pillar]!;
  }
  return "standard";
}

export const MATERIALITY_META: Record<Materiality, { label: string; tone: string; note: string | null }> = {
  high: {
    label: "Highly material",
    tone: "border-primary/30 bg-primary/5 text-primary",
    note: null,
  },
  standard: {
    label: "Material",
    tone: "border-border bg-muted/20 text-muted-foreground",
    note: null,
  },
  low: {
    label: "Limited relevance",
    tone: "border-border bg-muted/20 text-muted-foreground",
    note: "This pillar has limited material relevance for this industry. The score is shown for completeness but should carry less weight in interpretation.",
  },
};
