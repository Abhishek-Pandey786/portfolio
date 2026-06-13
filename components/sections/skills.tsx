"use client";

import {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  BookOpen,
  Brain,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="h-4 w-4" />,
  server: <Server className="h-4 w-4" />,
  layout: <Layout className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
  wrench: <Wrench className="h-4 w-4" />,
  book: <BookOpen className="h-4 w-4" />,
  brain: <Brain className="h-4 w-4" />,
};

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Tech stack"
          title={siteConfig.skills.title}
          description={siteConfig.skills.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.skills.groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <HoverCard glowColor="cyan">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/15">
                <div className="flex items-center gap-2.5 text-white/70">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    {iconMap[group.icon] || <Code2 className="h-4 w-4" />}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag cursor-default rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 text-xs text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
