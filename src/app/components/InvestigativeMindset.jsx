"use client";

import { motion, useReducedMotion } from "framer-motion";

const QUESTIONS = [
  "What am I looking at?",
  "What am I trying to find out?",
  "What evidence do I have?",
  "What does that evidence actually support?",
  "What should I do next?",
  "Can I explain what I did, why I did it, and what it means?",
];

export const InvestigativeMindset = () => {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section className="bg-[#F6F3EE] px-5 py-24 lg:px-10 lg:py-32">
      <motion.div {...reveal} className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C42A0A]">
              How professionals think
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              The investigative mindset.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-black/60">
            When something happens, a professional doesn't reach for a tool
            first. They ask the right questions — in the right order — before
            deciding what to do next. That's the habit we build here.
          </p>
        </div>

        <ol className="mt-16 border-t border-black/10">
          {QUESTIONS.map((q, i) => (
            <li
              key={q}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-black/10 py-7 sm:gap-10"
            >
              <span className="font-display text-sm font-bold tabular-nums tracking-[0.1em] text-[#C42A0A]/60 transition-colors group-hover:text-[#E8380D] sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xl font-medium leading-snug tracking-[-0.01em] text-black/80 transition-colors group-hover:text-black sm:text-2xl lg:text-3xl">
                {q}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
};