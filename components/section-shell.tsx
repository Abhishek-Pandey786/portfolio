import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  divider?: boolean;
};

export function SectionShell({
  id,
  className,
  children,
  divider = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-20 md:px-10 lg:px-16",
        className
      )}
    >
      {divider && (
        <div className="section-divider absolute left-[10%] right-[10%] top-0" />
      )}
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
