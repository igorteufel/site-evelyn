import { motion, useReducedMotion } from 'framer-motion';
import { FaVideo } from 'react-icons/fa';
import evelynPortrait from '../../assets/brand/evelyn-editorial.png';
import { motionState, reveal } from '../../styles/motion';
import * as S from './styles';

export default function Editorial() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section aria-label="Mensagem sobre iniciar terapia">
      <S.Inner>
        <S.Copy as={motion.div} {...state} variants={reveal}>
          <span aria-hidden="true">“</span>
          <h2>E se aquilo que você sente também merecesse um espaço para existir?</h2>
          <p>A terapia pode ser um lugar para escutar o que, no cotidiano, acaba ficando sem espaço.</p>
        </S.Copy>
        <S.Portrait as={motion.div} {...state} variants={reveal}>
          <img src={evelynPortrait} alt="Evelyn Peneluppi sentada à mesa com uma caneta na mão" />
          <S.OnlineBadge><FaVideo aria-hidden="true" /><span>Atendimento online<strong>pelo Google Meet</strong></span></S.OnlineBadge>
        </S.Portrait>
      </S.Inner>
    </S.Section>
  );
}
