import styled from 'styled-components';

export const Section = styled.section`
  position: relative; isolation: isolate; width: 100vw; margin-left: calc(50% - 50vw); padding: ${({ theme }) => theme.spacing[30]} 0;
  overflow: hidden; background: linear-gradient(145deg, ${({ theme }) => theme.colors.nature[50]} 0%, ${({ theme }) => theme.colors.brand[50]} 58%, ${({ theme }) => theme.colors.brand[100]} 100%);
  scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding-block: ${({ theme }) => theme.spacing[20]}; }
`;
export const Aura = styled.div`
  position: absolute; z-index: -1; width: 620px; height: 620px; right: -180px; top: 12%; border-radius: ${({ theme }) => theme.radii.round};
  background: radial-gradient(circle, ${({ theme }) => theme.colors.brand[200]}, transparent 68%); opacity: .48; filter: blur(18px);
`;
export const Inner = styled.div`width: min(calc(100% - 48px), ${({ theme }) => theme.layout.wideMax}); margin: 0 auto; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { width: min(calc(100% - 32px), ${({ theme }) => theme.layout.wideMax}); }`;
export const Header = styled.div`
  display: grid; grid-template-columns: 1fr .8fr; align-items: end; gap: ${({ theme }) => theme.spacing[16]};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.spacing[5]}; }
`;
export const Kicker = styled.p`width: fit-content; display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[2]}; margin: 0 0 ${({ theme }) => theme.spacing[4]}; color: ${({ theme }) => theme.colors.primary}; font-size: ${({ theme }) => theme.typography.sizes.label}; font-weight: 900; letter-spacing: .12em; text-decoration: none; text-transform: uppercase;`;
export const Title = styled.h2`max-width: 720px; margin: 0; color: ${({ theme }) => theme.colors.nature[950]}; font-size: ${({ theme }) => theme.typography.sizes.section}; line-height: 1.04; letter-spacing: -.04em;`;
export const Intro = styled.p`max-width: 540px; margin: 0; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; line-height: 1.7;`;
export const Carousel = styled.div`
  margin-top: ${({ theme }) => theme.spacing[16]}; padding: ${({ theme }) => theme.spacing[5]}; overflow: hidden;
  border: 1px solid rgba(255,255,255,.74); border-radius: ${({ theme }) => theme.radii.xl}; background: rgba(255,253,249,.46); box-shadow: ${({ theme }) => theme.shadows.raised}; backdrop-filter: blur(22px) saturate(145%);
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { margin-top: ${({ theme }) => theme.spacing[10]}; padding: ${({ theme }) => theme.spacing[3]}; }
`;
export const Viewport = styled.div`
  position: relative; height: clamp(390px, 47vw, 620px); overflow: hidden; border-radius: ${({ theme }) => theme.radii.lg}; touch-action: pan-y; cursor: grab;
  &:active { cursor: grabbing; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { height: 430px; }
`;
export const Slide = styled.article`
  position: absolute; inset: 0 auto 0 50%; width: min(54%, 560px); transform: ${({ $offset, $active }) => `translateX(calc(-50% + ${$offset * 76}%)) scale(${$active ? 1 : 0.86})`};
  opacity: ${({ $offset }) => (Math.abs($offset) > 1 ? 0 : Math.abs($offset) === 1 ? 0.58 : 1)}; z-index: ${({ $active }) => ($active ? 3 : 1)};
  pointer-events: ${({ $offset }) => (Math.abs($offset) > 1 ? 'none' : 'auto')}; transition: transform 620ms ${({ theme }) => theme.motion.ease}, opacity 420ms ${({ theme }) => theme.motion.ease};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { width: min(68%, 500px); transform: ${({ $offset, $active }) => `translateX(calc(-50% + ${$offset * 88}%)) scale(${$active ? 1 : 0.84})`}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { width: 84%; transform: ${({ $offset, $active }) => `translateX(calc(-50% + ${$offset * 98}%)) scale(${$active ? 1 : 0.82})`}; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;
export const SlideLink = styled.a`
  position: relative; width: 100%; height: 100%; display: block; overflow: hidden; border-radius: ${({ theme }) => theme.radii.lg}; background: ${({ theme }) => theme.colors.nature[900]}; box-shadow: ${({ theme }) => theme.shadows.overlay}; cursor: pointer; text-decoration: none;
  img { width: 100%; height: 100%; display: block; object-fit: cover; }
  &::after { content: ''; position: absolute; inset: 40% 0 0; background: linear-gradient(180deg, transparent, rgba(15,32,23,.42)); pointer-events: none; }
`;
export const GlassCaption = styled.span`
  position: absolute; z-index: 2; left: ${({ theme }) => theme.spacing[4]}; right: ${({ theme }) => theme.spacing[4]}; bottom: ${({ theme }) => theme.spacing[4]};
  min-height: 82px; padding: ${({ theme }) => theme.spacing[4]}; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left;
  border: 1px solid rgba(255,255,255,.38); border-radius: ${({ theme }) => theme.radii.md}; color: ${({ theme }) => theme.colors.onBrand}; background: rgba(24,43,32,.58); backdrop-filter: blur(18px) saturate(145%);
  span { color: ${({ theme }) => theme.colors.brand[200]}; font-size: 9px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }
  strong { margin-top: ${({ theme }) => theme.spacing[1]}; font-size: 16px; }
`;
export const Toolbar = styled.div`
  min-height: 76px; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: ${({ theme }) => theme.spacing[6]}; padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]} 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.spacing[3]}; }
`;
export const ActiveCopy = styled.div`
  display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[5]};
  > span { color: ${({ theme }) => theme.colors.muted}; font-size: 11px; font-weight: 900; letter-spacing: .1em; }
  a { display: inline-flex; align-items: center; gap: ${({ theme }) => theme.spacing[2]}; color: ${({ theme }) => theme.colors.nature[900]}; font-size: 13px; font-weight: 900; text-decoration: none; }
`;
export const Controls = styled.div`
  display: grid; grid-template-columns: 44px auto 44px; align-items: center; gap: ${({ theme }) => theme.spacing[3]};
  > button { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid ${({ theme }) => theme.colors.nature[200]}; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.nature[900]}; background: rgba(255,253,249,.72); cursor: pointer; backdrop-filter: blur(10px); }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { justify-self: stretch; grid-template-columns: 44px 1fr 44px; }
`;
export const Dots = styled.div`
  display: flex; align-items: center; justify-content: center; gap: ${({ theme }) => theme.spacing[1]};
  button { width: 20px; height: 20px; padding: 0; border: 0; border-radius: ${({ theme }) => theme.radii.round}; background: transparent; cursor: pointer; }
  button::after { content: ''; width: 6px; height: 6px; display: block; margin: auto; border-radius: ${({ theme }) => theme.radii.round}; background: ${({ theme }) => theme.colors.nature[200]}; transition: width ${({ theme }) => theme.motion.normal} ${({ theme }) => theme.motion.ease}; }
  button.active::after { width: 18px; background: ${({ theme }) => theme.colors.primary}; }
`;
