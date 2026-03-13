import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { headers } from 'next/headers';

import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Clarium',
  description: 'Clarium landing page',
  applicationName: 'Clarium'
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get('x-next-intl-locale') ?? 'pt-BR';

  return (
    <html lang={locale} className="dark">
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-body antialiased`}>{children}</body>
    </html>
  );
}
