import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionSetenios as SectionSeteniosType } from "../../content/manifesto.types";

export function SectionSetenios({
  fundo,
  titulo,
  abertura,
  elos,
}: SectionSeteniosType) {
  return (
    <SectionShell fundo={fundo} className="py-14">
      <div>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-balance font-display font-semibold leading-[1.12] text-section-light-fg text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.7rem,3.1vw,2.4rem)]">
              {titulo}
            </h2>
            <div aria-hidden className="mx-auto mt-6 h-px w-12 bg-brass/60" />
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-[58ch] text-justify hyphens-auto text-[15px] leading-relaxed text-section-light-fg/80 sm:text-base md:text-[18px] md:leading-[1.75]">
              {abertura}
            </p>
          </Reveal>
        </div>

        <ol className="relative mx-auto mt-14 max-w-2xl">
          {elos.map((elo, i) => (
            <Reveal
              as="li"
              key={elo.titulo}
              delay={i * 120}
              className="relative block pl-11 pb-10 last:pb-0 md:pl-12"
            >
              {i < elos.length - 1 ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[13px] top-8 -bottom-1 w-px bg-brass/30 md:left-[15px] md:top-9"
                />
              ) : null}

              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-brass/50 bg-section-light-bg text-[11px] font-semibold text-brass-ink md:text-[12px] md:h-8 md:w-8"
              >
                {String(i + 1).padStart(2, "0")}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-[-5px] rounded-full border border-brass/20"
                />
              </span>


              <h3 className="font-display text-[17px] font-semibold leading-snug text-section-light-fg sm:text-[19px] md:text-[22px]">
                {elo.titulo}
              </h3>
              <p className="mt-2.5 max-w-[62ch] text-justify hyphens-auto text-[15px] leading-relaxed text-section-light-fg/80 sm:text-base md:text-[18px] md:leading-[1.75]">
                {elo.texto}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
