import {
  FaBell,
  FaCalendarAlt,
  FaCheck,
  FaHome,
  FaRegHeart,
  FaSearch,
  FaUserFriends,
  FaWallet,
} from 'react-icons/fa';
import helpsiLogo from '../../assets/brand/helpsi-logo.png';
import brainWave from '../../assets/brand/brain-wave.png';
import anaAvatar from '../../assets/patients/ana-lima.png';
import marinaAvatar from '../../assets/patients/marina-costa.png';
import rafaelAvatar from '../../assets/patients/rafael-souza.png';
import lucasAvatar from '../../assets/patients/lucas-martins.png';
import * as S from './styles';

function Hero() {
  const appointments = [
    { time: '09:00', name: 'Ana Lima', status: 'Confirmado', avatar: anaAvatar },
    { time: '10:30', name: 'Rafael Souza', status: 'Confirmado', avatar: rafaelAvatar },
    { time: '14:00', name: 'Lucas Martins', status: 'Pendente', avatar: lucasAvatar },
  ];

  const sidebarItems = [
    { icon: <FaHome />, label: 'Home', active: true },
    { icon: <FaUserFriends />, label: 'Pacientes' },
    { icon: <FaCalendarAlt />, label: 'Agenda' },
    { icon: <FaWallet />, label: 'Contas' },
  ];

  return (
    <S.HeroSection id="inicio">
      <S.Content>
        <S.Eyebrow>
          <FaRegHeart />
          Plataforma de gestão para saúde mental
        </S.Eyebrow>

        <S.Title>
          A gestão do seu consultório, simples e completa.
        </S.Title>

        <S.Complement>
          Centralize agenda, pacientes, atendimentos e financeiro em uma
          plataforma criada para profissionais da saúde mental.
        </S.Complement>

        <S.ButtonContainer>
          <S.PrimaryButton href="#contato">
            Conhecer a Helpsi
          </S.PrimaryButton>

          <S.SecondaryButton href="#funcionalidades">
            Conhecer a plataforma
          </S.SecondaryButton>
        </S.ButtonContainer>

        <S.SupportingLine>
          <span><FaCheck /> Informações organizadas</span>
          <span><FaCheck /> Acesso pelo navegador</span>
          <span><FaCheck /> Rotina mais leve</span>
        </S.SupportingLine>
      </S.Content>

      <S.Showcase aria-label="Prévia ilustrativa da plataforma Helpsi">
        <S.AppShell>
          <S.Sidebar>
            <S.AppLogo src={helpsiLogo} alt="" aria-hidden="true" />

            <S.SidebarList>
              {sidebarItems.map((item) => (
                <S.SidebarItem key={item.label} $active={item.active}>
                  {item.icon}
                  {item.label}
                </S.SidebarItem>
              ))}
            </S.SidebarList>
          </S.Sidebar>

          <S.AppMain>
            <S.TopBar>
              <div>
                <strong>Home</strong>
                <span>Acompanhe os principais indicadores do dia.</span>
              </div>
              <S.TopActions>
                <FaBell />
                <S.Avatar src={marinaAvatar} alt="Marina Costa" />
              </S.TopActions>
            </S.TopBar>

            <S.Metrics>
              <S.MetricCard $tone="blue">
                <FaUserFriends />
                <span>Pacientes ativos</span>
                <strong>21</strong>
              </S.MetricCard>
              <S.MetricCard $tone="green">
                <FaCalendarAlt />
                <span>Agendamentos hoje</span>
                <strong>6</strong>
              </S.MetricCard>
              <S.MetricCard $tone="yellow">
                <FaWallet />
                <span>Valor pendente</span>
                <strong>R$ 8.875</strong>
              </S.MetricCard>
            </S.Metrics>

            <S.ChartCard>
              <S.ChartHeader>
                <div>
                  <strong>Valor recebido por período</strong>
                  <span>Evolução financeira anual</span>
                </div>
                <S.YearPill>2026</S.YearPill>
              </S.ChartHeader>
              <S.ChartArea>
                <S.ChartLine />
              </S.ChartArea>
            </S.ChartCard>
          </S.AppMain>
        </S.AppShell>

        <S.PhoneScreen>
          <S.PhoneTop>
            <FaSearch />
            <span>Procurar paciente</span>
          </S.PhoneTop>
          <S.PhoneTitle>Atendimentos de hoje</S.PhoneTitle>
          <S.AppointmentList>
            {appointments.map((item) => (
              <S.Appointment key={`${item.time}-${item.name}`}>
                <S.Time>{item.time}</S.Time>
                <S.PatientAvatar src={item.avatar} alt="" aria-hidden="true" />
                <S.AppointmentInfo>
                  <strong>{item.name}</strong>
                  <span>{item.status}</span>
                </S.AppointmentInfo>
                <S.CheckIcon>
                  <FaCheck />
                </S.CheckIcon>
              </S.Appointment>
            ))}
          </S.AppointmentList>
        </S.PhoneScreen>

        <S.BrainMascot src={brainWave} alt="Brain, mascote da Helpsi" />
      </S.Showcase>
    </S.HeroSection>
  );
}

export default Hero;
