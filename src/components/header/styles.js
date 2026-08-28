import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  z-index: 1000;
  background: rgba(35, 10, 72, 0.88);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.wideMax};
  margin: 0 auto;
  min-height: 74px;
  padding: 12px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 14px 16px;
    align-items: flex-start;
    gap: 14px;
    flex-wrap: wrap;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 4px 0;
`;

export const BrandLogo = styled.img`
  display: block;
  width: 118px;
  height: auto;
  filter: brightness(0) invert(1);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    padding: 0 4px 2px;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.76);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 8px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.onBrand};
  }
`;

export const HeaderCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.onBrand};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.brand[100]};
  }
`;
