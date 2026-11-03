// Real-evidence plumbing: reads a company's verified evidence from
// companies.pillar_notes.evidence[factorKey], and falls back to the
// deterministic illustrative example when none is on file. This lets a
// single company carry real, sourced numbers for the factors we have
// backfilled, while every other factor still renders a clearly-labelled
// illustrative example so pages are never empty.

import type { FactorDef } from "./registry";
import { exampleEvidence, type EvidenceBundle } from "./examples";

export type CompanyRow = {
  slug: string;
  pillar_notes?: unknown;
};

/** True when at least one factor on this company has real (non-illustrative) evidence. */
export function hasRealEvidence(company: CompanyRow): boolean {
  const ev = (company.pillar_notes as { evidence?: unknown } | null | undefined)?.evidence;
  if (!ev || typeof ev !== "object") return false;
  return Object.values(ev as Record<string, unknown>).some(
    (b) => b && typeof b === "object" && (b as EvidenceBundle).illustrative === false,
  );
}

/** Real evidence for a factor if on file, else the deterministic illustrative bundle. */
export function getFactorEvidence(
  factor: FactorDef,
  company: CompanyRow,
): EvidenceBundle {
  const ev = (company.pillar_notes as { evidence?: Record<string, EvidenceBundle> } | null | undefined)?.evidence;
  if (ev) {
    const bundle = ev[factor.key];
    if (bundle && bundle.illustrative === false) {
      return bundle;
    }
  }
  return exampleEvidence(factor, company.slug);
}
