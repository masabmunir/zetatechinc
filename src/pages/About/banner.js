import React from "react";

const banner =  ()=>{
    return(
        <>
            <div className="row">
                <div className="col-xxl-12">
                    <div className="hero__about-content">
                        <h1 className="hero-title animation__word_come">We’re a full-service creative and digital agency, working globally with the largest brands.</h1>
                        <div className="hero__about-info">
                            <div className="hero__about-btn">
                                <div className="btn_wrapper">
                                    <a href="localhost:3000" className="wc-btn-primary btn-hover btn-item">
                                        <span></span> Trends & <br /> Technology
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="hero__about-text title-anim">
                                <p>Think of the world's most iconic and successful brands easily findable, impactful. Interactional and exceptional designs. Our story takes beginning in 2013</p>
                            </div>
                            <div className="hero__about-award">
                                <img src="/assets/images/award.png" alt="Best Studio Award"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default banner;
