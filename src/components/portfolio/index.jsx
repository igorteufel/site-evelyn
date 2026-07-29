import { useEffect, useRef, useState } from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaFileInvoiceDollar,
  FaFilter,
  FaGlobe,
  FaHistory,
  FaHome,
  FaPause,
  FaPlay,
  FaPlus,
  FaRoute,
  FaSearch,
  FaUserFriends,
  FaWallet,
} from 'react-icons/fa';
import brainThinking from '../../assets/brand/brain-friendly-thinking.png';
import helpsiLogo from '../../assets/brand/helpsi-logo.png';
import anaAvatar from '../../assets/patients/ana-lima.png';
import gabrielAvatar from '../../assets/patients/gabriel-alves.png';
import lucasAvatar from '../../assets/patients/lucas-martins.png';
import marinaAvatar from '../../assets/patients/marina-costa.png';
import rafaelAvatar from '../../assets/patients/rafael-souza.png';
import { DashboardPanel } from '../systemtour';
import * as S from './styles';
import * as T from '../systemtour/styles';

const features = [
  {
    icon: <FaCalendarAlt />,
    title: 'Agenda',
    text: 'Organize atendimentos com rapidez e visualize sua rotina diária, semanal ou mensal.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Pacientes',
    text: 'Tenha dados, contatos e informações importantes de cada paciente sempre à mão.',
  },
  {
    icon: <FaHistory />,
    title: 'Histórico',
    text: 'Acompanhe rapidamente os atendimentos realizados e mantenha a rotina em ordem.',
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: 'Financeiro',
    text: 'Acompanhe pagamentos realizados, sessões pendentes e faturamento do consultório.',
  },
  {
    icon: <FaGlobe />,
    title: 'Acesso web',
    text: 'Use a Helpsi pelo navegador em qualquer computador, sem depender de vários aplicativos.',
  },
];

const patientRecords = [
  { name: 'Ana Lima', avatar: anaAvatar, phone: '(00) 90000-0001', email: 'ana.lima@exemplo.com', country: 'Brasil', value: 'R$ 130,00' },
  { name: 'Rafael Souza', avatar: rafaelAvatar, phone: '(00) 90000-0002', email: 'rafael@exemplo.com', country: 'Brasil', value: 'R$ 120,00' },
  { name: 'Lucas Martins', avatar: lucasAvatar, phone: '+351 900 000 003', email: 'lucas@exemplo.com', country: 'Portugal', value: 'R$ 160,00' },
  { name: 'Marina Freitas', avatar: marinaAvatar, phone: '+44 7700 900004', email: 'marina@exemplo.com', country: 'Reino Unido', value: 'R$ 130,00' },
  { name: 'Gabriel Alves', avatar: gabrielAvatar, phone: '(00) 90000-0005', email: 'gabriel@exemplo.com', country: 'Brasil', value: 'R$ 100,00' },
  { name: 'Beatriz Melo', avatar: anaAvatar, phone: '(00) 90000-0006', email: 'beatriz@exemplo.com', country: 'Brasil', value: 'R$ 140,00' },
];

const carouselSlides = [
  { id: 'home', label: 'Home' },
  { id: 'patients', label: 'Pacientes' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'journey', label: 'Jornada' },
  { id: 'accounts', label: 'Contas' },
];

const carouselWeekDays = [
  ['SEG', '27'],
  ['TER', '28'],
  ['QUA', '29'],
  ['QUI', '30'],
  ['SEX', '31'],
  ['SÁB', '1'],
  ['DOM', '2'],
];

const carouselTimes = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'];

const carouselEvents = [
  { name: 'Ana Lima', time: '08:00 às 09:00', column: 3, row: 1, span: 2, tone: 'purple' },
  { name: 'Rafael Souza', time: '08:30 às 09:30', column: 4, row: 2, span: 2, tone: 'purple' },
  { name: 'Lucas Martins', time: '09:00 às 10:00', column: 2, row: 3, span: 2, tone: 'coral' },
  { name: 'Horário reservado', time: '10:00 às 11:00', column: 5, row: 5, span: 2, tone: 'gray' },
  { name: 'Gabriel Alves', time: '10:00 às 11:00', column: 6, row: 5, span: 2, tone: 'green' },
];

