import { useTranslations } from "next-intl";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const t = useTranslations("contact");
  const items = t.raw("items") as { label: string; desc: string }[];

  const links = [
    { href: siteConfig.links.linkedin, target: "_blank" },
    { href: siteConfig.links.email },
    { href: siteConfig.links.github, target: "_blank" },
  ];
  const icons = [Linkedin, Mail, Github];

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#060b0a] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)" }}
        aria-hidden
      />

      <div className="max-w-4xl mx-auto px-5 text-center">
        <SectionLabel className="mb-6 justify-center">{t("eyebrow")}</SectionLabel>
        <h2
          id="contact-heading"
          className="font-display font-bold text-3xl md:text-4xl text-white/90 mb-5 leading-tight"
        >
          {t("headline")}
        </h2>
        <p className="text-white/45 text-base mb-14 max-w-md mx-auto">{t("body")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {items.map((item, i) => {
            const link = links[i];
            const Icon = icons[i];
            return (
              <a
                key={i}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-3 p-6 rounded-2xl border border-[rgba(240,253,244,0.06)] bg-[rgba(15,28,25,0.4)] hover:border-[rgba(34,197,94,0.22)] hover:bg-[rgba(15,28,25,0.7)] transition-all"
                aria-label={`${item.label} — ${item.desc}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-400/70 group-hover:text-brand-400 transition-colors">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-display font-semibold text-white/75 group-hover:text-white/95 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-white/20 group-hover:text-brand-400/60 transition-all group-hover:translate-x-0.5" aria-hidden>
                    <ArrowUpRight size={14} strokeWidth={1.8} />
                  </span>
                </div>
                <p className="text-xs text-white/35 text-left">{item.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
