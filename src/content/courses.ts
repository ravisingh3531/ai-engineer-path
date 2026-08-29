/**
 * Course review data and prose for the "10 AI/ML courses reviewed for Full Stack
 * Developers" block. Every rating is the author's editorial score against the
 * published gap map, not a measured outcome. Nothing here asserts placement
 * numbers, salary outcomes or alumni counts that the reader cannot verify at
 * source, and every claim that depends on a live syllabus, batch or price is
 * marked [verify current].
 */

export type Verdict = "Best overall" | "Strong" | "Adequate" | "Situational" | "Skip for this goal";

export type Course = {
  rank: number;
  name: string;
  provider: string;
  url?: string;
  tagline: string;
  /** Author's editorial score out of 5, explained in the methodology block. */
  score: number;
  verdict: Verdict;
  format: string;
  duration: string;
  price: string;
  prerequisites: string;
  pythonMl: string;
  genAiDepth: string;
  projects: string;
  deployment: string;
  mentoring: string;
  interviewPrep: string;
  resumeSupport: string;
  hiringPartners: string;
  placement: string;
  alumniEvidence: string;
  bestFor: string;
  notFor: string;
  roles: string[];
  strengths: string[];
  limitations: string[];
};

/** Roles the reviews are scored against. */
export const TARGET_ROLES = [
  "AI Engineer",
  "ML Engineer",
  "GenAI Engineer",
  "LLM Engineer",
  "AI Application Developer",
];

