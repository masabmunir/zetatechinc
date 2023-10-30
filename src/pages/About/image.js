import React from "react";


const images = ()=>{
    return(
        <>
            <section className="story__area">
                <div className="container g-0 line pt-140">
                    <span className="line-3"></span>

                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                            <div className="story__img-wrapper">
                                <img src="assets/images/1.jpg" alt="Story Thumbnail" className="w-100"/>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                            <div className="story__img-wrapper img-anim">
                                <img src="assets/images/2.jpg" alt="Story Thumbnail" data-speed="auto" />
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                            <div className="story__img-wrapper">
                                <img src="assets/images/3.jpg" alt="Story Thumbnail"/>
                                <img src="assets/images/4.jpg" alt="Story Thumbnail"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default images;
