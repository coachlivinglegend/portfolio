import React from 'react'
import './Project.css'
const Project = ({name, image, tech, github, website, description}) => {
    const handleOpen = () => {
        document.querySelector('.project__showcase').style.width = "500px";
    }

    const handleClose = () => {
        document.querySelector('.project__showcase').style.width = "0";
    }


    return (
        <div className='project'>
            <div className="project__demo">
                <img src={image}></img>
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
                    <a href={github}>{github}</a>
                </div>
            </div>
        </div>

    )
}

export default Project