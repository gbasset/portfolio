import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import Home from './components/Home/Home';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Page404 from './components/Page404';
import ProjectItem from './components/Projects/ProjectItem';

function App() {

  return (

    <Router
    // forceRefresh={true}
    >
      {/* <div className='App'> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projectItem/:slug" component={ProjectItem} />
        <Route exact path="/about" component={About} />
        <Route component={Page404} />
      </Switch>

      {/* </div> */}
    </Router>

  );
}

export default App;
