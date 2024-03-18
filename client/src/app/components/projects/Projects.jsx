import projects from "./projects";
import React from "react";
import "./Projects.css";
import "../components.css";

const Projects = () => {
    return (
        <div id="projects" className="Projects section">
            <h2>Projects</h2>
            <div className="flex flex-row justify-between flex-wrap items-center border">
               {
                      projects.map((project, index) => {
                        return (
                             <Project key={index} project={project} />
                        );
                      })
               }
            </div>
        </div>
    )
}

const Project = ({project}) => {
    return (
        <div className="project-card">
            <a href={project.link}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-icons flex flex-row flex-wrap">
                    {
                        project.icons.map((icon, index) => {
                            return (
                                <img className="icon" key={index} src={icon.src} title={icon.title} alt={icon.title} />
                            )
                        })
                    }
                </div>
            </a>
        </div>
    )
}
export default Projects;