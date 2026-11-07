import type { ReactNode } from "react";
import type { LinkRef } from "@/lib/company-cards/amazon";

/**
 * Renders `[[...]]` markers in card text as source links.
 * Each marker's exact inner text must appear once in `links` with its exact
 * source-page URL (see FINISH_LINK_SPEC_2026-11-06.md). Unmarked text renders
 * exactly as before. A marker with no matching link renders as plain text
 * (brackets stripped) so no `[[...]]` ever leaks into the page.
 */
export function renderLinkedText(text: string, links?: LinkRef[]): ReactNode {
  if (!links || links.length === 0) return text;
  const parts = text.split(/\[\[([^\]]+)\]\]/g);
  // split() yields [plain, marker, plain, marker, ...]; odd indexes are markers.
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const link = links.find((l) => l.text === part);
    if (!link) return part;
    return (
      <a
        key={i}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {part}
      </a>
    );
  });
}
