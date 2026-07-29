import {
  FaCheck,
  FaChevronDown,
  FaRoute,
  FaTimes,
} from 'react-icons/fa';
import brainThinking from '../../assets/brand/brain-friendly-thinking.png';
import * as S from './styles';

const beforeItems = [
  'Agenda em papel',
  'Planilhas separadas',
  'Vários aplicativos',
  'Informações espalhadas',
];

const afterItems = [
  'Tudo centralizado',
  'Atendimento organizado',
  'Histórico completo',
  'Financeiro sob controle',
];

const differentials = [
  'Interface simples e intuitiva',
  'Desenvolvida pensando na rotina do psicólogo',
  'Fácil de aprender e usar no dia a dia',
  'Acesso pelo navegador em qualquer computador',
];

export default function Works() {
  return (
    <S.Section id="rotina">
      <S.Intro>
        <S.Kicker>Na prática</S.Kicker>
        <S.Title>Sua rotina mais organizada</S.Title>
        <S.Subtitle>
          Quando as informações deixam de ficar espalhadas, o consultório fica
          mais leve de administrar e o atendimento ganha mais continuidade.
        </S.Subtitle>
      </S.Intro>

      <S.Comparison>
        <S.Column>
          <S.ColumnHeader>
            <span>Antes</span>
            <strong>Rotina fragmentada</strong>
          </S.ColumnHeader>

          <S.List>
            {beforeItems.map((item) => (
              <S.ListItem key={item} $tone="negative">
                <S.StatusIcon $tone="negative">
                  <FaTimes />
                </S.StatusIcon>
                {item}
              </S.ListItem>
            ))}
          </S.List>
        </S.Column>

        <S.Column $featured>
          <S.ColumnHeader>
            <span>Depois</span>
            <strong>Consultório centralizado</strong>
          </S.ColumnHeader>

          <S.List>
            {afterItems.map((item) => (
              <S.ListItem key={item} $tone="positive">
                <S.StatusIcon $tone="positive">
                  <FaCheck />
                </S.StatusIcon>
                {item}
              </S.ListItem>
            ))}
          </S.List>
        </S.Column>
      </S.Comparison>

      <S.CareBlock>
        <S.CareCopy>
          <S.Kicker>Feita para quem cuida de pessoas</S.Kicker>
          <h2>
            A Helpsi organiza a parte administrativa para você manter o foco no
            atendimento humano.
          </h2>
          <p>
            Psicólogos autônomos, clínicas, consultórios particulares e
            profissionais em crescimento podem usar a plataforma para reduzir a
            carga operacional sem deixar a rotina impessoal.
          </p>

          <S.DifferentialList>
            {differentials.map((item) => (
              <S.Differential key={item}>
                <FaCheck />
                {item}
              </S.Differential>
            ))}
          </S.DifferentialList>
        </S.CareCopy>

        <S.ProductShowcase aria-label="Tela de Jornada da Helpsi">
          <S.JourneyPreview>
            <S.JourneyHeader>
              <div>
                <strong>Jornada</strong>
                <span>
                  Acompanhe a trajetória e os registros objetivos de cada paciente.
                </span>
              </div>
              <S.PatientSelector>
                Selecione um paciente
                <FaChevronDown />
              </S.PatientSelector>
            </S.JourneyHeader>

            <S.JourneyEmpty>
              <img src={brainThinking} alt="" />
              <strong>Escolha um paciente para começar</strong>
              <p>
                Você verá a evolução, os atendimentos e os principais marcos do
                acompanhamento.
              </p>
              <S.JourneyAlert>
                <FaRoute />
                <div>
                  <strong>Use o campo acima para selecionar um paciente.</strong>
                  <span>Você poderá trocar a seleção quando quiser.</span>
                </div>
              </S.JourneyAlert>
            </S.JourneyEmpty>
          </S.JourneyPreview>
        </S.ProductShowcase>
      </S.CareBlock>
    </S.Section>
  );
}
