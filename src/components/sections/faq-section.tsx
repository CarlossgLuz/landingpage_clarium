import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection() {
  const t = useTranslations('faq');
  const items = t.raw('items') as FaqItem[];

  return (
    <section id="faq" className="py-16" aria-labelledby="faq-title">
      <Container>
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <div className="space-y-3">
          {items.map((item, index) => (
            <Reveal key={item.question} delay={0.03 * index}>
              <details className="surface group rounded-2xl p-5">
                <summary
                  id={index === 0 ? 'faq-title' : undefined}
                  className="focus-outline cursor-pointer list-none text-base font-semibold text-text"
                >
                  {item.question}
                </summary>
                <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