export const COURSES: Course[] = [
  {
    rank: 1,
    name: "LogicMojo AI & ML Course",
    provider: "LogicMojo",
    url: "https://logicmojo.com/success-story",
    tagline:
      "Placement-first live cohort built around working developers — the closest fit to a Full Stack → AI Engineer transition.",
    score: 4.6,
    verdict: "Best overall",
    format: "Live online cohort, weekend and evening batches [verify current batch schedule]",
    duration: "Approximately 7–9 months [verify current]",
    price: "Mid-tier; EMI options advertised [verify current pricing]",
    prerequisites:
      "Working programming experience expected. A full stack developer who is fluent in one language and comfortable with APIs, databases and deployment starts at the right level — the course does not spend months on 'what is a variable'.",
    pythonMl:
      "Python for engineers, NumPy/pandas, statistics, classical ML (regression, trees, ensembles), model evaluation, then deep learning fundamentals — CNNs, RNNs, transformers [verify current syllabus].",
    genAiDepth:
      "Dedicated GenAI track: LLM fundamentals, prompt and context engineering, embeddings, vector databases, RAG end to end, LangChain, fine-tuning (LoRA/QLoRA) and AI agents [verify current syllabus]. MCP and evaluation engineering coverage vary by cohort — ask directly.",
    projects:
      "Individually designed capstones rather than one shared class project, which matters because a shared project is worthless as portfolio proof [verify current project list].",
    deployment:
      "Model serving, containerisation, cloud deployment and MLOps basics — CI, monitoring and versioning [verify current syllabus]. This is the part most GenAI-only courses skip and the part hiring managers probe.",
    mentoring: "Live instruction with mentor access and doubt-clearing sessions [verify current].",
    interviewPrep:
      "Structured interview preparation: DSA conditioning, ML and GenAI question banks, system design for AI systems, and mock interviews [verify current].",
    resumeSupport: "Resume, LinkedIn and profile positioning support as part of career services [verify current].",
    hiringPartners: "Hiring-partner network advertised [verify the current list and how referrals actually work].",
    placement:
      "Placement-first positioning with structured job assistance. Treat 'assistance' as referrals plus interview readiness — no course can guarantee a job, and you should refuse any that says it can.",
    alumniEvidence:
      "Published success stories at logicmojo.com/success-story. Verify them yourself: open profiles, check the before/after title and the transition date, and message two or three alumni on LinkedIn.",
    bestFor:
      "A working full stack developer, roughly 2–8 years in, targeting AI Engineer, GenAI Engineer or AI Application Developer roles in India who wants structure, mentorship and interview conditioning rather than another video library.",
    notFor:
      "Readers who need an accredited university credential for an HR gate or visa, readers on a near-zero budget, and research aspirants targeting Applied Scientist roles.",
    roles: ["AI Engineer", "GenAI Engineer", "LLM Engineer", "AI Application Developer", "ML Engineer"],
    strengths: [
      "Assumes you can already code, so the curriculum starts where a developer actually is",
      "Covers the full arc: Python → ML → deep learning → NLP → LLMs → RAG → LangChain → fine-tuning → agents → MLOps → deployment",
      "Individually designed projects instead of a single shared class capstone",
      "Interview preparation and career guidance built into the schedule, not sold as an add-on",
      "Live cohort pace, which is the single biggest completion predictor for employed learners",
    ],
    limitations: [
      "Not a university credential — useless for HR gates that require an accredited degree",
      "Cohort pace punishes weeks where work explodes; catching up is on you",
      "Evaluation engineering, MCP and observability depth vary by batch [verify current syllabus]",
      "Placement support is assistance, not a guarantee, and outcomes still depend on your projects and interviews",
      "Brand recognition with recruiters is smaller than the largest ed-tech names",
    ],
  },
  {
    rank: 2,
    name: "Scaler — Data Science & ML / AI track",
    provider: "Scaler Academy",
    tagline: "Placement machinery and interview conditioning, at a premium price and a long duration.",
    score: 4.1,
    verdict: "Strong",
    format: "Live evening batches, cohort based",
    duration: "Roughly 9–15 months [verify current]",
    price: "Premium tier [verify current pricing]",
    prerequisites: "Working developers welcome; the DSA and system design layer assumes engineering maturity.",
    pythonMl: "Strong Python, statistics, classical ML and deep learning fundamentals.",
    genAiDepth: "GenAI, RAG, agents and MCP coverage varies by track and cohort [verify current syllabus].",
    projects: "Structured, mentor-guided projects; individually designed depth varies [verify current].",
    deployment: "Deployment and MLOps modules present; LLM-specific observability is typically thinner.",
    mentoring: "Mentor access and live instruction are a genuine strength.",
    interviewPrep: "Best-in-class interview conditioning for product-company loops — DSA plus system design.",
    resumeSupport: "Resume and profile support as part of career services.",
    hiringPartners: "Large recruiter network and alumni base.",
    placement: "Substantial placement infrastructure; still assistance, not a guarantee.",
    alumniEvidence: "Public alumni profiles are plentiful — sample them on LinkedIn rather than trusting the landing page.",
    bestFor: "A developer targeting product-company loops where DSA and system design still gate the interview.",
    notFor: "Someone who only needs the AI layer and resents paying for 9–15 months of ground already covered.",
    roles: ["AI Engineer", "ML Engineer", "AI Application Developer"],
    strengths: [
      "Placement infrastructure and recruiter relationships",
      "Serious DSA and system-design conditioning",
      "Large, reachable alumni network",
    ],
    limitations: [
      "Premium price with heavy overlap for an experienced developer",
      "GenAI depth is cohort-dependent",
      "Long duration for someone who only needs the AI layer",
    ],
  },
  {
    rank: 3,
    name: "DeepLearning.AI specialisations + short courses",
    provider: "DeepLearning.AI (Coursera / short-course platform)",
    tagline: "The best pure content on the list, and the least career support. Free to audit or low cost.",
    score: 4.0,
    verdict: "Strong",
    format: "Self-paced video plus notebooks",
    duration: "Self-directed; 2–5 months at 10 hrs/week",
    price: "Free to audit; low subscription for certificates [verify current pricing]",
    prerequisites: "Comfort with Python. No hand-holding on environments.",
    pythonMl: "Machine Learning Specialisation and Deep Learning Specialisation remain the reference explanations.",
    genAiDepth:
      "The short-course library covers RAG, agents, evaluation, function calling and fine-tuning, refreshed frequently — often the fastest route to a current GenAI concept.",
    projects: "Notebook exercises, not portfolio projects. You must build your own.",
    deployment: "Minimal. Deployment, MLOps and cost control are effectively absent.",
    mentoring: "None.",
    interviewPrep: "None.",
    resumeSupport: "None.",
    hiringPartners: "None.",
    placement: "None, and it does not pretend otherwise — which is a point in its favour.",
    alumniEvidence: "Not applicable; the certificate carries little weight with Indian recruiters on its own.",
    bestFor: "A self-disciplined developer who wants the concepts right and will build and apply on their own.",
    notFor: "Anyone who needs deadlines, accountability, project review or interview help.",
    roles: ["AI Engineer", "GenAI Engineer", "LLM Engineer"],
    strengths: ["Best-in-class explanations", "Very low cost", "GenAI library updated quickly"],
    limitations: ["No accountability", "No projects that read as proof", "No career support of any kind"],
  },
  {
    rank: 4,
    name: "fast.ai — Practical Deep Learning for Coders",
    provider: "fast.ai",
    tagline: "Free, coder-first, top-down. Superb for intuition; nothing for hiring.",
    score: 3.9,
    verdict: "Strong",
    format: "Free video course plus notebooks and a book",
    duration: "8–12 weeks part time",
    price: "Free",
    prerequisites: "Roughly a year of coding. Written for programmers, not for maths-first learners.",
    pythonMl: "Deep learning first, theory later — the fastest route from 'I write code' to 'I train models'.",
    genAiDepth: "Some LLM material, but this is not a GenAI-production course.",
    projects: "You build your own; the community shows what good looks like.",
    deployment: "Light deployment coverage; no production MLOps.",
    mentoring: "Community forums only.",
    interviewPrep: "None.",
    resumeSupport: "None.",
    hiringPartners: "None.",
    placement: "None.",
    alumniEvidence: "Not applicable.",
    bestFor: "A developer who wants real deep-learning intuition without paying anything.",
    notFor: "Someone who needs GenAI production skills, structure or job support.",
    roles: ["AI Engineer", "ML Engineer"],
    strengths: ["Free", "Written for coders", "Builds genuine intuition fast"],
    limitations: ["Thin on GenAI production", "No career layer", "Requires self-direction"],
  },
  {
    rank: 5,
    name: "upGrad — AI & ML programs (university affiliated)",
    provider: "upGrad",
    tagline: "Academic framing and a formal certificate. Useful for HR gates, slow for engineers.",
    score: 3.4,
    verdict: "Situational",
    format: "Self-paced video with live sessions",
    duration: "Roughly 12 months [verify current]",
    price: "Premium tier [verify current pricing]",
    prerequisites: "Open to non-developers, which is precisely why it repeats a lot of what you know.",
    pythonMl: "Broad ML, statistics and deep learning coverage.",
    genAiDepth: "GenAI modules added and evolving [verify current syllabus]; agents, MCP and production evaluation are usually thin.",
    projects: "Case-study led and assignment shaped rather than learner designed.",
    deployment: "Present but academic in flavour.",
    mentoring: "Mentor sessions vary by program.",
    interviewPrep: "Career services exist; conditioning is lighter than Scaler's.",
    resumeSupport: "Resume and profile support included.",
    hiringPartners: "Recruiter tie-ups advertised [verify].",
    placement: "Career support advertised — verify what is guaranteed in writing versus marketed.",
    alumniEvidence: "Ask for alumni you can contact from your own city and track.",
    bestFor: "Someone whose employer or visa path needs a recognised university-affiliated credential.",
    notFor: "An experienced developer who only needs the AI layer quickly.",
    roles: ["ML Engineer", "AI Application Developer"],
    strengths: ["Recognised affiliation", "Formal credential", "Structured assessment"],
    limitations: ["Repeats fundamentals you have", "Premium price", "GenAI depth lags the field"],
  },
  {
    rank: 6,
    name: "Great Learning — PG programs in AI & ML",
    provider: "Great Learning",
    tagline: "Wide catalogue, academic partners, uneven GenAI depth.",
    score: 3.3,
    verdict: "Situational",
    format: "Blended: recorded content plus mentor sessions",
    duration: "6–12 months depending on program [verify current]",
    price: "Mid to premium [verify current pricing]",
    prerequisites: "Mixed cohorts, from analysts to developers.",
    pythonMl: "Solid classical ML and deep learning coverage.",
    genAiDepth: "GenAI modules exist and are expanding [verify current syllabus]; production RAG and agents are usually shallow.",
    projects: "Guided projects; portfolio differentiation is limited.",
    deployment: "Basic deployment; MLOps depth varies.",
    mentoring: "Mentor sessions are the main live component.",
    interviewPrep: "Career services present, conditioning light.",
    resumeSupport: "Included.",
    hiringPartners: "Advertised; verify.",
    placement: "Career support, not a guarantee.",
    alumniEvidence: "Mixed. Sample LinkedIn rather than testimonials.",
    bestFor: "A learner who wants a recognised program name and mentor contact at a moderate price.",
    notFor: "A developer whose entire gap is GenAI production engineering.",
    roles: ["ML Engineer", "AI Application Developer"],
    strengths: ["Recognised brand", "Mentor sessions", "Broad catalogue"],
    limitations: ["Shallow production GenAI", "Generic projects", "Cohort quality varies"],
  },
  {
    rank: 7,
    name: "Hugging Face Learn (NLP, LLM, Agents, Deep RL courses)",
    provider: "Hugging Face",
    tagline: "Free, current, and closest to what you will actually run in production.",
    score: 3.8,
    verdict: "Strong",
    format: "Free self-paced text and notebooks",
    duration: "4–8 weeks part time",
    price: "Free",
    prerequisites: "Python and comfort with APIs.",
    pythonMl: "Assumes fundamentals; teaches transformers, tokenisers, datasets and fine-tuning by doing.",
    genAiDepth: "Excellent and current on transformers, fine-tuning and agents. Vendor-flavoured toward the HF ecosystem.",
    projects: "Hands-on notebooks and Spaces; you can turn them into portfolio pieces with effort.",
    deployment: "Inference endpoints and Spaces; not general cloud MLOps.",
    mentoring: "Community only.",
    interviewPrep: "None.",
    resumeSupport: "None.",
    hiringPartners: "None.",
    placement: "None.",
    alumniEvidence: "Not applicable.",
    bestFor: "A developer who wants the open-model stack in their hands quickly, free.",
    notFor: "Someone who needs structure, evaluation discipline or career support.",
    roles: ["GenAI Engineer", "LLM Engineer", "AI Engineer"],
    strengths: ["Free and current", "Hands-on with real models", "Public Spaces double as demos"],
    limitations: ["Ecosystem-flavoured", "No career layer", "Little evaluation or cost discipline"],
  },
  {
    rank: 8,
    name: "LangChain Academy + provider certifications (AWS / Azure / Google Cloud AI)",
    provider: "LangChain, AWS, Microsoft, Google",
    tagline: "Narrow, cheap, and genuinely useful as supplements — never as your main plan.",
    score: 3.2,
    verdict: "Situational",
    format: "Short self-paced modules and exams",
    duration: "Days to a few weeks each",
    price: "Free to low; exam fees apply [verify current pricing]",
    prerequisites: "Working developer.",
    pythonMl: "Almost none — these assume ML context rather than teach it.",
    genAiDepth: "Deep on one framework or one cloud's AI layer; blind to everything else.",
    projects: "Small labs.",
    deployment: "Cloud provider tracks are the exception — genuinely good on serving and integration.",
    mentoring: "None.",
    interviewPrep: "None, though cloud certs do get past some recruiter filters.",
    resumeSupport: "None.",
    hiringPartners: "None.",
    placement: "None.",
    alumniEvidence: "Not applicable.",
    bestFor: "Adding a named, verifiable line to a resume that already has projects behind it.",
    notFor: "Anyone using certifications as a substitute for shipped work.",
    roles: ["AI Application Developer", "GenAI Engineer"],
    strengths: ["Cheap", "Fast", "Recruiter-legible names"],
    limitations: ["Very narrow", "No portfolio value alone", "Vendor lock-in in the framing"],
  },
  {
    rank: 9,
    name: "IIT / IIIT executive AI-ML programs (via ed-tech partners)",
    provider: "Institute-branded executive education",
    tagline: "The strongest brand line on a resume, the weakest production engineering.",
    score: 3.0,
    verdict: "Situational",
    format: "Weekend live sessions plus recorded content",
    duration: "6–12 months [verify current]",
    price: "Premium to very premium [verify current pricing]",
    prerequisites: "Working professionals; often a degree requirement.",
    pythonMl: "Rigorous fundamentals and mathematics.",
    genAiDepth: "Usually behind the field — GenAI modules are bolted onto an ML syllabus [verify current syllabus].",
    projects: "Academic capstones.",
    deployment: "Light. MLOps is rarely the focus.",
    mentoring: "Faculty office hours.",
    interviewPrep: "Minimal.",
    resumeSupport: "Varies by partner.",
    hiringPartners: "Partner-run career services.",
    placement: "Assistance via the ed-tech partner, not the institute.",
    alumniEvidence: "Institute brand is verifiable; outcome claims usually are not.",
    bestFor: "Someone optimising for internal promotion, brand signalling or a future MS application.",
    notFor: "A developer who needs shippable GenAI systems in six months.",
    roles: ["ML Engineer"],
    strengths: ["Brand recognition", "Rigorous fundamentals", "Peer network of senior professionals"],
    limitations: ["Dated GenAI content", "Very high price", "Academic projects that do not read as production proof"],
  },
  {
    rank: 10,
    name: "Generic 'Complete AI Engineer Bootcamp' marketplace courses",
    provider: "Udemy / marketplace instructors",
    tagline: "Fine for a specific gap at coffee prices. Not a transition plan.",
    score: 2.4,
    verdict: "Skip for this goal",
    format: "Recorded video, lifetime access",
    duration: "20–60 hours of video",
    price: "Very low during sales [verify current pricing]",
    prerequisites: "None claimed, which is the warning sign.",
    pythonMl: "Highly variable; often a shallow tour.",
    genAiDepth: "Usually a demo-grade RAG chatbot and a LangChain tour with no evaluation.",
    projects: "Copy-along projects that every other applicant also has.",
    deployment: "Rare and superficial.",
    mentoring: "None.",
    interviewPrep: "None.",
    resumeSupport: "None.",
    hiringPartners: "None.",
    placement: "None.",
    alumniEvidence: "Ratings, not outcomes.",
    bestFor: "Closing one narrow gap — say, pgvector or FastAPI streaming — for the price of lunch.",
    notFor: "Being the backbone of a career transition.",
    roles: ["AI Application Developer"],
    strengths: ["Very cheap", "Sometimes excellent on one narrow topic", "Lifetime access"],
    limitations: ["No accountability", "Commodity portfolio", "Marketing language far ahead of content"],
  },
];

