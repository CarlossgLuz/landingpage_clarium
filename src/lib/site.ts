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
    title: 'Clarium | Organize sua vida financeira com clareza',
    description:
      'Landing oficial do Clarium. Gerencie receitas e gastos com simplicidade, design minimalista e privacidade local-first. Baixe o APK Android.',
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
    title: 'Clarium | Clear and minimal personal finance app',
    description:
      'Official Clarium landing page. Manage income and expenses with clarity, elegant design and local-first privacy. Download the Android APK.',
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
    title: 'Clarium | Finanzas personales claras y minimalistas',
    description:
      'Landing oficial de Clarium. Organiza ingresos y gastos con simplicidad, diseño elegante y privacidad local-first. Descarga el APK Android.',
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
