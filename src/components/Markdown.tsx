import { useMemo } from "react";
import { Marked } from "marked";

const marked = new Marked({ gfm: true, breaks: false });

marked.use({
  renderer: {
    table(token) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const html = (this as any).constructor.prototype.table.call(this, token);
      return `<div class="table-shell">${html}</div>`;
    },
  },
});

/** Renders trusted, build-time article markdown with the article prose styles. */
export function Markdown({ source, className = "" }: { source: string; className?: string }) {
  const html = useMemo(() => marked.parse(source, { async: false }) as string, [source]);
  return (
    <div
      className={`prose-article ${className}`}
      // Content is authored in-repo at build time, never user input.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
