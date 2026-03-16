import {
  ArrowDownRight,
  ArrowUp,
  BadgeCheck,
  Check,
  Download,
  Globe2,
  Github,
  Layers3,
  Linkedin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  WalletCards
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

import { AUTHOR_NAME, hasApkUrl, links, placeholderScreenIds } from '@/lib/site';

import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { Container } from './ui/container';
import { CopyPixButton } from './ui/copy-pix-button';
import { DownloadButton } from './ui/download-button';
import { Reveal } from './ui/reveal';
import { ScrollProgress } from './ui/scroll-progress';
import { ScrollShowcase } from './ui/scroll-showcase';

type HeroStat = {
  value: string;
  label: string;
  detail: string;
};

type ComparisonRow = {
  metric: string;
  generic: string;
  clarium: string;
};

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type BuildItem = {
  title: string;
  description: string;
};

type TechItem = {
  key: string;
  title: string;
  description: string;
};

type DownloadPoint = {
  value: string;
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function LandingPage({ locale }: { locale: string }) {
  const common = useTranslations('common');
  const hero = useTranslations('hero');
  const problem = useTranslations('problem');
  const features = useTranslations('features');
  const demo = useTranslations('demo');
  const build = useTranslations('build');
  const tech = useTranslations('tech');
  const download = useTranslations('download');
  const support = useTranslations('support');
  const author = useTranslations('author');
  const faq = useTranslations('faq');

  const ready = hasApkUrl();
  const proofs = (hero.raw('microProof') as string[]).slice(0, 4);
  const heroStats = (hero.raw('stats') as HeroStat[]).slice(0, 3);
  const showcaseStats = (hero.raw('showcaseStats') as Array<{ value: string; detail: string }>).slice(0, 3);
  const comparisonRows = problem.raw('rows') as ComparisonRow[];
  const genericPoints = (problem.raw('genericPoints') as string[]).slice(0, 4);
  const featureItems = (features.raw('items') as FeatureItem[]).slice(0, 6);
  const flowSteps = (demo.raw('flowSteps') as string[]).slice(0, 4);
  const buildPoints = (build.raw('points') as BuildItem[]).slice(0, 4);
  const techItems = (tech.raw('items') as TechItem[]).slice(0, 8);
  const downloadPoints = download.raw('points') as DownloadPoint[];
  const supportPoints = (support.raw('impactPoints') as string[]).slice(0, 3);
  const faqItems = (faq.raw('items') as FaqItem[]).slice(0, 5);

  return (
    <div className="site-shell min-h-screen bg-canvas text-text">
      <ScrollProgress />
      <a
        href="#content"
        className="focus-outline sr-only z-50 rounded-md bg-canvas px-3 py-2 text-sm text-text focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        {common('skipToContent')}
      </a>

      <Header />

      <main id="content" data-locale={locale} className="pb-16 pt-4 sm:pt-6">
        <section className="section-block overflow-hidden pb-6 pt-6 sm:pt-8" aria-labelledby="hero-title">
          <Container>
            <div className="hero-panel hero-panel-advanced px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="ambient-orb left-[-8rem] top-10 h-56 w-56 bg-green/10" />
              <div className="ambient-orb right-[-7rem] top-12 h-64 w-64 bg-cyan/10" />

              <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
                <div className="space-y-8">
                  <Reveal>
                    <div className="space-y-6">
                      <div className="hero-kicker-row">
                        <p className="eyebrow border-green/20 text-green">
                          <Sparkles className="h-3.5 w-3.5" />
                          {hero('eyebrow')}
                        </p>
                        <span className={`status-pill ${ready ? 'status-pill-live' : 'status-pill-wait'}`}>
                          <Smartphone className="h-3.5 w-3.5" />
                          {ready ? download('cta') : download('pending')}
                        </span>
                      </div>

                      <div className="space-y-5">
                        <h1
                          id="hero-title"
                          className="max-w-[10.5ch] text-balance text-[clamp(3.1rem,8vw,6.2rem)] font-semibold leading-[0.88]"
                        >
                          {hero('title')}
                        </h1>
                        <p className="max-w-[63ch] text-balance text-base leading-8 text-muted sm:text-lg">
                          {hero('subtitle')}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.06}>
                    <div className="hero-cta-stack">
                      <div className="flex flex-wrap gap-3">
                        <DownloadButton label={hero('downloadCta')} pendingLabel={hero('downloadPending')} className="min-w-[248px]" />
                        <a href="#product" className="button-secondary">
                          <ArrowDownRight className="h-4 w-4" />
                          {hero('exploreCta')}
                        </a>
                      </div>

                      <div className="hero-signal-card">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{hero('installReasonTitle')}</p>
                          <p className="mt-2 text-sm leading-7 text-muted">
                            {ready ? download('statusReady') : download('statusWaiting')}
                          </p>
                        </div>
                        <div className="hero-signal-metric">
                          <span>{heroStats[0]?.value}</span>
                          <p>{heroStats[0]?.label}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div className="flex flex-wrap gap-2">
                      {proofs.map((item) => (
                        <span key={item} className="soft-chip">
                          <ShieldCheck className="h-3.5 w-3.5 text-green" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={0.14}>
                    <div className="grid gap-4 md:grid-cols-3">
                      {heroStats.map((item, index) => (
                        <StatCard
                          key={item.value}
                          value={item.value}
                          label={item.label}
                          detail={item.detail}
                          tone={index === 1 ? 'cyan' : index === 2 ? 'neutral' : 'green'}
                        />
                      ))}
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={0.08}>
                  <div className="hero-showcase-wrap">
                    <div className="hero-floating-card hero-floating-card-top">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green">{hero('snapshotTitle')}</p>
                      <p className="mt-2 text-2xl font-semibold text-text">{showcaseStats[0]?.value}</p>
                      <p className="mt-1 text-xs leading-5 text-muted">{showcaseStats[0]?.detail}</p>
                    </div>

                    <div className="hero-floating-card hero-floating-card-bottom">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{hero('installFlowTitle')}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {downloadPoints[0]?.value} oficial, CTA direto e reforco visual para nao deixar duvida sobre como baixar.
                      </p>
                    </div>

                    <ScrollShowcase />
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-block pt-0" aria-label="Clarium highlights">
          <Container>
            <Reveal>
              <div className="proof-band">
                <ProofBandItem
                  title={problem('clariumTitle')}
                  description={problem('clariumDescription')}
                  icon={<BadgeCheck className="h-4 w-4 text-green" />}
                />
                <ProofBandItem
                  title={features('promoTitle')}
                  description={features('promoDescription')}
                  icon={<Layers3 className="h-4 w-4 text-cyan" />}
                />
                <ProofBandItem
                  title={download('availability')}
                  description={support('note')}
                  icon={<Download className="h-4 w-4 text-amber" />}
                />
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="comparison" className="section-block" aria-labelledby="comparison-title">
          <Container>
            <Reveal>
              <SectionHeader eyebrow={problem('eyebrow')} title={problem('title')} description={problem('description')} />
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <Reveal>
                <article className="glass-panel rounded-[2rem] p-6 sm:p-7">
                  <p className="eyebrow border-redSoft/20 text-redSoft">{problem('genericLabel')}</p>
                  <h2 className="mt-5 max-w-[12ch] text-balance text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.94] text-text">
                    {problem('genericTitle')}
                  </h2>
                  <p className="mt-4 text-sm leading-8 text-muted">{problem('genericDescription')}</p>

                  <div className="mt-7 grid gap-3">
                    {genericPoints.map((item) => (
                      <div key={item} className="comparison-warning-row">
                        <span className="comparison-warning-dot" />
                        <p className="text-sm leading-7 text-text">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.06}>
                <article className="glass-panel glass-panel-strong comparison-card rounded-[2rem] p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div className="space-y-3">
                      <p className="eyebrow border-green/20 text-green">{problem('clariumLabel')}</p>
                      <h3 id="comparison-title" className="max-w-[14ch] text-balance text-4xl font-semibold leading-[0.92] text-text sm:text-[3.3rem]">
                        {problem('clariumTitle')}
                      </h3>
                    </div>

                    <div className="comparison-highlight">
                      <p className="metric-value text-green">{problem('highlightValue')}</p>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{problem('highlightLabel')}</p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-[66ch] text-sm leading-8 text-muted">{problem('clariumDescription')}</p>

                  <div className="mt-8 grid gap-4">
                    {comparisonRows.map((row) => (
                      <div key={row.metric} className="comparison-row">
                        <p className="text-sm font-semibold text-text">{row.metric}</p>
                        <p className="text-sm leading-7 text-muted">{row.generic}</p>
                        <p className="inline-flex items-center gap-2 text-sm font-semibold leading-7 text-green">
                          <Check className="h-4 w-4 shrink-0" />
                          {row.clarium}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="comparison-footer-note">
                    <p>{problem('footnote')}</p>
                    <a href="#download" className="button-secondary">
                      <Download className="h-4 w-4" />
                      {download('cta')}
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="product" className="section-block" aria-labelledby="product-title">
          <Container>
            <Reveal>
              <SectionHeader eyebrow={demo('eyebrow')} title={demo('title')} description={demo('description')} />
            </Reveal>

            <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
              <Reveal>
                <div className="space-y-6">
                  <article className="glass-panel rounded-[2rem] p-6 sm:p-7">
                    <p className="eyebrow border-cyan/20 text-cyan">{demo('flowEyebrow')}</p>
                    <h2 id="product-title" className="mt-5 max-w-[13ch] text-balance text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.94] text-text">
                      {demo('flowTitle')}
                    </h2>
                    <p className="mt-4 text-sm leading-8 text-muted">{demo('flowDescription')}</p>

                    <div className="story-rail mt-7">
                      {flowSteps.map((item, index) => (
                        <div key={item} className="story-step">
                          <span className="story-step-index">0{index + 1}</span>
                          <p className="text-sm leading-7 text-text">{item}</p>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="glass-panel rounded-[2rem] p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow border-green/20 text-green">{features('promoEyebrow')}</p>
                        <h3 className="mt-5 max-w-[13ch] text-balance text-3xl font-semibold leading-[0.96] text-text">
                          {features('promoTitle')}
                        </h3>
                      </div>
                      <div className="feature-promo-value">{features('promoValue')}</div>
                    </div>

                    <p className="mt-4 text-sm leading-8 text-muted">{features('promoDescription')}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="#download" className="button-primary">
                        <Download className="h-4 w-4" />
                        {download('cta')}
                      </a>
                      <a href="#faq" className="button-secondary">
                        <ArrowDownRight className="h-4 w-4" />
                        {download('faqCta')}
                      </a>
                    </div>
                  </article>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="grid gap-4 md:grid-cols-2">
                  {featureItems.map((item, index) => (
                    <FeatureCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      accent={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'cyan' : 'amber'}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="section-block" aria-labelledby="screens-title">
          <Container>
            <Reveal>
              <div className="section-header">
                <div className="space-y-4">
                  <p className="eyebrow border-cyan/20 text-cyan">{hero('showcaseLabel')}</p>
                  <h2 id="screens-title" className="section-title text-text">
                    {hero('showcaseTitle')}
                  </h2>
                </div>
                <p className="section-copy">{demo('footnote')}</p>
              </div>
            </Reveal>

            <div className="screen-grid">
              {placeholderScreenIds.map((id, index) => (
                <Reveal key={id} delay={index * 0.04}>
                  <ScreenCard
                    src={`/screenshots/${id}.svg`}
                    alt={demo('placeholderAlt', { screen: demo(`screens.${id}.title`) })}
                    title={demo(`screens.${id}.title`)}
                    subtitle={demo(`screens.${id}.subtitle`)}
                    priority={index < 2}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-block" aria-labelledby="build-title">
          <Container>
            <Reveal>
              <SectionHeader eyebrow={build('eyebrow')} title={build('title')} description={build('description')} />
            </Reveal>

            <div className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <div className="grid gap-4 md:grid-cols-2">
                  {buildPoints.map((item, index) => (
                    <article key={item.title} className={`build-card ${index % 2 === 0 ? 'build-card-green' : 'build-card-cyan'}`}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">0{index + 1}</p>
                      <h3 className="mt-4 text-xl font-semibold text-text">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                    </article>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <article className="glass-panel glass-panel-strong rounded-[2rem] p-6 sm:p-7">
                  <p className="eyebrow border-cyan/20 text-cyan">{tech('eyebrow')}</p>
                  <h3 id="build-title" className="mt-5 max-w-[15ch] text-balance text-3xl font-semibold leading-[0.96] text-text sm:text-4xl">
                    {tech('title')}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-muted">{tech('description')}</p>

                  <div className="mt-7 grid gap-3">
                    {techItems.map((item) => (
                      <div key={item.key} className="tech-row">
                        <div className="tech-icon">{getTechIcon(item.key)}</div>
                        <div>
                          <p className="text-sm font-semibold text-text">{item.title}</p>
                          <p className="mt-1 text-sm leading-7 text-muted">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="download" className="section-block" aria-labelledby="download-title">
          <Container>
            <Reveal>
              <article className="glass-panel glass-panel-strong download-panel rounded-[2.2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
                <div className="grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
                  <div className="space-y-6">
                    <div className="download-heading-row">
                      <div>
                        <p className="eyebrow border-green/20 text-green">
                          <Download className="h-3.5 w-3.5" />
                          Android APK
                        </p>
                        <h2
                          id="download-title"
                          className="mt-5 max-w-[12ch] text-balance text-[clamp(2.3rem,4.4vw,4.5rem)] font-semibold leading-[0.9] text-text"
                        >
                          {download('title')}
                        </h2>
                      </div>

                      <div className={`download-state-card ${ready ? 'download-state-card-live' : 'download-state-card-wait'}`}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">download status</p>
                        <p className="mt-3 text-2xl font-semibold text-text">{ready ? 'direto' : 'espera'}</p>
                        <p className="mt-2 text-xs leading-6 text-muted">{ready ? download('statusReady') : download('statusWaiting')}</p>
                      </div>
                    </div>

                    <p className="max-w-[62ch] text-base leading-8 text-muted">{download('description')}</p>

                    <div className="flex flex-wrap gap-3">
                      <DownloadButton label={download('cta')} pendingLabel={download('pending')} className="min-w-[240px]" />
                      <a href="#faq" className="button-secondary">
                        <ArrowDownRight className="h-4 w-4" />
                        {download('faqCta')}
                      </a>
                    </div>

                    <div className="download-command-bar">
                      <div className="download-command-copy">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green">{hero('installFlowTitle')}</p>
                        <p className="mt-2 text-sm leading-7 text-muted">{download('availability')}</p>
                      </div>
                      <div className="download-command-badge">
                        <Download className="h-4 w-4 text-green" />
                        <span>{ready ? download('cta') : download('pending')}</span>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      {downloadPoints.map((point, index) => (
                        <DownloadMetricCard
                          key={point.value}
                          value={point.value}
                          label={point.label}
                          accent={index === 0 ? 'green' : index === 1 ? 'cyan' : 'amber'}
                        />
                      ))}
                    </div>
                  </div>

                  <div id="support" className="space-y-4">
                    <article className="support-card">
                      <p className="eyebrow border-green/20 text-green">{support('eyebrow')}</p>
                      <h3 className="mt-5 max-w-[14ch] text-balance text-3xl font-semibold leading-[0.96] text-text">
                        {support('title')}
                      </h3>
                      <p className="mt-4 text-sm leading-8 text-muted">{support('description')}</p>

                      <div className="mt-6 grid gap-3">
                        {supportPoints.map((item) => (
                          <div key={item} className="support-point">
                            <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                            <p className="text-sm leading-7 text-text">{item}</p>
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className="support-card">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{support('pixTitle')}</p>
                      <p className="mt-3 text-sm leading-7 text-muted">{support('pixDescription')}</p>
                      <div className="support-pix-box">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{support('pixKeyLabel')}</p>
                        <p className="mt-3 break-all font-mono text-lg text-text">{links.pix}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <CopyPixButton value={links.pix} idleLabel={support('copy')} successLabel={support('copied')} errorLabel={support('copyError')} />
                      </div>
                    </article>
                  </div>
                </div>
              </article>
            </Reveal>
          </Container>
        </section>

        <section id="faq" className="section-block" aria-labelledby="faq-title">
          <Container>
            <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
              <Reveal>
                <div className="space-y-6">
                  <SectionHeader eyebrow={faq('eyebrow')} title={faq('title')} description={faq('description')} compact />

                  <article className="glass-panel rounded-[2rem] p-6 sm:p-7">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{author('eyebrow')}</p>
                    <h3 className="mt-4 text-3xl font-semibold leading-[0.96] text-text">{author('title')}</h3>
                    <p className="mt-4 text-sm leading-8 text-muted">{author('description', { name: AUTHOR_NAME })}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="button-secondary">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a href={links.github} target="_blank" rel="noopener noreferrer" className="button-secondary">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </article>
                </div>
              </Reveal>

              <div className="grid gap-3">
                {faqItems.map((item, index) => (
                  <Reveal key={item.question} delay={index * 0.03}>
                    <details className="faq-item faq-card group" open={index === 0}>
                      <summary
                        id={index === 0 ? 'faq-title' : undefined}
                        className="focus-outline flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-text"
                      >
                        <span>{item.question}</span>
                        <span className="mt-1 text-cyan transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 max-w-[68ch] text-sm leading-8 text-muted">{item.answer}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <a href="#content" className="scroll-top" aria-label={common('scrollUp')}>
          <ArrowUp className="h-4 w-4" />
        </a>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  compact = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={`section-header ${compact ? 'section-header-compact' : ''}`}>
      <div className="space-y-4">
        <p className="eyebrow border-cyan/20 text-cyan">{eyebrow}</p>
        <h2 className="section-title text-text">{title}</h2>
      </div>
      <p className="section-copy">{description}</p>
    </div>
  );
}

function StatCard({
  value,
  label,
  detail,
  tone
}: {
  value: string;
  label: string;
  detail: string;
  tone: 'green' | 'cyan' | 'neutral';
}) {
  return (
    <article className={`stat-card ${tone === 'green' ? 'stat-card-green' : tone === 'cyan' ? 'stat-card-cyan' : 'stat-card-neutral'}`}>
      <p className="metric-value text-text">{value}</p>
      <p className="mt-3 text-sm font-semibold text-text">{label}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{detail}</p>
    </article>
  );
}

function ProofBandItem({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <article className="proof-band-item">
      <div className="proof-band-icon">{icon}</div>
      <div>
        <h3 className="text-sm font-semibold text-text">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}

function FeatureCard({
  title,
  description,
  icon,
  accent
}: {
  title: string;
  description: string;
  icon: string;
  accent: 'green' | 'cyan' | 'amber';
}) {
  return (
    <article className={`feature-card feature-card-${accent}`}>
      <div className={`feature-card-icon feature-card-icon-${accent}`}>{getFeatureIcon(icon)}</div>
      <h3 className="mt-5 text-xl font-semibold text-text">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}

function ScreenCard({
  src,
  alt,
  title,
  subtitle,
  priority
}: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  priority?: boolean;
}) {
  return (
    <article className="screen-card">
      <div className="screen-card-frame">
        <div className="screen-card-label">app preview</div>
        <Image src={src} alt={alt} width={520} height={1040} priority={priority} className="screen-card-image h-auto w-full object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted">{subtitle}</p>
      </div>
    </article>
  );
}

function DownloadMetricCard({
  value,
  label,
  accent
}: {
  value: string;
  label: string;
  accent: 'green' | 'cyan' | 'amber';
}) {
  return (
    <article className="download-metric-card">
      <p className="text-4xl font-semibold leading-none text-text">{value}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{label}</p>
      <div className="metric-line mt-5 h-1.5 rounded-full bg-white/6">
        <div
          className={`h-full rounded-full animate-pulseLine ${
            accent === 'green' ? 'w-[92%] bg-green' : accent === 'cyan' ? 'w-[80%] bg-cyan' : 'w-full bg-amber'
          }`}
        />
      </div>
    </article>
  );
}

function getFeatureIcon(icon: string) {
  const Icon = (() => {
    switch (icon) {
      case 'spark':
        return Sparkles;
      case 'chart':
        return TrendingUp;
      case 'layers':
        return Layers3;
      case 'moon':
        return Star;
      case 'globe':
        return Globe2;
      case 'shield':
        return ShieldCheck;
      default:
        return BadgeCheck;
    }
  })();

  return <Icon className="h-5 w-5" />;
}

function getTechIcon(key: string) {
  const Icon = (() => {
    switch (key) {
      case 'next':
        return Sparkles;
      case 'typescript':
        return BadgeCheck;
      case 'tailwind':
        return Layers3;
      case 'motion':
        return TrendingUp;
      case 'intl':
      case 'multilingual':
        return Globe2;
      case 'privacy':
        return ShieldCheck;
      case 'architecture':
        return WalletCards;
      case 'seo':
      default:
        return Star;
    }
  })();

  return <Icon className="h-4 w-4 text-cyan" />;
}
