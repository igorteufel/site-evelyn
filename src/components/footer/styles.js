import styled from 'styled-components';

export const Section = styled.footer`
  position: relative;
  isolation: isolate;
  width: calc(100% + 64px);
  min-height: 520px;
  margin-left: -32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 88px 32px 64px;
  scroll-margin-top: 130px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.neutral[100]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% + 32px);
    margin-left: -16px;
    padding: 64px 16px 40px;
  }
`;

export const Container = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  min-height: 440px;
  border-radius: 26px;
  padding: 56px;
  background-image:
    linear-gradient(90deg, rgba(36, 13, 65, 0.97) 0%, rgba(62, 22, 108, 0.9) 42%, rgba(45, 20, 69, 0.18) 76%),
    url(${({ $background }) => $background});
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.onBrand};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 28px 80px rgba(41, 20, 66, 0.2);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 460px;
    padding: 34px 24px;
    border-radius: 26px;
    align-items: stretch;
    background-image:
      linear-gradient(180deg, rgba(36, 13, 65, 0.95) 0%, rgba(48, 17, 85, 0.85) 60%, rgba(45, 20, 69, 0.42) 100%),
      url(${({ $background }) => $background});
    background-position: 66% center;
  }
`;

export const Kicker = styled.p`
  color: ${({ theme }) => theme.colors.brand[200]};
  font-size: ${({ theme }) => theme.typography.sizes.label};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.section};
  line-height: 0.98;
  font-weight: ${({ theme }) => theme.typography.weights.black};
  letter-spacing: 0;
  margin: 0;
  max-width: 900px;
  color: ${({ theme }) => theme.colors.onBrand};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  color: rgba(255, 255, 255, 0.74);
  margin: 0;
  max-width: 680px;
  font-weight: 500;
  line-height: 1.45;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const PrimaryAction = styled.a`
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 850;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.colors.brand[100]};
  }
`;

export const SecondaryAction = styled(PrimaryAction)`
  color: ${({ theme }) => theme.colors.onBrand};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.38);
  backdrop-filter: blur(10px);

  &:hover {
    color: ${({ theme }) => theme.colors.onBrand};
    background: rgba(255, 255, 255, 0.18);
  }
`;
