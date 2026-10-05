const tags = ["WEB", "AI", "AUTOMATION", "MOBILE", "SEO", "DIGITAL PRODUCTS"];

export default function IntroStrip() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto w-[min(1100px,100%)] rounded-2xl border border-white/10 bg-[#0A1020]/70 p-6">
        <p className="text-center text-sm font-medium tracking-wide text-[#D4DEEF]">
          We build technology that moves businesses forward.
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2 text-center text-xs tracking-[0.18em] text-cyan-200 sm:grid-cols-3 lg:grid-cols-6">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
