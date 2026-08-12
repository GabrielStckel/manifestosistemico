import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionComunidade as SectionComunidadeType } from "../../content/manifesto.types";

export function SectionComunidade({
  fundo,
  titulo,
  texto,
}: SectionComunidadeType) {
  return (
    <SectionShell fundo={fundo} className="md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span aria-hidden className="mx-auto block h-px w-16 bg-brass/60" />

        <Reveal>
          <h2 className="mt-8 whitespace-pre-line text-balance font-display font-semibold leading-[1.15] text-section-light-fg text-[clamp(1.6rem,6.5vw,2.2rem)] md:text-[clamp(1.8rem,3.2vw,2.5rem)]">
            {titulo}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-[58ch] text-[16.5px] leading-[1.75] text-section-light-fg/85 sm:text-[18px] sm:leading-[1.8]">
            {texto}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
