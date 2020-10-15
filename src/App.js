import React from 'react';
import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
