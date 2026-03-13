'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type CopyPixButtonProps = {
  value: string;
  idleLabel: string;
  successLabel: string;
  errorLabel: string;
};

export function CopyPixButton({ value, idleLabel, successLabel, errorLabel }: CopyPixButtonProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus('success');
      window.setTimeout(() => setStatus('idle'), 1800);
    } catch {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 1800);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-outline inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-panel px-4 py-2 text-sm font-semibold text-text transition hover:border-green/60 hover:text-green"
    >
      {status === 'success' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {status === 'idle' ? idleLabel : status === 'success' ? successLabel : errorLabel}
    </button>
  );
}
