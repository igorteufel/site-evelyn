import styled from 'styled-components';

export const Section = styled.section`
  width: calc(100% + 64px);
  margin-left: -32px;
  padding: 76px 64px;
  color: ${({ theme }) => theme.colors.text};
  background: #f9f5ff;
  border-radius: 24px;
  scroll-margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% + 32px);
    margin-left: -16px;
    padding: 56px 24px;
    border-radius: 18px;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(340px, 0.72fr);
  gap: 32px;
  align-items: end;
  margin-bottom: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Kicker = styled.p`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.035em;
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  line-height: 1.65;
  margin: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  min-height: 268px;
  grid-column: span 2;
  padding: 26px;
  border-radius: 14px;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e4e9;
  box-shadow: 0 14px 36px rgba(54, 15, 94, 0.05);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:nth-child(4),
  &:nth-child(5) {
    grid-column: span 3;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #d4b7fb;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: span 1;

    &:nth-child(4),
    &:nth-child(5) {
      grid-column: span 1;
    }
  }
`;

export const CardNumber = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 800;
`;

export const CardIcon = styled.span`
  width: 52px;
  height: 52px;
  margin-top: 30px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  margin: auto 0 10px;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
  font-size: 14px;
  margin: 0;
`;

export const ProductStory = styled.div`
  margin-top: 64px;
  padding: 40px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(136, 60, 236, 0.12);
  box-shadow: 0 28px 70px rgba(66, 36, 104, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 44px;
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 20px 14px;
    border-radius: 18px;
  }
`;

export const ProductStoryHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.62fr);
  gap: 36px;
  align-items: end;
  margin-bottom: 32px;

  > div {
    display: grid;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ProductStoryTitle = styled.h2`
  max-width: 720px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(30px, 3.5vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.035em;
`;

export const ProductStoryText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  line-height: 1.65;
`;

export const ScreenGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  align-items: stretch;
`;

export const Carousel = styled.div`
  position: relative;
`;

export const CarouselHeader = styled.div`
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 12px;

  > div span,
  > div strong {
    display: block;
  }

  > div span {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 9px;
    font-weight: 850;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  > div strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const CarouselHint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #8b8592;
  font-size: 10px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CarouselViewport = styled.div`
  width: 100%;
  height: clamp(640px, 76vh, 760px);
  min-height: 0;
  overflow: hidden;
  border-radius: 18px;
  cursor: grab;
  touch-action: pan-y;
  contain: size layout paint;

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 3px solid #d4b7fb;
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 700px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 620px;
  }
`;

export const CarouselTrack = styled.div`
  height: 100%;
  min-height: 0;
  max-height: 100%;
  display: flex;
  align-items: stretch;
  transform: ${({ $active }) => `translateX(-${$active * 100}%)`};
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const CarouselSlide = styled.div`
  height: 100%;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
  display: flex;
  flex: 0 0 100%;
  overflow: hidden;

  > figure {
    width: 100%;
    height: 100%;
    min-height: 0;
    max-height: 100%;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;

  > button {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ded9e4;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.primary};
    background: #ffffff;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  > button:hover {
    transform: translateY(-2px);
    border-color: #c9a7f5;
    background: #f7f2fd;
  }

  > button:focus-visible {
    outline: 3px solid #d4b7fb;
    outline-offset: 2px;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 4px;

  button {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: #d9d3df;
    cursor: pointer;
    transition:
      width 0.25s ease,
      background 0.25s ease;
  }

  button.active {
    width: 28px;
    background: ${({ theme }) => theme.colors.primary};
  }

  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const MainScreen = styled.figure`
  position: relative;
  height: 100%;
  min-width: 0;
  min-height: 0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-bottom: 38px;
  border-radius: 18px;
  overflow: hidden;
  background: #f8f7fa;
  border: 1px solid #ded9e7;
  box-shadow: 0 22px 54px rgba(46, 25, 72, 0.12);
