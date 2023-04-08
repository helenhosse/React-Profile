import React from 'react';

import Resume from '../assets/resumefile/resume.PDF';

function resumeFile() {
    return (
        <div id="resume">
            <h1>Resume</h1>
            <div id="contentBox">
                You can view my resume below! Very dated, will update when I have more time!

                <form method="get" action="assets\resume.pdf">
                    <br></br>
            <button class="download">Download</button> </form>
            </div>
        </div>
    )
}

export default resumeFile;