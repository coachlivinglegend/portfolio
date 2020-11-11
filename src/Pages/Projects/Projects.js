import React from 'react'
import './Projects.css'
import Project from '../../Component/Project/Project'
import ProjectData from '../../data/projects.json'

const Projects = () => {
    return (
        <div className='project__container'>
            <h1>Selected Projects</h1>
            <div className="project__wrapper">
            {
                ProjectData.slice(0).reverse().map(({key, name, image, tech, github, website, description}) => {
                    return <Project key={key} idx={key} name={name} tech={tech} image={image} github={github} website={website} description={description}/>
                })
            }
            </div>
        </div>
    )
}

export default Projects
