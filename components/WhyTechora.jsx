import { MessageSquareText, Rocket, Settings2, Blocks } from "lucide-react";

const points = [
  {
    title: "Built Around Your Business",
    text: "We don't force your business into a template.",
    icon: Blocks,
  },
  {
    title: "Modern Technology",
    text: "We use current tools and technologies to build scalable solutions.",
    icon: Rocket,
  },
  {
    title: "Clear Communication",
    text: "No unnecessary technical jargon. Just clear communication and progress.",
    icon: MessageSquareText,
  },
  {
    title: "Built to Grow",
    text: "We build with the future in mind, so your technology can evolve with your business.",
    icon: Settings2,
  },
];

export default function WhyTechora() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto w-[min(1200px,100%)]">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">WHY TECHORA?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {points.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#0D1426] p-6">
              <Icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A9B4CF]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
