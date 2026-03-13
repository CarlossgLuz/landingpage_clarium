import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { BrandMark } from '../ui/brand-mark';
import { DownloadButton } from '../ui/download-button';
import { Container } from '../ui/container';
import { LanguageSwitcher } from '../ui/language-switcher';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-canvas/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-outline inline-flex items-center gap-3 rounded-lg">
          <BrandMark />
          <div>
            <p className="text-sm font-semibold text-text">Clarium</p>
            <p className="text-[11px] text-muted">Android App</p>
          </div>
        </Link>

        <nav aria-label={t('aria')} className="hidden items-center gap-6 md:flex">
          <a href="#features" className="focus-outline text-sm text-muted transition hover:text-text">
            {t('features')}
          </a>
          <a href="#demo" className="focus-outline text-sm text-muted transition hover:text-text">
            {t('demo')}
          </a>
          <a href="#tech" className="focus-outline text-sm text-muted transition hover:text-text">
            {t('tech')}
          </a>
          <a href="#faq" className="focus-outline text-sm text-muted transition hover:text-text">
            {t('faq')}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <DownloadButton label={t('download')} pendingLabel={t('downloadPending')} className="hidden sm:inline-flex" />
        </div>
      </Container>
    </header>
  );
}
