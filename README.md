# Clarium Landing Page

Landing page premium do Clarium, focada em conversão para download do APK Android.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl (pt-BR, en, es)

## Requisitos

- Node.js 20+
- npm 10+

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste:

- `NEXT_PUBLIC_SITE_URL`: URL pública do site (ex.: `https://clarium.app`)
- `NEXT_PUBLIC_APK_URL`: URL final do APK Android (quando vazio, CTA entra em modo de espera)

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run start
```

## Onde trocar assets e links

- Screenshots do app:
  - Substitua arquivos em `public/screenshots/`
  - Mantenha os nomes: `overview`, `transactions`, `categories`, `settings` (ou ajuste em `src/lib/site.ts`)
- Logo:
  - Ajuste o componente `src/components/ui/brand-mark.tsx`
  - Placeholder SVG atual em `public/brand/logo-placeholder.svg`
- Link do APK:
  - Defina `NEXT_PUBLIC_APK_URL` no `.env`
  - Fallback e saneamento em `src/lib/site.ts`
- Links sociais e Pix:
  - `src/lib/site.ts`

## SEO e i18n

- Metadata por locale em `src/app/[locale]/layout.tsx`
- `robots` e `sitemap` em `src/app/robots.ts` e `src/app/sitemap.ts`
- Mensagens em `src/messages/*.json`
- Middleware de locale em `middleware.ts`

## Observação

Se o ambiente não tiver Node/npm disponível, os comandos de instalação/build não executam até que o runtime seja instalado.
