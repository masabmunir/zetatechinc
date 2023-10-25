import React from 'react';
import '../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';

const Accenture = () => {
    return (
        <div className="rad-news rad-spacing-vertical-md">
            <div
                id="news-f8be55a909"
                className="rad-news-container"
                data-placeholder-text="false"
                data-cmp-delay="5000"
                data-play-button-datalayer="{...}"
                data-pause-button-datalayer="{...}"
                data-carousel-indicator-datalayer="{...}"
                data-cmp-data-layer="{...}"
            >
                <div className="rad-news-header">Accenture news</div>
                {/*<button className="rad-icon-button rad-news-play-pause rad-carousel--six-plus-cells__hidden">*/}
                {/*    <div className="rad-icon-button__text">Pause</div>*/}
                {/*    <div className="rad-icon rad-icon__pause-default" aria-hidden="true"></div>*/}
                {/*</button>*/}
                <marquee>
                <div className="rad-news-carousel rad-news-slideshow" id="news-f8be55a909-items" tabIndex="-1">
                    {[...Array(3)].map((_, index) => (
                        <div className="rad-news-carousel-cell" key={index}>
                            <a
                                className="rad-news-card"
                                href="https://newsroom.accenture.com/news/accenture-reports-fourth-quarter-and-strong-full-year-fiscal-2023-results.htm"
                                target="_blank"
                                rel="noreferrer"
                                title="Accenture Reports Fourth-Quarter and Strong Full-Year Fiscal 2023 Results"
                            >
                                <p className="rad-news-eyebrow">2023 September {28 - index * 10}</p>
                                <h3 className="rad-news-title" data-cmp-clickable data-cmp-data-layer="{...}">
                                    Accenture Reports Fourth-Quarter and Strong<br /> Full-Year Fiscal 2023 Results
                                </h3>
                            </a>
                        </div>
                    ))}
                </div>
                </marquee>
                <div className="rad__range-input-slider-container rad-carousel--six-plus-cells__only">
                    <input
                        className="rad__range-input-slider-for-carousel"
                        max="500"
                        min="0"
                        aria-label="carousel slider"
                        defaultValue="1"
                        type="range"
                    />
                </div>
            </div>
        </div>
    );
};

export default Accenture;
