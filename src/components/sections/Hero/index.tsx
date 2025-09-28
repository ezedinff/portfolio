import React, {useState, useEffect, useRef} from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import {email, navDelay, loaderDelay, srConfig} from '../../../configs';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';

const StyledHeroSection = styled.section`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(32px,8vw,48px);;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsClient(true);
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(revealContainer.current, srConfig())
      }
    }
    animate()
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Ezedin Fedlu.</h2>;
  const three = <h3 className="big-heading">I Craft Digital Dreams</h3>;
  const four = (
    <p>
      I'm Software Engineer with a passion for creating extraordinary digital experiences.
      Proudly contributing skills at <a href="https://www.volvocars.com" target="_blank" rel="noreferrer">
      Volvo Cars
      </a>,{' '} driving our mission of safe, sustainable, and convenient mobility solutions. 
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection id={"home"} ref={revealContainer}>
      {!isClient ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <>
          {isMounted &&
            items.map((item, i) => (
              <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            ))}
        </>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
