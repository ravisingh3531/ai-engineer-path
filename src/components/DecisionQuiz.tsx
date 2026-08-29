import { useState } from "react";
import { QUIZ, RESULTS, type QuizResult } from "@/content/data";

function resolve(a: Record<string, string>): QuizResult {
  const pick = (k: string) => RESULTS[k] as QuizResult;
  if (a["credential"] === "yes") return pick("credential");
  if (a["budget"] === "zero") return pick("selfStarter");
  if (a["budget"] === "premium" && a["context"] === "product" && a["years"] !== "senior")
    return pick("placement");
  if (a["years"] === "senior") return pick("lead");
  if (a["context"] === "services") return pick("internal");
  if (a["context"] === "freelance") return pick("freelancer");
  if (a["profile"] === "frontend") return pick("rebuilder");
  return pick("accelerator");
}

export function DecisionQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const done = step >= QUIZ.length;
  const q = QUIZ[Math.min(step, QUIZ.length - 1)];
  const result = done ? resolve(answers) : null;

  return (
    <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card shadow-[var(--shadow-card)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-primary)]" />
      <div className="p-6 sm:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
            Interactive decision tool
          </span>
          <span className="text-xs font-semibold tabular-nums text-muted-foreground">
            {done ? "Result" : `Question ${step + 1} of ${QUIZ.length}`}
          </span>
        </div>

        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-[var(--gradient-primary)] transition-all duration-500"
            style={{ width: `${(Math.min(step, QUIZ.length) / QUIZ.length) * 100}%` }}
          />
        </div>

        {!done && q ? (
          <div className="mt-7">
            <h4 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-[-0.02em] text-foreground">
              {q.question}
            </h4>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {q.options.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => {
                    setAnswers((prev) => ({ ...prev, [q.id]: o.value }));
                    setStep((s) => s + 1);
                  }}
                  className="rounded-xl border border-border bg-background px-4 py-3.5 text-left text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--shadow-soft)]"
                >
                  {o.label}
                </button>
              ))}
            </div>
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="mt-5 text-xs font-semibold text-primary underline-offset-4 hover:underline"
              >
                ← Back
              </button>
            ) : null}
          </div>
        ) : null}

        {done && result ? (
          <div className="mt-7">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
              Your profile
            </p>
            <h4 className="mt-1.5 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-gradient">
              {result.name}
            </h4>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/30 bg-secondary/60 p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                  Primary path
                </p>
                <p className="mt-1.5 text-sm font-semibold text-foreground">{result.path}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Runner-up
                </p>
                <p className="mt-1.5 text-sm font-semibold text-secondary-foreground">
                  {result.runnerUp}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{result.reason}</p>
            <p className="mt-2 text-xs font-semibold text-secondary-foreground">{result.band}</p>

            <button
              type="button"
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              className="mt-6 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40"
            >
              Start over
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
