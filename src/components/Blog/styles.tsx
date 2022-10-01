import styled from 'styled-components';
import { StyledProjectsSection } from '../sections/Projects/styles';

export const StyledMainContainer = styled.main`
    counter-reset: section;
`;

export const StyledBlogContainer = StyledProjectsSection;

export const StyledBlogCard = styled.li`
position: relative;
cursor: default;
transition: var(--transition);

@media (prefers-reduced-motion: no-preference) {
  &:hover,
  &:focus-within {
    .project-inner {
      transform: translateY(-7px);
    }
  }
}

a {
  position: relative;
  z-index: 1;
}

.project-inner {
  ${({ theme }) => theme.mixins.boxShadow};
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);
}

.project-top {
  ${({ theme }) => theme.mixins.flexBetween};
  margin-bottom: 35px;

  .folder {
    color: var(--green);
    svg {
      width: 40px;
      height: 40px;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    margin-right: -10px;
    color: var(--light-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 5px 7px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.project-title {
  margin: 0 0 10px;
  color: var(--lightest-slate);
  font-size: var(--fz-xxl);

  a {
    position: static;

    &:before {
      content: '';
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
}

.project-description {
  color: var(--light-slate);
  font-size: 17px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
}

.project-tech-list {
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.75;

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
}
`;

// blog card styled component, title, cover, link, description
export const StyledBlogCardInner = () => {
    return (
        <StyledBlogCard>
            <a href={"link"} target="_blank" rel="noopener noreferrer">
                <div className="project-inner">
                    <header>
                        <div className="project-top">
                            <div className="folder">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M17.5 4H2.5C1.67 4 1 4.67 1 5.5V18.5C1 19.33 1.67 20 2.5 20H17.5C18.33 20 19 19.33 19 18.5V5.5C19 4.67 18.33 4 17.5 4ZM17.5 18.5H2.5V5.5H17.5V18.5Z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="project-title">{"title"}</h3>
                        <p className="project-description">{"description"}</p>
                    </header>
                </div>
            </a>
        </StyledBlogCard>
    );
}