import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw; margin-left: calc(50% - 50vw); padding: ${({ theme }) => theme.spacing[30]} 24px; background: ${({ theme }) => theme.colors.nature[50]}; scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: ${({ theme }) => theme.spacing[20]} 16px; }
`;
export const Inner = styled.div`width: min(100%, ${({ theme }) => theme.layout.contentMax}); margin: 0 auto;`;
export const Header = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: ${({ theme }) => theme.spacing[12]}; align-items: end; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.spacing[5]}; }`;
export const Kicker = styled.p`grid-column: 1 / -1; margin: 0; color: ${({ theme }) => theme.colors.primary}; font-size: ${({ theme }) => theme.typography.sizes.label}; font-weight: 900; letter-spacing: .12em; text-transform: uppercase;`;
export const Title = styled.h2`margin: 0; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.section}; line-height: 1.04; letter-spacing: -.04em;`;
export const Subtitle = styled.p`margin: 0; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; line-height: 1.7;`;
export const Content = styled.div`
  display: grid; grid-template-columns: 1.08fr .92fr; align-items: stretch; gap: ${({ theme }) => theme.spacing[10]}; margin-top: ${({ theme }) => theme.spacing[16]};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; margin-top: ${({ theme }) => theme.spacing[10]}; }
`;
export const Visual = styled.figure`
  position: relative; min-height: 520px; margin: 0; overflow: hidden; border-radius: ${({ theme }) => theme.radii.lg}; box-shadow: ${({ theme }) => theme.shadows.raised};
  > img { width: 100%; height: 100%; position: absolute; inset: 0; display: block; object-fit: cover; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { min-height: 440px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { min-height: 320px; }
`;
export const VisualNote = styled.figcaption`
  position: absolute; right: ${({ theme }) => theme.spacing[4]}; bottom: ${({ theme }) => theme.spacing[4]}; left: ${({ theme }) => theme.spacing[4]}; min-height: 72px; padding: ${({ theme }) => theme.spacing[4]}; display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(255,255,255,.42); border-radius: ${({ theme }) => theme.radii.md}; color: ${({ theme }) => theme.colors.onBrand}; background: rgba(24,43,32,.62); backdrop-filter: blur(16px) saturate(135%);
  svg { flex: 0 0 auto; color: ${({ theme }) => theme.colors.brand[200]}; font-size: 20px; }
  span, strong { display: block; } span { font-size: ${({ theme }) => theme.typography.sizes.body}; font-weight: 700; } strong { margin-top: ${({ theme }) => theme.spacing[1]}; color: ${({ theme }) => theme.colors.brand[200]}; font-size: ${({ theme }) => theme.typography.sizes.label}; }
`;
export const Steps = styled.div`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[8]}; display: flex; flex-direction: column; justify-content: center; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; background: ${({ theme }) => theme.colors.surface}; box-shadow: ${({ theme }) => theme.shadows.soft};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]}; }
`;
export const Step = styled.article`
  display: grid; grid-template-columns: 48px 1fr; align-items: start; gap: ${({ theme }) => theme.spacing[4]}; padding: ${({ theme }) => theme.spacing[8]} 0;
  & + & { border-top: 1px solid ${({ theme }) => theme.colors.border}; }
  h3 { margin: 0 0 ${({ theme }) => theme.spacing[2]}; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.cardTitle}; }
  p { margin: 0; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.body}; line-height: 1.65; }
`;
export const Number = styled.span`width: 42px; height: 42px; display: inline-flex; align-items: center; justify-content: center; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.brand[100]}; font-size: ${({ theme }) => theme.typography.sizes.body}; font-weight: 900;`;
