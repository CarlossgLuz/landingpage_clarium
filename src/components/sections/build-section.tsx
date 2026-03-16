import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

type BuildPoint = {
  title: string;
  description: string;
};

export function BuildSection() {
  const t = useTranslations('build');
  const points = t.raw('points') as BuildPoint[];

  return (
    <section className="section-wrap" aria-labelledby="build-title">
      <Container>
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10">
            <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

            <div className="grid gap-4 lg:grid-cols-4">
              {points.map((point, index) => (
                <Reveal key={point.title} delay={0.05 * index}>
                  <article className="section-shell panel-glow-cyan h-full p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">0{index + 1}</p>
                    <h3 id={index === 0 ? 'build-title' : undefined} className="mt-4 text-xl font-semibold text-text">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{point.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
