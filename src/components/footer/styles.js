import styled from 'styled-components';

export const Section = styled.footer`
  position: relative;
  width: 100%;
  min-height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0;
  scroll-margin-top: 130px;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 360px;
  border-radius: 20px;
  padding: 48px;
  background:
    radial-gradient(circle at 82% 10%, rgba(255, 255, 255, 0.18), transparent 20rem),
    linear-gradient(135deg, #883cec, #6e18de);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0 34px 90px rgba(136, 60, 236, 0.22);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 22px;
    border-radius: 26px;
    align-items: stretch;
  }
`;

export const Kicker = styled.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: clamp(36px, 5vw, 58px);
  line-height: 0.98;
  font-weight: 850;
  letter-spacing: 0;
  margin: 0;
  max-width: 900px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
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
  background: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 850;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: #ede1fe;
  }
`;

export const SecondaryAction = styled(PrimaryAction)`
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);

  &:hover {
    background: rgba(255, 250, 244, 0.16);
  }
`;
