import React from "react";
import Logo from "./logo"; // Import your Logo component
import Search from "./search";
import Navbar from "./index";

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around",backgroundColor:"black"}}>
            <Logo/>
            <Navbar/>
            <Search/>

        </div>
    );
};

export default Header;




