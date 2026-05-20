import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}
