import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
  screenIndex?: number;
  alt?: string;
}

const screens = [
  "/img/screens/home.jpg",
  "/img/screens/insights.jpg",
  "/img/screens/planning.jpg",
];

export function PhoneMockup({ className, screenIndex = 0, alt = "Clarium app" }: PhoneMockupProps) {
  const screen = screens[screenIndex % screens.length];

  return (
    <div
      className={cn(
        "relative select-none",
        className
      )}
      aria-label={alt}
      role="img"
    >
      {/* Phone shell */}
      <div className="relative w-[220px] mx-auto">
        {/* Outer bezel */}
        <div className="relative rounded-[2.8rem] p-[3px] bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.04)] shadow-2xl shadow-black/60">
          {/* Inner bezel */}
          <div className="rounded-[2.6rem] bg-[#0a0f0e] overflow-hidden border border-[rgba(255,255,255,0.05)]">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#060b0a] rounded-full z-10 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
              <div className="w-4 h-1.5 rounded-full bg-[#1a1a1a]" />
            </div>
            <Image
              src={screen}
              alt={alt}
              className="w-full block"
              width={320}
              height={640}
              sizes="220px"
              priority={screenIndex === 0}
            />
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute -right-[4px] top-24 w-[4px] h-10 bg-[rgba(255,255,255,0.07)] rounded-r-sm" />
        <div className="absolute -left-[4px] top-20 w-[4px] h-7 bg-[rgba(255,255,255,0.07)] rounded-l-sm" />
        <div className="absolute -left-[4px] top-32 w-[4px] h-7 bg-[rgba(255,255,255,0.07)] rounded-l-sm" />
        <div className="absolute -left-[4px] top-44 w-[4px] h-7 bg-[rgba(255,255,255,0.07)] rounded-l-sm" />
      </div>
      {/* Glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.4) 0%, transparent 70%)" }}
        aria-hidden
      />
    </div>
  );
}

export { screens };
