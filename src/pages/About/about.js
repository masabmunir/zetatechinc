import React from "react";
import Banner from './banner'
import Video from './video'
import Story from './story'
import Images from './image'
import ProjectDetails from './projdetail'
import Testimonial from "./testimonial";
import CTA from './cta'
import Footer from "./footer";
const About = () => {
    return (
        <>
            <section className="hero__about">
                <div className="container g-0 line">
                    <span className="line-3"></span>
                    <Banner/>
                    <Video/>
                </div>
            </section>

            <section className="story__area">
                <div className="container g-0 line pt-140">
                   <Story/>
                   <Images/>
                </div>
            </section>


            <section className="counter__area">
                <div className="container g-0 line pb-140 pt-140">
                   <ProjectDetails/>
                </div>
            </section>

            <section className="testimonial__area-2">
                <Testimonial/>
            </section>

            <section className="cta__area">
                <div className="container line pb-110 dark-p">
                    <div className="line-3"></div>
                    <CTA/>
                </div>
            </section>

            <Footer/>

        </>
    );
};

export default About;
