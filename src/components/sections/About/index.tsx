import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import Image from 'next/image';
import {srConfig} from "../../../configs";
// import {srConfig} from "../../../configs";
// import sr from "../../../utils/sr";


const myLoader = (props: any) => {
    console.log(props);
    return `https://avatars.githubusercontent.com/u/${props.src}?w=${props.width}`
}
const StyledAboutSection = styled.section`

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      height: auto!important;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const revealContainer = useRef<HTMLElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }
        async function animate() {
            if (revealContainer.current) {
                const sr = (await import("scrollreveal")).default
                sr().reveal(revealContainer.current, srConfig())
            }
        }
        animate()
    }, []);

    const skills = [
        'JavaScript/TypeScript',
        'C#/.NET Framework', 
        'React/Angular',
        'Node.js/Express.js',
        'Spring Boot/Java',
        'Python/Django',
        'PostgreSQL/MongoDB',
        'Neo4j/Redis',
        'AWS/Azure/GKE',
        'Docker/Kubernetes',
        'GraphQL APIs',
        'Microservices',
        'AI/ML Integration',
        'Event-Driven Systems'
    ];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! I'm Ezedin, an innovative Software Engineer with 9+ years of experience 
                            transforming business challenges into technological solutions. Currently architecting 
                            large-scale automotive systems at Volvo Cars, specializing in AI-powered solutions, 
                            full-stack development, and cloud architecture.
                        </p>

                        <p>
                            I've had the privilege of working across multiple industries and countries, from 
                            automotive systems in Sweden to fintech in the US. My key strengths include strategic 
                            problem-solving, technology versatility across multiple stacks, microservices & cloud 
                            infrastructure expertise, and AI & machine learning integration.
                        </p>

                        <p>Here are the core technologies I work with:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <Image
                            loader={myLoader}
                            className="img"
                            src="19648503?v=4"
                            alt="Ezedin Fedlu"
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};


export default About;
