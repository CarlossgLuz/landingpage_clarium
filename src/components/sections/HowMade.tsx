import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HowMade() {
  const t = useTranslations("howMade");
  const pillars = t.raw("pillars") as { title: string; desc: string }[];

  return (
    <section
      id="how-made"
      className="relative py-28 bg-[#060b0a] overflow-hidden"
      aria-labelledby="how-made-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel className="mb-6">{t("eyebrow")}</SectionLabel>
            <h2
              id="how-made-heading"
              className="font-display font-bold text-3xl md:text-4xl text-white/90 mb-6 leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("headline")}
            </h2>
            <p className="text-white/50 leading-relaxed text-base">{t("body")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-[rgba(34,197,94,0.09)] bg-[rgba(15,28,25,0.5)] hover:border-[rgba(34,197,94,0.2)] transition-colors"
              >
                <div className="text-xs font-mono text-brand-400/60 mb-3 uppercase tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-sm text-white/85 mb-2">{pillar.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
