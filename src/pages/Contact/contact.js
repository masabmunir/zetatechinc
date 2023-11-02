import React from "react";
import Heading from './heading'
import Contactinfo from "./contactinfo";
import Formarea from "./formarea";
import Footer from "./footer";
const Contact = () => {
    return (
        <>
            <section className="contact__area-6">
                <div className="container g-0 line pt-120 pb-110">
                    <Heading/>
                    <div className="row contact__btm">
                      <Contactinfo/>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                            <div className="contact__form">
                                <Formarea/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Contact;
