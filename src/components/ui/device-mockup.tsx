import Image from 'next/image';

type DeviceMockupProps = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  priority?: boolean;
  className?: string;
};

export function DeviceMockup({ src, alt, title, subtitle, priority = false, className = '' }: DeviceMockupProps) {
  return (
    <article className={`hero-frame section-shell panel-glow-cyan group relative p-3 phone-shadow ${className}`.trim()}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(84,165,255,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_32%)]" />
      <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-canvas/95" />
      <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-canvas">
        <Image
          src={src}
          alt={alt}
          width={520}
          height={1040}
          priority={priority}
          className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="relative mt-4 space-y-1 px-1 pb-1">
        <h3 className="text-sm font-semibold text-text">{title}</h3>
        <p className="max-w-[26ch] text-xs text-muted">{subtitle}</p>
      </div>
    </article>
  );
}
