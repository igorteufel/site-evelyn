import { breakpoints } from './breakpoints';

const brand = {
  50: '#F9F5FF',
  100: '#EDE1FE',
  200: '#D4B7FB',
  300: '#B994EE',
  500: '#883CEC',
  600: '#7C2CE1',
  700: '#6E18DE',
  900: '#25133E',
  950: '#22113F',
};

const neutral = {
  0: '#FFFFFF',
  50: '#FCFCFC',
  100: '#F4F4F7',
  200: '#E4E4E9',
  500: '#8A8492',
  600: '#6B6D76',
  900: '#202224',
};

const success = {
  soft: '#EAF7EF',
  base: '#218358',
  strong: '#16734D',
};

const warning = {
  soft: '#FFF9E1',
  base: '#FABD14',
  strong: '#9B7400',
};

const danger = {
  soft: '#F9EDEF',
  base: '#B5656B',
  strong: '#9E3F48',
};

export const theme = {
  typography: {
    family: "'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    sizes: {
      display: 'clamp(46px, 5.6vw, 76px)',
      hero: 'clamp(42px, 4.6vw, 64px)',
      section: 'clamp(36px, 4.2vw, 56px)',
      subheading: 'clamp(28px, 3vw, 40px)',
      cardTitle: '18px',
      bodyLarge: '17px',
      body: '15px',
      label: '12px',
      productTitle: '24px',
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  colors: {
    brand,
    neutral,
    success,
    warning,
    danger,
    primary: brand[500],
    primaryHover: brand[700],
    primarySoft: brand[100],
    secondary: success.base,
    accent: warning.base,
    background: neutral[50],
    surface: neutral[0],
    text: neutral[900],
    muted: neutral[600],
    ink: '#151E36',
    border: neutral[200],
    focus: brand[500],
    onBrand: neutral[0],
  },
  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    30: '120px',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '18px',
    xl: '28px',
    round: '999px',
  },
  shadows: {
    soft: '0 14px 36px rgba(54, 15, 94, 0.05)',
    raised: '0 18px 52px rgba(60, 38, 92, 0.08)',
    overlay: '0 28px 80px rgba(41, 20, 66, 0.20)',
    focus: '0 0 0 3px rgba(136, 60, 236, 0.28)',
  },
  motion: {
    fast: '160ms',
    normal: '240ms',
    slow: '620ms',
    ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  layout: {
    contentMax: '1320px',
    wideMax: '1384px',
    headerHeight: '74px',
  },
  breakpoints,
};
