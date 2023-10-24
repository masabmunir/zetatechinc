import React from "react";
import Logo from "./logo"; // Import your Logo component
import Search from "./search";
import Navbar from "./index";
import '../../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css';
const Header = () => {
    return (
        <div>
            <Logo/>
            <Navbar/>
            <Search/>

        </div>
    );
};

export default Header;




