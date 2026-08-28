import styled, { keyframes } from 'styled-components';

const screenProgress = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: #6824cb;
  background-image: ${({ $background }) => `url(${$background})`};
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: -10%;
    bottom: -126px;
    width: 120%;
    height: 190px;
    border-radius: 50% 50% 0 0;
    background: #ffffff;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &::after {
      bottom: -146px;
      height: 180px;
    }
  }
`;

export const HeroWord = styled.span`
  position: absolute;
  z-index: 0;
  left: 50%;
  bottom: -0.07em;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.075);
  font-size: clamp(150px, 22vw, 360px);
  font-weight: 900;
  line-height: 0.72;
  letter-spacing: -0.085em;
  white-space: nowrap;
  user-select: none;
`;

export const HeroInner = styled.div`
  min-height: min(920px, 100svh);
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(520px, 1.12fr);
  align-items: center;
  gap: 40px;
  position: relative;
  width: 100%;
  max-width: 1384px;
  margin: 0 auto;
  padding: 74px 64px 150px;

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 64px 40px 140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 52px 16px 112px;
  }
`;

export const ScrollCue = styled.a`
  position: absolute;
  z-index: 2;
  left: 64px;
  bottom: 104px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;

  svg {
    color: #d6aeff;
    animation: scrollNudge 1.8s ease-in-out infinite;
  }

  @keyframes scrollNudge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(5px); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    svg { animation: none; }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: stretch;
  }
`;

export const ContentRail = styled.div`
  min-width: 0;
  transform-origin: left center;
`;

export const ShowcaseRail = styled.div`
  min-width: 0;
  transform-origin: center center;

  > div {
    width: 100%;
  }
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  svg {
    flex: 0 0 auto;
    color: #ff5b68;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const Complement = styled.p`
  color: rgba(255, 255, 255, 0.76);
  font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};
  margin: 0;
  max-width: 620px;
  line-height: 1.6;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.hero};
  font-weight: ${({ theme }) => theme.typography.weights.black};
  margin: 0;
  line-height: 1.03;
  color: #ffffff;
  letter-spacing: -0.04em;
  max-width: 690px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 24px;
  cursor: pointer;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 18px 42px rgba(48, 13, 104, 0.24);
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    background: #f1e8fd;
    box-shadow: 0 22px 48px rgba(48, 13, 104, 0.32);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  box-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.34);

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 18px 34px rgba(48, 13, 104, 0.16);
  }
`;

export const SupportingLine = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 11px 18px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  margin: 0;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  svg {
    width: 22px;
    height: 22px;
    padding: 6px;
    border-radius: 50%;
    color: #76e3bd;
    background: rgba(118, 227, 189, 0.12);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const Showcase = styled.div`
  min-height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 7% -10% 4% 6%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-12deg);
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
  }
`;

export const SystemPreview = styled.figure`
  position: relative;
  width: min(760px, 100%);
  aspect-ratio: 1592 / 988;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 36px 92px rgba(40, 9, 86, 0.34);
  transform: perspective(1200px) rotateY(-4deg) rotateX(1deg) translateY(8px);

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    inset: auto 0 0;
    height: 26%;
    background: linear-gradient(to top, rgba(34, 12, 63, 0.3), transparent);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: none;
  }
`;

export const SystemImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: left top;
`;

export const PreviewCaption = styled.figcaption`
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 4;
  padding: 8px 11px;
  border: 1px solid rgba(136, 60, 236, 0.16);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 22px rgba(54, 15, 94, 0.1);
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.04em;
  text-transform: none;

  small {
    display: block;
    margin-bottom: 3px;
    color: #a66af5;
    font-size: 8px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ScreenCounter = styled.span`
  position: absolute;
  z-index: 4;
  top: 14px;
  right: 14px;
  padding: 7px 9px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 999px;
  color: #ffffff;
  background: rgba(39, 13, 69, 0.62);
  backdrop-filter: blur(10px);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.05em;

  span {
    opacity: 0.55;
  }
`;

export const AutoIndicators = styled.div`
  position: absolute;
  z-index: 4;
  left: 14px;
  bottom: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  background: rgba(35, 12, 64, 0.68);
  backdrop-filter: blur(12px);

  > span {
    position: relative;
    width: 24px;
    height: 3px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.28);
  }

  > span.active::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #ffffff;
    transform-origin: left center;
    animation: ${screenProgress} 3.8s linear forwards;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 10px;
    bottom: 10px;
    gap: 4px;
    padding: 6px;

    > span { width: 18px; }
  }

  @media (prefers-reduced-motion: reduce) {
    > span.active::after { animation: none; transform: scaleX(1); }
  }
