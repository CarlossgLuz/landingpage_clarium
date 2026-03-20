# Clarium Landing Page

Landing page premium para o app Clarium — gerenciamento financeiro minimalista.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (i18n: pt-BR, en, es)
- **Framer Motion** (instalado, pronto para uso progressivo)

## Setup

```bash
npm install
cp .env.local.example .env.local
# editar .env.local com suas URLs reais
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL final do site (ex: `https://clarium.app`) |
| `NEXT_PUBLIC_APK_URL` | URL direta do APK para download. Se vazia, o CTA fica desabilitado com fallback elegante. |

## Onde substituir

### Screenshots / telas do app
Arquivo: `src/components/ui/PhoneMockup.tsx`
- Os SVGs dentro do array `screens[]` são os mockups gerados.
- Substitua cada SVG por `<img src="/screenshots/screen-N.png" />` quando tiver capturas reais.
- Estrutura já preparada para troca sem refatoração.

### Logo
- Marca provisória em: `src/components/layout/Navbar.tsx` → componente `<ClariumMark />`
- Footer: `src/components/layout/Footer.tsx` → componente `<ClariumMark />`
- Favicon: `src/app/icon.tsx`
- OG Image: `src/app/opengraph-image.tsx`
- Substitua pelos SVGs/PNGs finais quando disponíveis.

### Link do APK
Variável `NEXT_PUBLIC_APK_URL` no `.env.local`.
Também centralizado em `src/lib/site.ts` → `siteConfig.apkUrl`.

### Textos / traduções
- `src/messages/pt-BR.json`
- `src/messages/en.json`
- `src/messages/es.json`

### Dados do autor / links
`src/lib/site.ts` → objeto `siteConfig.author` e `siteConfig.links`.

## Estrutura

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # layout com metadata por locale
│   │   └── page.tsx         # página principal
│   ├── globals.css
│   ├── icon.tsx
│   ├── opengraph-image.tsx
│   ├── twitter-image.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Problem.tsx
│   │   ├── Features.tsx
│   │   ├── Demo.tsx
│   │   ├── HowMade.tsx
│   │   ├── Tech.tsx
│   │   ├── Support.tsx
│   │   ├── Author.tsx
│   │   ├── Contact.tsx
│   │   └── FAQ.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── PhoneMockup.tsx
│       └── SectionLabel.tsx
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── lib/
│   ├── site.ts              # config central
│   └── utils.ts
└── messages/
    ├── pt-BR.json
    ├── en.json
    └── es.json
```

## Rotas

| Rota | Locale |
|---|---|
| `/` | Redirect → `/pt-BR` |
| `/pt-BR` | Português (Brasil) |
| `/en` | English |
| `/es` | Español |

## SEO

- Metadata dinâmica por locale
- Open Graph + Twitter Card
- Sitemap em `/sitemap.xml`
- Robots em `/robots.txt`
- HTML semântico com landmarks, headings e aria corretos
- Canonical + hreflang por locale

## Notas técnicas

- Fontes: **Sora** (display) + **DM Sans** (body) + **JetBrains Mono** (mono) via Google Fonts
- Dark-first, paleta verde da identidade Clarium
- `PhoneMockup` gera SVGs inline como base64 — zero dependência de imagens externas
- Framer Motion instalado mas não ativado por padrão; adicionar `"use client"` + `motion.*` conforme necessário sem quebrar SSR
- Reduced motion respeitado via CSS media query global
