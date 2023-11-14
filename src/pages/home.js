import React from "react";
import Banner from "../components/banner";
import Radvalue from "../components/radvalue";
import ClientCarousel from "../components/ClientCarousel";
import FloatingCards from "../components/FloatingCards";
import MediaText from "../components/MediaText";
import AccentureNews from "../components/AccentureNews";
import Footer from "../components/footer";
import TileGrid from '../components/tilegrid'
function Home() {

    return <div>
        <Banner/>
        <TileGrid/>
        <Radvalue/>
        <ClientCarousel/>
        <FloatingCards/>
        <MediaText/>
        <AccentureNews/>
        <Footer/>
    </div>;
}

export default Home
