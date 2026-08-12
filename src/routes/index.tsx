import { createFileRoute } from "@tanstack/react-router";
import { ManifestoPage } from "../components/manifesto/ManifestoPage";
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
  return <ManifestoPage content={manifesto} />;
}
