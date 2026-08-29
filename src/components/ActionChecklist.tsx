import { useState } from "react";
import { CHECKLIST } from "@/content/data";
import { Reveal } from "@/components/Reveal";

export function ActionChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-2">
      {CHECKLIST.map((block, bi) => {
        const doneCount = block.items.filter((_, i) => checked[`${bi}-${i}`]).length;
        return (
          <Reveal key={block.day} delay={(bi % 2) * 70}>
            <div className="surface-card flex h-full flex-col p-6">
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-gradient">
                    {block.day}
                  </p>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">
                    {block.label}
                  </p>
                </div>
                <span className="rounded-full border border-border px-2.5 py-1 text-[0.68rem] font-bold tabular-nums text-muted-foreground">
                  {doneCount}/{block.items.length}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {block.items.map((item, i) => {
                  const key = `${bi}-${i}`;
                  const isDone = !!checked[key];
                  return (
                    <li key={key}>
                      <label className="flex cursor-pointer items-start gap-3 text-sm leading-snug">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggle(key)}
                          className="mt-0.5 h-4 w-4 flex-none accent-[var(--primary)]"
                        />
                        <span
                          className={
                            isDone ? "text-muted-foreground line-through" : "text-secondary-foreground"
                          }
                        >
                          {item}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-auto pt-5 text-sm">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                  Milestone ·{" "}
                </span>
                <span className="font-medium text-foreground">{block.milestone}</span>
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
