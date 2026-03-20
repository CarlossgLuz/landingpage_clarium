"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function Support() {
  const t = useTranslations("support");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(siteConfig.author.pix).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <section
      id="support"
      className="relative py-28 bg-[#060b0a] overflow-hidden"
      aria-labelledby="support-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.12), transparent)" }}
        aria-hidden
      />
      {/* Glow behind card */}
      <div
        className="absolute inset-0 opacity-8 pointer-events-none"
        aria-hidden
        style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(34,197,94,0.25) 0%, transparent 55%)" }}
      />

      <div className="max-w-2xl mx-auto px-5 text-center">
        <SectionLabel className="mb-6 justify-center">{t("eyebrow")}</SectionLabel>
        <h2
          id="support-heading"
          className="font-display font-bold text-3xl md:text-4xl text-white/90 mb-6 leading-tight"
          style={{ whiteSpace: "pre-line" }}
        >
          {t("headline")}
        </h2>
        <p className="text-white/50 text-base leading-relaxed mb-12 max-w-lg mx-auto">
          {t("body")}
        </p>

        {siteConfig.apkUrl && (
          <div className="mb-8 p-6 rounded-2xl border border-[rgba(240,253,244,0.08)] bg-[rgba(255,255,255,0.02)] text-left">
            <h3 className="text-sm font-display font-semibold text-white/85 mb-2">
              {t("downloadTitle")}
            </h3>
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              {t("downloadBody")}
            </p>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono text-white/55">
              <div className="flex items-start justify-between gap-4">
                <span className="text-white/30">{t("fileLabel")}</span>
                <span className="text-right break-all">{siteConfig.apk.fileName}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-white/30">{t("versionLabel")}</span>
                <span className="text-right">{siteConfig.apk.version}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-white/30">{t("sizeLabel")}</span>
                <span className="text-right">{siteConfig.apk.sizeLabel}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-white/30">{t("hashLabel")}</span>
                <span className="text-right break-all">{siteConfig.apk.sha256}</span>
              </div>
            </div>
          </div>
        )}

        {/* Pix card */}
        <div className="relative p-6 rounded-2xl border border-[rgba(34,197,94,0.18)] bg-[rgba(15,28,25,0.7)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-white/35 uppercase tracking-wider">{t("pixLabel")}</span>
            <span className="text-xs font-mono text-brand-400/60 px-2 py-0.5 rounded border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.07)]">
              Pix
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <code className="text-white/70 font-mono text-base tracking-wider">
              {siteConfig.author.pix}
            </code>

            <button
              onClick={handleCopy}
              className={`
                shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold font-display transition-all duration-200
                ${copied
                  ? "bg-brand-500 text-surface-950 scale-95"
                  : "bg-brand-500/10 text-brand-400 border border-brand-500/20 hover:bg-brand-500/20 hover:border-brand-500/40 active:scale-95"
                }
              `}
              aria-label={copied ? t("copiedButton") : t("copyButton")}
            >
              {copied ? (
                <>
                  <CheckIcon />
                  {t("copiedButton")}
                </>
              ) : (
                <>
                  <CopyIcon />
                  {t("copyButton")}
                </>
              )}
            </button>
          </div>
        </div>

        <p className="mt-5 text-xs text-white/25 font-mono">{t("disclaimer")}</p>
      </div>
    </section>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="4" y="4" width="8" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 3.5V3a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1h-.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7l3.5 3.5L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
