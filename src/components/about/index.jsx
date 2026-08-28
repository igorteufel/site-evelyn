import { FaLock, FaRegClock, FaRegFolderOpen } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import {
  motionState,
  reveal,
  revealMask,
  revealSoft,
  stagger,
} from '../../styles/motion';
import * as S from './styles';

const highlights = [
  {
    icon: <FaRegFolderOpen />,
    title: 'Sua rotina volta a conversar',
    text: 'Agenda, pacientes, atendimentos e pagamentos seguem juntos, sem você precisar fazer a ponte.',
  },
  {
    icon: <FaRegClock />,
    title: 'O contexto acompanha cada sessão',
    text: 'Anamnese, medicações informadas, prontuário e Jornada continuam de onde você parou.',
  },
  {
    icon: <FaLock />,
    title: 'Você encontra sem procurar',
    text: 'As informações importantes ficam organizadas e prontas quando você precisar delas.',
  },
];

const metrics = [
  { value: '1', label: 'plataforma centralizada' },
  { value: '6', label: 'áreas essenciais conectadas' },
  { value: '100%', label: 'acesso pelo navegador' },
  { value: 'Brain', label: 'apoio contextual à rotina' },
];

const MotionSectionIntro = motion.create(S.SectionIntro);
const MotionHighlightGrid = motion.create(S.HighlightGrid);
const MotionHighlightCard = motion.create(S.HighlightCard);
const MotionMetrics = motion.create(S.Metrics);
const MotionMetric = motion.create(S.Metric);
const MotionTitle = motion.create(S.Title);

function About() {
  const shouldReduceMotion = useReducedMotion();
  const revealState = motionState(shouldReduceMotion);

  return (
    <S.Section id="plataforma">
      <MotionSectionIntro {...revealState} variants={reveal}>
        <S.Kicker>O que é a Helpsi</S.Kicker>
        <MotionTitle variants={revealMask}>
          Uma rotina mais clara para quem precisa estar presente no atendimento.
        </MotionTitle>
        <S.Subtitle>
          Uma plataforma de gestão criada para psicólogos e profissionais da
          saúde mental que desejam organizar a rotina de atendimentos de forma
          simples, integrada e eficiente.
        </S.Subtitle>
      </MotionSectionIntro>

      <MotionHighlightGrid {...revealState} variants={stagger}>
        {highlights.map((item, index) => (
          <MotionHighlightCard key={item.title} variants={revealSoft}>
            <S.HighlightTopline>
              <S.Icon>{item.icon}</S.Icon>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </S.HighlightTopline>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </MotionHighlightCard>
        ))}
      </MotionHighlightGrid>

      <MotionMetrics
        aria-label="Principais números da plataforma"
        {...revealState}
        variants={stagger}
      >
        {metrics.map((metric) => (
          <MotionMetric key={metric.label} variants={reveal}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </MotionMetric>
        ))}
      </MotionMetrics>
    </S.Section>
  );
}

export default About;
