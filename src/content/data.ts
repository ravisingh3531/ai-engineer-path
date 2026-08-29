// Structured data powering the interactive modules on the page.

export type Project = {
  n: number;
  title: string;
  stack: string;
  proves: string;
  question: string;
  difficulty: "Beginner" | "Intermediate" | "Intermediate+" | "Advanced" | "Expert";
  time: string;
};

export const PROJECTS: Project[] = [
  {
    n: 1,
    title: "LLM feature inside an existing app",
    stack: "Your app + LLM API + JSON schema validation",
    proves: "You can ship AI into real software",
    question: "Have you put an LLM in front of real users?",
    difficulty: "Beginner",
    time: "1–2 weeks",
  },
  {
    n: 2,
    title: "Streaming chat with tool calling, persistence and auth",
    stack: "Next.js/Django + SSE + Postgres + your auth",
    proves: "Production plumbing around a model",
    question: "How do you stream and persist safely?",
    difficulty: "Beginner",
    time: "1–2 weeks",
  },
  {
    n: 3,
    title: "Semantic + hybrid search over your own data",
    stack: "Postgres + pgvector + BM25",
    proves: "You understand embeddings and ranking",
    question: "Why hybrid rather than pure vector?",
    difficulty: "Intermediate",
    time: "2 weeks",
  },
  {
    n: 4,
    title: "Document Q&A RAG with citations + 50-item eval set",
    stack: "Ingestion pipeline + pgvector + eval harness",
    proves: "End-to-end retrieval with measurement",
    question: "How do you know your RAG is good?",
    difficulty: "Intermediate",
    time: "2–3 weeks",
  },
  {
    n: 5,
    title: "Advanced RAG with re-ranking and an eval dashboard",
    stack: "Cross-encoder + hybrid retrieval + dashboard",
    proves: "Retrieval engineering, not retrieval usage",
    question: "Walk me through a retrieval quality fix.",
    difficulty: "Intermediate+",
    time: "3 weeks",
  },
  {
    n: 6,
    title: "Tool-using agent with guardrails and your own MCP server",
    stack: "Agent framework + MCP server + your product APIs",
    proves: "Safe autonomy and API design",
    question: "How does your agent fail?",
    difficulty: "Advanced",
    time: "3 weeks",
  },
  {
    n: 7,
    title: "Multi-agent supervisor workflow with tracing",
    stack: "LangGraph-style orchestration + human-in-the-loop",
    proves: "Orchestration and observability",
    question: "When is multi-agent worth the cost?",
    difficulty: "Advanced",
    time: "2–3 weeks",
  },
  {
    n: 8,
    title: "Fine-tuned small model vs base vs classical baseline",
    stack: "LoRA/QLoRA + FastAPI + Docker",
    proves: "Judgement about model customisation",
    question: "When would you not fine-tune?",
    difficulty: "Advanced",
    time: "3 weeks",
  },
  {
    n: 9,
    title: "Capstone — a monitored domain system",
    stack: "Retrieval + agents + eval in CI + deployment + monitoring",
    proves: "You can own an AI system in production",
    question: "Tell me about a system you own.",
    difficulty: "Expert",
    time: "4–6 weeks",
  },
];

export type GapRow = {
  area: string;
  covered: "Yes" | "Partial" | "[verify current syllabus]";
  phase: string;
};

