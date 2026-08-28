# Catálogo do Design System — Site Helpsi

Inventário dos componentes e padrões reais do site institucional. Consulte os
fundamentos e as regras antes de criar uma nova variação.

## Estrutura global

### Landingpage

- **Arquivo:** `src/pages/landingpage.jsx`
- **Responsabilidade:** compor a narrativa completa e controlar progresso e
  retorno ao topo.
- **Ordem:** Header → Hero → About → Editorial → Works → Portfolio → Experience →
  Footer.
- **Padrões:** largura máxima de 1320 px, seções full-bleed quando necessário e
  botão de retorno exibido após 300 px.

### Header

- **Arquivo:** `src/components/header/index.jsx`
- **Responsabilidade:** marca, navegação por âncoras e CTA externo.
- **Props:** nenhuma.
- **Âncoras:** `inicio`, `plataforma`, `visao`, `rotina`, `funcionalidades`,
  `experiencia` e `contato`.
- **Responsividade:** navegação horizontal rolável abaixo de 768 px.

## Seções editoriais

### Hero

- **Arquivo:** `src/components/hero/index.jsx`
- **Responsabilidade:** proposta de valor, CTAs e apresentação de telas reais.
- **Props:** nenhuma.
- **Interações:** rotação automática de telas, pausa por visibilidade e respeito a
  movimento reduzido.
- **Assets:** fundo oficial e capturas em `src/assets/screens`.

### About

- **Arquivo:** `src/components/about/index.jsx`
- **Responsabilidade:** explicar a plataforma por benefícios e métricas.
- **Padrões reutilizáveis:** `SectionIntro`, grade de highlights e faixa de
  métricas.

### Editorial

- **Arquivo:** `src/components/editorial/index.jsx`
- **Responsabilidade:** posicionar a Brain como conexão entre visão clínica e
  gestão.
- **Padrões reutilizáveis:** seção roxa full-bleed, painéis contrastantes e
  marquee decorativo.

### Works

- **Arquivo:** `src/components/works/index.jsx`
- **Responsabilidade:** comparação antes/depois e diferenciais da plataforma.
- **Padrões reutilizáveis:** comparação semântica, lista de diferenciais e preview
  do produto.

### Portfolio

- **Arquivo:** `src/components/portfolio/index.jsx`
- **Responsabilidade:** catálogo de funcionalidades e carrossel de telas reais.
- **Interações:** anterior, próximo, dots, autoplay e alternância da tela Home.
- **Acessibilidade:** controles nomeados, `aria-current`, `aria-pressed` e slides
  inativos marcados com `aria-hidden`.

### Experience

- **Arquivo:** `src/components/experience/index.jsx`
- **Responsabilidade:** vídeo da Brain e princípios da experiência Helpsi.
- **Interações:** reprodução/pausa com botão acessível.
- **Assets:** vídeo e poster em `src/assets/video`.

### Footer

- **Arquivo:** `src/components/footer/index.jsx`
- **Responsabilidade:** CTA final para demonstração via WhatsApp ou e-mail.
- **Props:** nenhuma.
- **Padrão:** imagem real com overlay escuro para legibilidade.

## Primitivos compartilhados

O site ainda não possui uma biblioteca independente de `Button`, `Card` ou
`SectionHeader`. Antes de criar novos primitivos, verificar se há pelo menos dois
usos reais que justifiquem a abstração. Até lá, manter a API visual alinhada pelos
tokens do tema.

Padrões que devem permanecer consistentes:

- kicker: label roxa, caixa alta e peso 900;
- título de seção: `typography.sizes.section` ou `display`;
- texto editorial: `bodyLarge`, cor `muted`, altura de linha entre 1.5 e 1.65;
- CTA principal: fundo de alto contraste, foco visível e altura mínima de 44 px;
- cards: superfície clara, borda neutra e uma única elevação;
- seções: âncora com `scroll-margin-top` compatível com o header sticky.

## Componentes não utilizados

`certify`, `insta` e `systemtour` existem em `src/components`, mas não são
renderizados por `Landingpage`. São legados e não devem servir como referência
para trabalho novo sem antes serem reavaliados ou reativados explicitamente.

## Onde alterar o sistema

- Fundamentos visuais: `DESIGN_SYSTEM_FOUNDATIONS.md` e `src/styles/theme.js`.
- Regras de contribuição: `DESIGN_SYSTEM_RULES.md`.
- Breakpoints: `src/styles/breakpoints.js`.
- Movimento compartilhado: `src/styles/motion.js`.
- API ou responsabilidade de componente: este catálogo.
