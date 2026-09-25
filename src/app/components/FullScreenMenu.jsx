"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

const MENU_LINKS = [
    { href: "#programme", label: "Programme", n: "01" },
    { href: "#domains", label: "Domains", n: "02" },
    { href: "#university", label: "University", n: "03" },
    { href: "#lab", label: "The Lab", n: "04" },
    { href: "#mentor", label: "About", n: "05" },
    { href: "#join", label: "Join", n: "06" },
];

const SOCIALS = [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "YouTube", href: "#" },
];

/* Panel colors — from the warm palette to the deep hero tone */
const PANELS = [
    "#E8380D",
    "#C42A0A",
    "#8A1E06",
    "#3D1205",
    "#0B0B0F",
];

/* -------------------------------------------------------------------------- */
/*  Easing                                                                     */
/* -------------------------------------------------------------------------- */

const EASE = [0.76, 0, 0.24, 1]; // smooth in-out cubic

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function FullScreenMenu() {
    const [open, setOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    /* Close on Escape */
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && open) setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    /* Lock body scroll when open */
    useEffect(() => {
        if (open) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    }, [open]);

    const close = useCallback(() => setOpen(false), []);

    return (
        <>
            {/* ---------------------------------------------------------------- */}
            {/* Hamburger trigger                                                */}
            {/* ---------------------------------------------------------------- */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={`relative z-[100] grid size-10 place-items-center rounded-xl border transition-colors duration-300 md:hidden ${open
                        ? "border-white/20 text-white"
                        : "border-black/10 text-[#0B0B0F] hover:bg-black/[0.04]"
                    }`}
            >
                <span className="sr-only">Menu</span>
                <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    className="overflow-visible"
                >
                    <motion.line
                        x1="1"
                        y1="1"
                        x2="19"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={
                            open
                                ? { rotate: 45, y: 6, x: -1 }
                                : { rotate: 0, y: 0, x: 0 }
                        }
                        transition={{ duration: 0.4, ease: EASE }}
                        style={{ originX: "50%", originY: "50%" }}
                    />
                    <motion.line
                        x1="1"
                        y1="7"
                        x2="19"
                        y2="7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                    />
                    <motion.line
                        x1="1"
                        y1="13"
                        x2="19"
                        y2="13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={
                            open
                                ? { rotate: -45, y: -6, x: 1 }
                                : { rotate: 0, y: 0, x: 0 }
                        }
                        transition={{ duration: 0.4, ease: EASE }}
                        style={{ originX: "50%", originY: "50%" }}
                    />
                </svg>
            </button>

            {/* ---------------------------------------------------------------- */}
            {/* Full-screen overlay                                              */}
            {/* ---------------------------------------------------------------- */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="fullscreen-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-[90] flex flex-col overflow-hidden md:hidden"
                    >
                        {/* ---------------------------------------------------------- */}
                        {/* Curtain panels                                             */}
                        {/* ---------------------------------------------------------- */}
                        {PANELS.map((color, i) => (
                            <motion.div
                                key={color}
                                className="absolute inset-0"
                                style={{ backgroundColor: color, zIndex: PANELS.length - i }}
                                variants={{
                                    closed: {
                                        y: reduceMotion ? 0 : "-100%",
                                        transition: {
                                            duration: 0.7,
                                            ease: EASE,
                                            delay: reduceMotion ? 0 : i * 0.06,
                                        },
                                    },
                                    open: {
                                        y: 0,
                                        transition: {
                                            duration: 0.7,
                                            ease: EASE,
                                            delay: reduceMotion ? 0 : i * 0.08,
                                        },
                                    },
                                }}
                            />
                        ))}

                        {/* ---------------------------------------------------------- */}
                        {/* Content                                                    */}
                        {/* ---------------------------------------------------------- */}
                        <motion.div
                            className="relative z-10 flex h-full flex-col"
                            variants={{
                                closed: { opacity: 0 },
                                open: {
                                    opacity: 1,
                                    transition: { delay: 0.45, duration: 0.4 },
                                },
                            }}
                        >
                            {/* Header row — keeps logo visible + close button */}
                            <div className="flex items-center justify-between px-5 py-4">
                                <span className="font-display text-[13px] font-bold leading-tight tracking-tight text-white">
                                    CYBERSECURITY
                                    <br />
                                    <span className="text-[#E8380D]">WITH UNCLE T</span>
                                </span>
                            </div>

                            {/* Nav links */}
                            <nav
                                className="flex flex-1 flex-col justify-center px-6 sm:px-10"
                                aria-label="Mobile"
                            >
                                <ul className="space-y-1">
                                    {MENU_LINKS.map((link, i) => (
                                        <li key={link.href}>
                                            <motion.a
                                                href={link.href}
                                                onClick={close}
                                                className="group flex items-baseline gap-4 py-3 text-white sm:py-4"
                                                variants={{
                                                    closed: {
                                                        opacity: 0,
                                                        y: 40,
                                                        clipPath: "inset(100% 0% 0% 0%)",
                                                    },
                                                    open: {
                                                        opacity: 1,
                                                        y: 0,
                                                        clipPath: "inset(0% 0% 0% 0%)",
                                                        transition: {
                                                            delay: 0.5 + i * 0.07,
                                                            duration: 0.55,
                                                            ease: EASE,
                                                        },
                                                    },
                                                }}
                                            >
                                                <span className="font-display text-xs font-bold tabular-nums tracking-[0.15em] text-white/40 transition-colors group-hover:text-[#E8380D]">
                                                    {link.n}
                                                </span>
                                                <span className="text-3xl font-semibold leading-tight tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                                                    {link.label}
                                                </span>
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Footer — socials + contact */}
                            <motion.div
                                className="border-t border-white/10 px-6 py-6 sm:px-10"
                                variants={{
                                    closed: { opacity: 0, y: 20 },
                                    open: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.95, duration: 0.4, ease: EASE },
                                    },
                                }}
                            >
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {SOCIALS.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            className="text-xs font-medium uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-white"
                                        >
                                            {s.label}
                                        </a>
                                    ))}
                                </div>
                                <p className="mt-4 text-[11px] text-white/30">
                                    Mentorship &amp; Internship Programme · NIIT Port Harcourt
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}