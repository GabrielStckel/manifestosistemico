import { Topbar } from "./Topbar";
import { Hero } from "./Hero";
import { SectionMentiras } from "./SectionMentiras";
import type {
  ManifestoContent,
  ManifestoSection,
} from "../../content/manifesto.types";

// Exaustividade em tempo de compilação: adicionar um novo `kind` à união
// sem tratar aqui quebra o build.
type KindsTratados = "mentiras";
type _Exaustivo = Exclude<ManifestoSection["kind"], KindsTratados> extends never
  ? true
  : ["kind sem case em ManifestoPage", Exclude<ManifestoSection["kind"], KindsTratados>];
const _exaustivo: _Exaustivo = true;
void _exaustivo;

export function ManifestoPage({ content }: { content: ManifestoContent }) {
  return (
    <main className="relative">
      <Topbar {...content.topbar} />
      <Hero {...content.hero} />

      {content.sections.map((s, i) => {
        const key = `${s.kind}-${i}`;
        switch (s.kind) {
          case "mentiras":
            return <SectionMentiras key={key} {...s} />;
        }
      })}
    </main>
  );
}
