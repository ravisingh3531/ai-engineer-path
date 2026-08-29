import { useState } from "react";
import { FAQS } from "@/content/data";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-8 space-y-2.5">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen
                ? "border-primary/35 bg-card shadow-[var(--shadow-card)]"
                : "border-border bg-card/70"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 px-5 py-4 text-left"
            >
              <span className="mt-0.5 font-[family-name:var(--font-display)] text-[0.7rem] font-bold tabular-nums text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-foreground sm:text-base">
                {f.q}
              </span>
              <span
                aria-hidden
                className={`flex-none text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <p className="border-t border-border px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
