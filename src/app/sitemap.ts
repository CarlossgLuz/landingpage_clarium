import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === siteConfig.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        siteConfig.locales.map((l) => [l, `${siteConfig.url}/${l}`])
      ),
    },
  }));
}
