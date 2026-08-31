import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the psipeneluppi landing page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /psipeneluppi — início/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /um espaço para que aquilo que ainda não pôde ser pensado possa começar a existir em palavras/i,
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /prazer, eu sou evelyn/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /conteúdos para continuar pensando/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /próxima publicação/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /abrir publicação no instagram: reflexões em vídeo/i })).toHaveAttribute('href', 'https://www.instagram.com/psipeneluppi/reel/Dcjqz0QJ6nx/');
  expect(screen.getAllByText(/^atendimento online$/i)).toHaveLength(2);
  expect(screen.getByText(/cada atendimento dura 50 minutos e é realizado de forma online, pelo google meet/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /falar comigo/i })[0]).toHaveAttribute('href', expect.stringContaining('wa.me/5512988324925'));
  expect(screen.getByRole('link', { name: /abrir o instagram da evelyn/i })).toHaveAttribute('href', 'https://www.instagram.com/psipeneluppi/');
});
