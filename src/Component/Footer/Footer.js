import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import './Footer.css'

const Footer = ({scaleUp, scaleDown}) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth <= 875) {
            gsap.from('.footer', {duration: 2, scrollTrigger: {trigger: '.footer', start: "top 99%"}, ease: "in", opacity: 0, y: -100})
        } else {
            gsap.from('.footer', {duration: 1, delay : 2, ease: "in", opacity: 0, y: 100})
        }
    }, [])
    return (
        <footer className='footer'>
            <div className="bottomFooterSocial">
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://web.facebook.com/coachlivinglegend"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer face"><i className="fab fa-facebook-f fa-2x"></i></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://twitter.com/omnisavage"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer tweet"><i className="fab fa-twitter fa-2x"></i></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://github.com/coachlivinglegend"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer git"><i className="fab fa-github fa-2x"/></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://www.linkedin.com/in/daniel-beckley-bab2991b3/"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer link"><i className="fab fa-linkedin-in fa-2x"></i></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://www.instagram.com/the.livinglegend/"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer insta"><i className="fab fa-instagram fa-2x"></i></div></a>
            </div>
            <div className="bottomFooterSocial mobile">
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://web.facebook.com/coachlivinglegend"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer face"><i className="fab fa-facebook-f"></i></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://twitter.com/omnisavage"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer tweet"><i className="fab fa-twitter"></i></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://github.com/coachlivinglegend"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer git"><i className="fab fa-github"/></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://www.linkedin.com/in/daniel-beckley-bab2991b3/"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer link"><i className="fab fa-linkedin-in"></i></div></a>
                <a target='_blank' rel='noopener noreferrer' className='link' href="https://www.instagram.com/the.livinglegend/"><div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer insta"><i className="fab fa-instagram"></i></div></a>
            </div>
        </footer>
    )
}

export default Footer