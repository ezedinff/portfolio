import { Children } from "react";
import styled from "styled-components";
import Social from "../Social";
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const layout: React.FC = () => {
  return (
    <div id="root">
    <a className="skip-to-content" href="#content">
      Skip to Content
    </a>
    <StyledContent>
        <Social isHome={true}/>
        <div id="content">
            {Children}
        </div>
    </StyledContent>
  </div>
  );
};

export default layout;
