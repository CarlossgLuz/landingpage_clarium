import { notFound } from 'next/navigation';

import { LandingPage } from '@/components/landing-page';
import { isValidLocale } from '@/i18n/routing';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale} />;
}
