import { useMemo, useState } from "react";
import { ALL_FINDER_QUESTIONS } from "@/content/finder";
import { COURSES, type Course } from "@/content/courses";

type Answers = Record<string, number>;

function resolveCourse(answers: Answers): { best: Course; runnerUp: Course; reasons: string[] } {
  const totals = new Map<number, number>();
  const reasons: string[] = [];

  for (const q of ALL_FINDER_QUESTIONS) {
    const idx = answers[q.id];
    if (idx === undefined) continue;
    const opt = q.options[idx];
    if (!opt) continue;
    for (const [rank, weight] of Object.entries(opt.weights)) {
      const key = Number(rank);
      totals.set(key, (totals.get(key) ?? 0) + weight);
    }
    reasons.push(`${q.question.replace(/\?$/, "")} → ${opt.label}`);
  }

  const ranked = [...totals.entries()].sort((a, b) => b[1] - a[1]);
  const byRank = (r: number) => COURSES.find((c) => c.rank === r) as Course;
  const best = byRank(ranked[0]?.[0] ?? 1) ?? COURSES[0]!;
  const runnerUp = byRank(ranked[1]?.[0] ?? 3) ?? COURSES[2]!;
  return { best, runnerUp, reasons };
}

export function CourseFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [open, setOpen] = useState(false);

  const total = ALL_FINDER_QUESTIONS.length;
  const question = ALL_FINDER_QUESTIONS[step];
  const result = useMemo(() => (open ? resolveCourse(answers) : null), [open, answers]);

  function choose(optionIndex: number) {
    const q = ALL_FINDER_QUESTIONS[step];
    if (!q) return;
    const next = { ...answers, [q.id]: optionIndex };
    setAnswers(next);
    if (step + 1 >= total) {
      setOpen(true);
    } else {
      setStep(step + 1);
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setOpen(false);
  }

  return (
    <div id="course-finder" className="scroll-mt-28">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[var(--gradient-primary)]" />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--primary) 14%, transparent)" }}
        />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
              Full Stack Developer → AI Engineer course finder
            </span>
            <span className="text-xs font-medium tabular-nums text-muted-foreground">
              Question {Math.min(step + 1, total)} of {total}
            </span>
          </div>

          <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-[var(--gradient-primary)] transition-all duration-500"
              style={{ width: `${(Object.keys(answers).length / total) * 100}%` }}
            />
          </div>

          {question ? (
            <div className="mt-7">
              <h4 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-[-0.02em] text-foreground">
                {question.question}
              </h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{question.caption}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {question.options.map((o, i) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => choose(i)}
                    className="group rounded-xl border border-border bg-background px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[var(--shadow-soft)]"
                  >
                    <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                      {o.label}
                    </span>
                    {o.hint ? (
                      <span className="mt-0.5 block text-xs text-muted-foreground">{o.hint}</span>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:border-primary/40"
              >
                ← Back
              </button>
            ) : null}
            {Object.keys(answers).length > 0 ? (
              <button
                type="button"
                onClick={restart}
                className="text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                Start over
              </button>
            ) : null}
            {Object.keys(answers).length >= 6 && !open ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-xl bg-[var(--gradient-primary)] px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                Show my best-fit course now
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {open && result ? (
        <ResultModal
          best={result.best}
          runnerUp={result.runnerUp}
          reasons={result.reasons}
          onClose={() => setOpen(false)}
          onRestart={restart}
        />
      ) : null}
    </div>
  );
}

function ResultModal({
  best,
  runnerUp,
  reasons,
  onClose,
  onRestart,
}: {
  best: Course;
  runnerUp: Course;
  reasons: string[];
  onClose: () => void;
  onRestart: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Your best-fit course"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card shadow-[var(--shadow-card)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-[var(--gradient-primary)]" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          ✕
        </button>

        <div className="p-6 sm:p-8">
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
            Your best fit
          </span>
          <h4 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight tracking-[-0.025em] text-foreground">
            {best.name}
          </h4>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            {best.provider} · Editorial fit score {best.score.toFixed(1)}/5 · {best.verdict}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground">{best.tagline}</p>

          <div className="mt-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
              Why this one, for your answers
            </p>
            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-muted-foreground">
              {reasons.slice(0, 6).map((r) => (
                <li key={r}>· {r}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground">{best.bestFor}</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-background/60 p-4">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                Curriculum
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{best.pythonMl}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {best.genAiDepth}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {best.deployment}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background/60 p-4">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                Placement &amp; support
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{best.placement}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {best.interviewPrep}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {best.alumniEvidence}
              </p>
            </div>
          </div>

          <p className="mt-5 rounded-xl border border-border bg-background/60 p-4 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Honest runner-up: </span>
            {runnerUp.name} — {runnerUp.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {best.url ? (
              <a
                href={best.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Check the curriculum and published outcomes
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : (
              <a
                href="#courses-reviewed"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                Read the full evaluation
              </a>
            )}
            <button
              type="button"
              onClick={onRestart}
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/40"
            >
              Retake the quiz
            </button>
          </div>

          <p className="mt-5 text-[0.7rem] leading-relaxed text-muted-foreground">
            This recommendation is an editorial fit calculation from your eleven answers and the
            published weights above. It is not a placement claim, an outcome prediction or a paid
            placement. Verify the current syllabus, batch schedule, price and refund policy in
            writing before you enrol.
          </p>
        </div>
      </div>
    </div>
  );
}
