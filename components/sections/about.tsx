"use client";

import { Server, Brain, Code2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

const iconMap: Record<string, { icon: React.ReactNode; glow: "cyan" | "violet" | "emerald" }> = {
  server: {
    icon: <Server className="h-5 w-5 text-accent-cyan" />,
    glow: "cyan",
  },
  brain: {
    icon: <Brain className="h-5 w-5 text-accent-violet" />,
    glow: "violet",
  },
  code: {
    icon: <Code2 className="h-5 w-5 text-emerald-400" />,
    glow: "emerald",
  },
};

export function AboutSection() {
  return (
    <SectionShell id="about">
      <Reveal>
        <SectionHeading
          eyebrow={siteConfig.about.eyebrow}
          title={siteConfig.about.title}
          description={siteConfig.about.description}
          gradient
        />
      </Reveal>

      {/* Terminal line */}
      <Reveal delay={0.08} direction="left">
        <div className="mt-8 inline-block rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3">
          <p className="font-mono text-xs text-accent-cyan">
            {siteConfig.about.terminalLine}
          </p>
        </div>
      </Reveal>

      {/* Highlight cards */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {siteConfig.about.highlights.map((item, index) => {
          const mapping = iconMap[item.icon] || {
            icon: <Code2 className="h-5 w-5 text-white/50" />,
            glow: "white" as const,
          };
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <HoverCard glowColor={mapping.glow}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="mb-4 inline-flex rounded-lg border border-white/10 bg-white/5 p-2.5 transition-transform duration-300 group-hover:scale-110">
                    {mapping.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>
              </HoverCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
