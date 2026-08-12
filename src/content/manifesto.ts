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

  sections: [
    {
      kind: "mentiras",
      fundo: "dark",
      titulo:
        "As duas grandes mentiras que contaram sobre o seu desenvolvimento pessoal:",
      itens: [
        {
          rotulo: "Mentira 01",
          mentira: "O tempo cura todas as feridas",
          rotuloVerdade: "A verdade",
          verdade:
            "O tempo não cura nada. Quando você tenta ignorar uma dor ou conflito, seu inconsciente funciona como uma lixeira mental. Ele armazena essa informação e continua operando silenciosamente 24 horas por dia, ativando mecanismos invisíveis de evitação e autossabotagem ao menor sinal de risco.",
        },
        {
          rotulo: "Mentira 02",
          mentira: "Você só precisa ressignificar o seu passado",
          rotuloVerdade: "A verdade",
          verdade:
            "A ressignificação intelectual é apenas uma remediação paliativa. Ela atenua o sintoma temporariamente, mas não cura a dinâmica oculta. A cura real não vem de racionalizar ou criar uma \"bela história\" sobre o que doeu; vem de integrar o acontecimento, pacificar o sistema e extrair a função exata daquele episódio na sua vida para seguir adiante.",
        },
      ],
    },
  ],
};
