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
import { getExperience, Experience } from '../src/services/get-data';
// const StyledContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;
const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export async function getStaticProps() {
  return {
    props: {
      experiences: await getExperience()
    },
  };
}
const Home: React.FC<{experiences: Experience[]}> = ({ experiences }) => {
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
