import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {

    return (
        <div className="navBar-container">
            <div className="links">
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
};