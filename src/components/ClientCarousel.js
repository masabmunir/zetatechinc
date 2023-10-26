import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const imageArray = [
    'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Barlcays-Generative-AI%3Arad-3x2?ts=1696990328224&dpr=off',
    'https://preview1.assetsadobe.com/is/image/accenture/Cybersecurity-in-orbit-Not-Used%3Arad-3x2?ts=1697180660956&dpr=off',
    'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Father-Daughter-Breakfast-768x768%3Arad-3x2?ts=1697180881534&dpr=off',
     'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Sustainability-Feeding-The-World%3Arad-3x2?ts=1696022628310&dpr=off'
]
const ClientCarousel  = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return(
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            itemClass="carousel-item-padding-40-px"
        >
            {imageArray.map((imageUrl, index) => (
                <div key={index} style={{margin:'20px'}}>
                    <img alt={`image${index + 1}`} src={imageUrl} />
                </div>
            ))}
        </Carousel>
    )
}

export default ClientCarousel;
