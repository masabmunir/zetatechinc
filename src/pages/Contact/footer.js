import React from 'react'

const footer = ()=>{
    return(
        <>
            <footer className="footer__area">
                <div className="footer__top">
                    <div className="container footer-line"></div>
                </div>

                <div className="footer__btm">
                    <div className="container">
                        <div className="row footer__row">
                            <div className="col-xxl-12">
                                <div className="footer__inner">
                                    <div className="footer__widget">
                                        <img className="footer__logo" src="/assets/images/logo.svg"
                                             alt="Footer Logo"/>
                                        <p>When do they work well, and when do they on us and finally, when do we
                                            actually need how can we
                                            avoid
                                            them.</p>
                                        <ul className="footer__social">
                                            <li><a href="#"><span><i className="fa-brands fa-facebook-f"></i></span></a>
                                            </li>
                                            <li><a href="#"><span><i
                                                className="fa-brands fa-twitter"></i></span></a></li>
                                            <li><a href="#"><span><i className="fa-brands fa-instagram"></i></span></a>
                                            </li>
                                            <li><a href="#"><span><i
                                                className="fa-brands fa-linkedin"></i></span></a></li>
                                        </ul>
                                    </div>

                                    <div className="footer__widget-2">
                                        <h2 className="footer__widget-title">Information</h2>
                                        <ul className="footer__link">
                                            <li><a href="about.html">About Company</a></li>
                                            <li><a href="portfolio.html">Case Study</a></li>
                                            <li><a href="career.html">Career</a></li>
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </div>

                                    <div className="footer__widget-3">
                                        <h2 className="footer__widget-title">Contact Us</h2>
                                        <ul className="footer__contact">
                                            <li>Valentin, Street Road 24, New York, USA - 67452</li>
                                            <li><a href="tel:02574328301" className="phone">+02) 574 - 328 - 301 </a>
                                            </li>
                                            <li><a href="mailto:info@buildyexample.com">info@buildyexample.com</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer;
