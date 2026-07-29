import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Helpsi landing page', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /a gestão do seu consultório, simples e completa/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /quero conhecer/i })).toBeInTheDocument();
});
