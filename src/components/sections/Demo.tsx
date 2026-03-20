import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function Demo() {
  const t = useTranslations("demo");

  return (
    <section
      id="demo"
      className="relative py-28 bg-[#0a1210] overflow-hidden"
      aria-labelledby="demo-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)" }}
        aria-hidden
      />
      {/* Center glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden
        style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.3) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-lg mx-auto mb-16">
          <SectionLabel className="mb-5 justify-center">{t("eyebrow")}</SectionLabel>
          <h2
            id="demo-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white/90 mb-4"
          >
            {t("headline")}
          </h2>
          <p className="text-white/45 text-base">{t("body")}</p>
        </div>

        {/* Three phones */}
        <div className="flex items-end justify-center gap-6 md:gap-10">
          <div className="hidden sm:block opacity-40 scale-75 origin-bottom translate-y-6">
            <PhoneMockup screenIndex={2} alt="" />
          </div>
          <div className="relative z-10">
            <PhoneMockup screenIndex={0} alt="Tela de início do Clarium" />
          </div>
          <div className="hidden sm:block opacity-40 scale-75 origin-bottom translate-y-6">
            <PhoneMockup screenIndex={1} alt="" />
          </div>
        </div>

        {/* Placeholder notice */}
        <p className="text-center text-xs text-white/20 font-mono mt-8">
          ↑ interfaces ilustrativas — placeholders prontos para substituição por capturas reais
        </p>
      </div>
    </section>
  );
}
