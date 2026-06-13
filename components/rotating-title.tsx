"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RotatingTitleProps = {
  items: string[];
  intervalMs?: number;
};

export function RotatingTitle({ items, intervalMs = 2200 }: RotatingTitleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  return (
    <span className="relative inline-flex h-7 items-center overflow-hidden md:h-8">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          className="absolute left-0 top-0"
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            mass: 0.8,
          }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
