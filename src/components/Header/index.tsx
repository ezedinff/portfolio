import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { useScrollDirection, usePrefersReducedMotion } from '../../hooks';
import { IconLogo } from '../icons';
import Link from "next/link";
import Menu from "../Menu";
const StyledHeader = styled.header<{scrollDirection: string; scrolledToTop: boolean;}>`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
            !props.scrolledToTop &&
    css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${props =>
    props.scrollDirection === 'down' &&
            !props.scrolledToTop &&
    css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 64px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;
const navLinks = [
    {url: '', name: 'Home'},
    {url: '', name: 'Services'},
    {url: '', name: 'Experience'},
    {url: '', name: 'Work'},
    {url: '', name: 'Blog'}
];

// @ts-ignore
const Header = ({isHome}) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    // @ts-ignore
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const prefersReducedMotion = usePrefersReducedMotion();

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const timeout = isHome ? 200 : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    const Logo = (
        <div className="logo" tabIndex={-1}>
            {isHome ? (
                <a href="/" aria-label="home">
                    <IconLogo />
                </a>
            ) : (
                <Link  aria-label="home" href={"/"}>
                    <IconLogo />
                </Link>
            )}
        </div>
    );

    const ResumeLink = (
        <a className="resume-button" href="https://firebasestorage.googleapis.com/v0/b/ezedin-fedlu.appspot.com/o/ezedin%20cv.pdf?alt=media&token=90a093a6-c911-4489-a64b-3412476e7641" target="_blank" rel="noopener noreferrer">
            Resume
        </a>
    );

    return (
        <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                {prefersReducedMotion ? (
                    <>
                        {Logo}

                        <StyledLinks>
                            <ol>
                                {navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <li key={i}>
                                        <Link href={url}>
                                            <a>{name}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ol>
                            <div>{ResumeLink}</div>
                        </StyledLinks>

                        <Menu />
                    </>
                ) : (
                    <>
                        <TransitionGroup component={null}>
                            {isMounted && (
                                <CSSTransition classNames={fadeClass} timeout={timeout}>
                                    <>{Logo}</>
                                </CSSTransition>
                            )}
                        </TransitionGroup>

                        <StyledLinks>
                            <ol>
                                <TransitionGroup component={null}>
                                    {isMounted &&
                                    navLinks &&
                                    navLinks.map(({ url, name }, i) => (
                                        <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                                            <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                                                <Link href={url}><a>{name}</a></Link>
                                            </li>
                                        </CSSTransition>
                                    ))}
                                </TransitionGroup>
                            </ol>

                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                                        <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                                            {ResumeLink}
                                        </div>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </StyledLinks>

                        <TransitionGroup component={null}>
                            {isMounted && (
                                <CSSTransition classNames={fadeClass} timeout={timeout}>
                                    <Menu />
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </>
                )}
            </StyledNav>
        </StyledHeader>
    );
}
export default Header;
