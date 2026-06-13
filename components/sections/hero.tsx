"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Link2,
  AtSign,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import { RotatingTitle } from "@/components/rotating-title";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { siteConfig } from "@/data/portfolio";

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const glowRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!glowRef.current || !glowRef2.current) return;
    const t1 = gsap.to(glowRef.current, {
      x: 30,
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 6,
      ease: "sine.inOut",
    });
    const t2 = gsap.to(glowRef2.current, {
      x: -20,
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 8,
      ease: "sine.inOut",
    });
    return () => {
      t1.kill();
      t2.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-20 pt-24 md:px-10 lg:px-16"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,209,255,0.12),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(167,139,250,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.3),_rgba(0,0,0,0.9))]" />
      <div
        ref={glowRef}
        className="glow-pulse absolute right-16 top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div
        ref={glowRef2}
        className="glow-pulse absolute left-10 top-40 h-32 w-32 rounded-full bg-violet-400/8 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        {/* Left — Identity */}
        <Reveal>
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/50">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              Available for opportunities
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="gradient-text">{siteConfig.name}</span>
            </h1>
            <p className="text-lg text-white/60 md:text-xl">
              <RotatingTitle items={siteConfig.heroTitles} />
            </p>
            <p className="max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
              {siteConfig.tagline}
            </p>
            <div className="mt-1 flex flex-wrap gap-3">
              <Button
                asChild
                className="cta-pulse rounded-full bg-white px-6 text-black hover:bg-white/90"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 px-6 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-white/40">
              <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
              {siteConfig.heroStatline}
            </div>
            <div className="flex items-center gap-4 text-white/40">
              <a
                className="transition-all duration-300 hover:text-white hover:scale-110"
                href={siteConfig.social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link2 className="h-5 w-5" />
              </a>
              <a
                className="transition-all duration-300 hover:text-white hover:scale-110"
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AtSign className="h-5 w-5" />
              </a>
              <a
                className="transition-all duration-300 hover:text-white hover:scale-110"
                href={siteConfig.social.leetcode}
                aria-label="LeetCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a
                className="transition-all duration-300 hover:text-white hover:scale-110"
                href={siteConfig.social.email}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right — Stats */}
        <Reveal delay={0.15} direction="right">
          <div className="grid grid-cols-2 gap-3">
            {siteConfig.stats.map((stat, i) => (
              <HoverCard
                key={stat.label}
                glowColor={i === 0 ? "cyan" : "white"}
              >
                <div
                  className={`rounded-2xl border p-5 transition-colors ${
                    i === 0
                      ? "border-cyan-400/20 bg-cyan-400/5"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1.5 text-xs text-white/50">{stat.label}</p>
                </div>
              </HoverCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
