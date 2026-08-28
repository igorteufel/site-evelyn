import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 120px 0;
  scroll-margin-top: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 84px 0;
  }
`;

export const Intro = styled.div`
  max-width: 1040px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  line-height: 1.52;
  margin: 0;
`;

export const Comparison = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 170px minmax(0, 1fr);
  align-items: stretch;
  gap: 20px;
  padding: 34px 38px;
  overflow: visible;
  border: 1px solid #e5e2e9;
  border-radius: 28px;
  background:
    radial-gradient(circle at 50% 44%, rgba(136, 60, 236, 0.1), transparent 220px),
    linear-gradient(105deg, #ffffff 0%, #fcfaff 100%);
  box-shadow: 0 18px 52px rgba(60, 38, 92, 0.065);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 130px 1fr;
    gap: 14px;
    padding: 30px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 26px;
    padding: 26px 22px 30px;
    border-radius: 22px;
  }
`;

export const ComparisonSide = styled.div`
  min-width: 0;
  padding: 4px 0;
`;

export const SideHeader = styled.div`
  span,
  strong {
    display: block;
  }

  span {
    margin-bottom: 8px;
    color: ${({ $tone, theme }) =>
      $tone === 'positive' ? theme.colors.primary : '#8a858f'};
    font-size: 11px;
    font-weight: 850;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  strong {
    max-width: 360px;
    color: ${({ $tone, theme }) =>
      $tone === 'positive' ? theme.colors.primary : theme.colors.text};
    font-size: clamp(21px, 2vw, 28px);
    line-height: 1.12;
    letter-spacing: -0.025em;
  }
`;

export const MascotBridge = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;

  img {
    width: 112px;
    max-height: 156px;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 16px 18px rgba(74, 26, 132, 0.18));
  }

  span {
    max-width: 140px;
    padding: 8px 11px;
    border: 1px solid #e3d7f4;
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 8px 20px rgba(60, 38, 92, 0.08);
    font-size: 10px;
    font-weight: 800;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      width: 92px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 96px;
    flex-direction: row;
    justify-content: flex-start;

    img {
      width: 72px;
      max-height: 96px;
    }

    span {
      max-width: none;
    }
  }
`;

export const TransformationList = styled.div`
  display: grid;
  gap: 0;
  margin-top: 22px;
`;

export const ComparisonItem = styled.div`
  min-width: 0;
  min-height: 76px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ $tone }) =>
    $tone === 'positive' ? '#eee5fa' : '#efedf1'};
  color: ${({ $tone, theme }) =>
    $tone === 'positive' ? theme.colors.text : '#68636d'};

  &:last-child {
    border-bottom: 0;
  }
`;

export const ItemCopy = styled.div`
  min-width: 0;

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    font-weight: 800;
    line-height: 1.35;
  }

  span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.45;
  }
`;

export const StatusIcon = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: ${({ $tone, theme }) =>
    $tone === 'positive' ? theme.colors.primary : '#b5656b'};
  background: ${({ $tone }) =>
    $tone === 'positive' ? '#eadcff' : '#f9edef'};
  font-size: 11px;
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
    font-size: ${({ theme }) => theme.typography.sizes.subheading};
    font-weight: ${({ theme }) => theme.typography.weights.black};
    line-height: 1.02;
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: ${({ theme }) => theme.typography.sizes.body};
    line-height: 1.55;
    margin: 0;
  }
`;

export const DifferentialList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 24px;
  align-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Differential = styled.div`
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  align-items: start;
  gap: 13px;
  padding-top: 16px;
  border-top: 1px solid #e5dced;

  > div strong,
  > div span {
    display: block;
  }

  > div strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    line-height: 1.35;
  }

  > div span {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const DifferentialIcon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primarySoft};
  font-size: 16px;

  svg {
    width: 16px;
    height: 16px;
    display: block;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductShowcase = styled.div`
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
`;

export const AccountsPreview = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border: 1px solid #ded9e7;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 22px 58px rgba(60, 38, 92, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  figcaption {
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 7px 10px;
    border: 1px solid rgba(136, 60, 236, 0.16);
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 8px 20px rgba(60, 38, 92, 0.1);
    font-size: 9px;
    font-weight: 850;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    figcaption {
      display: none;
    }
  }
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
