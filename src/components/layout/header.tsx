import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { BrandMark } from '../ui/brand-mark';
import { DownloadButton } from '../ui/download-button';
import { Container } from '../ui/container';
import { LanguageSwitcher } from '../ui/language-switcher';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="glass-panel glass-panel-strong rounded-[999px] px-3 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="focus-outline inline-flex items-center gap-3 rounded-full px-2 py-1">
              <BrandMark />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-text">Clarium</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Android APK</p>
              </div>
            </Link>

            <nav aria-label={t('aria')} className="hidden items-center gap-1 lg:flex">
              <a href="#comparison" className="focus-outline rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/[0.04] hover:text-text">
                {t('comparison')}
              </a>
              <a href="#product" className="focus-outline rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/[0.04] hover:text-text">
                {t('features')}
              </a>
              <a href="#download" className="focus-outline rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/[0.04] hover:text-text">
                {t('downloadNav')}
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <DownloadButton label={t('download')} pendingLabel={t('downloadPending')} className="hidden sm:inline-flex" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
