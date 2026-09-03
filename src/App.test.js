import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the psipeneluppi landing page', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /psipeneluppi — início/i })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /um espaço para o que ainda não pôde ser pensado ganhar palavras/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByText(/psicoterapia online para adolescentes e adultos, orientada pela psicanálise/i)).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /prazer, eu sou a evelyn/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /conteúdos para continuar pensando/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /próxima publicação/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /abrir publicação no instagram: reflexões em vídeo/i })).toHaveAttribute('href', 'https://www.instagram.com/psipeneluppi/reel/Dcjqz0QJ6nx/');
  expect(screen.getAllByText(/^atendimento online$/i)).toHaveLength(2);
  expect(screen.getByText(/evelyn vieira paiva peneluppi de oliveira é psicóloga e psicanalista \(crp 06\/137667\), atua a partir de jacareí - sp e atende exclusivamente online adolescentes e adultos/i)).toBeInTheDocument();
  expect(screen.getByText(/como funciona a terapia online/i)).toBeInTheDocument();
  expect(screen.getByText(/como o atendimento é exclusivamente online, você não precisa morar em jacareí/i)).toBeInTheDocument();
  expect(screen.getByText(/a psicoterapia online é indicada para adolescentes/i)).toBeInTheDocument();
  expect(screen.getByText(/cada atendimento dura 50 minutos e é realizado de forma online, pelo google meet/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /falar comigo/i })[0]).toHaveAttribute('href', expect.stringContaining('wa.me/5512988324925'));
  expect(screen.getByRole('link', { name: /abrir o instagram da evelyn/i })).toHaveAttribute('href', 'https://www.instagram.com/psipeneluppi/');
  expect(screen.getByRole('link', { name: /tiktok da evelyn/i })).toHaveAttribute('href', 'https://www.tiktok.com/@psipeneluppi');
});
