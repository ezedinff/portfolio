import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import {email, navDelay, loaderDelay, srConfig} from '../../../configs';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
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
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
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
  const three = <h3 className="big-heading">I Craft Digital Dreams for the Web and Mobile.</h3>;
  const four = (
    <p>
      I'm Senior Software Engineer with a passion for creating extraordinary digital journeys. Currently, I'm proudly contributing my skills at{' '}
      <a href="https://www.pushitreplays.com/" target="_blank" rel="noreferrer">
        Pushit Replays
      </a>{' '}where I lead in crafting accessible, human-centered digital innovations.
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
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
