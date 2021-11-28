import React from "react";
import styled from 'styled-components';
import {deploymentIcon, designIcon, developmentIcon, maintenanceIcon} from "../../icons/services";

const cards = [
    {title: "Design", icon: designIcon, description: "Product design, UI/UX design, Design systems" },
    {title: "Development", icon: developmentIcon, description: "Developing scalable web apps and mobile apps"},
    {title: "Deployment", icon: deploymentIcon, description: "Automated deployment workflow and CI/CD pipelines"},
    {title: "Maintenance", icon: maintenanceIcon, description: "Continuous monitoring, maintenance and support"}
]

const Service  = () => {
    return (
        <StyledServicesSection>
            <h2 className="numbered-heading">What I'm Offering</h2>
            <div className="card-wrapper">
                {
                    cards.map((card) => {
                        return (
                            <div className="card" >
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
    cursor: pointer;
    transform: perspective(1000px) translateZ(0px) rotateX(0deg) rotateY(0deg); transition: all 150ms linear 0s;
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
  }

  @media only screen and (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;
export default Service;
