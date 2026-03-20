import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest uppercase",
        "text-brand-400",
        className
      )}
    >
      <span className="h-px w-6 bg-brand-500/60" aria-hidden />
      {children}
    </span>
  );
}
