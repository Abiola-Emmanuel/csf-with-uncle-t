"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  MapPin,
  Menu,
  Network,
  Search,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./Footer";

import { BeyondTheCommand } from "./BeyondTheCommand";
import { InvestigativeMindset } from "./InvestigativeMindset";
import { Roadmap } from "./Roadmap";
import { UniversitySection } from "./UniversitySection";
import { InsideTheLab } from "./InsideTheLab";
import FullScreenMenu from "./FullScreenMenu";



const PORTRAIT = "/csf-mentor-hero.jpg";

const NAV_LINKS = [
  { href: "#programme", label: "Programme" },
  { href: "#domains", label: "Domains" },
  { href: "#mentor", label: "About" },
];

const STATS = [
  { title: "Practical labs", caption: "Real tools" },
  { title: "Connected learning", caption: "Theory + practice" },
  { title: "Professional reports", caption: "Defensible work" },
  { title: "Broad exposure", caption: "Informed direction" },
];

const STEPS = [
  {
    n: "01",
    title: "Understand",
    copy: "Learn the principles behind the systems, technologies, and security decisions.",
  },
  {
    n: "02",
    title: "Investigate",
    copy: "Work with evidence, logs, traffic, suspicious files, and real technical scenarios.",
  },
  {
    n: "03",
    title: "Communicate",
    copy: "Document your process and present clear, professional, defensible findings.",
  },
];

const DISCIPLINES = [
  { icon: Search, label: "OSINT & Threat Intelligence", tag: "Recon" },
  { icon: Terminal, label: "Ethical Hacking", tag: "Offense" },
  { icon: ShieldCheck, label: "Cloud Security & GRC", tag: "Governance" },
  { icon: FileText, label: "Digital Forensics", tag: "Investigation" },
  { icon: Network, label: "Network Analysis", tag: "Traffic" },
];

const CREDENTIALS = [
  "7+ years across cybersecurity disciplines",
  "Principal Instructor · NIIT Port Harcourt",
  "Mentorship, hands-on labs, professional reporting",
];

/* -------------------------------------------------------------------------- */
/*  CTA link                                                                   */
/* -------------------------------------------------------------------------- */

const ctaBase =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E8380D] focus-visible:ring-offset-transparent";

const ctaVariants = {
  solid:
    "bg-[#E8380D] text-white shadow-[0_12px_30px_-12px_rgba(232,56,13,0.7)] hover:bg-[#cf2f08] hover:shadow-[0_16px_36px_-12px_rgba(232,56,13,0.8)]",
  outline: "border border-black/15 text-[#0B0B0F] hover:bg-black/[0.04]",
  outlineLight: "border border-white/30 text-white hover:bg-white/10",
  white: "bg-white text-[#C42A0A] hover:bg-white/90",
};

const ctaSizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
  xl: "px-7 py-3.5 text-[15px]",
};

