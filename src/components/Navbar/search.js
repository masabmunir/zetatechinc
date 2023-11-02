import React, {useState} from "react";
import '../../clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css'
import '../../styling/GlobalHeader.css'
const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = () => {

        console.log("Search query:", searchQuery);
        // You can redirect to the search page or perform an API call, etc.
    };
    return (
        <>
            <div className="cmp-global-header__utility-nav">

                <div className="cmp-global-header__search">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="search-aria"
                    />
                    <a onClick={handleSearch} data-cmp-clickable aria-label="search-aria" className="cmp-global-header__search" > </a>
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
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item1-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ar-es&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Argentina (Spanish)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ar-es.html" role="menuitem" aria-label="Argentina (Spanish)"*/}
                                {/*       data-cmp-clickable>Argentina (Spanish)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item2-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/au-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Australia (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="au-en.html" role="menuitem" aria-label="Australia (English)"*/}
                                {/*       data-cmp-clickable>Australia (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item3-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/at-de&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Austria (German)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="at-de.html" role="menuitem" aria-label="Austria (German)"*/}
                                {/*       data-cmp-clickable>Austria (German)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item4-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/be-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Belgium (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="be-en.html" role="menuitem" aria-label="Belgium (English)"*/}
                                {/*       data-cmp-clickable>Belgium (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item5-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/br-pt&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Brazil (Portuguese)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="br-pt.html" role="menuitem" aria-label="Brazil (Portuguese)"*/}
                                {/*       data-cmp-clickable>Brazil (Portuguese)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item6-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/bg-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Bulgaria (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="bg-en.html" role="menuitem" aria-label="Bulgaria (English)"*/}
                                {/*       data-cmp-clickable>Bulgaria (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item7-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ca-fr&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Canada (French)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ca-fr.html" role="menuitem" aria-label="Canada (French)"*/}
                                {/*       data-cmp-clickable>Canada (French)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item8-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ca-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Canada (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ca-en.html" role="menuitem" aria-label="Canada (English)"*/}
                                {/*       data-cmp-clickable>Canada (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item9-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/cl-es&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Chile (Spanish)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="cl-es.html" role="menuitem" aria-label="Chile (Spanish)"*/}
                                {/*       data-cmp-clickable>Chile (Spanish)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item10-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/hk-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;China/Hong Kong SAR (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="hk-en.html" role="menuitem" aria-label="China/Hong Kong SAR (English)"*/}
                                {/*       data-cmp-clickable>China/Hong Kong SAR (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item11-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;https://www.accenture.cn/cn-zh&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;China/Mainland (Chinese)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="https://www.accenture.cn/cn-zh" role="menuitem"*/}
                                {/*       aria-label="China/Mainland (Chinese)" data-cmp-clickable>China/Mainland*/}
                                {/*        (Chinese)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item12-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/cn-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;China/Mainland (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="cn-en.html" role="menuitem" aria-label="China/Mainland (English)"*/}
                                {/*       data-cmp-clickable>China/Mainland (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item13-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/co-es&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Colombia (Spanish)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="co-es.html" role="menuitem" aria-label="Colombia (Spanish)"*/}
                                {/*       data-cmp-clickable>Colombia (Spanish)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item14-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/cr-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Costa Rica (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="cr-en.html" role="menuitem" aria-label="Costa Rica (English)"*/}
                                {/*       data-cmp-clickable>Costa Rica (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item15-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/cz-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Czech Republic (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="cz-en.html" role="menuitem" aria-label="Czech Republic (English)"*/}
                                {/*       data-cmp-clickable>Czech Republic (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item16-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/dk-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Denmark (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="dk-en.html" role="menuitem" aria-label="Denmark (English)"*/}
                                {/*       data-cmp-clickable>Denmark (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item18-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/fi-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Finland (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="fi-en.html" role="menuitem" aria-label="Finland (English)"*/}
                                {/*       data-cmp-clickable>Finland (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item19-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/fr-fr&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;France (French)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="fr-fr.html" role="menuitem" aria-label="France (French)"*/}
                                {/*       data-cmp-clickable>France (French)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item20-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/de-de&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Germany (German)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="de-de.html" role="menuitem" aria-label="Germany (German)"*/}
                                {/*       data-cmp-clickable>Germany (German)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item21-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/gr-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Greece (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="gr-en.html" role="menuitem" aria-label="Greece (English)"*/}
                                {/*       data-cmp-clickable>Greece (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item22-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/hu-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Hungary (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="hu-en.html" role="menuitem" aria-label="Hungary (English)"*/}
                                {/*       data-cmp-clickable>Hungary (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item23-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/in-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;India (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="in-en.html" role="menuitem" aria-label="India (English)"*/}
                                {/*       data-cmp-clickable>India (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item24-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/id-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Indonesia (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="id-en.html" role="menuitem" aria-label="Indonesia (English)"*/}
                                {/*       data-cmp-clickable>Indonesia (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item25-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ie-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Ireland (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ie-en.html" role="menuitem" aria-label="Ireland (English)"*/}
                                {/*       data-cmp-clickable>Ireland (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item26-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/il-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Israel (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="il-en.html" role="menuitem" aria-label="Israel (English)"*/}
                                {/*       data-cmp-clickable>Israel (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item27-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/it-it&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Italy (Italian)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="it-it.html" role="menuitem" aria-label="Italy (Italian)"*/}
                                {/*       data-cmp-clickable>Italy (Italian)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item28-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/jp-ja&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Japan (Japanese)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="jp-ja.html" role="menuitem" aria-label="Japan (Japanese)"*/}
                                {/*       data-cmp-clickable>Japan (Japanese)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item30-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/lv-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Latvia (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="lv-en.html" role="menuitem" aria-label="Latvia (English)"*/}
                                {/*       data-cmp-clickable>Latvia (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item32-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/lu-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Luxembourg (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="lu-en.html" role="menuitem" aria-label="Luxembourg (English)"*/}
                                {/*       data-cmp-clickable>Luxembourg (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item33-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/my-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Malaysia (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="my-en.html" role="menuitem" aria-label="Malaysia (English)"*/}
                                {/*       data-cmp-clickable>Malaysia (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item34-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/mu-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Mauritius (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="mu-en.html" role="menuitem" aria-label="Mauritius (English)"*/}
                                {/*       data-cmp-clickable>Mauritius (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item35-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/mx-es&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Mexico (Spanish)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="mx-es.html" role="menuitem" aria-label="Mexico (Spanish)"*/}
                                {/*       data-cmp-clickable>Mexico (Spanish)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item36-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ma-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Morocco (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ma-en.html" role="menuitem" aria-label="Morocco (English)"*/}
                                {/*       data-cmp-clickable>Morocco (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item38-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/nl-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Netherlands (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="nl-en.html" role="menuitem" aria-label="Netherlands (English)"*/}
                                {/*       data-cmp-clickable>Netherlands (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item39-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/nz-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;New Zealand (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="nz-en.html" role="menuitem" aria-label="New Zealand (English)"*/}
                                {/*       data-cmp-clickable>New Zealand (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item40-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/no-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Norway (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="no-en.html" role="menuitem" aria-label="Norway (English)"*/}
                                {/*       data-cmp-clickable>Norway (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item41-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ph-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Philippines (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ph-en.html" role="menuitem" aria-label="Philippines (English)"*/}
                                {/*       data-cmp-clickable>Philippines (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item42-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/pl-pl&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Poland (Polish)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="pl-pl.html" role="menuitem" aria-label="Poland (Polish)"*/}
                                {/*       data-cmp-clickable>Poland (Polish)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item44-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/pt-pt&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Portugal (Portuguese)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="pt-pt.html" role="menuitem" aria-label="Portugal (Portuguese)"*/}
                                {/*       data-cmp-clickable>Portugal (Portuguese)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item46-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ro-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Romania (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ro-en.html" role="menuitem" aria-label="Romania (English)"*/}
                                {/*       data-cmp-clickable>Romania (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item47-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/sa-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Saudi Arabia (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="sa-en.html" role="menuitem" aria-label="Saudi Arabia (English)"*/}
                                {/*       data-cmp-clickable>Saudi Arabia (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item49-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/sg-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Singapore (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="sg-en.html" role="menuitem" aria-label="Singapore (English)"*/}
                                {/*       data-cmp-clickable>Singapore (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item51-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/sk-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Slovakia (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="sk-en.html" role="menuitem" aria-label="Slovakia (English)"*/}
                                {/*       data-cmp-clickable>Slovakia (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item52-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/za-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;South Africa (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="za-en.html" role="menuitem" aria-label="South Africa (English)"*/}
                                {/*       data-cmp-clickable>South Africa (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item53-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/es-es&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Spain (Spanish)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="es-es.html" role="menuitem" aria-label="Spain (Spanish)"*/}
                                {/*       data-cmp-clickable>Spain (Spanish)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item55-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/se-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Sweden (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="se-en.html" role="menuitem" aria-label="Sweden (English)"*/}
                                {/*       data-cmp-clickable>Sweden (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item56-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ch-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Switzerland (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ch-en.html" role="menuitem" aria-label="Switzerland (English)"*/}
                                {/*       data-cmp-clickable>Switzerland (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item58-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/th-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;Thailand (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="th-en.html" role="menuitem" aria-label="Thailand (English)"*/}
                                {/*       data-cmp-clickable>Thailand (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item60-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/ae-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;UAE (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="ae-en.html" role="menuitem" aria-label="UAE (English)" data-cmp-clickable>UAE*/}
                                {/*        (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item61-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/gb-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;United Kingdom (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="gb-en.html" role="menuitem" aria-label="United Kingdom (English)"*/}
                                {/*       data-cmp-clickable>United Kingdom (English)</a>*/}
                                {/*</li>*/}
                                {/*<li role="none"*/}
                                {/*    data-cmp-data-layer="{&#34;globalheader-sitelinks-item62-235de0112d&#34;:{&#34;xdm:linkURL&#34;:&#34;/us-en&#34;,&#34;analytics-engagement&#34;:&#34;false&#34;,&#34;analytics-link-type&#34;:&#34;language&#34;,&#34;analytics-link-name&#34;:&#34;USA (English)&#34;,&#34;analytics-module-name&#34;:&#34;top nav&#34;}}">*/}
                                {/*    <a href="us-en.html" role="menuitem" aria-label="USA (English)" data-cmp-clickable>USA*/}
                                {/*        (English)</a>*/}
                                {/*</li>*/}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Search;
