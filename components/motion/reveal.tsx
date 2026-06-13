"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right";

type RevealProps = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  direction?: RevealDirection;
};

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export function Reveal({
  className,
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.8,
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
