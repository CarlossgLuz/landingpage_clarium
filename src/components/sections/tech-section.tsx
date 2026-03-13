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
    <section id="tech" className="py-16" aria-labelledby="tech-title">
      <Container>
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[item.key] ?? Sparkles;

            return (
              <Reveal key={item.title} delay={0.03 * index}>
                <article className="surface rounded-2xl p-5">
                  <Icon className="h-5 w-5 text-cyan" />
                  <h3 id={index === 0 ? 'tech-title' : undefined} className="mt-3 text-base font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
