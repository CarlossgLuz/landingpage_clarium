export const siteConfig = {
  name: "Clarium",
  tagline: "Organize suas finanças com clareza.",
  description:
    "Clarium é um app de gerenciamento financeiro minimalista, gratuito, offline e totalmente local. Organização financeira simples, clara e segura para qualquer pessoa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clarium.app",
  apkUrl: process.env.NEXT_PUBLIC_APK_URL ?? "",
  locales: ["pt-BR", "en", "es"] as const,
  defaultLocale: "pt-BR" as const,
  author: {
    name: "Carlos Gabriel",
    linkedin: "https://www.linkedin.com/in/dev-carlosgabriel/",
    github: "https://github.com/CarlossgLuz/",
    email: "carlosgabriel.contato2007@gmail.com",
    pix: "46379558829",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/dev-carlosgabriel/",
    github: "https://github.com/CarlossgLuz/",
    email: "mailto:carlosgabriel.contato2007@gmail.com",
  },
};

export type SiteConfig = typeof siteConfig;
export type Locale = (typeof siteConfig.locales)[number];
