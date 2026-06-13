"use client";

import { Command } from "lucide-react";

const commands = ["help", "projects", "resume", "skills"];

export function CommandTerminal() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3 text-white/70">
        <Command className="h-4 w-4" />
        <span className="text-xs uppercase tracking-[0.35em]">Command Palette</span>
      </div>
      <p className="mt-4 text-sm text-white/60">
        Try typing a command to navigate this portfolio.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {commands.map((command) => (
          <span
            key={command}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
          >
            {command}
          </span>
        ))}
      </div>
    </div>
  );
}