function ProductSidebar({ active }) {
  const items = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'patients', label: 'Pacientes', icon: <FaUserFriends /> },
    { id: 'agenda', label: 'Agenda', icon: <FaCalendarAlt /> },
    { id: 'journey', label: 'Jornada', icon: <FaRoute /> },
    { id: 'accounts', label: 'Contas', icon: <FaWallet /> },
  ];

  return (
    <S.PreviewSidebar>
      <S.PreviewLogo src={helpsiLogo} alt="Helpsi" />
      {items.map((item) => (
        <S.PreviewNavItem key={item.id} $active={active === item.id}>
          {item.icon}
          <span>{item.label}</span>
        </S.PreviewNavItem>
      ))}
    </S.PreviewSidebar>
  );
}

function Portfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const dragStart = useRef(null);

  useEffect(() => {
    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isPlaying || isHovered || reducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isHovered, isPlaying]);

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % carouselSlides.length);
  };

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handlePointerUp = (event) => {
    if (dragStart.current === null) return;

    const distance = event.clientX - dragStart.current;
    dragStart.current = null;

    if (Math.abs(distance) < 48) return;
    if (distance < 0) showNext();
    else showPrevious();
  };

  return (
    <S.Section id="funcionalidades">
      <S.Header>
        <S.Kicker>Funcionalidades</S.Kicker>
        <S.Title>Tudo o que você precisa para administrar seu consultório</S.Title>
        <S.Subtitle>
          Uma plataforma criada para facilitar sua rotina desde o primeiro
          atendimento até o acompanhamento financeiro.
        </S.Subtitle>
      </S.Header>

      <S.Grid>
        {features.map((feature, index) => (
          <S.Card key={feature.title}>
            <S.CardNumber>{String(index + 1).padStart(2, '0')}</S.CardNumber>
            <S.CardIcon>{feature.icon}</S.CardIcon>
            <S.CardTitle>{feature.title}</S.CardTitle>
            <S.CardText>{feature.text}</S.CardText>
          </S.Card>
        ))}
      </S.Grid>

      <S.ProductStory aria-labelledby="product-story-title">
        <S.ProductStoryHeader>
          <div>
            <S.Kicker>Conheça a plataforma</S.Kicker>
            <S.ProductStoryTitle id="product-story-title">
              Uma visão real da rotina dentro da Helpsi
            </S.ProductStoryTitle>
          </div>
          <S.ProductStoryText>
            Da visão geral às contas, percorra pacientes, agenda e jornada em
            telas claras, com as informações importantes sempre em primeiro plano.
          </S.ProductStoryText>
        </S.ProductStoryHeader>

        <S.Carousel
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <S.CarouselHeader>
            <div>
              <span>Explore a plataforma</span>
              <strong>{carouselSlides[activeSlide].label}</strong>
            </div>
            <S.CarouselHint>
              Arraste para o lado ou use as setas
              <FaArrowRight />
            </S.CarouselHint>
          </S.CarouselHeader>

          <S.CarouselViewport
            tabIndex="0"
            aria-roledescription="carrossel"
            aria-label="Telas reais da plataforma Helpsi"
            onPointerDown={(event) => {
              dragStart.current = event.clientX;
            }}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              dragStart.current = null;
            }}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') showNext();
              if (event.key === 'ArrowLeft') showPrevious();
            }}
          >
            <S.CarouselTrack $active={activeSlide}>
              <S.CarouselSlide
                aria-hidden={activeSlide !== 0}
                inert={activeSlide !== 0 ? true : undefined}
                aria-label="Tela Home"
              >
                <S.MainScreen>
                  <S.AppPreview>
                    <ProductSidebar active="home" />
                    <S.PreviewContent>
                      <DashboardPanel />
                    </S.PreviewContent>
                  </S.AppPreview>
                  <S.ScreenLabel>Visão geral do consultório</S.ScreenLabel>
                </S.MainScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 1}
                inert={activeSlide !== 1 ? true : undefined}
                aria-label="Tela de Pacientes"
              >
                <S.MainScreen>
                  <S.AppPreview>
                    <ProductSidebar active="patients" />
                    <S.PreviewContent>
                      <S.PatientsPageHeader>
                        <div>
                          <strong>Pacientes</strong>
                          <span>Gerencie seus cadastros e informações dos pacientes.</span>
                        </div>
                        <S.PatientHeaderActions>
                          <button type="button" aria-label="Buscar pacientes"><FaSearch /></button>
                          <button type="button"><FaFilter /> Filtrar</button>
                          <S.NewPatientButton type="button">
                            <FaPlus />
                            Cadastrar paciente
                          </S.NewPatientButton>
                        </S.PatientHeaderActions>
                      </S.PatientsPageHeader>

                      <S.PatientTableScroll>
                        <S.PatientDataTable>
                          <S.PatientDataHead>
                            <span>Nome completo</span>
                            <span>Contato</span>
                            <span>E-mail</span>
                            <span>País</span>
                            <span>Valor sessão</span>
                            <span>Status</span>
                            <span>Ações</span>
                          </S.PatientDataHead>
                          {patientRecords.map((patient) => (
                            <S.PatientDataRow key={patient.name}>
                              <S.PatientName>
                                <img src={patient.avatar} alt="" />
                                <strong>{patient.name}</strong>
                              </S.PatientName>
                              <span>{patient.phone}</span>
                              <span>{patient.email}</span>
                              <S.Country><FaGlobe /> {patient.country}</S.Country>
                              <span>{patient.value}</span>
                              <S.ActiveStatus>Ativo</S.ActiveStatus>
                              <button type="button" aria-label={`Abrir cadastro de ${patient.name}`}>
                                <FaArrowRight />
                              </button>
                            </S.PatientDataRow>
                          ))}
                        </S.PatientDataTable>
                      </S.PatientTableScroll>
                    </S.PreviewContent>
                  </S.AppPreview>
                  <S.ScreenLabel>Gestão de pacientes</S.ScreenLabel>
                </S.MainScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 2}
                inert={activeSlide !== 2 ? true : undefined}
                aria-label="Tela de Agenda"
              >
                <S.MainScreen>
                  <S.AppPreview>
                    <ProductSidebar active="agenda" />
                    <S.PreviewContent>
                      <T.PanelHeading>
                        <div>
                          <strong>Minha agenda</strong>
                          <span>Administre sua agenda com seus pacientes ou compromissos pessoais.</span>
                        </div>
                        <T.PanelActions>
                          <button type="button"><FaUserFriends /> Todos os pacientes</button>
                          <button type="button"><FaPlus /> Adicionar</button>
                        </T.PanelActions>
                      </T.PanelHeading>

                      <T.CalendarShell>
                        <T.CalendarToolbar>
                          <strong>Jul. — Ago. 2026</strong>
                          <span><FaCalendarAlt /> Semana</span>
                        </T.CalendarToolbar>
                        <T.CalendarScroll>
                          <T.CalendarDays>
                            <span />
                            {carouselWeekDays.map(([day, date]) => (
                              <div key={day} className={day === 'QUA' ? 'active' : ''}>
                                <small>{day}</small>
                                <strong>{date}</strong>
                              </div>
                            ))}
                          </T.CalendarDays>
                          <T.Schedule>
                            {carouselTimes.map((time) => (
                              <T.ScheduleRow key={time}>
                                <time>{time}</time>
                                {carouselWeekDays.map(([day]) => <span key={`${time}-${day}`} />)}
                              </T.ScheduleRow>
                            ))}
                            {carouselEvents.map((event) => (
                              <T.ScheduleEvent
                                key={`${event.name}-${event.time}`}
                                $column={event.column}
                                $row={event.row}
                                $span={event.span}
                                $tone={event.tone}
                              >
                                <strong>{event.name}</strong>
                                <span>{event.time}</span>
                              </T.ScheduleEvent>
                            ))}
                          </T.Schedule>
                        </T.CalendarScroll>
                      </T.CalendarShell>
                    </S.PreviewContent>
                  </S.AppPreview>
                  <S.ScreenLabel>Agenda semanal</S.ScreenLabel>
                </S.MainScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 3}
                inert={activeSlide !== 3 ? true : undefined}
                aria-label="Tela de Jornada"
              >
                <S.MainScreen>
                  <S.AppPreview>
                    <ProductSidebar active="journey" />
                    <S.PreviewContent>
                      <T.PanelHeading>
                        <div>
                          <strong>Jornada</strong>
                          <span>Acompanhe a trajetória e os registros objetivos de cada paciente.</span>
                        </div>
                        <S.JourneyPatientSelect type="button">
                          Selecione um paciente
                          <FaChevronDown />
                        </S.JourneyPatientSelect>
                      </T.PanelHeading>

                      <S.CarouselJourneyEmpty>
                        <img src={brainThinking} alt="" />
                        <strong>Escolha um paciente para começar</strong>
                        <p>
                          Você verá a evolução, os atendimentos e os principais marcos do
                          acompanhamento.
                        </p>
                        <S.CarouselJourneyAlert>
                          <FaRoute />
                          <div>
                            <strong>Use o campo acima para selecionar um paciente.</strong>
                            <span>Você poderá trocar a seleção quando quiser.</span>
                          </div>
                        </S.CarouselJourneyAlert>
                      </S.CarouselJourneyEmpty>
                    </S.PreviewContent>
                  </S.AppPreview>
                  <S.ScreenLabel>Jornada do paciente</S.ScreenLabel>
                </S.MainScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 4}
                inert={activeSlide !== 4 ? true : undefined}
                aria-label="Tela de Contas"
              >
                <S.MainScreen>
                  <S.AppPreview>
                    <ProductSidebar active="accounts" />
                    <S.PreviewContent>
                      <T.PanelHeading>
                        <div>
                          <strong>Contas</strong>
                          <span>Somente sessões com comparecimento registrado geram valores pendentes.</span>
                        </div>
                        <T.PanelActions>
                          <button type="button" aria-label="Buscar"><FaSearch /></button>
                          <button type="button"><FaCalendarAlt /> Jul. 2026</button>
                        </T.PanelActions>
                      </T.PanelHeading>

                      <T.AccountSummary>
                        <T.AccountMetric $tone="green">
                          <FaWallet />
                          <span>Recebido de sessões realizadas</span>
                          <strong>R$ 4.840,00</strong>
                        </T.AccountMetric>
                        <T.AccountMetric $tone="yellow">
                          <FaFileInvoiceDollar />
                          <span>Pendente de sessões realizadas</span>
                          <strong>R$ 760,00</strong>
                        </T.AccountMetric>
                        <T.AccountMetric $tone="purple">
                          <FaWallet />
                          <span>Valor total no mês</span>
                          <strong>R$ 5.600,00</strong>
                        </T.AccountMetric>
                      </T.AccountSummary>

                      <T.AccountTable>
                        <T.AccountTableHead>
                          <span>Paciente</span>
                          <span>Valor da sessão</span>
                          <span>Sessões</span>
                          <span>Situação</span>
                          <span />
                        </T.AccountTableHead>
                        {patientRecords.slice(0, 5).map((patient, index) => {
                          const status = ['Parcial', 'Em aberto', 'Quitado', 'Quitado', 'Parcial'][index];
                          return (
                            <T.AccountRow key={patient.name}>
                              <T.AccountPerson>
                                <img src={patient.avatar} alt="" />
                                <strong>{patient.name}</strong>
                              </T.AccountPerson>
                              <span>{patient.value}</span>
                              <span>{index + 1}</span>
                              <T.Status $status={status}>{status}</T.Status>
                              <FaArrowRight />
                            </T.AccountRow>
                          );
                        })}
                      </T.AccountTable>
                    </S.PreviewContent>
                  </S.AppPreview>
                  <S.ScreenLabel>Controle financeiro</S.ScreenLabel>
                </S.MainScreen>
              </S.CarouselSlide>
            </S.CarouselTrack>
          </S.CarouselViewport>

          <S.CarouselControls>
            <button type="button" onClick={showPrevious} aria-label="Mostrar tela anterior">
              <FaChevronLeft />
            </button>
            <S.CarouselDots aria-label="Selecionar tela">
              {carouselSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={activeSlide === index ? 'active' : ''}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Mostrar tela de ${slide.label}`}
                  aria-current={activeSlide === index ? 'true' : undefined}
                />
              ))}
            </S.CarouselDots>
            <button
              type="button"
              onClick={() => setIsPlaying((current) => !current)}
              aria-label={isPlaying ? 'Pausar passagem automática' : 'Retomar passagem automática'}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button type="button" onClick={showNext} aria-label="Mostrar próxima tela">
              <FaChevronRight />
            </button>
          </S.CarouselControls>
        </S.Carousel>

        <S.FictionalNote>
          Personagens e informações demonstrativas criados para apresentar a
          experiência da plataforma.
        </S.FictionalNote>
      </S.ProductStory>
    </S.Section>
  );
}

export default Portfolio;
