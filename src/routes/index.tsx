import { createFileRoute } from "@tanstack/react-router";
import { ManifestoPage } from "../components/manifesto/ManifestoPage";
import { manifesto } from "../content/manifesto";
import type { ManifestoSection } from "../content/manifesto.types";

const faqSection = manifesto.sections.find(
  (s): s is Extract<ManifestoSection, { kind: "faq" }> => s.kind === "faq",
);

const FAQ_LD = faqSection
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSection.itens.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.resposta,
        },
      })),
    }
  : null;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manifesto Sistêmico — Uma comunidade de evolução contínua" },
      {
        name: "description",
        content:
          "Atualize os princípios inconscientes que governam suas decisões. Trilhas práticas fundamentadas em ciência, filosofia e visão sistêmica, com Jonas Peres. Acesso por 2 anos.",
      },
      {
        property: "og:title",
        content: "Manifesto Sistêmico — Uma comunidade de evolução contínua",
      },
      {
        property: "og:description",
        content:
          "Atualize os princípios inconscientes que governam suas decisões. Trilhas práticas fundamentadas em ciência, filosofia e visão sistêmica, com Jonas Peres. Acesso por 2 anos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Manifesto Sistêmico" },
      { property: "og:url", content: "__URL_PRODUCAO__" },
      { property: "og:image", content: "__URL_OG_IMAGE__" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Manifesto Sistêmico — Uma comunidade de evolução contínua",
      },
      {
        name: "twitter:description",
        content:
          "Atualize os princípios inconscientes que governam suas decisões. Trilhas práticas fundamentadas em ciência, filosofia e visão sistêmica, com Jonas Peres. Acesso por 2 anos.",
      },
      { name: "twitter:image", content: "__URL_OG_IMAGE__" },
    ],
    links: [
      {
        rel: "canonical",
        href: "__URL_PRODUCAO__",
      },
    ],
    scripts: FAQ_LD
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(FAQ_LD),
          },
        ]
      : [],
  }),
  component: Index,
});

function Index() {
  return <ManifestoPage content={manifesto} />;
}

