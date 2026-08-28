import React from 'react';
import helpsiLogo from '../../assets/brand/helpsi-logo.png';
import * as S from './styles';

export default function Header() {
  const menuItems = [
    { label: 'Sobre', href: 'plataforma' },
    { label: 'Funcionalidades', href: 'funcionalidades' },
    { label: 'Como funciona', href: 'rotina' },
    { label: 'Contato', href: 'contato' },
  ];

  const handleScroll = (id) => (event) => {
    event.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <S.StyledHeader>
      <S.HeaderContent>
        <S.Brand href="#inicio" onClick={handleScroll('inicio')}>
          <S.BrandLogo src={helpsiLogo} alt="Helpsi" />
        </S.Brand>

        <S.Nav aria-label="Navegação principal">
          {menuItems.map((item) => (
            <S.NavLink
              key={item.href}
              href={`#${item.href}`}
              onClick={handleScroll(item.href)}
            >
              {item.label}
            </S.NavLink>
          ))}
        </S.Nav>

        <S.HeaderCta
          href="https://app.helpsico.com.br/login"
          target="_blank"
          rel="noreferrer"
        >
          Acessar sistema
        </S.HeaderCta>
      </S.HeaderContent>
    </S.StyledHeader>
  );
}
