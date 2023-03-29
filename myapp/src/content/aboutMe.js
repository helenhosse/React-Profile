import React from 'react';

import portrait from '../../assets/resumephoto.png';

function AboutMe() {
    return (
        <div id="aboutMe">
            <h1>About Me</h1>
            <div id="contentBox">
            <img src={portrait} id="portrait"/>
        <div id="words">         
                Hey there! My name is Helen, and I am going to update this when I have time!
            </div>   
            </div>
        </div>
    )
}

export default AboutMe;