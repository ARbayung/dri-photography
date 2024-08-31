import React from 'react';
import stock from './assets/stock.jpg'

function Services(){
    return(
        <div class="section">
            <div class="section-header">
                <h1 class="section-h1">Services</h1>
                <p>View Packages</p>
            </div>
            <div class="service-container">
                <div class="service">
                    <a>
                        <img src={stock} class="service-img"/>
                    </a>
                </div>
                <div class="service">
                    <a>
                        <img src={stock} class="service-img"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services;