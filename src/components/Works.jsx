import React from "react";
import {Outlet, Link} from "react-router-dom";
import data from "./assets/data.json";

function Works(){
    return(
        <div className="section">
            <div className="section-header">
                <h1 className="section-h1">Select Works</h1>
                <Link to="/Projects"><p>View Work</p></Link>
            </div>
            <div className="work-container">
                    {
                        data.map( data => {
                            return(
                                <div className="work" key={data.id}>
                                    <Link to={`/Works/${data.id}`}>
                                    <img 
                                        className="work-img"
                                        src={data.src} 
                                        alt="img"
                                    />
                                    </Link>
                                    <h3 className="Section-h3">{data.title}</h3>
                                </div>
                            )
                        })
                    }
            </div>
            <Outlet/>
        </div>
    )
}

export default Works;