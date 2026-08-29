import { useState } from "react";
import { COURSES, type Course } from "@/content/courses";
import { Reveal } from "@/components/Reveal";

const verdictTone: Record<string, string> = {
  "Best overall": "bg-[var(--gradient-primary)] text-primary-foreground",
  Strong: "bg-accent text-accent-foreground",
  Adequate: "bg-accent text-accent-foreground",
  Situational: "bg-secondary text-secondary-foreground",
  "Skip for this goal": "bg-secondary text-muted-foreground",
};

function Stars({ score }: { score: number }) {
  const pct = (score / 5) * 100;
  return (
    <div className="flex items-center gap-2">
      <div
        className="relative h-3 w-24 overflow-hidden rounded-full bg-secondary"
        role="img"
        aria-label={`${score} out of 5`}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[var(--gradient-primary)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-[family-name:var(--font-display)] text-sm font-bold tabular-nums text-foreground">
        {score.toFixed(1)}
        <span className="text-xs font-medium text-muted-foreground">/5</span>
      </span>
    </div>
  );
}

const DETAIL_ROWS: { label: string; key: keyof Course }[] = [
  { label: "Prerequisites", key: "prerequisites" },
  { label: "Python & ML foundations", key: "pythonMl" },
  { label: "GenAI depth", key: "genAiDepth" },
  { label: "Real-world AI projects", key: "projects" },
  { label: "Deployment & MLOps", key: "deployment" },
  { label: "Mentoring", key: "mentoring" },
  { label: "Interview preparation", key: "interviewPrep" },
  { label: "Resume / LinkedIn support", key: "resumeSupport" },
  { label: "Hiring partners", key: "hiringPartners" },
  { label: "Placement / job assistance", key: "placement" },
  { label: "Verifiable alumni evidence", key: "alumniEvidence" },
];

function CourseCard({ course }: { course: Course }) {
  const [open, setOpen] = useState(course.rank === 1);

  return (
    <article
      className={`relative overflow-hidden rounded-[1.5rem] border bg-card shadow-[var(--shadow-card)] ${
        course.rank === 1 ? "border-primary/35" : "border-border"
      }`}
    >
      {course.rank === 1 ? (
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[var(--gradient-primary)]" />
      ) : null}

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent font-[family-name:var(--font-display)] text-base font-bold tabular-nums text-accent-foreground">
              {String(course.rank).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h4 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug tracking-[-0.02em] text-foreground">
                {course.name}
              </h4>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">{course.provider}</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${
                verdictTone[course.verdict] ?? "bg-secondary text-secondary-foreground"
              }`}
            >
              {course.verdict}
            </span>
            <Stars score={course.score} />
          </div>
        </div>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-secondary-foreground">
          {course.tagline}
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { t: "Format", v: course.format },
            { t: "Duration", v: course.duration },
            { t: "Price", v: course.price },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-border bg-background/60 p-3">
              <dt className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-primary">
                {f.t}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {course.roles.map((r) => (
            <span
              key={r}
              className="rounded-lg border border-border bg-background/70 px-2.5 py-1 text-[0.68rem] font-medium text-secondary-foreground"
            >
              {r}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-semibold text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          {open ? "Hide the full evaluation" : "Read the full evaluation"}
          <span className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}>›</span>
        </button>

        {open ? (
          <div className="mt-6 space-y-6">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-xs">
                <tbody>
                  {DETAIL_ROWS.map((row, i) => (
                    <tr key={row.label} className={i % 2 ? "bg-background/50" : ""}>
                      <th
                        scope="row"
                        className="w-[38%] border-b border-border p-3 align-top text-[0.7rem] font-semibold text-foreground sm:w-[30%]"
                      >
                        {row.label}
                      </th>
                      <td className="border-b border-border p-3 align-top leading-relaxed text-muted-foreground">
                        {String(course[row.key])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
                  Strengths
                </p>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-secondary-foreground">
                  {course.strengths.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden className="text-primary">
                        ✓
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Limitations
                </p>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-secondary-foreground">
                  {course.limitations.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden className="text-muted-foreground">
                        —
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <p className="rounded-xl border border-primary/20 bg-accent/40 p-4 text-xs leading-relaxed text-secondary-foreground">
                <span className="font-semibold text-foreground">Best for: </span>
                {course.bestFor}
              </p>
              <p className="rounded-xl border border-border bg-background/60 p-4 text-xs leading-relaxed text-secondary-foreground">
                <span className="font-semibold text-foreground">Not for: </span>
                {course.notFor}
              </p>
            </div>

            {course.url ? (
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Verify the published outcomes yourself
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function CourseComparisonTable() {
  return (
    <div className="prose-article">
      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Fit score</th>
              <th>GenAI depth</th>
              <th>Deployment / MLOps</th>
              <th>Placement support</th>
              <th>Verdict for a full stack dev</th>
            </tr>
          </thead>
          <tbody>
            {COURSES.map((c) => (
              <tr key={c.rank}>
                <td>{c.rank}</td>
                <td>
                  <strong>{c.name}</strong>
                </td>
                <td>{c.score.toFixed(1)}/5</td>
                <td>{c.genAiDepth.split(".")[0]}</td>
                <td>{c.deployment.split(".")[0]}</td>
                <td>{c.placement.split(".")[0]}</td>
                <td>{c.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CourseReviews() {
  return (
    <div className="mt-8 space-y-5">
      {COURSES.map((c, i) => (
        <Reveal key={c.rank} delay={Math.min(i, 4) * 50}>
          <CourseCard course={c} />
        </Reveal>
      ))}
      <p className="text-xs leading-relaxed text-muted-foreground">
        Scores are the author's editorial fit ratings against the gap map in Section 4, computed
        with the weights published above. They are not measured outcomes, and no placement, salary
        or alumni figure appears anywhere in this comparison. Prices, durations and syllabus
        contents change between cohorts — every such claim is marked <em>[verify current]</em> and
        should be confirmed with the provider in writing before you pay.
      </p>
    </div>
  );
}
