import React, {useEffect, useRef, useState} from 'react';
import Flickity from 'flickity';
import '../styling/clientcarousel.css'
import 'flickity/css/flickity.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [playPause,setPlayPause] = useState(true);

    useEffect(() => {
        const flickityOptions = {
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            pageDots: false, // Disable default dots
        };
        const flickityInstance = new Flickity(carouselRef.current, flickityOptions);

        carouselRef.current.flickity = flickityInstance;

        return () => {
            flickityInstance.destroy();
        };
    }, []);

    const handlePrev = () => {
        carouselRef.current.flickity.previous();
    };

    const handlePlayPause = () => {
        // Move to the previous slide
        if(playPause){
            carouselRef.current.flickity.pausePlayer();
        }else{
            carouselRef.current.flickity.playPlayer();
        }
       setPlayPause((prev)=>!prev)
    };

    const handleNext = () => {
        // Move to the next slide
        carouselRef.current.flickity.next();
    };

    // Render the carousel with images and text content
    return (
        <div className="carousel-container">
            <div className="carousel" style={{width: "100%"}} ref={carouselRef}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-cell" style={{width: "100%", display: "flex", alignItems: "center"}}>
                        <img style={{maxWidth: "100%", height: "48vh"}} src={image.image} alt={`Image ${index + 1}`} />
                        <div className="text-content">
                            <h2 style={{marginLeft:'1rem',fontWeight:"bold"}}>{image.title}</h2>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

                <div className="carousel-controls">

                    <button onClick={handlePlayPause}>
                        {playPause ? (
                            <FontAwesomeIcon icon={faPause} style={{ color: 'white' }} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} />
                        )}
                    </button>

                    <div className="arrow-container left" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="arrow-container right" onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

              </div>
        </div>
    );
};

export default ImageCarousel;
