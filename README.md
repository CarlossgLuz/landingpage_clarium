# Clarium Landing

Landing page oficial do Clarium, construída em `Next.js 14` com `App Router`, `next-intl` e `Tailwind CSS`.

Deploy atual:

- Produção: `https://clarium.vercel.app`

## Visão Geral

- Landing multilíngue: `pt-BR`, `en`, `es`
- Conteúdo alinhado ao app oficial
- Screenshots reais do app
- Avisos antifraude e canais oficiais
- Preparada para publicação do APK
- Repositório do site licenciado em `MIT`

## Stack

- `Next.js 14`
- `TypeScript`
- `Tailwind CSS`
- `next-intl`
- `lucide-react`

## Estrutura

```text
public/
  img/
    brand/
    screens/

src/
  app/
    [locale]/
  components/
    layout/
    sections/
    ui/
  i18n/
  lib/
  messages/
```

## Ambiente

Crie um `.env.local` a partir do exemplo:

```bash
cp .env.local.example .env.local
```

Variáveis:

| Variável | Obrigatória | Uso |
|---|---:|---|
| `NEXT_PUBLIC_SITE_URL` | Sim | URL pública final do site |
| `NEXT_PUBLIC_APK_URL` | Não | Link direto do APK. Se vazia, o CTA fica desabilitado |
| `NEXT_PUBLIC_SITE_REPO_URL` | Recomendado | Repositório oficial desta landing |
| `NEXT_PUBLIC_APP_REPO_URL` | Recomendado | Repositório oficial do app |
| `NEXT_PUBLIC_APP_REPO_BRANCH` | Não | Branch oficial do app exibida no site |

Exemplo:

```env
NEXT_PUBLIC_SITE_URL=https://clarium.vercel.app
NEXT_PUBLIC_APK_URL=
NEXT_PUBLIC_SITE_REPO_URL=https://github.com/CarlossgLuz/landingpage_clarium
NEXT_PUBLIC_APP_REPO_URL=https://github.com/CarlossgLuz/controle-fatura
NEXT_PUBLIC_APP_REPO_BRANCH=feat/home-shell
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Produção:

```bash
npm run build
npm start
```

## Conteúdo Central

Os pontos principais do projeto ficam centralizados aqui:

- Configurações, links e repositórios oficiais: `src/lib/site.ts`
- Traduções: `src/messages/pt-BR.json`, `src/messages/en.json`, `src/messages/es.json`
- Screenshots reais: `public/img/screens/home.jpg`, `public/img/screens/planning.jpg`, `public/img/screens/insights.jpg`
- Ícone oficial: `public/img/brand/clarium-icon.png`

## Segurança e Antifraude

Esta landing já inclui:

- aviso de canais oficiais
- indicação de repositórios oficiais
- separação clara entre perfil do autor e repositórios do projeto
- conteúdo orientando o usuário a desconfiar de cópias e APKs fora dos links oficiais

Antes de publicar o APK, confirme:

1. `NEXT_PUBLIC_APK_URL` aponta para a fonte oficial final
2. `NEXT_PUBLIC_SITE_REPO_URL` aponta para o repositório público correto da landing
3. `NEXT_PUBLIC_APP_REPO_URL` aponta para o repositório oficial correto do app
4. domínio final e favicon estão corretos
5. o APK publicado corresponde à build assinada oficial

## Deploy

Deploy atual em produção:

- `https://clarium.vercel.app`

Estratégia recomendada:

- Landing: `Vercel`
- APK: `GitHub Releases`

Fluxo resumido:

1. Subir alterações no branch `main`
2. A Vercel faz o deploy automático da landing
3. Publicar o APK em `GitHub Releases`
4. Preencher `NEXT_PUBLIC_APK_URL` com a URL oficial do asset
5. Fazer novo deploy para ativar o link final do APK

## Licença

Este repositório está sob [MIT](./LICENSE).

Observação importante:

- A landing já pode ser comunicada como `open source`
- O repositório do app `controle-fatura`, no branch consultado (`feat/home-shell`), está público mas sem arquivo `LICENSE`
- Sem licença, o app ainda não deve ser anunciado juridicamente como `open source`, apenas como `código-fonte público`

Se quiser comunicar ambos como open source sem ambiguidade, publique também uma licença no repositório do app.

## Checklist de Publicação

1. Configurar `.env.local` com domínio, APK e repositórios oficiais.
2. Manter `NEXT_PUBLIC_SITE_URL=https://clarium.vercel.app` enquanto esse for o domínio oficial.
3. Adicionar `LICENSE` no repositório do app, se quiser usar a expressão “open source” para ele também.
4. Validar metadata final, favicon, links de contato e links antifraude.
5. Publicar o APK em `GitHub Releases`.
6. Atualizar `NEXT_PUBLIC_APK_URL` com o link oficial do asset.
7. Fazer o deploy final na Vercel com as envs atualizadas.

## O Que Ainda Falta

- URL final do APK
- licença no repositório do app, se a comunicação oficial for “ambos open source”
- manter o projeto atualizado para uma versão corrigida do `Next.js 14`, já que `14.2.29` exibe aviso de vulnerabilidade no build

## Observações Técnicas

- O locale switch foi ajustado para trocar rota preservando o caminho atual.
- O segmento `[locale]` usa `setRequestLocale`, evitando renderização presa no idioma padrão.
- O footer foi convertido para client component para suportar leitura do pathname atual.
