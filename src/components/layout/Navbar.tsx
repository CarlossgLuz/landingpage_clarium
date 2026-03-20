"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
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
        <a
          href={`/${locale}`}
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 rounded-lg"
          aria-label="Clarium — Home"
        >
          <ClariumMark />
          <span
            className="font-display font-semibold text-lg text-white/90 tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Clarium
          </span>
        </a>

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
            <Button size="sm" disabled aria-label="APK em breve">
              <AndroidIcon />
              {t("download")}
            </Button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-white/60 hover:text-white/90 hover:bg-white/5 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
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
  const locales = siteConfig.locales;
  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5" role="navigation" aria-label="Seletor de idioma">
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          className={cn(
            "px-2 py-1 text-xs font-mono font-medium rounded-md transition-all",
            l === locale
              ? "bg-brand-500/20 text-brand-400"
              : "text-white/35 hover:text-white/60"
          )}
          aria-label={`Mudar idioma para ${l}`}
          aria-current={l === locale ? "true" : undefined}
        >
          {localeLabels[l]}
        </a>
      ))}
    </div>
  );
}

function ClariumMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="28" height="28" rx="8" fill="rgba(34,197,94,0.12)" />
      <path
        d="M8 14C8 10.686 10.686 8 14 8C15.657 8 17.157 8.672 18.243 9.757"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="3" fill="#22c55e" />
      <path
        d="M14 11V8M14 20v-3M11 14H8M20 14h-3"
        stroke="rgba(34,197,94,0.4)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
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
