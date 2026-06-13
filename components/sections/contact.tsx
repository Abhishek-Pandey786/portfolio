"use client";

import { Link2, AtSign, Mail, Code2, MapPin, Clock } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { HoverCard } from "@/components/motion/hover-card-effect";
import { SectionShell } from "@/components/section-shell";
import { siteConfig } from "@/data/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: <Link2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: <AtSign className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />,
  },
  {
    label: "LeetCode",
    href: siteConfig.social.leetcode,
    icon: <Code2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />,
  },
  {
    label: "Email",
    href: siteConfig.social.email,
    icon: <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-125" />,
  },
];

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title={siteConfig.contact.title}
          description={siteConfig.contact.description}
          gradient
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-[1fr_auto]">
        {/* Social links */}
        <Reveal delay={0.08} direction="left">
          <HoverCard glowColor="cyan">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-white/50">
                {siteConfig.contact.availability}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/50 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] hover:text-white"
                  >
                    {link.icon}
                    <span className="text-xs">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </HoverCard>
        </Reveal>

        {/* Info cards */}
        <Reveal delay={0.12} direction="right">
          <div className="flex flex-col gap-4">
            <HoverCard glowColor="cyan">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin className="h-4 w-4 text-accent-cyan" />
                  {siteConfig.location}
                </div>
              </div>
            </HoverCard>
            <HoverCard glowColor="violet">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Clock className="h-4 w-4 text-accent-violet" />
                  {siteConfig.contact.note}
                </div>
              </div>
            </HoverCard>
            <HoverCard glowColor="emerald">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  {siteConfig.social.emailLabel}
                </div>
              </div>
            </HoverCard>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
