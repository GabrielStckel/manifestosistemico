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
}: HeroType) {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-section-dark-bg px-5 pb-16 pt-24 text-section-dark-fg sm:px-8 md:min-h-[88vh] md:pb-24 md:pt-28">
      {/* Camadas de fundo — todas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(18,9,9,0.88) 50%, rgba(38,13,13,0.82) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 45%, var(--red-accent) 0%, transparent 60%), radial-gradient(38% 32% at 50% 42%, var(--red-deep) 0%, transparent 65%)",
          opacity: 0.42,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 50% 45%, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <p className="mx-auto max-w-[34ch] text-[10px] font-semibold uppercase leading-[1.7] tracking-[0.2em] text-brass sm:max-w-none sm:text-[11px] sm:tracking-[0.24em]">
          {badge}
        </p>

        <div aria-hidden="true" className="mx-auto mt-6 h-px w-10 bg-brass/50" />

        <h1
          className="mt-6 whitespace-pre-line text-balance font-display text-[clamp(1.85rem,7.2vw,2.6rem)] font-semibold leading-[1.14] md:text-[clamp(2.1rem,4vw,3.1rem)] md:leading-[1.08]"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {h1}
        </h1>

        <p
          className="mx-auto mt-6 max-w-[48ch] text-[15.5px] leading-relaxed text-section-dark-fg/85 md:mt-7 md:text-[17px]"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {subtitulo}
        </p>

        <p
          className="mx-auto hidden text-section-dark-fg/70 md:mt-4 md:block md:max-w-[62ch] md:text-[15px] md:leading-[1.65]"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {apoio}
        </p>

        <a
          href="#oferta"
          className="mx-auto mt-9 flex min-h-[56px] w-full max-w-[420px] items-center justify-center gap-2 rounded-cta bg-red-primary px-6 py-4 text-center text-[14.5px] font-bold uppercase leading-snug tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-colors hover:bg-red-primary-hover md:mt-10 md:text-[15px]"
        >
          {cta}
          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </a>

        <p className="mx-auto mt-4 max-w-[42ch] text-[13px] leading-snug text-muted-foreground">
          {microtexto}
        </p>

        <div className="mx-auto mt-10 grid max-w-[440px] grid-cols-2 gap-x-5 gap-y-3 border-t border-white/10 pt-7 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-7 sm:border-t-0 sm:pt-0">
          {pilulas.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <span
                key={p.icon + p.label}
                className="flex items-center gap-2 text-left text-[12.5px] font-medium text-section-dark-fg/80 sm:text-[13px]"
              >
                <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-brass" />
                {p.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
