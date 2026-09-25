"use client";

import { motion, useReducedMotion } from "framer-motion";

const PHASES = [
  {
    n: "01",
    tag: "Foundations",
    title: "Build the base",
    copy: "Security principles and objectives, operating systems, networking, and the language of the field. One concept at a time.",
  },
  {
    n: "02",
    tag: "Exposure",
    title: "See the whole field",
    copy: "OSINT, Ethical Hacking, Forensics, Cloud Security, GRC, and more — connected, not isolated. Broad before narrow.",
  },
  {
    n: "03",
    tag: "Application",
    title: "Do the work",
    copy: "Labs, configurations, incident investigations, traffic analysis, and vulnerability assessments — with real tools.",
  },
  {
    n: "04",
    tag: "Direction",
    title: "Specialize with intent",
    copy: "Choose where to go deeper from a position of exposure and understanding — not because it was the first thing you saw.",
  },
];

export const Roadmap = () => {
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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C42A0A]">
              The journey
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Foundation first. Direction later.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-black/60">
            A gradual progression from principles to practice — and finally, to
            a well-informed choice about where to go deeper.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((p) => (
            <article
              key={p.n}
              className="group relative flex min-h-72 flex-col justify-between bg-[#F6F3EE] p-7 transition-colors hover:bg-white"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-[#C42A0A]">
                  {p.n}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/30">
                  {p.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/60">
                  {p.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};