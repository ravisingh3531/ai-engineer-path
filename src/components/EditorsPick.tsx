import { useState } from "react";
import { GAP_COVERAGE, LIMITATIONS } from "@/content/data";
import { Markdown } from "@/components/Markdown";

const CASE = `**Fit for full stack developers.** LogicMojo's AI & ML Course is a structured path that runs from classical machine-learning fundamentals through generative AI and into Agentic AI, delivered as a project-based program with dedicated career transition support. That sequence matters more than any individual module for this reader: **Phases 2–5 of the roadmap on this page map onto the program's ML → LLM → RAG → agents → deployment progression**, which means your existing engineering compounds rather than being re-taught. Phase 1 — Python idioms, environments, API integration — is the part you already largely own, and it is not the spine of the program. Phase 6 is where its career layer applies.

**Why it suits a working developer specifically.** The three failure points this page keeps returning to are evaluation (Phase 3), depth in one agent framework rather than five (Phase 4), and the applying discipline (Phase 6). Those are precisely the areas where self-study most often breaks down for people with a full-time job, and they are the areas a mentored, cohort-paced program is structurally best at holding you to. If your gap is knowledge alone, free material will serve you. If your gap is sequencing, review and accountability, this is the argument for paying.

**Hands-on projects.** The program is project-based, with progressively harder systems building toward a learner-designed capstone rather than a single shared cohort project — which is the distinction that decides whether a portfolio reads as evidence or as a template. Project types are described here only at the level supported by the published curriculum; confirm the specific build list for your batch — **[verify current project list]**.

**Career-oriented layer.** Published career transition support covers mock interviews, project-defence practice, resume and LinkedIn positioning, and help constructing a coherent career-switch narrative. **No placement percentages are printed here, because none are verifiable.** Treat career support as preparation and positioning, not as a hiring funnel.

**Format for working developers.** Live IST batches with recordings, mentorship and doubt resolution designed around full-time work — **[verify current batch schedule]** before assuming a timing fits your on-call rota.

**Pricing and value positioning.** Mid-tier — **₹XX,XXX, EMI available [verify current]** — which places it well below the premium university-affiliated and placement-heavy programs and well above the near-free self-study stack. The value argument is cost per unit of *hiring evidence*: sequenced projects, reviewed code, and interview practice aimed at AI loops. That argument **does not hold** for a reader who needs an accredited credential, or one who is buying access to a premium placement funnel. For those readers, the money is better spent elsewhere, and Section 8 says which.`;

const VERDICT = `**Who should pick it:** a working full stack developer, roughly 2–8 years in, targeting an applied AI or GenAI engineering role in India, who wants structure, mentorship, individually designed projects and interview preparation at a mid-tier price, and who can protect 10–15 hours a week for a cohort.

**Who should not:** readers who need an accredited credential for an HR gate, a promotion policy or a visa; readers on a near-zero budget (DeepLearning.AI and fast.ai are genuinely excellent); research aspirants targeting Applied Scientist roles; and freshers who need a large placement drive rather than a curriculum.`;

const TONE: Record<string, string> = {
  Yes: "bg-[color-mix(in_oklab,var(--success)_18%,transparent)] text-[oklch(0.40_0.12_172)]",
  Partial: "bg-[color-mix(in_oklab,var(--warning)_20%,transparent)] text-[oklch(0.44_0.14_62)]",
  "[verify current syllabus]": "bg-muted text-muted-foreground",
};

export function EditorsPick() {
  const [openLimit, setOpenLimit] = useState(false);

  return (
    <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-primary/30 bg-card shadow-[var(--shadow-card)]">
      <div className="absolute inset-x-0 top-0 h-1.5 grad-primary" />
      <div
        className="absolute -right-28 -top-28 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--primary) 16%, transparent)" }}
        aria-hidden
      />

      <div className="relative p-6 sm:p-9">
        <span className="inline-flex items-center gap-2 rounded-full grad-primary px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[var(--shadow-glow)]">
          ⭐ Editor's pick — recommended structured path
        </span>

        <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.6rem] font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-[2rem]">
          LogicMojo AI &amp; ML Course: Why It Fits This Transition
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Argued under the seven criteria above, with limitations disclosed in full. LogicMojo
          publishes this page — see the author disclosure at the end.
        </p>

        <Markdown source={CASE} className="mt-6" />

        <h4 className="mt-10 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em] text-foreground">
          Curriculum against the 16-area gap map
        </h4>
        <p className="mt-1.5 text-sm text-muted-foreground">
          “Yes” and “Partial” reflect the published curriculum's stated progression; anything
          unverifiable is marked for you to check against the current syllabus rather than asserted
          here.
        </p>

        <div className="prose-article mt-4">
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Gap area</th>
                  <th>Covered in LogicMojo AI &amp; ML Course</th>
                  <th>Roadmap phase</th>
                </tr>
              </thead>
              <tbody>
                {GAP_COVERAGE.map((row) => (
                  <tr key={row.area}>
                    <td>{row.area}</td>
                    <td>
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-[0.68rem] font-bold ${TONE[row.covered]}`}
                      >
                        {row.covered}
                      </span>
                    </td>
                    <td className="whitespace-nowrap">{row.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/60 p-5">
          <button
            type="button"
            onClick={() => setOpenLimit((v) => !v)}
            aria-expanded={openLimit}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <span>
              <span className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                Honest limitations — eight of them
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Read these before the verdict. If they disqualify the program for you, that is the
                section working as intended.
              </span>
            </span>
            <span
              aria-hidden
              className={`flex-none text-primary transition-transform duration-300 ${openLimit ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>

          {openLimit ? (
            <ul className="mt-5 space-y-4">
              {LIMITATIONS.map((l) => (
                <li key={l.title} className="border-l-2 border-primary/40 pl-4">
                  <p className="text-sm font-semibold text-foreground">{l.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <Markdown source={VERDICT} className="mt-8" />

        <a
          href="#logicmojo-contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl grad-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Explore the LogicMojo AI &amp; ML Course — curriculum, projects and batch schedule
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          [internal link: LogicMojo AI &amp; ML Course] · [internal link: Curriculum] · [internal
          link: Batch Details]
        </p>
      </div>
    </div>
  );
}
