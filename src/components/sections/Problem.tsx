import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Problem() {
  const t = useTranslations("problem");
  const problemItems = t.raw("problemItems") as string[];
  const solutionItems = t.raw("solutionItems") as string[];

  return (
    <section
      id="problem"
      className="relative py-28 bg-[#0a1210] overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.08), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Problem side */}
          <div>
            <SectionLabel className="mb-6">{t("eyebrow")}</SectionLabel>
            <h2
              id="problem-heading"
              className="font-display font-bold text-2xl md:text-3xl text-white/70 mb-8 leading-tight"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("headline")}
            </h2>
            <ul className="space-y-3" role="list" aria-label="Problemas dos apps financeiros">
              {problemItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/40 py-3 border-b border-white/[0.04]"
                >
                  <span className="text-white/20 mt-0.5 shrink-0 font-mono text-xs">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution side */}
          <div className="relative">
            {/* Green accent bar */}
            <div
              className="absolute -left-5 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(180deg, transparent, rgba(34,197,94,0.25), transparent)" }}
              aria-hidden
            />

            <SectionLabel className="mb-6">{t("solutionEyebrow")}</SectionLabel>
            <h2
              className="font-display font-bold text-2xl md:text-3xl text-white/90 mb-8 leading-tight"
            >
              {t("solutionHeadline")}
            </h2>
            <ul className="space-y-3" role="list" aria-label="Soluções do Clarium">
              {solutionItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/70 py-3 border-b border-[rgba(34,197,94,0.07)]"
                >
                  <span className="text-brand-400 mt-0.5 shrink-0 font-mono text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
