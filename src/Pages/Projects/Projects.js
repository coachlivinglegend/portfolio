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
                ProjectData.map(({key, name, image, type, link, description}) => {
                    return <Project key={key} name={name} type={type} image={image} link={link} description={description}/>
                })
            }
                {/* <Project/>
                <Project/>
                <Project/> */}
            </div>
        </div>
    )
}

export default Projects
