import React from "react";
import stock from "./assets/stock.jpg"

function Works(){
    return(
        <div class="section">
            <div class="section-header">
                <h1 class="section-h1">Select Works</h1>
                <p>View Work</p>
            </div>
            <div class="work-container">
                <div class="work">
                    <a><img src={stock} class="work-img"/></a>
                    <h3 class="section-h3">Street</h3>
                </div>
                <div class="work">
                    <a><img src={stock} class="work-img"/></a>
                    <h3 class="section-h3">Wedding</h3>
                </div>
                <div class="work">
                    <a><img src={stock} class="work-img"/></a>
                    <h3 class="section-h3">Commercial</h3>
                </div>
            </div>
        </div>
    )
}

export default Works;