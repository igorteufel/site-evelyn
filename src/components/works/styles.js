import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  scroll-margin-top: 130px;
`;

export const Intro = styled.div`
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Kicker = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 1;
  font-weight: 850;
  letter-spacing: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  line-height: 1.52;
  margin: 0;
`;

export const Comparison = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.article`
  min-height: 420px;
  padding: 26px;
  border-radius: 28px;
  background: ${({ $featured, theme }) => ($featured ? theme.colors.primary : '#ffffff')};
  color: ${({ $featured }) => ($featured ? '#ffffff' : '#25262b')};
  border: 1px solid ${({ $featured }) => ($featured ? 'rgba(136, 60, 236, 0.18)' : '#e4e4e9')};
  box-shadow: 0 20px 58px rgba(60, 38, 92, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 850;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.64;
  }

  strong {
    font-size: 40px;
    line-height: 1;
  }
`;

export const List = styled.ul`
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 54px;
  padding: 12px 14px;
  border-radius: 18px;
  background: ${({ $tone }) =>
    $tone === 'positive' ? 'rgba(255, 255, 255, 0.14)' : '#f8f6fb'};
  color: currentColor;
  font-size: 16px;
  font-weight: 750;
`;

export const StatusIcon = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: ${({ $tone }) => ($tone === 'positive' ? '#ffffff' : '#a54545')};
  background: ${({ $tone }) =>
    $tone === 'positive' ? 'rgba(255, 255, 255, 0.18)' : 'rgba(165, 69, 69, 0.09)'};
  font-size: 14px;
`;

export const CareBlock = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 0.8fr) minmax(0, 1.2fr);
  gap: 34px;
  padding: 34px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 78% 8%, rgba(136, 60, 236, 0.1), transparent 22rem),
    rgba(255, 255, 255, 0.88);
  border: 1px solid #e4e9f2;
  box-shadow: 0 24px 70px rgba(60, 38, 92, 0.07);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`;

export const CareCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 40px;
    line-height: 1.02;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 16px;
    line-height: 1.55;
    margin: 0;
  }
`;

export const DifferentialList = styled.div`
  display: grid;
  gap: 10px;
  align-content: start;
`;

export const Differential = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 14px 16px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e4e9f2;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 750;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex: 0 0 auto;
  }
`;

export const ProductShowcase = styled.div`
  position: relative;
  min-height: 560px;
`;

export const LoginPreview = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.82fr;
  min-height: 270px;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e4e9f2;
  box-shadow: 0 20px 54px rgba(60, 38, 92, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const LoginMedia = styled.div`
  position: relative;
  padding: 28px;
  color: ${({ theme }) => theme.colors.text};
  background: #f9f5ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;

  strong,
  span {
    position: relative;
    z-index: 2;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 14px;
    line-height: 1.45;
  }
`;

export const BrainImage = styled.img`
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: auto;
  z-index: 2;
  filter: drop-shadow(0 18px 24px rgba(54, 15, 94, 0.26));
`;

export const LoginForm = styled.div`
  padding: 28px;
  display: grid;
  align-content: center;
  gap: 14px;

  label {
    display: grid;
    gap: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  span {
    min-height: 42px;
    border-radius: 8px;
    border: 1px solid #e5e1eb;
    color: #8a8f9b;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    font-size: 14px;
  }

  button {
    border: 0;
    min-height: 44px;
    border-radius: 8px;
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primary};
    font-weight: 850;
    cursor: pointer;
  }
`;

export const LoginLogo = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  margin-bottom: 6px;
`;

export const SystemMiniatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 14px;
`;

export const MiniScreen = styled.div`
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e4e9f2;
  padding: 16px;
  box-shadow: 0 18px 48px rgba(60, 38, 92, 0.07);
`;

export const MiniTop = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 14px;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 14px;
  }
`;

export const Event = styled.div`
  min-height: 38px;
  border-radius: 10px;
  padding: 10px;
  background: ${({ $soft }) => ($soft ? '#f5efff' : '#e9dcff')};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 850;
  font-size: 14px;
`;

export const PaymentRows = styled.div`
  display: grid;
  gap: 8px;
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #f6f8fc;

  span,
  strong {
    font-size: 14px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BrainChat = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0;
  width: min(330px, 82%);
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid #e4e9f2;
  box-shadow: 0 24px 68px rgba(60, 38, 92, 0.14);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    margin-top: 14px;
  }
`;

export const BrainHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 70px;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;

  div {
    flex: 1;
  }

  strong,
  span {
    display: block;
  }

  strong {
    font-size: 16px;
  }

  span {
    font-size: 14px;
    opacity: 0.8;
  }
`;

export const BrainAvatar = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const BrainMessage = styled.div`
  margin: 16px;
  padding: 14px;
  border-radius: 14px;
  background: #f0eef5;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 1.45;
`;

export const BrainInput = styled.div`
  margin: 0 16px 16px;
  min-height: 46px;
  border-radius: 999px;
  background: #f0eef5;
  color: #8a8f9b;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  font-size: 14px;

  span {
    flex: 1;
  }
`;

export const JourneyPreview = styled.div`
  min-height: 560px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e4e1e8;
  border-radius: 18px;
  background: #fafbfc;
  box-shadow: 0 22px 58px rgba(60, 38, 92, 0.1);
`;

export const JourneyHeader = styled.div`
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px;
  border-bottom: 1px solid #e4e1e8;
  background: #ffffff;

  strong,
  span {
    display: block;
  }

  > div > strong {
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }

  > div > span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
    line-height: 1.45;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const PatientSelector = styled.button`
  min-width: 190px;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 13px;
  border: 1px solid #dcd8e1;
  border-radius: 8px;
  color: #9a95a1;
  background: #ffffff;
  font-size: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const JourneyEmpty = styled.div`
  flex: 1;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 34px 24px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;

  > img {
    width: 116px;
    height: 116px;
    display: block;
    margin-bottom: 10px;
    object-fit: cover;
    object-position: center 46%;
  }

  > strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }

  > p {
    max-width: 390px;
    margin: 8px 0 20px;
    font-size: 11px;
    line-height: 1.55;
  }
`;

export const JourneyAlert = styled.div`
  width: min(100%, 390px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1px solid #d4b7fb;
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.primary};
  background: #f7f2fd;

  div {
    text-align: left;
  }

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 10px;
  }

  span {
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 8px;
  }
`;
