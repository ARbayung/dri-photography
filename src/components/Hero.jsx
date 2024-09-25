import React from 'react';
import LandingVideo from './assets/Sample.mp4'
import BoxReveal from './magicui/BoxReveal.tsx';

function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-top">
                <BoxReveal boxColor={"white"} duration={0.5}>
                    <p>Visual Storyteller / Content Creator / Dynamic Videographer</p>
                </BoxReveal>
                <BoxReveal boxColor={"white"} duration={0.5}>
                    <h1>Lets work together for beautiful results.</h1>
                </BoxReveal>
                <BoxReveal boxColor={"white"} duration={0.5}>
                    <button type="hero-button" className="hero-button">explore</button>
                </BoxReveal>
            </div>
            <div className="hero-bottom">
                <h2>Expert in high 
                    <br></br>
                    quality photography
                </h2>
                <p>Explore</p>
            </div>
            <video className="hero-video" autoPlay muted loop playsInline preload="auto">
            <source src={LandingVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default Hero;