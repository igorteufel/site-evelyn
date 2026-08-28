import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaBrain,
  FaCalendarCheck,
  FaChartLine,
  FaPause,
  FaPlay,
  FaRoute,
  FaUserFriends,
  FaWallet,
} from 'react-icons/fa';
import brainVideo from '../../assets/video/brain.mp4';
import brainPoster from '../../assets/video/brain-poster.png';
import { motionState, reveal, revealSoft, stagger } from '../../styles/motion';
import * as S from './styles';

const experienceFeatures = [
  {
    icon: FaCalendarCheck,
    title: 'Uma agenda que não te atropela',
    text: 'Você enxerga o dia com clareza e sabe o que vem depois.',
  },
  {
    icon: FaUserFriends,
    title: 'Cada pessoa dentro do seu contexto',
    text: 'Anamnese, medicações informadas e prontuário reunidos sem reduzir cuidado a cadastro.',
  },
  {
    icon: FaRoute,
    title: 'Histórias que continuam de onde pararam',
    text: 'A evolução e os marcos do acompanhamento ficam fáceis de retomar.',
  },
  {
    icon: FaWallet,
    title: 'Contas sem aquele nó na cabeça',
    text: 'Recebimentos e pendências aparecem com clareza, sem caça aos dados.',
  },
  {
    icon: FaChartLine,
    title: 'Um olhar simples para o todo',
    text: 'Indicadores mostram o ritmo do consultório sem excesso de informação.',
  },
  {
    icon: FaBrain,
    title: 'A Brain organiza o próximo passo',
    text: 'Resumos do dia e atenções priorizadas levam você direto ao que precisa de ação.',
  },
];

const MotionVideoFrame = motion.create(S.VideoFrame);
const MotionContent = motion.create(S.Content);
const MotionFeatureGrid = motion.create(S.FeatureGrid);
const MotionFeature = motion.create(S.Feature);

export default function Experience() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const revealState = motionState(shouldReduceMotion);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setIsPaused(true));
    } else {
      video.pause();
    }
  };

  return (
    <S.Section id="experiencia" aria-labelledby="experience-title">
      <S.Inner>
        <MotionVideoFrame {...revealState} variants={revealSoft}>
          <S.Video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={brainPoster}
            onPlay={() => setIsPaused(false)}
            onPause={() => setIsPaused(true)}
          >
            <source src={brainVideo} type="video/mp4" />
            Seu navegador não oferece suporte à reprodução deste vídeo.
          </S.Video>

          <S.PlaybackButton
            type="button"
            onClick={togglePlayback}
            aria-label={isPaused ? 'Reproduzir vídeo' : 'Pausar vídeo'}
          >
            {isPaused ? <FaPlay /> : <FaPause />}
          </S.PlaybackButton>
        </MotionVideoFrame>

        <MotionContent {...revealState} variants={reveal}>
          <S.Kicker>A experiência Helpsi</S.Kicker>
          <S.Title id="experience-title">
            Tecnologia que acolhe desde o primeiro acesso.
          </S.Title>
          <S.Text>
            Uma plataforma pode ser completa sem ser complicada. A Helpsi une
            organização, clareza e uma identidade feita para tornar a rotina mais
            leve.
          </S.Text>
          <MotionFeatureGrid
            aria-label="Recursos da experiência Helpsi"
            variants={stagger}
          >
            {experienceFeatures.map(({ icon: Icon, title, text }, index) => (
              <MotionFeature key={title} variants={reveal}>
                <S.FeatureIcon aria-hidden="true">
                  <Icon />
                </S.FeatureIcon>
                <S.FeatureCopy>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </S.FeatureCopy>
              </MotionFeature>
            ))}
          </MotionFeatureGrid>
        </MotionContent>

        <S.Signature>
          <strong>Brain</strong>
          <span>A identidade viva da Helpsi</span>
        </S.Signature>
      </S.Inner>
    </S.Section>
  );
}
