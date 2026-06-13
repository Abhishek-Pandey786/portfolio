"use client";

import { ArrowUpRight, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

export function ResumeCtaSection() {
  return (
    <SectionShell id="resume" className="py-24">
      <Reveal>
        <div className="shimmer-sweep overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.06] via-white/[0.03] to-violet-400/[0.06]">
          <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/40">
                <FileText className="h-3.5 w-3.5" />
                Resume
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {siteConfig.resume.title}
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/50">
                {siteConfig.resume.description}
              </p>
            </div>
            <Button
              asChild
              className="cta-pulse shrink-0 rounded-full bg-white px-8 text-black hover:bg-white/90"
            >
              <a href={siteConfig.resume.url} download>
                Download PDF
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-px border-t border-white/10 md:grid-cols-4">
            {siteConfig.resume.highlights.map((item) => (
              <div
                key={item}
                className="p-4 text-center text-xs text-white/50 transition-colors duration-300 hover:text-white hover:bg-white/[0.03] md:p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
