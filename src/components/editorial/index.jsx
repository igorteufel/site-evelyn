import { motion, useReducedMotion } from 'framer-motion';
import { FaVideo } from 'react-icons/fa';
import evelynPortrait from '../../assets/brand/evelyn-profile-v2.png';
import { motionState, reveal } from '../../styles/motion';
import * as S from './styles';

export default function Editorial() {
  const state = motionState(useReducedMotion());
  return (
    <S.Section aria-label="Mensagem sobre iniciar terapia">
      <S.Inner>
        <S.Copy as={motion.div} {...state} variants={reveal}>
          <span aria-hidden="true">“</span>
          <h2>Você não precisa esperar tudo ficar insustentável para começar a cuidar de si.</h2>
          <p>A terapia também pode ser um lugar de descoberta, não apenas de urgência.</p>
        </S.Copy>
        <S.Portrait as={motion.div} {...state} variants={reveal}>
          <img src={evelynPortrait} alt="Evelyn Peneluppi em um retrato próximo" />
          <S.OnlineBadge><FaVideo aria-hidden="true" /><span>Atendimento online<strong>pelo Google Meet</strong></span></S.OnlineBadge>
        </S.Portrait>
      </S.Inner>
    </S.Section>
  );
}
