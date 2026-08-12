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

export type ManifestoContent = {
  meta: Meta;
  topbar: Topbar;
  ctaBar: CtaBar;
  hero: Hero;
};
