import React, {useEffect, useState} from "react";
const Testimonial = ()=>{
    const testimonials = [
        // Add more testimonial objects as needed
        {
            title: 'Amazing digital service',
            text: 'We were there right at the beginning just when the concept for search engine optimisation...',
            author: 'Adam Syndera',
            role: 'CEO, Agency',
        },
        {
            title: '2nd',
            text: 'We were there right at the beginning just when the concept for search engine optimisation...',
            author: 'Adam Syndera',
            role: 'CEO, Agency',
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
    };




    return(
        <>
            <div className="container g-0 line pb-140">
                <span className="line-3"></span>

                <div className="row g-0">
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                        <div className="testimonial__video">
                            <video autoPlay muted loop>
                                <source src="assets/video/testimonial.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide testimonial__slide">
                                    <div className="testimonial__inner-2">
                                        <h2 className="testimonial__title-2">{testimonials[currentSlide].title}</h2>
                                        <p className="testimonial__text-2">{testimonials[currentSlide].text}</p>
                                        <h3 className="testimonial__author">{testimonials[currentSlide].author}</h3>
                                        <h4 className="testimonial__role">{testimonials[currentSlide].role}</h4>
                                    </div>
                                </div>
                                {/* Add more slides as needed */}
                            </div>

                            <div className="swiper-button-prev" onClick={handlePrev} style={{backgroundColor: "red"}}>Prev</div>
                            <div className="swiper-button-next" onClick={handleNext} style={{backgroundColor: "red"}}>Next</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Testimonial;
