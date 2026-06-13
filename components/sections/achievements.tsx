"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

const typeColors: Record<string, { text: string; border: string; glow: "cyan" | "violet" | "emerald" | "amber" }> = {
  Education: { text: "text-accent-cyan", border: "border-cyan-400/20", glow: "cyan" },
  "AI Operations": { text: "text-accent-violet", border: "border-violet-400/20", glow: "violet" },
  Evaluation: { text: "text-emerald-400", border: "border-emerald-400/20", glow: "emerald" },
  Systems: { text: "text-amber-400", border: "border-amber-400/20", glow: "amber" },
};

export function AchievementsSection() {
  return (
    <SectionShell id="achievements" className="section-alt">
      <Reveal>
        <SectionHeading
          eyebrow="Achievements"
          title={siteConfig.achievements.title}
          description={siteConfig.achievements.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {siteConfig.achievements.items.map((item, index) => {
          const colors = typeColors[item.type] || { text: "text-white/50", border: "border-white/10", glow: "white" as const };
          return (
            <Reveal key={item.title} delay={index * 0.08}>
              <HoverCard glowColor={colors.glow}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/15">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs ${colors.text} ${colors.border}`}
                  >
                    {item.type}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">
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
