import { useEffect, useRef, useState } from 'react';
import {
  FaArrowRight,
  FaBrain,
  FaCalendarAlt,
  FaChartPie,
  FaChevronLeft,
  FaChevronRight,
  FaFileInvoiceDollar,
  FaFileMedicalAlt,
  FaPause,
  FaPlay,
  FaRoute,
  FaUserFriends,
} from 'react-icons/fa';
import accountsScreen from '../../assets/screens/accounts.png';
import agendaScreen from '../../assets/screens/agenda.png';
import clinicHealthScreen from '../../assets/screens/clinic-health-demo-v2.png';
import homeDetailsScreen from '../../assets/screens/home-details.png';
import homeOverviewScreen from '../../assets/screens/home-overview.png';
import journeyScreen from '../../assets/screens/journey.png';
import patientsScreen from '../../assets/screens/patients.png';
import * as S from './styles';

const features = [
  {
    icon: <FaCalendarAlt />,
    title: 'Agenda',
    text: 'Organize atendimentos com rapidez e visualize sua rotina diária, semanal ou mensal.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Pacientes',
    text: 'Reúna cadastro, status, próxima sessão e informações essenciais de cada acompanhamento.',
  },
  {
    icon: <FaFileMedicalAlt />,
    title: 'Prontuário e anamnese',
    text: 'Retome o contexto de cada sessão com registros clínicos vinculados ao acompanhamento.',
  },
  {
    icon: <FaRoute />,
    title: 'Jornada',
    text: 'Visualize presença, frequência, reagendamentos e a continuidade de cada acompanhamento.',
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: 'Financeiro',
    text: 'Acompanhe pagamentos realizados, sessões pendentes e faturamento do consultório.',
  },
  {
    icon: <FaChartPie />,
    title: 'Saúde da Clínica',
    text: 'Conecte realizado, previsão, presença e sinais da Brain para entender o momento da prática.',
  },
  {
    icon: <FaBrain />,
    title: 'Brain',
    text: 'Receba um resumo do dia, veja atenções priorizadas e siga direto para a próxima ação.',
  },
];

const carouselSlides = [
  { id: 'home', label: 'Home' },
  { id: 'patients', label: 'Pacientes' },
  { id: 'agenda', label: 'Agenda' },
  { id: 'journey', label: 'Jornada' },
  { id: 'accounts', label: 'Contas' },
  { id: 'clinic-health', label: 'Saúde + Brain' },
];

function Portfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [homeView, setHomeView] = useState('overview');
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
        <S.Title>Da rotina clínica à gestão do consultório</S.Title>
        <S.Subtitle>
          Sete capacidades conectadas para acompanhar cada pessoa, organizar a
          operação e entender o momento da sua prática.
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
            Da visão geral à Saúde da Clínica, veja como contexto, operação e
            leitura da Brain permanecem no mesmo fluxo.
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
                <S.ScreenshotScreen>
                  <S.ScreenshotStage>
                    <S.ScreenshotImage
                      src={homeView === 'overview' ? homeOverviewScreen : homeDetailsScreen}
                      alt={
                        homeView === 'overview'
                          ? 'Dashboard Home da Helpsi com indicadores e gráfico financeiro'
                          : 'Dashboard Home da Helpsi com agenda, pacientes por país e aniversariantes'
                      }
                    />
                  </S.ScreenshotStage>
                  <S.ScreenshotFooter>
                    <span>Visão geral do consultório</span>
                    <S.HomeViewToggle aria-label="Selecionar trecho da Home">
                      <button
                        type="button"
                        className={homeView === 'overview' ? 'active' : ''}
                        onClick={() => setHomeView('overview')}
                        aria-pressed={homeView === 'overview'}
                      >
                        Resumo
                      </button>
                      <button
                        type="button"
                        className={homeView === 'details' ? 'active' : ''}
                        onClick={() => setHomeView('details')}
                        aria-pressed={homeView === 'details'}
                      >
                        Indicadores
                      </button>
                    </S.HomeViewToggle>
                  </S.ScreenshotFooter>
                </S.ScreenshotScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 1}
                inert={activeSlide !== 1 ? true : undefined}
                aria-label="Tela de Pacientes"
              >
                <S.ScreenshotScreen>
                  <S.ScreenshotStage>
                    <S.ScreenshotImage
                      src={patientsScreen}
                      alt="Tela de gestão de pacientes da Helpsi com dados demonstrativos"
                    />
                  </S.ScreenshotStage>
                  <S.ScreenshotFooter>
                    <span>Gestão de pacientes</span>
                  </S.ScreenshotFooter>
                </S.ScreenshotScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 2}
                inert={activeSlide !== 2 ? true : undefined}
                aria-label="Tela de Agenda"
              >
                <S.ScreenshotScreen>
                  <S.ScreenshotStage>
                    <S.ScreenshotImage
                      src={agendaScreen}
                      alt="Tela da agenda semanal da Helpsi com compromissos demonstrativos"
                    />
                  </S.ScreenshotStage>
                  <S.ScreenshotFooter>
                    <span>Agenda semanal</span>
                  </S.ScreenshotFooter>
                </S.ScreenshotScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 3}
                inert={activeSlide !== 3 ? true : undefined}
                aria-label="Tela de Jornada"
              >
                <S.ScreenshotScreen>
                  <S.ScreenshotStage>
                    <S.ScreenshotImage
                      src={journeyScreen}
                      alt="Tela da Jornada da Helpsi aguardando a seleção de um paciente"
                    />
                  </S.ScreenshotStage>
                  <S.ScreenshotFooter>
                    <span>Jornada do paciente</span>
                  </S.ScreenshotFooter>
                </S.ScreenshotScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 4}
                inert={activeSlide !== 4 ? true : undefined}
                aria-label="Tela de Contas"
              >
                <S.ScreenshotScreen>
                  <S.ScreenshotStage>
                    <S.ScreenshotImage
                      src={accountsScreen}
                      alt="Tela de controle financeiro da Helpsi com valores demonstrativos"
                    />
                  </S.ScreenshotStage>
                  <S.ScreenshotFooter>
                    <span>Controle financeiro</span>
                  </S.ScreenshotFooter>
                </S.ScreenshotScreen>
              </S.CarouselSlide>

              <S.CarouselSlide
                aria-hidden={activeSlide !== 5}
                inert={activeSlide !== 5 ? true : undefined}
                aria-label="Tela Saúde da Clínica com leitura da Brain"
              >
                <S.ScreenshotScreen>
                  <S.ScreenshotStage>
                    <S.ScreenshotImage
                      src={clinicHealthScreen}
                      alt="Relatório Saúde da Clínica com indicadores e leitura da Brain usando dados demonstrativos"
                    />
                  </S.ScreenshotStage>
                  <S.ScreenshotFooter>
                    <span>Saúde da clínica e leitura da Brain</span>
                  </S.ScreenshotFooter>
                </S.ScreenshotScreen>
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
          Capturas da plataforma com personagens e informações demonstrativas
          para preservar a privacidade.
        </S.FictionalNote>
      </S.ProductStory>
    </S.Section>
  );
}

export default Portfolio;
