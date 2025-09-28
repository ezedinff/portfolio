import Hero from "../src/components/sections/Hero";
import styled from "styled-components";
import React from "react";
import GlobalStyle from "../theme/GlobalStyles";
import theme from "../theme";
import SearchEngineOptimization from "../src/components/SearchEngineOptimization";
import Layout from "../src/components/Layout";
import About from "../src/components/sections/About";
import Service from "../src/components/sections/Service";
import Jobs from "../src/components/sections/Jobs";
import Projects from "../src/components/sections/Projects";
import { getExperience, Experience } from "../src/services/get-data";
import HeroV2 from "../src/components/sections/Hero/designs/HeroV2";

const ParticlesWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;
  pointer-events: none;
`;

const Particle = styled.div<{$isWinter: boolean}>`
  position: absolute;
  ${props => props.$isWinter ? `
    &::before {
      content: '❄';
      font-size: 12px;
      color: #fff;
    }
  ` : `
    border-radius: 50%;
    height: 5px;
    width: 5px;
  `}

  @keyframes ${props => props.$isWinter ? 'snowfall' : 'animateBubble'} {
    0% {
      transform: ${props => props.$isWinter ? 'translateY(-100vh) rotate(0deg)' : 'scale(1)'};
      opacity: 1;
      ${props => props.$isWinter ? '' : 'margin-top: 20%;'}
    }
    100% {
      transform: ${props => props.$isWinter ? 'translateY(100vh) rotate(360deg)' : 'scale(5)'};
      opacity: ${props => props.$isWinter ? '0' : '0'};
      ${props => props.$isWinter ? '' : 'margin-top: -30%;'}
    }
  }

  @keyframes sideWays {
    0% {
      transform: translateX(0);
      margin-left: 0;
    }
    100% {
      transform: translateX(100px);
      margin-left: 25px;
    }
  }
`;

const StyledParticle = styled(Particle)<{$color: string; $left: string; $top: string; $isWinter: boolean}>`
  background: ${props => props.$isWinter ? 'transparent' : props.$color};
  animation: ${props => props.$isWinter ? 'snowfall 8s linear infinite' : 'animateBubble 12s linear infinite, sideWays 2s ease-in-out infinite alternate'};
  left: ${props => props.$left};
  top: ${props => props.$top};
  animation-delay: ${() => Math.random() * 8}s;
`;

const generateParticles = (count: number) => {
  const uniqueColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  const generatedParticles = [];

  // Use deterministic positioning to avoid hydration mismatch
  const positions = [
    { left: '53.73%', top: '42.98%' },
    { left: '44.45%', top: '72.50%' },
    { left: '51.53%', top: '50.50%' },
    { left: '41.69%', top: '40.63%' },
    { left: '68.45%', top: '10.59%' },
    { left: '84.97%', top: '17.23%' },
    { left: '87.28%', top: '47.89%' },
    { left: '64.87%', top: '49.52%' },
    { left: '14.76%', top: '86.22%' },
    { left: '60.79%', top: '80.33%' }
  ];

  for (let i = 0; i < count; i++) {
    const color = uniqueColors[i % uniqueColors.length];
    const position = positions[i % positions.length];
    generatedParticles.push({ color, left: position.left, top: position.top });
  }

  return generatedParticles;
};

const isWinter = () => {
  const month = new Date().getMonth();
  return month === 11 || month === 0 || month === 1; // Dec, Jan, Feb
};



const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const MobileHero = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopHero = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export async function getServerSideProps() {
  const experiences = await getExperience();
  return {
    props: {
      experiences,
    },
  };
}
const Home: React.FC<{ experiences: Experience[] }> = ({ experiences }) => {
  return (
    <>
      <SearchEngineOptimization
        title={"Ezedin Fedlu - Software Engineer"}
        siteUrl={"https://ezedin.fedlu.com"}
        image={"https://avatars.githubusercontent.com/u/19648503"}
        description="I'm software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
      />
      <GlobalStyle bp={theme.bp} mixins={theme.mixins} />

      <Layout>
        <ParticlesWrapper>
          {generateParticles(10).map((particle, index) => (
            <StyledParticle 
              key={index} 
              $color={particle.color} 
              $left={particle.left} 
              $top={particle.top}
              $isWinter={isWinter()}
            />
          ))}
        </ParticlesWrapper>
        <StyledMainContainer className="fillHeight" role="main">
          <MobileHero>
            <Hero />
          </MobileHero>
          <DesktopHero>
            <HeroV2 />
          </DesktopHero>  
          <About />
          <Service />
          <Jobs experiences={experiences} />
          <Projects />
        </StyledMainContainer>
      </Layout>
    </>
  );
};
export default Home;
