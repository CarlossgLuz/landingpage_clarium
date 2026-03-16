'use client';

import { ChevronDown, Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { Link, usePathname } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';

const labels: Record<AppLocale, string> = {
  'pt-BR': 'PT-BR',
  en: 'EN',
  es: 'ES'
};

const locales: AppLocale[] = ['pt-BR', 'en', 'es'];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const t = useTranslations('common');

  const options = useMemo(() => locales.filter((item) => item !== locale), [locale]);

  return (
    <div className={`relative ${compact ? 'w-full' : ''}`}>
      <details className="group">
        <summary
          className={`focus-outline flex list-none cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-muted backdrop-blur transition hover:border-cyan/60 hover:text-text ${compact ? 'w-full' : ''}`}
          aria-label={t('changeLanguage')}
        >
          <Languages className="h-3.5 w-3.5" />
          {labels[locale]}
          <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" />
        </summary>
        <div className="absolute right-0 z-20 mt-2 min-w-[132px] overflow-hidden rounded-2xl border border-white/10 bg-[rgba(7,16,28,0.94)] shadow-card backdrop-blur-2xl">
          {options.map((item) => (
            <Link
              key={item}
              href={pathname}
              locale={item}
              className="focus-outline block border-b border-white/10 px-3 py-2 text-xs font-semibold text-muted transition hover:bg-white/5 hover:text-text last:border-b-0"
            >
              {labels[item]}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
