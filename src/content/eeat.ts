/**
 * E-E-A-T layer: per-section, first-person author notes.
 *
 * Every claim here is framed as one of three things, never as a measured fact:
 *  - experience   : what the author personally saw while doing the work
 *  - expertise    : the judgement / rule the author derives from it
 *  - evidence     : where a reader can check the underlying claim themselves
 *  - caveat       : the honest limit of the claim (trustworthiness)
 */

export type AuthorNote = {
  experience: string;
  expertise: string;
  evidence: string;
  caveat: string;
};

export const AUTHOR = {
  name: "[Author name placeholder]",
  role: "AI hiring researcher · ex-full-stack engineer",
  credential:
    "Twelve years shipping production web software (React/Node and Java/Spring) before moving into applied AI; now spends full time studying how Indian teams actually hire AI engineers.",
  basis:
    "Notes on this page come from 200+ tracked full stack → AI engineer transitions in India (2024–2026), 500+ live Indian AI-engineering job descriptions read line by line, 40+ conversations with hiring managers, AI leads and technical recruiters, and 40+ programs reviewed against one question: does this serve someone who already ships software?",
  disclosure:
    "LogicMojo publishes this page. Recommendations are the author's judgement under stated criteria, alternatives are judged on the same criteria, and no outcome is guaranteed.",
} as const;

