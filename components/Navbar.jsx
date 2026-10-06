"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`mx-auto mt-3 w-[min(1200px,94vw)] rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0A1020]/80 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-lg"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Primary"
      >
        <div className="flex items-center justify-between px-5 py-3.5">
          <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-white">
            TECHORA
          </a>

          <ul className="hidden items-center gap-7 text-sm text-[#B8C4DD] md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/5 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/70 hover:bg-cyan-300/10"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <ul className="space-y-1 px-5 py-3 text-[#C8D2E6]">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-lg px-3 py-2 hover:bg-white/5 hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/5 px-4 py-2 text-sm font-medium text-cyan-100"
                    onClick={() => setOpen(false)}
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
