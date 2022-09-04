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
import { useEffect } from 'react';
// const StyledContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;
const StyledMainContainer = styled.main`
  counter-reset: section;
`;
const Home = () => {
  useEffect(() => {
    fetch("api/keys", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

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
            <Jobs />
            <Projects />
        </StyledMainContainer>
      </Layout>
    </>
  );
};
export default Home;
