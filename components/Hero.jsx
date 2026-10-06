"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-14 pt-16 md:pt-24">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-[min(1200px,100%)] items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <motion.span
            {...(reduceMotion
              ? { initial: false }
              : { ...fadeUp(), className: "inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[0.16em] text-cyan-200" })}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[0.16em] text-cyan-200"
          >
            TECHNOLOGY FOR WHAT&apos;S NEXT
          </motion.span>

          <motion.h1
            {...(reduceMotion ? { initial: false } : fadeUp(0.1))}
            className="mt-6 max-w-xl text-balance text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            YOUR IDEA. OUR TECHNOLOGY.
          </motion.h1>

          <motion.p
            {...(reduceMotion ? { initial: false } : fadeUp(0.2))}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#A9B4CF] sm:text-lg"
          >
            From websites and apps to AI and automation, we build digital solutions
            that help businesses launch, work smarter and grow faster.
          </motion.p>

          <motion.div
            {...(reduceMotion ? { initial: false } : fadeUp(0.3))}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-[#07122a] transition hover:brightness-110"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <PlayCircle className="h-4 w-4 text-cyan-300" />
              Explore Our Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto h-[380px] w-full max-w-[520px]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-3xl border border-blue-300/20 bg-[#0A1020]/80" />
          <div className="absolute inset-6 rounded-2xl border border-white/10 bg-[#0D1426]">
            <div className="tech-grid absolute inset-0 rounded-2xl" />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-5 top-5 rounded-xl border border-cyan-300/25 bg-[#101b33] px-3 py-2"
            >
              <p className="text-[11px] uppercase tracking-[0.12em] text-cyan-200">IDEA</p>
              <p className="mt-1 text-xs text-[#B8C4DD]">Product Vision</p>
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-5 top-16 rounded-xl border border-blue-300/25 bg-[#0f1930] px-3 py-2"
            >
              <p className="text-[11px] uppercase tracking-[0.12em] text-blue-200">TECH</p>
              <p className="mt-1 text-xs text-[#B8C4DD]">Build + Automate</p>
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl border border-violet-300/25 bg-[#121735] px-4 py-2"
            >
              <p className="text-[11px] uppercase tracking-[0.12em] text-violet-200">GROWTH</p>
              <p className="mt-1 text-xs text-[#B8C4DD]">Launch & Scale</p>
            </motion.div>

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 25C40 25 43 43 52 50C58 55 66 58 80 58" stroke="url(#heroStroke)" strokeWidth="0.6" />
              <path d="M20 25C32 50 40 64 50 75" stroke="url(#heroStroke)" strokeWidth="0.6" />
              <path d="M80 58C70 63 62 66 50 75" stroke="url(#heroStroke)" strokeWidth="0.6" />
              <circle cx="20" cy="25" r="1.4" fill="#5be0ff" />
              <circle cx="80" cy="58" r="1.4" fill="#4fa1ff" />
              <circle cx="50" cy="75" r="1.4" fill="#9e87ff" />
              <defs>
                <linearGradient id="heroStroke" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4FA1FF" />
                  <stop offset="1" stopColor="#5BE0FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
