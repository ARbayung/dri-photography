import React from "react";

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
                    <p className="footer-link">INSTAGRAM</p>
                    <p className="footer-link">FACEBOOK</p>
                    <p className="footer-link">CONTACTME</p>
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