import { ArrowRight, CalendarDays, Infinity, PlayCircle, Users } from "lucide-react";
import type { Hero as HeroType } from "../../content/manifesto.types";

const ICONS = {
  play: PlayCircle,
  users: Users,
  calendar: CalendarDays,
  infinity: Infinity,
} as const;

export function Hero({
  badge,
  h1,
  subtitulo,
  apoio,
  cta,
  microtexto,
  pilulas,
  imagem,
}: HeroType) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-section-dark-bg px-5 pt-28 pb-12 text-section-dark-fg md:min-h-[88vh] md:px-0 md:pt-[7rem] md:pb-0">
      {/* Camadas de fundo — todas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,10,10,0.85) 45%, rgba(45,15,15,0.7) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 48%, var(--red-accent) 0%, transparent 55%), radial-gradient(45% 45% at 50% 42%, var(--red-deep) 0%, transparent 60%)",
          opacity: 0.8,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70svh] md:hidden"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 38%, var(--red-accent) 0%, transparent 62%), radial-gradient(40% 40% at 50% 32%, var(--red-deep) 0%, transparent 68%)",
          opacity: 0.85,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(110% 85% at 25% 35%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black md:hidden"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-12 md:px-8 md:gap-8">
        {/* Coluna de texto */}
        <div className="md:col-span-6">
          <span className="hidden max-w-[420px] rounded-pill border border-brass/40 bg-brass/10 px-3 py-1 text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-brass md:inline-block">
            {badge}
          </span>

          <h1
            className="mt-5 whitespace-pre-line text-balance font-display text-[clamp(1.75rem,7vw,2.5rem)] font-semibold leading-[1.15] md:mt-4 md:text-[clamp(1.75rem,3.3vw,2.5rem)] md:leading-[1.1]"
            style={{ textShadow: "var(--text-shadow-hero)" }}
          >
            {h1}
          </h1>

          <p
            className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-section-dark-fg/85 md:mt-4 md:text-[16px]"
            style={{ textShadow: "var(--text-shadow-hero)" }}
          >
            {subtitulo}
          </p>

          <p
            className="hidden md:mt-3 md:block md:max-w-[52ch] md:text-[15px] md:leading-[1.6] text-section-dark-fg/70"
            style={{ textShadow: "var(--text-shadow-hero)" }}
          >
            {apoio}
          </p>

          <a
            href="#oferta"
            className="mt-7 flex w-full max-w-[460px] min-h-[56px] items-center justify-center gap-2 rounded-cta bg-red-primary px-6 py-4 text-[15px] font-bold uppercase tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-colors hover:bg-red-primary-hover md:mt-6 md:max-w-[420px]"
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-3 max-w-[460px] text-[13px] leading-snug text-muted-foreground">
            {microtexto}
          </p>

          <div className="mt-7 flex flex-wrap gap-2 md:mt-8">
            {pilulas.map((p) => {
              const Icon = ICONS[p.icon];
              return (
                <span
                  key={p.icon + p.label}
                  className="inline-flex items-center gap-2 rounded-pill border border-white/12 bg-black/40 px-3 py-1.5 text-[12px] font-medium text-section-dark-fg"
                >
                  <Icon className="h-3.5 w-3.5 text-brass" />
                  {p.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Coluna de imagem — desktop apenas */}
        <div className="hidden md:col-span-6 md:block">
          {/*
            <picture>
              <source
                srcSet="/hero-540w.avif 540w, /hero-1080w.avif 1080w"
                sizes="(max-width: 768px) 90vw, 520px"
                type="image/avif"
              />
              <source
                srcSet="/hero-540w.webp 540w, /hero-1080w.webp 1080w"
                sizes="(max-width: 768px) 90vw, 520px"
                type="image/webp"
              />
              <img
                src="/hero-1080w.webp"
                alt={imagem.alt}
                width={imagem.width}
                height={imagem.height}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="h-auto w-full rounded-lg border border-white/10 object-cover"
                sizes="(max-width: 768px) 90vw, 520px"
              />
            </picture>
          */}
          {imagem.placeholderLabel && (
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-white/10 bg-surface-dark/60">
              <span className="text-sm text-muted-foreground">{imagem.placeholderLabel}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