export const GAP_COVERAGE: GapRow[] = [
  { area: "Python depth for engineers", covered: "Yes", phase: "Phase 1" },
  { area: "pandas / NumPy working level", covered: "Yes", phase: "Phase 1" },
  { area: "LLM API mechanics & structured outputs", covered: "Yes", phase: "Phase 1" },
  { area: "ML fundamentals (supervised learning, metrics)", covered: "Yes", phase: "Phase 2" },
  { area: "Maths intuition (linear algebra, probability)", covered: "Yes", phase: "Phase 2" },
  { area: "Embeddings & vector search", covered: "Yes", phase: "Phase 2" },
  { area: "Chunking & ingestion pipelines", covered: "Partial", phase: "Phase 2" },
  { area: "Deep learning fundamentals", covered: "Yes", phase: "Phase 2" },
  { area: "RAG systems end to end", covered: "Yes", phase: "Phases 2–3" },
  { area: "Evaluation & golden sets", covered: "Partial", phase: "Phase 3" },
  { area: "Advanced retrieval (hybrid, re-ranking)", covered: "Partial", phase: "Phase 3" },
  { area: "Agents & orchestration frameworks", covered: "Yes", phase: "Phase 4" },
  { area: "MCP (Model Context Protocol)", covered: "[verify current syllabus]", phase: "Phase 4" },
  { area: "Fine-tuning (LoRA/QLoRA) decision framework", covered: "Partial", phase: "Phase 4" },
  { area: "Deployment, serving & MLOps for LLMs", covered: "Partial", phase: "Phase 5" },
  {
    area: "Guardrails, monitoring & cost control",
    covered: "[verify current syllabus]",
    phase: "Phase 5",
  },
];

export const LIMITATIONS: { title: string; body: string }[] = [
  {
    title: "No university credential",
    body: "You finish with a program certificate, not a degree or a university-affiliated PG certificate. If an HR gate, an internal promotion policy or a visa case requires an accredited credential, upGrad or Great Learning serve you better.",
  },
  {
    title: "Smaller brand and alumni network",
    body: "Scaler, upGrad and Great Learning have far larger alumni bases and stronger recruiter name recognition. If you are counting on alumni referrals as a primary channel, that gap is real and it matters.",
  },
  {
    title: "Smaller hiring-partner funnel",
    body: "There is no premium placement drive with dozens of partner companies queuing up. Career support here is preparation and positioning — you still run your own application cadence, exactly as Phase 6 describes.",
  },
  {
    title: "No job guarantee — by design",
    body: "Guarantee contracts survive on eligibility conditions (attendance, assessments, minimum weekly applications) that shift the failure back onto the learner. Declining to offer one is more honest, but it means you get no contractual protection. If you specifically want that protection, buy it elsewhere with your eyes open about the conditions.",
  },
  {
    title: "Cohort-based, so it demands consistency",
    body: "Live batches only help if you attend them. Miss three weeks during a release crunch and you are watching recordings at double speed, which is the expensive version of self-study.",
  },
  {
    title: "AI/ML-focused, not a DSA and system-design bootcamp",
    body: "If your target is a product-company SDE loop where DSA rounds still gate everything, this program does not condition you for that. Scaler does.",
  },
  {
    title: "Not a research pathway",
    body: "Nothing here prepares you for Applied Scientist or Research Engineer roles, which need postgraduate study and publications.",
  },
  {
    title: "Outcomes depend on the learner",
    body: "Completion is not employment. The program supplies sequencing, review and practice; it cannot supply the hours, the write-ups or the applications.",
  },
];

export type ChecklistBlock = { day: string; label: string; items: string[]; milestone: string };

