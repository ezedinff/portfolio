import React from "react";
import styled from "styled-components";
import Email from "../Email";
import Social from "../Social";
import Header from "../Header";
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const layout: React.FC = ({children}) => {
  return (
    <div id="root">
    <a className="skip-to-content" href="#content">
      Skip to Content
    </a>
    <StyledContent>
        <Header isHome={true}/>
        <Social isHome={true}/>
        <Email isHome={true} />
        <div id="content">
          {children}
        </div>
    </StyledContent>
  </div>
  );
};

export default layout;
