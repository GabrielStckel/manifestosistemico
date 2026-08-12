import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { Reveal } from "./Reveal";
import { CHECKOUT_URL } from "../../lib/config";
import type { SectionOferta as SectionOfertaType } from "../../content/manifesto.types";

export function SectionOferta({
  fundo,
  titulo,
  rotuloInclui,
  inclui,
  preco,
  cta,
  garantia,
}: SectionOfertaType) {
  return (
    <SectionShell fundo={fundo} id="oferta">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-balance text-center font-display font-semibold leading-[1.12] text-[clamp(1.8rem,7vw,2.4rem)] md:text-[clamp(2rem,3.6vw,2.8rem)]">
          {titulo}
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-lg border border-brass/25 bg-surface-dark/70">
          <div className="p-7 sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
              {rotuloInclui}
            </p>

            <ul className="mt-6 space-y-4">
              {inclui.map((item) => (
                <li
                  key={item}
                  className="flex gap-3.5 text-[15px] leading-relaxed text-section-dark-fg/85 sm:text-base"
                >
                  <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-brass" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden className="h-px w-full bg-white/10" />

          <div className="p-7 text-center sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
              {preco.rotulo}
            </p>

            {preco.de ? (
              <p className="mt-4 text-[15px] text-muted-foreground line-through">
                {preco.de}
              </p>
            ) : null}

            <p className="mt-3 font-display font-semibold leading-none text-section-dark-fg text-[clamp(2rem,9vw,2.75rem)]">
              {preco.parcelado}
            </p>

            <p className="mt-3 text-[15px] text-section-dark-fg/70">{preco.aVista}</p>

            <a
              href={CHECKOUT_URL}
              className="mt-8 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-cta bg-red-primary px-6 py-4 text-center text-[15px] font-bold uppercase leading-snug tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-colors hover:bg-red-primary-hover"
            >
              {cta}
              <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mx-auto mt-8 flex max-w-2xl gap-4 rounded-lg border border-white/10 bg-black/30 p-6">
          <ShieldCheck aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-brass" />
          <div>
            <p className="font-display text-[16px] font-semibold text-section-dark-fg">
              {garantia.rotulo}
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-section-dark-fg/75">
              {garantia.texto}
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
