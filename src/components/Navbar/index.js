import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./NavbarElement";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/career" activestyle="true">
                        Careers
                    </NavLink>
                    <NavLink to="/industries" activestyle="true">
                        Industries
                    </NavLink>
                    <NavLink to="/inside" activestyle="true">
                        Inside
                    </NavLink>
                    <NavLink to="/service" activestyle="true">
                        Service
                    </NavLink>
                    <NavLink to="/sign-up" activestyle="true">

                    </NavLink>

                </NavMenu>

            </Nav>



        </>
    );
};

export default Navbar;
