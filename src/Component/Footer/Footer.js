import React from 'react'
import './Footer.css'

const Footer = ({scaleUp, scaleDown}) => {
    return (
        <footer>
            <div className="bottomFooterSocial">
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-facebook-f fa-2x"></i></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-twitter fa-2x"></i></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-github fa-2x"/></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-linkedin-in fa-2x"></i></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-instagram fa-2x"></i></div>
            </div>
            <div className="bottomFooterSocial mobile">
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-facebook-f"></i></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-twitter"></i></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-github"/></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-linkedin-in"></i></div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="socialIconsContainer"><i className="fab fa-instagram"></i></div>
            </div>
        </footer>
    )
}

export default Footer