import React from 'react';
import stock from './assets/stock.jpg';
import {Link} from 'react-router-dom';

function Services(){
    return(
        <div className="section">
            <div className="section-header">
                <h1 className="section-h1">Services</h1>
                <p>View Packages</p>
            </div>
            <div className="service-container">
                <div className="service">
                    <Link to="/Service">
                        <img src={stock} className="service-img"/>
                    </Link>
                </div>
                <div className="service">
                    <Link to="/Service">
                        <img src={stock} className="service-img"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services;