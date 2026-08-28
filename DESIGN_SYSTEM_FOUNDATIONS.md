# Fundamentos do Design System Helpsi

Contrato visual compartilhado pelo site institucional e pelo sistema Helpsi.
Este documento é agnóstico de tecnologia; cada repositório deve espelhar estes
valores em sua própria camada de tokens.

## Direção

- **Propósito:** transmitir segurança operacional sem perder acolhimento humano.
- **Público:** profissionais de saúde mental que valorizam clareza, privacidade e
  tempo para cuidar.
- **Expressão:** clínica, calma e editorial.
- **Assinaturas:** roxo Helpsi, mascote Brain, Lato e imagens reais do produto.

## Cores

### Marca

| Token | Valor | Uso |
| --- | --- | --- |
| `brand.50` | `#F9F5FF` | Fundo roxo muito sutil |
| `brand.100` | `#EDE1FE` | Fundo de ícone e seleção |
| `brand.200` | `#D4B7FB` | Borda e destaque suave |
| `brand.300` | `#B994EE` | Elemento decorativo |
| `brand.500` | `#883CEC` | Marca e ação principal |
| `brand.600` | `#7C2CE1` | Destaque sobre fundo escuro |
| `brand.700` | `#6E18DE` | Hover da ação principal |
| `brand.900` | `#25133E` | Texto sobre superfície roxa clara |
| `brand.950` | `#22113F` | Fundo institucional escuro |

### Neutros

| Token | Valor | Uso |
| --- | --- | --- |
| `neutral.0` | `#FFFFFF` | Superfície principal e conteúdo sobre roxo |
| `neutral.50` | `#FCFCFC` | Fundo da aplicação |
| `neutral.100` | `#F4F4F7` | Fundo secundário |
| `neutral.200` | `#E4E4E9` | Bordas e divisores |
| `neutral.500` | `#8A8492` | Texto auxiliar de baixo destaque |
| `neutral.600` | `#6B6D76` | Texto secundário |
| `neutral.900` | `#202224` | Texto principal |

`ink` (`#151E36`) é a superfície escura neutra usada em mídia e experiências
imersivas; não substitui o roxo institucional de marca.

### Estados

| Função | Suave | Base | Forte |
| --- | --- | --- | --- |
| Sucesso | `#EAF7EF` | `#218358` | `#16734D` |
| Atenção | `#FFF9E1` | `#FABD14` | `#9B7400` |
| Erro | `#F9EDEF` | `#B5656B` | `#9E3F48` |

Nunca comunicar um estado apenas por cor. Combinar cor com texto, ícone ou
posição.

## Tipografia

### Família e pesos

- Família: `Lato`, com fallback para fontes de sistema.
- Pesos permitidos: 400 (regular), 500 (medium), 700 (bold), 900 (black).
- Corpo padrão: 16 px, altura de linha 1.5.

### Escala compartilhada

| Token | Tamanho | Uso |
| --- | --- | --- |
| `label` | 12 px | Label, kicker e metadado |
| `body` | 15 px | Corpo compacto |
| `bodyLarge` | 17 px | Corpo editorial |
| `cardTitle` | 18 px | Título de card |
| `productTitle` | 24 px | Título de página no sistema |

### Extensão editorial do site

| Token | Valor responsivo |
| --- | --- |
| `subheading` | `clamp(28px, 3vw, 40px)` |
| `section` | `clamp(36px, 4.2vw, 56px)` |
| `hero` | `clamp(42px, 4.6vw, 64px)` |
| `display` | `clamp(46px, 5.6vw, 76px)` |

Títulos grandes são exclusivos de comunicação editorial. Não usar a extensão
editorial em tabelas, formulários, dashboards ou modais.

## Espaçamento

Escala baseada em 4 px:

| Token | Valor | Token | Valor |
| --- | --- | --- | --- |
| `1` | 4 px | `8` | 32 px |
| `2` | 8 px | `10` | 40 px |
| `3` | 12 px | `12` | 48 px |
| `4` | 16 px | `16` | 64 px |
| `5` | 20 px | `20` | 80 px |
| `6` | 24 px | `24` | 96 px |
|  |  | `30` | 120 px |

## Bordas, raios e sombras

- Raios: 8, 12, 18 e 28 px; `999px` apenas para pílulas e círculos.
- Borda padrão: 1 px usando `neutral.200`.
- Sombras devem indicar elevação, não decoração. Usar `soft`, `raised` ou
  `overlay` definidos em `src/styles/theme.js`.
- Foco: contorno roxo de 2 px com offset de 3 px; nunca remover sem substituição.

## Layout e responsividade

- Conteúdo padrão do site: máximo de 1320 px.
- Conteúdo amplo/hero: máximo de 1384 px.
- Largura mínima suportada: 320 px.
- Breakpoints: `sm` 576 px, `md` 768 px, `lg` 1024 px, `xl` 1280 px.
- O sistema privilegia densidade; o site privilegia ritmo vertical e narrativa.

## Motion

- Rápido: 160 ms para feedback local.
- Normal: 240 ms para hover, expansão e troca de estado.
- Lento: 620 ms para entrada editorial.
- Curva padrão: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Movimento deve explicar hierarquia ou mudança. Não esconder conteúdo essencial
  atrás de animação e sempre respeitar preferência por movimento reduzido.

## Implementação

No site, os tokens vivem em:

- `src/styles/theme.js`: cor, tipografia, espaçamento, raio, sombra e layout;
- `src/styles/breakpoints.js`: breakpoints;
- `src/styles/motion.js`: variantes do Framer Motion;
- `src/styles/global-styles.js`: reset, base tipográfica e foco.

O sistema Helpsi deve manter os mesmos nomes semânticos e valores, mesmo que use
outra tecnologia de estilos.
