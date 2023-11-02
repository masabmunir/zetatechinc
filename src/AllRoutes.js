import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Navbar/header";
import Career from "./pages/careers";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Inside from "./pages/inside";
import Services from "./pages/service";
import Home from "./pages/home";

function AllRoutes() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Career />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/inside"
                    element={<Inside />}
                />
                <Route path="/service" element={<Services />} />

            </Routes>
        </Router>
    );
}

export default AllRoutes;
