import React from 'react'
import './Home.css'
const Home = () => {
    
    return (
        <div className="home__wrapper">
            <div className="home__intro">
                <figure>
                    <img src="https://res.cloudinary.com/favourcodes/image/upload/v1598125526/profile-min.png" alt='Home'/>
                </figure>
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


                <p>When I'm not peeling my hair out battling bugs on VSCode, I'm spending my time preparing 
                high school students for local and international Math competitions. 
                You can find out more about that here.</p>                
            </div>
        </div>
    )
}

export default Home