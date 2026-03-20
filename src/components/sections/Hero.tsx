import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const badgeKeys = ["free", "offline", "local", "secure", "android", "minimal"] as const;

export function Hero() {
  const t = useTranslations("hero");
  const apkUrl = siteConfig.apkUrl;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero"
      id="hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#060b0a]" aria-hidden />
      <div
        className="absolute inset-0 grid-dots opacity-60"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(rgba(34, 197, 94, 0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] -translate-y-1/4 opacity-30 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse at center, rgba(34,197,94,0.25) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Right glow behind phone */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[700px] opacity-20 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse at right, rgba(34,197,94,0.35) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-brand-500/60" aria-hidden />
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-brand-400">
                {t("eyebrow")}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="font-display font-bold leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
              >
                <span className="text-white/90">{t("headline")}</span>
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("headlineAccent")}
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/50 max-w-md leading-relaxed font-body">
              {t("subheadline")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {apkUrl ? (
                <Button
                  href={apkUrl}
                  size="lg"
                  target="_blank"
                  aria-label={t("ctaPrimary")}
                >
                  <DownloadIcon />
                  {t("ctaPrimary")}
                </Button>
              ) : (
                <div className="relative group">
                  <Button size="lg" disabled aria-label={t("ctaFallback")}>
                    <DownloadIcon />
                    {t("ctaPrimary")}
                  </Button>
                  <div className="absolute -bottom-8 left-0 text-xs text-white/35 font-mono whitespace-nowrap">
                    {t("ctaFallback")} — disponível em breve
                  </div>
                </div>
              )}
              <Button
                href="#features"
                variant="secondary"
                size="lg"
                aria-label={t("ctaSecondary")}
              >
                {t("ctaSecondary")}
                <ChevronDownIcon />
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-1" role="list" aria-label="Características do app">
              {badgeKeys.map((key) => (
                <Badge key={key} role="listitem">
                  {key === "free" && <CheckIcon />}
                  {key === "offline" && <WifiOffIcon />}
                  {key === "secure" && <LockIcon />}
                  {key === "android" && <AndroidSmallIcon />}
                  {t(`badges.${key}`)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Main phone */}
              <PhoneMockup
                screenIndex={0}
                alt={t("mockupAlt")}
                className="relative z-10"
              />
              {/* Secondary phone (slightly offset, different screen) */}
              <div
                className="absolute -left-16 top-12 opacity-35 scale-90 origin-right hidden lg:block"
                aria-hidden
              >
                <PhoneMockup screenIndex={2} alt="" className="pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 md:mt-20" aria-hidden>
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors group"
            tabIndex={-1}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent group-hover:from-brand-500/40 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 2v8M5 7l3 3 3-3M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WifiOffIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1 1l8 8M5 7.5a.5.5 0 110-1 .5.5 0 010 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <rect x="2" y="4.5" width="6" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 4.5V3a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function AndroidSmallIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
      <circle cx="3" cy="5.5" r="0.8" />
      <circle cx="7" cy="5.5" r="0.8" />
      <path d="M5 1.5a3.5 3.5 0 013.5 3.5H1.5A3.5 3.5 0 015 1.5zm-1.5-.8l-.8-1.2m3.3 1.2l.8-1.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}