`;

export const BrowserBar = styled.div`
  min-height: 42px;
  display: grid;
  grid-template-columns: 70px 1fr 70px;
  align-items: center;
  padding: 0 14px;
  border-bottom: 1px solid #e8e4ed;
  background: #ffffff;

  > span {
    min-width: 0;
    padding: 7px 18px;
    border-radius: 999px;
    background: #f5f3f7;
    color: #8a8492;
    font-size: 10px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const BrowserDots = styled.span`
  display: flex;
  gap: 5px;

  i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #d5cedc;
  }

  i:first-child {
    background: #d4b7fb;
  }
`;

export const AppPreview = styled.div`
  flex: 1;
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  overflow: hidden;
  background: #fbfbfc;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  padding: 20px 10px;
  color: #8e8798;
  background: #ffffff;
  border-right: 1px solid #ebe8ef;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const PreviewBrand = styled.span`
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  border-radius: 9px;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 900;
`;

export const PreviewLogo = styled.img`
  display: block;
  width: 96px;
  height: auto;
  margin: 0 6px 20px;
`;

export const PreviewNavItem = styled.span`
  width: 100%;
  min-height: 38px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0 9px;
  border-radius: 9px;
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : '#8e8798')};
  background: ${({ $active }) => ($active ? '#f1e8fd' : 'transparent')};
  font-size: 11px;

  span {
    font-size: 10px;
    font-weight: 700;
  }
`;

export const PreviewContent = styled.div`
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: 20px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #d8c7ed transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 14px;
  }
`;

export const JourneyPatientSelect = styled.button`
  min-width: 210px;
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
    min-width: 0;
  }
`;

export const CarouselJourneyEmpty = styled.div`
  min-height: calc(100% - 104px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 34px 24px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;

  > img {
    width: 124px;
    height: 124px;
    display: block;
    margin-bottom: 12px;
    object-fit: cover;
    object-position: center 46%;
  }

  > strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 17px;
  }

  > p {
    max-width: 420px;
    margin: 8px 0 22px;
    font-size: 11px;
    line-height: 1.55;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 430px;
    padding: 28px 14px;

    > img {
      width: 104px;
      height: 104px;
    }
  }
`;

export const CarouselJourneyAlert = styled.div`
  width: min(100%, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 15px;
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

export const PatientsPageHeader = styled.div`
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 14px;
  padding: 16px 18px;
  border: 1px solid #e4e1e8;
  border-radius: 12px;
  background: #ffffff;

  > div:first-child strong,
  > div:first-child span {
    display: block;
  }

  > div:first-child strong {
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }

  > div:first-child span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const PatientHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  > button {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 11px;
    border: 0;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primary};
    background: #f1eff4;
    font-size: 9px;
    font-weight: 750;
  }

  > button:first-child {
    width: 38px;
    padding: 0;
  }

  > button:last-child {
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;

    > button {
      flex: 1;
    }

    > button:last-child {
      width: auto;
      font-size: 9px;
    }
  }
`;

export const PatientTableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #e4e1e8;
  border-radius: 12px;
  background: #ffffff;
`;

export const PatientDataTable = styled.div`
  min-width: 860px;
`;

export const PatientDataHead = styled.div`
  min-height: 42px;
  display: grid;
  grid-template-columns: 1.35fr 0.95fr 1.1fr 0.8fr 0.8fr 0.55fr 34px;
  gap: 10px;
  align-items: center;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.text};
  background: #f4f4f7;
  font-size: 8px;
