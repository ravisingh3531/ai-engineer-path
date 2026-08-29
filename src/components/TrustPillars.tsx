import { AUTHOR } from "@/content/eeat";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    letter: "E",
    title: "Experience",
    body: "Written by a developer who made this switch, then spent two years watching other developers make it — including the parts that went badly. Every section carries a first-person note about what actually happened, not a summary of other blogs.",
  },
  {
    letter: "E",
    title: "Expertise",
    body: AUTHOR.credential,
  },
  {
    letter: "A",
    title: "Authoritativeness",
    body: AUTHOR.basis,
  },
  {
    letter: "T",
    title: "Trustworthiness",
    body: `${AUTHOR.disclosure} Numbers are labelled as an author's planning band, a provider-published claim, or a value to verify — nothing is presented as a measured statistic when it is not.`,
  },
];

/** E-E-A-T credibility block shown directly under the introduction. */
export function TrustPillars() {
  return (
    <section aria-label="Why you can trust this guide" className="mt-14">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="font-[family-name:var(--font-display)] text-[1.4rem] font-bold tracking-[-0.02em] text-foreground">
            Why you can trust this guide
          </h2>
          <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">
            Experience · Expertise · Authoritativeness · Trust
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div className="surface-card h-full p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-xl grad-primary font-[family-name:var(--font-display)] text-lg font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
                >
                  {p.letter}
                </span>
                <p className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                  {p.title}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
