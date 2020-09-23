import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/NavBar';
import About from './Components/Main/About/About';
import Contact from './Components/Main/Contact/Contact';
import ProjectPage from './Components/Main/Projects/ProjectPage';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      Claire's Portfolio Site
      <Header />
      <Navbar />
        <Switch>
          <Route exact path="/" component={ProjectPage} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/ProjectPage" component={ProjectPage} />
          <Route component={PageNotFound} />
        </Switch>
    </div>
  );
}

export default App;
