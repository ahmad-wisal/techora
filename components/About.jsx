const stats = [
  { value: "10+", label: "Digital Solutions" },
  { value: "6+", label: "Core Services" },
  { value: "∞", label: "Ideas to Build" },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-12 rounded-3xl border border-white/10 bg-[#0A1020] p-7 lg:grid-cols-[1fr_1fr] lg:p-10">
        <div>
          <h2 className="max-w-md text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
            TECHNOLOGY SHOULD MAKE BUSINESS SIMPLER. NOT HARDER.
          </h2>
        </div>
        <div>
          <p className="text-[#B8C4DD]">
            TECHORA was built around a simple belief: technology should help businesses move
            forward, not create more complexity.
          </p>
          <p className="mt-4 text-[#B8C4DD]">
            We work with startups, entrepreneurs and growing businesses to turn ideas into useful
            digital products and systems.
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#8ea0c5]">
            Brand values / placeholders (replace with verified stats)
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-[#0D1426] p-4 text-center">
                <p className="text-2xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-xs text-[#A9B4CF]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
