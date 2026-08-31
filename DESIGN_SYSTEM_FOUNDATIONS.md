# Fundamentos do Design System Evelyn Psicologia

Contrato visual da landing page `psipeneluppi`, da psicóloga Evelyn Peneluppi.

## Direção

- **Propósito:** transmitir segurança, ética e acolhimento para quem considera iniciar terapia.
- **Público:** pessoas buscando um primeiro contato claro e humano com a psicoterapia.
- **Expressão:** clínica, quente e editorial.
- **Assinaturas:** laranja queimado, verde-floresta, Lato, fotografia humana e blocos amplos.

## Cores

### Marca

| Token | Valor | Uso |
| --- | --- | --- |
| `brand.50` | `#FFF7EF` | Fundo laranja muito sutil |
| `brand.100` | `#FDE7D5` | Fundo de ícone e seleção |
| `brand.200` | `#F8C8A4` | Borda e destaque suave |
| `brand.300` | `#EE9B63` | Elemento decorativo |
| `brand.500` | `#D86932` | Assinatura Evelyn |
| `brand.600` | `#C45728` | Destaque sobre fundo claro |
| `brand.700` | `#A9431F` | Ação principal e foco |
| `brand.900` | `#60301F` | Texto sobre superfície laranja clara |
| `brand.950` | `#30231D` | Superfície quente escura |

### Natureza

| Token | Valor | Uso |
| --- | --- | --- |
| `nature.50` | `#F2F6F0` | Fundo verde muito sutil |
| `nature.100` | `#DEE9D9` | Destaque suave |
| `nature.200` | `#B9CFAE` | Borda editorial |
| `nature.500` | `#527057` | Elemento de apoio |
| `nature.600` | `#426047` | Destaque institucional |
| `nature.700` | `#344E3A` | Contraste e CTA secundário |
| `nature.900` | `#203729` | Fundo editorial escuro |
| `nature.950` | `#182B20` | Fundo institucional profundo |

### Neutros

| Token | Valor | Uso |
| --- | --- | --- |
| `neutral.0` | `#FFFDF9` | Superfície principal e conteúdo sobre fundos escuros |
| `neutral.50` | `#FBF8F2` | Fundo da aplicação |
| `neutral.100` | `#F3EEE5` | Fundo secundário |
| `neutral.200` | `#E4DACE` | Bordas e divisores |
| `neutral.500` | `#8C7F74` | Texto auxiliar de baixo destaque |
| `neutral.600` | `#695F57` | Texto secundário |
| `neutral.900` | `#2E2925` | Texto principal |

`ink` usa `nature.950` e serve como superfície institucional escura.

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
- Foco: contorno laranja escuro de 2 px com offset de 3 px; nunca remover sem substituição.

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
