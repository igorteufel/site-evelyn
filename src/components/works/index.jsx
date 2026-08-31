import { FaCloudRain, FaCompass, FaExchangeAlt, FaHeart, FaLink, FaRegMoon } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import calmImage from '../../assets/brand/support-calm.jpg';
import connectionImage from '../../assets/brand/support-connection.jpg';
import growthImage from '../../assets/brand/support-growth.jpg';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const groups = [
  {
    image: calmImage,
    alt: 'Caderno e xícara de chá iluminados pela luz da manhã',
    themes: [
      { icon: FaCloudRain, title: 'Ansiedade e preocupações', text: 'Quando os pensamentos parecem não desligar e o corpo vive em alerta.' },
      { icon: FaRegMoon, title: 'Sobrecarga emocional', text: 'Quando dar conta de tudo começa a custar mais do que deveria.' },
    ],
  },
  {
    image: connectionImage,
    alt: 'Duas mulheres conversando de forma acolhedora',
    themes: [
      { icon: FaLink, title: 'Relacionamentos', text: 'Para compreender vínculos, limites, conflitos e formas de se relacionar.' },
      { icon: FaHeart, title: 'Autoestima', text: 'Para construir uma relação mais gentil e honesta com quem você é.' },
    ],
  },
  {
    image: growthImage,
    alt: 'Caminho entre árvores seguindo em direção ao horizonte',
    themes: [
      { icon: FaExchangeAlt, title: 'Mudanças e transições', text: 'Para atravessar encerramentos, recomeços e fases de incerteza.' },
      { icon: FaCompass, title: 'Autoconhecimento', text: 'Para reconhecer padrões e fazer escolhas com mais consciência.' },
    ],
  },
];

export default function Works() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section id="acolhimento" aria-labelledby="support-title">
      <S.Inner>
        <S.Header as={motion.div} {...state} variants={reveal}>
          <S.Kicker>Como posso ajudar</S.Kicker>
          <S.Title id="support-title">Talvez você esteja vivendo algo que ainda não conseguiu nomear.</S.Title>
          <S.Subtitle>Alguns temas que podem encontrar acolhimento no processo terapêutico:</S.Subtitle>
        </S.Header>
        <S.Grid as={motion.div} {...state} variants={stagger}>
          {groups.map(({ image, alt, themes }) => (
            <S.Card as={motion.article} variants={revealSoft} key={alt}>
              <S.CardImage src={image} alt={alt} loading="lazy" />
              <S.CardBody>
                {themes.map(({ icon: Icon, title, text }) => (
                  <S.Theme key={title}>
                    <S.Icon><Icon aria-hidden="true" /></S.Icon>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </S.Theme>
                ))}
              </S.CardBody>
            </S.Card>
          ))}
        </S.Grid>
        <S.Footnote>Você não precisa se encaixar em uma categoria para pedir ajuda. Sua experiência é o ponto de partida.</S.Footnote>
      </S.Inner>
    </S.Section>
  );
}
