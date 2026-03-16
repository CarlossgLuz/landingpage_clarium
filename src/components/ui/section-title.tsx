import type { ReactNode } from 'react';

import { Reveal } from './reveal';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, description, action, center = false }: SectionTitleProps) {
  return (
    <Reveal className={`mb-12 flex flex-wrap items-end justify-between gap-6 ${center ? 'text-center' : ''}`}>
      <div className={`${center ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
        <p className="kicker mb-4 border-cyan/20 bg-cyan/10 text-cyan">{eyebrow}</p>
        <h2 className="text-balance text-3xl font-semibold leading-[1.02] text-text sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mt-4 max-w-[62ch] text-balance text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
      {action ? <div className={`${center ? 'mx-auto' : ''}`}>{action}</div> : null}
    </Reveal>
  );
}
