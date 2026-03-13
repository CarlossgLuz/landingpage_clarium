import { ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { DownloadButton } from '../ui/download-button';
import { Container } from '../ui/container';
import { DeviceMockup } from '../ui/device-mockup';
import { Reveal } from '../ui/reveal';

export function HeroSection() {
  const t = useTranslations('hero');
  const indicators = t.raw('indicators') as string[];

  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pt-18 lg:pb-20 lg:pt-20" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 opacity-25 grid-overlay" />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-green/25 bg-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-green">
              <Sparkles className="h-3.5 w-3.5" />
              {t('eyebrow')}
            </p>
            <h1 id="hero-title" className="text-balance text-4xl font-semibold leading-[1.02] text-text sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-base text-muted sm:text-lg">{t('subtitle')}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <DownloadButton label={t('downloadCta')} pendingLabel={t('downloadPending')} />
              <a
                href="#features"
                className="focus-outline inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-panel px-5 py-3 text-sm font-semibold text-text transition hover:border-cyan/60 hover:text-cyan"
              >
                <ArrowDown className="h-4 w-4" />
                {t('exploreCta')}
              </a>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {indicators.map((item, index) => (
                <p
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-panel/60 px-3 py-2 text-sm text-muted"
                >
                  <ShieldCheck className={`h-4 w-4 ${index % 2 === 0 ? 'text-green' : 'text-cyan'}`} />
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-[430px]">
              <div className="absolute -left-8 top-16 h-24 w-24 rounded-full bg-green/30 blur-2xl" />
              <div className="absolute -right-8 bottom-20 h-24 w-24 rounded-full bg-cyan/30 blur-2xl" />
              <DeviceMockup
                src="/screenshots/overview.svg"
                alt={t('mockupAlt')}
                title={t('mockupTitle')}
                subtitle={t('mockupSubtitle')}
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
