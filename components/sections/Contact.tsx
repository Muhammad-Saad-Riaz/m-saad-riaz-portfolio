"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Facebook, Sparkles, Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "msaadriaz11@gmail.com"; 
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto px-10 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-blue-950 px-8 py-16 md:px-20 text-center"
        >
          {/* Decorative Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent" />

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="h-7 w-7" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build <span className="text-blue-500">something great?</span>
          </h2>

          {/* Subtext */}
          <p className="mx-auto max-w-2xl text-muted-foreground mb-2 text-lg">
            Have a project in mind, a product to build, or an opportunity to discuss? I’m always open to meaningful collaborations.
          </p>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-10 text-lg">
            Whether it’s a SaaS product, landing page, or frontend role — let’s connect.
          </p>

        {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 px-8" asChild>
              <a href={`mailto:${email}`}>
                Email Me <Mail className="ml-2 w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 px-8"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>Copied! <Check className="ml-2 w-4 h-4 text-green-500" /></>
              ) : (
                <>Copy Email <Copy className="ml-2 w-4 h-4" /></>
              )}
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              or find me here
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://github.com/Muhammad-Saad-Riaz"
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github size={20} />
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/muhammad-saad-riaz"
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>
            <Link
              href="https://facebook.com/profile.php?id=61581438106978"
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors"
              aria-label="Facebook profile"
            >
              <Facebook size={20} />
              Facebook
            </Link>
            <Link
              href="https://wa.me/+923264737989"
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 hover:text-green-500 transition-colors"
              aria-label="WhatsApp profile"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

