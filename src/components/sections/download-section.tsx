import { Download, ShieldCheck, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { hasApkUrl } from '@/lib/site';

import { DownloadButton } from '../ui/download-button';
import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';

type DownloadPoint = {
  value: string;
  label: string;
};

export function DownloadSection() {
  const t = useTranslations('download');
  const points = t.raw('points') as DownloadPoint[];

  return (
    <section id="download" className="section-wrap" aria-labelledby="download-title">
      <Container>
        <Reveal>
          <article className="hero-frame section-shell panel-glow-green rounded-[2.2rem] p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(126,217,87,0.18),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(84,165,255,0.18),transparent_35%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="kicker border-green/20 bg-green/10 text-green">
                  <Smartphone className="h-3.5 w-3.5" />
                  Android APK
                </p>
                <h2 id="download-title" className="mt-5 max-w-[14ch] text-balance text-4xl font-semibold leading-[0.98] text-text sm:text-5xl">
                  {t('title')}
                </h2>
                <p className="mt-5 max-w-[58ch] text-sm leading-7 text-muted sm:text-base">{t('description')}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <DownloadButton label={t('cta')} pendingLabel={t('pending')} className="min-w-[220px]" />
                  <a href="#faq" className="glass-button">
                    <Download className="h-4 w-4" />
                    {t('faqCta')}
                  </a>
                </div>

                <div className="glass-note mt-5 inline-flex items-start gap-3 bg-[rgba(4,8,20,0.56)]">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>{t('availability')}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {points.map((point, index) => (
                  <div key={point.value} className="section-shell p-5">
                    <p className="text-4xl font-semibold leading-none text-text">{point.value}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{point.label}</p>
                    <div className="metric-line mt-4 h-1.5 rounded-full bg-white/6">
                      <div
                        className={`h-full rounded-full ${index === 0 ? 'w-[92%] bg-green' : index === 1 ? 'w-[80%] bg-cyan' : 'w-[100%] bg-amber'} animate-pulseLine`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative mt-6 text-xs leading-6 text-muted">
              {hasApkUrl() ? t('statusReady') : t('statusWaiting')}
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
