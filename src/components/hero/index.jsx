import { FaArrowDown, FaLock, FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import heroPortrait from '../../assets/brand/evelyn-hero.jpg';
import { WHATSAPP_URL } from '../../content/site';
import { motionState, reveal, revealMask, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const MotionCopy = motion.create(S.Copy);
const MotionVisual = motion.create(S.Visual);

export default function Hero() {
  const revealState = motionState(useReducedMotion());
  return (
    <S.Section id="inicio">
      <S.Orb aria-hidden="true" />
      <S.SecondaryOrb aria-hidden="true" />
      <S.DotField aria-hidden="true" />
      <S.Inner>
        <MotionCopy {...revealState} variants={stagger}>
          <motion.p variants={reveal} className="eyebrow">Psicologia clínica · Psicanálise</motion.p>
          <motion.h1 variants={revealMask}>Um espaço para que aquilo que ainda não pôde ser pensado possa começar a <em>existir em palavras.</em></motion.h1>
          <motion.p variants={reveal} className="lead">A análise acontece no espaço que construímos juntos.</motion.p>
          <motion.div variants={reveal} className="actions">
            <S.PrimaryAction href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> Agendar uma conversa</S.PrimaryAction>
            <S.SecondaryAction href="#sobre">Conhecer meu trabalho</S.SecondaryAction>
          </motion.div>
          <motion.div variants={reveal} className="privacy"><FaLock aria-hidden="true" /> Atendimento ético, acolhedor e confidencial</motion.div>
        </MotionCopy>
        <MotionVisual {...revealState} variants={revealSoft}>
          <S.ImageFrame><img src={heroPortrait} alt="Retrato de Evelyn Peneluppi" /></S.ImageFrame>
          <S.GlassMessage>
            <FaRegHeart aria-hidden="true" />
            <div><span>Um encontro por vez</span><strong>Escuta sem pressa.</strong></div>
          </S.GlassMessage>
          <S.Note><span>Psicóloga · Psicanalista</span><p>Evelyn<br />Peneluppi</p></S.Note>
        </MotionVisual>
      </S.Inner>
      <S.ScrollLink href="#sobre">Conheça esta proposta <FaArrowDown aria-hidden="true" /></S.ScrollLink>
    </S.Section>
  );
}
