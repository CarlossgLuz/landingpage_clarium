import { ArrowDownRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { DownloadButton } from '../ui/download-button';
import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { ScrollShowcase } from '../ui/scroll-showcase';

type HeroStat = {
  value: string;
  label: string;
  detail: string;
};

export function HeroSection() {
  const t = useTranslations('hero');
  const proofs = t.raw('microProof') as string[];
  const stats = t.raw('stats') as HeroStat[];

  return (
    <section className="section-wrap relative overflow-hidden pb-8 pt-4 sm:pb-10 sm:pt-6 lg:pb-12" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.1),rgba(4,8,20,0.74))]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 grid-overlay" />
      <Container className="relative">
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute -left-16 top-16 h-44 w-44 rounded-full bg-green/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
            <div className="relative grid items-start gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:gap-12">
              <div className="pt-2">
                <Reveal>
                  <p className="kicker border-green/20 bg-green/10 text-green">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t('eyebrow')}
                  </p>
                  <h1
                    id="hero-title"
                    className="mt-5 max-w-[12ch] text-balance text-5xl font-semibold leading-[0.92] text-text sm:text-6xl lg:text-7xl"
                  >
                    {t('title')}
                  </h1>
                  <p className="mt-6 max-w-[62ch] text-balance text-base leading-8 text-muted sm:text-lg">{t('subtitle')}</p>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {proofs.map((item) => (
                      <span key={item} className="glass-pill">
                        <ShieldCheck className="h-3.5 w-3.5 text-green" />
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <DownloadButton label={t('downloadCta')} pendingLabel={t('downloadPending')} className="min-w-[220px]" />
                    <a href="#comparison" className="glass-button">
                      <ArrowDownRight className="h-4 w-4" />
                      {t('exploreCta')}
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className="glass-note mt-7 max-w-[58ch]">
                    <p className="text-xs leading-6 text-muted">{t('note')}</p>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {stats.map((item, index) => (
                    <Reveal key={item.value} delay={0.08 + index * 0.04}>
                      <article className="section-shell panel-glow-cyan h-full p-5">
                        <p className="text-3xl font-semibold leading-none text-text sm:text-4xl">{item.value}</p>
                        <p className="mt-3 text-sm font-semibold text-text">{item.label}</p>
                        <p className="mt-2 text-xs leading-6 text-muted">{item.detail}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={0.12} className="xl:pl-4">
                <ScrollShowcase />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
