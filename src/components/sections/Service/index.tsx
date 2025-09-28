import React, {useEffect, useRef} from "react";
import styled from 'styled-components';
import {deploymentIcon, designIcon, developmentIcon, maintenanceIcon} from "../../icons/services";
import usePrefersReducedMotion from "../../../hooks/usePrefersReducedMotion";
import {srConfig} from "../../../configs";

const cards = [
    {title: "Design", icon: designIcon, description: "Product design, UI/UX design, Design systems" },
    {title: "Development", icon: developmentIcon, description: "Developing scalable web apps and mobile apps"},
    {title: "Deployment", icon: deploymentIcon, description: "Automated deployment workflow and CI/CD pipelines"},
    {title: "Maintenance", icon: maintenanceIcon, description: "Continuous monitoring, maintenance and support"}
]

const Service  = () => {
    const revealContainer = useRef(null);
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
    return (
        <StyledServicesSection id={"services"} ref={revealContainer}>
            <h2 className="numbered-heading">What I'm Offering</h2>
            <div className="card-wrapper">
                {
                    cards.map((card, index) => {
                        return (
                            <div key={index} className="card" >
                                <div className="tools">
                                  <div className="circle">
                                    <span className="red box"></span>
                                  </div>
                                  <div className="circle">
                                    <span className="yellow box"></span>
                                  </div>
                                  <div className="circle">
                                    <span className="green box"></span>
                                  </div>
                                </div>
                                {<card.icon />}
                                <h3>{card.title}</h3>
                                <p className={"service-desc"}>{card.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </StyledServicesSection>
    );
}
const StyledServicesSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .card{
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    display: flex;
    flex-direction: column;
    background-color: var(--light-navy);
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 18rem;
    gap: 1rem;
    place-items: center;
    margin: 16px;
    border-radius: 16px;
    overflow: hidden;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    transition: var(--transition);
    .service-desc{
      font-size: 1.1rem;
      margin: 0 24px;
      text-align: center;
    }
    .icon {
      ${({ theme }) => theme.mixins.flexCenter};
      width: 3rem;
      height: 3rem;
      color: var(--green);
      transition: var(--transition);
      user-select: none;
    }
    .tools {
      display: flex;
      align-items: center;
      padding: 9px;
      position: absolute;
      top: 0;
      left: 8px;
      align-self: flex-start;
      justify-self: flex-start;
     }
     
     .circle {
      padding: 0 4px;
     }
     
     .box {
      display: inline-block;
      align-items: center;
      width: 10px;
      height: 10px;
      padding: 1px;
      border-radius: 50%;
     }
     
     .red {
      background-color: #ff605c;
     }
     
     .yellow {
      background-color: #ffbd44;
     }
     
     .green {
      background-color: #00ca4e;
     }
  }
  
  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  }
  
  @media only screen and (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;
export default Service;
