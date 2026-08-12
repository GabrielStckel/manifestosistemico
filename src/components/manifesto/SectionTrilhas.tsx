import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type {
  SectionTrilhas as SectionTrilhasType,
  Trilha,
} from "../../content/manifesto.types";

function Capa({ trilha }: { trilha: Trilha }) {
  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-white/8 bg-black/50">
      {trilha.poster ? (
        <img
          src={trilha.poster.src}
          alt={trilha.poster.alt}
          width={trilha.poster.width}
          height={trilha.poster.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.13] transition-opacity duration-300 group-hover:opacity-25"
            style={{
              background:
                "radial-gradient(65% 65% at 50% 55%, var(--brass) 0%, transparent 62%)",
            }}
          />
          <span
            aria-hidden
            className="relative font-display text-[52px] font-semibold leading-none text-brass/25 transition-colors duration-300 group-hover:text-brass/40 sm:text-[72px]"
          >
            {trilha.numero}
          </span>
        </>
      )}

      {trilha.status ? (
        <span className="absolute right-3 top-3 rounded-pill border border-brass/40 bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brass">
          {trilha.status}
        </span>
      ) : null}
    </div>
  );
}

export function SectionTrilhas({
  fundo,
  titulo,
  subtitulo,
  trilhas,
}: SectionTrilhasType) {
  return (
    <SectionShell fundo={fundo} className="py-14">
      <Reveal>
        <h2 className="mx-auto max-w-3xl text-balance text-center font-display font-semibold leading-[1.12] text-[clamp(1.6rem,6.8vw,2.3rem)] md:text-[clamp(1.75rem,3.2vw,2.5rem)]">
          {titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-section-dark-fg/70 sm:text-base">
          {subtitulo}
        </p>
      </Reveal>

      <ul className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 md:mt-14 md:gap-7">
        {trilhas.map((trilha, i) => (
          <Reveal
            as="li"
            key={trilha.numero}
            delay={i * 100}
            className="block h-full"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-surface-dark/60 transition-colors duration-300 hover:border-brass/50">
              <Capa trilha={trilha} />

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
                  {trilha.rotulo}
                </p>
                <h3 className="mt-3 font-display text-[17px] font-semibold leading-snug text-section-dark-fg sm:text-[18px]">
                  {trilha.titulo}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-section-dark-fg/75 sm:text-[15px]">
                  {trilha.texto}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