export const CHECKLIST: ChecklistBlock[] = [
  {
    day: "Day 30",
    label: "Reposition and ship",
    items: [
      "Pick your target title and extract requirements from ten live JDs",
      "Clean GitHub: remove forks, fix READMEs, purge any secrets",
      "Reach working Python fluency — idioms, typing, async, environments",
      "Learn LLM API mechanics: tokens, structured outputs, tool calling, streaming",
      "Ship one LLM feature inside an app you already own",
      "Write a 50-item evaluation set for that feature",
    ],
    milestone: "One deployed LLM feature with an evaluation set.",
  },
  {
    day: "Day 60",
    label: "Retrieval, measured",
    items: [
      "Understand embeddings well enough to explain them in thirty seconds",
      "Build an ingestion pipeline with retries and a dead-letter queue",
      "Stand up pgvector and index your own corpus",
      "Ship document Q&A with inline citations",
      "Build a golden set and measure recall@k and faithfulness",
      "Train one scikit-learn baseline for a task you would have thrown an LLM at",
    ],
    milestone: "Document Q&A RAG with citations, measured against a golden set.",
  },
  {
    day: "Day 90",
    label: "Advance and position",
    items: [
      "Add hybrid retrieval, re-ranking and query rewriting; publish before/after numbers",
      "Or: build a tool-using agent with guardrails and your own MCP server",
      "Add tracing and a cost-per-request view",
      "Rewrite your resume against your ten target JDs",
      "Rewrite your LinkedIn headline and About section",
      "Publish your first project write-up and start weekly applications",
    ],
    milestone: "Advanced RAG or a working agent with an MCP server, plus a rewritten resume.",
  },
  {
    day: "Day 180",
    label: "Production and conversion",
    items: [
      "Containerise and deploy a capstone with CI-run evaluations",
      "Add monitoring for quality drift, latency percentiles and cost",
      "Implement guardrails: input validation, injection defence, output schemas",
      "Ship one cloud AI-layer integration (Bedrock, Azure AI or Vertex)",
      "Publish three write-ups and two demo videos",
      "Hold a 15–25 applications-per-week cadence with a reviewed rejection log",
      "Run at least four mock interviews: system design and project defence",
    ],
    milestone: "A deployed, monitored capstone, three write-ups and a live application cadence.",
  },
];

export type QuizQuestion = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
};

export const QUIZ: QuizQuestion[] = [
  {
    id: "profile",
    question: "Where does your full stack profile sit today?",
    options: [
      { label: "Backend-heavy", value: "backend" },
      { label: "Balanced", value: "balanced" },
      { label: "Frontend-heavy", value: "frontend" },
    ],
  },
  {
    id: "years",
    question: "How many years have you been shipping software?",
    options: [
      { label: "0–2 years", value: "junior" },
      { label: "3–7 years", value: "mid" },
      { label: "8+ years / lead", value: "senior" },
    ],
  },
  {
    id: "hours",
    question: "How many hours a week can you genuinely protect?",
    options: [
      { label: "Under 8", value: "low" },
      { label: "10–15", value: "mid" },
      { label: "20+", value: "high" },
    ],
  },
  {
    id: "credential",
    question: "Do you need a credential for a specific reason — promotion, HR gate or visa?",
    options: [
      { label: "Yes, it is required", value: "yes" },
      { label: "No, evidence is enough", value: "no" },
    ],
  },
  {
    id: "budget",
    question: "What is your budget band for structured learning?",
    options: [
      { label: "Near zero", value: "zero" },
      { label: "Mid-tier", value: "mid" },
      { label: "Premium", value: "premium" },
    ],
  },
  {
    id: "context",
    question: "What best describes your current employer?",
    options: [
      { label: "Product company or startup", value: "product" },
      { label: "IT services / consulting", value: "services" },
      { label: "Freelance or agency", value: "freelance" },
    ],
  },
];

export type QuizResult = {
  name: string;
  path: string;
  runnerUp: string;
  reason: string;
  band: string;
};

