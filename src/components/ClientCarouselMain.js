import React, {useEffect, useRef, useState} from 'react';
import Flickity from 'flickity';
import '../styling/clientcarousel.css'
import 'flickity/css/flickity.css';
import '../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';
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
                            <a href="us-en/careers.html" style={{paddingLeft:"20px"}} className="rad-button rad-button--tertiary" data-cmp-clickable
                               data-cmp-data-layer="{&#34;mixedmediatextblock-178a5a195b-joinus-cta&#34;:{&#34;xdm:linkURL&#34;:&#34;/us-en/careers&#34;,&#34;analytics-engagement&#34;:&#34;true&#34;,&#34;analytics-link-type&#34;:&#34;engagement&#34;,&#34;analytics-link-name&#34;:&#34;Join us: null&#34;,&#34;analytics-module-name&#34;:&#34;mixedmediatextblock-1&#34;}}"
                               target="_self" aria-label="Join us" title="Join us">
                                <div className="rad-button__text">Read more</div>
                                <div className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                                     aria-hidden="true"></div>
                            </a>

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
                    <div className="arrow-container">
                        <div  onClick={handlePrev}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div  onClick={handleNext}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>


              </div>
        </div>
    );
};

export default ImageCarousel;
