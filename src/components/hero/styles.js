import styled, { keyframes } from 'styled-components';

const drift = keyframes`0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(0, -14px, 0); }`;

export const Section = styled.section`
  position: relative; width: 100vw; min-height: min(880px, calc(100vh - ${({ theme }) => theme.layout.headerHeight})); margin-left: calc(50% - 50vw);
  display: flex; align-items: center; overflow: hidden; color: ${({ theme }) => theme.colors.text}; background: ${({ theme }) => theme.colors.surface}; scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
`;
export const Orb = styled.div`
  position: absolute; width: 560px; height: 560px; right: -150px; top: -250px; border-radius: ${({ theme }) => theme.radii.round};
  background: radial-gradient(circle at 35% 35%, ${({ theme }) => theme.colors.brand[100]}, ${({ theme }) => theme.colors.brand[200]} 55%, transparent 72%); opacity: 0.78;
`;
export const SecondaryOrb = styled.div`
  position: absolute; width: 320px; height: 320px; left: 42%; bottom: -220px; border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.nature[100]}; filter: blur(2px); opacity: .58; animation: ${drift} 7s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
export const DotField = styled.div`
  position: absolute; right: 4%; bottom: 8%; width: 144px; height: 96px; opacity: .26;
  background-image: radial-gradient(${({ theme }) => theme.colors.primary} 1.5px, transparent 1.5px); background-size: 16px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { display: none; }
`;
export const Inner = styled.div`
  position: relative; width: min(calc(100% - 48px), ${({ theme }) => theme.layout.wideMax}); margin: 0 auto; padding: ${({ theme }) => theme.spacing[20]} 0 ${({ theme }) => theme.spacing[24]};
  display: grid; grid-template-columns: minmax(0, 0.94fr) minmax(420px, 0.76fr); align-items: center; gap: ${({ theme }) => theme.spacing[16]};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: 1fr 0.82fr; gap: ${({ theme }) => theme.spacing[8]}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { width: min(calc(100% - 32px), ${({ theme }) => theme.layout.wideMax}); grid-template-columns: 1fr; padding-top: ${({ theme }) => theme.spacing[16]}; }
`;
export const Copy = styled.div`
  position: relative; z-index: 2;
  .eyebrow { margin-bottom: ${({ theme }) => theme.spacing[5]}; color: ${({ theme }) => theme.colors.primary}; font-size: ${({ theme }) => theme.typography.sizes.label}; font-weight: ${({ theme }) => theme.typography.weights.black}; letter-spacing: 0.14em; text-transform: uppercase; }
  h1 { max-width: 760px; margin: 0; color: ${({ theme }) => theme.colors.nature[950]}; font-size: ${({ theme }) => theme.typography.sizes.display}; font-weight: ${({ theme }) => theme.typography.weights.black}; line-height: 0.98; letter-spacing: -0.055em; }
  h1 em { color: ${({ theme }) => theme.colors.primary}; font-style: normal; }
  .lead { max-width: 610px; margin-top: ${({ theme }) => theme.spacing[6]}; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; line-height: 1.65; }
  .actions { display: flex; flex-wrap: wrap; gap: ${({ theme }) => theme.spacing[3]}; margin-top: ${({ theme }) => theme.spacing[8]}; }
  .privacy { display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[2]}; margin-top: ${({ theme }) => theme.spacing[5]}; color: ${({ theme }) => theme.colors.muted}; font-size: 13px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { h1 { font-size: 44px; } .actions { flex-direction: column; } }
`;
const Action = styled.a`
  min-height: 52px; display: inline-flex; align-items: center; justify-content: center; gap: ${({ theme }) => theme.spacing[2]}; padding: 0 ${({ theme }) => theme.spacing[6]}; border-radius: ${({ theme }) => theme.radii.round};
  font-size: 14px; font-weight: ${({ theme }) => theme.typography.weights.black}; text-decoration: none; transition: transform ${({ theme }) => theme.motion.normal} ${({ theme }) => theme.motion.ease}; &:hover { transform: translateY(-3px); }
`;
export const PrimaryAction = styled(Action)`color: ${({ theme }) => theme.colors.onBrand}; background: ${({ theme }) => theme.colors.primary};`;
export const SecondaryAction = styled(Action)`border: 1px solid ${({ theme }) => theme.colors.nature[200]}; color: ${({ theme }) => theme.colors.nature[900]};`;
export const Visual = styled.div`
  position: relative; padding: 0 ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[8]} 0;
  &::before { content: ''; position: absolute; inset: 10% -6% 2% 8%; border-radius: 42% 58% 44% 56%; background: ${({ theme }) => theme.colors.brand[100]}; filter: blur(38px); opacity: .72; }
`;
export const ImageFrame = styled.div`
  aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.xl} ${({ theme }) => theme.radii.xl} 180px ${({ theme }) => theme.radii.xl};
  position: relative; background: ${({ theme }) => theme.colors.nature[50]}; box-shadow: ${({ theme }) => theme.shadows.overlay};
  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 62%, rgba(24, 43, 32, .24)); pointer-events: none; }
  img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { aspect-ratio: 4 / 5; }
`;
export const Note = styled.div`
  position: absolute; right: 0; bottom: 0; width: 164px; min-height: 164px; padding: ${({ theme }) => theme.spacing[5]}; display: flex; flex-direction: column; justify-content: space-between;
  border: 1px solid rgba(255,255,255,.28); border-radius: ${({ theme }) => theme.radii.lg}; color: ${({ theme }) => theme.colors.onBrand}; background: rgba(32, 55, 41, .78); box-shadow: ${({ theme }) => theme.shadows.raised}; backdrop-filter: blur(18px) saturate(135%);
  span { color: ${({ theme }) => theme.colors.brand[200]}; font-size: 9px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; } p { margin: 0; font-size: 19px; font-weight: 900; line-height: 1.12; }
`;
export const GlassMessage = styled.div`
  position: absolute; z-index: 2; left: -40px; bottom: 72px; min-width: 220px; min-height: 84px; padding: ${({ theme }) => theme.spacing[4]}; display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(255,255,255,.62); border-radius: ${({ theme }) => theme.radii.lg}; color: ${({ theme }) => theme.colors.nature[950]}; background: rgba(255,253,249,.7); box-shadow: ${({ theme }) => theme.shadows.raised}; backdrop-filter: blur(20px) saturate(150%); animation: ${drift} 6s ease-in-out infinite;
  > svg { flex: 0 0 auto; width: 38px; height: 38px; padding: 10px; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.brand[100]}; }
  span, strong { display: block; } span { color: ${({ theme }) => theme.colors.muted}; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; } strong { margin-top: ${({ theme }) => theme.spacing[1]}; font-size: 15px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { left: -4px; bottom: 54px; min-width: 190px; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;
export const ScrollLink = styled.a`
  position: absolute; left: max(24px, calc((100vw - ${({ theme }) => theme.layout.wideMax}) / 2)); bottom: ${({ theme }) => theme.spacing[6]}; display: inline-flex; align-items: center; gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.muted}; font-size: 12px; font-weight: ${({ theme }) => theme.typography.weights.bold}; text-decoration: none; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { display: none; }
`;
