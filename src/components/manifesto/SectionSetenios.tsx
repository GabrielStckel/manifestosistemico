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
    <SectionShell fundo={fundo}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
          <Reveal>
            <h2 className="text-balance font-display font-semibold leading-[1.12] text-section-light-fg text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.7rem,3.1vw,2.4rem)]">
              {titulo}
            </h2>
            <div aria-hidden className="mt-6 h-px w-12 bg-brass/60" />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-section-light-fg/80 sm:text-base">
              {abertura}
            </p>
          </Reveal>
        </div>

        <ol className="relative md:col-span-7">
          {elos.map((elo, i) => (
            <Reveal
              as="li"
              key={elo.titulo}
              delay={i * 120}
              className="relative block pl-12 pb-10 last:pb-0"
            >
              {i < elos.length - 1 ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-[15px] top-9 -bottom-1 w-px bg-brass/30"
                />
              ) : null}

              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-brass/50 bg-section-light-bg text-[11px] font-semibold text-brass-ink"
              >
                {String(i + 1).padStart(2, "0")}
              </span>


              <h3 className="font-display text-[17px] font-semibold leading-snug text-section-light-fg sm:text-[19px]">
                {elo.titulo}
              </h3>
              <p className="mt-2.5 max-w-[62ch] text-[15px] leading-relaxed text-section-light-fg/80 sm:text-base">
                {elo.texto}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
