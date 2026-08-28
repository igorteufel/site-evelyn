import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Helpsi landing page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /a gestão do seu consultório, simples e completa/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /acessar sistema/i })).toHaveAttribute(
    'href',
    'https://app.helpsico.com.br/login',
  );
  expect(
    screen.getByRole('heading', { name: /prontuário e anamnese/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^brain$/i })).toBeInTheDocument();
});
