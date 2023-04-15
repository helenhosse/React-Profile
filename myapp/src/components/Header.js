import React from 'react';
import resume from '../assets/resumefile/resume.PDF';
import portfolio from '../assets/signitures/PORTFOLIO.png';
import contact from '../assets/signitures/CONTACT.png';
import aboutMe from '../assets/signitures/ABOUTME.png';


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

export default Header;