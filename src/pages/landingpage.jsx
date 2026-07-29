import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import Hero from '../components/hero';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Works from '../components/works';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Header from '../components/header';

import * as S from './styles';

function Landingpage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.LandingPage>
      <S.LandingPageContainer>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Works />
        <Footer />
      </S.LandingPageContainer>

      {showButton && (
        <S.BackToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </S.BackToTopButton>
      )}
    </S.LandingPage>
  );
}

export default Landingpage;
