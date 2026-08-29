import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Markdown } from "@/components/Markdown";
import { Reveal } from "@/components/Reveal";
import { PhaseStepper } from "@/components/PhaseStepper";
import { ProjectLadder } from "@/components/ProjectLadder";
import { EditorsPick } from "@/components/EditorsPick";
import { DecisionQuiz } from "@/components/DecisionQuiz";
import { ActionChecklist } from "@/components/ActionChecklist";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AuthorTrust } from "@/components/AuthorTrust";
import { SiteFooter } from "@/components/SiteFooter";
import { intro, answer, s2, s3, s4, s5 } from "@/content/article";
import {
  s6,
  s6tail,
  s7,
  s7b,
  s8,
  s8alts,
  s9,
  s10,
  s11,
  s12intro,
  finalRecommendation,
} from "@/content/article-2";
import { FAQS } from "@/content/data";
import heroArt from "@/assets/hero-transition.jpg";

const TITLE = "How to Switch from Full Stack Developer to AI Engineer 2026";
const DESCRIPTION =
  "Can a full stack developer become an AI engineer? A 2026 roadmap: transferable skills, the gap, what to learn first, projects, courses and interview prep.";
const CANONICAL = "/how-to-switch-from-full-stack-developer-to-ai-engineer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: TITLE,
              description: DESCRIPTION,
              author: { "@type": "Person", name: "LogicMojo Editorial" },
              publisher: {
                "@type": "Organization",
                name: "LogicMojo",
                description:
                  "Advanced AI & ML training for working professionals, from classical ML to GenAI and Agentic AI.",
              },
              inLanguage: "en-IN",
              dateModified: "2026-01-01",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
                { "@type": "ListItem", position: 3, name: TITLE, item: CANONICAL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "ItemList",
              name: "Six-phase full stack to AI engineer roadmap",
              itemListElement: [
                "Phase 0 — Reposition",
                "Phase 1 — Python and your first LLM feature",
                "Phase 2 — LLM mechanics, embeddings and RAG foundations",
                "Phase 3 — Evaluation and advanced RAG",
                "Phase 4 — Agents, MCP and fine-tuning",
                "Phase 5 — Production credibility",
                "Phase 6 — Evidence, positioning and applying",
              ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
            },
          ],
        }),
      },
    ],
  }),
  component: Guide,
});

type Section = {
  id: string;
  num: string;
  badge: string;
  kicker: string;
  title: string;
  body: string;
  extra?: ReactNode;
  after?: string;
  afterExtra?: ReactNode;
};

