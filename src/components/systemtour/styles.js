import styled, { keyframes } from 'styled-components';

const panelIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  width: 100%;
  scroll-margin-top: 110px;
`;

export const Intro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.62fr);
  gap: 34px;
  align-items: end;
  margin-bottom: 30px;

  > div {
    display: grid;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const Kicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(36px, 4.4vw, 58px);
  line-height: 1;
  letter-spacing: -0.04em;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  line-height: 1.65;
`;

export const Tabs = styled.div`
  display: inline-flex;
  gap: 6px;
  margin-bottom: 16px;
  padding: 5px;
  overflow-x: auto;
  border: 1px solid #e5e2e9;
  border-radius: 12px;
  background: #ffffff;

  button {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 17px;
    border: 0;
    border-radius: 8px;
    color: #696571;
    background: transparent;
    cursor: pointer;
    font-size: 13px;
    font-weight: 750;
    white-space: nowrap;
    transition:
      color 0.2s ease,
      background 0.2s ease;
  }

  button[aria-selected='true'] {
    color: ${({ theme }) => theme.colors.primary};
    background: #f1e8fd;
  }

  button:focus-visible {
    outline: 3px solid #d4b7fb;
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;

    button {
      flex: 1;
      padding: 0 12px;
    }
  }
`;

export const ProductWindow = styled.div`
  min-height: 680px;
  display: grid;
  grid-template-columns: 178px minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid #e1dee6;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 30px 82px rgba(56, 38, 79, 0.11);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 640px;
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  padding: 24px 12px;
  border-right: 1px solid #e7e4eb;
  background: #ffffff;

  > img {
    width: 126px;
    height: auto;
    margin: 0 8px 28px;
  }

  nav {
    display: grid;
    gap: 6px;
  }

  nav span {
    min-height: 42px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    border-radius: 9px;
    color: #65616d;
    font-size: 12px;
    font-weight: 650;
  }

  nav span.active {
    color: ${({ theme }) => theme.colors.primary};
    background: #f3ecfc;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Workspace = styled.div`
  min-width: 0;
  background: #fafbfc;
`;

export const Topbar = styled.div`
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-bottom: 1px solid #e7e4eb;
  color: #95909c;
  background: #ffffff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border: 2px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #e4d9f2;
  }
`;

export const Panel = styled.div`
  min-height: 626px;
  padding: 22px;
  animation: ${panelIn} 0.25s ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 586px;
    padding: 14px;
  }
`;

export const PanelHeading = styled.div`
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  margin-bottom: 16px;
  padding: 18px 20px;
  border: 1px solid #e4e1e8;
  border-radius: 14px;
  background: #ffffff;

  strong,
  span {
    display: block;
  }

  > div:first-child strong {
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
  }

  > div:first-child span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 11px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
    padding: 16px;
  }
`;

export const DatePill = styled.span`
  padding: 9px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  background: #f3ecfc;
  font-size: 11px;
  font-weight: 800;
