"use client";

import { Marquee } from "@/components/ui/marquee";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaReact, FaGit } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

const technologies = [
  { name: "React", color: "hover:text-[#61DAFB]", icon: FaReact },
  { name: "Next.js", color: "hover:text-white", icon: RiNextjsFill },
  { name: "TypeScript", color: "hover:text-[#3178C6]", icon: BiLogoTypescript },
  { name: "JavaScript", color: "hover:text-[#FFDF00]", icon: RiJavascriptFill },
  { name: "Tailwind", color: "hover:text-[#38B2AC]", icon: RiTailwindCssFill },
  { name: "Framer Motion", color: "hover:text-white", icon: SiFramer },
  { name: "Figma", color: "hover:text-[#8A00C4]", icon: IoLogoFigma },
  { name: "Git", color: "hover:text-neutral-500", icon: FaGit },
];

export default function TechStack() {
  return (
    <section className="py-10 bg-black border-b border-white/5">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest">
          Powering my builds with
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        
        <Marquee pauseOnHover>
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                aria-label={tech.name}
                className={`text-2xl md:text-3xl font-bold text-zinc-700 transition-colors duration-300 cursor-default mx-8 ${tech.color} hover:scale-110 hover:-translate-y-1`}
              >
                <span className="flex flex-col items-center">
                  <Icon size={48} />
                  <p className="mt-2 text-xs tracking-wide text-zinc-500 group-hover:text-current">
                    {tech.name}
                  </p>
                </span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
