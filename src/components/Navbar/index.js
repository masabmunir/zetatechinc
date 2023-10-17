import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
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
                    <NavLink to="/career" activeStyle>
                        Careers
                    </NavLink>
                    <NavLink to="/industries" activeStyle>
                        Industries
                    </NavLink>
                    <NavLink to="/inside" activeStyle>
                        Inside
                    </NavLink>
                    <NavLink to="/service" activeStyle>
                        Service
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>

                    </NavLink>
                     {/*Second Nav*/}
                     {/*<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>*/}
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to="/signin">*/}
                {/*        Sign In*/}
                {/*    </NavBtnLink>*/}
                {/*</NavBtn>*/}

            </Nav>
            {/*<div class="cmp-global-header__search">*/}
            {/*    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />*/}
            {/*</div>*/}


        </>
    );
};

export default Navbar;
