import React from "react";
import stock from "./assets/img5.jpg";
import igicon from "./assets/icon-ig1.svg";
import mailicon from "./assets/icon-mail.svg";

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
                        DRII FRANCISCO.
                    </h1>
                </div>
                <div className="footer-links">
                    <div>
                        <h3>Contact me</h3>
                        <a href="/" className="footer-link">
                            <img src={igicon} className="social-button"/>
                        </a>
                        <a href="/" className="footer-link">
                            <img src={mailicon} className="social-button"/>
                        </a>
                    </div>
                    <div>
                        <h3>All links to work</h3>
                        <a href="" className="footer-link">
                            <p>portraits & editorial</p>
                        </a>
                        <a href="" className="footer-link">
                            <p>wedding</p>
                        </a>
                        <a href="" className="footer-link">
                            <p>brand work</p>
                        </a>
                        <a href="" className="footer-link">
                            <p>sport</p>
                        </a>
                        <a href="" className="footer-link">
                            <p>corporate</p>
                        </a>
                        <a href="" className="footer-link">
                            <p>product</p>
                        </a>
                    </div>
                </div>
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