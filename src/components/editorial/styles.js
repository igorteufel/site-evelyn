import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const signalFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

export const Section = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  min-height: 135vh;
  color: #ffffff;
  background:
    radial-gradient(circle at 50% 30%, rgba(181, 116, 255, 0.32), transparent 28rem),
    linear-gradient(145deg, #22113f 0%, #5320a7 48%, #7c2ce1 100%);
  scroll-margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
  }
`;

export const Marquee = styled.div`
  width: max-content;
  display: flex;
  padding: 22px 0;
  color: rgba(255, 255, 255, 0.12);
  font-size: clamp(64px, 9vw, 138px);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.06em;
  text-transform: uppercase;
  animation: ${marquee} 24s linear infinite;
  user-select: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;

  i {
    color: #bd83ff;
    font-size: 0.42em;
    font-style: normal;
  }
`;

export const Inner = styled.div`
  position: relative;
  position: sticky;
  top: 74px;
  width: min(calc(100% - 48px), 1256px);
  min-height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 56px 0 58px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: calc(100% - 32px);
    padding: 52px 0 58px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    top: auto;
    min-height: 0;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.6fr);
  gap: 28px 60px;
  align-items: end;
  margin-bottom: 50px;

  h2 {
    margin: 0;
    padding-bottom: 0.08em;
    font-size: ${({ theme }) => theme.typography.sizes.display};
    font-weight: ${({ theme }) => theme.typography.weights.black};
    line-height: 0.94;
    letter-spacing: -0.045em;
  }

  h2 span {
    display: block;
    color: #c995ff;
  }

  > p {
    margin: 0 0 6px;
    color: rgba(255, 255, 255, 0.68);
    font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
    line-height: 1.65;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    margin-bottom: 48px;
  }
`;

export const Kicker = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: #d7b6ff;
  font-size: ${({ theme }) => theme.typography.sizes.label};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px minmax(0, 1fr);
  align-items: center;
  gap: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Panel = styled.article`
  min-height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 34px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  color: ${({ $tone }) => ($tone === 'purple' ? '#25133e' : '#ffffff')};
  background: ${({ $tone }) =>
    $tone === 'purple'
      ? 'linear-gradient(145deg, #f2e8ff, #c996ff)'
      : 'rgba(18, 10, 35, 0.5)'};
  box-shadow: 0 30px 70px rgba(15, 4, 34, 0.18);

  > strong {
    margin-top: auto;
    font-size: ${({ theme }) => theme.typography.sizes.display};
    font-weight: ${({ theme }) => theme.typography.weights.black};
    line-height: 0.86;
    letter-spacing: -0.045em;
  }

  > p {
    max-width: 410px;
    margin: 24px 0 18px;
    color: ${({ $tone }) =>
      $tone === 'purple' ? 'rgba(37, 19, 62, 0.72)' : 'rgba(255, 255, 255, 0.66)'};
    font-size: ${({ theme }) => theme.typography.sizes.body};
    line-height: 1.55;
  }

  > small {
    padding-top: 16px;
    border-top: 1px solid
      ${({ $tone }) =>
        $tone === 'purple' ? 'rgba(37, 19, 62, 0.14)' : 'rgba(255, 255, 255, 0.14)'};
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 330px;
    padding: 26px;
    border-radius: 22px;
  }
`;

export const PanelTopline = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 48px;
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    color: currentColor;
  }
`;

export const Brain = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  place-items: center;
  align-self: center;

  &::before {
    content: '';
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(14px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 212px;
    height: 212px;
    border: 1px dashed rgba(255, 255, 255, 0.24);
    border-radius: 50%;
  }

  img {
    position: relative;
    width: 176px;
    max-height: 238px;
    object-fit: contain;
    filter: drop-shadow(0 24px 30px rgba(17, 5, 38, 0.35));
    animation: ${float} 4.8s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 250px;

    img {
      width: 130px;
      max-height: 170px;
    }

    &::before {
      width: 140px;
      height: 140px;
    }

    &::after {
      width: 174px;
      height: 174px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    img { animation: none; }
  }
`;

export const BrainLabel = styled.span`
  position: absolute;
  z-index: 2;
  bottom: -2px;
  padding: 8px 13px;
  border-radius: 999px;
  color: #6723bd;
  background: #ffffff;
  font-size: 11px;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 48px;
  }
`;

export const BrainSignal = styled.span`
  position: absolute;
  z-index: 3;
  ${({ $position }) => {
    if ($position === 'clinic') return 'top: -28px; left: -54px;';
    if ($position === 'attention') return 'top: 70px; right: -86px;';
    return 'bottom: -46px; left: -42px;';
  }}
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0 11px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  color: #ffffff;
  background: rgba(35, 13, 67, 0.78);
  box-shadow: 0 10px 24px rgba(17, 5, 38, 0.2);
  backdrop-filter: blur(12px);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.02em;
  white-space: nowrap;
  animation: ${signalFloat} 4s ease-in-out infinite;
  animation-delay: ${({ $position }) =>
    $position === 'clinic' ? '0s' : $position === 'attention' ? '-1.3s' : '-2.6s'};

  svg {
    flex: 0 0 auto;
    color: #d8adff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $position }) => {
      if ($position === 'clinic') return 'top: 10px; left: calc(50% - 168px);';
      if ($position === 'attention') return 'top: 62px; right: calc(50% - 185px);';
      return 'bottom: 8px; left: calc(50% - 145px);';
    }}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Continue = styled.a`
  width: max-content;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 36px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;

  svg {
    color: #c995ff;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;
