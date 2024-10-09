import React from "react";
import { useParams } from "react-router-dom";
import data from "./assets/data.json";
import BlurFade from "./magicui/BlurFade.tsx";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Gallery() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const { id } = useParams();
  
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
                        <BlurFade key={image} delay={0.25 + index * 0.2} inView>
                        <img key={index} 
                        src={image.img} 
                        alt={work.title} 
                        className="gallery-img" />
                        </BlurFade>
                    ))}
                    </div>
                </div>
            </div>
    );
  }
  
  export default Gallery;