import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  isolation: isolate;
  background: ${({ theme }) => theme.colors.ink};
  box-shadow: 0 30px 80px rgba(12, 10, 32, 0.22);

  &::before {
    content: '';
    position: absolute;
    top: -190px;
    left: -8%;
    width: 116%;
    height: 510px;
    border-radius: 0 0 50% 50%;
    background: ${({ theme }) => theme.colors.surface};
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &::before {
      top: -150px;
      height: 300px;
    }
  }
`;

export const Inner = styled.div`
  position: relative;
  width: calc(100% - 48px);
  max-width: 1384px;
  min-height: 920px;
  margin: 0 auto;
  padding: 58px 64px 86px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% - 16px);
    min-height: 760px;
    padding: 44px 28px 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    min-height: 620px;
    padding: 34px 16px 72px;
  }
`;

export const VideoFrame = styled.div`
  position: relative;
  z-index: 2;
  width: min(960px, 100%);
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.44);
  border-radius: 18px;
  background: #0b1020;
  box-shadow: 0 30px 76px rgba(8, 11, 26, 0.3);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    object-position: 58% center;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: min(1120px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin: 66px auto 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.onBrand};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 54px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin-top: 46px;
  }
`;

export const Kicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.brand[300]};
  font-size: ${({ theme }) => theme.typography.sizes.label};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  max-width: 580px;
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.section};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  line-height: 1;
  letter-spacing: -0.04em;
`;

export const Text = styled.p`
  max-width: 540px;
  margin: 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  line-height: 1.65;
`;

export const FeatureGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 42px 52px;
  margin-top: 34px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 34px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 28px;
    margin-top: 26px;
  }
`;

export const Feature = styled.article`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: start;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const FeatureIcon = styled.span`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.success.base};
  background: rgba(98, 213, 154, 0.1);
  font-size: 17px;
  line-height: 1;

  svg {
    display: block;
  }
`;

export const FeatureCopy = styled.div`
  small {
    display: block;
    margin-bottom: 7px;
    color: rgba(202, 169, 248, 0.72);
    font-size: 9px;
    font-weight: 850;
    letter-spacing: 0.1em;
  }

  strong {
    display: block;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.onBrand};
    font-size: 16px;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.58);
    font-size: 13px;
    line-height: 1.65;
  }
`;

export const PlaybackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 58px;
  height: 58px;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(12px);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.06);
    background: #ffffff;
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 3px;
  }
`;

export const Signature = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 2;
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
