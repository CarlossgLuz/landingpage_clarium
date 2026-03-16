import { HandHeart, HeartHandshake } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { links } from '@/lib/site';

import { Container } from '../ui/container';
import { CopyPixButton } from '../ui/copy-pix-button';
import { Reveal } from '../ui/reveal';

export function SupportSection() {
  const t = useTranslations('support');

  return (
    <section id="support" className="section-wrap" aria-labelledby="support-title">
      <Container>
        <Reveal>
          <article className="hero-frame section-shell panel-glow-green rounded-[2rem] p-7 sm:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(126,217,87,0.16),transparent_35%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="kicker border-green/20 bg-green/10 text-green">
                  <HandHeart className="h-3.5 w-3.5" />
                  {t('eyebrow')}
                </p>
                <h2 id="support-title" className="mt-5 max-w-[15ch] text-balance text-4xl font-semibold leading-[0.98] text-text sm:text-5xl">
                  {t('title')}
                </h2>
                <p className="mt-5 max-w-[60ch] text-sm leading-7 text-muted sm:text-base">{t('description')}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {(t.raw('impactPoints') as string[]).map((item) => (
                    <div key={item} className="section-shell p-4">
                      <HeartHandshake className="h-4 w-4 text-green" />
                      <p className="mt-3 text-sm font-semibold leading-7 text-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-shell rounded-[1.8rem] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green">{t('pixLabel')}</p>
                <p className="mt-4 text-2xl font-semibold text-text">{t('pixTitle')}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{t('pixDescription')}</p>

                <div className="section-shell mt-6 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{t('pixKeyLabel')}</p>
                  <p className="mt-3 break-all font-mono text-lg text-text">{links.pix}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <CopyPixButton
                    value={links.pix}
                    idleLabel={t('copy')}
                    successLabel={t('copied')}
                    errorLabel={t('copyError')}
                  />
                </div>

                <p className="mt-5 text-xs leading-6 text-muted">{t('note')}</p>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
