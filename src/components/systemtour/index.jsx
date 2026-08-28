import { useState } from 'react';
import {
  FaArrowRight,
  FaBell,
  FaBirthdayCake,
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaGlobeAmericas,
  FaHome,
  FaPlus,
  FaRegCalendarCheck,
  FaRobot,
  FaRoute,
  FaSearch,
  FaUserFriends,
  FaWallet,
} from 'react-icons/fa';
import helpsiLogo from '../../assets/brand/helpsi-logo.png';
import brainMascot from '../../assets/brand/brain-mascot.png';
import anaAvatar from '../../assets/patients/ana-lima.png';
import gabrielAvatar from '../../assets/patients/gabriel-alves.png';
import lucasAvatar from '../../assets/patients/lucas-martins.png';
import marinaAvatar from '../../assets/patients/marina-costa.png';
import rafaelAvatar from '../../assets/patients/rafael-souza.png';
import * as S from './styles';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
  { id: 'agenda', label: 'Agenda', icon: <FaCalendarAlt /> },
  { id: 'brain', label: 'Brain', icon: <FaRobot /> },
  { id: 'contas', label: 'Contas', icon: <FaWallet /> },
];

const sidebarItems = [
  { id: 'dashboard', label: 'Home', icon: <FaHome /> },
  { id: 'pacientes', label: 'Pacientes', icon: <FaUserFriends /> },
  { id: 'agenda', label: 'Agenda', icon: <FaCalendarAlt /> },
  { id: 'jornada', label: 'Jornada', icon: <FaRoute /> },
  { id: 'contas', label: 'Contas', icon: <FaWallet /> },
];

const scheduleTimes = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'];
const weekDays = [
  ['SEG', '27'],
  ['TER', '28'],
  ['QUA', '29'],
  ['QUI', '30'],
  ['SEX', '31'],
  ['SÁB', '1'],
  ['DOM', '2'],
];

const scheduleEvents = [
  { name: 'Ana Lima', time: '08:00 às 09:00', column: 3, row: 1, span: 2, tone: 'purple' },
  { name: 'Rafael Souza', time: '08:30 às 09:30', column: 4, row: 2, span: 2, tone: 'purple' },
  { name: 'Lucas Martins', time: '09:00 às 10:00', column: 2, row: 3, span: 2, tone: 'coral' },
  { name: 'Horário reservado', time: '10:00 às 11:00', column: 5, row: 5, span: 2, tone: 'gray' },
  { name: 'Gabriel Alves', time: '10:00 às 11:00', column: 6, row: 5, span: 2, tone: 'green' },
];

const accountRows = [
  { name: 'Ana Lima', avatar: anaAvatar, value: 'R$ 130,00', sessions: '4', status: 'Parcial' },
  { name: 'Rafael Souza', avatar: rafaelAvatar, value: 'R$ 120,00', sessions: '2', status: 'Em aberto' },
  { name: 'Lucas Martins', avatar: lucasAvatar, value: 'R$ 160,00', sessions: '3', status: 'Quitado' },
  { name: 'Gabriel Alves', avatar: gabrielAvatar, value: 'R$ 100,00', sessions: '4', status: 'Quitado' },
];

const monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

function smoothChartPath(points) {
  if (points.length === 0) return '';

  const clampY = (value) => Math.max(32, Math.min(280, value));
  const commands = [`M ${points[0].x} ${points[0].y}`];

  for (let index = 0; index < points.length - 1; index += 1) {
    const p0 = points[index - 1] || points[index];
    const p1 = points[index];
    const p2 = points[index + 1];
    const p3 = points[index + 2] || p2;
    const cp1 = {
      x: p1.x + (p2.x - p0.x) / 6,
      y: clampY(p1.y + (p2.y - p0.y) / 6),
    };
    const cp2 = {
      x: p2.x - (p3.x - p1.x) / 6,
      y: clampY(p2.y - (p3.y - p1.y) / 6),
    };

    commands.push(`C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${p2.x} ${p2.y}`);
  }

  return commands.join(' ');
}

