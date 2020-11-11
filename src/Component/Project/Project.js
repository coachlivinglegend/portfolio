import React, { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap"
import './Project.css'

const Project = ({ idx, name, image, tech, github, website, description}) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // if (window.innerWidth <= 601) {
        //     gsap.to(".project.class7", {duration: 2, scrollTrigger: {trigger: ".project.class7", start: "top 40%"}, ease:"bounce", opacity: 0, x: -300})
        //     gsap.to(".project.class6", {duration: 2, scrollTrigger: {trigger: ".project.class6", start: "top 40%"}, ease:"bounce", opacity: 0, x: 300})
        //     gsap.to(".project.class5", {duration: 2, scrollTrigger: {trigger: ".project.class5", start: "top 40%"}, ease:"bounce", opacity: 0, x: -300})
        //     gsap.to(".project.class4", {duration: 2, scrollTrigger: {trigger: ".project.class4", start: "top 40%"}, ease:"bounce", opacity: 0, x: 300})
        //     gsap.to(".project.class3", {duration: 2, scrollTrigger: {trigger: ".project.class3", start: "top 40%"}, ease:"bounce", opacity: 0, x: -300})
        //     gsap.to(".project.class2", {duration: 2, scrollTrigger: {trigger: ".project.class2", start: "top 40%"}, ease:"bounce", opacity: 0, x: 300})
        //     gsap.to(".project.class1", {duration: 2, scrollTrigger: {trigger: ".project.class1", start: "top 40%"}, ease:"bounce", opacity: 0, x: -300})
        //     gsap.to(".project.class0", {duration: 2, scrollTrigger: {trigger: ".project.class0", start: "top 40%"}, ease:"bounce", opacity: 0, x: 300})
        //     // gsap.to(".project:nth-child(even)", {duration: 2, scrollTrigger: {trigger: ".project:nth-child(even)", start: "top 90%"}, ease:"bounce", x: -300})            
        //     // gsap.to(".project:nth-child(odd)", {duration: 2, scrollTrigger: {trigger: ".project:nth-child(even)", start: "top 90%"}, ease:"bounce", x: 300})            
        // }
        // if (window.innerWidth <= 875) {
        //     gsap.from(".home__desc", {duration: 2, scrollTrigger: {trigger: ".project:nth-child(even)", start: "top 70%"}, ease:"bounce", opacity: 0, x: 300})            
        // }
    }, [])

    return (
        <div className={`project class${idx}`}>
            <div className="project__demo">
                <img alt='' src={image}></img>
            </div>
            <div className="project__info">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="project__feat">
                    {
                        tech.map(th => {
                            return <div key={Math.random()} className="project__feat__item">{th}</div>
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