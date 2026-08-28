# site-helpsi

Site institucional da Helpsi, uma plataforma de gestão para profissionais da
saúde mental.

## Rodar localmente

```bash
npm install
npm start
```

O projeto abre em `http://localhost:3000`.

## Design system

O núcleo visual é compartilhado com o Sistema Helpsi. Antes de alterar a
interface, consulte:

- [`DESIGN_SYSTEM_FOUNDATIONS.md`](./DESIGN_SYSTEM_FOUNDATIONS.md): tokens de
  cor, tipografia, espaçamento, responsividade e motion;
- [`DESIGN_SYSTEM_RULES.md`](./DESIGN_SYSTEM_RULES.md): regras de contribuição e
  exceções;
- [`DESIGN_SYSTEM_CATALOG.md`](./DESIGN_SYSTEM_CATALOG.md): componentes e padrões
  reais desta landing page.

No site, a implementação dos tokens fica em `src/styles/theme.js`.

## Validação

```bash
npm test -- --watchAll=false
npm run build
```
