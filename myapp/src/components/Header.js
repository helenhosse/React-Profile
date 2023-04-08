import React from 'react';
import resume from '../assets/portfolio/RESUME.png';
import portfolio from '../assets/portfolio/PORTFOLIO.png';
import contact from '../assets/portfolio/CONTACT.png';
import aboutMe from '../assets/portfolio/ABOUTME.png';


function Header() {
    return (
        <div className="header">
        <div className="navBarDiv">
            <a href="#aboutMe"><img src={aboutMe} id="navBar"/></a>
            <a href="#portfolio"><img src={portfolio} id="navBar"/></a>
            <a href="#resume"><img src={resume} id="navBar"/></a>
            <a href="#contact"><img src={contact} id="navBar"/></a>
        </div></div>
    )
}

// nav bar

export default Header;