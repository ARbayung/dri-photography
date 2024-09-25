import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import stock from "./assets/img5.jpg";
function Footer(){
    return(
        <footer className="footer-container">
            <hr></hr>
            <div className="footer-section a">
                <div className="footer-box">
                    <h1 className="footer-h1">
                        GET IN TOUCH 
                        WITH 
                        <br></br>
                        DRI PHOTOS.
                    </h1>
                </div>
                <div className="footer-links">
                    <a href="/" className="footer-link">CONTACTME</a>
                    <hr></hr>
                    <a href="/" className="footer-link"><FontAwesomeIcon icon={faInstagram} className="social-button"/></a>
                    <a href="/" className="footer-link"><FontAwesomeIcon icon={faEnvelope} className="social-button"/></a>
                    
                </div>
                <img src={stock}></img>
            </div>
            <div className="footer-section b">
                <div className="footer-box">
                    <p className="footer-txt">Hi. Thankyou for reading all the way though. If you have any 
                        questions, concerns, thoughts, or inquires. Please feel free 
                        to reach out to us. We would love to assist you.
                    </p>
                </div>
                <h1 className="footer-email">
                    contact@portfolio.co.uk
                </h1>
            </div>
            <div className="footer-banner">
                DRIPHOTOGRAPHY
            </div>
        </footer>
    )
}

export default Footer;