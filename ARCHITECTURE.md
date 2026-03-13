# ARCHITECTURE

## Estrutura principal

- `src/app/layout.tsx`: layout raiz + fontes + estilos globais.
- `src/app/page.tsx`: redireciona para locale padrão (`/pt-BR`).
- `src/app/[locale]/layout.tsx`: provider i18n e metadata SEO por idioma.
- `src/app/[locale]/page.tsx`: entrypoint da landing.
- `src/app/robots.ts` e `src/app/sitemap.ts`: indexação.
- `src/app/icon.tsx`, `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`: branding/SEO social.

## I18n

- `src/i18n/routing.ts`: locais suportados e locale padrão.
- `src/i18n/request.ts`: carregamento dinâmico de mensagens.
- `src/i18n/navigation.ts`: navegação locale-aware.
- `src/messages/{pt-BR,en,es}.json`: conteúdo traduzido.

## Config central

- `src/lib/site.ts`:
  - URLs públicas (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APK_URL`)
  - saneamento básico de URLs externas
  - links sensíveis (GitHub, LinkedIn, Pix)
  - metadados localizados
  - ids de screenshots placeholder

## Componentização

- `src/components/layout/*`: header/footer.
- `src/components/sections/*`: seções de landing desacopladas.
- `src/components/ui/*`: base reutilizável (container, section title, mockup, botões, animação, language switcher).
- `src/components/landing-page.tsx`: composição final da página.

## Fluxo de conversão

- CTA principal no Hero (`DownloadButton`) acima da dobra.
- CTA reforçado na seção `#download`.
- fallback elegante quando `NEXT_PUBLIC_APK_URL` não está definido.

## Substituição futura sem refatoração grande

- screenshots: trocar arquivos em `public/screenshots/`.
- logo: trocar `BrandMark` e/ou `public/brand/logo-placeholder.svg`.
- copy por idioma: atualizar `src/messages/*.json`.
