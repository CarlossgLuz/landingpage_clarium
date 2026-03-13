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
    <article className={`surface soft-ring group relative overflow-hidden rounded-[1.8rem] p-3 ${className}`.trim()}>
      <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-canvas/90" />
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-canvas">
        <Image
          src={src}
          alt={alt}
          width={520}
          height={1040}
          priority={priority}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 space-y-1 px-1 pb-1">
        <h3 className="text-sm font-semibold text-text">{title}</h3>
        <p className="text-xs text-muted">{subtitle}</p>
      </div>
    </article>
  );
}