`;

export const AppShell = styled.div`
  width: min(760px, 100%);
  min-height: 460px;
  display: grid;
  grid-template-columns: 118px 1fr;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e4e4e9;
  box-shadow: 0 34px 90px rgba(54, 15, 94, 0.13);
  overflow: hidden;
  transform: perspective(1200px) rotateY(-7deg) rotateX(2deg) translateX(22px);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    transform: rotate(-1deg);
  }
`;

export const Sidebar = styled.aside`
  padding: 18px 10px;
  border-right: 1px solid #e8edf5;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const AppLogo = styled.img`
  display: block;
  width: 88px;
  height: auto;
  margin-bottom: 28px;
`;

export const SidebarList = styled.div`
  display: grid;
  gap: 8px;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 0 10px;
  border-radius: 8px;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#667085')};
  font-size: 13px;
  font-weight: 700;
`;

export const AppMain = styled.div`
  padding: 16px;
  background: #fafafa;
`;

export const TopBar = styled.div`
  min-height: 64px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e4e4e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  strong { display: block; font-size: 15px; color: ${({ theme }) => theme.colors.text}; }
  span { display: block; color: ${({ theme }) => theme.colors.muted}; font-size: 12px; margin-top: 3px; }
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primarySoft};
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 1px #e7ddf4;
  object-fit: cover;
`;

export const Metrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  min-height: 112px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({ $tone }) => $tone === 'green' ? '#8ECEAA' : $tone === 'yellow' ? '#FFEAA9' : '#D4B7FB'};
  background: ${({ $tone }) => $tone === 'green' ? '#ECF8F0' : $tone === 'yellow' ? '#FFF9E1' : '#F9F5FF'};
  color: ${({ $tone }) => $tone === 'green' ? '#218358' : $tone === 'yellow' ? '#A5840A' : '#883CEC'};

  svg { margin-bottom: 14px; }
  span { display: block; color: #667085; font-size: 12px; margin-bottom: 5px; }
  strong { color: ${({ theme }) => theme.colors.text}; font-size: 15px; }
`;

export const ChartCard = styled.div`
  min-height: 178px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e4e4e9;
  padding: 18px;
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  strong, span { display: block; }
  strong { color: ${({ theme }) => theme.colors.text}; font-size: 14px; }
  span { color: ${({ theme }) => theme.colors.muted}; font-size: 12px; }
`;

export const YearPill = styled.span`
  border-radius: 999px;
  padding: 8px 12px;
  background: #f1f4f8;
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 800;
`;

export const ChartArea = styled.div`
  height: 100px;
  position: relative;
  border-left: 1px dashed #d4b7fb;
  border-bottom: 1px solid #d4b7fb;
  background:
    linear-gradient(90deg, transparent 24%, #ede1fe 24.4%, transparent 24.8%),
    linear-gradient(90deg, transparent 49%, #ede1fe 49.4%, transparent 49.8%),
    linear-gradient(90deg, transparent 74%, #ede1fe 74.4%, transparent 74.8%);
`;

export const ChartLine = styled.div`
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 10px;
  height: 78px;
  border-radius: 50% 50% 0 0;
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  transform: skewX(-18deg);
`;

export const PhoneScreen = styled.div`
  position: absolute;
  right: -2%;
  bottom: 24px;
  width: 230px;
  padding: 14px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e4e4e9;
  box-shadow: 0 28px 70px rgba(54, 15, 94, 0.16);
  transform: rotate(4deg);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 0;
    width: 210px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { display: none; }
`;

export const PhoneTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 10px;
  border-radius: 8px;
  background: #f6f8fb;
  color: #98a2b3;
  font-size: 12px;
  margin-bottom: 14px;
`;

export const PhoneTitle = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Appointment = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #fafafc;
  border: 1px solid #ebebef;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-size: 12px;
`;

export const AppointmentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong { color: ${({ theme }) => theme.colors.text}; font-size: 12px; }
  span { color: ${({ theme }) => theme.colors.muted}; font-size: 10px; }
`;

export const CheckIcon = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(136, 60, 236, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
`;

export const PatientAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex: 0 0 auto;
  background: ${({ theme }) => theme.colors.primarySoft};
  border: 1px solid #e2d5f4;
  object-fit: cover;
`;

export const BrainMascot = styled.img`
  position: absolute;
  right: -1%;
  bottom: -12px;
  width: clamp(155px, 15vw, 225px);
  height: auto;
  filter: drop-shadow(0 20px 22px rgba(54, 15, 94, 0.16));
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 2%;
    width: 165px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;
