import React, {useState} from 'react';
import {projectsList} from './ProjectsList';
import Project from './Project';
import './ProjectPage.css'

export default function ProjectPage() {

const [projects] = useState(projectsList);

const project = projects.map(project => <Project 
    key={project.id} 
    id={project.id}
    title={project.title}
    url={project.url}
    img={project.img}
    description={project.description}
    client_repo={project.client_repo}
    api_repo={project.api_repo}
    />)

    return (
        <div className="projects-container">
            {project}
        </div>
    )
};