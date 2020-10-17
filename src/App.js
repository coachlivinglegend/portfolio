import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import { Route, Switch } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';


const App = () => {
  const [coords, setCoords] = useState({x: 0, y:0})
  const [hovered, setHovered] = useState(false);

  const props = useSpring({
    transform: hovered
      ? `translateY(${coords.y - 15 + window.scrollY}px) translateX(${coords.x - 15  + window.scrollX}px) scale(2.5)`
      : `translateY(${coords.y - 15 + window.scrollY}px) translateX(${coords.x - 15 + window.scrollX}px) scale(1)`,
});

window.addEventListener('mousemove', useCallback(({ clientX, clientY, pageX, offsetX }) => {
  setCoords({x: clientX, y: clientY})
}, [setCoords, window.scrollX]))

const onMouseEnter = () => {
  setHovered(true);
};

const onMouseLeave = () => {
  setHovered(false);
};

  return (
    <>
    <div className="app">
      <Header scaleUp={onMouseEnter} scaleDown={onMouseLeave}/>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} scaleUp={onMouseEnter} scaleDown={onMouseLeave}/>}/>
        <Route path='/projects' render={(props) => <Projects {...props} scaleUp={onMouseEnter} scaleDown={onMouseLeave}/>}/>
        <Route path='/contact' render={(props) => <Contact {...props} scaleUp={onMouseEnter} scaleDown={onMouseLeave}/>} />
      </Switch>
      <Footer scaleUp={onMouseEnter} scaleDown={onMouseLeave}/>
    </div>
    <animated.div style={props} className='cursor'></animated.div>
    </>
  );
}

export default App;
