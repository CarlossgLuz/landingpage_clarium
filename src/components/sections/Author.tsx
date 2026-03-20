import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function Author() {
  const t = useTranslations("author");

  return (
    <section
      id="author"
      className="relative py-28 bg-[#0a1210] overflow-hidden"
      aria-labelledby="author-heading"
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.1), transparent)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: avatar & identity */}
          <div className="flex flex-col items-start gap-6">
            {/* Avatar placeholder */}
            <div className="relative">
              <div
                className="w-20 h-20 rounded-2xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] flex items-center justify-center"
                aria-hidden
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <circle cx="16" cy="12" r="5" stroke="rgba(34,197,94,0.6)" strokeWidth="1.5" />
                  <path d="M7 26c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="rgba(34,197,94,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              {/* Verified badge */}
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-[#0a1210] bg-brand-500 flex items-center justify-center"
                aria-label="Verificado"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 5l2 2 4-4" stroke="#060b0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div>
              <SectionLabel className="mb-4">{t("eyebrow")}</SectionLabel>
              <h2
                id="author-heading"
                className="font-display font-bold text-3xl md:text-4xl text-white/90 mb-4 leading-tight"
                style={{ whiteSpace: "pre-line" }}
              >
                {t("headline")}
              </h2>
              <p className="text-white/50 text-base leading-relaxed">{t("body")}</p>
            </div>
          </div>

          {/* Right: channels & anti-fraud */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xs font-mono font-medium text-white/40 uppercase tracking-widest mb-4">
                {t("officialChannels")}
              </h3>
              <div className="flex flex-col gap-3">
                <AuthorLink
                  href={siteConfig.author.linkedin}
                  label="LinkedIn"
                  handle="dev-carlosgabriel"
                  icon={<LinkedInIcon />}
                />
                <AuthorLink
                  href={siteConfig.author.github}
                  label="GitHub"
                  handle="CarlossgLuz"
                  icon={<GitHubIcon />}
                />
                <AuthorLink
                  href={`mailto:${siteConfig.author.email}`}
                  label="E-mail"
                  handle={siteConfig.author.email}
                  icon={<EmailIcon />}
                />
              </div>
            </div>

            {/* Anti-fraud warning */}
            <div className="p-4 rounded-xl border border-[rgba(34,197,94,0.15)] bg-[rgba(34,197,94,0.04)]">
              <div className="flex items-start gap-3">
                <span className="text-brand-400/70 text-base shrink-0 mt-0.5" aria-hidden>⚠</span>
                <p className="text-xs text-white/40 leading-relaxed">{t("antifraud")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorLink({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="flex items-center gap-3 p-3.5 rounded-xl border border-[rgba(240,253,244,0.06)] bg-[rgba(15,28,25,0.5)] hover:border-[rgba(34,197,94,0.2)] hover:bg-[rgba(15,28,25,0.8)] transition-all group"
      aria-label={`${label}: ${handle}`}
    >
      <span className="text-white/40 group-hover:text-brand-400 transition-colors">{icon}</span>
      <div className="min-w-0">
        <div className="text-xs font-mono text-white/30 mb-0.5">{label}</div>
        <div className="text-sm text-white/65 group-hover:text-white/85 transition-colors truncate font-mono">
          {handle}
        </div>
      </div>
      <span className="ml-auto text-white/20 group-hover:text-brand-400/60 transition-colors text-sm" aria-hidden>→</span>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M2.5 5h2v8h-2zm1-1.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM6 5h1.9v1.1C8.3 5.5 9.1 5 10.2 5c2 0 2.8 1.3 2.8 3.2V13h-2V8.6c0-.8-.3-1.4-1.1-1.4-.9 0-1.4.6-1.4 1.7V13H6V5z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 .5A7.5 7.5 0 00.5 8c0 3.31 2.15 6.12 5.13 7.12.38.07.52-.16.52-.36v-1.27c-2.1.46-2.54-.9-2.54-.9-.34-.87-.84-1.1-.84-1.1-.69-.47.05-.46.05-.46.76.05 1.16.78 1.16.78.67 1.15 1.77.82 2.2.63.07-.49.26-.82.47-1.01-1.68-.19-3.44-.84-3.44-3.73 0-.82.29-1.5.78-2.02-.08-.19-.34-.96.07-2 0 0 .64-.2 2.1.78a7.3 7.3 0 011.91-.26c.65 0 1.3.09 1.91.26 1.46-.99 2.1-.78 2.1-.78.41 1.04.15 1.81.07 2 .49.53.78 1.2.78 2.02 0 2.9-1.77 3.54-3.45 3.73.27.23.51.69.51 1.39v2.06c0 .2.14.44.52.36A7.5 7.5 0 008 .5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
      <path d="M1.5 5.5l6.5 4 6.5-4" strokeLinecap="round" />
    </svg>
  );
}
