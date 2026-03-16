import type { HTMLAttributes } from 'react';

export function BrandMark(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#7ed957] shadow-[0_18px_40px_rgba(126,217,87,0.32)] ${props.className ?? ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-7 w-7 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 28.5C17.6 27.3 19.5 26.2 21.8 25.4L19.4 17.3C18.8 15.4 20.6 13.7 22.5 14.3L29 16.4C30.1 16.8 31 17.4 31.8 18.2L33.1 19.4C37 18.6 41.2 18.4 45 19.1C48.6 16.4 53.8 17.1 56.5 20.7C58.6 23.4 58.6 27 56.8 29.7C60.7 32.4 63 37 63 42.5C63 49.2 60.7 57.4 56.4 63.3C55.8 64.1 54.9 64.6 54 64.6H43.3C41.9 64.6 40.7 63.8 40.1 62.5L38 58.2H31L28.9 62.5C28.3 63.8 27 64.6 25.7 64.6H15C13.2 64.6 11.7 63.2 11.5 61.4L10 44.9C6.1 43.3 2.8 40.3 0.7 36.4C0.2 35.4 0 34.3 0 33.2V26.9C0 24.9 1.6 23.3 3.6 23.3H11.5L16 28.5Z"
          fill="currentColor"
        />
        <path
          d="M19.9 29.7C24.7 27.4 30.8 26.2 37.2 26.2C49.3 26.2 57 30.8 57 41.4C57 46.5 55.3 53.3 52.2 58.9H46.4L43.8 53.6C43.2 52.4 41.9 51.6 40.6 51.6H28.3C27 51.6 25.8 52.4 25.2 53.6L22.6 58.9H16.8L15.5 44.6C15.4 43.3 14.6 42.1 13.4 41.5C10.3 40.2 7.8 38 6 35.1V29.3H13C14 29.3 14.9 28.8 15.5 28L17.5 25.2L19.9 29.7Z"
          fill="#7ed957"
        />
        <circle cx="48.5" cy="24" r="2.4" fill="#7ed957" />
      </svg>
      <span className="absolute inset-0 rounded-2xl border border-white/20" />
      <span className="absolute inset-[1px] rounded-[15px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_34%)]" />
    </div>
  );
}
