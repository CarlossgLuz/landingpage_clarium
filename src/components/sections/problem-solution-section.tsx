import { ArrowRight, CircleX, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

type ComparisonRow = {
  metric: string;
  generic: string;
  clarium: string;
};

export function ProblemSolutionSection() {
  const t = useTranslations('problem');
  const rows = t.raw('rows') as ComparisonRow[];

  return (
    <section id="comparison" className="section-wrap" aria-labelledby="comparison-title">
      <Container>
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10">
            <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <Reveal>
                <article className="section-shell panel-glow-red p-6">
                  <p className="kicker border-redSoft/20 bg-redSoft/10 text-redSoft">{t('genericLabel')}</p>
                  <h3 className="mt-5 text-3xl font-semibold text-text">{t('genericTitle')}</h3>
                  <p className="mt-3 max-w-[38ch] text-sm leading-7 text-muted">{t('genericDescription')}</p>

                  <div className="mt-8 space-y-4">
                    {(t.raw('genericPoints') as string[]).map((item) => (
                      <div key={item} className="glass-note flex items-start gap-3 bg-[rgba(4,8,20,0.56)]">
                        <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-redSoft" />
                        <p className="text-sm leading-7 text-muted">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.06}>
                <article className="hero-frame section-shell panel-glow-green p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="kicker border-green/20 bg-green/10 text-green">{t('clariumLabel')}</p>
                      <h3 id="comparison-title" className="mt-5 text-3xl font-semibold text-text">
                        {t('clariumTitle')}
                      </h3>
                    </div>
                    <div className="rounded-2xl border border-green/20 bg-green/10 px-4 py-3 text-right backdrop-blur">
                      <p className="text-3xl font-semibold text-green">{t('highlightValue')}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">{t('highlightLabel')}</p>
                    </div>
                  </div>

                  <p className="mt-3 max-w-[46ch] text-sm leading-7 text-muted">{t('clariumDescription')}</p>

                  <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(4,8,20,0.6)] backdrop-blur">
                    <div className="grid grid-cols-[1.05fr_0.85fr_0.85fr] border-b border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                      <span>{t('tableMetric')}</span>
                      <span>{t('tableGeneric')}</span>
                      <span>{t('tableClarium')}</span>
                    </div>
                    {rows.map((row) => (
                      <div
                        key={row.metric}
                        className="grid grid-cols-[1.05fr_0.85fr_0.85fr] items-center gap-4 border-b border-white/10 px-4 py-4 last:border-b-0"
                      >
                        <p className="text-sm font-semibold text-text">{row.metric}</p>
                        <p className="text-sm text-muted">{row.generic}</p>
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-green">
                          <ShieldCheck className="h-4 w-4" />
                          {row.clarium}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan/20 bg-cyan/10 p-4 backdrop-blur">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <p className="text-sm leading-7 text-muted">{t('footnote')}</p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
