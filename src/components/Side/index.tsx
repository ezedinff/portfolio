import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { loaderDelay } from "../../configs";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
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
}

const Side: React.FC<Props> = ({ children, isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledSideElement>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames={isHome ? "fade" : ""}
              timeout={isHome ? loaderDelay : 0}
            >
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};

export default Side;
