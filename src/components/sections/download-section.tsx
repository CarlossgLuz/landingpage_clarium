import { Download, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { hasApkUrl } from '@/lib/site';

import { DownloadButton } from '../ui/download-button';
import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';

export function DownloadSection() {
  const t = useTranslations('download');

  return (
    <section id="download" className="py-16" aria-labelledby="download-title">
      <Container>
        <Reveal>
          <article className="surface relative overflow-hidden rounded-3xl p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(0,208,132,0.17),transparent_42%),radial-gradient(circle_at_85%_0%,rgba(44,231,247,0.15),transparent_40%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                  <Smartphone className="h-3.5 w-3.5" />
                  Android APK
                </p>
                <h2 id="download-title" className="text-balance text-3xl font-semibold text-text sm:text-4xl">
                  {t('title')}
                </h2>
                <p className="mt-4 text-sm text-muted sm:text-base">{t('description')}</p>
                <p className="mt-4 rounded-xl border border-border bg-canvas/70 px-3 py-2 text-xs text-muted">{t('availability')}</p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <DownloadButton label={t('cta')} pendingLabel={t('pending')} className="w-full sm:w-auto" />
                <a
                  href="#faq"
                  className="focus-outline inline-flex items-center gap-2 rounded-xl border border-border bg-panel px-4 py-2 text-sm font-semibold text-text transition hover:border-cyan/60 hover:text-cyan"
                >
                  <Download className="h-4 w-4" />
                  {t('faqCta')}
                </a>
              </div>
            </div>

            <p className="relative mt-5 text-xs text-muted">
              {hasApkUrl() ? t('statusReady') : t('statusWaiting')}
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
