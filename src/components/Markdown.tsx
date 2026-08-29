import { useMemo } from "react";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

/** Renders trusted, build-time article markdown with the article prose styles. */
export function Markdown({ source, className = "" }: { source: string; className?: string }) {
  const html = useMemo(() => marked.parse(source) as string, [source]);
  return (
    <div
      className={`prose-article ${className}`}
      // Content is authored in-repo at build time, not user input.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
