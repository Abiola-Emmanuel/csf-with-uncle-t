"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  Content                                                                    */
/* -------------------------------------------------------------------------- */

const NAV_COLUMNS = [
  {
    heading: "Programme",
    links: [
      { label: "Overview", href: "#programme" },
      { label: "How it works", href: "#programme" },
      { label: "Domains", href: "#domains" },
      { label: "Enrol", href: "#join" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "OSINT & Threat Intel", href: "#domains" },
      { label: "Ethical Hacking", href: "#domains" },
      { label: "Cloud Security & GRC", href: "#domains" },
      { label: "Digital Forensics", href: "#domains" },
      { label: "Network Analysis", href: "#domains" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Uncle T", href: "#mentor" },
      { label: "NIIT Port Harcourt", href: "#mentor" },
      { label: "Contact", href: "mailto:info@niitph.com" },
    ],
  },
];

const SOCIALS = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "X", href: "#" },
  { icon: FaGithub, label: "GitHub", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const CONTACT = [
  {
    icon: Mail,
    label: "info@niitph.com",
    href: "mailto:info@niitph.com",
  },
  {
    icon: MapPin,
    label: "NIIT Port Harcourt, Rivers State",
    href: "#",
  },
];

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0F] text-white">
      {/* backdrop — grid + accent glow, echoing the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-[#E8380D]/10 blur-[140px]"
      />

      {/* ---------------------------------------------------------------- */}
      {/* Main grid                                                        */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative mx-auto max-w-7xl px-5 pt-20 lg:px-10 lg:pt-24">
        <motion.div {...reveal} className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label="Cybersecurity Conversation with Uncle T — back to top"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-[#E8380D] text-white transition-transform duration-300 group-hover:-rotate-6">
                <ShieldCheck className="size-5" />
              </span>
              <span className="font-display text-sm font-bold leading-tight tracking-tight">
                CYBERSECURITY
                <br />
                <span className="text-[#E8380D]">WITH UNCLE T</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              A mentorship and internship programme teaching the work behind the
              tools — thinking, investigating, documenting, and communicating
              like a professional.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8380D]/40 hover:bg-[#E8380D]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8380D]"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <nav
              key={col.heading}
              className="lg:col-span-2"
              aria-label={col.heading}
            >
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </motion.div>

        {/* Contact strip */}
        <motion.div
          {...reveal}
          className="mt-16 flex flex-wrap gap-3 border-t border-white/10 pt-8"
        >
          {CONTACT.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 transition-all duration-200 hover:border-[#E8380D]/40 hover:bg-[#E8380D]/10 hover:text-white"
            >
              <Icon className="size-4 text-[#E8380D]" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Watermark wordmark                                               */}
      {/* ---------------------------------------------------------------- */}
      <div
        aria-hidden
        className="relative mt-16 select-none overflow-hidden px-5 lg:px-10"
      >
        <p className="font-display text-center text-[clamp(3.5rem,15vw,12rem)] font-bold leading-[0.85] tracking-[-0.05em] text-white/[0.035]">
          UNCLE&nbsp;T
        </p>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Bottom bar                                                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative border-t border-white/10 bg-[#0B0B0F]/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {year} Cybersecurity Conversation with Uncle T. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="hidden sm:block">
              Mentorship &amp; Internship Programme
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
            >
              Back to top
              <span className="grid size-7 place-items-center rounded-full border border-white/15 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[#E8380D]/60 group-hover:text-[#E8380D]">
                <ArrowUp className="size-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;