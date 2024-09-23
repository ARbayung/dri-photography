import React from "react";
import { useParams } from "react-router-dom";
import data from "./assets/data.json";
import Footer from "./Footer";

function Gallery() {
    // Extract the id parameter from the route
    const { id } = useParams();
  
    // Find the corresponding work based on the id
    const work = data.find((item) => item.id === id);
  
    if (!work) {
      return <p>Work not found</p>;
    }
  
    return (
            <div>
                <h1 className="gallery-title">{work.title}</h1>
                <div className="gallery-container">
                    <div className="gallery-images">
                    {work.images.map((image, index) => (
                        <img key={index} 
                        src={image.img} 
                        alt={work.title} 
                        className="gallery-img zoom" />
                    ))}
                    </div>
                </div>
                <Footer />
            </div>
    );
  }
  
  export default Gallery;