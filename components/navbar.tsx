"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Create a reference to the navbar

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside); // Listen for clicks outside
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center p-4">
      <motion.div
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex flex-col border transition-all rounded-[28px] duration-300 w-full max-w-2xl relative overflow-hidden",
          scrolled || isOpen
            ? "bg-black/50 border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
            : "bg-transparent border-transparent",
        )}
      >
        <div className={`flex items-center justify-between w-full px-6 py-3`}>
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="h-8 w-8 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
              <Sparkles className="text-white h-4 w-4" />
            </div>
            <span className="tracking-tighter text-white">
              Muhammad <span className="text-blue-500">Saad Riaz</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Link href="/#contact">
              <ShimmerButton
                className="shadow-2xl"
                background="#000000" // Black background
                shimmerColor="#3b82f6" // Blue shimmer to match your theme
                shimmerSize="0.1em"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tighter text-white z-10">
                  Hire Me
                </span>
              </ShimmerButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white p-2 z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden flex flex-col items-center gap-4 px-6 z-10 overflow-hidden"
            >
              <div className="w-full h-px bg-white/10 mb-2" />
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className=" font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <ShimmerButton
                  className="w-full shadow-2xl"
                  background="#000000"
                  shimmerColor="#3b82f6"
                >
                  <span className="text-white">Hire Me</span>
                </ShimmerButton>
              </Link>
              <div className="w-full h-px mb-2" />
            </motion.div>
          )}
        </AnimatePresence>

        {(scrolled || isOpen) && (
          <BorderBeam
            duration={4}
            size={100}
            colorFrom="#3b82f6"
            colorTo="#8b5cf6"
            borderWidth={1}
            className="pointer-events-none"
          />
        )}
      </motion.div>
    </nav>
  );
}
