// Structured data for interactive page modules.

export type Phase = { num: string; title: string; weeks: string; body: string };

export const PHASES: Phase[] = [
  {
    num: "Phase 0",
    title: "Reposition",
    weeks: "Week 0",
    body: `**Goal:** stop learning blind. Decide what you are aiming at before you spend a single hour studying.

- Pick the target title from the Section 2 role spectrum — realistically **AI Engineer, GenAI Engineer, LLM Engineer or AI Full-Stack Engineer**.
- Open **ten live job descriptions** for that exact title in your city or remote band. Paste every requirement into one document and count repeats. That frequency list, not a syllabus, is your curriculum.
- Audit GitHub: delete tutorial forks, archive dead repos, fix your README on anything you would send a hiring manager.
- Set a weekly hour budget you can actually protect, and put it in your calendar as recurring blocks.
- Decide self-study versus structured (Section 8) — now, not in month four when momentum is gone.

**Time:** 4–6 hours, one weekend. **Done when:** you can write one sentence — "I am targeting *X* title at *Y* company type, and these are the eleven skills those JDs ask for."

**How people stall here:** they skip Phase 0 entirely because it does not feel like learning, then spend months on material no target JD ever asked for.`,
  },
  {
    num: "Phase 1",
    title: "Python and Your First LLM Feature",
    weeks: "Weeks 1\u20134",
    body: `**Goal:** reach working Python fluency and ship one real AI feature — fast — so everything after this is debugging a live system rather than reading about one.

- Python idioms a JS/Java developer misses: comprehensions, generators, decorators, context managers, \\\`dataclasses\\\`, type hints, \\\`asyncio\\\`.
- Environments and packaging: \\\`uv\\\` or \\\`poetry\\\`, virtual environments, dependency pinning.
- \\\`pandas\\\` and \\\`NumPy\\\` at a working level — load, clean, join, group, inspect. Not mastery.
- LLM API mechanics: tokens, context windows, temperature, system prompts, **structured outputs** (JSON schema), **function/tool calling**, streaming, retries, timeouts, cost per call.
- Ship it: pick an app you already maintain and add one feature — ticket triage, summarisation, receipt extraction with validation.

**Time:** 3–4 weeks. **Done when:** a stranger can use the feature end to end, and you can narrate what happens from request to first streamed token, including where the cost is incurred.

**How people stall here:** re-learning programming. You are not a beginner. Two weeks of Python plus a shipped feature beats a 40-hour "Python for everybody" course you have already outgrown.`,
  },
  {
    num: "Phase 2",
    title: "LLM Mechanics, Embeddings and RAG Foundations",
    weeks: "Weeks 4\u201310",
    body: `**Goal:** understand the primitives underneath the API, and build your first retrieval system. **ML fundamentals and maths intuition run in parallel here — never before.**

- Embeddings: what a vector actually represents, cosine similarity, dimensionality, model choice, multilingual behaviour.
- Chunking strategies — fixed, recursive, semantic, parent-document — and why the answer is corpus-dependent.
- Vector storage: \\\`pgvector\\\` first (it is Postgres; you already run Postgres), then a dedicated store only if you need one.
- Naive RAG end to end: ingest → chunk → embed → index → retrieve → generate **with citations**.
- In parallel, 3–4 hours a week: supervised learning, train/test split, overfitting, precision/recall/F1, the bias–variance trade-off, and just enough linear algebra and probability intuition to read a model card without flinching.
- Baseline discipline: build one \\\`scikit-learn\\\` classifier for a task you might otherwise throw an LLM at.

**Time:** 6 weeks. **Done when:** you can explain an embedding to a non-engineer in thirty seconds, and defend your chunk size with a reason that is not "the tutorial used 1000".

**How people stall here:** the maths-first detour. Three months of linear algebra with nothing built. Fundamentals must be pulled in by a system that is misbehaving, not pushed in by a syllabus.`,
  },
  {
    num: "Phase 3",
    title: "Evaluation and Advanced RAG",
    weeks: "Weeks 9\u201315",
    body: `**Goal:** this is the phase that separates hired candidates from demo builders. Almost nobody self-taught does it, and almost every interview probes it.

- Build a **golden set**: 50–100 real questions with expected answers or expected source chunks.
- Retrieval metrics: recall@k, precision@k, MRR, nDCG. Answer metrics: faithfulness, answer relevance, groundedness, citation accuracy.
- LLM-as-judge — and its failure modes. Human review on a sample, always.
- Advanced retrieval: hybrid search (BM25 + dense), re-ranking (cross-encoder), query rewriting, HyDE, metadata filtering, parent-document retrieval.
- A small dashboard that shows metrics per commit — even a Streamlit page or a table in your admin panel.

**Time:** 6 weeks. **Done when:** you can point at a chart and say "adding a re-ranker moved recall@5 from 0.61 to 0.78 on my golden set, at +180ms p95 and +12% cost."

**How people stall here:** they skip straight to agents because agents look impressive. Evaluation is unglamorous and it is the single most cited differentiator by the hiring managers consulted for this page.`,
  },
  {
    num: "Phase 4",
    title: "Agents, MCP and the Fine-Tuning Framework",
    weeks: "Weeks 14\u201322",
    body: `**Goal:** build systems that take actions, and learn to reason about model customisation instead of reaching for it.

- One framework **deeply** — LangGraph, or the Agents SDK, or CrewAI. One. Depth beats a résumé list of five.
- Agent anatomy: tool schemas, planning loops, memory, loop and step limits, retries, timeouts, cost ceilings, human-in-the-loop gates.
- **MCP**: write your own server exposing two or three real tools from your existing product. This is a strong differentiator in 2026 and plays directly to full stack skills — you are writing an API with a schema.
- Multi-agent: the supervisor pattern, handoffs, tracing every step.
- Fine-tuning as a *decision*: prompt → RAG → tool use → fine-tune, in that order. Then do one **LoRA/QLoRA** run on a small open-weight model and compare it honestly against the base model and a prompt-only baseline.

**Time:** 8 weeks. **Done when:** your agent fails safely under a hostile input, every run is traced, and you can articulate three situations where fine-tuning would be the wrong answer.

**How people stall here:** framework tourism — a month each in three frameworks, depth in none, and no trade-off story for any of them.`,
  },
  {
    num: "Phase 5",
    title: "Production Credibility",
    weeks: "Weeks 18\u201326",
    body: `**Goal:** make it look like software that runs in production, because that is precisely where your full stack background outclasses a bootcamp fresher.

- Containerised serving: FastAPI + Docker, async workers, streaming responses, queueing for long jobs.
- CI that runs **evaluations**, not just unit tests — block a merge on a quality regression.
- Monitoring for quality drift, latency percentiles, token and cost per request per feature, and per-tenant limits.
- Guardrails: input validation, prompt-injection defence, PII redaction, output schema enforcement, refusal handling.
- Caching (exact, semantic), batching, and model-tier routing for cost control.
- One cloud's AI layer end to end — AWS Bedrock, Azure AI Foundry, or Google Vertex AI. Pick the one your target employers use.

**Time:** 8 weeks. **Done when:** you can answer "what happens under load, and how do you know?" with numbers from your own dashboards.

**How people stall here:** stopping at localhost. An undeployed system is, to a hiring manager, an unverified claim.`,
  },
  {
    num: "Phase 6",
    title: "Evidence, Positioning and Applying",
    weeks: "Parallel from Week 10; intensive from Week 20",
    body: `**Goal:** convert everything above into things other people can assess in four minutes.

- A real README per project: problem, architecture diagram, stack, evaluation results, trade-offs, what you would do next.
- One public write-up per major project — blog, LinkedIn article, or a detailed repo doc. Writing is how a stranger verifies you understood it.
- A two-minute demo video per flagship project. Hiring managers watch these; they rarely clone repos.
- Rebuild your resume **against your ten target JDs**, not against your job history. Rewrite your LinkedIn headline and About.
- Referral outreach — warm paths convert several times better than cold portals.
- **15–25 quality applications a week**, tracked in a sheet with a rejection log you actually read monthly.
- Mock interviews: AI system design, project defence, the career-switch narrative.

**Time:** ongoing, 4–6 hours a week from Week 10, then 8–10 hours a week from Week 20. **Done when:** your conversion rate — applications to screens, screens to onsites — improves month over month.

**How people stall here:** this is where most failures happen. See the closing note below.`,
  },
];
