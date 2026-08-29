import { useState } from "react";
import { PHASES } from "@/content/phases";
import { Markdown } from "@/components/Markdown";

export function PhaseStepper() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <div className="mt-10">
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {PHASES.map((p, i) => (
          <button
            key={p.num}
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className={`group flex min-w-[9.5rem] flex-none flex-col items-start gap-1 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
              open === i
                ? "border-primary/40 bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]"
                : "border-border bg-card text-secondary-foreground shadow-[var(--shadow-soft)] hover:border-primary/40"
            }`}
          >
            <span className="font-[family-name:var(--font-display)] text-[0.68rem] font-bold uppercase tracking-[0.14em] opacity-80">
              {p.num}
            </span>
            <span className="text-sm font-semibold leading-snug">{p.title}</span>
            <span className="text-[0.7rem] font-medium opacity-75">{p.weeks}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {PHASES.map((p, i) => {
          const isOpen = open === i;
          return (
            <div
              key={p.num}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                isOpen ? "border-primary/35 bg-card shadow-[var(--shadow-card)]" : "border-border bg-card/70"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-accent font-[family-name:var(--font-display)] text-xs font-bold tabular-nums text-accent-foreground">
                  {p.num.replace("Phase ", "")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground sm:text-base">
                    {p.num} — {p.title}
                  </span>
                  <span className="block text-xs font-medium text-muted-foreground">{p.weeks}</span>
                </span>
                <span
                  aria-hidden
                  className={`flex-none text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <div className="border-t border-border px-5 pb-6 pt-5">
                  <Markdown source={p.body} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
