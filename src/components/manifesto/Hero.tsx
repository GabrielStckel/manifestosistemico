import { ArrowRight } from "lucide-react";
import { CampoConstelacao } from "./CampoConstelacao";
import { Orbe } from "./Orbe";
import type { Hero as HeroType } from "../../content/manifesto.types";

export function Hero({ badge, h1, subtitulo, cta, microtexto }: HeroType) {
  return (
    <section className="relative flex min-h-[94svh] items-center overflow-hidden bg-section-dark-bg px-5 pb-12 pt-24 text-section-dark-fg sm:px-8 md:min-h-[88vh] md:pb-24 md:pt-28">
      {/* Camadas de fundo — todas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.92) 0%, rgba(18,9,9,0.88) 50%, rgba(38,13,13,0.82) 100%)",
        }}
      />
      <CampoConstelacao />

      <Orbe />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(62% 52% at 50% 44%, var(--red-accent) 0%, transparent 66%), radial-gradient(42% 34% at 50% 40%, var(--red-deep) 0%, transparent 70%)",
          opacity: 0.24,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 50% 45%, transparent 48%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
        <p className="text-[9.5px] font-semibold uppercase leading-[1.8] tracking-[0.22em] text-brass/85 sm:text-[11px] sm:tracking-[0.28em]">
          {badge}
        </p>

        <div
          aria-hidden="true"
          className="mt-4 h-px w-8 bg-gradient-to-r from-transparent via-brass/60 to-transparent md:mt-7 md:w-14"
        />

        <h1
          className="mt-5 whitespace-pre-line text-balance font-display text-[clamp(1.85rem,7.3vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.01em] md:mt-7 md:text-[clamp(2.4rem,4.6vw,3.6rem)] md:leading-[1.06] md:tracking-[-0.015em]"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          {h1}
        </h1>

        <p
          className="mt-5 max-w-[34ch] text-[16px] leading-[1.55] text-section-dark-fg/85 md:mt-7 md:max-w-[46ch] md:text-[18px] md:leading-relaxed"
          style={{ textShadow: "var(--text-shadow-soft)" }}
        >
          {subtitulo}
        </p>

        <p
          className="hidden text-section-dark-fg/65 md:mt-5 md:block md:max-w-[64ch] md:text-[15px] md:leading-[1.7]"
          style={{ textShadow: "var(--text-shadow-soft)" }}
        >
          {apoio}
        </p>

        <a
          href="#oferta"
          className="group mt-8 flex min-h-[58px] w-full max-w-[420px] items-center justify-center gap-2 rounded-cta bg-red-primary px-6 text-center text-[14px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_18px_50px_-18px_var(--red-accent)] transition-all hover:bg-red-primary-hover hover:shadow-[0_22px_60px_-16px_var(--red-accent)] active:scale-[0.99] md:mt-11 md:text-[15px]"
        >
          {cta}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
          />
        </a>

        <p className="mt-3.5 max-w-[34ch] text-[12px] leading-snug text-muted-foreground md:mt-4 md:max-w-none md:text-[13px]">
          {microtexto}
        </p>

        <ul className="mt-9 grid w-full max-w-[340px] grid-cols-2 gap-px overflow-hidden rounded-md bg-white/8 sm:mt-10 sm:flex sm:max-w-none sm:gap-x-8 sm:bg-transparent sm:rounded-none md:mt-12 md:gap-x-8 md:border-t md:border-white/10 md:pt-7 md:text-[12.5px]">
          {pilulas.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <li
                key={p.icon + p.label}
                className="flex min-w-0 items-start gap-2 bg-section-dark-bg/70 px-3 py-3 text-left text-[11.5px] font-medium leading-[1.35] text-section-dark-fg/80 sm:items-center sm:bg-transparent sm:p-0 sm:text-[13px]"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-[1px] h-3.5 w-3.5 shrink-0 text-brass sm:mt-0"
                />
                {p.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
