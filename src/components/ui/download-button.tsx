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
      <a href="#download" className={`button-secondary ${className}`.trim()}>
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
      className={`button-primary ${className}`.trim()}
    >
      <Download className="h-4 w-4" />
      {label}
    </a>
  );
}
