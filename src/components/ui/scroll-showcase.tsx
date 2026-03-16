'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

type ShowcaseItem = {
  src: string;
  alt: string;
  className: string;
};

const items: ShowcaseItem[] = [
  {
    src: '/screenshots/overview.svg',
    alt: 'Clarium home screen',
    className: 'left-0 top-10 w-[42%] md:w-[34%]'
  },
  {
    src: '/screenshots/transactions.svg',
    alt: 'Clarium insights screen',
    className: 'left-[30%] top-0 z-20 w-[46%] md:w-[38%]'
  },
  {
    src: '/screenshots/settings.svg',
    alt: 'Clarium planning screen',
    className: 'right-0 top-16 w-[40%] md:w-[32%]'
  },
  {
    src: '/screenshots/categories.svg',
    alt: 'Clarium launch screen',
    className: 'left-[18%] bottom-0 z-10 w-[50%] md:w-[40%]'
  }
];

export function ScrollShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const t = useTranslations('hero');
  const showcaseStats = t.raw('showcaseStats') as Array<{ value: string; detail: string }>;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const yA = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -50]);
  const yB = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 70]);
  const yC = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -28]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0.98, 1.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 1], reduced ? [1, 1, 1] : [0.6, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="section-shell panel-glow-cyan relative mx-auto h-[680px] w-full max-w-[660px] p-5 shadow-blue sm:h-[720px] md:h-[760px]"
    >
      <div className="data-grid absolute inset-0 opacity-25" />
      <div className="absolute -left-14 top-24 h-40 w-40 rounded-full bg-green/20 blur-3xl" />
      <div className="absolute -right-12 top-12 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute inset-[18px] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(4,8,20,0.02))]" />

      <motion.div
        style={{ rotate }}
        className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted backdrop-blur"
      >
        {t('showcaseLabel')}
      </motion.div>

      <motion.div
        style={{ y: yA }}
        className="absolute left-5 top-5 max-w-[170px] rounded-[1.3rem] border border-white/10 bg-[rgba(7,16,28,0.68)] p-4 backdrop-blur-xl"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan">{t('showcaseTitle')}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{showcaseStats[0]?.detail}</p>
      </motion.div>

      <motion.div
        style={{ y: yC }}
        className="absolute bottom-36 right-5 z-30 max-w-[170px] rounded-[1.3rem] border border-white/10 bg-[rgba(7,16,28,0.68)] p-4 backdrop-blur-xl"
      >
        <p className="text-2xl font-semibold text-text">{showcaseStats[1]?.value}</p>
        <p className="mt-1 text-xs leading-5 text-muted">{showcaseStats[1]?.detail}</p>
      </motion.div>

      <motion.div style={{ y: yA }} className={`absolute ${items[0].className}`}>
        <PhoneShot src={items[0].src} alt={items[0].alt} priority />
      </motion.div>
      <motion.div style={{ y: yB }} className={`absolute ${items[1].className}`}>
        <PhoneShot src={items[1].src} alt={items[1].alt} priority />
      </motion.div>
      <motion.div style={{ y: yC }} className={`absolute ${items[2].className}`}>
        <PhoneShot src={items[2].src} alt={items[2].alt} />
      </motion.div>
      <motion.div style={{ y: yB }} className={`absolute ${items[3].className}`}>
        <PhoneShot src={items[3].src} alt={items[3].alt} />
      </motion.div>

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-white/10 bg-[rgba(4,8,20,0.76)] p-4 backdrop-blur-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green">{t('showcaseTitle')}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {showcaseStats.map((item) => (
            <div key={item.value}>
              <p className="text-xl font-semibold text-text">{item.value}</p>
              <p className="text-xs text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PhoneShot({
  src,
  alt,
  priority = false
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="hero-frame overflow-hidden rounded-[2rem] bg-panel/90 p-2 phone-shadow">
      <div className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-canvas" />
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-canvas">
        <Image src={src} alt={alt} width={420} height={860} priority={priority} className="h-auto w-full object-cover" />
      </div>
    </div>
  );
}
