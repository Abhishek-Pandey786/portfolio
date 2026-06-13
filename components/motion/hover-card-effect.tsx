"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type GlowColor = "cyan" | "violet" | "emerald" | "amber" | "white";

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: GlowColor;
  as?: "div" | "a";
};

const glowStyles: Record<GlowColor, { border: string; shadow: string }> = {
  cyan: {
    border: "hover:border-cyan-400/30",
    shadow: "hover:shadow-[0_4px_24px_-4px_rgba(79,209,255,0.12)]",
  },
  violet: {
    border: "hover:border-violet-400/30",
    shadow: "hover:shadow-[0_4px_24px_-4px_rgba(167,139,250,0.12)]",
  },
  emerald: {
    border: "hover:border-emerald-400/30",
    shadow: "hover:shadow-[0_4px_24px_-4px_rgba(52,211,153,0.12)]",
  },
  amber: {
    border: "hover:border-amber-400/30",
    shadow: "hover:shadow-[0_4px_24px_-4px_rgba(251,191,36,0.12)]",
  },
  white: {
    border: "hover:border-white/25",
    shadow: "hover:shadow-[0_4px_24px_-4px_rgba(255,255,255,0.06)]",
  },
};

export function HoverCard({
  children,
  className,
  glowColor = "white",
}: HoverCardProps) {
  const glow = glowStyles[glowColor];

  return (
    <motion.div
      className={cn(
        "transition-shadow duration-300",
        glow.border,
        glow.shadow,
        className
      )}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
