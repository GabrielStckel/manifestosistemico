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

    {
      kind: "setenios",
      fundo: "light",
      titulo:
        "Como o seu \"Sistema Operacional\" foi programado (e por que ele te trava hoje)",
      abertura:
        "O seu funcionamento atual não começou na vida adulta. Ele foi desenhado nos seus três primeiros setênios de vida (dos 0 aos 21 anos), o período em que o seu mundo emocional governou a construção do seu ego (o seu \"eu\" individual).",
      elos: [
        {
          titulo: "De 0 a 7 anos (O Registro Sem Filtros)",
          texto:
            "Você era puro sentimento, sem senso crítico ou memória racional desenvolvida. Se nesse período faltou segurança física e acolhimento prático, sua capacidade de confiar na vida foi fraturada.",
        },
        {
          titulo: "A Busca Neurótica por Segurança",
          texto:
            "Quando a infância é instável, a criança é forçada a amadurecer rápido demais para tentar se proteger. Na vida adulta, essa necessidade de segurança física se transforma em uma busca obsessiva por segurança psicológica e financeira.",
        },
        {
          titulo: "O Medo de Sofrer e o Medo de Mudar",
          texto:
            "Para evitar o sofrimento, você limita o seu \"querer\" apenas ao que é seguro e conhecido (sobrevivência). Você prefere o sofrimento familiar e controlável do relacionamento ruim ou do emprego frustrante ao risco do novo. Você fica paralisado pelo medo da mudança, agindo por medo e não pelo que faz sentido.",
        },
      ],
    },

    {
      kind: "paradigma",
      fundo: "dark",
      titulo: "O Colapso das Certezas: Do Paradigma Cartesiano ao Sistêmico",
      antigo: {
        rotulo: "O modo antigo",
        nome: "Paradigma Cartesiano",
        texto:
          "Nós fomos moldados pelo Paradigma Cartesiano, um modo de funcionamento que busca a simplicidade linear (causa e efeito isolados), a estabilidade (a ilusão de controle absoluto sobre o futuro) e a objetividade fria. Mas a vida não funciona em gavetas isoladas. Tentar controlar as pessoas, o dinheiro e o destino sob essa ótica gera exaustão, ansiedade e adoecimento.",
      },
      novo: {
        rotulo: "A transição",
        nome: "Paradigma Sistêmico",
        transicao:
          "O Manifesto Sistêmico propõe uma transição profunda para o Paradigma Sistêmico, fundamentado na ciência moderna e na percepção, onde o funcionamento compreende:",
        itens: [
          {
            titulo: "Complexidade (Causalidade Circular)",
            texto:
              "Suas travas financeiras, profissionais ou afetivas não são isoladas; elas fazem parte de um ecossistema de informações herdadas e dinâmicas familiares profundas.",
          },
          {
            titulo: "Instabilidade (O Fluxo da Vida)",
            texto:
              "Abandonar a ilusão do controle obsessivo e aprender a navegar na imprevisibilidade com força, presença e maturidade emocional.",
          },
          {
            titulo: "Subjetividade (O Observador e a Realidade)",
            texto:
              "Como demonstrado na física moderna, a consciência do observador interfere na realidade. Você manifesta no mundo externo exatamente as informações que carrega no seu mundo interno.",
          },
          {
            titulo: "As Conexões Primordiais",
            texto:
              "No nível inconsciente, \u201CPai é o mundo, Mãe é a vida\u201D. Quando você pacifica e toma a força dos seus pais, você aprende a relaxar, confiar e tomar a sua própria vida.",
          },
        ],
      },
    },
    {
      kind: "comunidade",
      fundo: "light",
      titulo:
        "O Manifesto Sist\u00EAmico:\nUm movimento integrado de evolu\u00E7\u00E3o cont\u00EDnua",
      texto:
        "O Manifesto Sist\u00EAmico \u00E9 uma comunidade que funciona como um streaming de desenvolvimento pessoal hospedado no Hotmart Club. Em vez de comprar m\u00FAltiplos cursos caros e isolados para cada crise da sua vida, voc\u00EA assina um estilo de vida de evolu\u00E7\u00E3o cont\u00EDnua. Voc\u00EA navega por trilhas integradas de conhecimento pr\u00E1tico, desenhadas para atualizar sua consci\u00EAncia no seu pr\u00F3prio ritmo.",
    },
    {
      kind: "trilhas",
      fundo: "dark",
      titulo: "As temporadas da sua transforma\u00E7\u00E3o.",
      subtitulo: "A jornada come\u00E7a pelo essencial:",
      trilhas: [
        {
          numero: "01",
          rotulo: "Temporada 01",
          titulo: "A Introdu\u00E7\u00E3o: A arquitetura da consci\u00EAncia sist\u00EAmica",
          texto:
            "O in\u00EDcio do movimento de consci\u00EAncia que leva \u00E0 leveza e \u00E0 compreens\u00E3o da vida.",
        },
        {
          numero: "02",
          rotulo: "Temporada 02",
          titulo: "As tr\u00EAs motiva\u00E7\u00F5es humanas",
          texto:
            "O resgate da for\u00E7a. Investigue as motiva\u00E7\u00F5es inconscientes gravadas dos 0 aos 21 anos. Desarme o medo de sofrer e o medo de mudar, pacificando sua rela\u00E7\u00E3o com sua origem.",
        },
        {
          numero: "03",
          rotulo: "Temporada 03",
          titulo: "O Despertar do Paradigma (Ci\u00EAncia e Filosofia)",
          texto:
            "A base epistemol\u00F3gica. Compreenda as implica\u00E7\u00F5es filos\u00F3ficas da f\u00EDsica moderna (teoria da relatividade, mec\u00E2nica qu\u00E2ntica) e como sua consci\u00EAncia colapsa a realidade di\u00E1ria.",
        },
        {
          numero: "04",
          rotulo: "Temporada 04",
          titulo: "A Individua\u00E7\u00E3o",
          texto:
            "O caminho para sair da infantiliza\u00E7\u00E3o. Abandone a postura de \"pequeno\" e a terceiriza\u00E7\u00E3o de responsabilidades. Desenvolva a maturidade emocional para assumir o protagonismo e tomar sua vida com amor por voc\u00EA.",
        },
      ],
    },
    {
      kind: "coletivo",
      fundo: "red",
      titulo: "Por que mudar sozinho é quase impossível?",
      texto:
        "No esforço inconsciente de pertencer ao nosso sistema familiar e ao meio em que vivemos, nós tendemos a repetir os mesmos comportamentos doentios para não nos sentirmos excluídos. Romper com o paradigma antigo gera um medo profundo de solidão. É por isso que o Manifesto é um movimento coletivo. Ao se unir a centenas de pessoas que buscam a mesma transição de consciência, nós alimentamos um campo mórfico de mudança.",
    },
  ],
};
