"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

// --- Project Data
const projects = [
  {
    title: "AImate – AI SaaS Admin Dashboard",
    description:
      "A fully-featured AI SaaS admin dashboard built to manage users, usage analytics, billing, and platform settings with a clean, scalable, production-ready UI.",
    image: "/project1.png", // You will need to add images to your public folder
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "React Hook Form",
      "Zod",
      "Vercel",
      "GitHub / Git",
    ],
    liveUrl: "https://aimate-admin.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/AImate-admin-dashboard",
    color: "from-blue-500 to-cyan-500", // Gradient accent
  },
  {
    title: "AImate – AI SaaS Landing Page",
    description:
      "A modern, high-impact AI SaaS landing page designed to convert visitors into users, featuring advanced animations, interactive sections, and a polished dark-mode aesthetic.",
    image: "/project2.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "GitHub / Git",
    ],
    liveUrl: "https://aimate-ai.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/AImate-AI_Landing_Page",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "EMAE | Premium Fragrance E-commerce Experience",
    description:
      "A premium, fully responsive fragrance e-commerce platform featuring a custom-built product engine, real-time cart synchronization, and dynamic review systems.",
    image: "/project3.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "TanStack Query",
      "React Context API",
      "React Router",
      "Vercel",
      "GitHub / Git",
    ],
    liveUrl: "https://emae.vercel.app",
    githubUrl: "https://github.com/Muhammad-Saad-Riaz/EMAE-Fragrance-Store",
    color: "from-green-500 to-emerald-500",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="w-full max-w-sm border-none p-0 shadow-none bg-transparent">
        <MagicCard
          gradientColor={"#262626"}
          className="pt-6 group hover:-translate-y-1 transition-transform duration-300"
        >
          <CardHeader className="w-full">
            <Image
              src={project.image}
              alt={project.title}
              width={320}
              height={320}
              className="object-contain rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Frontend • UI • Animations
            </p>

            <CardDescription className="text-base">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <Badge variant="secondary" className="p-1 text-sm px-3" key={t}>
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mb-6 flex justify-between border-t border-white/10 ">
            <Link
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={20} />
              Code
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center text-sm text-zinc-400 hover:text-red-600 transition-colors"
            >
              Live Demo <ArrowUpRight size={20} />
            </Link>
          </CardFooter>
        </MagicCard>
      </Card>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for building
            scalable and user-friendly web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="rounded-full p-6 px-10 text-base"
            asChild
          >
            <Link href="https://github.com/Muhammad-Saad-Riaz" target="_blank">
              View Full Project Archive <ExternalLink size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
