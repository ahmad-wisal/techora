import "./globals.css";

export const metadata = {
  title: "TECHORA — Your Idea. Our Technology.",
  description:
    "TECHORA builds modern websites, applications, AI solutions, automation systems and digital products that help businesses build, automate and grow.",
  openGraph: {
    title: "TECHORA — Your Idea. Our Technology.",
    description:
      "TECHORA builds modern websites, applications, AI solutions, automation systems and digital products that help businesses build, automate and grow.",
    type: "website",
    siteName: "TECHORA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050816] text-white">{children}</body>
    </html>
  );
}
