import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { AUTHOR_NAME, links } from '@/lib/site';

import { Container } from '../ui/container';
import { Reveal } from '../ui/reveal';

export function AuthorSection() {
  const t = useTranslations('author');

  return (
    <section className="py-16" aria-labelledby="author-title">
      <Container>
        <Reveal>
          <article className="surface rounded-2xl p-6 sm:p-7">
            <h2 id="author-title" className="text-2xl font-semibold text-text sm:text-3xl">
              {t('title')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">{t('description', { name: AUTHOR_NAME })}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-outline inline-flex items-center gap-2 rounded-xl border border-border bg-panel px-4 py-2 text-sm font-semibold text-text transition hover:border-green/50 hover:text-green"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-outline inline-flex items-center gap-2 rounded-xl border border-border bg-panel px-4 py-2 text-sm font-semibold text-text transition hover:border-cyan/60 hover:text-cyan"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
