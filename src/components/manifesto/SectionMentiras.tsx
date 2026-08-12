import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionMentiras as SectionMentirasType } from "../../content/manifesto.types";

export function SectionMentiras({ fundo, titulo, itens }: SectionMentirasType) {
  return (
    <SectionShell fundo={fundo}>
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display font-semibold leading-[1.12] text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.75rem,3.4vw,2.6rem)]">
          {titulo}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7 md:items-stretch">
        {itens.map((item, i) => (
          <Reveal as="li" key={item.rotulo} delay={i * 120} className="h-full">
            <article className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-surface-dark/60 p-7 sm:p-8">
              <p className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
                {item.rotulo}
              </p>

              <p className="relative z-10 mt-4 font-display text-[clamp(1.15rem,4.6vw,1.5rem)] italic leading-snug text-muted-foreground">
                {"\u201C"}
                {item.mentira}
                {"\u201D"}
              </p>

              <div aria-hidden className="relative z-10 mt-6 h-px w-12 bg-brass/50" />

              <p className="relative z-10 mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-accent">
                {item.rotuloVerdade}
              </p>

              <p className="relative z-10 mt-3 text-[15px] leading-relaxed text-section-dark-fg/90 sm:text-base">
                {item.verdade}
              </p>

              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-4 right-4 z-0 select-none font-display font-semibold leading-none text-brass/[0.07] text-[90px] md:text-[100px]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
