import type { ManifestoContent } from "./manifesto.types";

export const manifesto: ManifestoContent = {
  meta: {
    title: "[DEFINIR]",
    description: "[DEFINIR]",
    ogTitle: "[DEFINIR]",
    ogDescription: "[DEFINIR]",
  },
  topbar: {
    marca: "Manifesto Sistêmico",
    rotulo: "Comunidade",
  },
  ctaBar: {
    texto: "",
    botao: "",
  },
  hero: {
    badge: "O DESPERTAR DE UM NOVO MODO DE FUNCIONAMENTO DA CONSCIÊNCIA",

    h1: "Por que você sabe exatamente o que precisa fazer,\nmas continua paralisado no mesmo lugar?",

    subtitulo:
      "Descubra como atualizar os princípios inconscientes que governam suas decisões silenciosamente.",

    apoio:
      "O Manifesto Sistêmico é uma comunidade de desenvolvimento pessoal fundamentada na ciência, na filosofia e na visão sistêmica profunda. Acesse trilhas práticas para desarmar o medo de sofrer, romper a resistência à mudança e tomar a sua vida.",

    cta: "Quero entrar para o Manifesto Sistêmico",

    microtexto:
      "Acesso imediato a todas as trilhas no Hotmart Club. 2 anos de acesso.",

    pilulas: [
      { icon: "infinity", label: "2 anos de acesso" },
      { icon: "play", label: "Trilhas no Hotmart Club" },
      { icon: "calendar", label: "Vivências ao vivo bimestrais" },
      { icon: "users", label: "Comunidade ativa de membros" },
    ],

    imagem: {
      alt: "Jonas Peres",
      width: 1080,
      height: 1350,
      placeholderLabel: "Foto do apresentador",
    },
  },
};
