import React, {FC, useEffect, useState} from "react";
import anime from 'animejs';
import styled from 'styled-components';
import {IconLogo} from "../icons";

interface Props {
    finishLoading: () => void;
}
const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 200px;
    transition: var(--transition);
    // @ts-ignore
    opacity: ${(props: {isMounted: boolean}) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;
const Loader: FC<Props> = ({finishLoading}) => {
    const [isMounted, setIsMounted] = useState(false);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
            .add({
                targets: '#logo path',
                delay: 300,
                duration: 1500,
                easing: 'easeInOutQuart',
                strokeDashoffset: [anime.setDashoffset, 0],
            })
            .add({
                targets: '#logo #B',
                duration: 700,
                easing: 'easeInOutQuart',
                opacity: 1,
            })
            .add({
                targets: '#logo',
                delay: 500,
                duration: 300,
                easing: 'easeInOutQuart',
                opacity: 0,
                scale: 0.1,
            })
            .add({
                targets: '.loader',
                duration: 200,
                easing: 'easeInOutQuart',
                opacity: 0,
                zIndex: -1,
            });
    };
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledLoader className="loader" isMounted={isMounted}>
            <div className="logo-wrapper">
                <IconLogo />
            </div>
        </StyledLoader>
    );
}
export default Loader;
