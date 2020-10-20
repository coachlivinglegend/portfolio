import React from 'react'
import './Project.css'
import Port from "../../assets/portsnip.PNG";
import test from '../../assets/test.png'
const Project = ({name, image, type, link, description}) => {
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
                    <div className="project__feat__item">React</div>
                    <div className="project__feat__item">Firebase</div>
                    <div className="project__feat__item">ContextAPI</div>
                </div>
            </div>  
            <div className="project__links">
                <div>
                    <h3>Website</h3>
                    <a href={link}>{link}</a>
                </div>
                <div>
                    <h3>Github</h3>
                    <a href={link}>{link}</a>
                </div>
            </div>
        </div>

    )
}

export default Project