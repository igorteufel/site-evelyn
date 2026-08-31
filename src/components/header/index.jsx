import { useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useReducedMotion } from 'framer-motion';
import { WHATSAPP_URL } from '../../content/site';
import * as S from './styles';

const items = [
  { label: 'Sobre', href: 'sobre' },
  { label: 'Conteúdos', href: 'conteudos' },
  { label: 'Como posso ajudar', href: 'acolhimento' },
  { label: 'Como funciona', href: 'processo' },
  { label: 'Dúvidas', href: 'duvidas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = (id) => (event) => {
    event.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <S.Header>
      <S.Inner>
        <S.Brand href="#inicio" onClick={handleScroll('inicio')} aria-label="psipeneluppi — início">
          <strong>psipeneluppi</strong>
          <span aria-hidden="true">●</span>
        </S.Brand>

        <S.MenuButton type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="menu-principal" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <FaTimes /> : <FaBars />}
        </S.MenuButton>

        <S.Nav id="menu-principal" $open={open} aria-label="Navegação principal">
          {items.map((item) => (
            <S.NavLink key={item.href} href={`#${item.href}`} onClick={handleScroll(item.href)}>{item.label}</S.NavLink>
          ))}
        </S.Nav>

        <S.Cta href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <FaWhatsapp aria-hidden="true" /> Falar comigo
        </S.Cta>
      </S.Inner>
    </S.Header>
  );
}
