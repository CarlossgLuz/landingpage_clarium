import { useTranslations } from 'next-intl';

import { placeholderScreenIds } from '@/lib/site';

import { Container } from '../ui/container';
import { DeviceMockup } from '../ui/device-mockup';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

export function DemoSection() {
  const t = useTranslations('demo');

  return (
    <section id="demo" className="section-wrap" aria-labelledby="demo-title">
      <Container>
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10">
            <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal>
                <article className="section-shell panel-glow-cyan p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{t('flowEyebrow')}</p>
                  <h3 id="demo-title" className="mt-4 text-3xl font-semibold text-text">
                    {t('flowTitle')}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{t('flowDescription')}</p>

                  <div className="mt-8 space-y-3">
                    {(t.raw('flowSteps') as string[]).map((item, index) => (
                      <div key={item} className="glass-note bg-[rgba(4,8,20,0.56)]">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted">0{index + 1}</p>
                        <p className="mt-2 text-sm font-semibold leading-7 text-text">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {placeholderScreenIds.map((id, index) => (
                  <Reveal key={id} delay={0.05 * index}>
                    <DeviceMockup
                      src={`/screenshots/${id}.svg`}
                      alt={t('placeholderAlt', { screen: t(`screens.${id}.title`) })}
                      title={t(`screens.${id}.title`)}
                      subtitle={t(`screens.${id}.subtitle`)}
                      className={index === 1 ? 'sm:translate-y-10' : index === 2 ? 'sm:-translate-y-8' : ''}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-6 rounded-[1.5rem] border border-cyan/20 bg-cyan/10 px-4 py-3 text-xs leading-6 text-muted backdrop-blur">
                {t('footnote')}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
