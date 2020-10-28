import React from 'react'
import './Project.css'
const Project = ({name, image, tech, github, website, description}) => {
    return (
        <div className='project'>
            <div className="project__demo">
                <img alt='' src={image}></img>
            </div>
            <div className="project__info">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="project__feat">
                    {
                        tech.map(th => {
                            return <div className="project__feat__item">{th}</div>
                        })
                    }
                </div>
            </div>  
            <div className="project__links">
                <div>
                    <h3>Website</h3>
                    <a href={website}>{website}</a>
                </div>
                <div>
                    <h3>Github</h3>
                    <a href={github || '#'}>{github || 'Repo is private.'}</a>
                </div>
            </div>
        </div>

    )
}

export default Project