import { useTranslations } from "next-intl";
import { HandCoins, Sparkles, Smartphone, WifiOff } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const t = useTranslations("about");
  const cards = t.raw("cards") as { label: string; sublabel: string }[];
  const icons = [
    <HandCoins key="free" size={18} strokeWidth={1.8} />,
    <WifiOff key="offline" size={18} strokeWidth={1.8} />,
    <Smartphone key="local" size={18} strokeWidth={1.8} />,
    <Sparkles key="simple" size={18} strokeWidth={1.8} />,
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#060b0a] overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle separator glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.15), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionLabel className="mb-6">{t("eyebrow")}</SectionLabel>
            <h2
              id="about-heading"
              className="font-display font-bold text-3xl md:text-4xl text-white/90 mb-6 leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("headline")}
            </h2>
            <p className="text-white/50 leading-relaxed mb-4 text-base">{t("body")}</p>
            <p className="text-white/40 text-sm">{t("body2")}</p>
          </div>

          {/* Right: visual pillars */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((item, index) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl border border-[rgba(34,197,94,0.1)] bg-[rgba(15,28,25,0.6)] hover:border-[rgba(34,197,94,0.2)] transition-colors group"
              >
                <div className="text-brand-400/70 text-xl mb-3 font-mono group-hover:text-brand-400 transition-colors">
                  {icons[index]}
                </div>
                <div className="font-display font-semibold text-white/85 text-sm mb-1">{item.label}</div>
                <div className="text-xs text-white/35">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
