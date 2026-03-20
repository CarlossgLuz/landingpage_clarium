export const siteConfig = {
  name: "Clarium",
  tagline: "Organize suas finanças com clareza.",
  description:
    "Clarium é um app de gerenciamento financeiro minimalista, gratuito, offline e totalmente local. Organização financeira simples, clara e segura para qualquer pessoa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clarium.app",
  apkUrl:
    process.env.NEXT_PUBLIC_APK_URL ??
    "/downloads/clarium-release-v1.0.0.apk",
  apk: {
    fileName: "clarium-release-v1.0.0.apk",
    version: "v1.0.0",
    sizeLabel: "84.6 MB",
    sha256:
      "13c4f8e277d22d8bed15389cad4f62f8ccf7f7e430dc8e72af6f0e6abcf94be1",
  },
  repos: {
    site: process.env.NEXT_PUBLIC_SITE_REPO_URL ?? "",
    app:
      process.env.NEXT_PUBLIC_APP_REPO_URL ??
      "https://github.com/CarlossgLuz/controle-fatura",
    appBranch: process.env.NEXT_PUBLIC_APP_REPO_BRANCH ?? "feat/home-shell",
    siteLicense: "MIT",
  },
  locales: ["pt-BR", "en", "es"] as const,
  defaultLocale: "pt-BR" as const,
  author: {
    name: "Carlos Gabriel",
    linkedin: "https://www.linkedin.com/in/dev-carlosgabriel/",
    github: "https://github.com/CarlossgLuz/",
    email: "carlosgabriel.contato2007@gmail.com",
    pix: "carlosgabriel.contato2007@gmail.com",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/dev-carlosgabriel/",
    github: "https://github.com/CarlossgLuz/",
    email: "mailto:carlosgabriel.contato2007@gmail.com",
  },
};

export type SiteConfig = typeof siteConfig;
export type Locale = (typeof siteConfig.locales)[number];