`;

export const PatientDataRow = styled.div`
  min-height: 68px;
  display: grid;
  grid-template-columns: 1.35fr 0.95fr 1.1fr 0.8fr 0.8fr 0.55fr 34px;
  gap: 10px;
  align-items: center;
  padding: 0 12px;
  border-top: 1px solid #e8e5eb;
  color: ${({ theme }) => theme.colors.text};

  > span {
    min-width: 0;
    overflow: hidden;
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > button {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 8px;
    color: #9a94a2;
    background: transparent;
    font-size: 8px;
  }
`;

export const PatientName = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 36px;
    height: 36px;
    flex: 0 0 auto;
    object-fit: cover;
    border: 1px solid #dbc8f5;
    border-radius: 50%;
    background: #f3ecfc;
  }

  strong {
    min-width: 0;
    overflow: hidden;
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Country = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  svg {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActiveStatus = styled.span`
  width: fit-content;
  padding: 5px 9px;
  border-radius: 999px;
  color: #16734d;
  background: #eaf7ef;
  font-size: 8px;
  font-weight: 800;
`;

export const PreviewHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;

  span,
  strong {
    display: block;
  }

  span {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 11px;
    font-weight: 850;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;

    strong {
      font-size: 15px;
    }
  }
`;

export const NewPatientButton = styled.button`
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 13px;
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36px;
    min-height: 36px;
    padding: 0;
    font-size: 0;

    svg {
      font-size: 11px;
    }
  }
`;

export const SearchField = styled.div`
  min-height: 38px;
  display: flex;
  align-items: center;
  gap: 9px;
  max-width: 330px;
  margin-bottom: 14px;
  padding: 0 13px;
  border: 1px solid #e5e1e9;
  border-radius: 9px;
  color: #aaa4af;
  background: #ffffff;
  font-size: 11px;
`;

export const PatientTable = styled.div`
  overflow: hidden;
  border: 1px solid #e8e4eb;
  border-radius: 12px;
  background: #ffffff;
`;

export const PatientRow = styled.div`
  display: grid;
  grid-template-columns: 42px minmax(112px, 1fr) minmax(100px, 0.72fr) 28px;
  gap: 12px;
  align-items: center;
  min-height: 76px;
  padding: 10px 14px;
  border-bottom: 1px solid #eeeaf0;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 36px minmax(0, 1fr) 26px;
    gap: 8px;
    min-height: 68px;
    padding: 8px;
  }
`;

export const LargePatientAvatar = styled.img`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 50%;
  background: #f1e8fd;
  border: 1px solid #e0d2f2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36px;
    height: 36px;
  }
`;

export const PatientIdentity = styled.div`
  min-width: 0;

  strong,
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
  }

  span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
  }
`;

export const NextSession = styled.div`
  span,
  strong {
    display: block;
    font-size: 10px;
  }

  span {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.muted};
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const OpenPatient = styled.button`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background: #f1e8fd;
  font-size: 9px;
`;

export const SecondaryScreens = styled.div`
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const SmallScreen = styled.figure`
  position: relative;
  min-width: 0;
  min-height: 280px;
  margin: 0;
  padding: 22px 20px 46px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid ${({ $tone }) => ($tone === 'green' ? '#cfe9d9' : '#e1d1f5')};
  background: ${({ $tone }) => ($tone === 'green' ? '#f5fbf7' : '#faf7fe')};
  box-shadow: 0 20px 46px rgba(46, 25, 72, 0.08);
`;

export const SmallScreenTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;

  > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  span,
  strong {
    display: block;
  }

  span {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }
`;

export const DateStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  margin-bottom: 14px;

  > span {
    min-width: 0;
    padding: 8px 2px;
    border-radius: 9px;
    color: #746e7a;
    background: rgba(255, 255, 255, 0.8);
    font-size: 11px;
    font-weight: 800;
    text-align: center;

    &.active {
      color: #ffffff;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  small {
    display: block;
    margin-top: 3px;
    font-size: 8px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const AgendaList = styled.div`
  display: grid;
  gap: 7px;
`;

export const AgendaItem = styled.div`
  display: grid;
  grid-template-columns: auto 32px 1fr auto;
  gap: 8px;
  align-items: center;
  min-width: 0;
  padding: 8px;
  border: 1px solid #ebe3f4;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.88);

  time {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 9px;
    font-weight: 850;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #e1d3f2;
  }

  div {
    min-width: 0;
  }

  strong,
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 10px;
  }

  span {
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 8px;
  }

  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 9px;
  }
`;

export const FinancialTotal = styled.div`
  margin-bottom: 18px;

  span,
  strong,
  small {
    display: block;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
  }

  strong {
    margin: 6px 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: 22px;
    letter-spacing: -0.03em;
  }

  small {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 9px;
    font-weight: 750;
  }
`;

export const FinancialChart = styled.div`
  margin: -2px 0 14px;

  svg {
    display: block;
    width: 100%;
    height: 72px;
    overflow: visible;
  }

  line {
    stroke: #dce9e1;
    stroke-width: 1;
    stroke-dasharray: 3 4;
  }

  .chart-area {
    fill: rgba(136, 60, 236, 0.1);
  }

  .chart-line {
    fill: none;
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  circle {
    fill: #ffffff;
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 2;
  }
`;

export const ChartMonths = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: -2px;
  color: #8a8490;
  font-size: 7px;
  text-align: center;
`;

export const FinancialFooter = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr auto;
  gap: 9px;
  align-items: center;
  padding: 9px;
  border: 1px solid #dfeee5;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background: rgba(255, 255, 255, 0.82);
  font-size: 9px;
  font-weight: 750;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #d8e9de;
  }
`;

export const ScreenLabel = styled.figcaption`
  position: absolute;
  right: 14px;
  bottom: 12px;
  color: #817989;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const FictionalNote = styled.p`
  margin: 16px 0 0;
  color: #8d8794;
  font-size: 11px;
  line-height: 1.5;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: left;
  }
`;
