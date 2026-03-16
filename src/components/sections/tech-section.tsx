import {
  AppWindow,
  CloudCog,
  Code2,
  Globe,
  Languages,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';
import { SectionTitle } from '../ui/section-title';

type TechItem = {
  key: string;
  title: string;
  description: string;
};

const icons: Record<string, typeof Sparkles> = {
  next: AppWindow,
  typescript: Code2,
  tailwind: Palette,
  motion: Zap,
  intl: Languages,
  seo: Search,
  privacy: ShieldCheck,
  architecture: CloudCog,
  multilingual: Globe
};

export function TechSection() {
  const t = useTranslations('tech');
  const items = t.raw('items') as TechItem[];

  return (
    <section id="tech" className="section-wrap" aria-labelledby="tech-title">
      <Container>
        <div className="section-band">
          <div className="section-band-inner px-6 py-8 sm:px-8 sm:py-10">
            <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => {
                const Icon = icons[item.key] ?? Sparkles;

                return (
                  <Reveal key={item.title} delay={0.03 * index}>
                    <article className="section-shell panel-glow-cyan p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex rounded-2xl border border-white/10 bg-panel px-3 py-3 text-cyan">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">0{index + 1}</span>
                      </div>
                      <h3 id={index === 0 ? 'tech-title' : undefined} className="mt-5 text-lg font-semibold text-text">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
