import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionColetivo as SectionColetivoType } from "../../content/manifesto.types";

export function SectionColetivo({
  fundo,
  titulo,
  texto,
}: SectionColetivoType) {
  return (
    <SectionShell fundo={fundo} className="md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 40%, transparent 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-balance font-display font-semibold leading-[1.12] text-section-red-fg text-[clamp(1.7rem,7vw,2.4rem)] md:text-[clamp(1.9rem,3.4vw,2.7rem)]">
            {titulo}
          </h2>
        </Reveal>

        <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-on-red/35" />

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-[58ch] text-[16.5px] leading-[1.75] text-section-red-fg/90 sm:text-[18px] sm:leading-[1.8]">
            {texto}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
