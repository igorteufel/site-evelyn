import { FaArrowUp, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from '../../content/site';
import * as S from './styles';

export default function Footer() {
  return (
    <S.Footer id="contato">
      <S.CtaPanel>
        <S.Kicker>Vamos conversar?</S.Kicker>
        <S.Title>Talvez este seja o momento de olhar para você com mais cuidado.</S.Title>
        <S.Text>Você pode me enviar uma mensagem para consultar minha disponibilidade e entender os próximos passos, sem compromisso.</S.Text>
        <S.Action href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> Falar comigo pelo WhatsApp</S.Action>
      </S.CtaPanel>
      <S.Bottom>
        <S.Brand><strong>psipeneluppi</strong><span>●</span></S.Brand>
        <p>© {new Date().getFullYear()} psipeneluppi. Todos os direitos reservados.</p>
        <S.Socials>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram da Evelyn"><FaInstagram aria-hidden="true" /></a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok da Evelyn"><FaTiktok aria-hidden="true" /></a>
          <a href="#inicio" aria-label="Voltar ao início"><FaArrowUp aria-hidden="true" /></a>
        </S.Socials>
      </S.Bottom>
      <S.Notice>Este site não oferece atendimento emergencial. Em situação de risco imediato, procure um serviço de emergência da sua região.</S.Notice>
    </S.Footer>
  );
}
