import { SectionShell } from "./SectionShell";
import type { SectionRodape } from "../../content/manifesto.types";

export function Footer({
  fundo,
  marca,
  descricao,
  links,
  aviso,
  copyright,
}: SectionRodape) {
  return (
    <SectionShell fundo={fundo} className="py-14 md:py-16">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-[18px] font-semibold text-section-dark-fg">
            {marca}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            {descricao}
          </p>
        </div>

        <div className="md:col-span-7">
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-section-dark-fg/70 transition-colors hover:text-brass"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="mt-8 text-[12px] leading-relaxed text-muted-foreground">
            {aviso}
          </p>
        </div>
      </div>

      <p className="mt-10 border-t border-white/10 pt-6 text-[12px] text-muted-foreground">
        {copyright}
      </p>
    </SectionShell>
  );
}
