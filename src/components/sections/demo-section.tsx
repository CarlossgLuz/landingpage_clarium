import { useTranslations } from 'next-intl';

import { placeholderScreenIds } from '@/lib/site';

import { Container } from '../ui/container';
import { DeviceMockup } from '../ui/device-mockup';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

export function DemoSection() {
  const t = useTranslations('demo');

  return (
    <section id="demo" className="py-16" aria-labelledby="demo-title">
      <Container>
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} center />

        <div className="grid gap-5 sm:grid-cols-2">
          {placeholderScreenIds.map((id, index) => (
            <Reveal key={id} delay={0.03 * index}>
              <DeviceMockup
                src={`/screenshots/${id}.svg`}
                alt={t('placeholderAlt', { screen: t(`screens.${id}.title`) })}
                title={t(`screens.${id}.title`)}
                subtitle={t(`screens.${id}.subtitle`)}
                className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              />
            </Reveal>
          ))}
        </div>

        <p id="demo-title" className="mt-5 text-center text-sm text-muted">
          {t('footnote')}
        </p>
      </Container>
    </section>
  );
}
