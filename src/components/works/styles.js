import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw; margin-left: calc(50% - 50vw); padding: ${({ theme }) => theme.spacing[30]} 24px;
  background: ${({ theme }) => theme.colors.background}; scroll-margin-top: ${({ theme }) => theme.layout.headerHeight};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: ${({ theme }) => theme.spacing[20]} 16px; }
`;
export const Inner = styled.div`width: min(100%, ${({ theme }) => theme.layout.contentMax}); margin: 0 auto;`;
export const Header = styled.div`max-width: 820px;`;
export const Kicker = styled.p`margin: 0 0 ${({ theme }) => theme.spacing[4]}; color: ${({ theme }) => theme.colors.primary}; font-size: ${({ theme }) => theme.typography.sizes.label}; font-weight: 900; letter-spacing: .12em; text-transform: uppercase;`;
export const Title = styled.h2`margin: 0; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.section}; line-height: 1.04; letter-spacing: -.04em;`;
export const Subtitle = styled.p`margin: ${({ theme }) => theme.spacing[5]} 0 0; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge};`;
export const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: ${({ theme }) => theme.spacing[5]}; margin-top: ${({ theme }) => theme.spacing[16]};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) { grid-template-columns: 1fr; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { margin-top: ${({ theme }) => theme.spacing[10]}; }
`;
export const Card = styled.article`
  overflow: hidden; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; background: ${({ theme }) => theme.colors.surface}; box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: transform ${({ theme }) => theme.motion.normal} ${({ theme }) => theme.motion.ease}, box-shadow ${({ theme }) => theme.motion.normal} ${({ theme }) => theme.motion.ease};
  &:hover { transform: translateY(-4px); box-shadow: ${({ theme }) => theme.shadows.raised}; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;
export const CardImage = styled.img`
  width: 100%; height: 220px; display: block; object-fit: cover;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) { height: 300px; }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { height: 220px; }
`;
export const CardBody = styled.div`padding: 0 ${({ theme }) => theme.spacing[6]};`;
export const Theme = styled.div`
  min-height: 148px; display: grid; grid-template-columns: 44px 1fr; align-items: start; gap: ${({ theme }) => theme.spacing[4]}; padding: ${({ theme }) => theme.spacing[6]} 0;
  & + & { border-top: 1px solid ${({ theme }) => theme.colors.border}; }
  h3 { margin: 0 0 ${({ theme }) => theme.spacing[2]}; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.cardTitle}; }
  p { margin: 0; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.body}; line-height: 1.6; }
`;
export const Icon = styled.span`width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.brand[50]}; font-size: 16px;`;
export const Footnote = styled.p`max-width: 720px; margin: ${({ theme }) => theme.spacing[10]} auto 0; color: ${({ theme }) => theme.colors.brand[900]}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; font-weight: 700; text-align: center;`;
