import styled from 'styled-components';

export const Section = styled.section`padding: ${({ theme }) => theme.spacing[30]} 0; scroll-margin-top: ${({ theme }) => theme.layout.headerHeight}; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: ${({ theme }) => theme.spacing[20]} 0; }`;
export const Intro = styled.div`
  display: grid; grid-template-columns: minmax(280px, .7fr) 1fr; gap: ${({ theme }) => theme.spacing[16]}; align-items: start;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) { grid-template-columns: minmax(560px, .85fr) 1fr; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.spacing[8]}; }
`;
export const Kicker = styled.p`margin: 0 0 ${({ theme }) => theme.spacing[4]}; color: ${({ theme }) => theme.colors.primary}; font-size: ${({ theme }) => theme.typography.sizes.label}; font-weight: 900; letter-spacing: .12em; text-transform: uppercase;`;
export const Title = styled.h2`
  max-width: 520px; margin: 0; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.section}; line-height: 1.02; letter-spacing: -.04em;
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) { max-width: none; white-space: nowrap; }
`;
export const Text = styled.p`max-width: 700px; margin: 0 0 ${({ theme }) => theme.spacing[5]}; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.bodyLarge}; line-height: 1.7;`;
export const Profile = styled.div`
  display: flex; align-items: center; gap: ${({ theme }) => theme.spacing[4]}; margin-top: ${({ theme }) => theme.spacing[8]};
  img { width: 72px; height: 72px; display: block; object-fit: cover; border: 3px solid ${({ theme }) => theme.colors.brand[100]}; border-radius: ${({ theme }) => theme.radii.round}; }
  strong, span { display: block; } strong { color: ${({ theme }) => theme.colors.nature[900]}; font-size: 15px; } span { margin-top: ${({ theme }) => theme.spacing[1]}; color: ${({ theme }) => theme.colors.primary}; font-size: 12px; font-weight: 700; }
`;
export const ProfessionalDetails = styled.p`
  max-width: 520px; margin: ${({ theme }) => theme.spacing[4]} 0 0; color: ${({ theme }) => theme.colors.muted}; font-size: 12px; line-height: 1.6;
  span { display: block; }
`;
export const Principles = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: ${({ theme }) => theme.spacing[5]}; margin-top: ${({ theme }) => theme.spacing[16]}; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; margin-top: ${({ theme }) => theme.spacing[10]}; }`;
export const Card = styled.article`
  min-height: 260px; padding: ${({ theme }) => theme.spacing[8]}; display: flex; flex-direction: column; justify-content: flex-end; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: ${({ theme }) => theme.radii.lg}; background: ${({ theme }) => theme.colors.surface}; box-shadow: ${({ theme }) => theme.shadows.soft};
  h3 { margin: ${({ theme }) => theme.spacing[10]} 0 ${({ theme }) => theme.spacing[3]}; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.cardTitle}; }
  p { margin: 0; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.body}; line-height: 1.65; }
`;
export const CardTop = styled.div`display: flex; align-items: center; justify-content: space-between; color: ${({ theme }) => theme.colors.primary}; font-size: 22px; span { color: ${({ theme }) => theme.colors.neutral[500]}; font-size: 11px; font-weight: 900; letter-spacing: .12em; }`;
