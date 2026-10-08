"use client";

import { useState } from "react";
import { ArrowUpRight, Check, GitBranch, Sparkles } from "lucide-react";

const projects = [
  {
    id: "ai-assistant",
    title: "AI Business Assistant",
    category: "AI / Automation",
    type: "Concept",
    description:
      "A concept assistant that organizes requests, drafts responses and routes next actions across teams.",
    details: "A calmer front door for busy teams: fewer handoffs, clearer ownership and useful work already in motion.",
    tags: ["AI", "Workflows", "Product design"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
    tone: "from-blue-500/25 to-cyan-400/10",
  },
  {
    id: "commerce-platform",
    title: "E-commerce Growth Platform",
    category: "Web / E-commerce",
    type: "Concept",
    description:
      "A modular commerce interface focused on conversion insights, campaign control and faster iteration.",
    details: "A focused operations layer that gives growth teams the signal they need without burying it in dashboards.",
    tags: ["Analytics", "Commerce", "UX strategy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tone: "from-cyan-500/25 to-violet-400/10",
  },
  {
    id: "operations-dashboard",
    title: "Business Operations Dashboard",
    category: "Web / Automation",
    type: "Concept",
    description:
      "A unified command center concept bringing workflows, KPIs and process health into a single view.",
    details: "A shared operating picture for teams that want to spot friction early and make decisions with confidence.",
    tags: ["Dashboards", "Automation", "Systems"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tone: "from-violet-500/25 to-blue-400/10",
  },
  {
    id: "news-app",
    title: "React News App",
    category: "Web / React",
    type: "GitHub project",
    description:
      "A responsive news-reading experience from the public GitHub archive, shaped around quick discovery and clean browsing.",
    details: "A real-world frontend project showing component-driven UI work and a practical approach to content-heavy screens.",
    tags: ["React", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85",
    tone: "from-amber-400/25 to-orange-500/10",
    href: "https://github.com/ahmad-wisal/REACT-NEWS-APP",
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    category: "Web / E-commerce",
    type: "GitHub project",
    description:
      "A storefront project from GitHub that brings product discovery, visual hierarchy and responsive layouts together.",
    details: "An early commerce build with a strong visual starting point for turning a catalogue into a clearer shopping journey.",
    tags: ["HTML", "Responsive UI", "Commerce"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    tone: "from-rose-400/25 to-orange-400/10",
    href: "https://github.com/ahmad-wisal/e-commerce-website",
  },
];

const filters = ["All", "Concept", "GitHub project"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.type === activeFilter,
  );
  const activeProject =
    visibleProjects.find((project) => project.id === activeProjectId) ?? visibleProjects[0];

  return (
    <section id="work" className="px-4 py-20">
      <div className="mx-auto w-[min(1200px,100%)]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" /> Selected work
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">BUILT FOR THE REAL WORLD.</h2>
            <p className="mt-3 max-w-2xl text-[#A9B4CF]">
              Digital products designed to solve real problems and create measurable impact.
            </p>
          </div>
          <div className="flex w-fit rounded-full border border-white/10 bg-white/[0.03] p-1" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-2 text-xs transition sm:px-4 ${
                  activeFilter === filter
                    ? "bg-cyan-300 text-[#06101f]"
                    : "text-[#A9B4CF] hover:text-white"
                }`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className={`group overflow-hidden rounded-2xl border bg-[#0D1426] transition duration-300 ${
                activeProject?.id === project.id ? "border-cyan-300/50 shadow-[0_0_35px_rgba(67,225,255,0.08)]" : "border-white/10"
              }`}
            >
              <div
                className={`relative h-48 overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.tone} p-4 transition duration-500 group-hover:scale-[1.02]`}
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1426] via-[#0D1426]/20 to-transparent" />
                <div className="absolute inset-4 rounded-xl border border-white/10" />
                <div className="absolute left-8 top-8 flex h-10 w-24 items-center justify-between rounded-lg border border-cyan-200/30 bg-[#0f1930] px-2.5">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-cyan-100">{project.category.split(" / ")[0]}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                </div>
                <div className="absolute right-8 top-14 flex h-14 w-20 flex-col justify-center rounded-lg border border-blue-200/30 bg-[#0d162c] px-2.5">
                  <span className="text-[8px] uppercase tracking-[0.12em] text-blue-200">Status</span>
                  <span className="mt-1 truncate text-[10px] text-white">{project.href ? "Live project" : "Concept"}</span>
                </div>
                <div className="absolute bottom-8 left-1/2 flex h-10 w-40 -translate-x-1/2 items-center rounded-lg border border-violet-200/30 bg-[#101a31] px-3">
                  <span className="truncate text-[10px] text-violet-100">{project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs tracking-[0.14em] text-cyan-300">{project.category}</p>
                  {project.href ? <GitBranch className="h-4 w-4 text-[#A9B4CF]" aria-label="GitHub project" /> : <span className="text-[10px] uppercase tracking-[0.16em] text-[#687594]">Concept</span>}
                </div>
                <h3 className="mt-2 text-xl font-medium text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B4CF]">{project.description}</p>
                <button
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-cyan-100"
                  aria-pressed={activeProject?.id === project.id}
                >
                  {activeProject?.id === project.id ? "Selected project" : "Explore project"}
                  {activeProject?.id === project.id ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </button>
              </div>
            </article>
          ))}
        </div>

        {activeProject && (
          <div className="mt-5 grid gap-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.04] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{activeProject.type}</p>
              <h3 className="mt-2 text-2xl font-medium text-white">{activeProject.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A9B4CF]">{activeProject.details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#C7D2EA]">{tag}</span>
                ))}
              </div>
            </div>
            {activeProject.href ? (
              <a
                href={activeProject.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#06101f] transition hover:bg-cyan-200"
              >
                View on GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/10">
                Start a similar project <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
