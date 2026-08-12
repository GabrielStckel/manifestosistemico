# Desbloqueio de personalização + revisão de copy

## Objetivo

Remover as restrições de personalização acumuladas nos prompts anteriores e, com liberdade total de design, revisar todos os títulos e textos da landing page para deixá-los mais impactantes, persuasivos e alinhados com o posicionamento de alto ticket do Manifesto Sistêmico.

## O que será desbloqueado

1. **Restrições de animação** — nada impede mais o uso de animações, transições, micro-interações ou bibliotecas de motion quando estrategicamente úteis.
2. **Restrições de cor/efeito** — qualquer paleta, gradiente, glow, textura ou profundidade pode ser aplicada se melhorar a conversão e a legibilidade.
3. **Restrições de componente** — a arquitetura atual pode ser alterada, reorganizada ou expandida conforme necessário.
4. **Restrições de tipografia** — as escolhas de fonte, peso, escala e ritmo tipográfico podem ser revistas.

## O que será revisado

Revisão completa de copywriting em todos os pontos de comunicação da landing page:

- **Hero**: badge, h1, subtítulo, texto de apoio, microtexto abaixo do CTA e rótulos das 4 pilulas.
- **Seção Mentiras**: título principal, rótulos das mentiras, textos das verdades.
- **Seção Setênios**: título, abertura e títulos/textos dos três elos da cadeia causal.
- **Seção Paradigma**: título, bloco do modo antigo (Cartesiano) e bloco do modo novo (Sistêmico) com itens.
- **Seção Comunidade**: título e texto de posicionamento.
- **Seção Trilhas**: título, subtítulo e título/texto de cada temporada.
- **Seção Coletivo**: título e texto.
- **Seção Oferta**: título, lista de inclusões, rótulo de preço, parcelado, à vista, CTA e garantia.
- **FAQ**: perguntas e respostas.
- **Rodapé**: descrição, links e aviso legal.
- **Meta tags**: title, description, ogTitle e ogDescription.

## Diretrizes da revisão

- Tom maduro, filosófico-científico, sem jargão barato de marketing.
- Foco em dor, mecanismo e transformação — não em promessas genéricas.
- H1 e títulos de seção com gancho claro, empatia com a paralisia e convite para o novo paradigma.
- Textos de apoio mais densos, que soem como raciocínio, não como slogan.
- Manter o mesmo conteúdo estrutural (as 4 trilhas, as 2 mentiras, os 3 setênios, etc.) — só reescrever as palavras.
- Preservar acessibilidade e SEO: headings hierárquicos, alt text, metadados.

## Entregáveis

1. `src/content/manifesto.ts` atualizado com toda a copy revisada.
2. `src/routes/index.tsx` (ou `src/components/manifesto/ManifestoPage.tsx`) com meta tags preenchidas.
3. Ajustes pontuais de estilo em `src/styles.css` ou componentes se a nova copy exigir variação de hierarquia visual.
4. Verificação visual da página completa e leitura de todos os textos para garantir coerência de tom.

## Não está no escopo

- Mudar a estrutura de seções (adicionar ou remover seções).
- Alterar preços, prazos ou garantias — apenas como são apresentados.
- Trocar a arquitetura de rotas ou adicionar novas páginas.
- Implementar checkout, pagamento ou backend.
