import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 font-display cursor-pointer select-none",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
    size === "sm" && "text-sm px-4 py-2",
    size === "md" && "text-sm px-5 py-2.5",
    size === "lg" && "text-base px-7 py-3.5",
    variant === "primary" && [
      "bg-brand-500 text-surface-950",
      "hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25",
      "active:scale-[0.97]",
    ],
    variant === "secondary" && [
      "bg-white/5 text-white/80 border border-white/10",
      "hover:bg-white/10 hover:border-white/20 hover:text-white",
      "active:scale-[0.97]",
    ],
    variant === "ghost" && [
      "text-brand-400 hover:text-brand-300 hover:bg-brand-500/8",
    ],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
