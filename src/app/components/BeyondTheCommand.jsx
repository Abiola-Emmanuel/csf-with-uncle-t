"use client";

import { motion, useReducedMotion } from "framer-motion";

const PRINCIPLES = [
  {
    n: "01",
    title: "Running a command is one thing.",
    copy: "Anyone can memorize syntax. Tools change, interfaces change, and products change — but the work behind them stays the same.",
  },
  {
    n: "02",
    title: "Understanding the output is another.",
    copy: "You need to know why you're running it, what it's doing, and what the results actually mean before you can act on them.",
  },
  {
    n: "03",
    title: "Explaining it professionally is a third.",
    copy: "A defensible report is what turns technical work into professional work. It's the skill that carries you further than any tool.",
  },
];

export const BeyondTheCommand = () => {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] px-5 py-24 text-white lg:px-10 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-[560px] rounded-full bg-[#E8380D]/10 blur-[140px]"
      />
      <motion.div {...reveal} className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E8380D]">
              The idea behind it
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Beyond the command.
            </h2>
            <p className="mt-6 leading-8 text-white/60">
              This isn't a course about tools. It's a programme about the
              thinking, the investigation, the documentation, and the
              communication that sit around every tool.
            </p>
            <p className="mt-4 leading-8 text-white/60">
              I don't want you to finish with a long list of commands you can
              run. I want you to know{" "}
              <span className="font-semibold text-white">when</span> to run
              them, <span className="font-semibold text-white">why</span>, and
              what the results{" "}
              <span className="font-semibold text-white">actually mean</span>.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10">
              {PRINCIPLES.map((p) => (
                <article
                  key={p.n}
                  className="group bg-[#0B0B0F] p-7 transition-colors hover:bg-[#141419] sm:p-8"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-[#E8380D]">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/50">
                        {p.copy}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};