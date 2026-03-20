import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "subtle";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full text-xs font-medium px-3 py-1 font-mono tracking-wide",
        variant === "default" && "bg-brand-500/10 text-brand-400 border border-brand-500/20",
        variant === "outline" && "border border-brand-500/30 text-brand-400",
        variant === "subtle" && "bg-white/5 text-white/50 border border-white/10",
        className
      )}
    >
      {children}
    </span>
  );
}
