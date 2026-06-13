"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

export function AboutJourneySection() {
  return (
    <SectionShell id="journey" className="section-alt">
      <Reveal>
        <SectionHeading
          eyebrow="My journey"
          title={siteConfig.journey.title}
          description={siteConfig.journey.description}
        />
      </Reveal>
      <div className="mt-10 space-y-0">
        {siteConfig.journey.timeline.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1}>
            <div className="group relative flex gap-6 pb-10 last:pb-0">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="timeline-circle-pulse relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-accent-cyan transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_12px_rgba(79,209,255,0.15)]">
                  {index + 1}
                </div>
                {index < siteConfig.journey.timeline.length - 1 && (
                  <div className="w-px grow bg-gradient-to-b from-white/15 to-transparent" />
                )}
              </div>
              {/* Content */}
              <div className="pb-2 pt-1.5 transition-transform duration-300 group-hover:translate-x-1">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {item.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
                <span className="mt-3 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-white/50 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-accent-cyan">
                  {item.tag}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
