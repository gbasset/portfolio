import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import Home from './components/Home/Home';

import { HashRouter as Router, useHistory, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Page404 from './components/Page404';
import ProjectItem from './components/Projects/ProjectItem';
import Footer from './components/Footer/Footer';
import Contacts from './components/contact/Contacts';
import ContextProvider from './Context/Context'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
function App() {

  const history = useHistory();
  ReactGA.initialize('UA-188914903-1');

  return (

    <ContextProvider >
      < Router history={history}
      // forceRefresh={true}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projectItem" component={ProjectItem} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contacts} />
          <Route component={Page404} />
        </Switch>

        <Footer />
      </Router >
    </ContextProvider>

  );
}

export default App;
