import type { AppLocale } from '@/i18n/routing';

export const APP_NAME = 'Clarium';
export const AUTHOR_NAME = 'Carlos Gabriel';

export const links = {
  github: 'https://github.com/CarlossgLuz/',
  linkedin: 'https://www.linkedin.com/in/dev-carlosgabriel/',
  pix: '46379558829'
} as const;

const localePaths: Record<AppLocale, string> = {
  'pt-BR': '/pt-BR',
  en: '/en',
  es: '/es'
};

export const localizedMeta: Record<
  AppLocale,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  'pt-BR': {
    title: 'Clarium | APK Android para organizar financas com menos ruido',
    description:
      'Baixe o APK Android do Clarium e organize receitas, gastos, metas e insights com uma experiencia visual limpa, local-first e sem dashboard inflado.',
    keywords: [
      'clarium',
      'finanças pessoais',
      'controle financeiro',
      'apk android',
      'app financeiro minimalista',
      'privacidade local'
    ]
  },
  en: {
    title: 'Clarium | Android APK for clear personal finance control',
    description:
      'Download the Clarium Android APK and organize income, expenses, goals and insights with a clean, local-first interface and no bloated dashboard.',
    keywords: [
      'clarium',
      'personal finance',
      'budget app',
      'android apk',
      'minimal finance app',
      'local first privacy'
    ]
  },
  es: {
    title: 'Clarium | APK Android para finanzas claras y sin ruido',
    description:
      'Descarga el APK Android de Clarium y organiza ingresos, gastos, metas e insights con una interfaz limpia, local-first y sin dashboard inflado.',
    keywords: [
      'clarium',
      'finanzas personales',
      'control de gastos',
      'apk android',
      'app financiera minimalista',
      'privacidad local'
    ]
  }
};

function sanitizeHttpUrl(value: string | undefined, fallback: string): string {
  if (!value) return fallback;

  try {
    const parsed = new URL(value);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString();
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export function getSiteUrl(): string {
  return sanitizeHttpUrl(process.env.NEXT_PUBLIC_SITE_URL, 'https://clarium.app');
}

export function getApkUrl(): string {
  return sanitizeHttpUrl(process.env.NEXT_PUBLIC_APK_URL, '#download');
}

export function hasApkUrl(): boolean {
  const value = process.env.NEXT_PUBLIC_APK_URL;
  if (!value) return false;

  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function getLocalizedUrl(locale: AppLocale): string {
  return `${getSiteUrl()}${localePaths[locale]}`;
}

export const placeholderScreenIds = ['overview', 'transactions', 'categories', 'settings'] as const;
