import { Download } from 'lucide-react';

import { getApkUrl, hasApkUrl } from '@/lib/site';

type DownloadButtonProps = {
  label: string;
  pendingLabel: string;
  className?: string;
};

export function DownloadButton({ label, pendingLabel, className = '' }: DownloadButtonProps) {
  const ready = hasApkUrl();
  const href = getApkUrl();

  if (!ready) {
    return (
      <a
        href="#download"
        className={`focus-outline inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-panel px-5 py-3 text-sm font-semibold text-text transition hover:border-green/50 hover:text-green ${className}`.trim()}
      >
        <Download className="h-4 w-4" />
        {pendingLabel}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-outline inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green to-cyan px-5 py-3 text-sm font-bold text-canvas shadow-glow transition hover:brightness-105 ${className}`.trim()}
    >
      <Download className="h-4 w-4" />
      {label}
    </a>
  );
}
