import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

const techColors: Record<string, string> = {
  Kotlin: "#7F52FF",
  "Jetpack Compose": "#4285F4",
  "Room Database": "#4CAF50",
  Hilt: "#FF6B35",
  Coroutines: "#22c55e",
  "Material 3": "#1C9CEA",
  "Clean Architecture": "#9C27B0",
  MVVM: "#FF5722",
};

export function Tech() {
  const t = useTranslations("tech");
  const items = t.raw("items") as { name: string; desc: string }[];

  return (
    <section
      id="tech"
      className="relative py-28 bg-[#0a1210] overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-xl mx-auto mb-16">
          <SectionLabel className="mb-5 justify-center">{t("eyebrow")}</SectionLabel>
          <h2
            id="tech-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white/90 leading-tight"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("headline")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const color = techColors[item.name] ?? "#22c55e";
            return (
              <article
                key={i}
                className="group p-4 rounded-2xl border border-[rgba(240,253,244,0.06)] bg-[rgba(15,28,25,0.4)] hover:border-[rgba(34,197,94,0.18)] hover:bg-[rgba(15,28,25,0.7)] transition-all duration-200"
              >
                {/* Color dot */}
                <div
                  className="w-2 h-2 rounded-full mb-4"
                  style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
                  aria-hidden
                />
                <h3 className="font-mono font-medium text-sm text-white/80 mb-1.5">{item.name}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