export const RESULTS: Record<string, QuizResult> = {
  accelerator: {
    name: "The Backend-Heavy Accelerator",
    path: "LogicMojo AI & ML Course (compress Phases 1 and 5)",
    runnerUp: "DeepLearning.AI + Coursera stack",
    reason:
      "Your APIs, databases and deployment skills already cover Phases 1 and 5, so you need sequencing and depth in evaluation and agents — not another engineering course.",
    band: "5–8 months to job-ready at 10–15 hrs/week (author's estimate)",
  },
  rebuilder: {
    name: "The Frontend-First Rebuilder",
    path: "LogicMojo AI & ML Course, after 4–6 weeks of self-directed backend and data work",
    runnerUp: "Udacity Nanodegree",
    reason:
      "Add an API layer, real SQL and deployment before Phase 2, or the interview will probe exactly the layer you skipped — then let structure carry you through evaluation and agents.",
    band: "9–12 months to job-ready (author's estimate)",
  },
  internal: {
    name: "The Service-Company Internal Mover",
    path: "LogicMojo AI & ML Course + an internal AI-practice rotation in parallel",
    runnerUp: "Scaler Academy if you are targeting a product-company exit",
    reason:
      "The rotation gives you client experience with no portable artefacts; the structured path gives you the externally visible evidence that makes the move permanent.",
    band: "6–10 months to job-ready (author's estimate)",
  },
  freelancer: {
    name: "The Freelancer-to-Product Switcher",
    path: "LogicMojo AI & ML Course, with two projects anchored in a client domain",
    runnerUp: "Udacity Nanodegree",
    reason:
      "You ship fast but your evidence is scattered across private client work — you need deployed, public, measured systems and a coherent narrative.",
    band: "6–10 months to job-ready (author's estimate)",
  },
  lead: {
    name: "The Senior Lead Becoming an AI Lead",
    path: "LogicMojo AI & ML Course, weighted to Phases 3–5",
    runnerUp: "upGrad or Great Learning if a credential unlocks the promotion",
    reason:
      "At your level the bar is owning AI delivery — evaluation in CI, cost control, guardrails — not writing your first RAG demo.",
    band: "5–9 months to job-ready (author's estimate)",
  },
  credential: {
    name: "The Credential-Gated Candidate",
    path: "upGrad (IIIT-B) or Great Learning (Great Lakes / UT Austin)",
    runnerUp: "LogicMojo AI & ML Course for the applied GenAI depth",
    reason:
      "When an HR gate, a promotion policy or a visa case needs an accredited certificate, buy the credential first — no applied program substitutes for it.",
    band: "9–14 months to job-ready (author's estimate)",
  },
  selfStarter: {
    name: "The Budget Self-Starter",
    path: "DeepLearning.AI + Coursera, plus fast.ai, run against the Section 6 roadmap",
    runnerUp: "fast.ai alone if the budget is strictly zero",
    reason:
      "Teaching quality per rupee is unbeatable here — what you must supply yourself is accountability, code review and the Phase 6 applying discipline.",
    band: "8–14 months to job-ready (author's estimate)",
  },
  placement: {
    name: "The Product-Company Loop Chaser",
    path: "Scaler Academy",
    runnerUp: "LogicMojo AI & ML Course for GenAI depth",
    reason:
      "If product-company DSA and system-design loops are the target, placement infrastructure and interview conditioning beat curriculum depth.",
    band: "9–15 months to job-ready (author's estimate)",
  },
};

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How do I switch from full stack developer to AI engineer?",
    a: "Work backwards from job descriptions rather than forwards from a syllabus. Pick a target title (AI Engineer, GenAI Engineer, LLM Engineer or AI Full-Stack Engineer), extract the requirements from ten live JDs, then close the gap in the order set out in Section 6: Python depth and one shipped LLM feature, embeddings and RAG with ML fundamentals in parallel, evaluation and advanced retrieval, agents and MCP, then production concerns — deployment, monitoring, guardrails and cost. From month three, run the evidence track in parallel: write-ups, a rebuilt resume and a steady weekly application cadence. Most of your existing engineering transfers directly; what you are adding is a specific, sized layer on top of it.",
  },
  {
    q: "Can a full stack developer become an AI engineer without a maths degree?",
    a: "Yes, for applied AI engineering roles. The 2026 AI Engineer job is production software engineering around new primitives — LLM APIs, retrieval, agents, evaluation and serving — and the maths you need is intuition rather than derivation: what a vector represents, why cosine similarity works, what precision and recall trade off, what overfitting means. That is a few hours a week over a couple of months, learned alongside building. A maths or research background genuinely matters for Applied Scientist and Research Engineer roles, and helps for ML Engineer roles involving training. Those are different career paths, and Section 10 marks them as such.",
  },
  {
    q: "How long does it take a full stack developer to become an AI engineer?",
    a: "For a working mid-level developer studying 10–15 hours a week, the author's planning band from tracked transitions is roughly 6–10 months to job-ready and 8–14 months to an offer. Backend-heavy developers often compress this to 5–8 months because Phases 1 and 5 are largely already covered. Frontend-heavy developers should plan for 9–12 months, adding four to six weeks of backend and data work up front. These are estimates from observed transitions, not promises, and the largest source of variance is not intelligence or background — it is whether the applying and writing work in Phase 6 actually happens.",
  },
  {
    q: "Do I need to learn Python if I already know JavaScript or Java?",
    a: "Yes, but not from scratch — expect two to four weeks, not four months. The AI ecosystem is Python-first: the libraries, the examples, the notebooks and most production inference code. You are learning idioms rather than programming: comprehensions, generators, decorators, context managers, dataclasses, type hints and asyncio, plus working-level pandas and NumPy. TypeScript is genuinely viable for LLM application layers, and an AI Full-Stack Engineer can go a long way on it, but you will still read Python daily. Do not pay for a course that spends its first quarter teaching you what a variable is.",
  },
  {
    q: "Should I learn machine learning before generative AI?",
    a: "No — that ordering is the single most common stall. Start with LLM APIs and ship something, then pull ML fundamentals in alongside from Phase 2, driven by problems you are actually hitting. You need enough ML to know when a classifier beats a prompt, to read a model card, and to talk about precision, recall and overfitting without hand-waving. You do not need to complete a classical ML curriculum before touching GenAI. The reverse order — GenAI first, fundamentals in parallel — keeps momentum and produces evidence far earlier.",
  },
  {
    q: "Is deep learning necessary for an applied AI engineer role?",
    a: "At a conceptual level, yes; at an implementation level, rarely. You should understand what a transformer does, what attention is for, what pre-training versus fine-tuning means, and why context length is expensive. You will almost never train a network from scratch in an applied AI engineering role. One LoRA or QLoRA fine-tuning run on a small open-weight model, compared honestly against a prompt-only baseline, gives you both the practical experience and the interview answer. Deeper deep learning matters for ML Engineer and research-flavoured roles.",
  },
  {
    q: "What is the difference between an AI Engineer, an ML Engineer and a Data Scientist?",
    a: "An AI Engineer builds applications on top of existing models — retrieval, agents, evaluation, serving and cost control — and is closest to your current work. An ML Engineer builds and operates models: training pipelines, feature stores, distributed training, model monitoring, usually with more statistics and often a postgraduate background. A Data Scientist answers business questions with statistics, experimentation and analysis; shipping systems is secondary. For a full stack developer, AI Engineer and its variants are the natural target, ML Engineer is a longer road, and Data Scientist is a different craft rather than a promotion path.",
  },
  {
    q: "Will I take a pay cut when switching to AI?",
    a: "Often the first move is lateral or near-lateral, and the re-pricing happens at the next move once you have twelve to eighteen months of AI ownership on your résumé. A modest cut can be rational when the team has genuine depth — evaluations in CI, systems serving real users, someone who owns the golden set — and you get end-to-end ownership. It is not rational for a POC team with nothing deployed, for a title change without scope, or for a cut you cannot absorb for eighteen months. Section 10 gives planning bands, all labelled as the author's estimates and all worth verifying against current market data.",
  },
  {
    q: "Can I get an AI job with only LLM API projects?",
    a: "Sometimes you will get the interview; you will rarely get the offer. API-wrapper portfolios read well on a resume and collapse in round two, when someone asks how you measured retrieval quality or why your chunks are irrelevant. The differentiator is not more API calls — it is retrieval you have engineered, an evaluation set you built, a deployment you operate, and a cost figure you know. Add a golden set and a deployed system to two existing projects and your conversion rate changes more than adding three more wrappers ever will.",
  },
  {
    q: "Which projects should I build first?",
    a: "Follow the ladder in Section 7. Start with an LLM feature inside an app you already own, because it is fast, it is real, and it uses your existing stack. Then streaming chat with tool calling and persistence, then hybrid search over your own data with pgvector, then document Q&A RAG with citations and a 50-item evaluation set. Those four take roughly eight weeks and already put you ahead of most self-taught candidates. Agents, MCP, fine-tuning and the monitored capstone come after. Two of your projects should live in a real domain — BFSI, healthcare, logistics, e-commerce or developer tools.",
  },
  {
    q: "Do I need a course, or can I self-study?",
    a: "You can absolutely self-study, and Section 8 gives a four-question test to decide. If you finished a substantial unrequested side project in the last six months, can protect ten-plus hours a week, have a senior reviewer available and understand how AI interview loops differ, self-study is the rational choice — the material is excellent and nearly free. If two or more of those are missing, structure usually pays for itself, because most working professionals stall in Phases 3 to 6 rather than Phases 1 to 2. Name your gap first: knowledge, evidence, accountability or access.",
  },
  {
    q: "Why is LogicMojo's AI & ML Course recommended for this transition?",
    a: "Because its progression — classical ML fundamentals through GenAI to Agentic AI, delivered through hands-on projects with career transition support — maps closely to Phases 2 through 6 of this roadmap, at a mid-tier price with an IST-friendly live format for working professionals. That recommendation comes with disclosed limitations: no university credential, a smaller brand and alumni network than Scaler, upGrad or Great Learning, a smaller hiring-partner funnel, and no job guarantee. LogicMojo publishes this page, which is stated openly in the author section. For credential-gated readers, premium placement infrastructure or a near-zero budget, Section 8 names the better alternative outright.",
  },
  {
    q: "Is an IIT or university-affiliated certificate worth it for a developer?",
    a: "It is worth it when something specific requires it: an HR gate, an internal promotion policy, a visa or immigration case, or a family or employer expectation you have decided to satisfy. It is worth much less when your goal is an applied AI engineering offer at a product company or AI-native startup, where a deployed, evaluated portfolio outweighs a certificate almost every time. Interviewers in that segment ask what you built and how you measured it. Buy a credential deliberately for a named reason, not as general insurance.",
  },
  {
    q: "Which AI skills are most in demand in India in 2026?",
    a: "Across the job descriptions reviewed for this guide, the most consistently requested cluster is: Python, LLM API integration with structured outputs, RAG (embeddings, vector search, chunking, hybrid retrieval), evaluation of LLM systems, agent frameworks and tool use, at least one cloud AI platform (Bedrock, Azure AI or Vertex), and deployment with cost and latency awareness. MCP appears increasingly in 2026 postings and is still rare enough in candidates to be a differentiator. Requirements vary by employer type, so verify against ten current JDs for your specific target title rather than trusting any general list, including this one.",
  },
  {
    q: "Is it too late to switch to AI at 30 or 35?",
    a: "No. Mid-career developers frequently transition faster than juniors, because production experience, system design judgement and domain knowledge are exactly what applied AI teams are short of. What changes with seniority is the target: at eight-plus years you should aim at roles where you own AI delivery — evaluation, cost, reliability, mentoring — rather than competing for entry-level build work. Age is not the constraint; available weekly hours and the discipline to keep applying through a three-to-five-month rejection stretch are the real ones.",
  },
  {
    q: "Can a frontend-heavy developer make this switch?",
    a: "Yes, with an honest detour. Add four to six weeks of backend and data work before the RAG phase: a real API layer you wrote yourself, Postgres and SQL beyond simple selects, auth, background jobs and deployment. Skipping that layer is visible within minutes in an AI system-design round. In exchange, you carry an advantage others do not: AI product surfaces — streaming interfaces, citation rendering, evaluation dashboards, human-in-the-loop review tooling — are genuinely difficult for backend-only candidates, and AI Full-Stack Engineer and AI Product Engineer roles want exactly that combination.",
  },
  {
    q: "Should I move internally or apply externally?",
    a: "Do both, in a specific order. Internal moves are lower risk and give you production AI experience with real users, which is worth more in interviews than any side project — but they often arrive with no title change, no band change and no portable artefacts. External moves re-price you properly but demand a portfolio and three to five months of consistent applying. The hybrid route works best for most readers: ship an AI feature inside your current product with an evaluation attached, then use that production experience as the anchor of external applications.",
  },
  {
    q: "Are AI engineer roles saturated in India in 2026?",
    a: "Entry-level and demo-portfolio candidates face heavy competition; engineers who can deploy, measure and operate AI systems do not. The saturation is at the shallow end — thousands of candidates with three wrapper apps and no evaluation story. Hiring managers consulted for this page consistently reported difficulty filling roles that require production judgement: retrieval quality, cost control, guardrails, reliability. That is the gap your full stack background is closest to filling. Treat competition as a reason to build evidence others skip, rather than a reason to skip the transition.",
  },
  {
    q: "Will AI itself replace AI engineers?",
    a: "Coding assistants are already absorbing routine implementation work, and that pressure is real for every software role, including this one. What they do not absorb is deciding what to build, choosing between retrieval and fine-tuning, defining what 'good' means for a system, building the golden set, owning cost and latency budgets, and being accountable when the system is wrong in front of a customer. Those are judgement and ownership tasks. The durable version of this role is the engineer who designs, measures and operates AI systems — not the one who types the glue code fastest.",
  },
  {
    q: "What should I put on my resume to get AI engineer interviews?",
    a: "Lead with outcomes and numbers, not tools. Each AI project line should name the system, the stack, a measured result and a cost or latency figure: 'RAG assistant over 40k support documents (Next.js + FastAPI + pgvector); hybrid retrieval with re-ranking raised recall@5 from 0.61 to 0.78 on a 60-question golden set at ₹0.42 per query.' Keep your production engineering history — scale, ownership, on-call — because it is a differentiator, not baggage. Mirror the exact vocabulary of your ten target JDs inside real accomplishment sentences, and link a portfolio page with deployed demos and write-ups.",
  },
];

