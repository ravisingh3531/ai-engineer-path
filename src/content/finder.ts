/**
 * Course Finder quiz for full stack developers. Scoring is transparent and
 * editorial: each answer adds weight to one or more courses from COURSES, and
 * the highest total wins. No answer produces a claim about outcomes.
 */

export type FinderOption = {
  label: string;
  hint?: string;
  /** Course rank -> weight added. */
  weights: Record<number, number>;
};

export type FinderQuestion = {
  id: string;
  question: string;
  caption: string;
  options: FinderOption[];
};

export const FINDER_QUESTIONS: FinderQuestion[] = [
  {
    id: "experience",
    question: "How much professional development experience do you have?",
    caption: "This sets how much of a beginner curriculum would be wasted money.",
    options: [
      { label: "0–2 years", hint: "Early career", weights: { 2: 3, 1: 2, 6: 1 } },
      { label: "2–5 years", hint: "Mid level", weights: { 1: 3, 2: 2 } },
      { label: "5–8 years", hint: "Senior IC", weights: { 1: 3, 3: 1, 9: 1 } },
      { label: "8+ years", hint: "Lead or architect", weights: { 1: 2, 9: 2, 3: 1 } },
    ],
  },
  {
    id: "stack",
    question: "What is your primary stack today?",
    caption: "Your stack decides which AI layer you can absorb fastest.",
    options: [
      { label: "JavaScript / TypeScript (MERN, Next.js)", weights: { 1: 2, 8: 1, 10: 1 } },
      { label: "Java / .NET enterprise", weights: { 1: 3, 2: 1 } },
      { label: "Python / Django / FastAPI", weights: { 3: 2, 7: 2, 1: 2 } },
      { label: "PHP, Ruby or something else", weights: { 1: 3, 2: 1 } },
    ],
  },
  {
    id: "python",
    question: "How comfortable are you with Python and data libraries?",
    caption: "Honest answers here save you a wasted module or a lost month.",
    options: [
      { label: "Barely used Python", weights: { 1: 3, 2: 2, 5: 1 } },
      { label: "Can script, never used NumPy/pandas", weights: { 1: 3, 3: 1 } },
      { label: "Comfortable with pandas and notebooks", weights: { 3: 2, 7: 2, 1: 1 } },
      { label: "Have trained models before", weights: { 7: 3, 3: 2, 8: 1 } },
    ],
  },
  {
    id: "mlKnowledge",
    question: "How much machine learning do you actually know?",
    caption: "Foundations gap versus GenAI gap are different purchases.",
    options: [
      { label: "None — I need the foundations", weights: { 1: 3, 5: 2, 2: 1 } },
      { label: "Concepts only, no hands-on", weights: { 1: 3, 4: 1 } },
      { label: "Built a few models in the past", weights: { 4: 2, 3: 2, 1: 1 } },
      { label: "Solid ML, missing only GenAI production", weights: { 7: 3, 8: 2, 3: 2 } },
    ],
  },
  {
    id: "goal",
    question: "Which role are you targeting?",
    caption: "The title decides the curriculum weighting, not the other way round.",
    options: [
      { label: "AI Engineer (generalist)", weights: { 1: 3, 2: 1 } },
      { label: "GenAI / LLM Engineer", weights: { 1: 3, 7: 2, 3: 1 } },
      { label: "ML Engineer", weights: { 2: 2, 4: 2, 5: 1, 9: 1 } },
      { label: "AI Application Developer", weights: { 1: 2, 8: 2, 10: 1 } },
    ],
  },
  {
    id: "specialisation",
    question: "Which AI specialisation pulls you most?",
    caption: "Used as a tie-breaker between otherwise close programs.",
    options: [
      { label: "RAG and retrieval systems", weights: { 1: 2, 7: 1 } },
      { label: "Agents, tools and orchestration", weights: { 1: 2, 8: 1, 7: 1 } },
      { label: "Fine-tuning and open models", weights: { 7: 3, 3: 1 } },
      { label: "MLOps and AI platform work", weights: { 1: 2, 8: 2, 2: 1 } },
    ],
  },
  {
    id: "leverage",
    question: "Do you want to build on your existing full stack skills?",
    caption: "Some programs restart you from zero; others use what you own.",
    options: [
      { label: "Yes — AI features inside real applications", weights: { 1: 3, 8: 1, 10: 1 } },
      { label: "Partly — I want deeper modelling too", weights: { 1: 2, 2: 2, 4: 1 } },
      { label: "No — I want a clean research-flavoured base", weights: { 9: 2, 5: 2, 4: 1 } },
    ],
  },
  {
    id: "placement",
    question: "How important is placement and job assistance?",
    caption: "This is the single biggest price driver on the list.",
    options: [
      { label: "Critical — it is why I would pay", weights: { 1: 4, 2: 3, 5: 1 } },
      { label: "Helpful but not decisive", weights: { 1: 2, 6: 1, 2: 1 } },
      { label: "Not needed — I can run my own search", weights: { 3: 3, 4: 2, 7: 2, 10: 1 } },
    ],
  },
  {
    id: "mode",
    question: "Which learning mode do you finish?",
    caption: "Completion rate beats content quality for employed learners.",
    options: [
      { label: "Live cohort with deadlines", weights: { 1: 3, 2: 2, 5: 1 } },
      { label: "Self-paced with mentor check-ins", weights: { 6: 2, 5: 2, 1: 1 } },
      { label: "Fully self-paced, no hand-holding", weights: { 3: 3, 4: 2, 7: 2, 10: 1 } },
    ],
  },
  {
    id: "time",
    question: "Realistically, how many hours a week can you protect?",
    caption: "Be pessimistic. Your future self is busier than you think.",
    options: [
      { label: "Under 6 hours", weights: { 10: 2, 3: 2, 8: 1 } },
      { label: "6–10 hours", weights: { 1: 2, 6: 1, 3: 1 } },
      { label: "10–15 hours", weights: { 1: 3, 2: 2 } },
      { label: "15+ hours", weights: { 1: 2, 2: 2, 7: 1 } },
    ],
  },
  {
    id: "budget",
    question: "What is your budget for this transition?",
    caption: "There is a genuinely good free path — it just costs discipline instead.",
    options: [
      { label: "Zero — free resources only", weights: { 3: 4, 4: 3, 7: 3 } },
      { label: "Under ₹25,000", weights: { 8: 3, 10: 3, 7: 1 } },
      { label: "Mid-tier — worth it for structure", weights: { 1: 4, 6: 2 } },
      { label: "Premium — if the outcome support is real", weights: { 1: 3, 2: 3, 5: 2, 9: 2 } },
    ],
  },
];

export const CREDENTIAL_QUESTION: FinderQuestion = {
  id: "credential",
  question: "Do you need an accredited or university-affiliated certificate?",
  caption: "For an HR gate, a promotion policy or a visa — not for pride.",
  options: [
    { label: "Yes, it is a hard requirement", weights: { 5: 5, 9: 4, 6: 2 } },
    { label: "No — skills and projects are enough", weights: { 1: 3, 3: 1, 7: 1 } },
  ],
};

export const ALL_FINDER_QUESTIONS: FinderQuestion[] = [
  ...FINDER_QUESTIONS.slice(0, 7),
  CREDENTIAL_QUESTION,
  ...FINDER_QUESTIONS.slice(7),
];
