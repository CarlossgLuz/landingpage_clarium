import { HandHeart } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { links } from '@/lib/site';

import { Container } from '../ui/container';
import { CopyPixButton } from '../ui/copy-pix-button';
import { Reveal } from '../ui/reveal';

export function SupportSection() {
  const t = useTranslations('support');

  return (
    <section className="py-16" aria-labelledby="support-title">
      <Container>
        <Reveal>
          <article className="surface rounded-2xl p-6 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-green/25 bg-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-green">
                  <HandHeart className="h-3.5 w-3.5" />
                  {t('eyebrow')}
                </p>
                <h2 id="support-title" className="text-2xl font-semibold text-text sm:text-3xl">
                  {t('title')}
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted">{t('description')}</p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <p className="rounded-lg border border-white/10 bg-canvas/70 px-3 py-2 font-mono text-sm text-text">{links.pix}</p>
                <CopyPixButton
                  value={links.pix}
                  idleLabel={t('copy')}
                  successLabel={t('copied')}
                  errorLabel={t('copyError')}
                />
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
