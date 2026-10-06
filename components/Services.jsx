import { ArrowRight, Brain, Globe, Layers, Smartphone, Workflow, TrendingUp } from "lucide-react";

const services = [
  {
    no: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for modern businesses.",
    icon: Globe,
  },
  {
    no: "02",
    title: "AI Solutions",
    description:
      "Practical AI solutions that automate work, improve decisions and unlock new possibilities.",
    icon: Brain,
  },
  {
    no: "03",
    title: "Business Automation",
    description:
      "Connect your tools, eliminate repetitive work and build smarter workflows.",
    icon: Workflow,
  },
  {
    no: "04",
    title: "Mobile Apps",
    description:
      "Fast, intuitive mobile experiences designed around your customers.",
    icon: Smartphone,
  },
  {
    no: "05",
    title: "SEO & Growth",
    description:
      "Improve your visibility, attract the right audience and turn traffic into growth.",
    icon: TrendingUp,
  },
  {
    no: "06",
    title: "Custom Software",
    description:
      "Purpose-built digital systems designed around the way your business actually works.",
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-16">
      <div className="mx-auto w-[min(1200px,100%)]">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">WHAT WE BUILD</h2>
        <p className="mt-3 max-w-2xl text-[#A9B4CF]">
          Technology designed around your business — not the other way around.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ no, title, description, icon: Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D1426] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs tracking-[0.18em] text-cyan-300">{no}</span>
                <Icon className="h-5 w-5 text-blue-200 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A9B4CF]">{description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-cyan-200 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
