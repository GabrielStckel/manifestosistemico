import { ArrowRight } from "lucide-react";
import { CampoConstelacao } from "./CampoConstelacao";
import { Orbe } from "./Orbe";
import type { Hero as HeroType } from "../../content/manifesto.types";

export function Hero({ badge, h1, subtitulo, apoio, cta, microtexto }: HeroType) {
  return (
    <section className="relative flex min-h-[94svh] items-center overflow-hidden bg-section-dark-bg px-5 pb-14 pt-24 text-section-dark-fg sm:px-8 md:min-h-[92vh] md:pb-24 md:pt-28">
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
            "radial-gradient(62% 52% at 50% 42%, var(--red-accent) 0%, transparent 66%), radial-gradient(42% 34% at 50% 38%, var(--red-deep) 0%, transparent 70%)",
          opacity: 0.26,
        }}
      />
      {/* Luz rasante superior em latão */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[45%]"
        style={{
          background:
            "radial-gradient(70% 100% at 50% 0%, var(--brass) 0%, transparent 70%)",
          opacity: 0.07,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 80% at 50% 45%, transparent 46%, rgba(0,0,0,0.68) 100%)",
        }}
      />
      {/* Linha de horizonte na base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brass/25 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center md:max-w-4xl">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-brass/25 bg-white/[0.04] px-4 py-2 text-[9.5px] font-semibold uppercase leading-[1.6] tracking-[0.2em] text-brass/90 backdrop-blur-[2px] sm:text-[10.5px] sm:tracking-[0.26em]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brass"
          />
          {badge}
        </p>

        <h1
          className="mt-7 text-balance font-display text-[clamp(1.65rem,6.2vw,2.2rem)] font-semibold leading-[1.2] tracking-[-0.015em] md:mt-9 md:max-w-[24ch] md:text-[clamp(2.05rem,3.9vw,2.85rem)] md:leading-[1.16] md:tracking-[-0.02em]"
          style={{ textShadow: "var(--text-shadow-hero)" }}
        >
          <span className="block">{h1.split(",")[0]},</span>
          <span className="mt-1 block md:mt-2">
            {h1.split(",")[1]?.trim().replace("paralisado no mesmo lugar?", "")}
            <span
              className="font-semibold text-brass"
              style={{ textShadow: "0 0 42px color-mix(in oklab, var(--brass) 45%, transparent)" }}
            >
              paralisado no mesmo lugar?
            </span>
          </span>
        </h1>

        <div
          aria-hidden="true"
          className="mt-7 flex items-center justify-center gap-3 md:mt-9"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-brass/55 md:w-16" />
          <span className="h-1 w-1 rotate-45 bg-brass/80" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-brass/55 md:w-16" />
        </div>

        <p
          className="mt-6 max-w-[44ch] whitespace-pre-line text-[15.5px] leading-[1.65] text-section-dark-fg/90 md:mt-7 md:max-w-[58ch] md:text-[20px] md:leading-[1.65]"
          style={{ textShadow: "var(--text-shadow-soft)" }}
        >
          {subtitulo}
        </p>

        {apoio ? (
          <p className="mt-4 max-w-[40ch] whitespace-pre-line text-[13.5px] leading-[1.6] text-section-dark-fg/60 md:max-w-[62ch] md:text-[16px] md:leading-[1.7]">
            {apoio}
          </p>
        ) : null}

        <a
          href="#oferta"
          className="group relative mt-9 flex min-h-[60px] w-full max-w-[440px] items-center justify-center gap-2 overflow-hidden rounded-cta bg-red-primary px-6 text-center text-[14.5px] font-bold uppercase leading-snug tracking-[0.06em] text-on-red shadow-[0_22px_60px_-18px_var(--red-accent)] transition-all hover:bg-red-primary-hover hover:shadow-[0_28px_75px_-16px_var(--red-accent)] active:scale-[0.99] md:mt-11 md:text-[17px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[140%]"
          />
          {cta}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
          />
        </a>

        <p className="mt-4 max-w-[34ch] text-[12px] leading-snug text-muted-foreground md:max-w-none md:text-[14px]">
          {microtexto}
        </p>
      </div>
    </section>
  );
}

