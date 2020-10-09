import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="bottomFooterSocial">
                <div className="socialIconsContainer"><i className="fab fa-facebook-f fa-2x"></i></div>
                <div className="socialIconsContainer"><i className="fab fa-twitter fa-2x"></i></div>
                <div className="socialIconsContainer"><i className="fab fa-google-plus-g fa-2x"></i></div>
                <div className="socialIconsContainer"><i className="fab fa-linkedin-in fa-2x"></i></div>
                <div className="socialIconsContainer"><i className="fab fa-youtube fa-2x"/></div>
                <div className="socialIconsContainer"><i className="fab fa-instagram fa-2x"></i></div>
            </div>
        </footer>
    )
}

export default Footer