import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Contact } from "@/sections/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="grain fixed inset-0 z-50" />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
