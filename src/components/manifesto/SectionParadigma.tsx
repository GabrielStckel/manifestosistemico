import { ArrowDown, ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import type { SectionParadigma as SectionParadigmaType } from "../../content/manifesto.types";

export function SectionParadigma({
  fundo,
  titulo,
  antigo,
  novo,
}: SectionParadigmaType) {
  return (
    <SectionShell fundo={fundo}>
      <Reveal>
        <h2 className="mx-auto max-w-4xl text-balance text-center font-display font-semibold leading-[1.12] text-[clamp(1.6rem,6.8vw,2.3rem)] md:text-[clamp(1.75rem,3.2vw,2.5rem)]">
          {titulo}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-start md:gap-10">
        {/* Bloco antigo — única caixa da seção, inerte */}
        <Reveal className="md:col-span-5">
          <div className="rounded-lg border border-white/8 bg-black/40 p-7 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {antigo.rotulo}
            </p>
            <h3 className="mt-3 font-display text-[20px] font-semibold leading-snug text-section-dark-fg/70 sm:text-[22px]">
              {antigo.nome}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-section-dark-fg/50 sm:text-base">
              {antigo.texto}
            </p>
          </div>
        </Reveal>

        {/* Divisor de transição — decorativo */}
        <div aria-hidden className="md:col-span-2 md:self-stretch">
          <div className="flex items-center gap-4 py-2 md:hidden">
            <span className="h-px flex-1 bg-brass/25" />
            <ArrowDown className="h-5 w-5 text-brass/70" />
            <span className="h-px flex-1 bg-brass/25" />
          </div>
          <div className="hidden h-full flex-col items-center justify-center md:flex">
            <span className="w-px flex-1 bg-brass/25" />
            <ArrowRight className="my-4 h-5 w-5 text-brass/70" />
            <span className="w-px flex-1 bg-brass/25" />
          </div>
        </div>

        {/* Bloco novo — aberto */}
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
              {novo.rotulo}
            </p>
            <h3 className="mt-3 font-display text-[20px] font-semibold leading-snug text-section-dark-fg sm:text-[22px]">
              {novo.nome}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-section-dark-fg/80 sm:text-base">
              {novo.transicao}
            </p>
          </Reveal>

          <ul className="mt-8 space-y-6">
            {novo.itens.map((item, i) => (
              <Reveal
                as="li"
                key={item.titulo}
                delay={(i + 1) * 100}
                className="relative block border-l border-brass/30 pl-5"
              >
                <h4 className="font-display text-[16px] font-semibold leading-snug text-section-dark-fg sm:text-[17px]">
                  {item.titulo}
                </h4>
                <p className="mt-2 text-[14.5px] leading-relaxed text-section-dark-fg/75 sm:text-[15px]">
                  {item.texto}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
