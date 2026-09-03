import { FaRegHeart, FaRegLightbulb, FaRegUser } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import evelynProfile from '../../assets/brand/evelyn-profile.jpg';
import * as S from './styles';

const principles = [
  { icon: FaRegHeart, title: 'ESCUTAR', text: 'Dar lugar àquilo que muitas vezes não encontra espaço para ser dito.' },
  { icon: FaRegUser, title: 'ENCONTRAR', text: 'A análise se constrói no encontro entre duas pessoas, em um espaço compartilhado de confiança e escuta.' },
  { icon: FaRegLightbulb, title: 'SUSTENTAR', text: 'Nem tudo precisa ser compreendido de imediato. Algumas experiências pedem sustentação.' },
];

export default function About() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section id="sobre" aria-labelledby="about-title">
      <S.Intro>
        <motion.div {...state} variants={reveal}>
          <S.Kicker>Sobre mim</S.Kicker>
          <S.Title id="about-title">Prazer, eu sou a Evelyn.</S.Title>
          <S.Profile>
            <img src={evelynProfile} alt="Retrato de Evelyn Peneluppi" width="320" height="320" loading="lazy" decoding="async" />
            <div><strong>Evelyn Peneluppi</strong><span>Psicóloga · Psicanalista · CRP 06/137667</span></div>
          </S.Profile>
          <S.ProfessionalDetails>
            <span>Evelyn Vieira Paiva Peneluppi de Oliveira é psicóloga e psicanalista (CRP 06/137667), atua a partir de Jacareí - SP e atende exclusivamente online adolescentes e adultos.</span>
          </S.ProfessionalDetails>
        </motion.div>
        <S.Copy as={motion.div} {...state} variants={reveal}>
          <S.Text>Meu trabalho, orientado pela psicanálise, parte da escuta e do encontro. Na terapia, você não precisa chegar com respostas prontas, nosso ponto de partida é aquilo que hoje pede espaço.</S.Text>
          <S.Text>Acredito na clínica como um espaço construído a dois: um lugar de confiança e sustentação, onde aquilo que é dito e também aquilo que ainda não encontrou palavras pode ser escutado, pensado e elaborado.</S.Text>
        </S.Copy>
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
