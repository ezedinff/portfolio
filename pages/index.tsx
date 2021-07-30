import Hero from "../src/components/sections/Hero";
import styled from "styled-components";
import React from "react";
import Social from "../src/components/Social";
import GlobalStyle from "../theme/GlobalStyles";
import theme from "../theme";
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Home = () => {
  return (
    <div id="root">
      <GlobalStyle bp={theme.bp} mixins={theme.mixins} />
      <StyledContent>
        <Social isHome={true} />
        <div id="content">
          <Hero />
        </div>
      </StyledContent>
    </div>
  );
};
export default Home;