function buildDashboardChart(values) {
  const width = 1000;
  const top = 32;
  const right = 24;
  const bottom = 280;
  const left = 56;
  const chartMax = Math.ceil(Math.max(...values, 0) / 500) * 500 || 1;
  const stepX = (width - left - right) / (values.length - 1);
  const points = values.map((value, index) => ({
    label: monthLabels[index],
    value,
    x: left + stepX * index,
    y: bottom - (value / chartMax) * (bottom - top),
  }));
  const linePath = smoothChartPath(points);

  return {
    areaPath: `${linePath} L ${points[points.length - 1].x} ${bottom} L ${points[0].x} ${bottom} Z`,
    bottom,
    linePath,
    points,
    ticks: Array.from({ length: 5 }, (_, index) => {
      const value = (chartMax / 4) * index;
      return {
        value,
        y: bottom - (value / chartMax) * (bottom - top),
      };
    }).reverse(),
    width,
    left,
    right,
  };
}

const dashboardChart = buildDashboardChart([
  0, 0, 0, 0, 0, 8700, 6800, 0, 0, 0, 0, 0,
]);

export function DashboardPanel() {
  return (
    <>
      <S.PanelHeading>
        <div>
          <strong>Home</strong>
          <span>Acompanhe seus principais indicadores do dia.</span>
        </div>
      </S.PanelHeading>

      <S.DashboardMetrics>
        <S.DashboardMetric $tone="purple">
          <S.WidgetIcon><FaUserFriends /></S.WidgetIcon>
          <span>Pacientes ativos</span>
          <strong>20</strong>
        </S.DashboardMetric>
        <S.DashboardMetric $tone="green">
          <S.WidgetIcon $tone="green"><FaCalendarAlt /></S.WidgetIcon>
          <span>Agendamentos hoje</span>
          <strong>2</strong>
        </S.DashboardMetric>
        <S.DashboardMetric $tone="yellow">
          <S.WidgetIcon $tone="yellow"><FaWallet /></S.WidgetIcon>
          <span>Valor pendente</span>
          <strong>R$ 1.620,00</strong>
        </S.DashboardMetric>
      </S.DashboardMetrics>

      <S.DashboardChartCard>
        <S.DashboardChartHeader>
          <S.WidgetIcon><FaRegCalendarCheck /></S.WidgetIcon>
          <div>
            <strong>Recebido no mês</strong>
            <span>
              Valores das sessões do mês, mesmo que o pagamento tenha sido lançado depois.
            </span>
          </div>
          <S.YearControl><span>&lt;</span><strong>2026</strong><span>&gt;</span></S.YearControl>
        </S.DashboardChartHeader>

        <S.DashboardChart
          viewBox="0 0 1000 320"
          role="img"
          aria-label="Gráfico de valor recebido por mês"
        >
          <defs>
            <linearGradient id="dashboardChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {dashboardChart.ticks.map((tick) => (
            <g key={tick.value}>
              <S.DashboardGridLine
                x1={dashboardChart.left}
                y1={tick.y}
                x2={dashboardChart.width - dashboardChart.right}
                y2={tick.y}
              />
              <S.DashboardAxisLabel x="16" y={tick.y + 4}>
                {Math.round(tick.value)}
              </S.DashboardAxisLabel>
            </g>
          ))}

          {dashboardChart.points.map((point) => (
            <S.DashboardGridLine
              key={point.label}
              x1={point.x}
              y1="32"
              x2={point.x}
              y2={dashboardChart.bottom}
              $vertical
            />
          ))}

          <S.DashboardArea d={dashboardChart.areaPath} />
          <S.DashboardCurve d={dashboardChart.linePath} />

          {dashboardChart.points.map((point) => (
            <S.DashboardAxisLabel
              key={point.label}
              x={point.x}
              y="306"
              textAnchor="middle"
            >
              {point.label}
            </S.DashboardAxisLabel>
          ))}
        </S.DashboardChart>
      </S.DashboardChartCard>

      <S.DashboardBottom>
        <S.Widget>
          <S.WidgetHeader>
            <S.WidgetIcon $tone="green"><FaBirthdayCake /></S.WidgetIcon>
            <div>
              <strong>Aniversariantes do mês</strong>
              <span>Pacientes ativos que fazem aniversário em julho</span>
            </div>
          </S.WidgetHeader>
          <S.BirthdayList>
            <S.BirthdayPerson>
              <img src={anaAvatar} alt="" />
              <div><strong>Ana Lima</strong><span>14/07</span></div>
            </S.BirthdayPerson>
            <S.BirthdayPerson>
              <img src={lucasAvatar} alt="" />
              <div><strong>Lucas Martins</strong><span>28/07</span></div>
            </S.BirthdayPerson>
          </S.BirthdayList>
        </S.Widget>

        <S.Widget>
          <S.WidgetHeader>
            <S.WidgetIcon $tone="yellow"><FaWallet /></S.WidgetIcon>
            <div>
              <strong>Pagamentos atrasados</strong>
              <span>Sessões de meses anteriores sem baixa</span>
            </div>
          </S.WidgetHeader>
          <S.OverdueSummary>
            <div><strong>3 sessões</strong><span>Precisam de conferência</span></div>
            <strong>R$ 420,00</strong>
            <FaArrowRight />
          </S.OverdueSummary>
        </S.Widget>
      </S.DashboardBottom>
    </>
  );
}