function Cta({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) {
  return (
    <a
      className={`${ctaBase} ${ctaVariants[variant]} ${ctaSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F3EE] text-[#0B0B0F] antialiased">
      {/* ---------------------------------------------------------------- */}
      {/* Nav                                                              */}
      {/* ---------------------------------------------------------------- */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-black/5 bg-[#F6F3EE]/80 backdrop-blur-md"
          : "border-b border-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Cybersecurity Conversation with Uncle T — home"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#0B0B0F] text-white transition-transform duration-300 group-hover:-rotate-6">
              <ShieldCheck className="size-5" />
            </span>
            <span className="font-display text-[13px] font-bold leading-tight tracking-tight">
              CYBERSECURITY
              <br />
              <span className="text-[#C42A0A]">WITH UNCLE T</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-black/60 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Cta href="#join">
                Join the programme
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Cta>
            </div>
            <FullScreenMenu />
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-black/5 bg-[#F6F3EE]/95 backdrop-blur-md md:hidden"
            >
              <div className="grid gap-1 px-5 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-semibold text-black/70 hover:bg-black/[0.04]"
                  >
                    {link.label}
                  </a>
                ))}
                <Cta
                  href="#join"
                  className="mt-2 justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Join the programme
                  <ArrowRight className="size-4" />
                </Cta>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section id="top" className="relative overflow-hidden bg-[#F6F3EE]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,11,15,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,11,15,0.055) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-0 size-[520px] rounded-full bg-[#0B0B0F]/5 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
            {/* Copy */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black/70 backdrop-blur">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#E8380D] opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[#E8380D]" />
                </span>
                Mentorship &amp; Internship Programme
              </span>

              <h1 className="mt-7 text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Go beyond the{" "}
                <span className="relative inline-block">
                  <span className="font-serif italic text-[#E8380D]">command</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 200 9"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full text-[#E8380D]/40"
                  >
                    <path
                      d="M1 6.5C40 2 90 1.5 199 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                Understand the work behind the tools. Learn to think, investigate,
                document, and communicate like a cybersecurity professional.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Cta href="#join" size="xl">
                  Explore the programme
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Cta>
                <Cta href="#programme" variant="outline" size="xl">
                  <BookOpen className="size-4" />
                  How it works
                </Cta>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
            >

              {/* 
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#EFEAE2] to-[#DCD3C4] shadow-[0_30px_60px_-30px_rgba(11,11,15,0.35)]">
                <img
                  src={PORTRAIT}
                  alt="Nyekwere TamunoTonye Tom, Principal Instructor"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-contain object-bottom mix-blend-multiply"
                />
              </div> */}


              <div className="relative]">
                <img
                  src={PORTRAIT}
                  alt="Nyekwere TamunoTonye Tom, Principal Instructor"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-contain object-bottom mix-blend-multiply"
                />
              </div>

              <div className="absolute -left-3 top-8 hidden rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C42A0A]">
                  7+ years
                </p>
                <p className="mt-0.5 text-xs font-medium text-black/60">
                  Hands-on practice
                </p>
              </div>

              <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-black/50">
                  <MapPin className="size-3" /> Port Harcourt
                </p>
                <p className="mt-0.5 text-xs font-medium text-black/70">
                  NIIT Campus
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Stats                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#0B0B0F] text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <dl className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.title} className="bg-[#0B0B0F] px-5 py-7 sm:px-6">
                <dt className="text-sm font-bold tracking-tight">
                  {stat.title}
                </dt>
                <dd className="mt-1.5 text-xs text-white/50">
                  {stat.caption}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Beyond the Command — manifesto                                   */}
      {/* ---------------------------------------------------------------- */}
      <BeyondTheCommand />

      {/* ---------------------------------------------------------------- */}
      {/* Programme                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="programme" className="bg-[#F6F3EE] px-5 py-24 lg:px-10 lg:py-32">
        <motion.div {...reveal} className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C42A0A]">
                The programme
              </p>
              <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                Build the mind behind the skill.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-black/60">
              This programme connects sound theory with hands-on work —
              configuring systems, investigating incidents, analysing traffic
              and logs, assessing vulnerabilities, and explaining what every
              finding means to an organisation.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
            {STEPS.map(({ n, title, copy }) => (
              <article
                key={n}
                className="group bg-[#F6F3EE] p-8 transition-colors hover:bg-white"
              >
                <span className="font-display text-xs font-bold tracking-[0.2em] text-[#C42A0A]">
                  {n}
                </span>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-black/60">{copy}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Investigative Mindset                                            */}
      {/* ---------------------------------------------------------------- */}
      <InvestigativeMindset />

      {/* ---------------------------------------------------------------- */}
      {/* Domains                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section id="domains" className="bg-[#0B0B0F] px-5 py-24 text-white lg:px-10 lg:py-32">
        <motion.div {...reveal} className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E8380D]">
                Explore the field
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                A wider view of cybersecurity.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-white/50">
              Build a broad foundation before choosing where to go deeper.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {DISCIPLINES.map(({ icon: Icon, label, tag }, index) => (
              <article
                key={label}
                className="group relative flex min-h-64 flex-col justify-between bg-[#0B0B0F] p-6 transition-colors hover:bg-[#141419]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#E8380D] transition-colors group-hover:border-[#E8380D]/40 group-hover:bg-[#E8380D]/10">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                    {tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    {label}
                  </h3>
                </div>
                <ArrowUpRight className="absolute bottom-6 right-6 size-4 -translate-y-1 text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/40" />
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Roadmap                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Roadmap />

      {/* ---------------------------------------------------------------- */}
      {/* University — complement, not compete                             */}
      {/* ---------------------------------------------------------------- */}
      <UniversitySection />

      {/* ---------------------------------------------------------------- */}
      {/* Inside the Lab                                                   */}
      {/* ---------------------------------------------------------------- */}
      <InsideTheLab />

      {/* ---------------------------------------------------------------- */}
      {/* Mentor                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section id="mentor" className="bg-[#F6F3EE] px-5 py-24 lg:px-10 lg:py-32">
        <motion.div
          {...reveal}
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#C42A0A]">
              Meet your mentor
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Nyekwere TamunoTonye Tom
            </h2>
            <p className="mt-3 font-semibold text-black/60">
              Principal Instructor · Cybersecurity &amp; Ethical Hacking
            </p>

            <ul className="mt-9 space-y-4 border-t border-black/10 pt-8">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-black/70">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#E8380D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <blockquote className="text-balance text-2xl font-medium leading-snug tracking-[-0.01em] text-black sm:text-3xl sm:leading-[1.25]">
              <span className="font-serif italic text-[#E8380D]">“</span>
              I don't just want you to be able to do the work. I want you to
              understand the work — and communicate what you've done.
              <span className="font-serif italic text-[#E8380D]">”</span>
            </blockquote>
            <p className="mt-8 max-w-xl leading-8 text-black/60">
              After more than seven years of deliberate study across
              cybersecurity disciplines, Uncle T created this programme to give
              learners the foundation, exposure, and practical confidence to
              discover where they naturally fit.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Join                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="join"
        className="relative overflow-hidden bg-[#E8380D] px-5 py-20 text-white lg:px-10 lg:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0, transparent 45%)",
          }}
        />
        <motion.div
          {...reveal}
          className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"
        >
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/70">
              Start with the foundation
            </p>
            <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Learn the work behind the tools.
            </h2>
          </div>
          <Cta
            href="mailto:info@niitph.com"
            variant="white"
            size="xl"
            className="shrink-0"
          >
            Enquire about the programme
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Cta>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Footer />
    </main>
  );
};

export default MainPage;