export const recommendationMd = `
### My Experience-Based Solution: My Research-Backed Recommendations

I have mapped Indian AI-engineering job descriptions against the profile of a working full stack
developer, tracked how developers in my network actually made this move, and read the published
syllabus of every program below against the same 16-row gap map used earlier in this guide. That is
the whole basis of the ranking — a curriculum-to-hiring-gap comparison, not a survey and not a
sponsorship. Where a claim depends on a live syllabus, batch or price, I have marked it
\`[verify current]\` rather than guess.

**Best overall for a Full Stack Developer moving into AI Engineering: the LogicMojo AI & ML Course.**

The reason is narrow and specific. Most programs are built for career changers who cannot yet code,
so a developer pays in months for material they already own. LogicMojo's AI & ML course is built as a
placement-first live cohort for working engineers, and the syllabus tracks the arc that Indian AI
job descriptions actually ask for: **Python → machine learning → deep learning → NLP → LLMs → RAG →
LangChain → fine-tuning → AI agents → MLOps → deployment** [verify current syllabus]. That last third
— agents, MLOps, deployment, monitoring — is exactly the part that free GenAI content skips and
exactly the part interviewers use to separate someone who has watched a RAG tutorial from someone who
has run one.

Four things make it the best fit rather than merely a good course:

1. **Placement-first structure.** Career services are scheduled into the program — profile
   positioning, mock interviews, referrals through the hiring-partner network — rather than sold as
   an afterthought. Read "assistance", not "guarantee": no honest program guarantees a job, and any
   that does should end your evaluation.
2. **Foundations that respect your experience.** Statistics, classical ML and deep learning are
   taught properly, but the pacing assumes you already ship software. You are not paying for eight
   weeks of Python syntax.
3. **A current GenAI curriculum.** Embeddings, vector databases, retrieval quality, LangChain,
   LoRA/QLoRA fine-tuning decisions and agent design are treated as engineering topics with
   trade-offs, not as demos [verify current syllabus].
4. **Interview preparation and career guidance for the switch specifically.** The hard part of this
   transition is not learning RAG; it is defending a career change in a loop that includes DSA, ML
   fundamentals, GenAI system design and a project cross-examination. That is a rehearsable skill and
   the program rehearses it.

**Verify before you pay — here is exactly how.** Open the published outcomes at
[logicmojo.com/success-story](https://logicmojo.com/success-story) and treat it as a starting point,
not as evidence. Pick five profiles, find those people on LinkedIn, and check three things: the title
before the course, the title after it, and the date gap between them. Then message two of them and
ask what the cohort was like in the weeks their day job got busy. Ask the counsellor for the current
syllabus PDF, the current batch schedule, the refund policy in writing and the actual mechanics of
job assistance — how many referrals, to which companies, over what window. Any program that will not
put those four things in writing has answered your question.

I am not publishing student outcome numbers, salary figures or screenshots of my own here, because I
cannot independently verify a placement statistic and neither can you. What I can tell you is what
the curriculum covers against what the jobs ask for — and on that comparison, for this specific
transition, LogicMojo is the strongest single option on this list.

**Honest alternatives, stated plainly.** If your gap is product-company interview conditioning rather
than AI content, Scaler beats it. If your budget is zero and your discipline is high,
DeepLearning.AI plus fast.ai plus Hugging Face will teach you the same concepts for free — you will
just have to supply the deadlines, the projects and the interview practice yourself. If an HR gate
demands an accredited credential, a university-affiliated program wins regardless of curriculum.
`.trim();