`;

export const PanelActions = styled.div`
  display: flex;
  gap: 8px;

  button {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 12px;
    border: 1px solid #ded9e4;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    background: #ffffff;
    font-size: 10px;
    font-weight: 750;
  }

  button:last-child {
    border-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;

    button {
      flex: 1;
    }
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(260px, 0.72fr);
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 14px;
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

export const DashboardMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardMetric = styled.article`
  min-height: 132px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 18px;
  border: 1px solid
    ${({ $tone }) =>
      $tone === 'green' ? '#afe0c5' : $tone === 'yellow' ? '#f2d37f' : '#dbc3f6'};
  border-radius: 13px;
  background:
    ${({ $tone }) =>
      $tone === 'green' ? '#f0faf4' : $tone === 'yellow' ? '#fffaf0' : '#f5edfd'};

  > span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
  }

  > strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 25px;
    letter-spacing: -0.03em;
  }
`;

export const DashboardChartCard = styled.article`
  min-width: 0;
  margin-bottom: 14px;
  padding: 18px;
  border: 1px solid #e4e1e8;
  border-radius: 14px;
  background: #ffffff;
`;

export const DashboardChartHeader = styled.div`
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) auto;
  gap: 11px;
  align-items: center;
  margin-bottom: 10px;

  > div:nth-child(2) {
    min-width: 0;
  }

  > div:nth-child(2) strong,
  > div:nth-child(2) span {
    display: block;
  }

  > div:nth-child(2) strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  > div:nth-child(2) span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
    line-height: 1.4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 36px minmax(0, 1fr);

    > div:last-child {
      grid-column: 1 / -1;
      justify-self: end;
    }
  }
`;

export const YearControl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 9px;
  border: 1px solid #e4e1e8;
  border-radius: 999px;
  color: #6b6671;
  background: #f7f7fa;
  font-size: 9px;

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DashboardChart = styled.svg`
  width: 100%;
  height: 260px;
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 220px;
  }
`;

export const DashboardGridLine = styled.line`
  stroke: #eadcfc;
  stroke-width: 1;
  stroke-dasharray: ${({ $vertical }) => ($vertical ? '6 8' : 'none')};
`;

export const DashboardAxisLabel = styled.text`
  fill: #68636f;
  font-family: Lato, system-ui, sans-serif;
  font-size: 11px;
`;

export const DashboardArea = styled.path`
  fill: url(#dashboardChartFill);
`;

export const DashboardCurve = styled.path`
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const DashboardBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const OverdueSummary = styled.div`
  min-height: 76px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  background: #f7f7fa;

  div strong,
  div span {
    display: block;
  }

  div strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
  }

  div span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 8px;
  }

  > strong {
    color: #9b7400;
    font-size: 11px;
  }

  > svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 9px;
  }
`;

export const Widget = styled.article`
  min-width: 0;
  padding: 18px;
  border: 1px solid #e4e1e8;
  border-radius: 14px;
  background: #ffffff;
  ${({ $wide }) => $wide && 'grid-row: 1 / span 2;'}
`;

export const WidgetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 15px;

  > div:last-child {
    min-width: 0;
  }

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
  }

  span {
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
  }
`;

export const WidgetIcon = styled.span`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: 1px solid
    ${({ $tone }) =>
      $tone === 'green' ? '#bcebd8' : $tone === 'yellow' ? '#f2d37f' : '#e2d3f5'};
  border-radius: 9px;
  color:
    ${({ $tone, theme }) =>
      $tone === 'green' ? '#00a875' : $tone === 'yellow' ? '#bd8700' : theme.colors.primary};
  background:
    ${({ $tone }) =>
      $tone === 'green' ? '#f0fcf7' : $tone === 'yellow' ? '#fffaf0' : '#f7f2fd'};
  font-size: 13px;
`;

export const MapArea = styled.div`
  position: relative;
  min-height: 390px;
  overflow: hidden;
  border: 1px solid #e2e0e6;
  border-radius: 12px;
  background: #f7f7fa;

  img {
    width: 100%;
    height: 100%;
    min-height: 390px;
    display: block;
    object-fit: cover;
  }
`;

export const MapTotal = styled.div`
  position: absolute;
  left: 28%;
  bottom: 20%;
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 7px 9px;
  border: 2px solid #ffffff;
  border-radius: 999px;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 8px 18px rgba(83, 31, 154, 0.22);

  strong {
    font-size: 11px;
  }

  span {
    font-size: 8px;
    font-weight: 750;
  }
`;

export const BirthdayList = styled.div`
  display: grid;
  gap: 8px;
`;

export const BirthdayPerson = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px;
  border-radius: 10px;
  background: #f7f7fa;

  img {
    width: 42px;
    height: 42px;
    object-fit: cover;
    border: 1px solid #e1d4f2;
    border-radius: 50%;
  }

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
  }

  span {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
  }
`;

export const RoutineStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;

  > div {
    min-width: 0;
    padding: 12px 10px;
    border: 1px solid #e4e1e8;
    border-radius: 10px;
    background: #f7f7fa;
  }

  strong,
  span {
    display: block;
  }

  strong {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 8px;
  }
`;

