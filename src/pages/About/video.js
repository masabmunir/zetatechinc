import React from "react";


const video = ()=>{
    return(
        <>
            <div className="row hero__about-row">
                <div className="col-xxl-12">
                    <div className="hero__about-video">
                        <video loop muted autoPlay playsInline>
                            <source src="assets/video/video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default video;
