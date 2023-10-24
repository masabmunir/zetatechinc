import React from "react";
import Logo from "./logo"; // Import your Logo component
import Search from "./search";
import Navbar from "./index";
const Header = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>

            <Logo/>
            <Navbar/>
            <Search/>

        </div>
    );
};

export default Header;




