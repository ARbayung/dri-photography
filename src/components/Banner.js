import react from 'react';
import stock from './assets/stock.jpg';

function Banner(){
    return(
        <div class="banner-container">
            <img src={stock} class="banner-img">
            </img>
            <h1 class="banner-h1">
            Portrait photographer
            seeking to capture  
            identities, expressions,
            & auras of people. 
            </h1>
        </div>
    )
}

export default Banner;