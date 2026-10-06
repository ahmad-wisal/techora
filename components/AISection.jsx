"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  "Customer Request",
  "AI Processing",
  "Business Logic",
  "Automation",
  "Dashboard / Result",
];

const labels = ["AI", "API", "CRM", "DATABASE", "AUTOMATION", "ANALYTICS"];

export default function AISection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            WORK SMARTER.
            <br />
            AUTOMATE THE BORING.
          </h2>
          <p className="mt-4 max-w-lg text-[#A9B4CF]">
            We connect AI, software and automation to remove repetitive work and help businesses
            operate faster.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1426] p-5 sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(69,155,255,0.2),transparent_45%)]" />
          <ol className="relative space-y-3">
            {nodes.map((node, i) => (
              <li key={node} className="flex items-center gap-3">
                <motion.span
                  animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.28 }}
                  className="h-2.5 w-2.5 rounded-full bg-cyan-300"
                />
                <div className="flex-1 rounded-lg border border-white/10 bg-[#111b31] px-4 py-3 text-sm text-white">
                  {node}
                </div>
              </li>
            ))}
          </ol>

          <ul className="relative mt-6 flex flex-wrap gap-2">
            {labels.map((label, i) => (
              <motion.li
                key={label}
                animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={{ duration: 4 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs tracking-wide text-cyan-100"
              >
                {label}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