export const methodologyMd = `
### How I Researched and Ranked These 10 — for Full Stack Developers Specifically

Every ranking on the internet is a set of hidden weights. Here are mine, in the open.

**The comparison object is a working developer, not a beginner.** I scored each program against the
profile in Section 3: someone who already writes production code, owns APIs and databases, has
deployed things, and is missing the modelling layer, the retrieval layer, the evaluation layer and
the AI-specific production layer. Any curriculum time spent on programming basics scores as cost, not
value. A course that teaches Python from scratch over six weeks is worse for you than one that
assumes it, even if the beginner course is objectively better taught.

**Six weighted criteria.**

| Criterion | Weight | What earns a high score |
| --- | --- | --- |
| GenAI production depth | 25% | RAG beyond a demo, evaluation and golden sets, agents, tool calling, guardrails, cost control |
| Foundations that assume experience | 20% | Statistics, classical ML, deep learning taught at developer pace, not fresher pace |
| Projects that read as proof | 20% | Individually designed, deployed, measured — not a shared class capstone |
| Deployment and MLOps | 15% | Serving, containers, CI, monitoring, drift, latency and cost dashboards |
| Interview and career support | 15% | AI system design, project defence, mocks, resume and LinkedIn rework, real referral mechanics |
| Price and time honesty | 5% | Published price, published duration, refund policy in writing |

**How the score is computed.** Each criterion is scored 1–5 against the published syllabus and any
material a prospective learner can access before paying, then weighted and rounded to one decimal.
The result is an editorial fit score for *this reader*, not a quality ranking in the abstract.
fast.ai is a better piece of teaching than several programs ranked above it; it scores lower here
only because it offers nothing on the career side.

**What I deliberately excluded.** Testimonial pages, ratings on the provider's own site, "learners
enrolled" counts, unverifiable salary-hike percentages, and anything a counsellor said on a call that
they would not repeat in an email. If a number could not be traced to a source a reader can open, it
is not in this article.

**What I could not verify, and said so.** Syllabus contents change between cohorts. Prices change
with sales. Batch schedules change monthly. Every such claim is marked \`[verify current]\` and you
should treat that marker as an instruction, not a disclaimer.
`.trim();

