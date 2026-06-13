"use client";

import { useEffect, useState } from "react";

export function AiLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border border-white/30 border-t-white" />
        <p className="text-xs uppercase tracking-[0.45em] text-white/70">
          Calibrating
        </p>
      </div>
    </div>
  );
}