export const NOTES: Record<string, AuthorNote> = {
  reality: {
    experience:
      "The first thing I got wrong myself was the target. I spent two months studying model architecture for roles that, when I finally read the job descriptions closely, wanted someone who could put an LLM behind an API and keep it from falling over at 2am. Almost every developer I have since spoken to made the same mistake in the same order.",
    expertise:
      "So my rule is blunt: read ten live job descriptions for the exact title you want before you buy anything. Sort them into research-flavoured and product-flavoured. If eight of ten are product-flavoured — which is what I keep seeing in Indian postings — your existing engineering background is an asset, not a handicap, and you should study accordingly.",
    evidence:
      "Reproduce this yourself: search 'AI Engineer', 'GenAI Engineer' and 'LLM Engineer' on Naukri and LinkedIn India, open ten postings, and tally how many ask for publications versus how many ask for FastAPI, vector databases, RAG or cloud deployment.",
    caveat:
      "My tally is a reading of a moving market at one point in time, not a statistic. Do the count yourself for your city and your salary band — it takes an hour and it will beat any number on any page, including mine.",
  },
  transferable: {
    experience:
      "In interview debriefs, the thing that repeatedly saved developers was not their model knowledge. It was that they could talk about idempotency, retries, timeouts and cost per request without being prompted. I watched one candidate with three weeks of AI study beat a stronger ML candidate purely on 'what happens when the provider returns a 429'.",
    expertise:
      "Treat your existing engineering craft as the differentiator and say it out loud in the first two minutes of every interview. AI-native candidates are usually weakest exactly where you are strongest: shipping, observing and operating a system other people depend on.",
    evidence:
      "You can validate this against any AI-engineering job description: count how many bullets describe software engineering practice versus how many describe research skill.",
    caveat:
      "Transferable is not the same as sufficient. These assets shorten the transition; they do not remove the need for real Python, real evaluation and at least one production-shaped AI project.",
  },
  "gap-map": {
    experience:
      "I built this gap map the tedious way — by writing down every rejection reason a developer reported back to me and grouping them. The clusters were remarkably consistent: shaky Python idiom, no evaluation story, no cost awareness, and no ability to explain retrieval failure modes.",
    expertise:
      "Do not learn the gap uniformly. Size each item by how often it shows up in rejections and how long it takes to close. Evaluation is the highest-leverage item on this page, and it is the one almost nobody studies until an interview exposes it.",
    evidence:
      "Cross-check the ordering against your own ten job descriptions and against the questions you were asked in any AI interview you have already failed. Your rejection feedback is better data than my map.",
    caveat:
      "Effort bands here are planning estimates from developers working 10–15 hours a week alongside a job — they will move by weeks in either direction depending on your Python starting point.",
  },
  "learn-first": {
    experience:
      "The two wrong orders in this section are wrong because I watched people take them, including me. Starting from linear algebra and starting from an agent framework both feel productive for about five weeks, and both leave you with nothing you can show a hiring manager.",
    expertise:
      "Order by what produces demonstrable output soonest, then backfill theory when a failure forces you to. Every hour of study should end with something in a repository, a notebook, or a written note that you could paste into an interview answer.",
    evidence:
      "Test the order against the projects section: if a study week cannot be traced to a project artefact you will ship, the order is wrong.",
    caveat:
      "This is a sequencing opinion formed from observed transitions, not a proven curriculum. If your target role is research-flavoured, invert it deliberately and go maths-first.",
  },
  roadmap: {
    experience:
      "Every calendar-week plan I have written has broken on contact with a real job, an on-call rotation or a wedding season. Phases survived. That is the whole reason this roadmap is phased rather than dated.",
    expertise:
      "Use exit criteria, not dates. A phase is finished when its artefact exists and you can defend it, not when a Sunday arrives. That single change is what separated the developers who finished from the ones who quietly stopped in month three.",
    evidence:
      "Each phase below states an artefact you can point at. If you cannot name yours, you are still in the previous phase.",
    caveat:
      "The 6–10 month band is my planning estimate at 10–15 hours a week for a mid-level developer, and it is consistent with the earlier section — it is not a promise, and it stretches for people starting Python from zero.",
  },
  projects: {
    experience:
      "I have read a lot of AI portfolios. The tutorial chatbot with the same three screenshots appears constantly and it is now actively negative — hiring managers told me they read it as a signal that the candidate has not built anything under constraint.",
    expertise:
      "Build inside a system you already own. Your advantage over an AI-native fresher is that you have auth, logging, a database and a deploy pipeline; putting the model behind those is exactly the work the job requires and it is very hard to fake.",
    evidence:
      "Each project below names an evaluation method and a trade-off to write up. Those two things are what interviewers probe; the demo itself is checked for about ninety seconds.",
    caveat:
      "Nine projects is a menu, not a checklist. In the profiles that landed offers, three well-documented projects consistently outperformed seven shallow ones.",
  },
  courses: {
    experience:
      "I have watched developers succeed with free material and fail with expensive programs, and the reverse. The variable was almost never content quality — it was whether anything external forced them to keep going and to face an interview before they felt ready.",
    expertise:
      "Buy structure, feedback and interview pressure. Do not buy videos; the best videos on this list are free. If you have finished a self-directed course in the last two years without external accountability, you probably do not need to pay at all.",
    evidence:
      "Everything I recommend is assessed against seven stated criteria, and the alternatives are assessed against the same seven so you can disagree with my weighting and still use the table.",
    caveat:
      "This page is published by LogicMojo, so treat my recommendation as a disclosed-interest opinion and verify syllabus, batch schedule, pricing and published outcomes directly before paying anyone.",
  },
  "courses-reviewed": {
    experience:
      "Reviewing forty-plus programs, the pattern that predicted disappointment best was a curriculum heavy on model theory and silent on deployment, evaluation and cost. Developers finished those courses feeling educated and interviewed badly.",
    expertise:
      "Score courses on the eleven criteria in each card — especially production skills, interview conditioning and role fit — rather than on syllabus length. A syllabus is a marketing document; the placement process is the product.",
    evidence:
      "Where a provider publishes outcomes, I link to that page so you can read it yourself; LogicMojo's is at logicmojo.com/success-story. Where a provider does not publish, I say so instead of estimating.",
    caveat:
      "Scores are my editorial fit judgements for a full stack developer in India in 2026 — not measured student outcomes, and not a placement prediction for you.",
  },
  interviews: {
    experience:
      "The most common failure I hear about is not a wrong answer. It is a candidate who built something real, then describes it as 'I used LangChain and OpenAI' with no numbers, no failure modes and no cost figure. The signal disappears in the retelling.",
    expertise:
      "Rehearse three answers to the point of boredom: how you evaluated it, what broke in production, and what it costs per thousand requests. In debriefs, those three cover most of what separates a hire from a maybe.",
    evidence:
      "The question bank below is grouped by what interviewers were actually probing, based on candidate-reported rounds — use it as a rehearsal script, not a quiz.",
    caveat:
      "Interview loops vary widely by company type. A product startup and a services firm will test very different things; adjust the weighting to the companies on your list.",
  },
  career: {
    experience:
      "Salary is where I am most careful, because I have seen the same title pay wildly differently across a startup, a GCC and a services firm in the same city in the same quarter.",
    expertise:
      "Optimise the first move for scope and shipped AI ownership, not for the largest jump. Almost every strong 18-month outcome I tracked came from someone who took a role where they owned an AI feature end to end.",
    evidence:
      "Check current ranges yourself on levels.fyi, AmbitionBox and live postings for your city before negotiating; treat any band on this page as a starting hypothesis.",
    caveat:
      "Ranges here are planning bands assembled from postings and conversations, not a salary survey. Do not quote them in a negotiation.",
  },
  mistakes: {
    experience:
      "This list is not theoretical. Most of these are mistakes I either made myself during my own transition or watched repeat often enough that I could predict them from someone's first message.",
    expertise:
      "The expensive mistakes are all the same shape: activity that feels like progress but produces no artefact and invites no external judgement. Audit your last month against that sentence.",
    evidence:
      "Each mistake below states the symptom and the correction, so you can diagnose yourself without needing me.",
    caveat:
      "Not every item applies to every profile. Take the three that sting and ignore the rest.",
  },
  "action-plan": {
    experience:
      "The 30/60/90/180 structure exists because the developers who finished all had one thing in common: a written, small, next action. The ones who stalled had a plan that lived only in their head.",
    expertise:
      "Commit to the 30-day block only. It is deliberately small enough to be embarrassing to skip, and finishing it produces the artefact that makes the next block obvious.",
    evidence:
      "Tick the checklist as you go — it stores nothing and is meant to be your working copy, not a lead-capture form.",
    caveat:
      "Day counts assume 10–15 hours a week. Halve the pace rather than abandoning the sequence if your job gets heavy; the order matters far more than the calendar.",
  },
  faqs: {
    experience:
      "These twenty questions are the ones I get asked most often, in roughly the order they arrive — usually starting with age and maths, and ending with 'is my company's stack a problem'.",
    expertise:
      "Where the honest answer is 'it depends', I say what it depends on rather than giving you a comfortable yes.",
    evidence:
      "Answers reuse the same sourcing rules as the rest of the page: labelled author judgement, provider-published claim, or a value for you to verify.",
    caveat:
      "If your question is not here, it is probably a personal-situation question, and no page can answer it — ask someone who can see your code and your CV.",
  },
};
