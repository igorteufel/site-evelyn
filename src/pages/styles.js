import styled from 'styled-components';

export const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  width: 100%;
  padding: 0 56px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 16px;
  }
`;

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.layout.contentMax};
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 0;
  padding-top: ${({ theme }) => theme.layout.headerHeight};

`;

export const Progress = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform-origin: left center;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.brand[200]},
    ${({ theme }) => theme.colors.primary}
  );
  pointer-events: none;
`;

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.nature[700]};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.raised};
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: max(20px, env(safe-area-inset-right));
    bottom: max(20px, env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
