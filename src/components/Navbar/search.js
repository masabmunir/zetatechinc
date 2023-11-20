import React, {useState} from "react";
import '../../styling/GlobalHeader.css'
const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = () => {

        console.log("Search query:", searchQuery);

    };

    // const handleKeyDown  = (e) => {
    //     if (e.key === "Enter") {
    //         handleSearch();
    //     }
    // };

    return (
        <>
            <div className="cmp-global-header__utility-nav">

                <div className="cmp-global-header__search">
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Search..."*/}
                    {/*    value={searchQuery}*/}
                    {/*    onChange={(e) => setSearchQuery(e.target.value)}*/}
                    {/*    onKeyDown={handleKeyDown}*/}
                    {/*    aria-label="search-aria"*/}

                    {/*/>*/}
                    <a onClick={handleSearch} data-cmp-clickable aria-label="search-aria" className="cmp-global-header__search" href="http://localhost:3000/about"> </a>
                </div>



                <div className="cmp-global-header__language-container">


                    <button className="cmp-global-header__language-selector" aria-expanded="false"
                            aria-haspopup="listbox" aria-describedby="cmp-global-header__current-country"
                            aria-label="Country and language selector">
                        <span className="current-country-text">USA</span>
                        <span className="icon-down-caret"></span>
                    </button>

                    <p id="cmp-global-header__current-country">Current Country: United States</p>

                    <div className="cmp-global-header__language-options">
                        <span className="arrow-up"></span>
                        <div className="input-group"></div>
                        <div className="country-list">
                            <ul className="cmp-global-header__language-menu" role="menu"
                                aria-labelledby="cmp-global-header__current-country">
                                <li className="default">Default (English)</li>
                                <li className="dropdown-header ucase">All COUNTRIES &amp; LANGUAGES</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Search;
