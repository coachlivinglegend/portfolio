import React from 'react'
import './Home.css'
const Home = ({scaleUp, scaleDown}) => {
    return (
        <div className="home__wrapper">
            <div className="home__intro">
                <div>
                    <h1 className='quotetext'><q>I will study and prepare myself, and I know that someday my chance will come.</q></h1>
                    <h6>ABRAHAM LINCOLN</h6>
                </div>
            </div>
            <div className="home__desc">
                <h2>FULL-STACK<br/> JAVASCRIPT DEVELOPER</h2>
                <p>I am Daniel Beckley, a fullstack javascript junior developer.
                I have experience working Front-end with HTML5, CSS3, React, Firebase, Redux, Redux-Saga, ContextAPI, Apollo, GraphQL. Back-end server side with NodeJS, ExpressJS and database with PostgreSQL and MongoDB.
                I have also worked with GraphCMS as a headless CMS.</p>

                <p>
                    I am currently learning Python for Machine Learning and Data Science and C++ for Competitive Programming.
                </p>

                <br/>


                <p>When I'm not pulling my hair out battling bugs on VSCode, I'm spending my time preparing 
                high school students for local and international Math competitions. 
                You can find out more about that <a target='_blank' className='link' rel='noopener noreferrer' href='https://welkin-intl-school.herokuapp.com/awards'><span onMouseEnter={scaleUp} onMouseLeave={scaleDown} className='here'>here.</span></a></p>                
            </div>
        </div>
    )
}

export default Home