import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Team from "@/components/Team";
import FAQSection from "@/components/FAQSection";
import CTAStrip from "@/components/CTAStrip";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <About />
      <Team />
      <FAQSection />
      <CTAStrip />
      <Contact />
    </main>
  );
}
