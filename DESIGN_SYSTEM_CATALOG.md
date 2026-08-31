# Catálogo do Design System — psipeneluppi

Inventário das seções e padrões da landing page pessoal. Consulte os fundamentos e as regras antes de criar uma variação.

## Estrutura global

### Landingpage

- **Arquivo:** `src/pages/landingpage.jsx`
- **Responsabilidade:** compor a narrativa e controlar progresso e retorno ao topo.
- **Ordem:** Header → Hero → About → Instagram → Editorial → Works → Portfolio → Experience → Footer.
- **Padrões:** largura máxima de 1320 px, seções full-bleed quando necessário e cabeçalho fixo.

### Header

- **Arquivo:** `src/components/header/index.jsx`
- **Responsabilidade:** assinatura `psipeneluppi`, navegação por âncoras, menu mobile e CTA para WhatsApp.
- **Props:** nenhuma.
- **Âncoras:** `inicio`, `sobre`, `conteudos`, `acolhimento`, `processo`, `duvidas` e `contato`.

## Seções editoriais

### Hero

- **Responsabilidade:** apresentar a proposta de cuidado, CTA principal e retrato profissional da Evelyn.
- **Asset principal:** `src/assets/brand/evelyn-hero.jpg`, preparado em proporção 4:5 para desktop e mobile.
- **Efeitos:** halo de cor, textura de pontos e dois overlays glass vinculados ao retrato; movimento desativado com preferência reduzida.
- **Interações:** entradas sutis e links para WhatsApp e seção Sobre.

### About

- **Responsabilidade:** apresentar Evelyn, sua orientação pela psicanálise e os três princípios da prática: acolhimento, singularidade e clareza.

### Editorial

- **Responsabilidade:** criar uma pausa narrativa com mensagem sobre prevenção e autocuidado.
- **Composição:** painel glass de leitura, retrato humano da Evelyn e selo sobre o atendimento online pelo Google Meet.

### Instagram

- **Arquivo:** `src/components/instagram/index.jsx`.
- **Responsabilidade:** aproximar a visitante da presença e do repertório da Evelyn por meio de cinco publicações reais.
- **Interações:** faixa com card central e prévias laterais; cada card abre o post correspondente no Instagram, com navegação adicional por setas, dots, teclado e gesto horizontal.
- **Efeitos:** fundo em gradiente editorial, invólucro translúcido e legendas glass sobre as imagens.
- **Acessibilidade:** controles nomeados, contador anunciado e respeito a movimento reduzido.

### Works

- **Responsabilidade:** mostrar temas que podem ser acolhidos em terapia sem transformar a seção em diagnóstico.
- **Composição:** três cards editoriais com fotografia natural, agrupando os seis temas em pares relacionados.

### Portfolio

- **Responsabilidade:** explicar o início do acompanhamento em três passos.
- **Composição:** fotografia ampla de atendimento online ao lado de uma lista numerada com os três passos.

### Experience

- **Responsabilidade:** responder dúvidas frequentes com elementos `details` nativos e acessíveis.

### Footer

- **Responsabilidade:** CTA final para WhatsApp, identidade, retorno ao topo e aviso sobre emergências.

## Padrões compartilhados

- kicker: label laranja, caixa alta e peso 900;
- título editorial: tokens `section`, `display` ou `subheading`;
- texto: `bodyLarge` ou `body`, cor `muted` e altura de linha entre 1.5 e 1.7;
- CTA principal: contraste alto, foco visível e altura mínima de 44 px;
- cards: superfície clara, borda neutra e uma única elevação;
- seções: `scroll-margin-top` compatível com o header fixo.

## Onde alterar o sistema

- Fundamentos visuais: `DESIGN_SYSTEM_FOUNDATIONS.md` e `src/styles/theme.js`.
- Regras de contribuição: `DESIGN_SYSTEM_RULES.md`.
- Breakpoints: `src/styles/breakpoints.js`.
- Movimento compartilhado: `src/styles/motion.js`.
- API ou responsabilidade de componente: este catálogo.
