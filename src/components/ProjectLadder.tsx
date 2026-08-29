import { PROJECTS } from "@/content/data";
import { Reveal } from "@/components/Reveal";

const DIFFICULTY_TONE: Record<string, string> = {
  Beginner: "bg-[color-mix(in_oklab,var(--success)_16%,transparent)] text-[oklch(0.42_0.12_172)]",
  Intermediate: "bg-accent text-accent-foreground",
  "Intermediate+": "bg-accent text-accent-foreground",
  Advanced: "bg-[color-mix(in_oklab,var(--warning)_18%,transparent)] text-[oklch(0.45_0.14_62)]",
  Expert: "bg-[var(--gradient-primary)] text-primary-foreground",
};

export function ProjectLadder() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.n} delay={(i % 3) * 60}>
          <article className="surface-card flex h-full flex-col gap-3 p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-primary)] font-[family-name:var(--font-display)] text-sm font-bold tabular-nums text-primary-foreground shadow-[var(--shadow-glow)]">
                {p.n}
              </span>
              <div className="flex flex-wrap items-center justify-end gap-1.5">
                <span
                  className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] ${DIFFICULTY_TONE[p.difficulty]}`}
                >
                  {p.difficulty}
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[0.65rem] font-semibold text-muted-foreground">
                  {p.time}
                </span>
              </div>
            </div>

            <h4 className="font-[family-name:var(--font-display)] text-base font-bold leading-snug tracking-[-0.02em] text-foreground">
              {p.title}
            </h4>

            <dl className="mt-auto space-y-2.5 text-sm">
              <div>
                <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                  Stack
                </dt>
                <dd className="text-secondary-foreground">{p.stack}</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                  Proves
                </dt>
                <dd className="text-secondary-foreground">{p.proves}</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                  Answers in interview
                </dt>
                <dd className="italic text-muted-foreground">“{p.question}”</dd>
              </div>
            </dl>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
