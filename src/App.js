import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div></div>
        <Main/>
        <Footer />
    </div>
  );
}

export default App;
