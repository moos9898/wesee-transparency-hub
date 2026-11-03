/**
 * Renders a JSON-LD structured-data block for search engines.
 * Safe for SSR: the payload is serialized server-side and hydrated as-is.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
