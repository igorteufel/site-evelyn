import { FaRegHeart, FaRegLightbulb, FaRegUser } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import evelynProfile from '../../assets/brand/evelyn-profile-v2.png';
import * as S from './styles';

const principles = [
  { icon: FaRegHeart, title: 'Acolhimento sem julgamento', text: 'Um encontro em que você pode trazer o que sente no seu próprio ritmo.' },
  { icon: FaRegUser, title: 'Cuidado singular', text: 'Conduzo cada acompanhamento considerando sua história, seu contexto e o momento que você está vivendo.' },
  { icon: FaRegLightbulb, title: 'Clareza para novos caminhos', text: 'Juntos, damos nome ao que pesa e ampliamos as possibilidades de escolha.' },
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
            <div><strong>Evelyn Peneluppi</strong><span>Psicóloga · Psicanálise</span></div>
          </S.Profile>
        </motion.div>
        <motion.div {...state} variants={reveal}>
          <S.Text>Meu trabalho, orientado pela psicanálise, parte de uma escuta atenta, ética e humana. Na terapia, você não precisa chegar com respostas prontas — nosso ponto de partida é aquilo que hoje pede espaço.</S.Text>
          <S.Text>Acredito em um processo construído com presença e respeito, capaz de ajudar você a compreender sua história sem se reduzir a ela.</S.Text>
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
