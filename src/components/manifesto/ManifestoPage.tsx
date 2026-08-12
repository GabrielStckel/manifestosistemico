import { Topbar } from "./Topbar";
import { Hero } from "./Hero";
import { SectionMentiras } from "./SectionMentiras";
import type { ManifestoContent } from "../../content/manifesto.types";

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
        const exhaustive: never = s;
        return exhaustive;
      })}
    </main>
  );
}
