import React from 'react';

import workScheduler from '../../assets/portfolio/workdayscheduler.png';
import codersCuisine from '../../assets/portfolio/coders-cuisine.png';
import employeeTracker from '../../assets/portfolio/htmlpreview.png';
import readmeGenerator from '../../assets/portfolio/readme-generator-photo.png';
import passwordGen from '../../assets/portfolio/readme-generator-photo.png';
import bookStore from '../../assets/portfolio/project-2.png';

function Portfolio() {

    return (
    <div id="portfolio">
        <h1>Portfolio</h1>
        <div>
            Below you can see some of the recent projects I have been working on!
        </div>
        <div id="contentBox">
            <div class="portBox">

            <div id="portImg"><a href="https://github.com/helenhosse/workdayscheduler.git"><img src={workScheduler} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/annapng/Project1"><img src={codersCuisine} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/helenhosse/Employee-Tracker.git"><img src={employeeTracker} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/helenhosse/README-generator.git"><img src={readmeGenerator} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/helenhosse/password-generator.git"><img src={passwordGen} id="portImg" /></a></div>
                <div id="portImg"><a href="https://github.com/helenhosse/book-store.git"><img src={bookStore} id="portImg" /></a></div>


            </div>


        </div>
    </div>
    )
}

export default Portfolio;