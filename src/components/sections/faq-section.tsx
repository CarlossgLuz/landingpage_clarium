import { ChevronDown } from 'lucide-react';
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
    <section id="faq" className="section-wrap" aria-labelledby="faq-title">
      <Container>
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10">
            <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

            <div className="space-y-3">
              {items.map((item, index) => (
                <Reveal key={item.question} delay={0.03 * index}>
                  <details className="section-shell group p-5">
                    <summary
                      id={index === 0 ? 'faq-title' : undefined}
                      className="focus-outline flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-text"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-muted">{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
