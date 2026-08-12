export type Meta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type Topbar = {
  marca: string;
  rotulo: string;
};

export type CtaBar = {
  texto: string;
  botao: string;
};

export type HeroPilula = {
  icon: "play" | "users" | "calendar" | "infinity";
  label: string;
};

export type Hero = {
  badge: string;
  h1: string;
  subtitulo: string;
  apoio: string;
  cta: string;
  microtexto: string;
  pilulas: HeroPilula[];
  imagem: {
    alt: string;
    width: number;
    height: number;
    placeholderLabel?: string;
  };
};

export type Fundo = "dark" | "light" | "red";

export type SectionMentiras = {
  kind: "mentiras";
  fundo: Fundo;
  titulo: string;
  itens: {
    rotulo: string;
    mentira: string;
    rotuloVerdade: string;
    verdade: string;
  }[];
};

export type SectionSetenios = {
  kind: "setenios";
  fundo: Fundo;
  titulo: string;
  abertura: string;
  elos: { titulo: string; texto: string }[];
};

export type SectionParadigma = {
  kind: "paradigma";
  fundo: Fundo;
  titulo: string;
  antigo: {
    rotulo: string;
    nome: string;
    texto: string;
  };
  novo: {
    rotulo: string;
    nome: string;
    transicao: string;
    itens: { titulo: string; texto: string }[];
  };
};

export type SectionComunidade = {
  kind: "comunidade";
  fundo: Fundo;
  titulo: string;
  texto: string;
};

export type Trilha = {
  numero: string;
  rotulo: string;
  titulo: string;
  texto: string;
  /** Preenchido quando as capas existirem. Enquanto vazio, o card usa a capa tipográfica. */
  poster?: { src: string; alt: string; width: number; height: number };
  /** Selo opcional, ex.: conteúdo ainda não disponível. */
  status?: string;
};

export type SectionTrilhas = {
  kind: "trilhas";
  fundo: Fundo;
  titulo: string;
  subtitulo: string;
  trilhas: Trilha[];
};

export type ManifestoSection =
  | SectionMentiras
  | SectionSetenios
  | SectionParadigma
  | SectionComunidade
  | SectionTrilhas;

export type ManifestoContent = {
  meta: Meta;
  topbar: Topbar;
  ctaBar: CtaBar;
  hero: Hero;
  sections: ManifestoSection[];
};
