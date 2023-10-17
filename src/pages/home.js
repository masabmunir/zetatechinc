import React from "react";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import About from "./about";
import Industries from "./industries";
import Inside from "./inside";
import Services from "./service";
import Navbar from "../components/Navbar";
import Career from "./careers";
import Header from "../components/Navbar/header";

function Home() {

    return <div>Home
    </div>;
}

function Nav() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Career />} />
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
                {/*<Route*/}
                {/*    path="/sign-up"*/}
                {/*    element={<SignUp />}*/}
                {/*/>*/}
            </Routes>
        </Router>
    );
}

export default Nav;
