import { FaRegHeart, FaRegLightbulb, FaRegUser } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import evelynProfile from '../../assets/brand/evelyn-profile-v2.png';
import * as S from './styles';

const principles = [
  { icon: FaRegHeart, title: 'ESCUTAR', text: 'Dar lugar àquilo que muitas vezes não encontra espaço para ser dito.' },
  { icon: FaRegUser, title: 'ENCONTRAR', text: 'A análise se constrói no encontro entre duas pessoas, em um espaço compartilhado de confiança e escuta.' },
  { icon: FaRegLightbulb, title: 'SUSTENTAR', text: 'Nem tudo precisa ser compreendido de imediato. Algumas experiências precisam primeiro ser sustentadas.' },
];

export default function About() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section id="sobre" aria-labelledby="about-title">
      <S.Intro>
        <motion.div {...state} variants={reveal}>
          <S.Kicker>Sobre mim</S.Kicker>
          <S.Title id="about-title">Prazer, eu sou Evelyn.</S.Title>
          <S.Profile>
            <img src={evelynProfile} alt="Evelyn Peneluppi" />
            <div><strong>Evelyn Peneluppi</strong><span>Psicóloga · Psicanalista</span></div>
          </S.Profile>
        </motion.div>
        <motion.div {...state} variants={reveal}>
          <S.Text>Meu trabalho, orientado pela psicanálise, parte da escuta e do encontro. Na terapia, você não precisa chegar com respostas prontas, nosso ponto de partida é aquilo que hoje pede espaço.</S.Text>
          <S.Text>Acredito na clínica como um espaço construído a dois: um lugar de confiança e sustentação, onde aquilo que é dito e também aquilo que ainda não encontrou palavras pode ser escutado, pensado e elaborado.</S.Text>
        </motion.div>
      </S.Intro>
      <S.Principles as={motion.div} {...state} variants={stagger}>
        {principles.map(({ icon: Icon, title, text }, index) => (
          <S.Card as={motion.article} variants={revealSoft} key={title}>
            <S.CardTop><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span></S.CardTop>
            <h3>{title}</h3><p>{text}</p>
          </S.Card>
        ))}
      </S.Principles>
    </S.Section>
  );
}
