# Regras do Design System Helpsi

Estas regras mantêm o site institucional e o sistema Helpsi visualmente
coerentes. Os valores oficiais estão em `DESIGN_SYSTEM_FOUNDATIONS.md`; neste
repositório, sua implementação está em `src/styles/theme.js`.

## Ordem de decisão

Antes de criar ou alterar uma interface:

1. Entender o contexto: site institucional ou produto operacional.
2. Consultar os fundamentos e usar primeiro um token semântico existente.
3. Consultar `DESIGN_SYSTEM_CATALOG.md` e reutilizar o componente ou padrão mais
   próximo.
4. Verificar estados de interação, acessibilidade, responsividade e movimento
   reduzido.
5. Criar uma variação somente quando a necessidade não puder ser atendida pela
   API existente.

## Regras obrigatórias

- Usar Lato como família tipográfica principal nos dois produtos.
- Usar roxo somente para marca, ação principal, foco e destaque institucional.
- Usar verde, amarelo e vermelho por significado: sucesso, atenção e erro.
- Usar tokens semânticos (`text`, `muted`, `surface`, `border`) em vez de escolher
  um tom pelo valor hexadecimal.
- Usar a escala de espaçamento de 4 px. Valores fora da escala precisam ter uma
  justificativa de composição, como proporção de imagem ou alinhamento óptico.
- Usar os breakpoints compartilhados: 576, 768, 1024 e 1280 px.
- Preservar foco visível, contraste, navegação por teclado e texto alternativo.
- Respeitar `prefers-reduced-motion` e `useReducedMotion`.
- Reutilizar os ícones de `react-icons` e os assets oficiais antes de criar novos.

## Contexto: Sistema x Site

O núcleo é compartilhado, mas a densidade não precisa ser idêntica:

- **Sistema:** interface clínica, compacta e escaneável. Priorizar tipografia de
  12–24 px, superfícies claras, bordas discretas e pouco movimento.
- **Site:** comunicação editorial e acolhedora. Pode usar títulos responsivos,
  composição ampla, imagens reais do produto e motion de entrada.

As diferenças de contexto não autorizam trocar família tipográfica, cores
semânticas ou estados de interação.

## Cores novas

Não adicionar uma cor funcional diretamente em um componente. Primeiro:

1. identificar a função semântica;
2. verificar se um token existente atende;
3. se não atender, adicionar o token aos fundamentos e ao tema;
4. registrar motivo e usos esperados no pull request.

Gradientes, mockups de tela, gráficos e ilustrações podem usar tons auxiliares,
desde que não sejam confundidos com estados funcionais e permaneçam locais ao
componente visual.

## Componentes novos

Não duplicar botões, links de ação, cards, campos, modais, filtros ou padrões de
navegação. Um componente novo deve ter:

- responsabilidade distinta;
- API e estados documentados;
- comportamento responsivo;
- foco, hover, disabled e reduced motion quando aplicáveis;
- entrada no catálogo.

## Critério de pronto

- Tokens do tema usados nas superfícies funcionais.
- Sem cor funcional ou espaçamento arbitrário novo.
- Desktop e mobile verificados.
- Teclado, foco e contraste verificados.
- Testes e build aprovados.
- Catálogo e fundamentos atualizados quando a API pública mudar.
