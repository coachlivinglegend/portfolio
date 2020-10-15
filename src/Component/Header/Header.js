import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Light} from '../../assets/bright.svg'
import {ReactComponent as Dark} from '../../assets/dark.svg'
import HamburgerMenu from 'react-hamburger-menu'


const Header = () => {
    const handleOpen = () => {
        document.getElementById("mySidenav").style.width = "60%";
    }

    const handleClose = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <header>
            <nav className='header__wrapper'>
                <Link className='link' to='/'>
                    <div className='header__logo'>
                        <span>daniel<br/>Beckley</span>
                    </div>
                </Link>
                <div className='header__nav'>
                    <ul className='header__nav__ul'>
                    <Link className='link' to='/about'><li><span>About</span></li></Link>
                    <Link className='link' to='/projects'><li><span>Projects</span></li></Link>
                    <a className='link' href='#'><li><span>Resume</span></li></a>
                    <Link className='link' to='/contact'><li><span>Contact</span></li></Link>
                    </ul>
                </div>
                <div className='header__darkMode'>
                <Light className='header__darkMode__light'/> 
                <Dark className='header__darkMode__dark'/>
                </div>
                <div className="hamburger"><HamburgerMenu isOpen={false} menuClicked={handleOpen} className="menu" width={18} height={15}/> </div>
            </nav>
            <div className="sidenav" id="mySidenav">
                <HamburgerMenu isOpen={true} menuClicked={handleClose} className="closeButton" width={18} height={15}/>
                <div>
                    <ul className="sidebarNav">
                        <Link className='link' to='/about'><li><span>About</span></li></Link>
                        <Link className='link' to='/projects'><li><span>Projects</span></li></Link>
                        <a className='link' href='#'><li><span>Resume</span></li></a>
                        <Link className='link' to='/contact'><li><span>Contact</span></li></Link>
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header
