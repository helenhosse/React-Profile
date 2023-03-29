import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <div id="contentBox">
            Feel free to contact me here!
            <div id="contentBox"></div>
            <form>
            <p>
                <label>Name: <input required type="text" /></label>
            </p>
            <p>
                <label>Email: <input required type="email" /></label>
            </p>
            <p>
                <label>Message: </label>
                <textarea required id="message" cols="50" rows="4"/>
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>

            </form></div>

            </div>

    )
}

export default Contact;