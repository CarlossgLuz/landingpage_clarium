"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-28 bg-[#0a1210] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)" }}
        aria-hidden
      />

      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-14">
          <SectionLabel className="mb-5 justify-center">{t("eyebrow")}</SectionLabel>
          <h2
            id="faq-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white/90"
          >
            {t("headline")}
          </h2>
        </div>

        <div className="space-y-2" role="list">
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                rounded-2xl border transition-all duration-200 overflow-hidden
                ${open === i
                  ? "border-[rgba(34,197,94,0.2)] bg-[rgba(15,28,25,0.8)]"
                  : "border-[rgba(240,253,244,0.06)] bg-[rgba(15,28,25,0.3)] hover:border-[rgba(34,197,94,0.12)]"
                }
              `}
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className={`text-sm font-display font-medium transition-colors ${open === i ? "text-white/90" : "text-white/65"}`}>
                  {item.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    open === i
                      ? "border-brand-500/40 bg-brand-500/10 rotate-45"
                      : "border-white/10 text-white/30"
                  }`}
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="px-5 pb-5"
                >
                  <p className="text-sm text-white/45 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