/** Strips the leading markdown H2 so the section header can be rendered as design. */
const strip = (md: string) => md.replace(/^##\s.*\n+/, "");

const SECTIONS: Section[] = [
  {
    id: "reality",
    num: "02",
    badge: "📊",
    kicker: "Feasibility & role targeting",
    title: "Can a Full Stack Developer Really Become an AI Engineer?",
    body: strip(s2),
  },
  {
    id: "transferable",
    num: "03",
    badge: "✅",
    kicker: "What already counts",
    title: "The Skills You Already Have",
    body: strip(s3),
  },
  {
    id: "gap-map",
    num: "04",
    badge: "🧭",
    kicker: "Sized and prioritised",
    title: "The Skills You're Missing: The Gap Map",
    body: strip(s4),
  },
  {
    id: "learn-first",
    num: "05",
    badge: "🧩",
    kicker: "Sequencing",
    title: "What Should You Learn First?",
    body: strip(s5),
  },
  {
    id: "roadmap",
    num: "06",
    badge: "🗺️",
    kicker: "Six phases, not calendar weeks",
    title: "The Full Stack → AI Engineer Roadmap (2026)",
    body: strip(s6),
    extra: <PhaseStepper />,
    after: s6tail,
  },
  {
    id: "projects",
    num: "07",
    badge: "🛠️",
    kicker: "Evidence, not tutorials",
    title: "Projects That Get Full Stack Developers Hired",
    body: strip(s7),
    extra: <ProjectLadder />,
    after: s7b,
  },
  {
    id: "courses",
    num: "08",
    badge: "🎓",
    kicker: "Decision framework + seven programs",
    title: "Do You Need a Course? And Which One Fits a Developer?",
    body: strip(s8),
    extra: <EditorsPick />,
    after: s8alts,
  },
  {
    id: "interviews",
    num: "09",
    badge: "🎤",
    kicker: "Loops, question bank, defence drill",
    title: "How to Prepare for AI Engineer Interviews",
    body: strip(s9),
  },
  {
    id: "career",
    num: "10",
    badge: "📈",
    kicker: "Routes, titles, salary bands",
    title: "Your AI Engineer Career Plan",
    body: strip(s10),
  },
  {
    id: "mistakes",
    num: "11",
    badge: "🚩",
    kicker: "Twelve failure modes and their fixes",
    title: "Mistakes That End Transitions",
    body: strip(s11),
  },
  {
    id: "action-plan",
    num: "12",
    badge: "✅",
    kicker: "30 / 60 / 90 / 180 days",
    title: "Your Final Action Plan",
    body: strip(s12intro),
    extra: <ActionPlanExtras />,
  },
  {
    id: "faqs",
    num: "13",
    badge: "❓",
    kicker: "Twenty honest answers",
    title: "Frequently Asked Questions",
    body: "",
    extra: <FaqAccordion />,
  },
];

const TOC = [
  { id: "answer", label: "The Short Answer", num: "01" },
  ...SECTIONS.map((s) => ({ id: s.id, label: s.title, num: s.num })),
  { id: "author", label: "Author, Reviewers & Trust", num: "14" },
];

const STATS = [
  { value: "500+", label: "Indian AI-engineering JDs mapped against a full stack profile" },
  { value: "200+", label: "Tracked full stack → AI transitions, 2024–2026" },
  { value: "40+", label: "Hiring managers and AI leads interviewed" },
  { value: "6–10", label: "Months to job-ready at 10–15 hrs/week (author's band)" },
];


function Guide() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <BackgroundField />
      <Hero />

      <main className="relative mx-auto w-full max-w-[78rem] px-5 pb-32 sm:px-8">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14">
          <TableOfContents />

          <div className="min-w-0">
            <Reveal>
              <article className="prose-article">
                <Markdown source={intro} />
              </article>
            </Reveal>

            <Reveal>
              <AnswerBox />
            </Reveal>

            {SECTIONS.map((section, i) => (
              <SectionBlock key={section.id} section={section} index={i} />
            ))}

            <Reveal>
              <Continuation />
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* ---------------- background ---------------- */

function BackgroundField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-surface)] opacity-70" />
      <div
        className="orb left-[-12rem] top-[-8rem] h-[34rem] w-[34rem]"
        style={{ background: "color-mix(in oklab, var(--primary) 26%, transparent)" }}
      />
      <div
        className="orb orb-drift right-[-14rem] top-[28rem] h-[30rem] w-[30rem]"
        style={{ background: "color-mix(in oklab, var(--primary-glow) 30%, transparent)" }}
      />
      <div
        className="orb bottom-[-10rem] left-[20%] h-[26rem] w-[26rem]"
        style={{ background: "color-mix(in oklab, var(--primary-deep) 16%, transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--primary) 9%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--primary) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 62%)",
        }}
      />
    </div>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  return (
    <header className="relative mx-auto w-full max-w-[78rem] px-5 pt-16 pb-14 sm:px-8 sm:pt-24 lg:pb-20">
      <Reveal>
        <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wide text-secondary-foreground shadow-[var(--shadow-soft)]">
          <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
          2026 CAREER-TRANSITION GUIDE · INDIA
        </span>
      </Reveal>

      <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div>
          <Reveal delay={60}>
            <h1 className="font-[family-name:var(--font-display)] text-[2.35rem] font-bold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-[3.1rem] lg:text-[3.55rem]">
              How to Switch from Full Stack Developer to{" "}
              <span className="text-gradient">AI Engineer</span> in 2026
            </h1>
          </Reveal>

          <Reveal delay={130}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A complete roadmap — skills, gap map, learning order, projects, courses and
              interviews. Written for engineers who already ship production software, not for
              freshers starting at{" "}
              <em className="not-italic font-medium text-foreground">“learn Python basics”</em>.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#gap-map"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Score yourself on the gap map
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#learn-first"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-soft)] transition-colors duration-300 hover:border-primary/40"
              >
                Skip to the learning order
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
              <span>Sections 1–5 of 12</span>
              <span className="hairline hidden w-px sm:block" />
              <span>~40 min read</span>
              <span>Updated 2026</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[2.5rem] opacity-60 blur-3xl"
              style={{ background: "color-mix(in oklab, var(--primary) 20%, transparent)" }}
              aria-hidden
            />
            <img
              src={heroArt}
              alt="Illustration of structured code blocks flowing into a neural network of connected nodes"
              width={1600}
              height={1008}
              className="relative w-full rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-card)]"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.value + s.label} delay={i * 70}>
            <div className="surface-card h-full p-5">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-gradient">
                {s.value}
              </div>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </header>
  );
}