export type Reviewer = { role: string; bio: string };

export const REVIEWERS: Reviewer[] = [
  {
    role: "AI/GenAI Engineer, Indian product company (ex-full stack)",
    bio: "Reviewed the roadmap sequencing and the transferable-skills mapping against their own transition from a Node and React background into an applied GenAI role, and flagged where the timeline bands were optimistic.",
  },
  {
    role: "Technical hiring manager, AI roles",
    bio: "Reviewed the interview loop table, the question bank and the red-flags list, confirming which rounds most often eliminate ex-full-stack candidates and where their production experience genuinely counts in favour.",
  },
  {
    role: "MLOps / AI platform engineer",
    bio: "Reviewed Phase 5 and the production sections — serving, evaluations in CI, monitoring for quality drift, guardrails and cost control — and tightened the claims about what a portfolio project can realistically demonstrate.",
  },
  {
    role: "AI educator and curriculum designer",
    bio: "Reviewed the learning-order argument and the course evaluation criteria, checking that classical ML content is scoped to applied needs rather than reproduced wholesale from a data-science syllabus.",
  },
  {
    role: "LogicMojo alumnus, full stack background, now in an AI role",
    bio: "Reviewed the course section and the final action plan from the learner's side, including where a cohort format helped and where consistency was the binding constraint during a demanding delivery quarter.",
  },
];
