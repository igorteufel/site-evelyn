import styled from 'styled-components';

export const Header = styled.header`
  position: fixed; inset: 0 0 auto; z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(251, 248, 242, 0.92); backdrop-filter: blur(18px);
`;
export const Inner = styled.div`
  width: min(calc(100% - 48px), ${({ theme }) => theme.layout.wideMax}); min-height: ${({ theme }) => theme.layout.headerHeight};
  margin: 0 auto; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: ${({ theme }) => theme.spacing[8]};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) { width: min(calc(100% - 32px), ${({ theme }) => theme.layout.wideMax}); gap: ${({ theme }) => theme.spacing[4]}; }
`;
export const Brand = styled.a`
  display: inline-flex; align-items: baseline; gap: ${({ theme }) => theme.spacing[2]}; color: ${({ theme }) => theme.colors.nature[900]}; text-decoration: none;
  strong { font-size: 22px; font-weight: ${({ theme }) => theme.typography.weights.black}; letter-spacing: -0.055em; }
  span { color: ${({ theme }) => theme.colors.primary}; font-size: 9px; }
`;
export const Nav = styled.nav`
  display: flex; justify-content: center; gap: ${({ theme }) => theme.spacing[6]};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute; top: calc(100% + 1px); left: 16px; right: 16px; display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column; gap: 0; padding: ${({ theme }) => theme.spacing[3]}; border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md}; background: ${({ theme }) => theme.colors.surface}; box-shadow: ${({ theme }) => theme.shadows.overlay};
  }
`;
export const NavLink = styled.a`
  min-height: 44px; display: inline-flex; align-items: center; color: ${({ theme }) => theme.colors.muted}; font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.weights.bold}; text-decoration: none; transition: color ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease};
  &:hover { color: ${({ theme }) => theme.colors.primary}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { padding: 0 ${({ theme }) => theme.spacing[3]}; color: ${({ theme }) => theme.colors.text}; border-radius: ${({ theme }) => theme.radii.sm}; &:hover { color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.brand[50]}; } }
`;
export const Cta = styled.a`
  min-height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: ${({ theme }) => theme.spacing[2]}; padding: 0 ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.onBrand}; background: ${({ theme }) => theme.colors.primary};
  font-size: 13px; font-weight: ${({ theme }) => theme.typography.weights.black}; text-decoration: none; transition: transform ${({ theme }) => theme.motion.fast} ${({ theme }) => theme.motion.ease};
  &:hover { transform: translateY(-2px); }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { padding-inline: ${({ theme }) => theme.spacing[4]}; font-size: 0; svg { font-size: 17px; } }
`;
export const MenuButton = styled.button`
  display: none; width: 44px; height: 44px; border: 0; border-radius: ${({ theme }) => theme.radii.round}; color: ${({ theme }) => theme.colors.nature[900]}; background: ${({ theme }) => theme.colors.nature[50]}; cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) { display: inline-flex; align-items: center; justify-content: center; justify-self: end; }
`;
