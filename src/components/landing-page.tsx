import { useTranslations } from 'next-intl';

import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { AuthorSection } from './sections/author-section';
import { BuildSection } from './sections/build-section';
import { DemoSection } from './sections/demo-section';
import { DownloadSection } from './sections/download-section';
import { FaqSection } from './sections/faq-section';
import { FeaturesSection } from './sections/features-section';
import { HeroSection } from './sections/hero-section';
import { ProblemSolutionSection } from './sections/problem-solution-section';
import { SupportSection } from './sections/support-section';
import { TechSection } from './sections/tech-section';

export function LandingPage({ locale }: { locale: string }) {
  const t = useTranslations('common');

  return (
    <div className="relative min-h-screen bg-canvas text-text">
      <a
        href="#content"
        className="focus-outline sr-only z-50 rounded-md bg-canvas px-3 py-2 text-sm text-text focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        {t('skipToContent')}
      </a>
      <Header />
      <main id="content" data-locale={locale}>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <DemoSection />
        <BuildSection />
        <TechSection />
        <DownloadSection />
        <SupportSection />
        <AuthorSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
