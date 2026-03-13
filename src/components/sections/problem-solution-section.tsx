import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

export function ProblemSolutionSection() {
  const t = useTranslations('problem');
  const problemItems = t.raw('problemItems') as string[];
  const solutionItems = t.raw('solutionItems') as string[];

  return (
    <section className="py-16" aria-labelledby="problem-title">
      <Container>
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="surface rounded-2xl p-6">
              <div className="mb-4 inline-flex rounded-lg border border-red-400/20 bg-red-400/10 p-2 text-red-200">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-text">{t('problemTitle')}</h3>
              <ul className="mt-4 space-y-2">
                {problemItems.map((item) => (
                  <li key={item} className="rounded-lg border border-white/8 bg-canvas/70 px-3 py-2 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="surface rounded-2xl p-6">
              <div className="mb-4 inline-flex rounded-lg border border-green/25 bg-green/10 p-2 text-green">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 id="problem-title" className="text-xl font-semibold text-text">
                {t('solutionTitle')}
              </h3>
              <ul className="mt-4 space-y-2">
                {solutionItems.map((item) => (
                  <li key={item} className="rounded-lg border border-white/8 bg-canvas/70 px-3 py-2 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
