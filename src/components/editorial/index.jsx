import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  FaArrowDown,
  FaBell,
  FaChartLine,
  FaHeart,
  FaLayerGroup,
  FaRoute,
} from 'react-icons/fa';
import brainFriendly from '../../assets/brand/brain-friendly-thinking.png';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const MotionHeader = motion.create(S.Header);
const MotionSplit = motion.create(S.Split);
const MotionPanel = motion.create(S.Panel);
const MotionBrain = motion.create(S.Brain);

export default function Editorial() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const revealState = motionState(shouldReduceMotion);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 28,
    restDelta: 0.001,
  });
  const headerClip = useTransform(
    smoothProgress,
    [0.04, 0.24],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  );
  const leftX = useTransform(smoothProgress, [0, 0.48, 1], [-110, 0, -34]);
  const leftRotate = useTransform(smoothProgress, [0, 0.48, 1], [-4, 0, -1]);
  const rightX = useTransform(smoothProgress, [0, 0.48, 1], [110, 0, 34]);
  const rightRotate = useTransform(smoothProgress, [0, 0.48, 1], [4, 0, 1]);
  const brainScale = useTransform(smoothProgress, [0, 0.48, 1], [0.72, 1.06, 0.9]);
  const brainRotate = useTransform(smoothProgress, [0, 0.48, 1], [-8, 0, 5]);

  return (
    <S.Section ref={sectionRef} id="visao" aria-labelledby="editorial-title">
      <S.Marquee aria-hidden="true">
        {[0, 1].map((group) => (
          <S.MarqueeGroup key={group}>
            <span>CUIDAR</span>
            <i>•</i>
            <span>ORGANIZAR</span>
            <i>•</i>
            <span>RESPIRAR</span>
            <i>•</i>
          </S.MarqueeGroup>
        ))}
      </S.Marquee>

      <S.Inner>
        <MotionHeader
          style={shouldReduceMotion ? undefined : { clipPath: headerClip }}
        >
          <S.Kicker>A Brain no centro da rotina</S.Kicker>
          <h2 id="editorial-title">
            Você cuida da pessoa.
            <span>A Brain ajuda a enxergar o caminho.</span>
          </h2>
          <p>
            A Brain reúne os sinais do dia, prioriza o que precisa de atenção e
            leva você direto à próxima ação. Tudo isso sem decidir por você.
          </p>
        </MotionHeader>

        <MotionSplit {...revealState} variants={stagger}>
          <MotionPanel
            variants={revealSoft}
            style={shouldReduceMotion ? undefined : { x: leftX, rotate: leftRotate }}
          >
            <S.PanelTopline>
              <FaHeart />
              <span>Seu espaço</span>
            </S.PanelTopline>
            <strong>Cuidar</strong>
            <p>Escutar, acompanhar e construir vínculo com cada pessoa.</p>
            <small>Presença não se automatiza.</small>
          </MotionPanel>

          <MotionBrain
            variants={reveal}
            style={
              shouldReduceMotion
                ? undefined
                : { scale: brainScale, rotate: brainRotate }
            }
          >
            <S.BrainSignal $position="clinic">
              <FaChartLine />
              Saúde da clínica
            </S.BrainSignal>
            <S.BrainSignal $position="attention">
              <FaBell />
              O que merece atenção
            </S.BrainSignal>
            <S.BrainSignal $position="next">
              <FaRoute />
              Próximo passo
            </S.BrainSignal>
            <img src={brainFriendly} alt="Brain, mascote da Helpsi" />
            <S.BrainLabel>Brain conecta</S.BrainLabel>
          </MotionBrain>

          <MotionPanel
            $tone="purple"
            variants={revealSoft}
            style={shouldReduceMotion ? undefined : { x: rightX, rotate: rightRotate }}
          >
            <S.PanelTopline>
              <FaLayerGroup />
              <span>Apoio da Brain</span>
            </S.PanelTopline>
            <strong>Organizar</strong>
            <p>Agenda, prontuário, Jornada e financeiro no mesmo fluxo.</p>
            <small>A rotina ganha contexto.</small>
          </MotionPanel>
        </MotionSplit>

        <S.Continue href="#rotina">
          Veja essa transformação na prática
          <FaArrowDown />
        </S.Continue>
      </S.Inner>
    </S.Section>
  );
}
