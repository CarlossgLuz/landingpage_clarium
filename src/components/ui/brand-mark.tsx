import type { HTMLAttributes } from 'react';

export function BrandMark(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-green/80 via-green to-cyan text-canvas shadow-[0_8px_32px_rgba(0,208,132,0.35)] ${props.className ?? ''}`}
      aria-hidden="true"
    >
      <span className="relative z-10 text-lg font-bold">C</span>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.6),transparent_40%)]" />
    </div>
  );
}
