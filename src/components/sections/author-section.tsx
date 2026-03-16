import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { AUTHOR_NAME, links } from '@/lib/site';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';

export function AuthorSection() {
  const t = useTranslations('author');

  return (
    <section className="section-wrap" aria-labelledby="author-title">
      <Container>
        <Reveal>
          <article className="section-band">
            <div className="section-band-inner px-7 py-7">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{t('eyebrow')}</p>
                  <h2 id="author-title" className="mt-4 text-3xl font-semibold text-text sm:text-4xl">
                    {t('title')}
                  </h2>
                  <p className="mt-4 max-w-[64ch] text-sm leading-7 text-muted">{t('description', { name: AUTHOR_NAME })}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="glass-button">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="glass-button">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
