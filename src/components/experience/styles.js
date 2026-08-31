import styled from 'styled-components';

export const Section = styled.section`padding: ${({ theme }) => theme.spacing[30]} 0; display: grid; grid-template-columns: .75fr 1fr; gap: ${({ theme }) => theme.spacing[20]}; scroll-margin-top: ${({ theme }) => theme.layout.headerHeight}; @media (max-width: ${({ theme }) => theme.breakpoints.md}) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.spacing[10]}; padding: ${({ theme }) => theme.spacing[20]} 0; }`;
export const Side = styled.div`@media (min-width: ${({ theme }) => theme.breakpoints.md}) { position: sticky; top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.spacing[8]}); align-self: start; }`;
export const Kicker = styled.p`margin: 0 0 ${({ theme }) => theme.spacing[4]}; color: ${({ theme }) => theme.colors.primary}; font-size: ${({ theme }) => theme.typography.sizes.label}; font-weight: 900; letter-spacing: .12em; text-transform: uppercase;`;
export const Title = styled.h2`margin: 0; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.subheading}; line-height: 1.08; letter-spacing: -.04em;`;
export const Contact = styled.a`display: inline-flex; align-items: center; gap: ${({ theme }) => theme.spacing[3]}; margin-top: ${({ theme }) => theme.spacing[8]}; color: ${({ theme }) => theme.colors.primary}; font-size: 14px; font-weight: 900; text-decoration: none;`;
export const List = styled.div`border-top: 1px solid ${({ theme }) => theme.colors.border};`;
export const Question = styled.details`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  summary { min-height: 88px; display: grid; grid-template-columns: 34px 1fr; align-items: center; gap: ${({ theme }) => theme.spacing[4]}; color: ${({ theme }) => theme.colors.brand[950]}; font-size: ${({ theme }) => theme.typography.sizes.cardTitle}; font-weight: 700; cursor: pointer; }
  summary span { color: ${({ theme }) => theme.colors.primary}; font-size: 11px; font-weight: 900; letter-spacing: .1em; }
  p { margin: 0 0 ${({ theme }) => theme.spacing[6]} 50px; color: ${({ theme }) => theme.colors.muted}; font-size: ${({ theme }) => theme.typography.sizes.body}; line-height: 1.7; }
`;
