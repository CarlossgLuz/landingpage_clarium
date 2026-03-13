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
    <section className="py-16" aria-labelledby="build-title">
      <Container>
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <div className="grid gap-4 md:grid-cols-2">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={0.04 * index}>
              <article className="surface rounded-2xl p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">0{index + 1}</p>
                <h3 id={index === 0 ? 'build-title' : undefined} className="text-lg font-semibold text-text">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
