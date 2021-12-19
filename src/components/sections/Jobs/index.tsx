import {useEffect, useRef, useState} from "react";
import usePrefersReducedMotion from "../../../hooks/usePrefersReducedMotion";
import {srConfig} from "../../../configs";
import { CSSTransition } from 'react-transition-group';
import {
    StyledHighlight,
    StyledJobsSection,
    StyledTabButton,
    StyledTabList,
    StyledTabPanel,
    StyledTabPanels, StyledTechTag
} from "./styles";
import {KEY_CODES} from "../../Menu";
import experiences from "./data";

const Jobs = () => {
    const revealContainer = useRef<HTMLElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(0);
    const tabs = useRef<Array<HTMLButtonElement>>([]);
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

    const focusTab = () => {
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
            return;
        }
        // If we're at the end, go to the start
        if (tabFocus >= tabs.current.length) {
            setTabFocus(0);
        }
        // If we're at the start, move to the end
        if (tabFocus < 0) {
            setTabFocus(tabs.current.length - 1);
        }
    };

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus]);

    // Focus on tabs when using up & down arrow keys
    const onKeyDown = (e: any) => {
        switch (e.key) {
            case KEY_CODES.ARROW_UP: {
                e.preventDefault();
                setTabFocus(tabFocus - 1);
                break;
            }

            case KEY_CODES.ARROW_DOWN: {
                e.preventDefault();
                setTabFocus(tabFocus + 1);
                break;
            }

            default: {
                break;
            }
        }
    };
    return (
        <StyledJobsSection id={"jobs"} ref={revealContainer}>
            <h2 className="numbered-heading">Where I’ve Worked</h2>
            <div className="inner">
                <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
                    {experiences &&
                    experiences.map((experience , i) => {
                        return (
                            <StyledTabButton
                                key={i}
                                isActive={activeTabId === i}
                                onClick={() => setActiveTabId(i)}
                                ref={el => (tabs.current[i] = el as HTMLButtonElement)}
                                id={`tab-${i}`}
                                role="tab"
                                aria-selected={activeTabId === i ? true : false}
                                aria-controls={`panel-${i}`}>
                                <span>{experience.company}</span>
                            </StyledTabButton>
                        );
                    })}
                    <StyledHighlight activeTabId={activeTabId} />
                </StyledTabList>

                <StyledTabPanels>
                    {experiences &&
                    experiences.map((experience, i) => {
                        const { title, company, range } = experience;

                        return (
                            <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                                <StyledTabPanel
                                    id={`panel-${i}`}
                                    role="tabpanel"
                                    aria-labelledby={`tab-${i}`}
                                    aria-hidden={activeTabId !== i}
                                    hidden={activeTabId !== i}>
                                    <h3>
                                        <span>{title}</span>
                                        <span className="company">
                        &nbsp;@&nbsp;
                                            <a href={"#"} className="inline-link">
                          {company}
                        </a>
                      </span>
                                    </h3>
                                    <div>
                                        {
                                            experience.skills.map((skill, i) => <StyledTechTag key={`${company}-skill-${skill}-${i}`}>{skill}</StyledTechTag>)
                                        }
                                    </div>

                                    <p className="range">{range}</p>

                                    <ul>
                                        {
                                            experience.things.map((thing, i) => <li key={`${company}-deeds-${i}`}>{thing}</li>)
                                        }
                                    </ul>
                                </StyledTabPanel>
                            </CSSTransition>
                        );
                    })}
                </StyledTabPanels>
            </div>
        </StyledJobsSection>
    )
}

export default Jobs;
