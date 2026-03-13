import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

type FeatureItem = {
  title: string;
  description: string;
};

export function FeaturesSection() {
  const t = useTranslations('features');
  const items = t.raw('items') as FeatureItem[];

  return (
    <section id="features" className="py-16" aria-labelledby="features-title">
      <Container>
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={0.03 * index}>
              <article className="surface rounded-2xl p-5">
                <h3 id={index === 0 ? 'features-title' : undefined} className="text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
