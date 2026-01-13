"use client";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero/>
      <TechStack/>
      <Projects/>
    </div>
  );
}
