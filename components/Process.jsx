"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const steps = ["IDEA", "STRATEGY", "DESIGN", "BUILD", "LAUNCH", "GROW"];

export default function Process() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Number(a.target.dataset.index) - Number(b.target.dataset.index));

        if (visible.length) {
          setActiveIndex(Number(visible[visible.length - 1].target.dataset.index));
        }
      },
      { threshold: 0.55 }
    );

    refs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const progress = `${(activeIndex / (steps.length - 1)) * 100}%`;

  return (
    <section id="process" className="px-4 py-20">
      <div className="mx-auto w-[min(1200px,100%)]">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">FROM IDEA TO SOMETHING REAL.</h2>
        <p className="mt-3 max-w-2xl text-[#A9B4CF]">
          Great ideas don&apos;t need more complexity. They need the right technology.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#0D1426] p-6 md:p-8">
          <div className="hidden md:block">
            <div className="relative mb-8 h-1 rounded bg-white/10">
              <motion.div
                className="h-full rounded bg-gradient-to-r from-blue-400 to-cyan-300"
                animate={reduceMotion ? { width: "100%" } : { width: progress }}
              />
            </div>
            <ol className="grid grid-cols-6 gap-3" aria-label="TECHORA process">
              {steps.map((step, index) => {
                const active = index <= activeIndex;
                return (
                  <li
                    key={step}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    data-index={index}
                    className={`rounded-xl border p-4 transition ${
                      active
                        ? "border-cyan-300/40 bg-cyan-300/10 text-white"
                        : "border-white/10 bg-[#101a31] text-[#8FA0C0]"
                    }`}
                  >
                    <p className="text-xs tracking-[0.15em]">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-2 text-sm font-medium">{step}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="relative space-y-3 md:hidden">
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/15" />
            <motion.div
              className="absolute left-[15px] top-0 w-px bg-gradient-to-b from-blue-400 to-cyan-300"
              animate={reduceMotion ? { height: "100%" } : { height: progress }}
            />
            <ol className="space-y-3" aria-label="TECHORA process mobile">
              {steps.map((step, index) => {
                const active = index <= activeIndex;
                return (
                  <li
                    key={step}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    data-index={index}
                    className="flex items-center gap-4"
                  >
                    <span
                      className={`relative z-10 grid h-8 w-8 place-content-center rounded-full border text-xs ${
                        active
                          ? "border-cyan-300 bg-cyan-300/20 text-cyan-100"
                          : "border-white/20 bg-[#0f1930] text-[#8FA0C0]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className={active ? "text-white" : "text-[#9AA9C6]"}>{step}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
