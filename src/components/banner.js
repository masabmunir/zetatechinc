import React from "react";
import '../clientlibs/clientlib-rad.lc-e0f7ea42ea5bb267dace06850c84b864-lc.min.css'

const banner = () => {
    return (
        <>
            <div className="frontpagehero">
                <h1 className="rad-frontpage-hero__heading">Reinvent What Your Business Could Be</h1>
                <a className="rad-frontpage-hero__wrapper-link"
                   href="us-en/insights/consulting/total-enterprise-reinvention.html"
                   title="Let there be change" aria-label="Let there be change" target="_self"
                   data-barba-transition
                   data-cmp-data-layer="{&#34;redesign-home-front-page&#34;:{&#34;@type&#34;:&#34;cio-sites/components/rad/modules/frontpagehero&#34;,&#34;xdm:linkURL&#34;:&#34;/us-en/insights/consulting/total-enterprise-reinvention&#34;,&#34;analytics-engagement&#34;:&#34;true&#34;,&#34;analytics-link-type&#34;:&#34;engagement&#34;,&#34;analytics-link-name&#34;:&#34;Let there be change&#34;,&#34;analytics-module-name&#34;:&#34;frontpagehero-1&#34;,&#34;analytics-template-zone&#34;:&#34;front-page-hero&#34;}}"
                   data-cmp-clickable>
                    <div className="rad-frontpage-hero" id="redesign-home-front-page"
                         data-autoplay-start-frame="0" data-autoplay-end-frame="64"
                         data-hover-start-frame="65" data-hover-end-frame="120"
                         data-animation-for-mobile="/content/dam/accenture/final/images/lottie/Accenture_BuildUp_Mobil_Hover_010_Linear.json"
                         data-animation-for-tablet="/content/dam/accenture/final/images/lottie/Accenture_BuildUp_Tablet_Hover_010_Linear.json"
                         data-animation-for-desktop="/content/dam/accenture/final/images/lottie/Accenture_BuildUp_Desktop_Hover_011_Linear.json">
                        <div className="rad-frontpage-hero__lottie-wrapper"
                             alt="Reinvent What Your Business Could Be"></div>
                    </div>
                </a>
            </div>

        </>
    );
};

export default banner;
