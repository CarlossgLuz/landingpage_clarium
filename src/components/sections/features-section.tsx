import { BarChart3, Globe2, Layers3, MoonStar, Shield, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const icons = {
  chart: BarChart3,
  spark: Sparkles,
  layers: Layers3,
  moon: MoonStar,
  globe: Globe2,
  shield: Shield
};

export function FeaturesSection() {
  const t = useTranslations('features');
  const items = t.raw('items') as FeatureItem[];

  return (
    <section id="features" className="section-wrap" aria-labelledby="features-title">
      <Container>
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10">
            <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <article className="hero-frame section-shell panel-glow-green p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green">{t('promoEyebrow')}</p>
                  <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
                    <div>
                      <p className="text-5xl font-semibold leading-none text-text sm:text-6xl">{t('promoValue')}</p>
                      <h3 id="features-title" className="mt-4 max-w-[16ch] text-3xl font-semibold leading-tight text-text">
                        {t('promoTitle')}
                      </h3>
                    </div>
                    <div className="glass-note max-w-[26ch]">
                      <p className="text-sm leading-7 text-muted">{t('promoDescription')}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {(t.raw('promoPoints') as string[]).map((item, index) => (
                      <div key={item} className="section-shell p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted">0{index + 1}</p>
                        <p className="mt-3 text-sm font-semibold leading-7 text-text">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item, index) => {
                  const Icon = icons[item.icon as keyof typeof icons] ?? Sparkles;

                  return (
                    <Reveal key={item.title} delay={0.04 * index}>
                      <article className="section-shell panel-glow-cyan p-5">
                        <div className="inline-flex rounded-2xl border border-white/10 bg-panel px-3 py-3 text-cyan">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-text">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
