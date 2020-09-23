import React from 'react';
import {Route, Switch} from 'react-router-dom'
import About from './About/About';
import Contact from './Contact/Contact';
import ProjectPage from './Projects/ProjectPage';
import PageNotFound from './PageNotFound';
import './Main.css'


export default function MainPage() {

    return(
        <div className="main-container">
        <Switch>
          <Route exact path="/" component={ProjectPage} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={ProjectPage} />
          <Route component={PageNotFound} />
        </Switch>
        </div>
    )
}