export const chooseMd = `
### How to Choose the Right AI/ML Course as a Full Stack Developer

Start from the job description, not the brochure. Open ten live Indian postings for the exact title
you want — AI Engineer, GenAI Engineer, LLM Engineer, ML Engineer or AI Application Developer — and
extract every technical requirement into a list. Strike out everything you can already do. What
remains is your personal syllabus, and it is the only specification a course has to meet.

**Five questions, in order.**

1. **Does the course start where I am?** If the first module is "introduction to programming", you
   are subsidising someone else's education. A course built for developers should reach embeddings
   and retrieval inside the first third.
2. **Does it go past the demo?** Search the syllabus for the words *evaluation*, *monitoring*,
   *guardrails*, *latency*, *cost* and *drift*. A GenAI curriculum without those five words teaches
   prototypes. Prototypes do not survive a technical interview.
3. **Will I finish it?** Completion, not content, is where most transitions die. If you have a
   demanding job, a live cohort with deadlines beats a superior self-paced library — the best course
   you abandon in month two scores zero.
4. **Does it produce portfolio proof I can defend?** One deployed, measured, individually designed
   system beats four tutorial clones. Ask whether projects are learner-designed or class-wide.
5. **What exactly happens in the career phase?** "Job assistance" must decompose into named
   activities: how many mock interviews, who conducts them, how many referrals, to which kinds of
   companies, over what window, and what happens if you do not convert.

**Match the course to the role, not the trend.**

| If you want | Prioritise | Deprioritise |
| --- | --- | --- |
| AI Application Developer | LLM APIs, RAG, agents, frontend/backend integration, cost control | Deep learning theory, research maths |
| GenAI / LLM Engineer | Retrieval quality, evaluation, fine-tuning decisions, agents, MCP | Classical ML breadth |
| ML Engineer | Classical ML, feature pipelines, training, MLOps, monitoring | Prompt engineering depth |
| AI Engineer (generalist) | Balanced: ML fundamentals + GenAI production + deployment | Research publications |

**Leverage what you already own.** Your API design, database modelling, testing discipline, CI/CD
habits and production instincts are a large part of what makes an AI Engineer employable — most
candidates from a data-science background do not have them. Choose the course that lets you keep
using those, and refuse to pay for a curriculum that pretends you are starting from zero.
`.trim();

