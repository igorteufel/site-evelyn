import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: calc(100% + 64px);
  min-height: 560px;
  margin-left: -32px;
  overflow: hidden;
  isolation: isolate;
  border-radius: 28px;
  background: #070a18;
  box-shadow: 0 30px 80px rgba(12, 10, 32, 0.22);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% + 32px);
    min-height: 520px;
    margin-left: -16px;
    border-radius: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 620px;
  }
`;

export const Video = styled.video`
  position: absolute;
  inset: 0;
  z-index: -3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    object-position: 58% center;
  }
`;

export const Scrim = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(
      90deg,
      rgba(5, 7, 20, 0.94) 0%,
      rgba(5, 7, 20, 0.8) 32%,
      rgba(5, 7, 20, 0.22) 66%,
      rgba(5, 7, 20, 0.08) 100%
    ),
    linear-gradient(0deg, rgba(5, 7, 20, 0.4), transparent 44%);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background:
      linear-gradient(0deg, rgba(5, 7, 20, 0.96) 0%, rgba(5, 7, 20, 0.7) 52%, rgba(5, 7, 20, 0.14) 100%),
      linear-gradient(90deg, rgba(5, 7, 20, 0.42), transparent);
  }
`;

export const Content = styled.div`
  width: min(620px, 60%);
  min-height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 18px;
  padding: 72px 64px;
  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 520px;
    padding: 56px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    min-height: 620px;
    justify-content: flex-end;
    padding: 240px 22px 88px;
  }
`;

export const Kicker = styled.p`
  margin: 0;
  color: #caa9f8;
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  max-width: 580px;
  margin: 0;
  font-size: clamp(38px, 4.6vw, 62px);
  font-weight: 850;
  line-height: 1;
  letter-spacing: -0.04em;
`;

export const Text = styled.p`
  max-width: 540px;
  margin: 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 16px;
  line-height: 1.65;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;

  span {
    padding: 9px 12px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.82);
    background: rgba(8, 10, 26, 0.34);
    backdrop-filter: blur(10px);
    font-size: 11px;
    font-weight: 750;
  }
`;

export const PlaybackButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #ffffff;
  background: rgba(5, 7, 20, 0.46);
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: scale(1.06);
    background: rgba(136, 60, 236, 0.72);
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 3px;
  }
`;

export const Signature = styled.div`
  position: absolute;
  right: 24px;
  bottom: 22px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 13px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  color: #ffffff;
  background: rgba(5, 7, 20, 0.58);
  backdrop-filter: blur(12px);

  strong {
    color: #caa9f8;
    font-size: 11px;
  }

  span {
    color: rgba(255, 255, 255, 0.68);
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: 18px;
    bottom: 18px;
  }
`;