function AgendaPanel() {
  return (
    <>
      <S.PanelHeading>
        <div>
          <strong>Minha agenda</strong>
          <span>Atendimentos e compromissos organizados em uma única visão.</span>
        </div>
        <S.PanelActions>
          <button type="button"><FaUserFriends /> Todos os pacientes</button>
          <button type="button"><FaPlus /> Adicionar</button>
        </S.PanelActions>
      </S.PanelHeading>

      <S.CalendarShell>
        <S.CalendarToolbar>
          <strong>Jul. a ago. de 2026</strong>
          <span><FaCalendarAlt /> Semana</span>
        </S.CalendarToolbar>
        <S.CalendarScroll>
          <S.CalendarDays>
            <span />
            {weekDays.map(([day, date]) => (
              <div key={day} className={day === 'QUA' ? 'active' : ''}>
                <small>{day}</small>
                <strong>{date}</strong>
              </div>
            ))}
          </S.CalendarDays>
          <S.Schedule>
            {scheduleTimes.map((time) => (
              <S.ScheduleRow key={time}>
                <time>{time}</time>
                {weekDays.map(([day]) => <span key={`${time}-${day}`} />)}
              </S.ScheduleRow>
            ))}
            {scheduleEvents.map((event) => (
              <S.ScheduleEvent
                key={`${event.name}-${event.time}`}
                $column={event.column}
                $row={event.row}
                $span={event.span}
                $tone={event.tone}
              >
                <strong>{event.name}</strong>
                <span>{event.time}</span>
              </S.ScheduleEvent>
            ))}
          </S.Schedule>
        </S.CalendarScroll>
      </S.CalendarShell>
    </>
  );
}

function BrainPanel() {
  return (
    <>
      <S.BrainHeading>
        <S.BrainTitle>
          <img src={brainMascot} alt="" />
          <div>
            <span>Brain</span>
            <strong>Boa tarde, Marina.</strong>
            <small>Preparei um resumo da sua rotina.</small>
          </div>
        </S.BrainTitle>
        <S.BrainTabs>
          <span>Hoje</span>
          <strong>Atenções <i>2</i></strong>
          <span>Conversar</span>
        </S.BrainTabs>
      </S.BrainHeading>

      <S.BrainGrid>
        <S.AttentionIntro>
          <div>
            <strong>O que merece sua atenção</strong>
            <span>Separei os registros e cadastros que precisam de uma conferência.</span>
          </div>
          <img src={brainMascot} alt="Brain, assistente da Helpsi" />
        </S.AttentionIntro>

        <S.AttentionCard>
          <S.Initials>AM</S.Initials>
          <div>
            <small>Atendimento</small>
            <strong>Uma sessão ainda precisa de registro</strong>
            <p>A sessão de Ana Lima estava prevista para 12:00 e ainda não teve o resultado registrado.</p>
          </div>
        </S.AttentionCard>

        <S.AttentionCard>
          <S.Initials>LM</S.Initials>
          <div>
            <small>Paciente</small>
            <strong>Lucas Martins está sem próxima sessão</strong>
            <p>Não há um novo atendimento agendado para este paciente.</p>
          </div>
        </S.AttentionCard>

        <S.BrainRoutine>
          <S.WidgetHeader>
            <S.WidgetIcon><FaClock /></S.WidgetIcon>
            <div><span>Rotina</span><strong>Seus últimos 90 dias</strong></div>
          </S.WidgetHeader>
          <p>Você realizou 48 atendimentos no período.</p>
          <S.RoutineStats>
            <div><strong>48</strong><span>Realizados</span></div>
            <div><strong>7</strong><span>Reagendados</span></div>
            <div><strong>2</strong><span>Cancelados</span></div>
          </S.RoutineStats>
        </S.BrainRoutine>
      </S.BrainGrid>
    </>
  );
}

