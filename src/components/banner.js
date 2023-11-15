import React from "react";
import '../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';
// import Data from '../utils/data.json'
import axios from "axios";
import {useState,useEffect} from "react";
// import {useNavigate} from "react-router-dom";
const Banner = () => {
    // const navigate = useNavigate();
    const [banner,setBanner] = useState(null);
    // const [isLoading,setIsLoading] = useState([false]);
    const getBanner = async ()=> {
        try {
            // setIsLoading(true);
            const response = await axios.get("http://localhost:3000/api/banner");
            setBanner(response.data.banner);
            // setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getBanner();
    },[])
    return (
        <>
        <marquee>
            <section className="hero__area-3" style={{display:'inline-flex'}} >
                <div className="row" >
                    <div className="swiper roll__slider2">
                        <div className="swiper-wrapper roll__wrapper">
                            <div className="swiper-slide">
                                <h2 className="rollslide_title-1" >{banner}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </marquee>
        </>
    );
};

export default Banner;
// <h2 className="rollslide_title-1" dangerouslySetInnerHTML={{__html:Data.banner.text}}></h2>