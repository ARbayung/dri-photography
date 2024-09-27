import React from "react";

function Contact(){
    return(
        <div className="contact-wrapper">
            <div className="contact-services">
                <div>
                    <h1>Services.</h1>
                    <hr></hr>
                    <div>
                        <h2>Videography</h2>
                        <p>Create seemless videos</p>
                    </div>
                    <div>
                        <h2>Videography</h2>
                        <p>Create seemless videos</p>
                    </div>
                    <div>
                        <h2>Videography</h2>
                        <p>Create seemless videos</p>
                    </div>
                </div>
                <div className="contact-social">
                    <p>Social</p>
                    <p>Social</p>
                </div>
            </div>
            <div className="contact-container">
                <div className="form-wrapper">
                <h1>Got a project? Shoot us a message.</h1>
                <h2>Tell us more about yourself and what you've got in mind.</h2>
                <div class="form-top">
                <input type="text" className="contact-input" placeholder="Your name"/>
                <input type="text" className="contact-input" placeholder="you@company.com"/>
                </div>
                <textarea className="contact-textarea" placeholder="Tell us a little about your project..."></textarea>
                <button type="submit" className="contact-button">Lets go!</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;