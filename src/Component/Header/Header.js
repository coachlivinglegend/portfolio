import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Light} from '../../assets/bright.svg'
import {ReactComponent as Dark} from '../../assets/dark.svg'
import HamburgerMenu from 'react-hamburger-menu'


const Header = ({scaleUp, scaleDown}) => {
    const [mode, setMode] = useState(true)
    useEffect(() => {
        if (!mode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [mode])
    
    const handleOpen = () => {
        document.getElementById("mySidenav").style.width = "100%";
    }

    const handleClose = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <header>
            <nav className='header__wrapper'>
                <Link onMouseEnter={scaleUp} onMouseLeave={scaleDown} className='link' to='/'>
                    <div className='header__logo'>
                        <span>daniel<br/>Beckley</span>
                    </div>
                </Link>
                <div className='header__nav'>
                    <ul className='header__nav__ul'>
                    <Link onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose}  className='link' to='/projects'><li><span>Projects</span></li></Link>
                    <a onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose} className='link' href='https://drive.google.com/file/d/1xiGIuWEE47ck2J7fH8ky8lrRGjSySxRN/view?usp=sharing'><li><span>Resume</span></li></a>
                    <Link onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose} className='link' to='/contact'><li><span>Contact</span></li></Link>
                    </ul>
                </div>
                <div onMouseEnter={scaleUp} onMouseLeave={scaleDown}  className='header__darkMode'>
                {   
                    !mode 
                    ?
                    <Light onClick={() => setMode(mode => !mode)} className='header__darkMode__light'/> 
                    :
                    <Dark onClick={() => setMode(mode => !mode)} className='header__darkMode__dark'/>
                }
                </div>
                <div className="hamburger"><HamburgerMenu onMouseEnter={scaleUp} onMouseLeave={scaleDown}  isOpen={false} menuClicked={handleOpen} className="menu" width={20} height={20} color={mode ? 'black' : 'white'}/> </div>
            </nav>
            <div className="sidenav" id="mySidenav">
                <div style={{display: "flex", justifyContent: "space-between", padding: "0 20px"}}>
                    <div className='header__darkMode mobile'>
                    {   
                        !mode 
                        ?
                        <Light onClick={() => setMode(mode => !mode)} className='header__darkMode__light'/> 
                        :
                        <Dark onClick={() => setMode(mode => !mode)} className='header__darkMode__dark'/>
                    }
                    </div>
                    <HamburgerMenu onMouseEnter={scaleUp} onMouseLeave={scaleDown}  isOpen={true} menuClicked={handleClose} className="closeButton" width={24} height={24} color={mode ? 'black' : 'white'}/>
                </div>
                <div>
                    <ul className="sidebarNav">
                        <Link onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose} className='link' to='/'><li><span>Home</span></li></Link>
                        <Link onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose} className='link' to='/projects'><li><span>Projects</span></li></Link>
                        <a onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose} className='link' href='https://drive.google.com/file/d/1xiGIuWEE47ck2J7fH8ky8lrRGjSySxRN/view?usp=sharing'><li><span>Resume</span></li></a>
                        <Link onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={handleClose} className='link' to='/contact'><li><span>Contact</span></li></Link>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
