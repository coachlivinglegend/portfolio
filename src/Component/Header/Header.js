import React from 'react'
import './Header.css'
import {ReactComponent as Light} from '../../assets/bright.svg'
import {ReactComponent as Dark} from '../../assets/dark.svg'

const Header = () => {
    return (
        <header>
            <nav className='header__wrapper'>
                <div className='header__logo'>
                    MY LOGO
                </div>
                <div className='header__nav'>
                    <ul className='header__nav__ul'>
                        <li><span>About</span></li>
                        <li><span>Projects</span></li>
                        <li><span>Resume</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>
                <div className='header__darkMode'>
                <Light className='header__darkMode__light'/> 
                <Dark className='header__darkMode__dark'/>
                </div>
            </nav>
        </header>
    )
}

export default Header
