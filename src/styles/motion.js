export const revealViewport = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -8% 0px',
};

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealSoft = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealMask = {
  hidden: { clipPath: 'inset(0 0 100% 0)', y: 34 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    y: 0,
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const motionState = (shouldReduceMotion) => ({
  initial: shouldReduceMotion ? false : 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
});
