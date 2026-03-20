import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(34,197,94,0.08)] bg-[#060b0a]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <ClariumMark />
              <span className="font-display font-semibold text-lg text-white/90 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                Clarium
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <p className="text-xs text-white/25 max-w-xs leading-relaxed font-mono">
              {t("independentNote")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-mono font-medium text-white/40 uppercase tracking-widest mb-5">{t("links.title")}</h3>
            <ul className="space-y-3">
              {siteConfig.apkUrl && (
                <li>
                  <a href={siteConfig.apkUrl} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-white/55 hover:text-brand-400 transition-colors flex items-center gap-2">
                    <span className="text-brand-500/60">↓</span> {t("links.download")}
                  </a>
                </li>
              )}
              <li>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-white/90 transition-colors">
                  {t("links.github")}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-white/90 transition-colors">
                  {t("links.linkedin")}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.email}
                  className="text-sm text-white/55 hover:text-white/90 transition-colors">
                  {t("links.email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-mono font-medium text-white/40 uppercase tracking-widest mb-5">{t("legal.title")}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#author" className="text-sm text-white/55 hover:text-white/90 transition-colors">
                  {t("legal.official")}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/35 flex items-center gap-1.5">
                  <span className="text-brand-500/50">✓</span>
                  {t("legal.privacy")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(240,253,244,0.05)] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-mono">
            {t("copyright").replace("{year}", String(year))}
          </p>
          <div className="flex items-center gap-4">
            {/* Locale switcher */}
            <div className="flex items-center gap-1" role="navigation" aria-label="Idiomas">
              {siteConfig.locales.map((l) => (
                <a
                  key={l}
                  href={`/${l}`}
                  className={`text-xs font-mono px-2 py-1 rounded transition-colors ${l === locale ? "text-brand-400" : "text-white/25 hover:text-white/50"}`}
                  aria-label={`Mudar para ${l}`}
                >
                  {l === "pt-BR" ? "PT" : l.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Anti-fraud notice */}
        <div className="mt-6 p-4 rounded-xl bg-[rgba(34,197,94,0.04)] border border-[rgba(34,197,94,0.10)]">
          <p className="text-xs text-white/35 font-mono leading-relaxed">
            <span className="text-brand-500/70 mr-1.5">⚠</span>
            {t("officialNotice")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function ClariumMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="28" height="28" rx="8" fill="rgba(34,197,94,0.12)" />
      <path d="M8 14C8 10.686 10.686 8 14 8C15.657 8 17.157 8.672 18.243 9.757" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="14" r="3" fill="#22c55e" />
      <path d="M14 11V8M14 20v-3M11 14H8M20 14h-3" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
