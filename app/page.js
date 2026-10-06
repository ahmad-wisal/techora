import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStrip from "@/components/IntroStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import AISection from "@/components/AISection";
import WhyTechora from "@/components/WhyTechora";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroStrip />
        <Services />
        <Process />
        <Projects />
        <AISection />
        <WhyTechora />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
