import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { loaderDelay } from "../../configs";
import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  display: inline;
  left: ${(props: any) => (props.orientation === "left" ? "40px" : "auto")};
  right: ${(props: any) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${(props: any) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props: any) => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface Props {
  isHome: boolean;
  orientation: "left" | "right";
  children: ReactNode;
}

const Side: React.FC<Props> = (props: Props) => {
  const [isMounted, setIsMounted] = useState(!props.isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!props.isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledSideElement {...props}>
      {prefersReducedMotion ? (
        <>{props.children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames={props.isHome ? "fade" : ""}
              timeout={props.isHome ? loaderDelay : 0}
            >
              {props.children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};
export default Side;
