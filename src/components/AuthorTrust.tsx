import { ReviewerCarousel } from "@/components/ReviewerCarousel";

export function AuthorTrust() {
  return (
    <section id="author" className="scroll-mt-28 pt-20">
      <div className="hairline mb-10" />

      <h2 className="font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-[2.15rem]">
        About the Author
      </h2>

      <div className="surface-card mt-7 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div
            className="h-20 w-20 flex-none rounded-2xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]"
            aria-label="Author photo placeholder"
          />
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
              [Author name placeholder]
            </p>
            <p className="text-sm font-medium text-primary">
              Author · career-transition research for engineering audiences
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This page is built on 200+ tracked full stack → AI engineer transitions in India
              (2024–2026), 500+ live Indian AI-engineering job descriptions mapped against a full
              stack profile, 40+ interviews with hiring managers, AI leads and technical recruiters,
              and 40+ AI/ML programs reviewed through one lens only: does this serve a developer who
              already ships software?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">Methodology and disclosure:</strong>{" "}
              every figure on this page is labelled as an author's planning band, a
              provider-published claim, or a value to verify.{" "}
              <strong className="font-semibold text-foreground">
                LogicMojo publishes this page.
              </strong>{" "}
              The recommendation of the LogicMojo AI &amp; ML Course reflects the author's
              assessment under the seven criteria stated in Section 8, and the six alternatives are
              reviewed on the same criteria — including the readers for whom an alternative is the
              better choice.
            </p>
            <p className="mt-4 text-xs font-semibold text-secondary-foreground">
              [LinkedIn profile placeholder] · Last updated: 2026
            </p>
          </div>
        </div>
      </div>

      <h2 className="mt-16 font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-[2.15rem]">
        Reviewed By — Expert Panel
      </h2>
      <p className="mt-2 text-muted-foreground">
        Five reviewers checked the sections closest to their work. Names and profiles are
        placeholders — no individuals or affiliations are invented here.
      </p>
      <ReviewerCarousel />

      <div className="surface-card mt-10 grid gap-5 p-6 sm:grid-cols-3">
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
            Last reviewed
          </p>
          <p className="mt-1.5 text-sm text-secondary-foreground">
            2026 · reviewed on publication and refreshed as the market and syllabi change.
          </p>
        </div>
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
            Figures
          </p>
          <p className="mt-1.5 text-sm text-secondary-foreground">
            All fees, durations, affiliations and salary bands are indicative — verify current
            pricing and terms directly with each provider.
          </p>
        </div>
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
            Corrections
          </p>
          <p className="mt-1.5 text-sm text-secondary-foreground">
            Spotted something wrong or out of date? Write to us at [email placeholder] and we will
            correct and re-date the page.
          </p>
        </div>
      </div>
    </section>
  );
}
