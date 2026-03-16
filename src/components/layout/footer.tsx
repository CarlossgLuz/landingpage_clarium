import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { AUTHOR_NAME, links } from '@/lib/site';

import { BrandMark } from '../ui/brand-mark';
import { Container } from '../ui/container';
import { LanguageSwitcher } from '../ui/language-switcher';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="section-block pt-8">
      <Container>
        <div className="glass-panel glass-panel-strong rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <BrandMark />
                <div>
                  <p className="text-base font-semibold text-text">Clarium</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{t('projectLabel')}</p>
                </div>
              </div>
              <p className="max-w-lg text-sm leading-8 text-muted">{t('description')}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{AUTHOR_NAME}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-text">{t('linksTitle')}</h3>
              <div className="grid gap-2 text-sm text-muted">
                <a href="#comparison" className="focus-outline hover:text-text">
                  {t('comparison')}
                </a>
                <a href="#download" className="focus-outline hover:text-text">
                  {t('download')}
                </a>
                <a href="#support" className="focus-outline hover:text-text">
                  {t('support')}
                </a>
                <a href="#faq" className="focus-outline hover:text-text">
                  {t('faq')}
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-text">{t('connectTitle')}</h3>
              <div className="grid gap-3 text-sm text-muted">
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="focus-outline inline-flex items-center gap-2 hover:text-text">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="focus-outline inline-flex items-center gap-2 hover:text-text">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <LanguageSwitcher compact />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-muted">
            <p>{t('copyright', { year: new Date().getFullYear() })}</p>
            <p>{t('notice')}</p>
            <a href="#content" className="focus-outline hover:text-text">
              {t('backToTop')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
