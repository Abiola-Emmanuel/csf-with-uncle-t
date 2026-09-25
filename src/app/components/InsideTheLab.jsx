"use client";

import { motion, useReducedMotion } from "framer-motion";

const STACK = [
  {
    category: "Virtualization",
    tools: ["Hyper-V", "VirtualBox", "VMware Workstation"],
  },
  {
    category: "Operating systems",
    tools: ["Windows", "Linux", "Kali Linux"],
  },
  {
    category: "Networking",
    tools: ["Wireshark", "tcpdump", "Nmap"],
  },
  {
    category: "Analysis",
    tools: ["Logs", "Traffic captures", "Suspicious files"],
  },
];

export const InsideTheLab = () => {
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
        className="pointer-events-none absolute -bottom-40 left-1/4 size-[560px] rounded-full bg-[#E8380D]/10 blur-[140px]"
      />
      <motion.div {...reveal} className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E8380D]">
              Inside the lab
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              We get our hands dirty.
            </h2>
            <p className="mt-6 leading-8 text-white/60">
              Configure systems. Investigate incidents. Analyse traffic and
              logs. Assess vulnerabilities. Examine suspicious files. Monitor
              networks. Respond to incidents.
            </p>
            <p className="mt-4 leading-8 text-white/60">
              The tools here are a means, not the point. They change. What
              doesn't change is the reasoning behind them.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
            {STACK.map((group) => (
              <div key={group.category} className="bg-[#0B0B0F] p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                  {group.category}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-[#E8380D]/40 hover:text-white"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};