import { useEffect, useState } from "react";

export function CtaBar({ label }: { label: string }) {
  const [visivel, setVisivel] = useState(false);
  const [sobreClaro, setSobreClaro] = useState(false);

  useEffect(() => {
    const atualizar = () => {
      const oferta = document.getElementById("oferta");
      const ofertaVisivel =
        !!oferta && oferta.getBoundingClientRect().top <= window.innerHeight - 40;

      const deveMostrar = window.scrollY > 400 && !ofertaVisivel;
      setVisivel(deveMostrar);

      const alvo = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight - 40,
      );
      const secao = alvo?.closest("[data-section-bg]");
      setSobreClaro(secao?.getAttribute("data-section-bg") === "light");
    };

    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      window.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  return (
    <div
      aria-hidden={!visivel}
      className={`fixed inset-x-0 bottom-0 z-30 border-t transition-opacity duration-200 ${
        visivel ? "opacity-100" : "pointer-events-none opacity-0"
      } ${
        sobreClaro
          ? "border-black/10 bg-section-light-bg/95 text-section-light-fg"
          : "border-white/10 bg-bg-black text-section-dark-fg"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-3 sm:px-8">
        <a
          href="#oferta"
          tabIndex={visivel ? undefined : -1}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-cta bg-red-primary px-6 text-center text-[14px] font-bold uppercase leading-snug tracking-wide text-on-red transition-colors hover:bg-red-primary-hover sm:w-auto sm:min-w-[340px]"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