export const CalendarShell = styled.div`
  overflow: hidden;
  border: 1px solid #e4e1e8;
  border-radius: 14px;
  background: #ffffff;
`;

export const CalendarToolbar = styled.div`
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 16px;
  border-bottom: 1px solid #e4e1e8;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 10px;
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.primary};
    background: #f3ecfc;
    font-size: 9px;
    font-weight: 750;
  }
`;

export const CalendarScroll = styled.div`
  width: 100%;
  overflow-x: auto;

  > div {
    min-width: 860px;
  }
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: 64px repeat(7, 1fr);
  border-bottom: 1px solid #e4e1e8;

  > span,
  > div {
    min-height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #e8e5eb;
  }

  > div.active {
    color: ${({ theme }) => theme.colors.primary};
    background: #f7f1fd;
  }

  small {
    margin-bottom: 6px;
    color: #77727e;
    font-size: 8px;
    font-weight: 800;
  }

  strong {
    font-size: 12px;
  }
`;

export const Schedule = styled.div`
  position: relative;
`;

export const ScheduleRow = styled.div`
  min-height: 56px;
  display: grid;
  grid-template-columns: 64px repeat(7, 1fr);

  time,
  span {
    border-right: 1px solid #e8e5eb;
    border-bottom: 1px solid #e8e5eb;
  }

  time {
    padding: 10px 8px;
    color: #6e6975;
    font-size: 9px;
    text-align: right;
  }

  span:nth-child(4) {
    background: #fbf8fe;
  }
`;

export const ScheduleEvent = styled.div`
  position: absolute;
  z-index: 2;
  top: ${({ $row }) => `calc(${($row - 1) * 56}px + 4px)`};
  left: ${({ $column }) => `calc(64px + ((100% - 64px) / 7) * ${$column - 2} + 4px)`};
  width: calc((100% - 64px) / 7 - 8px);
  height: ${({ $span }) => `calc(${$span * 56}px - 8px)`};
  min-width: 0;
  padding: 10px 8px;
  overflow: hidden;
  border: 1px solid
    ${({ $tone }) =>
      $tone === 'green' ? '#83d7ad' : $tone === 'coral' ? '#ff9d88' : $tone === 'gray' ? '#c4c1c8' : '#b994ee'};
  border-left-width: 3px;
  border-radius: 7px;
  color:
    ${({ $tone, theme }) =>
      $tone === 'green' ? '#27845a' : $tone === 'coral' ? '#df5e45' : $tone === 'gray' ? '#39373d' : theme.colors.primary};
  background:
    ${({ $tone }) =>
      $tone === 'green' ? '#e8f7ef' : $tone === 'coral' ? '#fff0ec' : $tone === 'gray' ? '#f1f1f3' : '#f0e6fc'};

  strong,
  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    margin-bottom: 5px;
    font-size: 9px;
  }

  span {
    font-size: 8px;
  }
`;

export const BrainHeading = styled.div`
  overflow: hidden;
  margin-bottom: 14px;
  border: 1px solid #e4e1e8;
  border-radius: 14px;
  background: #ffffff;
`;

export const BrainTitle = styled.div`
  min-height: 78px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;

  img {
    width: 42px;
    height: 42px;
    object-fit: contain;
    border-radius: 50%;
    background: #f1e8fd;
  }

  span,
  strong,
  small {
    display: block;
  }

  span {
    margin-bottom: 3px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 8px;
    font-weight: 850;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }

  small {
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
  }
`;

export const BrainTabs = styled.div`
  min-height: 42px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 0 12px 10px;
  padding: 4px;
  border: 1px solid #e4e1e8;
  border-radius: 10px;
  text-align: center;

  span,
  strong {
    padding: 8px;
    color: #68636f;
    font-size: 10px;
  }

  strong {
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.primary};
    background: #ead9fb;
  }

  i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-left: 5px;
    border-radius: 50%;
    color: #9a7300;
    background: #fff9d7;
    font-size: 8px;
    font-style: normal;
  }
`;

