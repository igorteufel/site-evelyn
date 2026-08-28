import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 54px;
  align-items: center;
  padding: 120px 0;
  scroll-margin-top: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 84px 0;
  }
`;

export const Metrics = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Metric = styled.div`
  min-height: 150px;
  padding: 28px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  &:last-child {
    border-right: 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: clamp(34px, 4vw, 52px);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:nth-child(2) {
      border-right: 0;
    }

    &:nth-child(-n + 2) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
  align-items: flex-start;
  max-width: 1040px;
  margin-right: auto;
`;

export const Kicker = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.sizes.label};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.display};
  line-height: 0.96;
  font-weight: ${({ theme }) => theme.typography.weights.black};
  letter-spacing: -0.045em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
  max-width: 690px;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: stretch;
  text-align: left;
  padding: 26px 8px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.cardTitle};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    margin: 0 0 10px;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.65;
    font-size: ${({ theme }) => theme.typography.sizes.body};
  }
`;

export const HighlightTopline = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;

  > span {
    position: absolute;
    right: -10px;
    bottom: -5px;
    min-width: 24px;
    min-height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    border: 1px solid ${({ theme }) => theme.colors.brand[200]};
    border-radius: ${({ theme }) => theme.radii.round};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 6px 16px rgba(88, 35, 151, 0.12);
    font-size: 9px;
    font-weight: ${({ theme }) => theme.typography.weights.black};
    letter-spacing: 0.04em;
  }
`;

export const Icon = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.brand[100]};
  border: 1px solid ${({ theme }) => theme.colors.brand[200]};
  box-shadow: 0 12px 26px rgba(136, 60, 236, 0.12);
  font-size: 24px;

  svg {
    width: 24px;
    height: 24px;
    display: block;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
