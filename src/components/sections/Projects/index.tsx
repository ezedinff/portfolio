import Link from "next/link";
import { useRef, FC, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { srConfig } from "../../../configs";
import { usePrefersReducedMotion } from "../../../hooks";
import { Icon } from "../../icons";
import { Project } from "./data";
import { StyledProject, StyledProjectsSection } from "./styles";
import projectsToShow from './data';
const ProjectInner: FC<{project: Project}> = ({project}) => {
    const { github, demo, title, tech, description} = project;
    return (
        <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="GitHub" />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={demo} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description">
              {description}
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
} 
const Projects = () => {
    const revealTitle = useRef(null);
    const revealArchiveLink = useRef(null);
    const revealProjects = useRef<Array<HTMLLIElement | null>>([]);
    const GRID_LIMIT = 6;

    const prefersReducedMotion = usePrefersReducedMotion();
    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }
        async function animate() {
            
            if (revealTitle.current) {
                const sr = (await import("scrollreveal")).default;
                sr().reveal(revealTitle.current, srConfig());
            }
            if (revealArchiveLink.current) {
                const sr = (await import("scrollreveal")).default;
                sr().reveal(revealArchiveLink.current, srConfig());
            }
            if (revealProjects.current) {
                const sr = (await import("scrollreveal")).default;
                revealProjects.current.forEach((ref, i) => ref && sr().reveal(ref, srConfig(i * 100)));

            }
        }
       animate()
    }, []);
    return (<StyledProjectsSection id={"projects"}>
    <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

    <Link  href="/archive">
        <a className="inline-link archive-link" ref={revealArchiveLink}>
            view the archive
        </a>
    </Link>

    
    <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <StyledProject key={i}>
                    <ProjectInner project={project} />
                </StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(( project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={(el: HTMLLIElement) => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <ProjectInner project={project} />
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
{/* 
      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button> */}
    </StyledProjectsSection>);
}

export default Projects;