export const BrainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(270px, 0.72fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const AttentionIntro = styled.div`
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px;
  border: 1px solid #f3d67f;
  border-radius: 13px;
  background: #fffefa;

  strong,
  span {
    display: block;
  }

  strong {
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
  }

  span {
    max-width: 380px;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
    line-height: 1.5;
  }

  img {
    width: 74px;
    height: 74px;
    object-fit: contain;
  }
`;

export const AttentionCard = styled.article`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 12px;
  padding: 16px;
  border: 1px solid #f3d67f;
  border-radius: 13px;
  background: #ffffff;

  small,
  strong,
  p {
    display: block;
  }

  small {
    color: #a67a00;
    font-size: 8px;
    font-weight: 850;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;
  }

  p {
    margin: 12px 0 0;
    padding-top: 11px;
    border-top: 1px solid #e8e5eb;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 10px;
    line-height: 1.5;
  }
`;

export const Initials = styled.span`
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4b7fb;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background: #ead9fb;
  font-size: 10px;
  font-weight: 800;
`;

export const BrainRoutine = styled.aside`
  grid-column: 2;
  grid-row: 1 / span 3;
  align-self: stretch;
  padding: 18px;
  border: 1px solid #e4e1e8;
  border-radius: 13px;
  background: #ffffff;

  > p {
    margin: 26px 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 11px;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: auto;
    grid-row: auto;
  }
`;

export const AccountSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const AccountMetric = styled.article`
  min-height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 9px;
  padding: 18px;
  border: 1px solid
    ${({ $tone }) => ($tone === 'green' ? '#afe0c5' : $tone === 'yellow' ? '#f2d37f' : '#dbc3f6')};
  border-radius: 13px;
  color:
    ${({ $tone, theme }) => ($tone === 'green' ? '#168153' : $tone === 'yellow' ? '#aa7900' : theme.colors.primary)};
  background:
    ${({ $tone }) => ($tone === 'green' ? '#f0faf4' : $tone === 'yellow' ? '#fffaf0' : '#f5edfd')};

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 9px;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-size: 22px;
    letter-spacing: -0.03em;
  }
`;

export const AccountTable = styled.div`
  overflow: hidden;
  border: 1px solid #e4e1e8;
  border-radius: 13px;
  background: #ffffff;
`;

export const AccountTableHead = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 1.3fr) 0.8fr 0.55fr 0.7fr 20px;
  gap: 12px;
  align-items: center;
  min-height: 48px;
  padding: 0 14px;
  color: ${({ theme }) => theme.colors.text};
  background: #f4f4f7;
  font-size: 9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const AccountRow = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 1.3fr) 0.8fr 0.55fr 0.7fr 20px;
  gap: 12px;
  align-items: center;
  min-height: 68px;
  padding: 8px 14px;
  border-top: 1px solid #e8e5eb;
  color: ${({ theme }) => theme.colors.text};
  font-size: 9px;

  > svg {
    color: #9a94a2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr) auto auto;

    > span:nth-of-type(1),
    > span:nth-of-type(2) {
      display: none;
    }
  }
`;

export const AccountPerson = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    object-fit: cover;
    border: 1px solid #e1d4f2;
    border-radius: 50%;
  }

  strong {
    overflow: hidden;
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Status = styled.span`
  width: fit-content;
  padding: 5px 9px;
  border-radius: 999px;
  color:
    ${({ $status, theme }) =>
      $status === 'Quitado' ? '#16734d' : $status === 'Parcial' ? '#9b7400' : theme.colors.primary};
  background:
    ${({ $status }) =>
      $status === 'Quitado' ? '#eaf7ef' : $status === 'Parcial' ? '#fff8dc' : '#f3ecfc'};
  font-size: 8px;
  font-weight: 800;
`;

export const PrivacyNote = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin: 14px 0 0;
  color: #8d8794;
  font-size: 10px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 1.5;
  }
`;
