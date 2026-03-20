"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  "pt-BR": "PT",
  en: "EN",
  es: "ES",
};

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const apkUrl = siteConfig.apkUrl;

  const navItems = [
    { href: "#features", label: t("features") },
    { href: "#how-made", label: t("howItsMade") },
    { href: "#support", label: t("support") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(6,11,10,0.88)] backdrop-blur-xl border-b border-[rgba(34,197,94,0.08)]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 rounded-lg"
          aria-label={t("homeAria")}
        >
          <BrandMark size={28} />
          <span
            className="font-display font-semibold text-lg text-white/90 tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Clarium
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/50 hover:text-white/90 transition-colors duration-150 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <LocaleSwitch locale={locale} />
          {apkUrl ? (
            <Button href={apkUrl} size="sm" target="_blank" aria-label={t("download")}>
              <AndroidIcon />
              {t("download")}
            </Button>
          ) : (
            <Button size="sm" disabled aria-label={t("download")}>
              <AndroidIcon />
              {t("download")}
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-white/60 hover:text-white/90 hover:bg-white/5 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(6,11,10,0.97)] backdrop-blur-xl border-b border-[rgba(34,197,94,0.08)] px-5 pb-5">
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-sm text-white/60 hover:text-white/90 transition-colors font-medium border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex items-center gap-3">
              <LocaleSwitch locale={locale} />
              {apkUrl ? (
                <Button href={apkUrl} size="sm" target="_blank" className="flex-1 justify-center">
                  <AndroidIcon />
                  {t("download")}
                </Button>
              ) : (
                <Button size="sm" disabled className="flex-1 justify-center">
                  <AndroidIcon />
                  {t("download")}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LocaleSwitch({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locales = siteConfig.locales;
  const [currentSuffix, setCurrentSuffix] = useState(pathname);

  useEffect(() => {
    const { pathname: currentPathname, search, hash } = window.location;
    const suffix = currentPathname.replace(/^\/(pt-BR|en|es)(?=\/|$)/, "") || "";
    setCurrentSuffix(`${suffix || ""}${search}${hash}`);
  }, [pathname]);

  return (
    <div
      className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5"
      role="navigation"
      aria-label={t("localeSwitcher")}
    >
      <span className="px-2 text-white/30" aria-hidden>
        <Globe size={14} strokeWidth={1.7} />
      </span>
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}${currentSuffix}`}
          className={cn(
            "px-2 py-1 text-xs font-mono font-medium rounded-md transition-all",
            l === locale
              ? "bg-brand-500/20 text-brand-400"
              : "text-white/35 hover:text-white/60"
          )}
          aria-label={t("changeLanguage", { locale: localeLabels[l] })}
          aria-current={l === locale ? "true" : undefined}
        >
          {localeLabels[l]}
        </a>
      ))}
    </div>
  );
}

function AndroidIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.523 15.341a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1m-9.046 0a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1m9.405-7.21l1.961-3.394a.407.407 0 00-.148-.556.406.406 0 00-.557.148l-1.984 3.437A11.955 11.955 0 0012 7c-1.492 0-2.91.28-4.154.766L5.862 4.329a.406.406 0 00-.557-.148.406.406 0 00-.148.556l1.961 3.394C4.49 9.613 2.874 12.027 2.874 14.8h18.252c0-2.773-1.616-5.187-4.244-6.669z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line x1="3" y1="6" x2="17" y2="6" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="14" x2="17" y2="14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}
