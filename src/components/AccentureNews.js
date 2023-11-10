import React from 'react';
import '../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';
import Data from '../utils/data.json';


const Accenture = () => {
    return (
        <div className="rad-news rad-spacing-vertical-md">
            <div>
                <div className="rad-news-header">Accenture news</div>
                <marquee>
                    <div className="rad-news-carousel rad-news-slideshow" id="news-f8be55a909-items" tabIndex="-1">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="rad-news-carousel-cell">
                                <a
                                    className="rad-news-card"
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
            </div>
        </div>
    );
};

export default Accenture;
