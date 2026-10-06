import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="cta-bg mx-auto w-[min(1200px,100%)] overflow-hidden rounded-3xl border border-cyan-300/20 p-8 text-center sm:p-12">
        <h2 className="text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
          HAVE AN IDEA?
          <br />
          LET&apos;S BUILD IT.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#CAD4E8]">
          Tell us what you&apos;re thinking. We&apos;ll help turn it into something real.
        </p>
        <p className="mt-4 text-sm tracking-[0.14em] text-cyan-200">LET&apos;S BUILD WHAT&apos;S NEXT.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@techora.co"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-[#07122a]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:hello@techora.co?subject=Talk%20to%20Techora"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Talk to Techora
          </a>
        </div>
      </div>
    </section>
  );
}
