import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  gradient?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold md:text-4xl",
          gradient ? "gradient-text" : "text-white"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-white/60 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
