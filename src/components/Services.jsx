import React from 'react';
import stock from './assets/stock.jpg';
import {Link} from 'react-router-dom'

function Services(){
    return(
        <div class="section">
            <div class="section-header">
                <h1 class="section-h1">Services</h1>
                <p>View Packages</p>
            </div>
            <div class="service-container">
                <div class="service">
                    <Link to="/Service">
                        <img src={stock} class="service-img"/>
                    </Link>
                </div>
                <div class="service">
                    <Link to="/Service">
                        <img src={stock} class="service-img"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services;