import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="home__wrapper">
            <div className="home__intro">
                {/* <h1>DANIEL BECKLEY</h1> */}
                <div style={{width: "100%"}}>
                    {/* <img src='https://cdn.filestackcontent.com/mk1RCwKvQZWJBnhzW89A' alt='Daniel Beckley'/> */}
                    <img src='https://staticg.sportskeeda.com/editor/2020/10/b46cf-16020843441142-800.jpg' alt='Daniel Beckley'/>
                </div>
            </div>
            <div className="home__desc">
                <h2>FULL-STACK JAVASCRIPT DEVELOPER</h2>
                <p>I am Daniel Beckley, a fullstack javascript junior developer.
                I have experience working front-end with HTML5, CSS3, React, Firebase, Redux, Redux-Saga, ContextAPI, Apollo, GraphQL. Back-end server side with NodeJS, ExpressJS and database with PostgreSQL and MongoDB.
                I have also worked with GraphCMS as a headless CMS.</p>

                <p>
                    I am currently learning Python and C++ to build software solutions that are not neccesarily web-based.
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