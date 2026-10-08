"use client";

import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";

const contactEmail = "wisalahmadswb@gmail.com";

const questions = [
  {
    key: "service",
    eyebrow: "01 / WHAT ARE YOU BUILDING?",
    title: "Choose the direction that feels closest.",
    options: [
      ["Website or web app", "A sharper digital home or customer-facing product."],
      ["AI workflow", "Useful automation that removes repetitive work."],
      ["E-commerce experience", "A clearer path from discovery to purchase."],
      ["Custom software", "A focused system built around how your team works."],
    ],
  },
  {
    key: "goal",
    eyebrow: "02 / WHAT MATTERS MOST?",
    title: "What would make this a win?",
    options: [
      ["Launch something new", "Turn a clear idea into a useful first version."],
      ["Automate repetitive work", "Give your team more time for high-value work."],
      ["Improve conversions", "Make the journey clearer and easier to act on."],
      ["Scale an existing product", "Strengthen the foundation for the next stage."],
    ],
  },
  {
    key: "timeline",
    eyebrow: "03 / WHEN DO YOU WANT TO MOVE?",
    title: "Pick the pace that suits the project.",
    options: [
      ["In the next 2-4 weeks", "A focused start with quick momentum."],
      ["Over the next 1-2 months", "Room for thoughtful design and iteration."],
      ["I am still exploring", "Let's shape the right direction together."],
    ],
  },
];

const recommendations = {
  "Website or web app": "A focused website or web app sprint is a strong starting point.",
  "AI workflow": "A small automation audit can reveal the fastest path to value.",
  "E-commerce experience": "A conversion-focused commerce review can turn friction into momentum.",
  "Custom software": "A lightweight product discovery phase can clarify the right system to build.",
};

export default function ProjectPlanner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);

  const question = questions[step];
  const selected = answers[question.key];
  const ready = Boolean(selected);

  const choose = (value) => {
    setAnswers((current) => ({ ...current, [question.key]: value }));
  };

  const next = () => {
    if (!ready) return;
    if (step === questions.length - 1) {
      setComplete(true);
      return;
    }
    setStep((current) => current + 1);
  };

  const back = () => {
    if (complete) {
      setComplete(false);
      return;
    }
    setStep((current) => Math.max(0, current - 1));
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setComplete(false);
  };

  const brief = `Hi Techora,\n\nI am interested in: ${answers.service}.\nMy main goal is: ${answers.goal}.\nPreferred pace: ${answers.timeline}.\n\nI would like to explore the best next step.`;
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("My Techora project brief")}&body=${encodeURIComponent(brief)}`;

  return (
    <div className="mt-10 border-t border-white/10 pt-8 text-left">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" /> Project planner
          </p>
          <h3 className="mt-2 text-xl font-medium text-white">Bring a sharper brief to the first conversation.</h3>
        </div>
        {!complete && <p className="text-xs text-[#A9B4CF]">{step + 1} of {questions.length}</p>}
      </div>

      {!complete ? (
        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            next();
          }}
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">{question.eyebrow}</p>
          <p className="mt-2 text-base text-[#E7EEFC]">{question.title}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {question.options.map(([label, description]) => (
              <button
                key={label}
                type="button"
                onClick={() => choose(label)}
                aria-pressed={selected === label}
                className={`rounded-xl border p-4 text-left transition ${
                  selected === label
                    ? "border-cyan-300/60 bg-cyan-300/10"
                    : "border-white/10 bg-[#0D1426]/70 hover:border-cyan-300/30 hover:bg-white/[0.04]"
                }`}
              >
                <span className="flex items-center justify-between gap-3 text-sm font-medium text-white">
                  {label}
                  {selected === label && <Check className="h-4 w-4 shrink-0 text-cyan-200" />}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-[#A9B4CF]">{description}</span>
              </button>
            ))}
          </div>
          <div className="mt-5 flex justify-between gap-3">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#A9B4CF] transition hover:border-white/20 hover:text-white disabled:invisible"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <button
              type="submit"
              disabled={!ready}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-medium text-[#07122a] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === questions.length - 1 ? "See my direction" : "Continue"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-6 rounded-xl border border-cyan-300/25 bg-cyan-300/[0.06] p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Your starting direction</p>
          <p className="mt-2 text-lg font-medium text-white">{recommendations[answers.service]}</p>
          <p className="mt-2 text-sm leading-relaxed text-[#B8C4DD]">
            You want to {answers.goal.toLowerCase()} {answers.timeline === "I am still exploring" ? "and are still exploring the right pace." : `with a ${answers.timeline.toLowerCase()} pace.`}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={emailHref}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-medium text-[#07122a] transition hover:bg-cyan-200"
            >
              Send this brief <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#D5DFF0] transition hover:bg-white/5"
            >
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
