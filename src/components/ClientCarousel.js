import React from 'react';
import {Carousel} from "react-bootstrap";

const ClientCarousel  = () => {

    return(
        <>
            <Carousel className="client-carousel" >
                <Carousel.Item>
                   <img alt="carousel" src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Microsoft-Cloud-Supply-Chain-Control-Tower%3Arad-3x2?ts=1696022647480&dpr=off"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="carousel" src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Barlcays-Generative-AI%3Arad-3x2?ts=1696990328224&dpr=off" />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="carousel" src="https://preview1.assetsadobe.com/is/image/accenture/Cybersecurity-in-orbit-Not-Used%3Arad-3x2?ts=1697180660956&dpr=off"/>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ClientCarousel;
