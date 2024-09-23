import React from 'react';
import LandingVideo from './assets/Sample.mp4'
// import BoxReveal from './magicui/BoxReveal';

function Hero(){
    return(
        <div className="hero-container">
            <video class="hero-video" autoPlay muted loop>
            <source src={LandingVideo} type="video/mp4" />
            <div className="hero-top">
                <h1>Lets work together for beautiful results.</h1>
                <button type="hero-button" className="hero-button">explore</button>
            </div>
            <div className="hero-bottom">
                <h2>Expert in high 
                    <br></br>
                    quality photography
                </h2>
                <p>Explore</p>
            </div>
            </video>
        </div>
    )
}

export default Hero;