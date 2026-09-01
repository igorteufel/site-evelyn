export const CONTACT = {
  whatsappNumber: '5512988324925',
  whatsappMessage: 'Olá, Evelyn. Gostaria de saber mais sobre a terapia.',
  instagramHandle: '@psipeneluppi',
  instagramUrl: 'https://www.instagram.com/psipeneluppi/',
  tiktokUrl: 'https://www.tiktok.com/@psipeneluppi',
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
export const INSTAGRAM_URL = CONTACT.instagramUrl;
export const TIKTOK_URL = CONTACT.tiktokUrl;
export const instagramPostUrl = (path, id) => `${INSTAGRAM_URL}${path}/${id}/`;
