import { useState } from "react";
import { REVIEWERS } from "@/content/data";

export function ReviewerCarousel() {
  const [index, setIndex] = useState(0);
  const count = REVIEWERS.length;
  const go = (d: number) => setIndex((i) => (i + d + count) % count);

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[var(--shadow-card)]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {REVIEWERS.map((r, i) => (
            <div key={r.role} className="w-full flex-none p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[var(--gradient-primary)] font-[family-name:var(--font-display)] text-lg font-bold text-primary-foreground"
                  aria-label="Reviewer photo placeholder"
                >
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                    [Reviewer name placeholder]
                  </p>
                  <p className="text-sm font-medium text-primary">{r.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.bio}</p>
                  <p className="mt-3 text-xs font-semibold text-secondary-foreground">
                    [LinkedIn profile placeholder]
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-1.5">
          {REVIEWERS.map((r, i) => (
            <button
              key={r.role}
              type="button"
              aria-label={`Show reviewer ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous reviewer"
            className="rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next reviewer"
            className="rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
