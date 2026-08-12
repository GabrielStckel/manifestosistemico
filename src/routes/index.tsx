import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "../components/manifesto/Topbar";
import { Hero } from "../components/manifesto/Hero";
import { manifesto } from "../content/manifesto";

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
    <main className="relative">
      <Topbar {...manifesto.topbar} />
      <Hero {...manifesto.hero} />
    </main>
  );
}
