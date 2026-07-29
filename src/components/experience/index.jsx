import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import brainVideo from '../../assets/video/brain.mp4';
import brainPoster from '../../assets/video/brain-poster.png';
import * as S from './styles';

export default function Experience() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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
    <S.Section aria-labelledby="experience-title">
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

      <S.Scrim aria-hidden="true" />

      <S.Content>
        <S.Kicker>A experiência Helpsi</S.Kicker>
        <S.Title id="experience-title">
          Tecnologia que acolhe desde o primeiro acesso.
        </S.Title>
        <S.Text>
          Uma plataforma pode ser completa sem ser complicada. A Helpsi une
          organização, clareza e uma identidade feita para tornar a rotina mais
          leve.
        </S.Text>
        <S.Tags aria-label="Características da experiência">
          <span>Simples de usar</span>
          <span>Feita para saúde mental</span>
        </S.Tags>
      </S.Content>

      <S.PlaybackButton
        type="button"
        onClick={togglePlayback}
        aria-label={isPaused ? 'Reproduzir vídeo' : 'Pausar vídeo'}
      >
        {isPaused ? <FaPlay /> : <FaPause />}
      </S.PlaybackButton>

      <S.Signature>
        <strong>Brain</strong>
        <span>A identidade viva da Helpsi</span>
      </S.Signature>
    </S.Section>
  );
}
