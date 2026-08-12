import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manifesto Sistêmico — [DEFINIR]" },
      { name: "description", content: "[DEFINIR]" },
      { property: "og:title", content: "Manifesto Sistêmico — [DEFINIR]" },
      { property: "og:description", content: "[DEFINIR]" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-section-dark-bg px-5 text-section-dark-fg">
      <h1 className="font-display text-[clamp(1.75rem,7vw,2.5rem)] leading-[1.15] text-balance md:text-[clamp(1.75rem,3.4vw,2.6rem)] md:leading-[1.08]">
        Manifesto Sistêmico
      </h1>
    </main>
  );
}
