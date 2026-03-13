import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt-BR', 'en', 'es'],
  defaultLocale: 'pt-BR',
  localePrefix: 'always'
});

export type AppLocale = (typeof routing.locales)[number];

export function isValidLocale(locale: string | undefined): locale is AppLocale {
  return typeof locale === 'string' && routing.locales.includes(locale as AppLocale);
}
