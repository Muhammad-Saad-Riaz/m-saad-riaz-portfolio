"use client";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Image from "next/image";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero/>
      <TechStack/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}
