import type { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, description, action, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-10 flex flex-wrap items-end justify-between gap-6 ${center ? 'text-center' : ''}`}>
      <div className={`${center ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
        <p className="mb-3 inline-flex rounded-full border border-border bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
          {eyebrow}
        </p>
        <h2 className="text-balance text-3xl font-semibold leading-tight text-text sm:text-4xl">{title}</h2>
        <p className="mt-4 text-balance text-sm text-muted sm:text-base">{description}</p>
      </div>
      {action ? <div className={`${center ? 'mx-auto' : ''}`}>{action}</div> : null}
    </div>
  );
}
