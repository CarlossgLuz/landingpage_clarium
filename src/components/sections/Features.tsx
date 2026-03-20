import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

const featureIcons = ["↕", "↻", "◈", "◎", "□", "⬡"];

export function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section
      id="features"
      className="relative py-28 bg-[#060b0a] overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.12), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <SectionLabel className="mb-5 justify-center">{t("eyebrow")}</SectionLabel>
          <h2
            id="features-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white/90 leading-tight"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("headline")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <article
              key={i}
              className="group p-6 rounded-2xl border border-[rgba(34,197,94,0.09)] bg-[rgba(15,28,25,0.5)] hover:border-[rgba(34,197,94,0.22)] hover:bg-[rgba(15,28,25,0.8)] transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-400 font-mono text-base border border-[rgba(34,197,94,0.15)] bg-[rgba(34,197,94,0.07)] group-hover:bg-[rgba(34,197,94,0.12)] transition-colors"
                  aria-hidden
                >
                  {featureIcons[i]}
                </div>
                <div className="text-[10px] font-mono text-white/20">0{i + 1}</div>
              </div>
              <h3 className="font-display font-semibold text-base text-white/85 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
