import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

import Hero from '../components/hero';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Editorial from '../components/editorial';
import Works from '../components/works';
import Experience from '../components/experience';
import Footer from '../components/footer';
import Header from '../components/header';

import * as S from './styles';

const MotionProgress = motion.create(S.Progress);

function Landingpage() {
  const [showButton, setShowButton] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

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
      {!shouldReduceMotion && (
        <MotionProgress style={{ scaleX: smoothProgress }} />
      )}
      <S.LandingPageContainer>
        <Header />
        <Hero />
        <About />
        <Editorial />
        <Works />
        <Portfolio />
        <Experience />
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