/* ---------------- table of contents ---------------- */

function TableOfContents() {
  return (
    <aside className="mb-12 lg:mb-0">
      <nav className="lg:sticky lg:top-10">
        <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          On this page
        </p>
        <ol className="space-y-1.5">
          {TOC.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm leading-snug text-secondary-foreground transition-all duration-300 hover:border-border hover:bg-card hover:shadow-[var(--shadow-soft)]"
              >
                <span className="mt-px font-[family-name:var(--font-display)] text-[0.7rem] font-bold tabular-nums text-primary/60 transition-colors group-hover:text-primary">
                  {item.num}
                </span>
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">
            Pending
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Sections 6–12 — roadmap, projects, course comparison, interviews, career plan,
            mistakes and the final action plan.
          </p>
        </div>
      </nav>
    </aside>
  );
}

/* ---------------- answer box ---------------- */

function AnswerBox() {
  return (
    <section id="answer" className="scroll-mt-28 mt-16">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card shadow-[var(--shadow-card)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-primary)]" />
        <div
          className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--primary) 14%, transparent)" }}
          aria-hidden
        />
        <div className="relative p-6 sm:p-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent-foreground">
            📌 Direct answer
          </span>
          <Markdown source={answer} className="mt-5" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- section ---------------- */

function SectionBlock({ section, index }: { section: Section; index: number }) {
  return (
    <section id={section.id} className="scroll-mt-28 pt-20">
      <Reveal>
        <div className="hairline mb-10" />
        <div className="flex items-start gap-5">
          <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[var(--gradient-primary)] text-2xl shadow-[var(--shadow-glow)]">
            <span aria-hidden>{section.badge}</span>
            <span className="absolute -bottom-2 -right-2 rounded-lg border border-border bg-card px-1.5 py-0.5 font-[family-name:var(--font-display)] text-[0.62rem] font-bold tabular-nums text-primary">
              {section.num}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
              {section.kicker}
            </p>
            <h2 className="mt-1.5 font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-tight tracking-[-0.03em] text-foreground sm:text-[2.15rem]">
              {section.title}
            </h2>
          </div>
        </div>
      </Reveal>

      {section.body ? (
        <Reveal delay={80}>
          <div className="mt-8">
            <Markdown source={section.body} />
          </div>
        </Reveal>
      ) : null}

      {section.extra ? <div className="mt-2">{section.extra}</div> : null}

      {section.after ? (
        <Reveal>
          <div className="mt-10">
            <Markdown source={section.after} />
          </div>
        </Reveal>
      ) : null}

      {index === SECTIONS.length - 1 ? null : <div className="pt-4" />}
    </section>
  );
}

/* ---------------- action plan extras ---------------- */

function ActionPlanExtras() {
  return (
    <div className="mt-4">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em] text-foreground">
        The 30 / 60 / 90 / 180-Day Checklist
      </h3>
      <p className="mt-2 text-muted-foreground">
        Tick items as you go — the state is yours for this session. Each block ends in a milestone that is
        either true or not true.
      </p>
      <ActionChecklist />

      <h3 className="mt-16 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em] text-foreground">
        Interactive Decision Tool — Answer These Questions
      </h3>
      <p className="mt-2 text-muted-foreground">
        Six answers map you to one of the profiles below, with a primary path, an honest runner-up and a
        realistic timeline band.
      </p>
      <DecisionQuiz />

      <h3 className="mt-16 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.02em] text-foreground">
        The Final Recommendation
      </h3>
      <Markdown source={finalRecommendation} className="mt-4" />

      <a
        href="#logicmojo-contact"
        className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        See the LogicMojo AI &amp; ML Course curriculum and upcoming batches
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

