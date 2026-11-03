// Company-specific deep links: turns a source id + company context into a URL
// that opens the actual company document / dataset record, never a homepage.

import { source } from "./registry";

export interface SourceContext {
  companyName: string;
  ticker?: string | null;
  headquarters?: string | null;
}

const enc = encodeURIComponent;

const ACTION_LABEL: Record<string, string> = {
  sec_edgar: "View Filing",
  osha: "View Record",
  bls: "View Dataset",
  census: "View Dataset",
  usitc: "View Dataset",
  mit_livingwage: "View County Data",
  opensecrets: "View Disclosure",
  senate_lda: "View Disclosure",
  fec: "View Disclosure",
  gjf: "View Subsidy Record",
  warn: "View WARN Notice",
};

function secForm(document?: string): string {
  if (!document) return "10-K";
  const d = document.toUpperCase();
  if (d.includes("DEF 14A")) return "DEF 14A";
  if (d.includes("10-Q")) return "10-Q";
  if (d.includes("8-K")) return "8-K";
  return "10-K";
}

/** Direct, company-scoped link to the original evidence. */
export function directSourceLink(
  sourceId: string,
  ctx: SourceContext,
  opts: { document?: string; page?: number } = {},
): { url: string; label: string; organization: string; name: string } {
  const s = source(sourceId);
  const name = ctx.companyName;
  const hq = ctx.headquarters || "United States";
  let url = s.homepage;

  switch (sourceId) {
    case "sec_edgar": {
      const form = secForm(opts.document);
      const who = ctx.ticker ? `ticker=${enc(ctx.ticker)}` : `company=${enc(name)}`;
      url = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&${who}&type=${enc(form)}&dateb=&owner=include&count=10`;
      break;
    }
    case "osha":
      url = `https://www.osha.gov/ords/imis/establishment.search?establishment=${enc(name)}&State=all&officetype=all&Office=all&p_start=&p_finish=0&p_sort=&p_desc=DESC&p_direction=Next&p_show=20`;
      break;
    case "bls":
      url = `https://data.bls.gov/oes/#/area/0000000?search=${enc(hq)}`;
      break;
    case "census":
      url = `https://data.census.gov/all?q=${enc(name)}`;
      break;
    case "usitc":
      url = `https://dataweb.usitc.gov/trade/search/Imports/HTS?query=${enc(name)}`;
      break;
    case "mit_livingwage":
      url = `https://livingwage.mit.edu/search?q=${enc(hq)}`;
      break;
    case "opensecrets":
      url = `https://www.opensecrets.org/federal-lobbying/search?q=${enc(name)}`;
      break;
    case "senate_lda":
      url = `https://lda.senate.gov/system/public/#/searchRegistrant/?registrantName=${enc(name)}`;
      break;
    case "fec":
      url = `https://www.fec.gov/data/receipts/?contributor_name=${enc(name)}`;
      break;
    case "gjf":
      url = `https://subsidytracker.goodjobsfirst.org/search?company=${enc(name)}`;
      break;
    case "warn":
      url = `https://www.dol.gov/agencies/eta/layoffs/warn?search=${enc(name)}`;
      break;
    default:
      url = s.homepage;
  }

  return {
    url,
    label: ACTION_LABEL[sourceId] ?? "View Original",
    organization: s.organization,
    name: s.name,
  };
}
