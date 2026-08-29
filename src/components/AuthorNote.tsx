import { AUTHOR, NOTES } from "@/content/eeat";
import { Reveal } from "@/components/Reveal";

const ROWS = [
  { key: "expertise", label: "Expertise", hint: "The rule I apply" },
  { key: "evidence", label: "Authoritativeness", hint: "How to check it yourself" },
  { key: "caveat", label: "Trustworthiness", hint: "The honest limit" },
] as const;

/** First-person author note attached to a section: Experience + E-A-T rows. */
export function AuthorNote({ id }: { id: string }) {
  const note = NOTES[id];
  if (!note) return null;

  return (
    <Reveal delay={60}>
      <aside
        className="surface-card relative mt-10 overflow-hidden p-6 sm:p-7"
        aria-label="Author's experience note"
      >
        <span aria-hidden className="absolute inset-x-0 top-0 h-1 grad-primary" />

        <div className="flex flex-wrap items-center gap-3">
          <span
            aria-hidden
            className="h-10 w-10 flex-none rounded-xl grad-primary shadow-[var(--shadow-glow)]"
          />
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-display)] text-sm font-bold text-foreground">
              {AUTHOR.name}
            </p>
            <p className="text-xs font-medium text-primary">{AUTHOR.role}</p>
          </div>
          <span className="ml-auto rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
            Experience
          </span>
        </div>

        <p className="mt-4 border-l-2 border-primary/40 pl-4 text-[0.98rem] italic leading-relaxed text-foreground">
          {note.experience}
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-3">
          {ROWS.map((row) => (
            <div key={row.key} className="rounded-xl border border-border bg-secondary/50 p-4">
              <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                {row.label}
              </dt>
              <p className="mt-0.5 text-[0.68rem] font-medium text-muted-foreground">{row.hint}</p>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{note[row.key]}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </Reveal>
  );
}
