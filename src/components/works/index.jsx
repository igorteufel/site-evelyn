import {
  FaCheck,
  FaGlobe,
  FaHeart,
  FaMousePointer,
  FaRegCircle,
  FaRegSmile,
} from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import brainFriendly from '../../assets/brand/brain-friendly-thinking.png';
import accountsScreen from '../../assets/screens/accounts.png';
import {
  motionState,
  reveal,
  revealMask,
  revealSoft,
  stagger,
} from '../../styles/motion';
import * as S from './styles';

const beforeItems = [
  {
    title: 'A agenda está aqui. As contas, ali.',
    text: 'E você acaba fazendo a ponte entre tudo.',
  },
  {
    title: 'Muitas abas para uma tarefa simples',
    text: 'Cada troca de ferramenta quebra um pouco o ritmo.',
  },
  {
    title: 'Um histórico que exige procura',
    text: 'Encontrar o contexto toma um tempo que já é curto.',
  },
  {
    title: 'Lembretes demais na cabeça',
    text: 'Pendências importantes não deveriam depender da memória.',
  },
];

const afterItems = [
  {
    title: 'Tudo conversa no mesmo lugar',
    text: 'Agenda, prontuário, Jornada e financeiro seguem o mesmo fluxo.',
  },
  {
    title: 'O próximo passo fica claro',
    text: 'A Brain prioriza o que pede atenção sem decidir por você.',
  },
  {
    title: 'Cada história continua de onde parou',
    text: 'O contexto do paciente está à mão quando você precisa.',
  },
  {
    title: 'As pendências deixam de pesar',
    text: 'A plataforma ajuda a lembrar, organizar e acompanhar.',
  },
];

const differentials = [
  {
    icon: FaMousePointer,
    title: 'Você entende de primeira',
    text: 'Uma interface direta, sem caminhos escondidos.',
  },
  {
    icon: FaHeart,
    title: 'Pensada para quem escuta',
    text: 'O fluxo acompanha a rotina real de psicólogos.',
  },
  {
    icon: FaRegSmile,
    title: 'Leve para aprender',
    text: 'Pouco atrito para começar e seguir usando.',
  },
  {
    icon: FaGlobe,
    title: 'Aberta onde você estiver',
    text: 'Acesse pelo navegador, sem depender de instalação.',
  },
];

const MotionIntro = motion.create(S.Intro);
const MotionComparison = motion.create(S.Comparison);
const MotionComparisonSide = motion.create(S.ComparisonSide);
const MotionTransformationList = motion.create(S.TransformationList);
const MotionComparisonItem = motion.create(S.ComparisonItem);
const MotionMascotBridge = motion.create(S.MascotBridge);
const MotionCareBlock = motion.create(S.CareBlock);
const MotionDifferentialList = motion.create(S.DifferentialList);
const MotionDifferential = motion.create(S.Differential);
const MotionProductShowcase = motion.create(S.ProductShowcase);
const MotionTitle = motion.create(S.Title);

export default function Works() {
  const shouldReduceMotion = useReducedMotion();
  const revealState = motionState(shouldReduceMotion);

  return (
    <S.Section id="rotina">
      <MotionIntro {...revealState} variants={reveal}>
        <S.Kicker>Na prática</S.Kicker>
        <MotionTitle variants={revealMask}>
          Menos malabarismo. Mais tempo para cuidar.
        </MotionTitle>
        <S.Subtitle>
          A Helpsi reúne o que hoje vive espalhado e devolve leveza para a sua
          rotina sem complicar o jeito que você trabalha.
        </S.Subtitle>
      </MotionIntro>

      <MotionComparison {...revealState} variants={stagger}>
        <MotionComparisonSide variants={revealSoft}>
          <S.SideHeader>
            <span>Antes da Helpsi</span>
            <strong>Tudo pede a sua atenção</strong>
          </S.SideHeader>
          <MotionTransformationList variants={stagger}>
            {beforeItems.map((item) => (
              <MotionComparisonItem
                $tone="negative"
                key={item.title}
                variants={reveal}
              >
                <S.StatusIcon $tone="negative">
                  <FaRegCircle />
                </S.StatusIcon>
                <S.ItemCopy>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </S.ItemCopy>
              </MotionComparisonItem>
            ))}
          </MotionTransformationList>
        </MotionComparisonSide>

        <MotionMascotBridge
          aria-label="A Helpsi deixa sua rotina mais leve"
          variants={revealSoft}
        >
          <img src={brainFriendly} alt="Brain, mascote da Helpsi" />
          <span>Respira. A gente organiza.</span>
        </MotionMascotBridge>

        <MotionComparisonSide $tone="positive" variants={revealSoft}>
          <S.SideHeader $tone="positive">
            <span>Com a Helpsi</span>
            <strong>Sua rotina encontra um ritmo</strong>
          </S.SideHeader>
          <MotionTransformationList variants={stagger}>
            {afterItems.map((item) => (
              <MotionComparisonItem
                $tone="positive"
                key={item.title}
                variants={reveal}
              >
                <S.StatusIcon $tone="positive">
                  <FaCheck />
                </S.StatusIcon>
                <S.ItemCopy>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </S.ItemCopy>
              </MotionComparisonItem>
            ))}
          </MotionTransformationList>
        </MotionComparisonSide>
      </MotionComparison>

      <MotionCareBlock {...revealState} variants={revealSoft}>
        <S.CareCopy>
          <S.Kicker>Feita para quem cuida de pessoas</S.Kicker>
          <h2>
            Contexto clínico e gestão caminham juntos para você manter o foco no
            atendimento humano.
          </h2>
          <p>
            Psicólogos autônomos, clínicas, consultórios particulares e
            profissionais em crescimento podem usar a plataforma para reduzir a
            carga operacional sem deixar a rotina impessoal.
          </p>

          <MotionDifferentialList variants={stagger}>
            {differentials.map(({ icon: Icon, title, text }) => (
              <MotionDifferential key={title} variants={reveal}>
                <S.DifferentialIcon aria-hidden="true">
                  <Icon />
                </S.DifferentialIcon>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </MotionDifferential>
            ))}
          </MotionDifferentialList>
        </S.CareCopy>

        <MotionProductShowcase
          aria-label="Tela de Contas da Helpsi"
          variants={revealSoft}
        >
          <S.AccountsPreview>
            <img
              src={accountsScreen}
              alt="Tela de Contas da Helpsi com resumo financeiro e situação dos pagamentos"
            />
            <figcaption>Controle financeiro em uma única visão</figcaption>
          </S.AccountsPreview>
        </MotionProductShowcase>
      </MotionCareBlock>
    </S.Section>
  );
}