function AccountsPanel() {
  return (
    <>
      <S.PanelHeading>
        <div>
          <strong>Contas</strong>
          <span>Sessões e valores organizados para facilitar o acompanhamento.</span>
        </div>
        <S.PanelActions>
          <button type="button" aria-label="Buscar"><FaSearch /></button>
          <button type="button"><FaCalendarAlt /> Jul. 2026</button>
        </S.PanelActions>
      </S.PanelHeading>

      <S.AccountSummary>
        <S.AccountMetric $tone="green">
          <FaCheck />
          <span>Recebido de sessões realizadas</span>
          <strong>R$ 4.840,00</strong>
        </S.AccountMetric>
        <S.AccountMetric $tone="yellow">
          <FaClock />
          <span>Pendente de sessões realizadas</span>
          <strong>R$ 760,00</strong>
        </S.AccountMetric>
        <S.AccountMetric $tone="purple">
          <FaWallet />
          <span>Valor total no mês</span>
          <strong>R$ 5.600,00</strong>
        </S.AccountMetric>
      </S.AccountSummary>

      <S.AccountTable>
        <S.AccountTableHead>
          <span>Paciente</span>
          <span>Valor da sessão</span>
          <span>Sessões</span>
          <span>Situação</span>
          <span />
        </S.AccountTableHead>
        {accountRows.map((row) => (
          <S.AccountRow key={row.name}>
            <S.AccountPerson><img src={row.avatar} alt="" /><strong>{row.name}</strong></S.AccountPerson>
            <span>{row.value}</span>
            <span>{row.sessions}</span>
            <S.Status $status={row.status}>{row.status}</S.Status>
            <FaArrowRight />
          </S.AccountRow>
        ))}
      </S.AccountTable>
    </>
  );
}

const panels = {
  dashboard: <DashboardPanel />,
  agenda: <AgendaPanel />,
  brain: <BrainPanel />,
  contas: <AccountsPanel />,
};

export default function SystemTour() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <S.Section aria-labelledby="system-tour-title">
      <S.Intro>
        <div>
          <S.Kicker>Helpsi por dentro</S.Kicker>
          <S.Title id="system-tour-title">Mais do sistema. Menos promessa.</S.Title>
        </div>
        <S.Subtitle>
          Explore algumas das telas que conectam a rotina do consultório, com
          personagens e informações totalmente fictícios.
        </S.Subtitle>
      </S.Intro>

      <S.Tabs role="tablist" aria-label="Telas da plataforma">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </S.Tabs>

      <S.ProductWindow>
        <S.Sidebar aria-hidden="true">
          <img src={helpsiLogo} alt="" />
          <nav>
            {sidebarItems.map((item) => (
              <span key={item.id} className={activeTab === item.id ? 'active' : ''}>
                {item.icon}
                {item.label}
              </span>
            ))}
          </nav>
        </S.Sidebar>

        <S.Workspace>
          <S.Topbar>
            <span>Área demonstrativa</span>
            <div><FaBell /><img src={marinaAvatar} alt="" /></div>
          </S.Topbar>
          <S.Panel
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
          >
            {panels[activeTab]}
          </S.Panel>
        </S.Workspace>
      </S.ProductWindow>

      <S.PrivacyNote>
        <FaGlobeAmericas />
        Todos os nomes, valores, datas e personagens desta demonstração são fictícios.
      </S.PrivacyNote>
    </S.Section>
  );
}
