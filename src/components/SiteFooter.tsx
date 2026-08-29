const QUICK_LINKS = [
  "Home",
  "AI & ML Course",
  "Curriculum",
  "Batch Details",
  "Success Stories",
  "Blog",
  "Contact",
];

const SOCIALS = ["LinkedIn", "YouTube", "Instagram", "Twitter/X"];

export function SiteFooter() {
  return (
    <footer
      id="logicmojo-contact"
      className="relative scroll-mt-24 border-t border-border bg-card/70 backdrop-blur-sm"
    >
      <div className="mx-auto w-full max-w-[78rem] px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em] text-foreground">
              About LogicMojo
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              LogicMojo — advanced AI &amp; ML training for working professionals, from classical ML to GenAI
              and Agentic AI, with dedicated career transition support.
            </p>
            <div className="mt-5">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">Contact</p>
              <p className="mt-2 text-sm text-secondary-foreground">
                📧 [email placeholder] | 📞 [phone placeholder] | 📍 [address placeholder]
              </p>
            </div>
          </div>

          <nav aria-label="Quick links">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#logicmojo-contact"
                    className="text-sm text-secondary-foreground transition-colors hover:text-primary"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-primary">Follow Us</p>
            <ul className="mt-3 space-y-2">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <a
                    href="#logicmojo-contact"
                    className="text-sm text-secondary-foreground transition-colors hover:text-primary"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-9" />

        <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
          All salary figures are the author's planning bands informed by self-reported aggregates and are not
          published averages. Timelines are estimates from tracked transitions, not promises. Course fees,
          durations, formats and affiliations are indicative — verify current details with each provider. No
          course guarantees a job — including any mentioned here.
        </p>
        <p className="mt-5 text-xs font-medium text-secondary-foreground">
          © 2026 LogicMojo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
