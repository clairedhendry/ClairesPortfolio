import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {

    return (
        <div className="navBar-container">
            <div className="nav-logo-container">
            <div className="nav-logo"></div>
        </div>
        <p className="name">Claire Hendry</p>
            <div className="links">
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
                <a href="https://clairedhendry.com" target="_blank" rel="noopener noreferrer">Art</a>
            </div>
        </div>
    )
};