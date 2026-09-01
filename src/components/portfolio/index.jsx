import { FaVideo } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import evelynWithDogs from '../../assets/brand/evelyn-com-cachorros.jpg';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const steps = [
  { title: 'Primeiro contato', text: 'Você me chama pelo WhatsApp, conta brevemente o que procura e esclarecemos as primeiras dúvidas.' },
  { title: 'Combinamos o encontro', text: 'Conversamos sobre disponibilidade, formato do atendimento e o que você precisa para começar.' },
  { title: 'Construímos o processo', text: 'A cada sessão, criamos um espaço de escuta, compreensão e elaboração no seu ritmo.' },
];

export default function Portfolio() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section id="processo" aria-labelledby="process-title">
      <S.Inner>
        <S.Header as={motion.div} {...state} variants={reveal}>
          <S.Kicker>Como funciona</S.Kicker>
          <S.Title id="process-title">Começar pode ser mais simples do que parece.</S.Title>
          <S.Subtitle>Você não precisa ter certeza sobre tudo. A primeira conversa existe justamente para entender se este cuidado faz sentido para você.</S.Subtitle>
        </S.Header>
        <S.Content>
          <S.Visual as={motion.figure} {...state} variants={revealSoft}>
            <img src={evelynWithDogs} alt="Evelyn com seus dois cachorros em frente a uma igreja" loading="lazy" />
            <S.VisualNote><FaVideo aria-hidden="true" /><span>Atendimento online<strong>Google Meet · 50 minutos</strong></span></S.VisualNote>
          </S.Visual>
          <S.Steps as={motion.div} {...state} variants={stagger}>
            {steps.map(({ title, text }, index) => (
              <S.Step as={motion.article} variants={revealSoft} key={title}>
                <S.Number>{index + 1}</S.Number>
                <div><h3>{title}</h3><p>{text}</p></div>
              </S.Step>
            ))}
          </S.Steps>
        </S.Content>
      </S.Inner>
    </S.Section>
  );
}
