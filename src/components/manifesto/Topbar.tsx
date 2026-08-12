import type { Topbar as TopbarType } from "../../content/manifesto.types";

export function Topbar({ marca, rotulo }: TopbarType) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-section-dark-bg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <span className="font-display text-[15px] font-semibold text-section-dark-fg sm:text-base">
          {marca}
        </span>
        <span className="border-l border-brass/30 pl-3 text-[10px] uppercase tracking-[0.18em] text-brass">
          {rotulo}
        </span>
      </div>
    </header>
  );
}
