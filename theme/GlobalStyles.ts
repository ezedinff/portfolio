import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./TransitionStyles";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${variables};
    ${TransitionStyles};
`;

export default GlobalStyle;
