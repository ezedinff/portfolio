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
// const StyledContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

const BubblesWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;
  pointer-events: none;
`;

const Bubble = styled.div`
  border-radius: 50%;
  box-shadow: none;
  height: 5px;
  position: absolute;
  width: 5px;

  @keyframes animateBubble {
    0% {
      transform: scale(1);
      opacity: 1;
      margin-top: 20%;
    }
    100% {
      transform: scale(5);
      opacity: 0;
      margin-top: -30%;
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

const BubbleFactory = (color: string, left: string, top: string) => {
  return styled(Bubble)`
    background: ${color};
    animation: animateBubble 12s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
    left: ${left};
    top: ${top};
  `;
};

const generateBubbles = (count: number) => {
  const uniqueColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  const generatedBubbles = [];

  for (let i = 0; i < count; i++) {
    const color = uniqueColors[i % uniqueColors.length];
    const left = Math.random() * 100 + '%';
    const top = Math.random() * 100 + '%';
    generatedBubbles.push({ color, left, top });
  }

  return generatedBubbles;
};

const StyledMainContainer = styled.main`
  counter-reset: section;
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
        <BubblesWrapper>
          {generateBubbles(10).map((bubble, index) => {
            const Bubble = BubbleFactory(bubble.color, bubble.left, bubble.top);
            return <Bubble key={index} />;
          })}
        </BubblesWrapper>
        <StyledMainContainer className="fillHeight">
          <Hero />
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
