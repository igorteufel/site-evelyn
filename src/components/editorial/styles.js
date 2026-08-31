import styled from 'styled-components';

export const Section = styled.section`
  position: relative; isolation: isolate; width: 100vw; margin-left: calc(50% - 50vw); padding: ${({ theme }) => theme.spacing[24]} 24px; overflow: hidden;
  color: ${({ theme }) => theme.colors.onBrand}; background: linear-gradient(135deg, ${({ theme }) => theme.colors.nature[950]}, ${({ theme }) => theme.colors.nature[900]});
  &::before { content: ''; position: absolute; z-index: -1; width: 520px; height: 520px; left: -180px; bottom: -280px; border-radius: ${({ theme }) => theme.radii.round}; background: ${({ theme }) => theme.colors.brand[500]}; opacity: .2; filter: blur(80px); }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: ${({ theme }) => theme.spacing[16]} 16px; }
`;
export const Inner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.wideMax}); margin: 0 auto; display: grid; grid-template-columns: 1.12fr .72fr; align-items: center; gap: ${({ theme }) => theme.spacing[10]};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; }
`;
export const Copy = styled.div`
  position: relative; z-index: 2; padding: ${({ theme }) => theme.spacing[12]}; border: 1px solid rgba(255,255,255,.22); border-radius: ${({ theme }) => theme.radii.xl};
  background: rgba(255,255,255,.1); box-shadow: ${({ theme }) => theme.shadows.overlay}; backdrop-filter: blur(22px) saturate(130%);
  > span { display: block; height: 72px; color: ${({ theme }) => theme.colors.brand[300]}; font-size: 110px; font-weight: 900; line-height: 1; }
  h2 { margin: 0; font-size: ${({ theme }) => theme.typography.sizes.section}; line-height: 1.08; letter-spacing: -.04em; }
  p { margin: ${({ theme }) => theme.spacing[6]} 0 0; color: rgba(255,255,255,.68); font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: ${({ theme }) => theme.spacing[8]}; }
`;
export const Portrait = styled.div`
  position: relative; min-height: 540px; overflow: hidden; border: 1px solid rgba(255,255,255,.28); border-radius: ${({ theme }) => theme.radii.xl}; box-shadow: ${({ theme }) => theme.shadows.overlay};
  &::after { content: ''; position: absolute; inset: 45% 0 0; background: linear-gradient(180deg, transparent, rgba(24,43,32,.5)); pointer-events: none; }
  > img { width: 100%; height: 100%; position: absolute; inset: 0; display: block; object-fit: cover; object-position: center 32%; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { min-height: 460px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { min-height: 400px; }
`;
export const OnlineBadge = styled.div`
  position: absolute; z-index: 2; right: ${({ theme }) => theme.spacing[4]}; bottom: ${({ theme }) => theme.spacing[4]}; left: ${({ theme }) => theme.spacing[4]};
  min-height: 72px; padding: ${({ theme }) => theme.spacing[4]}; display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(255,255,255,.32); border-radius: ${({ theme }) => theme.radii.md}; background: rgba(24,43,32,.58); backdrop-filter: blur(18px) saturate(145%);
  svg { flex: 0 0 auto; color: ${({ theme }) => theme.colors.brand[200]}; font-size: 20px; }
  span, strong { display: block; } span { font-size: ${({ theme }) => theme.typography.sizes.body}; font-weight: 700; } strong { margin-top: ${({ theme }) => theme.spacing[1]}; color: ${({ theme }) => theme.colors.brand[200]}; font-size: ${({ theme }) => theme.typography.sizes.label}; letter-spacing: .04em; }
`;
