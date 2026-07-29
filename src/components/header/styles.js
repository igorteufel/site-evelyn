import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  margin: 0;
  z-index: 1000;
  padding: 16px 0;
  background: rgba(255, 255, 255, 0.94);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(21, 33, 58, 0.08);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
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
  width: 132px;
  height: auto;
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
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  padding: 10px 8px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeaderCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
