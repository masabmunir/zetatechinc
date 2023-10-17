import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import About from "./about";
import Careers from "./careers";
import Industries from "./industries";
import Inside from "./inside";
import Services from "./service";
import Navbar from "../components/Navbar";

function Home() {

    return <div>

        <Router>
            <Navbar/>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route
                path="/industries"
                element={<Industries />}
            />
            <Route
                path="/inside"
                element={<Inside />}
            />
            <Route path="/service" element={<Services />} />

           </Routes>
        </Router>
    </div>
}


export default Home;
