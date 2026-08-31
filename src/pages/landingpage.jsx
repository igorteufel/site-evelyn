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
import Instagram from '../components/instagram';

import * as S from './styles';

const MotionProgress = motion.create(S.Progress);

function Landingpage() {
  const [showButton, setShowButton] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
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

  useEffect(() => {
    const contact = document.getElementById('contato');
    if (!contact || typeof IntersectionObserver !== 'function') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
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
        <Instagram />
        <Editorial />
        <Works />
        <Portfolio />
        <Experience />
        <Footer />
      </S.LandingPageContainer>

      {showButton && !isContactVisible && (
        <S.BackToTopButton
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </S.BackToTopButton>
      )}
    </S.LandingPage>
  );
}

export default Landingpage;
