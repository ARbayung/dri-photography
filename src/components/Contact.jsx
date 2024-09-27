import React from "react";
import iconig from "./assets/icon-ig1.svg";
import iconphone from "./assets/icon-phone.svg";
import iconmail from "./assets/icon-mail.svg";
import iconfilm from "./assets/icon-film.svg";
import iconfilmedit from "./assets/icon-videoedit.svg";
import iconportrait from "./assets/icon-portrait.svg";
import iconsport from "./assets/icon-sports.svg";


function Contact(){
    return(
        <div className="contact-wrapper">
            <div className="contact-services">
                <div>
                    <h1>Services.</h1>
                    <hr></hr>
                    <div class="contact-services-container">
                        <img src={iconfilm} alt="film" className="contact-icon"/>
                        <div>
                            <h2>Videography</h2>
                        </div>
                    </div>
                    <div class="contact-services-container">
                        <img src={iconfilmedit} alt="film" className="contact-icon"/>
                        <div>
                            <h2>Video edits</h2>
                        </div>
                    </div>
                    <div class="contact-services-container">
                        <img src={iconportrait} alt="film" className="contact-icon"/>
                        <div>
                            <h2>Professional portraits</h2>
                        </div>
                    </div>
                    <div class="contact-services-container">
                        <img src={iconsport} alt="film" className="contact-icon"/>
                        <div>
                            <h2>Sports and Fitness</h2>
                        </div>
                    </div>
                
                </div>
                <div className="contact-social">
                    <a href="https://www.instagram.com/driifrancisco/">
                        <img src={iconig} alt="instagram" className="contact-icon"/>
                    </a>
                    <a href="mailto:driifrancisco.filmphoto@gmail.com">
                        <img src={iconmail} alt="mail" className="contact-icon"/>
                    </a>
                    <a href="“tel:+44871703694”">
                        <img src={iconphone} alt="mail" className="contact-icon"/>
                    </a>
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