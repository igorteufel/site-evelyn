import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 54px;
  align-items: center;
  scroll-margin-top: 130px;
`;

export const Metrics = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border: 1px solid #e4e9f2;
  border-radius: 16px;
  background: #e4e9f2;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(54, 15, 94, 0.07);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Metric = styled.div`
  min-height: 130px;
  padding: 24px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
    line-height: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 13px;
    line-height: 1.4;
  }
`;

export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: center;
  align-items: center;
  max-width: 860px;
`;

export const Kicker = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.035em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  font-size: 17px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  text-align: center;
  padding: 30px 26px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #e4e9f2;
  box-shadow: 0 16px 44px rgba(54, 15, 94, 0.06);

  h3 {
    font-size: 17px;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.55;
    font-size: 14px;
  }
`;

export const Icon = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primarySoft};
`;
