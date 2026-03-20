# Arquitetura — Clarium Landing

## Decisões de arquitetura

### App Router + next-intl
Rotas segmentadas por locale: `/[locale]/page.tsx`. O middleware intercepta todas as rotas e redireciona para o locale correto com base no Accept-Language ou fallback para `pt-BR`.

### Config centralizada
`src/lib/site.ts` é a única fonte de verdade para:
- URL do site
- URL do APK
- Dados do autor
- Locales suportados

Qualquer mudança de link ou dado pessoal deve ser feita apenas aqui.

### Mensagens i18n
Arquivos JSON separados por locale em `src/messages/`. Cada componente usa `useTranslations(namespace)` do next-intl. Namespaces espelham as seções da landing.

### PhoneMockup
SVGs inline gerados como strings + convertidos para base64 URI. Permite:
- Zero dependência de imagens externas
- Substituição futura por `<img>` de screenshots reais sem refatoração estrutural
- Renderização SSR sem hydration mismatch

### Componentes server/client
- Seções são Server Components por padrão (melhor performance, SEO)
- `Support.tsx` e `FAQ.tsx` são `"use client"` por ter interatividade local (clipboard, accordion)
- `Navbar.tsx` é `"use client"` por scroll listener

### Fallback de APK
`siteConfig.apkUrl` vem de `NEXT_PUBLIC_APK_URL`. Quando vazio:
- CTA fica desabilitado visualmente (opacity + cursor not-allowed)
- Texto "em breve" aparece como sublabel
- Sem erro, sem link quebrado

### Fontes
Carregadas via Google Fonts no `<head>` do layout com `preconnect`. CSS variables definem a família em todo o sistema.

### Performance
- Sem libs de UI pesadas (zero shadcn, zero radix por enquanto)
- Ícones inline como SVGs (zero bundle de icon lib)
- Framer Motion instalado mas lazy — ativar por seção conforme necessidade
- Imagens: PhoneMockup é SVG puro; OG image gerada via `@vercel/og`

### Acessibilidade
- Landmark regions: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- `aria-labelledby` em todas as sections
- `aria-expanded` no FAQ accordion
- `aria-label` em todos os links e botões com ícones
- `aria-hidden` em elementos decorativos
- Contraste: texto principal ~90% white sobre fundos escuros
- Focus visible via outline brand no CSS global
- Reduced motion via `@media (prefers-reduced-motion: reduce)`

### SEO
- `generateMetadata` por locale em `[locale]/layout.tsx`
- Sitemap dinâmico com alternates hreflang
- Robots.txt permissivo
- OG Image e Twitter Card gerados com `next/og`
- HTML semântico com h1 único por página, h2 por seção

## Extensão futura

| Feature | Onde adicionar |
|---|---|
| Analytics | `[locale]/layout.tsx` — Script tag |
| Screenshots reais | `PhoneMockup.tsx` — trocar SVGs por `<img>` |
| Logo vetorial | `Navbar.tsx` e `Footer.tsx` — componente `<ClariumMark>` |
| Animações Framer | Qualquer seção — adicionar `motion.div` com `initial/animate/whileInView` |
| Blog / Changelog | Nova rota `[locale]/blog/` com layout próprio |
| Dark/light toggle | Não implementado — landing é dark-only por design |
