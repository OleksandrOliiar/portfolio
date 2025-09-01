import { Contacts } from "@/sections/Contacts";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function IndexPage() {
  return (
    <div className="container">
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}
