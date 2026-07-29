import { FaLock, FaRegClock, FaRegFolderOpen } from 'react-icons/fa';
import * as S from './styles';

const highlights = [
  {
    icon: <FaRegFolderOpen />,
    title: 'Tudo no mesmo lugar',
    text: 'Pacientes, agenda, atendimentos e pagamentos conectados em uma rotina mais simples.',
  },
  {
    icon: <FaRegClock />,
    title: 'Mais tempo para atender',
    text: 'Menos alternância entre planilhas, aplicativos e anotações soltas durante o dia.',
  },
  {
    icon: <FaLock />,
    title: 'Organização com cuidado',
    text: 'Informações importantes do consultório ficam estruturadas para consultas rápidas e seguras.',
  },
];

const metrics = [
  { value: '1', label: 'plataforma centralizada' },
  { value: '4', label: 'áreas essenciais conectadas' },
  { value: '100%', label: 'acesso pelo navegador' },
  { value: '24h', label: 'para consultar sua rotina' },
];

function About() {
  return (
    <S.Section id="plataforma">
      <S.Metrics aria-label="Principais números da plataforma">
        {metrics.map((metric) => (
          <S.Metric key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </S.Metric>
        ))}
      </S.Metrics>

      <S.SectionIntro>
        <S.Kicker>O que é a Helpsi</S.Kicker>
        <S.Title>
          Uma rotina mais clara para quem precisa estar presente no atendimento.
        </S.Title>
        <S.Subtitle>
          Uma plataforma de gestão criada para psicólogos e profissionais da
          saúde mental que desejam organizar a rotina de atendimentos de forma
          simples, segura e eficiente.
        </S.Subtitle>
      </S.SectionIntro>

      <S.HighlightGrid>
        {highlights.map((item) => (
          <S.HighlightCard key={item.title}>
            <S.Icon>{item.icon}</S.Icon>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </S.HighlightCard>
        ))}
      </S.HighlightGrid>
    </S.Section>
  );
}

export default About;
