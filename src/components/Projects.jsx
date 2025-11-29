import { useEffect, useRef, useState } from "react";
import './Projects.css'
import webicon from '../assets/web.svg'
import github from '../assets/github.svg'

function ProjectTile({ projectName, projectDesc, projectGithubLink, projectDemoLink, isDemoAvailable }) {
    const myRef = useRef(null);

    const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            setIsScrolledIntoView(entry.isIntersecting);

        }, { threshold: 0.1 });

        const currentRef = myRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };

    }, []);

    return (
        <article className={`projectTile ${isScrolledIntoView ? "pop-up-visible-project" : "pop-up-hidden-project"}`} ref={myRef}>
            <h1>{projectName}</h1>
            <div className="projectTileLine"></div>
            <p className="projectTileDesc">{projectDesc}</p>
            <div className="projectButtons">
                <a href={projectGithubLink} target="blank">
                    <div className="projectTileButton">
                        <img src={github} alt="Go to the code repo" />
                        <p>Github</p>
                    </div>
                </a>
                <a href={projectDemoLink} className={isDemoAvailable ? "enabledButton" : "disabledButton"} target="blank">
                    <div className="projectTileButton">
                        <img src={webicon} alt="Visit the web" />
                        <p>Demo</p>
                    </div>
                </a>
            </div>
        </article>
    )
};

function MoreProjectsText({ githubUrl }) {
    return (
        <div className="moreProjectsTextDiv">
            <p>For more projects checkout my <a href={githubUrl} className="moreProjectsTextUrl">github</a>.</p>
        </div>
    )
}

function Projects() {
    return (
        <>
            <div id="allProjects">
                <ProjectTile
                    projectName={"Predictive Maintenance of PV Panels using GRU and IoT"}
                    projectDesc={"Engineered a predictive PV maintenance system using Deep Learning and IoT for MCA final year thesis."}
                    projectGithubLink={"https://github.com/wraththevengeful/finaldraft-ss.git"}
                    projectDemoLink={"#"}
                    isDemoAvailable={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"ResuMe"}
                    projectDesc={"Built a responsive resume generator using React and Vite. Implemented complex state management to handle nested objects for education/experience arrays, utilizing controlled components for immediate UI updates."}
                    projectGithubLink={"https://wraththevengeful.github.io/CV-Application/"}
                    projectDemoLink={"https://wraththevengeful.github.io/CV-Application/"}
                    isDemoAvailable={true}
                ></ProjectTile>
                <ProjectTile
                    projectName={"Etch a Sketch"}
                    projectDesc={`An interactive browser-based sketchpad built with vanilla JavaScript. Utilizes DOM manipulation for dynamic grid generation and efficient event listeners to implement "hover-to-draw" functionality with adjustable resolution.`}
                    projectGithubLink={"https://github.com/wraththevengeful/etch-a-sketch"}
                    projectDemoLink={"https://wraththevengeful.github.io/etch-a-sketch/"}
                    isDemoAvailable={true}
                ></ProjectTile>
                <ProjectTile
                    projectName={"My personal Scripts"}
                    projectDesc={"Scripts I write to wield the internet to my liking when things don't work as I expected like download WhatsApp Stickers and putting them to Signal Messengers."}
                    projectGithubLink={"https://github.com/wraththevengeful/scripts"}
                    projectDemoLink={"#"}
                    isDemoAvailable={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"Calculator"}
                    projectDesc={"The very first UI I ever developed. It ain't much but it's honest work and nostalgia. Learnt first ever JS and CSS and HTML with this. Developed multiple branches to also learn the intricacies of Git and Github Pages."}
                    projectGithubLink={"https://github.com/wraththevengeful/calculator"}
                    projectDemoLink={"https://wraththevengeful.github.io/calculator/"}
                    isDemoAvailable={true}
                ></ProjectTile>
                <ProjectTile
                    projectName={"Developer Portfolio"}
                    projectDesc={"A responsive, high-performance personal portfolio website built with React and Vite. Designed to showcase projects, skills, and educational background with smooth scroll animations and an interactive UI."}
                    projectGithubLink={"https://github.com/wraththevengeful/portfolio"}
                    projectDemoLink={"https://wraththevengeful.github.io/portfolio/"}
                    isDemoAvailable={true}
                ></ProjectTile>
            </div>
            <MoreProjectsText githubUrl={"https://github.com/wraththevengeful/"}></MoreProjectsText>
        </>
    )
}

export default Projects