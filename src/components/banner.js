import React from "react";
import '../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';
import Data from '../utils/data.json'
const banner = () => {
    return (
        <>
        <marquee>
            <section className="hero__area-3" style={{display:'inline-flex'}} >
                <div className="row" >
                    <div className="swiper roll__slider2">
                        <div className="swiper-wrapper roll__wrapper">
                            <div className="swiper-slide">
                                <h2 className="rollslide_title-1" dangerouslySetInnerHTML={{__html:Data.banner.text}}></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </marquee>
        </>
    );
};

export default banner;
