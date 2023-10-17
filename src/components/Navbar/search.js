import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const containerStyle = {
        display: "flex",
        marginTop:"1rem"
    };

    const iconStyle = {
        color: "white",
        fontSize: "2rem",
        marginRight: "3rem",
    };

    return (
        <div style={containerStyle}>
            <a href="#" style={iconStyle}>
                <FontAwesomeIcon icon={faSearch} />
            </a>

            <a href="#" style={iconStyle}>
                <FontAwesomeIcon icon={faGlobe} />
            </a>
        </div>
    );
};

export default Search;
