"use client";

import { GraduationCap, FlaskConical, ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const UNIVERSITY = [
  "Academic foundation in the discipline",
  "Concepts, principles, and theories",
  "The body of knowledge behind cybersecurity",
  "The underlying systems and technologies",
];

const PROGRAMME = [
  "Practical application of those concepts",
  "Labs, configurations, and investigations",
  "Hands-on work with real tools",
  "Professional documentation and reporting",
];

export const UniversitySection = () => {
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C42A0A]">
            Complement, not competition
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
            It doesn't replace your degree.
            <br />
            It <span className="font-serif italic text-[#E8380D]">reinforces</span> it.
          </h2>
          <p className="mt-6 text-base leading-8 text-black/60">
            Your university gives you the academic foundation. This programme
            gives you another environment to apply it — through tools, labs,
            configurations, investigations, and hands-on work.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 lg:grid-cols-2">
          {/* University */}
          <div className="bg-[#F6F3EE] p-8 sm:p-10">
            <span className="grid size-11 place-items-center rounded-xl border border-black/10 bg-white text-[#0B0B0F]">
              <GraduationCap className="size-5" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Your university
            </h3>
            <p className="mt-2 text-sm text-black/50">
              The academic foundation
            </p>
            <ul className="mt-8 space-y-3 border-t border-black/10 pt-6">
              {UNIVERSITY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-black/70">
                  <Check className="mt-0.5 size-4 shrink-0 text-black/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Programme */}
          <div className="relative bg-[#0B0B0F] p-8 text-white sm:p-10">
            <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#E8380D]">
              <FlaskConical className="size-5" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              This programme
            </h3>
            <p className="mt-2 text-sm text-white/50">
              The practical application
            </p>
            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {PROGRAMME.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#E8380D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case study pull quote */}
        <div className="mt-14 grid gap-8 border-t border-black/10 pt-14 lg:grid-cols-[auto_1fr] lg:gap-14">
          <div className="max-w-xs">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C42A0A]">
              A simple example
            </p>
            <p className="mt-3 text-lg font-semibold leading-snug tracking-tight">
              Virtualization, in class and in the lab.
            </p>
          </div>
          <div className="max-w-3xl">
            <blockquote className="text-balance text-xl leading-relaxed text-black/80 sm:text-2xl sm:leading-snug">
              <span className="font-serif italic text-[#E8380D]">“</span>
              Hyper-V, VirtualBox and VMware Workstation are not virtualization
              itself. They're technologies we use to work with virtualized
              environments in practice.
              <span className="font-serif italic text-[#E8380D]">”</span>
            </blockquote>
            <p className="mt-6 leading-8 text-black/60">
              One strengthens your understanding of the underlying concept. The
              other gives you opportunities to see it in action. They're not
              competing lessons — they build on each other.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};