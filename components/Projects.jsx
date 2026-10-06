import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Business Assistant",
    category: "AI / Automation",
    description:
      "A concept assistant that organizes requests, drafts responses and routes next actions across teams.",
    tone: "from-blue-500/25 to-cyan-400/10",
  },
  {
    title: "E-commerce Growth Platform",
    category: "Web / E-commerce",
    description:
      "A modular commerce interface focused on conversion insights, campaign control and faster iteration.",
    tone: "from-cyan-500/25 to-violet-400/10",
  },
  {
    title: "Business Operations Dashboard",
    category: "Web / Automation",
    description:
      "A unified command center concept bringing workflows, KPIs and process health into a single view.",
    tone: "from-violet-500/25 to-blue-400/10",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-4 py-20">
      <div className="mx-auto w-[min(1200px,100%)]">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">BUILT FOR THE REAL WORLD.</h2>
        <p className="mt-3 max-w-2xl text-[#A9B4CF]">
          Digital products designed to solve real problems and create measurable impact.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D1426]"
            >
              <div
                className={`relative h-48 border-b border-white/10 bg-gradient-to-br ${project.tone} p-4 transition duration-500 group-hover:scale-[1.02]`}
                aria-hidden="true"
              >
                <div className="absolute inset-4 rounded-xl border border-white/10" />
                <div className="absolute left-8 top-8 h-10 w-24 rounded-lg border border-cyan-200/30 bg-[#0f1930]" />
                <div className="absolute right-8 top-14 h-14 w-20 rounded-lg border border-blue-200/30 bg-[#0d162c]" />
                <div className="absolute bottom-8 left-1/2 h-10 w-40 -translate-x-1/2 rounded-lg border border-violet-200/30 bg-[#101a31]" />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.14em] text-cyan-300">{project.category}</p>
                <h3 className="mt-2 text-xl font-medium text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B4CF]">{project.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
