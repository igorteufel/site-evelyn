import { breakpoints } from './breakpoints';

const brand = {
  50: '#FFF7EF',
  100: '#FDE7D5',
  200: '#F8C8A4',
  300: '#EE9B63',
  500: '#D86932',
  600: '#C45728',
  700: '#A9431F',
  900: '#60301F',
  950: '#30231D',
};

const nature = {
  50: '#F2F6F0',
  100: '#DEE9D9',
  200: '#B9CFAE',
  500: '#527057',
  600: '#426047',
  700: '#344E3A',
  900: '#203729',
  950: '#182B20',
};

const neutral = {
  0: '#FFFDF9',
  50: '#FBF8F2',
  100: '#F3EEE5',
  200: '#E4DACE',
  500: '#8C7F74',
  600: '#695F57',
  900: '#2E2925',
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
    nature,
    neutral,
    success,
    warning,
    danger,
    primary: brand[700],
    primaryHover: brand[700],
    primarySoft: brand[100],
    secondary: nature[700],
    accent: warning.base,
    background: neutral[50],
    surface: neutral[0],
    text: neutral[900],
    muted: neutral[600],
    ink: nature[950],
    border: neutral[200],
    focus: brand[700],
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
    soft: '0 14px 36px rgba(74, 51, 36, 0.06)',
    raised: '0 18px 52px rgba(54, 73, 58, 0.10)',
    overlay: '0 28px 80px rgba(29, 51, 37, 0.22)',
    focus: '0 0 0 3px rgba(169, 67, 31, 0.24)',
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