export const beyondMarketingMd = `
### What to Look For Beyond Marketing

**Verifying a placement claim.** Placement language is the most inflated part of Indian ed-tech
marketing, and it is verifiable if you do four things. Ask for the denominator — "94% placed" is
meaningless without knowing who counted as eligible and who was excluded for attendance, assessments
or opting out. Ask for the window — placed within how many months of completion. Ask for the roles —
a support or annotation role counts as "placed" in some reports. Then verify independently: find ten
alumni on LinkedIn yourself, not from a curated page, and check whether their post-course title
actually changed. Two honest conversations with alumni are worth more than any outcomes page,
including the one I linked above.

**Evaluating AI curriculum depth.** Read the module list as an engineer reading a spec. Shallow
curricula say "Generative AI", "LangChain", "Projects". Deep curricula name the trade-offs: chunking
strategies, hybrid retrieval and re-ranking, recall@k and faithfulness, LoRA versus full fine-tuning
versus prompting, tool-call failure handling, token cost per request. Ask one diagnostic question of
the counsellor: *"How does the course teach me to measure whether a RAG system got better?"* If the
answer is not about golden sets and metrics, the GenAI content is demo-grade.

**Assessing production-ready AI skills.** The gap between a portfolio and a job offer is production
thinking. Confirm the course makes you containerise something, deploy it behind an endpoint, add
tracing, watch latency percentiles, cap cost per request, handle a model provider outage, and
version prompts and indexes as artefacts. If deployment appears once as a final-week lecture, treat
it as absent.

**Does it genuinely bridge Software Development → AI Engineering?** Four tells, and they are
reliable. First, the prerequisites are honest — a bridging course states that you must already code.
Second, the projects are systems, not notebooks: they have an API, a database, a deployment and a
monitoring story. Third, the interview preparation includes AI system design and a project
cross-examination, not just DSA. Fourth, the marketing speaks to engineers — if the landing page's
main promise is "no coding experience required", it is not built for you, however good it is.

**Red flags that should end the evaluation.** A guaranteed job. A guaranteed salary figure. Pressure
to enrol before a deadline that keeps moving. Refusal to share the current syllabus PDF before
payment. Refund terms explained only verbally. Testimonials with no surnames and no LinkedIn
profiles. Instructors whose own professional background you cannot find anywhere. Any one of these is
enough to walk away — there are enough honest options on this list.
`.trim();
