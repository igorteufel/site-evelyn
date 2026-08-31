import { FaArrowRight } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import { motionState, reveal } from '../../styles/motion';
import * as S from './styles';

const questions = [
  { question: 'Como sei se a terapia é para mim?', answer: 'Você não precisa estar em uma crise ou ter um diagnóstico para começar. Se algo tem causado sofrimento, dúvida ou vontade de se compreender melhor, a terapia pode ser um espaço possível.' },
  { question: 'Como funciona a primeira sessão?', answer: 'Na primeira sessão, você pode me contar o que trouxe você até aqui, conhecer minha forma de trabalho e perceber como se sente neste espaço. Não é necessário preparar um roteiro.' },
  { question: 'Qual é a duração e a frequência?', answer: 'Cada atendimento dura 50 minutos e é realizado de forma online, pelo Google Meet. A frequência é combinada diretamente comigo, de acordo com a proposta do acompanhamento.' },
  { question: 'Como consultar horários e valores?', answer: 'Você pode me chamar pelo WhatsApp. Compartilho com você as informações atualizadas de agenda, formato e investimento antes de decidir.' },
];

export default function Experience() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section id="duvidas" aria-labelledby="faq-title">
      <S.Side as={motion.div} {...state} variants={reveal}>
        <S.Kicker>Dúvidas frequentes</S.Kicker>
        <S.Title id="faq-title">Antes de começar, é natural querer entender melhor.</S.Title>
        <S.Contact href="#contato">Ainda ficou alguma dúvida? <FaArrowRight aria-hidden="true" /></S.Contact>
      </S.Side>
      <S.List as={motion.div} {...state} variants={reveal}>
        {questions.map(({ question, answer }, index) => <S.Question key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span>{question}</summary><p>{answer}</p></S.Question>)}
      </S.List>
    </S.Section>
  );
}
