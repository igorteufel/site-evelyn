# Instruções de interface

Antes de alterar qualquer UI deste repositório, leia nesta ordem:

1. `DESIGN_SYSTEM_FOUNDATIONS.md`
2. `DESIGN_SYSTEM_RULES.md`
3. `DESIGN_SYSTEM_CATALOG.md`

Use `src/styles/theme.js` como implementação dos tokens compartilhados. Não crie
cores funcionais, escalas tipográficas, breakpoints ou padrões de interação fora
dessas definições. Cores locais são permitidas apenas em ilustração, mockup,
gráfico ou gradiente editorial e não podem comunicar estado funcional.

Ao adicionar ou mudar a API pública de um componente, atualize o catálogo no
mesmo trabalho.
