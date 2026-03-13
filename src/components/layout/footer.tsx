import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { links } from '@/lib/site';

import { BrandMark } from '../ui/brand-mark';
import { Container } from '../ui/container';
import { LanguageSwitcher } from '../ui/language-switcher';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="text-sm font-semibold text-text">Clarium</p>
                <p className="text-xs text-muted">{t('projectLabel')}</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-muted">{t('description')}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">{t('linksTitle')}</h3>
            <div className="space-y-2 text-sm text-muted">
              <a href="#features" className="focus-outline block hover:text-text">
                {t('features')}
              </a>
              <a href="#download" className="focus-outline block hover:text-text">
                {t('download')}
              </a>
              <a href="#faq" className="focus-outline block hover:text-text">
                {t('faq')}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-text">{t('connectTitle')}</h3>
            <div className="space-y-3 text-sm text-muted">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-outline inline-flex items-center gap-2 hover:text-text"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-outline inline-flex items-center gap-2 hover:text-text"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <LanguageSwitcher compact />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-muted">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <p>{t('notice')}</p>
          <a href="#content" className="focus-outline hover:text-text">
            {t('backToTop')}
          </a>
        </div>
      </Container>
    </footer>
  );
}
