import React, { useState, useEffect } from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { loaderDelay } from "../../configs";
import { ReactNode } from "react";

const StyledSideElement = styled.div<{$orientation: "left" | "right"}>`
  width: 40px;
  position: fixed;
  bottom: 0;
  display: inline;
  left: ${(props) => (props.$orientation === "left" ? "40px" : "auto")};
  right: ${(props) => (props.$orientation === "left" ? "auto" : "40px")};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${(props) => (props.$orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.$orientation === "left" ? "auto" : "20px")};
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
  const [isMounted, setIsMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsClient(true);
    if (!props.isHome || prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);

  if (!isClient || (!isMounted && props.isHome && !prefersReducedMotion)) {
    return null;
  }

  return (
    <StyledSideElement $orientation={props.orientation}>
      {isMounted && props.children}
    </StyledSideElement>
  );
};
export default Side;
