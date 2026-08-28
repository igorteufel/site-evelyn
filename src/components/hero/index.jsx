import { useEffect, useRef, useState } from 'react';
import {
  FaArrowDown,
  FaCheck,
  FaHeart,
} from 'react-icons/fa';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import heroBackground from '../../assets/brand/hero-purple-background.png';
import accountsScreen from '../../assets/screens/accounts.png';
import agendaScreen from '../../assets/screens/agenda.png';
import clinicHealthScreen from '../../assets/screens/clinic-health-demo-v2.png';
import homeScreen from '../../assets/screens/home-overview.png';
import patientsScreen from '../../assets/screens/patients.png';
import {
  motionState,
  reveal,
  revealMask,
  revealSoft,
  stagger,
} from '../../styles/motion';
import * as S from './styles';

const supportingPoints = [
  'Prontuário e Jornada conectados',
  'Acompanhe a Saúde da Clínica',
  'A Brain destaca o que pede atenção',
];

const heroScreens = [
  {
    id: 'home',
    label: 'Visão geral',
    caption: 'Sua rotina em uma única visão',
    image: homeScreen,
    alt: 'Dashboard Home da Helpsi com indicadores e gráfico financeiro',
  },
  {
    id: 'agenda',
    label: 'Agenda',
    caption: 'O dia organizado sem perder o ritmo',
    image: agendaScreen,
    alt: 'Agenda semanal da Helpsi com compromissos demonstrativos',
  },
  {
    id: 'patients',
    label: 'Pacientes',
    caption: 'Cada pessoa dentro do seu contexto',
    image: patientsScreen,
    alt: 'Gestão de pacientes da Helpsi com dados demonstrativos',
  },
  {
    id: 'accounts',
    label: 'Financeiro',
    caption: 'Contas claras, sem caça aos dados',
    image: accountsScreen,
    alt: 'Controle financeiro da Helpsi com valores demonstrativos',
  },
  {
    id: 'clinic-health',
    label: 'Saúde da clínica + Brain',
    caption: 'Indicadores e atenções que deixam o próximo passo mais claro',
    image: clinicHealthScreen,
    alt: 'Relatório Saúde da Clínica com indicadores e leitura da Brain usando dados demonstrativos',
  },
];

const MotionContent = motion.create(S.Content);
const MotionEyebrow = motion.create(S.Eyebrow);
const MotionTitle = motion.create(S.Title);
const MotionComplement = motion.create(S.Complement);
const MotionButtonContainer = motion.create(S.ButtonContainer);
const MotionSupportingLine = motion.create(S.SupportingLine);
const MotionShowcase = motion.create(S.Showcase);
const MotionContentRail = motion.create(S.ContentRail);
const MotionShowcaseRail = motion.create(S.ShowcaseRail);
const MotionSystemImage = motion.create(S.SystemImage);

function Hero() {
  const heroRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const revealState = motionState(shouldReduceMotion);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });
  const contentY = useTransform(smoothProgress, [0, 1], [0, -72]);
  const contentScale = useTransform(smoothProgress, [0, 1], [1, 0.94]);
  const showcaseY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const showcaseScale = useTransform(smoothProgress, [0, 1], [1, 0.72]);
  const showcaseRotate = useTransform(smoothProgress, [0, 1], [0, -2.5]);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % heroScreens.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const currentScreen = heroScreens[activeScreen];

  return (
    <S.HeroSection ref={heroRef} id="inicio" $background={heroBackground}>
      <S.HeroWord aria-hidden="true">HELPSI</S.HeroWord>
      <S.HeroInner>
        <MotionContentRail
          style={shouldReduceMotion ? undefined : { y: contentY, scale: contentScale }}
        >
          <MotionContent {...revealState} variants={stagger}>
            <MotionEyebrow variants={reveal}>
              <FaHeart />
              Plataforma de gestão para saúde mental
            </MotionEyebrow>

            <MotionTitle variants={revealMask}>
              A gestão do seu consultório, simples e completa.
            </MotionTitle>

            <MotionComplement variants={reveal}>
              Centralize agenda, pacientes, prontuário e financeiro. Conte com a
              Brain para organizar pendências e deixar o próximo passo mais
              claro.
            </MotionComplement>

            <MotionButtonContainer variants={reveal}>
              <S.PrimaryButton href="#contato">
                Conhecer a Helpsi
              </S.PrimaryButton>

              <S.SecondaryButton href="#funcionalidades">
                Conhecer a plataforma
              </S.SecondaryButton>
            </MotionButtonContainer>

            <MotionSupportingLine variants={stagger}>
              {supportingPoints.map((point) => (
                <motion.span key={point} variants={reveal}>
                  <FaCheck />
                  {point}
                </motion.span>
              ))}
            </MotionSupportingLine>
          </MotionContent>
        </MotionContentRail>

        <MotionShowcaseRail
          style={
            shouldReduceMotion
              ? undefined
              : { y: showcaseY, scale: showcaseScale, rotate: showcaseRotate }
          }
        >
          <MotionShowcase
            aria-label="Visão real da plataforma Helpsi"
            {...revealState}
            variants={revealSoft}
          >
            <S.SystemPreview>
              <AnimatePresence initial={false} mode="sync">
                <MotionSystemImage
                  key={currentScreen.id}
                  src={currentScreen.image}
                  alt={currentScreen.alt}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, scale: 1.02 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 0, scale: 1.01 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>

              <S.ScreenCounter aria-hidden="true">
                {String(activeScreen + 1).padStart(2, '0')}
                <span>/ {String(heroScreens.length).padStart(2, '0')}</span>
              </S.ScreenCounter>

              <S.AutoIndicators aria-hidden="true">
                {heroScreens.map((screen, index) => (
                  <span
                    key={screen.id}
                    className={index === activeScreen ? 'active' : ''}
                  />
                ))}
              </S.AutoIndicators>

              <S.PreviewCaption>
                <small>{currentScreen.label}</small>
                {currentScreen.caption}
              </S.PreviewCaption>
            </S.SystemPreview>
          </MotionShowcase>
        </MotionShowcaseRail>

        <S.ScrollCue href="#plataforma">
          Role para descobrir
          <FaArrowDown />
        </S.ScrollCue>
      </S.HeroInner>
    </S.HeroSection>
  );
}

export default Hero;
