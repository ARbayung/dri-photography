import React from 'react';
import stock from './assets/stock.jpg';

function Banner(){
    return(
        <div className="banner-container">
            <img src={stock} className="banner-img">
            </img>
            <h1 className="banner-h1">
            Portrait photographer
            seeking to capture  
            identities, expressions,
            & auras of people. 
            </h1>
        </div>
    )
}

export default Banner;