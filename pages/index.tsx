import Hero from "../src/components/sections/Hero";
import styled from "styled-components";
import React from "react";
import Social from "../src/components/Social";
import GlobalStyle from "../theme/GlobalStyles";
import theme from "../theme";
import SearchEngineOptimization from "../src/components/SearchEngineOptimization";
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Home = () => {
  return (
    <>
      <SearchEngineOptimization
        title={"Ezedin Fedlu - Software Engineer"}
        siteUrl={"https://ezedin.fedlu.com"}
        image={"https://avatars.githubusercontent.com/u/19648503"}
        description="I'm software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
      />
      <div id="root">
        <GlobalStyle bp={theme.bp} mixins={theme.mixins} />
        <StyledContent>
          <Social isHome={true} />
          <div id="content">
            <Hero />
          </div>
        </StyledContent>
      </div>
    </>
  );
};
export default Home;
