"use client";

import { ArrowUpRight, Star } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

export function ProjectsSection() {
  const { featured, items } = siteConfig.projects;

  return (
    <SectionShell id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Featured projects"
          title={siteConfig.projects.title}
          description={siteConfig.projects.description}
          gradient
        />
      </Reveal>

      {/* Featured Project — CampusSync */}
      <Reveal delay={0.08}>
        <HoverCard glowColor="cyan">
          <div className="mt-10 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-violet-400/[0.04]">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs text-accent-cyan">
                <Star className="h-3.5 w-3.5" />
                <span className="uppercase tracking-[0.3em]">
                  {featured.category}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {featured.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {featured.stack.map((item) => (
                  <span
                    key={item}
                    className="skill-tag rounded-md border border-cyan-400/15 bg-cyan-400/[0.06] px-2.5 py-1 text-xs text-cyan-300/80"
                  >
                    {item}
                  </span>
                ))}
                <a
                  className="group/link ml-auto inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
                  href={featured.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:rotate-0 -rotate-12" />
                </a>
              </div>
            </div>
          </div>
        </HoverCard>
      </Reveal>

      {/* Other Projects */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((project, index) => (
          <Reveal key={project.title} delay={0.12 + index * 0.06}>
            <HoverCard glowColor="white">
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/15">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {project.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 grow text-sm leading-relaxed text-white/45">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="skill-tag rounded-md border border-white/8 bg-white/[0.04] px-2 py-0.5 text-xs text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="group/link mt-4 inline-flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:rotate-0 -rotate-12" />
                </a>
              </div>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
