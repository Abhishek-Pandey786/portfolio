"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" className="section-alt">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title={siteConfig.experience.title}
          description={siteConfig.experience.description}
        />
      </Reveal>
      <div className="mt-10 space-y-6">
        {siteConfig.experience.roles.map((role, index) => (
          <Reveal key={role.title} delay={index * 0.08}>
            <HoverCard glowColor="cyan">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent-cyan">{role.org}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
                    {role.duration}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {role.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {role.highlights.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/60 transition-all duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.stack.map((item) => (
                    <span
                      key={item}
                      className="skill-tag rounded-md border border-white/8 bg-white/[0.04] px-2.5 py-1 text-xs text-white/50"
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
