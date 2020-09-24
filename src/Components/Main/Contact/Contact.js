import React from 'react';
import './Contact.css'

export default function Contact() {

    return (
        <div className="contact-container">
            <p>Find me on</p>
            <a className="contact-links" href="https://github.com/clairedhendry" target="_blank" rel="noopener noreferrer"><img src={require("../../../Images/github-icon.svg")} alt="GitHub logo"/></a>
            <a className="contact-links" href="https://www.linkedin.com/in/claire-hendry-18105660/" target="_blank" rel="noopener noreferrer"><img src={require("../../../Images/linkedin.png")} alt="LinkedIn logo"/></a>
        </div>
    )
};