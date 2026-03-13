import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { isValidLocale, routing } from '@/i18n/routing';
import { getLocalizedUrl, getSiteUrl, localizedMeta } from '@/lib/site';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  const item = localizedMeta[locale];
  const canonical = getLocalizedUrl(locale);

  return {
    metadataBase: new URL(getSiteUrl()),
    title: item.title,
    description: item.description,
    keywords: item.keywords,
    alternates: {
      canonical,
      languages: {
        'pt-BR': getLocalizedUrl('pt-BR'),
        en: getLocalizedUrl('en'),
        es: getLocalizedUrl('es')
      }
    },
    openGraph: {
      type: 'website',
      locale,
      title: item.title,
      description: item.description,
      siteName: 'Clarium',
      url: canonical,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Clarium landing page preview' }]
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: item.description,
      images: ['/twitter-image']
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
