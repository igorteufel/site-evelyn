import { FaWhatsapp } from 'react-icons/fa';
import * as S from './styles';

export default function Footer() {
  return (
    <S.Section id="contato">
      <S.Container>
        <S.Kicker>Comece com calma</S.Kicker>
        <S.Title>Simplifique a gestão do seu consultório.</S.Title>

        <S.Subtitle>
          Conheça a Helpsi e descubra como organizar sua rotina de forma
          simples, segura e eficiente.
        </S.Subtitle>

        <S.Actions>
          <S.PrimaryAction
            href="https://wa.me/5512988194507?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Helpsi"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            Solicitar demonstração
          </S.PrimaryAction>

          <S.SecondaryAction href="mailto:contato@helpsi.com.br">
            contato@helpsi.com.br
          </S.SecondaryAction>
        </S.Actions>
      </S.Container>
    </S.Section>
  );
}
