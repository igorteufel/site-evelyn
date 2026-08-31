import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaInstagram } from 'react-icons/fa';
import postOne from '../../assets/instagram/Dcjqz0QJ6nx.jpg';
import postTwo from '../../assets/instagram/DchDJz_pBgj.jpg';
import postThree from '../../assets/instagram/DcYr1VOxInE.jpg';
import postFour from '../../assets/instagram/DK-aKj1B1Sk.jpg';
import postFive from '../../assets/instagram/DbmLrqZp5cX.jpg';
import { motionState, reveal } from '../../styles/motion';
import { CONTACT, INSTAGRAM_URL, instagramPostUrl } from '../../content/site';
import * as S from './styles';

const posts = [
  { id: 'Dcjqz0QJ6nx', path: 'reel', image: postOne, label: 'Reflexões em vídeo', alt: 'Evelyn sorrindo e apontando para a câmera' },
  { id: 'DchDJz_pBgj', path: 'reel', image: postTwo, label: 'Conversas sobre o cansaço', alt: 'Evelyn sorrindo em frente a uma estante' },
  { id: 'DcYr1VOxInE', path: 'p', image: postThree, label: 'Pare, olhe, escute', alt: 'Placa ferroviária com a mensagem Pare, olhe, escute' },
  { id: 'DK-aKj1B1Sk', path: 'reel', image: postFour, label: 'A terapia é um trabalho a dois', alt: 'Evelyn e outra mulher sorrindo diante de um bolo' },
  { id: 'DbmLrqZp5cX', path: 'reel', image: postFive, label: 'O amor mora na falta', alt: 'Pintura de uma porta com a frase O amor mora na falta' },
];

const getOffset = (index, active) => {
  let offset = index - active;
  if (offset > posts.length / 2) offset -= posts.length;
  if (offset < -posts.length / 2) offset += posts.length;
  return offset;
};

export default function Instagram() {
  const [active, setActive] = useState(0);
  const dragStart = useRef(null);
  const suppressClick = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const post = posts[active];
  const move = (direction) => setActive((current) => (current + direction + posts.length) % posts.length);

  const handlePointerUp = (event) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    suppressClick.current = Math.abs(distance) >= 48;
    if (suppressClick.current) move(distance < 0 ? 1 : -1);
  };

  return (
    <S.Section id="conteudos" aria-labelledby="instagram-title">
      <S.Aura aria-hidden="true" />
      <S.Inner>
        <S.Header as={motion.div} {...motionState(shouldReduceMotion)} variants={reveal}>
          <div>
            <S.Kicker as="a" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Abrir o Instagram da Evelyn"><FaInstagram aria-hidden="true" /> {CONTACT.instagramHandle}</S.Kicker>
            <S.Title id="instagram-title">Conteúdos para continuar pensando.</S.Title>
          </div>
          <S.Intro>Entre uma sessão e outra, compartilho perguntas e reflexões que podem abrir espaço para um novo olhar sobre o que você vive.</S.Intro>
        </S.Header>

        <S.Carousel aria-roledescription="carrossel" aria-label="Publicações do Instagram da Evelyn">
          <S.Viewport
            tabIndex="0"
            onPointerDown={(event) => { dragStart.current = event.clientX; }}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { dragStart.current = null; }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') move(1);
              if (event.key === 'ArrowLeft') move(-1);
            }}
          >
            {posts.map((item, index) => {
              const offset = getOffset(index, active);
              const visible = Math.abs(offset) <= 1;
              return (
                <S.Slide key={item.id} $offset={offset} $active={index === active} aria-hidden={!visible}>
                  <S.SlideLink
                    href={instagramPostUrl(item.path, item.id)}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={visible ? 0 : -1}
                    onClick={(event) => {
                      if (suppressClick.current) event.preventDefault();
                      suppressClick.current = false;
                    }}
                    aria-label={`Abrir publicação no Instagram: ${item.label}`}
                  >
                    <img src={item.image} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                    <S.GlassCaption>
                      <span>{index === active ? 'Em destaque' : `Publicação ${String(index + 1).padStart(2, '0')}`}</span>
                      <strong>{item.label}</strong>
                    </S.GlassCaption>
                  </S.SlideLink>
                </S.Slide>
              );
            })}
          </S.Viewport>

          <S.Toolbar>
            <S.ActiveCopy aria-live="polite">
              <span>{String(active + 1).padStart(2, '0')} / {String(posts.length).padStart(2, '0')}</span>
              <a href={instagramPostUrl(post.path, post.id)} target="_blank" rel="noreferrer">Ver no Instagram <FaArrowRight aria-hidden="true" /></a>
            </S.ActiveCopy>
            <S.Controls>
              <button type="button" onClick={() => move(-1)} aria-label="Publicação anterior"><FaArrowLeft /></button>
              <S.Dots aria-label="Selecionar publicação">
                {posts.map((item, index) => <button key={item.id} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Ver publicação ${index + 1}`} aria-current={index === active ? 'true' : undefined} />)}
              </S.Dots>
              <button type="button" onClick={() => move(1)} aria-label="Próxima publicação"><FaArrowRight /></button>
            </S.Controls>
          </S.Toolbar>
        </S.Carousel>
      </S.Inner>
    </S.Section>
  );
}
