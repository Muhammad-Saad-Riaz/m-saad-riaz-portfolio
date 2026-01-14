"use client";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Image from "next/image";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-black text-white selection:bg-blue-500/30">
      <section id="hero">
        <Hero/>
      </section>

      <TechStack/>

      <section id="projects">
        <Projects/>
      </section>

      <section id="about">
        <About/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>
    </main>
  );
}
