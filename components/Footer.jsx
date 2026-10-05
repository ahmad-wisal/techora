const company = ["About", "Work", "Process", "Contact"];
const services = [
  "Web Development",
  "AI Solutions",
  "Automation",
  "Mobile Apps",
  "SEO",
  "Custom Software",
];
const connect = ["LinkedIn", "Instagram", "Facebook", "GitHub"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12">
      <div className="mx-auto grid w-[min(1200px,100%)] gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-white">TECHORA</p>
          <p className="mt-3 text-cyan-200">Build. Automate. Grow.</p>
          <p className="mt-4 max-w-sm text-sm text-[#A9B4CF]">
            Technology solutions for businesses ready to build what&apos;s next.
          </p>
        </div>

        <FooterCol title="Company" items={company} mapHref={(item) => `#${item.toLowerCase()}`} />
        <FooterCol title="Services" items={services} mapHref={() => "#services"} />
        <FooterCol title="Connect" items={connect} mapHref={() => "#contact"} />
      </div>
      <p className="mx-auto mt-10 w-[min(1200px,100%)] border-t border-white/10 pt-6 text-sm text-[#8EA0C5]">
        © 2026 TECHORA. All rights reserved.
      </p>
    </footer>
  );
}

function FooterCol({ title, items, mapHref }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-[#A9B4CF]">
        {items.map((item) => (
          <li key={item}>
            <a href={mapHref(item)} className="transition hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
